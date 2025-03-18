

import React, { useContext } from "react";
import { BookingContext } from "../../Context/BookingContext";

const Confirmation = () => {
  const { bookingData, setStep } = useContext(BookingContext);

  const handleSubmit = () => {
    const formData = new FormData();
    
    // Replace with actual Google Form entry IDs
    formData.append("entry.865383914", bookingData.service);
    formData.append("entry.1573145382", bookingData.service_type);
    formData.append("entry.1902942553", bookingData.date);
    formData.append("entry.258649123", bookingData.startTime);
    formData.append("entry.258649123", bookingData.endTime);
    formData.append("entry.613390085", bookingData.name);
    formData.append("entry.1355795725", bookingData.email);
    formData.append("entry.1187397714", bookingData.phone);
    if (bookingData.note) formData.append("entry.213986980", bookingData.note);

    fetch("https://docs.google.com/forms/d/e/1FAIpQLScFN0dc0G3UvcoacE7D6D6zKucvM3hCJQSuOXNiRXfIXiqj5g/formResponse", {
      method: "POST",
      body: formData,
      mode: "no-cors",
    })
      .then(() => {
        // alert("Appointment successfully saved!");


        setTimeout(() => {
          setStep(4);
        }, 1500);
      })
      .catch((error) => {
        alert("Error saving appointment. Try again.");
        console.error("Submission error:", error);
      });
  };

  return (
    <div className="form-section3">
      {/* Go Back Button */}
      <button className="back-btn" onClick={() => setStep(2)}>← Go Back</button>

      <h2>Now, Let's double check...</h2>

      <div className="confirmation-details">
        <p><strong>Service:</strong> {bookingData.service}</p>
        <p><strong>Service Type:</strong> {bookingData.service_type}</p>
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
