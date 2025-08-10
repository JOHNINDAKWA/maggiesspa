// Topbar.jsx
import React from 'react';
import { FaRegCalendarAlt, FaEnvelope } from 'react-icons/fa';
import './Topbar.css';

const Topbar = () => {
  const user = JSON.parse(localStorage.getItem('loggedInUser'));
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'short',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const userName = user?.name || 'Guest';
  const userRole = user?.role || 'User';

  return (
    <header className="topbar">
      <div className="topbar__left">
        <div className="topbar__date">
          <FaRegCalendarAlt aria-hidden="true" />
          <span>{today}</span>
        </div>
      </div>

      <div className="topbar__right">
        <button
          className="topbar__iconBtn topbar__iconBtn--mail"
          aria-label="Open messages"
          title="Messages"
        >
          <FaEnvelope />
          <span className="topbar__dot" aria-hidden="true" />
        </button>

        <div className="topbar__profile">
          <div className="topbar__user">
            <span className="topbar__name">{userName}</span>
            <span className="topbar__role">{userRole}</span>
          </div>
          <div className="topbar__avatar">
            <img
              src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
              alt={`${userName} profile`}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
