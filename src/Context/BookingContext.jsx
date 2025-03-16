import { createContext, useState } from "react";

// Create Context
export const BookingContext = createContext();

// Provider Component
export const BookingProvider = ({ children }) => {
  const [bookingData, setBookingData] = useState({
    service: "",
    service_type: "",
    date: "",
    startTime: "",
    endTime: "",
    name: "",
    email: "",
    phone: "",
    note: "",
  });

  const [step, setStep] = useState(1); // Track current step

  return (
    <BookingContext.Provider value={{ bookingData, setBookingData, step, setStep }}>
      {children}
    </BookingContext.Provider>
  );
};
