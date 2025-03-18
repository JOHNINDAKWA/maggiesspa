import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BookingContext } from "../../Context/BookingContext";

const BookingForm = ({ scrollToDetails }) => {
  const { bookingData, setBookingData, setStep } = useContext(BookingContext);
  const [error, setError] = useState("");
  const [showTimeSlots, setShowTimeSlots] = useState(false);
  const availableSlots = [
    "08:00 AM", "08:30 AM", "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM",
    "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM",
    "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM",
    "05:00 PM", "05:30 PM", "06:00 PM"
  ];

  // Handle "Next Section" button click
  const handleNext = () => {
    if (!bookingData.service || !bookingData.service_type || !bookingData.date || !bookingData.startTime || !bookingData.endTime) {
      setError("Please select a service, date, and time slot.");
      return;
    }
    setError("");
    setStep(2);
    scrollToDetails();
  };

  // Function to handle time slot selection
  const handleTimeSlotClick = (time) => {
    if (bookingData.startTime === time) {
      // Unselect the start time if clicked again
      setBookingData({ ...bookingData, startTime: "", endTime: "" });
    } else if (!bookingData.startTime) {
      // Select the start time
      setBookingData({ ...bookingData, startTime: time });
    } else if (bookingData.endTime === time) {
      // Unselect the end time if clicked again
      setBookingData({ ...bookingData, endTime: "" });
    } else {
      // Select the end time (must be after start time)
      const startIndex = availableSlots.indexOf(bookingData.startTime);
      const endIndex = availableSlots.indexOf(time);
      if (endIndex > startIndex) {
        setBookingData({ ...bookingData, endTime: time });
      }
    }
  };

  return (
    <div className="form-section5">
      <h2>Select a Service & Time</h2>

      <div className="service-date-container">
        {/* Service Selection */}
        <div className="service-group">
          <div>
            <select
              value={bookingData.service}
              onChange={(e) => setBookingData({ ...bookingData, service: e.target.value })}
            >
              <option value="">Select Service</option>
              <option value="Prenatal Massage Therapy">Prenatal Massage Therapy</option>
              <option value="Postpartum Massage Therapy">Postpartum Massage Therapy</option>
            </select>
          </div>

          <div>
            <select
              value={bookingData.service_type}
              onChange={(e) => setBookingData({ ...bookingData, service_type: e.target.value })}
            >
              <option value="">Select Service Type</option>
              <option value="In-Spa Treatment">In-Spa Treatment</option>
              <option value="Home Service">Home Service</option>
            </select>
          </div>
        </div>

        {/* Date Selection */}
        <div className="date-time-group">
          <div className="custom-datepicker">
            <DatePicker
              selected={bookingData.date ? new Date(bookingData.date) : null}
              onChange={(date) => setBookingData({ ...bookingData, date: date.toISOString() })}
              dateFormat="yyyy-MM-dd"
              placeholderText="Select Date ⤵"
            />
          </div>
        </div>

        {/* View Available Time Slots Button */}
        {bookingData.service && bookingData.service_type && bookingData.date && !showTimeSlots && (
          <button className="view-slots-btn" onClick={() => setShowTimeSlots(true)}>
            View Available Time Slots
          </button>
        )}

        {/* Display Available Time Slots */}
        {showTimeSlots && (
          <div className="time-slots-container">
            {availableSlots.map((slot, index) => (
              <button
                key={index}
                className={`time-slot-btn ${
                  slot === bookingData.startTime || slot === bookingData.endTime ? "selected" : ""
                }`}
                onClick={() => handleTimeSlotClick(slot)}
              >
                {slot}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Display Error Message */}
      {error && <p className="error-msg">{error}</p>}

      <button className="next-btn" onClick={handleNext}>
        Next Section
      </button>
    </div>
  );
};

export default BookingForm;
