import { createContext, useState } from "react";

// Create Context
export const BookingContext = createContext();

// Provider Component
export const BookingProvider = ({ children }) => {
  const [bookingData, setBookingData] = useState({
    service: "",
    service_type: "",
    service_name: "",
    duration: "",
    price: "",
    date: "",
    startTime: "",
    endTime: "",
    name: "",
    email: "",
    phone: "",
    note: "",
    selectedCategory: "", // <--- NEW
    selectedSubcategory: "", // <--- NEW
    selectedServiceObject: null, // <--- NEW (full selected service object)
  });
  
  const [step, setStep] = useState(1); // Track current step

  return (
    <BookingContext.Provider value={{ bookingData, setBookingData, step, setStep }}>
      {children}
    </BookingContext.Provider>
  );
};
