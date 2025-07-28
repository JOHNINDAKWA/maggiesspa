import { createContext, useState } from "react";

// Create Context
export const BookingContext = createContext();

// Provider Component
export const BookingProvider = ({ children }) => {
  const [bookingData, setBookingData] = useState({
    branchId: "", // NEW: Store the ID of the selected branch
    branchName: "", // NEW: Store the name of the selected branch
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
    selectedCategory: "",
    selectedSubcategory: "",
    selectedServiceObject: null,
  });

  const [step, setStep] = useState(1); // Track current step

  return (
    <BookingContext.Provider value={{ bookingData, setBookingData, step, setStep }}>
      {children}
    </BookingContext.Provider>
  );
};