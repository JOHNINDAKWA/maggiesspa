import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BookingContext } from "../../Context/BookingContext";
import serviceOptions from "./ServiceOptions";

const BookingForm = ({ scrollToDetails }) => {
  const { bookingData, setBookingData, setStep } = useContext(BookingContext);

  const [selectedCategory, setSelectedCategory] = useState(bookingData.selectedCategory || "");
  const [selectedSubcategory, setSelectedSubcategory] = useState(bookingData.selectedSubcategory || "");
  const [selectedService, setSelectedService] = useState(bookingData.selectedServiceObject || null);
  const [error, setError] = useState("");
  const [showLoading, setShowLoading] = useState(false);

  const availableSlots = [
    "08:30 AM", "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM",
    "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM",
    "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM",
    "05:00 PM", "05:30 PM", "06:00 PM"
  ];

  const triggerLoading = (callback) => {
    setShowLoading(true);
    setTimeout(() => {
      setShowLoading(false);
      if (callback) callback();
      setTimeout(() => {
        window.scrollBy({
          top: 300,
          behavior: "smooth",
        });
      }, 100);
    }, 700);
  };

  const handleNext = () => {
    if (!selectedCategory || !selectedSubcategory || !selectedService || !bookingData.date || !bookingData.startTime || !bookingData.endTime) {
      setError("Please complete all fields before proceeding.");
      return;
    }
    setError("");
    setStep(2);
    scrollToDetails();
  };

  const handleTimeSlotClick = (time) => {
    const duration = selectedService?.value || 0;
    const interval = 30;
    const steps = Math.ceil(duration / interval);

    const startIndex = availableSlots.indexOf(time);
    const endIndex = startIndex + steps;

    if (endIndex <= availableSlots.length) {
      setBookingData({
        ...bookingData,
        startTime: time,
        endTime: availableSlots[endIndex],
      });
    } else {
      setError("Selected time slot is too late for this service duration.");
    }
  };

  return (
    <div className="form-section5">
      
      {/* Full screen loading overlay */}
      {showLoading && (
        <div className="loading-overlay">
          <div className="spinner"></div>
        </div>
      )}

      <h2>Select Your Service & Appointment</h2>

      <div className="service-date-container">
        
        {/* Step 1: Select Service Area */}
        <div className="custom-section">
          <h3 className="step-title">1. Select a Service Area</h3>
          <div className="custom-options-container">
            {Object.keys(serviceOptions).map((cat) => (
              <button
                key={cat}
                className={`custom-option-btn ${selectedCategory === cat ? "selected" : ""}`}
                onClick={() => {
                  triggerLoading(() => {
                    setSelectedCategory(cat);
                    setSelectedSubcategory("");
                    setSelectedService(null);
                    setBookingData(prev => ({
                      ...prev,
                      service: cat,
                      selectedCategory: cat,
                      selectedSubcategory: "",
                      selectedServiceObject: null,
                    }));
                  });
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Step 2: Choose a Treatment Type */}
        {selectedCategory && (
          <div className="custom-section">
            <h3 className="step-title">2. Choose a Treatment Type</h3>
            <div className="custom-options-container">
              {Object.keys(serviceOptions[selectedCategory]).map((sub) => (
                <button
                  key={sub}
                  className={`custom-option-btn ${selectedSubcategory === sub ? "selected" : ""}`}
                  onClick={() => {
                    triggerLoading(() => {
                      setSelectedSubcategory(sub);
                      setSelectedService(null);
                      setBookingData(prev => ({
                        ...prev,
                        service_type: sub,
                        selectedSubcategory: sub,
                        selectedServiceObject: null,
                      }));
                    });
                  }}
                >
                  {sub}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Pick Specific Session/Package */}
        {selectedSubcategory && (
          <div className="custom-section">
            <h3 className="step-title">3. Pick a Specific Session or Package</h3>
            <div className="custom-options-container">
              {serviceOptions[selectedCategory][selectedSubcategory].map((option) => (
                <button
                  key={option.label}
                  className={`custom-option-btn ${selectedService?.label === option.label ? "selected" : ""}`}
                  onClick={() => {
                    triggerLoading(() => {
                      setSelectedService(option);
                      setBookingData(prev => ({
                        ...prev,
                        service_name: option.label,
                        duration: option.value,
                        price: option.price,
                        selectedServiceObject: option,
                      }));
                    });
                  }}
                >
                  {option.label} – {option.price}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 4: Pick a Date */}
        {selectedService && (
          <div className="date-time-group">
            <h3 className="step-title">4. Pick a Date</h3>
            <div className="custom-datepicker">
              <DatePicker
                selected={bookingData.date ? new Date(bookingData.date) : null}
                onChange={(date) => setBookingData({ ...bookingData, date: date.toISOString() })}
                dateFormat="yyyy-MM-dd"
                placeholderText="Select Date ⤵"
              />
            </div>
          </div>
        )}

        {/* Step 5: Choose a Starting Time */}
        {selectedService && bookingData.date && (
          <div className="time-slot-section">
            <h3 className="step-title">5. Choose a Starting Time</h3>
            <div className="time-slots-container">
              {availableSlots.map((slot, idx) => (
                <button
                  key={idx}
                  className={`time-slot-btn ${slot === bookingData.startTime ? "selected" : ""}`}
                  onClick={() => handleTimeSlotClick(slot)}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Error Message */}
      {error && <p className="error-msg">{error}</p>}

      {/* Next Button */}
      <button className="next-btn" onClick={handleNext}>
        Next Section
      </button>
    </div>
  );
};

export default BookingForm;
