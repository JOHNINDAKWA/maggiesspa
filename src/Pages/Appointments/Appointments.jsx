import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Appointments.css";
import { Link } from "react-router-dom";

const GOOGLE_SHEET_ID = "1wN9O7qkt7VE7XfnasRKtWSlToRWdr95YIIhNKONEvnE";
const API_KEY = "AIzaSyCS2cNNg1qVwewLXeziZxkRI5V8_QOb9Ek";
const RANGE = "Form Responses 1!A:I";

const ITEMS_PER_PAGE = 20;

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [sortOption, setSortOption] = useState("mostRecent");

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get(
          `https://sheets.googleapis.com/v4/spreadsheets/${GOOGLE_SHEET_ID}/values/${RANGE}?key=${API_KEY}`
        );

        const rows = response.data.values || [];
        const formattedData = rows.slice(1).map((row, index) => ({
          id: index + 1,
          timestamp: row[0],
          service: row[1],
          date: row[2] ? formatDate(row[2]) : "N/A",
          rawDate: row[2], // Store raw date for filtering
          time: row[3]?.replace(",", " - "), // Replace comma with a dash
          name: row[4],
          email: row[6],
          phone: row[7],
          note: row[8],
        }));

        setAppointments(formattedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  // Format date to a readable format
  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  // Sorting Logic
  const sortAppointments = (appointmentsList) => {
    return [...appointmentsList].sort((a, b) => {
      const dateA = new Date(a.rawDate);
      const dateB = new Date(b.rawDate);

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

  // Filter appointments based on search query and selected date
  const filteredAppointments = appointments.filter((appointment) => {
    const matchesSearch =
      appointment.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      appointment.service.toLowerCase().includes(searchQuery.toLowerCase()) ||
      appointment.date.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesDate = selectedDate
      ? appointment.rawDate === selectedDate
      : true;

    return matchesSearch && matchesDate;
  });

  // Apply Sorting
  const sortedAppointments = sortAppointments(filteredAppointments);

  // Pagination Logic
  const totalPages = Math.ceil(sortedAppointments.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentAppointments = sortedAppointments.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <div className="appointments-container">
      {/* Search Bar at the Top */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by name or service..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="appointments-layout">
        {/* Left Sidebar (Filters & Sorting) */}
        <aside className="filter-sort-section">
          {/* Date Filter */}
          <div className="filter-section">
            <label>Filter by Date:</label>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            />
          </div>

          {/* Sorting Section */}
          <div className="sort-section">
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
        </aside>

        {/* Right Section (Table) */}
        <main className="appointments-table-container">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <>
              <table className="appointments-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Service</th>
                    <th>Date</th>
                    <th>Time</th>
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
                      <td>{appointment.date}</td>
                      <td>{appointment.time}</td>
                      <td><Link to={`/appointments/${appointment.id}`} >
                        <button className="view-details-btn">
                          View Details
                        </button>
                      </Link></td>                      
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Pagination Controls */}
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
