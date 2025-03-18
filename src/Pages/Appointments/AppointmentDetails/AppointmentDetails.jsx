import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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
import "./AppointmentDetails.css";

const GOOGLE_SHEET_ID = "1wN9O7qkt7VE7XfnasRKtWSlToRWdr95YIIhNKONEvnE";
const API_KEY = "AIzaSyCS2cNNg1qVwewLXeziZxkRI5V8_QOb9Ek";
const RANGE = "Form Responses 1!A:I";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return isNaN(date) ? "Invalid Date" : date.toISOString().split("T")[0]; // Extract YYYY-MM-DD
};

const calculateDuration = (timeData) => {
  if (!timeData) return "Unknown Duration";

  const timeParts = timeData.split(", "); // Split the stored times
  if (timeParts.length !== 2) return "Invalid Duration";

  const [start, end] = timeParts;

  // Convert 12-hour format (AM/PM) to 24-hour format
  const parseTime = (timeStr) => {
    const [time, modifier] = timeStr.split(" ");
    let [hours, minutes] = time.split(":").map(Number);

    if (modifier === "PM" && hours !== 12) hours += 12;
    if (modifier === "AM" && hours === 12) hours = 0;

    return hours * 60 + minutes; // Convert to total minutes
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

  useEffect(() => {
    const fetchAppointment = async () => {
      try {
        const response = await axios.get(
          `https://sheets.googleapis.com/v4/spreadsheets/${GOOGLE_SHEET_ID}/values/${RANGE}?key=${API_KEY}`
        );

        const rows = response.data.values || [];
        const formattedData = rows.slice(1).map((row, index) => ({
          id: index + 1,
          timestamp: row[0],
          service: row[1],
          date: formatDate(row[2]),
          // time: row[3]?.replace(",", " - "),
          time: row[3],
          name: row[4],
          email: row[5],
          phone: row[6],
          note: row[7] || "No additional notes",
          service_type: row[8],
        }));

        const selectedAppointment = formattedData.find(
          (appt) => appt.id === Number(id)
        );
        setAppointment(selectedAppointment);
      } catch (error) {
        console.error("Error fetching appointment details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAppointment();
  }, [id]);

  if (loading)
    return <p className="loading-text">Loading appointment details...</p>;
  if (!appointment) return <p className="error-text">Appointment not found.</p>;

  return (
    <div className="appointment-container2">
      <div className="appointment-card">
        <h2 className="appointment-header">Appointment Details</h2>

        {/* Row 1: Name, Email, Phone */}
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

        {/* Row 2: Date, Time, Duration */}
        <div className="appointment-row">
          <div className="info-item">
            <FaCalendarAlt className="icon" />
            <span>
              <strong>Date:</strong> {appointment.date}
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

        {/* Row 3: Service */}
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

        {/* Description (Takes full width) */}
        <div className="description-box">
          <FaStickyNote className="icon" />
          <p>
            <strong>Note:</strong> {appointment.note}
          </p>
        </div>

        {/* Buttons */}
        <div className="appointment-actions">
          <button className="btn reschedule-btn">Reschedule</button>
          <button className="btn cancel-btn">Cancel</button>
          <button className="btn update-status-btn">Mark as Completed</button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentDetails;
