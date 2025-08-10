import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Appointments.css";
import { Link } from "react-router-dom";
import Select from "react-select";
// If you already have a shared styles util, use this instead:
// import { getCustomSelectStyles } from "@/utils/getCustomSelectStyles";

const BIN_ID = "68139f1b8561e97a500b9e03";
const MASTER_KEY =
  "$2a$10$v.Wz5cNjZbcvhC1nqnnYl.o9V6KJzJ7U7JnB.ZO4VwoYlh9TAvevm";
const ITEMS_PER_PAGE = 25;

const sortOptions = [
  { value: "mostRecent", label: "Most Recent" },
  { value: "upcoming", label: "Upcoming Appointments" },
  { value: "oldest", label: "Oldest First" },
];

const statusOptions = [
  { value: "", label: "All" },
  { value: "Pending", label: "Pending" },
  { value: "Confirmed", label: "Confirmed" },
  { value: "Completed", label: "Completed" },
  { value: "Cancelled", label: "Cancelled" },
  { value: "No Show", label: "No Show" },
];

// Teal-forward react-select styles (replace with getCustomSelectStyles if you prefer)
const selectStyles = {
  control: (base, state) => ({
    ...base,
    minHeight: 38,
    borderRadius: 10,
    borderColor: state.isFocused ? "rgba(1,161,161,.55)" : "rgba(2,80,80,.10)",
    boxShadow: state.isFocused ? "0 0 0 3px rgba(1,161,161,.18)" : "none",
    ":hover": { borderColor: "rgba(1,161,161,.35)" },
    background: "#fff",
  }),
  valueContainer: (b) => ({ ...b, padding: "2px 10px" }),
  indicatorsContainer: (b) => ({ ...b, paddingRight: 6 }),
  menu: (b) => ({
    ...b,
    borderRadius: 12,
    overflow: "hidden",
    boxShadow: "0 20px 40px rgba(2, 20, 20, .12)",
  }),
  option: (base, state) => ({
    ...base,
    padding: "8px 10px",
    background: state.isSelected
      ? "#01A1A1"
      : state.isFocused
      ? "#f0f7f7"
      : "#fff",
    color: state.isSelected ? "#fff" : "#1f2937",
    cursor: "pointer",
  }),
  placeholder: (b) => ({ ...b, color: "#9aa3ad" }),
  singleValue: (b) => ({ ...b, color: "#1f2937", fontWeight: 500, fontSize: 14 }),
};

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [sortOption, setSortOption] = useState("mostRecent");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get(
          `https://api.jsonbin.io/v3/b/${BIN_ID}/latest`,
          { headers: { "X-Master-Key": MASTER_KEY } }
        );

        const fetchedAppointments = response.data.record.appointments || [];
        const formattedData = fetchedAppointments.map((appt) => ({
          ...appt,
          formattedDate: formatDate(appt.date),
        }));

        setAppointments(formattedData);
      } catch (error) {
        console.error("Error fetching appointments:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    if (isNaN(date)) return "Invalid Date";
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  const sortAppointments = (list) => {
    return [...list].sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      if (sortOption === "mostRecent") {
        return new Date(b.timestamp) - new Date(a.timestamp);
      } else if (sortOption === "upcoming") {
        return dateA - dateB;
      } else if (sortOption === "oldest") {
        return dateB - dateA;
      }
      return 0;
    });
  };

  const filteredAppointments = appointments.filter((appt) => {
    const matchesSearch =
      appt.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      appt.service.toLowerCase().includes(searchQuery.toLowerCase()) ||
      appt.formattedDate.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesDate = selectedDate
      ? new Date(appt.date).toISOString().split("T")[0] === selectedDate
      : true;

    const matchesStatus = selectedStatus ? appt.status === selectedStatus : true;

    return matchesSearch && matchesDate && matchesStatus;
  });

  const sortedAppointments = sortAppointments(filteredAppointments);

  const totalPages = Math.ceil(sortedAppointments.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentAppointments = sortedAppointments.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const getStatusColor = (status) => {
    const styles = {
      Pending: { background: "#fff3cd", color: "#856404" },
      Confirmed: { background: "#d1ecf1", color: "#0c5460" },
      Completed: { background: "#d4edda", color: "#155724" },
      Cancelled: { background: "#f8d7da", color: "#721c24" },
      "No Show": { background: "#e2e3e5", color: "#383d41" },
      Default: { background: "#f0f0f0", color: "#333" },
    };
    return styles[status] || styles.Default;
  };

  // Reusable filter controls (desktop sidebar + mobile dropdown)
  const FilterControls = () => (
    <div className="filters-content">
      <div className="filter-group">
        <label>Sort By</label>
        <Select
          inputId="sortBy"
          options={sortOptions}
          styles={selectStyles}
          value={sortOptions.find((o) => o.value === sortOption)}
          onChange={(opt) => {
            setSortOption(opt?.value || "mostRecent");
            setCurrentPage(1);
          }}
          isSearchable={false}
        />
      </div>

      <div className="filter-group">
        <label>Status</label>
        <Select
          inputId="status"
          options={statusOptions}
          styles={selectStyles}
          value={statusOptions.find((o) => o.value === selectedStatus)}
          onChange={(opt) => {
            setSelectedStatus(opt?.value ?? "");
            setCurrentPage(1);
          }}
          isClearable={false}
        />
      </div>

      <div className="filter-group">
        <label>Date</label>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => {
            setSelectedDate(e.target.value);
            setCurrentPage(1);
          }}
        />
      </div>
    </div>
  );

  return (
    <div className="appointments-container">
      {/* Top row: Search + Mobile filter trigger (user dropdown removed) */}
      <div className="appointments-header">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by name, service, or date…"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
          />
        </div>

        {/* Mobile-only: Filters & Sorting toggle */}
        <div className="mobile-filters">
          <button
            className="mobile-filters-toggle"
            onClick={() => setIsMobileFiltersOpen((v) => !v)}
            aria-expanded={isMobileFiltersOpen}
            aria-controls="mobileFiltersMenu"
          >
            Filters & Sorting ▾
          </button>

          {isMobileFiltersOpen && (
            <div
              id="mobileFiltersMenu"
              className="mobile-filters-menu"
              role="menu"
            >
              <FilterControls />
              <div className="mobile-filters-actions">
                <button
                  className="apply-filters-btn"
                  onClick={() => setIsMobileFiltersOpen(false)}
                >
                  Apply
                </button>
                <button
                  className="reset-filters-btn"
                  onClick={() => {
                    setSelectedStatus("");
                    setSelectedDate("");
                    setSortOption("mostRecent");
                    setCurrentPage(1);
                    setIsMobileFiltersOpen(false);
                  }}
                >
                  Reset
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Main two-column layout */}
      <div className="appointments-layout">
        {/* Left: persistent filters on desktop */}
        <aside className="filters-panel" aria-label="Filters">
          <div className="filters-panel-header">Filters & Sorting</div>
          <FilterControls />
          <div className="filters-panel-footer">
            <button
              className="reset-filters-inline"
              onClick={() => {
                setSelectedStatus("");
                setSelectedDate("");
                setSortOption("mostRecent");
                setCurrentPage(1);
              }}
            >
              Reset Filters
            </button>
          </div>
        </aside>

        {/* Right: table */}
        <main className="appointments-table-container">
          {loading ? (
            <div className="loading-overlay">
              <div className="spinner"></div>
              <p>Loading...</p>
            </div>
          ) : (
            <>
              <table className="appointments-table" role="table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Service</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {currentAppointments.map((appointment, index) => (
                    <tr
                      key={appointment.id}
                      className={index % 2 === 0 ? "even-row" : "odd-row"}
                    >
                      <td>{appointment.name}</td>
                      <td>{appointment.service}</td>
                      <td>{appointment.formattedDate}</td>
                      <td>{appointment.time.replace(", ", " - ")}</td>
                      <td>
                        <span
                          style={{
                            display: "inline-block",
                            padding: "4px 8px",
                            borderRadius: "12px",
                            fontSize: "12px",
                            fontWeight: "600",
                            textTransform: "uppercase",
                            backgroundColor: getStatusColor(appointment.status)
                              .background,
                            color: getStatusColor(appointment.status).color,
                          }}
                        >
                          {appointment.status}
                        </span>
                      </td>
                      <td>
                        <Link to={`/dashboard/appointments/${appointment.id}`}>
                          <button className="view-details-btn">
                            View Details
                          </button>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="pagination">
                <button
                  onClick={() => setCurrentPage(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  Previous
                </button>
                <span>
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  onClick={() => setCurrentPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </div>
            </>
          )}
        </main>
      </div>
    </div>
  );
};

export default Appointments;
