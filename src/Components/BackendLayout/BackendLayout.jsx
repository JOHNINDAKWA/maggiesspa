// BackendLayout.jsx
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import './BackendLayout.css';
import Sidebar from '../Sidebar/Sidebar';
import Topbar from '../Topbar/Topbar'; // Import the new Topbar

const BackendLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`backend-wrapper ${isSidebarOpen ? 'sidebar-open' : ''}`}>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="main-content-area">
        <Topbar /> {/* Add the Topbar here */}
        <div className="main-page-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default BackendLayout;
