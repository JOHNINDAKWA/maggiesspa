import React, { useContext, useRef, useEffect } from "react";
import { BookingContext } from "../../Context/BookingContext";
import BookingForm from "./BookingForm";
import PersonalDetails from "./PersonalDetails";
import Confirmation from "./Confirmation";
import SuccessMessage from "./SuccessMessage";
import "./Styles/BookingPages.css";
import BookingBanner from "./BookingBanner/BookingBanner";

const BookingPage = () => {
  const { step } = useContext(BookingContext);
  const detailsRef = useRef(null);

  useEffect(() => {
    if (step === 2 && detailsRef.current) {
      // only scroll when step changes to 2
      detailsRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [step]); // listen to step change

  return (
    <div className="container-booking">
      <BookingBanner />
      <div className="booking-container">
        {/* Step 1: Select Service & Time */}
        {step === 1 && <BookingForm />}

        {/* Step 2: Personal Details */}
        <div ref={detailsRef}>
          {step === 2 && <PersonalDetails />}
        </div>

        {/* Step 3: Confirmation */}
        {step === 3 && <Confirmation />}

        {/* Step 4: Success Message */}
        {step === 4 && <SuccessMessage />}
      </div>
    </div>
  );
};

export default BookingPage;
