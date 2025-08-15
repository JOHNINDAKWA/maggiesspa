import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BookingContext } from "../../Context/BookingContext";
// import { formatKES } from "../../Utils/currency";

function parseKESToNumber(input) {
  // handles "Ksh 7,000" or "7000" etc.
  if (typeof input === "number") return input;
  if (!input) return 0;
  const cleaned = String(input).replace(/[^\d.]/g, ""); // remove non-digits
  const val = parseFloat(cleaned);
  return Number.isFinite(val) ? Math.round(val) : 0;
}

const Confirmation = () => {
  const { bookingData, setStep } = useContext(BookingContext);
  const navigate = useNavigate();
  const [saving, setSaving] = useState(false);

  const handleProceedToPayment = async () => {
    setSaving(true);

    try {
      // Snapshot the booking details locally and compute deposit (50%)
      const totalAmount = parseKESToNumber(bookingData.price);
      const depositAmount = Math.round(totalAmount * 0.5);

      const payload = {
        booking: {
          ...bookingData,
          // normalize display values if needed
          normalizedPrice: totalAmount,
        },
        amounts: {
          total: totalAmount,
          deposit: depositAmount,
          balance: Math.max(totalAmount - depositAmount, 0),
        },
        status: "awaiting_payment",
        method: null, // chosen on the next page
      };

      // Persist so a refresh won’t lose the context
      localStorage.setItem("booking_payment_info", JSON.stringify(payload));

      // Navigate to the Booking Payment page
      navigate("/booking-payment");
    } catch (err) {
      console.error("Failed to prepare payment:", err);
      alert("Something went wrong preparing payment. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  if (saving) {
    return (
      <div className="loading-overlay">
        <div className="spinner"></div>
        <p>Preparing your payment...</p>
      </div>
    );
  }

  return (
    <div className="form-section3">
      <button className="back-btn" onClick={() => setStep(2)}>
        ← Go Back
      </button>

      <h2>Now, let's double-check…</h2>

      <div className="confirmation-details">
        <p><strong>Spa Location:</strong> {bookingData.branchName}</p>
        <p><strong>Service Area:</strong> {bookingData.service}</p>
        <p><strong>Treatment Type:</strong> {bookingData.service_type}</p>
        <p><strong>Session / Package:</strong> {bookingData.service_name}</p>
        <p><strong>Price:</strong> {bookingData.price}</p>
        <p><strong>Date:</strong> {bookingData.date ? new Date(bookingData.date).toLocaleDateString() : "N/A"}</p>
        <p><strong>Time:</strong> {bookingData.startTime} - {bookingData.endTime}</p>
        <p><strong>Name:</strong> {bookingData.name}</p>
        <p><strong>Email:</strong> {bookingData.email}</p>
        <p><strong>Phone:</strong> {bookingData.phone}</p>
        {bookingData.note && <p><strong>Note:</strong> {bookingData.note}</p>}
      </div>

      <button className="next-btn" onClick={handleProceedToPayment}>
        Proceed to Payment
      </button>
    </div>
  );
};

export default Confirmation;
