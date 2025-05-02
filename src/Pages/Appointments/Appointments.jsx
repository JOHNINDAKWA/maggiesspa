import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Appointments.css";
import { Link } from "react-router-dom";

const BIN_ID = "68139f1b8561e97a500b9e03";
const MASTER_KEY =
  "$2a$10$v.Wz5cNjZbcvhC1nqnnYl.o9V6KJzJ7U7JnB.ZO4VwoYlh9TAvevm";
const ITEMS_PER_PAGE = 25;

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [sortOption, setSortOption] = useState("mostRecent");
  const [selectedStatus, setSelectedStatus] = useState("");

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

    const matchesStatus = selectedStatus
      ? appt.status === selectedStatus
      : true;

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

  return (
    <div className="appointments-container">
      {/* Search Bar */}
      <div className="search-bar-with-user">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by name or service..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="user-dropdown">
          <span className="user-name">
            {JSON.parse(localStorage.getItem("loggedInUser"))?.name || "Guest"}
          </span>
          <div className="dropdown-content">
            <Link to="/profile">Profile</Link>

            {/* Admin-only options */}
            {JSON.parse(localStorage.getItem("loggedInUser"))?.role ===
              "admin" && (
              <>
                <Link to="/users">Users / Staff</Link>
                <Link to="/reports">Reports</Link>
              </>
            )}

            <button
              onClick={() => {
                localStorage.removeItem("loggedInUser");
                window.location.href = "/login";
              }}
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="appointments-layout">
        {/* Filter Dropdown */}
        <div className="filter-dropdown">
          <button className="filter-toggle">Filter ▾</button>
          <div className="filter-options">
            <div className="filter-group">
              <label>Sort By:</label>
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option value="mostRecent">Most Recent</option>
                <option value="upcoming">Upcoming Appointments</option>
                <option value="oldest">Oldest First</option>
              </select>
            </div>

            <div className="filter-group">
              <label>Filter by Status:</label>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
              >
                <option value="">All</option>
                <option value="Pending">Pending</option>
                <option value="Confirmed">Confirmed</option>
                <option value="Completed">Completed</option>
                <option value="Cancelled">Cancelled</option>
                <option value="No Show">No Show</option>
              </select>
            </div>

            <div className="filter-group">
              <label>Filter by Date:</label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Main Table */}
        <main className="appointments-table-container">
          {loading ? (
            <div className="loading-overlay">
              <div className="spinner"></div>
              <p>Loading...</p>
            </div>
          ) : (
            <>
              <table className="appointments-table">
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
                        <Link to={`/appointments/${appointment.id}`}>
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
