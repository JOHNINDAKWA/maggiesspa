import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaCalendarAlt,
  FaClock,
  FaListAlt,
  FaStickyNote,
} from "react-icons/fa";
import { TbMassage } from "react-icons/tb";
import "./AppointmentDetails.css";
import RescheduleModal from "../RescheduleModal/RescheduleModal";

const BIN_ID = "68139f1b8561e97a500b9e03";
const MASTER_KEY =
  "$2a$10$v.Wz5cNjZbcvhC1nqnnYl.o9V6KJzJ7U7JnB.ZO4VwoYlh9TAvevm";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  if (isNaN(date)) return "Invalid Date";
  return date.toLocaleDateString("en-US", {
    weekday: "short",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};

const calculateDuration = (timeData) => {
  if (!timeData) return "Unknown Duration";
  const timeParts = timeData.split(", ");
  if (timeParts.length !== 2) return "Invalid Duration";

  const [start, end] = timeParts;

  const parseTime = (timeStr) => {
    const [time, modifier] = timeStr.split(" ");
    let [hours, minutes] = time.split(":").map(Number);
    if (modifier === "PM" && hours !== 12) hours += 12;
    if (modifier === "AM" && hours === 12) hours = 0;
    return hours * 60 + minutes;
  };

  const startMinutes = parseTime(start);
  const endMinutes = parseTime(end);
  const durationMinutes = endMinutes - startMinutes;

  return durationMinutes > 0 ? `${durationMinutes} min` : "Invalid Duration";
};

const AppointmentDetails = () => {
  const { id } = useParams();
  const [appointment, setAppointment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("");
  const [toastMessage, setToastMessage] = useState("");

  const fetchAppointment = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.jsonbin.io/v3/b/${BIN_ID}/latest`,
        { headers: { "X-Master-Key": MASTER_KEY } }
      );

      const allAppointments = response.data.record.appointments || [];
      const found = allAppointments.find((appt) => appt.id === Number(id));

      if (found) {
        setAppointment(found);
        setSelectedStatus(found.status);
      } else {
        setAppointment(null);
      }
    } catch (error) {
      console.error("Error fetching appointment details:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAppointment();
  }, [id]);

  const handleRescheduleClick = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const getStatusStyle = (status) => {
    const styles = {
      Pending: { background: "#fff3cd", color: "#856404" },
      Confirmed: { background: "#d1ecf1", color: "#0c5460" },
      Completed: { background: "#d4edda", color: "#155724" },
      Cancelled: { background: "#f8d7da", color: "#721c24" },
      "No Show": { background: "#e2e3e5", color: "#383d41" },
      Default: { background: "#f0f0f0", color: "#333" },
    };
    return styles[status] || styles.Default;
  };

  const handleStatusChange = async (newStatus) => {
    try {
      setSelectedStatus(newStatus);
      const response = await axios.get(
        `https://api.jsonbin.io/v3/b/${BIN_ID}/latest`,
        { headers: { "X-Master-Key": MASTER_KEY } }
      );

      const data = response.data.record;
      const updatedAppointments = data.appointments.map((appt) =>
        appt.id === appointment.id ? { ...appt, status: newStatus } : appt
      );

      await axios.put(
        `https://api.jsonbin.io/v3/b/${BIN_ID}`,
        { ...data, appointments: updatedAppointments },
        {
          headers: {
            "Content-Type": "application/json",
            "X-Master-Key": MASTER_KEY,
          },
        }
      );

      setAppointment((prev) => ({
        ...prev,
        status: newStatus,
      }));

      showToast(`Status updated to "${newStatus}" successfully!`);
      console.log("Status updated in JSONBin!");
    } catch (error) {
      console.error("Error updating status:", error);
      alert("Failed to update status.");
    }
  };

  const handleSaveReschedule = (newDate, newTime) => {
    const updatedAppointment = {
      ...appointment,
      date: newDate,
      time: newTime,
    };

    setAppointment(updatedAppointment); // local update
    setShowModal(false); // close modal
    updateAppointmentInBin(updatedAppointment); // push to JSONBin
  };

  const updateAppointmentInBin = async (updatedAppointment) => {
    try {
      const response = await axios.get(
        "https://api.jsonbin.io/v3/b/68139f1b8561e97a500b9e03",
        {
          headers: {
            "X-Master-Key":
              "$2a$10$v.Wz5cNjZbcvhC1nqnnYl.o9V6KJzJ7U7JnB.ZO4VwoYlh9TAvevm",
          },
        }
      );

      const data = response.data.record;
      const updatedAppointments = data.appointments.map((appt) =>
        appt.id === updatedAppointment.id ? updatedAppointment : appt
      );

      await axios.put(
        "https://api.jsonbin.io/v3/b/68139f1b8561e97a500b9e03",
        { ...data, appointments: updatedAppointments },
        {
          headers: {
            "Content-Type": "application/json",
            "X-Master-Key":
              "$2a$10$v.Wz5cNjZbcvhC1nqnnYl.o9V6KJzJ7U7JnB.ZO4VwoYlh9TAvevm",
          },
        }
      );

      console.log("✅ Reschedule updated in JSONBin!");
      showToast("Appointment rescheduled successfully!");
    } catch (error) {
      console.error("Error updating appointment:", error);
      showToast("❌ Failed to reschedule appointment.");
    }
  };

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(""), 3000); // Hide after 3 sec
  };

  if (loading)
    return (
      <div className="loading-overlay">
        <div className="spinner"></div>
        <p>Loading appointment details...</p>
      </div>
    );

  if (!appointment) return <p className="error-text">Appointment not found.</p>;

  return (
    <div className="appointment-container2">
      <div className="appointment-card">
        <div className="search-bar-with-user">
          <Link to="/appointments" className="back-btn">
            ← Back to Appointments
          </Link>

          <div className="user-dropdown">
            <span className="user-name">
              {JSON.parse(localStorage.getItem("loggedInUser"))?.name ||
                "Guest"}
            </span>
            <div className="dropdown-content">
              <Link to="/profile">Profile</Link>

              {/* Admin-only options */}
              {JSON.parse(localStorage.getItem("loggedInUser"))?.role ===
                "admin" && (
                <>
                  <Link to="/users">Users / Staff</Link>
                  <Link to="/reports">Reports</Link>
                </>
              )}

              <button
                onClick={() => {
                  localStorage.removeItem("loggedInUser");
                  window.location.href = "/login";
                }}
              >
                Logout
              </button>
            </div>
          </div>
        </div>

        <div className="status-selector-header">
          <h2 className="appointment-header">Appointment Details</h2>

          <div
            className="status-badge"
            style={{
              ...getStatusStyle(appointment.status),
              padding: "6px 12px",
              borderRadius: "12px",
              fontSize: "14px",
              fontWeight: "600",
              textTransform: "uppercase",
            }}
          >
            {appointment.status || "No Status"}
          </div>

          <div className="status-selector">
            <label>Change Status:</label>
            <div className="custom-dropdown">
              <select
                value={selectedStatus}
                onChange={(e) => {
                  const newStatus = e.target.value;
                  handleStatusChange(newStatus);
                }}
              >
                <option value="">Select Status</option>
                <option value="Pending">Pending</option>
                <option value="Confirmed">Confirmed</option>
                <option value="Completed">Completed</option>
                <option value="Cancelled">Cancelled</option>
                <option value="No Show">No Show</option>
              </select>
            </div>
          </div>
        </div>

        <div className="appointment-row">
          <div className="info-item">
            <FaUser className="icon" />
            <span>
              <strong>Name:</strong> {appointment.name}
            </span>
          </div>
          <div className="info-item">
            <FaEnvelope className="icon" />
            <span>
              <strong>Email:</strong> {appointment.email}
            </span>
          </div>
          <div className="info-item">
            <FaPhone className="icon" />
            <span>
              <strong>Phone:</strong> {appointment.phone}
            </span>
          </div>
        </div>

        <div className="appointment-row">
          <div className="info-item">
            <FaCalendarAlt className="icon" />
            <span>
              <strong>Date:</strong> {formatDate(appointment.date)}
            </span>
          </div>
          <div className="info-item">
            <FaClock className="icon" />
            <span>
              <strong>Time:</strong> {appointment.time.replace(", ", " - ")}
            </span>
          </div>
          <div className="info-item">
            <FaClock className="icon" />
            <span>
              <strong>Duration:</strong> {calculateDuration(appointment.time)}
            </span>
          </div>
        </div>

        <div className="appointment-row2">
          <div className="info-item">
            <FaListAlt className="icon" />
            <span>
              <strong>Service:</strong> {appointment.service}
            </span>
          </div>
          <div className="info-item">
            <FaListAlt className="icon" />
            <span>
              <strong>Service Type:</strong> {appointment.service_type}
            </span>
          </div>
        </div>

        <div className="description-box">
          <TbMassage className="icon" />
          <p>
            <strong>Session/Package:</strong> {appointment.service_name}
          </p>
        </div>

        <div className="description-box">
          <FaStickyNote className="icon" />
          <p>
            <strong>Note:</strong> {appointment.note}
          </p>
        </div>

        <div className="appointment-actions">
          <button
            className="btn reschedule-btn"
            onClick={handleRescheduleClick}
          >
            Reschedule
          </button>
          <button
            className="btn cancel-btn"
            onClick={() => handleStatusChange("Cancelled")}
          >
            Cancel
          </button>

          <button
            className="btn update-status-btn"
            onClick={() => handleStatusChange("Completed")}
          >
            Mark as Completed
          </button>
        </div>
      </div>

      {toastMessage && <div className="toast">{toastMessage}</div>}

      {showModal && (
        <RescheduleModal
          currentDate={appointment.date}
          currentTime={appointment.time}
          onClose={closeModal}
          onSave={handleSaveReschedule}
        />
      )}
    </div>
  );
};

export default AppointmentDetails;
