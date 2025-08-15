import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FiHome, FiPhone, FiArrowLeft, FiArrowRight, FiSearch } from "react-icons/fi";
import "./NotFound.css";

const NotFound = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <section className="nf-wrap" role="main" aria-labelledby="nf-title">
      <div className="nf-shell">
        <div className="nf-badge">404</div>

        <h1 id="nf-title" className="nf-title">
          Page not found
        </h1>

        <p className="nf-sub">
          We couldn’t find <span className="nf-path">“{location.pathname}”</span>.
          It may have moved, or the link is incorrect.
        </p>

        <div className="nf-quick">
          <button className="nf-ghost" onClick={() => navigate(-1)}>
            <FiArrowLeft /> Go back
          </button>
          <Link className="nf-primary" to="/">
            <FiHome /> Go to Home
          </Link>
        </div>

        <div className="nf-grid">
          <Link to="/services" className="nf-card">
            <div className="nf-card-icon"><FiSearch /></div>
            <div className="nf-card-title">Browse Services</div>
            <div className="nf-card-sub">Explore prenatal, postpartum, and wellness care.</div>
            <span className="nf-card-cta">View services <FiArrowRight /></span>
          </Link>

          <Link to="/book" className="nf-card">
            <div className="nf-card-icon"><FiArrowRight /></div>
            <div className="nf-card-title">Book an Appointment</div>
            <div className="nf-card-sub">Pick a date and time that works for you.</div>
            <span className="nf-card-cta">Book now <FiArrowRight /></span>
          </Link>

          <Link to="/contact" className="nf-card">
            <div className="nf-card-icon"><FiPhone /></div>
            <div className="nf-card-title">Contact Us</div>
            <div className="nf-card-sub">Have a question? We’re happy to help.</div>
            <span className="nf-card-cta">Get in touch <FiArrowRight /></span>
          </Link>
        </div>
      </div>

      {/* soft background accents */}
      <div className="nf-blob nf-blob-a" aria-hidden="true" />
      <div className="nf-blob nf-blob-b" aria-hidden="true" />
    </section>
  );
};

export default NotFound;
