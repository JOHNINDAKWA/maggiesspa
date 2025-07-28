import React, { useContext, useState, useEffect, useCallback } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BookingContext } from "../../Context/BookingContext";

// JSONBin details for your branches data
const BIN_ID_BRANCHES = "688691e77b4b8670d8a83edf"; // Your branches binId
const MASTER_KEY_BRANCHES = "$2a$10$zbZxps/PAdQILoaI9k.3Z.MybaOblZBRTDRIkCphOwrZ4mI8Eldg6"; // Your masterKey

const BookingForm = ({ scrollToDetails }) => {
  const { bookingData, setBookingData, setStep } = useContext(BookingContext);

  // State to hold fetched branches and selected branch data
  const [branches, setBranches] = useState([]);
  const [selectedBranch, setSelectedBranch] = useState(bookingData.selectedBranchId || "");
  const [currentBranchData, setCurrentBranchData] = useState(null); // Data for the selected branch

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

  // Function to fetch branches data
  const fetchBranches = useCallback(async () => {
    setShowLoading(true);
    try {
      const response = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID_BRANCHES}/latest`, {
        headers: { "X-Master-Key": MASTER_KEY_BRANCHES },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setBranches(data.record.branches || []);
      
      // If a branch was previously selected, try to load its data
      if (bookingData.selectedBranchId) {
        const preselected = data.record.branches.find(b => b.id === bookingData.selectedBranchId);
        setCurrentBranchData(preselected);
      }

    } catch (err) {
      console.error("Failed to fetch branches:", err);
      setError("Failed to load spa locations. Please try again.");
    } finally {
      setShowLoading(false);
    }
  }, [bookingData.selectedBranchId]);

  useEffect(() => {
    fetchBranches();
  }, [fetchBranches]);

  // Update currentBranchData when selectedBranch changes
  useEffect(() => {
    if (selectedBranch && branches.length > 0) {
      const branch = branches.find(b => b.id === selectedBranch);
      setCurrentBranchData(branch);
    } else {
      setCurrentBranchData(null);
    }
  }, [selectedBranch, branches]);

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
    if (!selectedBranch || !selectedCategory || !selectedSubcategory || !selectedService || !bookingData.date || !bookingData.startTime || !bookingData.endTime) {
      setError("Please complete all fields before proceeding.");
      return;
    }
    setError("");
    setStep(2);
    scrollToDetails();
  };

  const handleTimeSlotClick = (time) => {
    // Assuming 'value' in your service object represents duration in minutes
    // You might need to parse 'description' to extract duration if not readily available
    // For now, let's assume 'selectedService.description' contains duration like "90 mins"
    let duration = 0;
    if (selectedService?.description) {
        const match = selectedService.description.match(/(\d+)\s*min/);
        if (match) {
            duration = parseInt(match[1]);
        }
    }
    
    // Fallback if duration isn't found or if 'value' property is used for it
    if (duration === 0 && selectedService?.value) {
        duration = selectedService.value; // Assuming 'value' directly holds duration in minutes
    }


    const interval = 30; // Assuming time slots are every 30 minutes
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

  // Helper to get available service categories for the selected branch
  const getServiceCategories = () => {
    return currentBranchData?.serviceCategories || [];
  };

  // Helper to get subgroups for a selected category
  const getSubgroupsForCategory = (categoryHeading) => {
    const category = getServiceCategories().find(cat => cat.heading === categoryHeading);
    return category ? category.subgroups : [];
  };

  // Helper to get services for a selected subgroup
  const getServicesForSubgroup = (categoryHeading, subgroupTitle) => {
    const category = getServiceCategories().find(cat => cat.heading === categoryHeading);
    if (category) {
      const subgroup = category.subgroups.find(sub => sub.title === subgroupTitle);
      return subgroup ? subgroup.services : [];
    }
    return [];
  };

  return (
    <div className="form-section5">
      {showLoading && (
        <div className="loading-overlay">
          <div className="spinner"></div>
        </div>
      )}

      <h2>Select Your Service & Appointment</h2>

      <div className="service-date-container">
        {/* Step 0: Select Spa Location/Branch */}
        <div className="custom-section">
          <h3 className="step-title">1. Select a Spa Location</h3>
          <div className="custom-options-container">
            {branches.map((branch) => (
              <button
                key={branch.id}
                className={`custom-option-btn ${selectedBranch === branch.id ? "selected" : ""}`}
                onClick={() => {
                  triggerLoading(() => {
                    setSelectedBranch(branch.id);
                    // Reset service selections when branch changes
                    setSelectedCategory("");
                    setSelectedSubcategory("");
                    setSelectedService(null);
                    setBookingData(prev => ({
                      ...prev,
                      branchId: branch.id, // Store branch ID in booking data
                      branchName: branch.name, // Store branch name
                      service: "", // Reset
                      service_type: "", // Reset
                      service_name: "", // Reset
                      duration: "", // Reset
                      price: "", // Reset
                      selectedCategory: "", // Reset
                      selectedSubcategory: "", // Reset
                      selectedServiceObject: null, // Reset
                    }));
                  });
                }}
              >
                {branch.name}
              </button>
            ))}
          </div>
        </div>

        {/* Step 1: Select Service Area (Conditional on selectedBranch) */}
        {selectedBranch && currentBranchData && (
          <div className="custom-section">
            <h3 className="step-title">2. Select a Service Area</h3>
            <div className="custom-options-container">
              {getServiceCategories().map((category) => (
                <button
                  key={category.heading}
                  className={`custom-option-btn ${selectedCategory === category.heading ? "selected" : ""}`}
                  onClick={() => {
                    triggerLoading(() => {
                      setSelectedCategory(category.heading);
                      setSelectedSubcategory("");
                      setSelectedService(null);
                      setBookingData(prev => ({
                        ...prev,
                        service: category.heading,
                        selectedCategory: category.heading,
                        selectedSubcategory: "",
                        selectedServiceObject: null,
                      }));
                    });
                  }}
                >
                  {category.heading}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Choose a Treatment Type (Conditional on selectedCategory) */}
        {selectedCategory && (
          <div className="custom-section">
            <h3 className="step-title">3. Choose a Treatment Type</h3>
            <div className="custom-options-container">
              {getSubgroupsForCategory(selectedCategory).map((subgroup) => (
                <button
                  key={subgroup.title}
                  className={`custom-option-btn ${selectedSubcategory === subgroup.title ? "selected" : ""}`}
                  onClick={() => {
                    triggerLoading(() => {
                      setSelectedSubcategory(subgroup.title);
                      setSelectedService(null);
                      setBookingData(prev => ({
                        ...prev,
                        service_type: subgroup.title,
                        selectedSubcategory: subgroup.title,
                        selectedServiceObject: null,
                      }));
                    });
                  }}
                >
                  {subgroup.title}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Pick Specific Session/Package (Conditional on selectedSubcategory) */}
        {selectedSubcategory && (
          <div className="custom-section">
            <h3 className="step-title">4. Pick a Specific Session or Package</h3>
            <div className="custom-options-container">
              {getServicesForSubgroup(selectedCategory, selectedSubcategory).map((service) => (
                <button
                  key={service.description} // Using description as key, ensure uniqueness
                  className={`custom-option-btn ${selectedService?.description === service.description ? "selected" : ""}`}
                  onClick={() => {
                    triggerLoading(() => {
                      setSelectedService(service);
                      setBookingData(prev => ({
                        ...prev,
                        service_name: service.description, // Store full description
                        duration: service.description, // You might want to parse duration here if needed elsewhere
                        price: service.price,
                        selectedServiceObject: service,
                      }));
                    });
                  }}
                >
                  {service.description} – {service.price}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 4: Pick a Date (Conditional on selectedService) */}
        {selectedService && (
          <div className="date-time-group">
            <h3 className="step-title">5. Pick a Date</h3>
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

        {/* Step 5: Choose a Starting Time (Conditional on selectedService and date) */}
        {selectedService && bookingData.date && (
          <div className="time-slot-section">
            <h3 className="step-title">6. Choose a Starting Time</h3>
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