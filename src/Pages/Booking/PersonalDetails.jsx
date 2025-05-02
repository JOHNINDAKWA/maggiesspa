import React, { useContext, useState } from "react";
import { BookingContext } from "../../Context/BookingContext";

const PersonalDetails = () => {
  const { bookingData, setBookingData, setStep } = useContext(BookingContext);
  const [error, setError] = useState("");

  const handleNext = () => {
    if (!bookingData.name || !bookingData.email || !bookingData.phone) {
      setError("Please fill in all required fields.");
      return;
    }

    setError("");
    setStep(3);
  };

  return (
    <div className="form-section1">
      {/* Go Back Button */}
      <button
        className="back-btn"
        onClick={() => {
          setStep(1);
          setTimeout(() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }, 100);
        }}
      >
        ← Go Back
      </button>

      <h2>Enter Your Contact Details</h2>

      <input
        type="text"
        placeholder="Full Name"
        value={bookingData.name}
        onChange={(e) =>
          setBookingData({ ...bookingData, name: e.target.value })
        }
      />

      <input
        type="email"
        placeholder="Email"
        value={bookingData.email}
        onChange={(e) =>
          setBookingData({ ...bookingData, email: e.target.value })
        }
      />

      <input
        type="tel"
        placeholder="Phone"
        value={bookingData.phone}
        onChange={(e) =>
          setBookingData({ ...bookingData, phone: e.target.value })
        }
      />

      <textarea
        placeholder="Note (optional); Preferences, Medical disclaimers etc"
        value={bookingData.note}
        onChange={(e) =>
          setBookingData({ ...bookingData, note: e.target.value })
        }
      ></textarea>

      {/* Display Error Message */}
      {error && <p className="error-msg">{error}</p>}

      <button className="next-btn" onClick={handleNext}>
        Next
      </button>
    </div>
  );
};

export default PersonalDetails;
