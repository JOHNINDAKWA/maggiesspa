import React, { useContext, useRef } from "react";
import { BookingContext } from "../../Context/BookingContext";
import BookingForm from "./BookingForm";
import PersonalDetails from "./PersonalDetails";
import Confirmation from "./Confirmation";
import SuccessMessage from "./SuccessMessage";
import './Styles/BookingPages.css'
import BookingBanner from "./BookingBanner/BookingBanner";

const BookingPage = () => {
  const { step } = useContext(BookingContext);
  const detailsRef = useRef(null);

  return (
    <div className="container-booking">
     <BookingBanner/>
    <div className="booking-container">
      
      {/* <h1 className="booking-title">Maggies P&P Spa Appointment</h1> */}

      {/* Step 1: Select Service & Time */}
      {step === 1 && <BookingForm  />}

      {/* Step 2: Personal Details (Initially Hidden) */}
      <div ref={detailsRef}>{step === 2 && <PersonalDetails />}</div>

      {/* Step 3: Confirmation */}
      {step === 3 && <Confirmation />}

      {/* Step 4: Success Message */}
      {step === 4 && <SuccessMessage />}
    </div>
    </div>
  );
};

export default BookingPage;
