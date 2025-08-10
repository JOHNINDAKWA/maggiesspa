import React, { useState, useMemo } from "react";
import "./RescheduleModal.css";

const RescheduleModal = ({ currentDate, currentTime, onClose, onSave }) => {
  // Parse whatever comes in and normalize to two 12h strings
  const initialTimes = useMemo(() => normalizeRange(currentTime), [currentTime]);

  const [date, setDate] = useState(currentDate || "");
  const [startTime, setStartTime] = useState(initialTimes.start); // 12h like "10:00 AM"
  const [endTime, setEndTime] = useState(initialTimes.end);       // 12h like "11:30 AM"
  const [error, setError] = useState("");

  const handleSubmit = () => {
    setError("");
    const startMin = minutesFrom12h(startTime);
    const endMin = minutesFrom12h(endTime);

    // Basic sanity check
    if (startMin === null || endMin === null) {
      setError("Please provide valid start and end times.");
      return;
    }
    if (endMin <= startMin) {
      setError("End time must be after start time.");
      return;
    }

    const formattedTime = `${startTime}, ${endTime}`; // keep same format your app expects
    onSave(date, formattedTime);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Reschedule Appointment</h3>

        <label>
          New Date:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>

        <label>
          Start Time:
          <input
            type="time"
            value={convertTo24(startTime)} // input expects 24h
            onChange={(e) => setStartTime(convertTo12(e.target.value))} // store as 12h
          />
        </label>

        <label>
          End Time:
          <input
            type="time"
            value={convertTo24(endTime)}
            onChange={(e) => setEndTime(convertTo12(e.target.value))}
          />
        </label>

        {error && <p className="error-text" style={{marginTop: 8}}>{error}</p>}

        <div className="modal-actions">
          <button onClick={handleSubmit}>Save</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

/* ---------- helpers ---------- */

// Accepts a bunch of shapes and returns two 12h strings (with AM/PM).
function normalizeRange(value) {
  // Defaults if nothing valid found
  const fallback = { start: "10:00 AM", end: "11:00 AM" };

  if (typeof value !== "string") return fallback;

  // First, try to find 12h times with AM/PM (robust to spaces/dashes)
  const t12 = value.match(/\b(\d{1,2}:\d{2}\s*[AP]M)\b/gi);
  if (t12 && t12.length >= 2) {
    return {
      start: normalize12h(t12[0]),
      end: normalize12h(t12[1]),
    };
  }

  // Then try plain 24h times
  const t24 = value.match(/\b(\d{2}:\d{2})\b/g);
  if (t24 && t24.length >= 2) {
    return {
      start: convertTo12(t24[0]),
      end: convertTo12(t24[1]),
    };
  }

  // Finally, last-ditch split by common separators and try to parse parts
  const parts = value.split(/-|–|—|,|\sto\s/).map((s) => s.trim()).filter(Boolean);
  if (parts.length >= 2) {
    const s = to12h(parts[0]);
    const e = to12h(parts[1]);
    if (s && e) return { start: s, end: e };
  }

  return fallback;
}

// Normalize a 12h string like "10:00 am" -> "10:00 AM"
function normalize12h(s) {
  const m = s.trim().toUpperCase().match(/^(\d{1,2}):(\d{2})\s*([AP]M)$/);
  if (!m) return null;
  const hh = m[1].padStart(2, "0");
  const mm = m[2].padStart(2, "0");
  return `${hh}:${mm} ${m[3]}`;
}

// Try to turn any time string into a 12h string if possible
function to12h(s) {
  if (!s) return null;
  if (/\b[AP]M\b/i.test(s)) return normalize12h(s); // already 12h
  // maybe 24h
  if (/^\d{2}:\d{2}$/.test(s)) return convertTo12(s);
  return null;
}

// For <input type="time"> value. Accepts "10:00 AM" OR "09:30" and returns "HH:MM"
function convertTo24(val) {
  if (!val) return "";
  if (/\b(AM|PM)\b/i.test(val)) {
    const m = val.trim().toUpperCase().match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/);
    if (!m) return "";
    let h = parseInt(m[1], 10);
    const minutes = m[2];
    const mer = m[3];
    if (mer === "PM" && h !== 12) h += 12;
    if (mer === "AM" && h === 12) h = 0;
    return `${String(h).padStart(2, "0")}:${minutes}`;
  }
  // assume already 24h
  return val.slice(0, 5);
}

// Reverse: from "HH:MM" -> "hh:mm AM/PM"
function convertTo12(val) {
  if (!val) return "";
  // if already 12h, normalize
  if (/\b(AM|PM)\b/i.test(val)) return normalize12h(val) || "";
  const m = val.match(/^(\d{2}):(\d{2})$/);
  if (!m) return "";
  let h = parseInt(m[1], 10);
  const minutes = m[2];
  const ampm = h >= 12 ? "PM" : "AM";
  h = h % 12 || 12;
  return `${String(h).padStart(2, "0")}:${minutes} ${ampm}`;
}

// Minutes from "hh:mm AM/PM". Returns null if invalid.
function minutesFrom12h(val) {
  if (!val || !/\b(AM|PM)\b/i.test(val)) return null;
  const m = val.trim().toUpperCase().match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/);
  if (!m) return null;
  let h = parseInt(m[1], 10);
  const mins = parseInt(m[2], 10);
  const mer = m[3];
  if (mer === "PM" && h !== 12) h += 12;
  if (mer === "AM" && h === 12) h = 0;
  return h * 60 + mins;
}

export default RescheduleModal;
