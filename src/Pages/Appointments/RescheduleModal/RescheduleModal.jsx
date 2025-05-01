import React, { useState } from "react";
import "./RescheduleModal.css";

const RescheduleModal = ({ currentDate, currentTime, onClose, onSave }) => {
  const [date, setDate] = useState(currentDate);
  const [startTime, setStartTime] = useState(currentTime.split(", ")[0]);
  const [endTime, setEndTime] = useState(currentTime.split(", ")[1]);

  const handleSubmit = () => {
    const formattedTime = `${startTime}, ${endTime}`;
    onSave(date, formattedTime);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Reschedule Appointment</h3>

        <label>
          New Date:
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </label>

        <label>
          Start Time:
          <input type="time" value={convertTo24(startTime)} onChange={(e) => setStartTime(convertTo12(e.target.value))} />
        </label>

        <label>
          End Time:
          <input type="time" value={convertTo24(endTime)} onChange={(e) => setEndTime(convertTo12(e.target.value))} />
        </label>

        <div className="modal-actions">
          <button onClick={handleSubmit}>Save</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

// Utility to convert 08:00 AM format to 24h for <input type="time">
const convertTo24 = (time12h) => {
  const [time, modifier] = time12h.split(" ");
  let [hours, minutes] = time.split(":").map(Number);
  if (modifier === "PM" && hours !== 12) hours += 12;
  if (modifier === "AM" && hours === 12) hours = 0;
  return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
};

// Reverse of the above
const convertTo12 = (time24h) => {
  let [hours, minutes] = time24h.split(":").map(Number);
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")} ${ampm}`;
};

export default RescheduleModal;
