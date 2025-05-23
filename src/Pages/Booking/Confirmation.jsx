import React, { useContext, useState } from "react";
import { BookingContext } from "../../Context/BookingContext";
import emailjs from "@emailjs/browser";

const BIN_ID = "68139f1b8561e97a500b9e03";
const MASTER_KEY = "$2a$10$v.Wz5cNjZbcvhC1nqnnYl.o9V6KJzJ7U7JnB.ZO4VwoYlh9TAvevm";

const Confirmation = () => {
  const { bookingData, setStep } = useContext(BookingContext);
  const [saving, setSaving] = useState(false);

  const handleSubmit = async () => {
    setSaving(true);

    try {
      // 1️⃣ Fetch current bin data
      const response = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}/latest`, {
        headers: { "X-Master-Key": MASTER_KEY },
      });
      const data = await response.json();
      const appointments = data.record.appointments || [];

      // 2️⃣ Create new appointment object
      const newAppointment = {
        id: appointments.length + 1,
        timestamp: new Date().toISOString(),
        service: bookingData.service,
        service_type: bookingData.service_type,
        service_name: bookingData.service_name,
        date: bookingData.date,
        time: `${bookingData.startTime}, ${bookingData.endTime}`,
        name: bookingData.name,
        email: bookingData.email,
        phone: bookingData.phone,
        note: bookingData.note || "",
        status: "Pending",
      };

      const updatedData = {
        ...data.record,
        appointments: [...appointments, newAppointment],
      };

      // 3️⃣ Save back to bin
      await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "X-Master-Key": MASTER_KEY,
        },
        body: JSON.stringify(updatedData),
      });

      // 4️⃣ Send confirmation email via EmailJS
      await emailjs.send(
        "service_t44eye4",            // your EmailJS service ID
        "template_mdbjbkh",          // your EmailJS template ID
        {
          name: bookingData.name,
          service: bookingData.service,
          date: new Date(bookingData.date).toLocaleDateString(),
          time: `${bookingData.startTime} - ${bookingData.endTime}`,
          phone: bookingData.phone,
          email: bookingData.email,
          year: new Date().getFullYear(),
        },
        "Weoz86fayUHPPiNlY"          // your EmailJS public key
      );

      // 5️⃣ Move to success screen
      setTimeout(() => {
        setSaving(false);
        setStep(4);
      }, 1000);
    } catch (error) {
      setSaving(false);
      alert("Error saving appointment or sending email. Please try again.");
      console.error("Submission error:", error);
    }
  };

  if (saving) {
    return (
      <div className="loading-overlay">
        <div className="spinner"></div>
        <p>Processing your appointment...</p>
      </div>
    );
  }

  return (
    <div className="form-section3">
      <button className="back-btn" onClick={() => setStep(2)}>
        ← Go Back
      </button>

      <h2>Now, Let's double check...</h2>

      <div className="confirmation-details">
        <p><strong>Service:</strong> {bookingData.service}</p>
        <p><strong>Service Type:</strong> {bookingData.service_type}</p>
        <p><strong>Session / Package:</strong> {bookingData.service_name}</p>
        <p><strong>Date:</strong> {bookingData.date ? new Date(bookingData.date).toLocaleDateString() : "N/A"}</p>
        <p><strong>Time:</strong> {bookingData.startTime} - {bookingData.endTime}</p>
        <p><strong>Name:</strong> {bookingData.name}</p>
        <p><strong>Email:</strong> {bookingData.email}</p>
        <p><strong>Phone:</strong> {bookingData.phone}</p>
        {bookingData.note && <p><strong>Note:</strong> {bookingData.note}</p>}
      </div>

      <button className="next-btn" onClick={handleSubmit}>Make Appointment</button>
    </div>
  );
};

export default Confirmation;
