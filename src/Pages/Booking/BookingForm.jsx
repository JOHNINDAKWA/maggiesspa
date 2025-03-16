import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BookingContext } from "../../Context/BookingContext";

const BookingForm = ({ scrollToDetails }) => {
  const { bookingData, setBookingData, setStep } = useContext(BookingContext);
  const [error, setError] = useState("");

  // Handle "Next Section" button click
  const handleNext = () => {
    if (
      !bookingData.service ||
      !bookingData.service_type ||
      !bookingData.date ||
      !bookingData.startTime ||
      !bookingData.endTime
    ) {
      setError("Please select a service, date, start time, and end time.");
      return;
    }

    setError("");
    setStep(2);
    scrollToDetails();
  };

  return (
    <div className="form-section5">
      <h2>Select a Service & Time</h2>

      <div className="service-date-container">
        {/* Service Selection (Top Row) */}
        <div className="service-group">
          <div>



            <select
              value={bookingData.service}
              onChange={(e) =>
                setBookingData({ ...bookingData, service: e.target.value })
              }
            >
              <option value="">Select Service</option>
              <option value="Prenatal Massage Therapy">
                Prenatal Massage Therapy
              </option>
              <option value="Postpartum Massage Therapy">
                Postpartum Massage Therapy
              </option>
              <option value="Customized Facial and Skincare Treatments">
                Customized Facial and Skincare Treatments
              </option>
              <option value="Body Treatments and Stretch Mark Solutions">
                Body Treatments and Stretch Mark Solutions
              </option>
              <option value="Prenatal Yoga and Fitness Classes">
                Prenatal Yoga and Fitness Classes
              </option>
              <option value="Nutritional Counseling and Wellness Consultations">
                Nutritional Counseling and Wellness Consultations
              </option>
              <option value="Lactation and Breastfeeding Support">
                Lactation and Breastfeeding Support
              </option>
              <option value="Educational Workshops and Support Groups">
                Educational Workshops and Support Groups
              </option>
              <option value="Spa Packages and Membership Programs">
                Spa Packages and Membership Programs
              </option>
              <option value="Relaxation and Stress Relief Therapies">
                Relaxation and Stress Relief Therapies
              </option>
            </select>
          </div>

          <div>
            <select
              value={bookingData.service_type}
              onChange={(e) =>
                setBookingData({ ...bookingData, service_type: e.target.value })
              }
            >
              <option value="">Select Service Type</option>
              <option value="In-Spa Treatment">In-Spa Treatment</option>
              <option value="Home Service">Home Service</option>
            </select>
          </div>
        </div>

        {/* Date & Time Selection (Bottom Row) */}
        <div className="date-time-group">
          <div className="custom-datepicker">
            <DatePicker
              selected={bookingData.date ? new Date(bookingData.date) : null}
              onChange={(date) =>
                setBookingData({ ...bookingData, date: date.toISOString() })
              }
              dateFormat="yyyy-MM-dd"
              placeholderText="Select Date ⤵"
            />
          </div>

          <div className="custom-datepicker">
            <DatePicker
              selected={
                bookingData.startTime
                  ? new Date(`1970-01-01T${bookingData.startTime}`)
                  : null
              }
              onChange={(time) =>
                setBookingData({
                  ...bookingData,
                  startTime: time.toTimeString().slice(0, 5),
                })
              }
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={30}
              timeCaption="Start Time"
              dateFormat="HH:mm"
              placeholderText="Select Start Time ⤵"
            />
          </div>

          <div className="custom-datepicker">
            <DatePicker
              selected={
                bookingData.endTime
                  ? new Date(`1970-01-01T${bookingData.endTime}`)
                  : null
              }
              onChange={(time) =>
                setBookingData({
                  ...bookingData,
                  endTime: time.toTimeString().slice(0, 5),
                })
              }
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={30}
              timeCaption="End Time"
              dateFormat="HH:mm"
              placeholderText="Select End Time ⤵"
            />
          </div>
        </div>
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
