// Sidebar.jsx
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaBars, FaTimes, FaCalendarAlt, FaUsers, FaSpa, FaTags,
  FaEnvelope, FaStar, FaChartLine, FaCog, FaSignOutAlt
} from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  const toggleSidebar = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setIsOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navItems = [
    { name: 'Appointments', icon: <FaCalendarAlt />, path: '/dashboard/appointments' },
  ];

  const managementItems = [
    { name: 'Users / Staff', icon: <FaUsers />, path: '/dashboard/users' },
    // { name: 'Services', icon: <FaSpa />, path: '/dashboard/appointments' },
    { name: 'Pricing', icon: <FaTags />, path: '/dashboard/pricing' },
  ];

  const insightsItems = [
    { name: 'Inquiries', icon: <FaEnvelope />, path: '/dashboard/inquiries' },
    { name: 'Google Reviews', icon: <FaStar />, path: '/dashboard/reviews' },
    { name: 'Performance', icon: <FaChartLine />, path: '/dashboard/appointments' },
  ];

  const settingsItems = [
    { name: 'Website Settings', icon: <FaCog />, path: '/dashboard/appointmnets' },
  ];

  const linkClass = ({ isActive }) =>
    `nav-item ${isActive ? 'active' : ''}`;

  return (
    <>
      <button className={`sidebar-toggle ${isOpen ? 'open' : ''}`} onClick={toggleSidebar} aria-label="Toggle sidebar">
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      <aside className={`sidebar-container ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h2 className="admin-logo">Admin</h2>
        </div>

        <nav className="sidebar-nav">
          <div className="nav-group">
            <div className="nav-group-title">Core</div>
            {navItems.map(item => (
              <NavLink key={item.name} to={item.path} className={linkClass} onClick={() => setIsOpen(false)}>
                <div className="nav-active-indicator" />
                <div className="nav-icon-container">{item.icon}</div>
                <span className="nav-label">{item.name}</span>
              </NavLink>
            ))}
          </div>

          <div className="nav-group">
            <div className="nav-group-title">Management</div>
            {managementItems.map(item => (
              <NavLink key={item.name} to={item.path} className={linkClass} onClick={() => setIsOpen(false)}>
                <div className="nav-active-indicator" />
                <div className="nav-icon-container">{item.icon}</div>
                <span className="nav-label">{item.name}</span>
              </NavLink>
            ))}
          </div>

          <div className="nav-group">
            <div className="nav-group-title">Insights</div>
            {insightsItems.map(item => (
              <NavLink key={item.name} to={item.path} className={linkClass} onClick={() => setIsOpen(false)}>
                <div className="nav-active-indicator" />
                <div className="nav-icon-container">{item.icon}</div>
                <span className="nav-label">{item.name}</span>
              </NavLink>
            ))}
          </div>

          <div className="nav-group">
            <div className="nav-group-title">Settings</div>
            {settingsItems.map(item => (
              <NavLink key={item.name} to={item.path} className={linkClass} onClick={() => setIsOpen(false)}>
                <div className="nav-active-indicator" />
                <div className="nav-icon-container">{item.icon}</div>
                <span className="nav-label">{item.name}</span>
              </NavLink>
            ))}
          </div>
        </nav>

        <div className="sidebar-footer">
          <div className="user-profile-summary">
            <div className="profile-image-container">
              <img
                src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
                alt="User Profile"
                className="profile-image"
              />
            </div>
            <div className="user-info">
              <span className="user-name">{user?.name || "Guest"}</span>
              <span className="user-role">{user?.role || "User"}</span>
            </div>
          </div>

          <button
            className="logout-btn"
            onClick={() => {
              localStorage.removeItem("loggedInUser");
              window.location.href = "/login";
            }}
          >
            <div className="nav-icon-container"><FaSignOutAlt /></div>
            Logout
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
