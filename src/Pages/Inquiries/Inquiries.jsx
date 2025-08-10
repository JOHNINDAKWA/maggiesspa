import React from "react";
import { Link } from "react-router-dom";
import { FaChevronRight, FaInbox, FaRedoAlt } from "react-icons/fa";
import "./Inquiries.css";

const Inquiries = () => {
  return (
    <div className="inquiries-page">
      {/* Header / Breadcrumb */}
      <div className="inquiries-header">
        <nav className="inq-breadcrumb" aria-label="Breadcrumb">
          <Link to="/dashboard" className="crumb">Dashboard</Link>
          <FaChevronRight className="crumb-sep" aria-hidden="true" />
          <span className="crumb current">Inquiries</span>
        </nav>

        <div className="inq-actions">
          <Link to="/contact" className="btn btn-ghost">Preview Public Form</Link>
        </div>
      </div>

      {/* Empty state card */}
      <section className="inquiries-empty" aria-live="polite">
        <div className="empty-visual">
          <div className="halo"></div>
          <div className="badge">
            <FaInbox />
          </div>
        </div>

        <h2 className="empty-title">No inquiries yet</h2>
        <p className="empty-subtitle">
          When a client submits the website form, it’ll appear here automatically.
        </p>

        <div className="empty-buttons">
          <button className="btn btn-primary" type="button">
            <FaRedoAlt className="btn-ic" /> Refresh
          </button>
          <Link className="btn btn-outline">
            Configure Intake Settings
          </Link>
        </div>

        <div className="empty-hints">
          <div className="hint">
            • You'll also receive an email notification for each new inquiry.
          </div>
          <div className="hint">
            • Each new submission will create a card in this list.
          </div>
        </div>
      </section>
    </div>
  );
};

export default Inquiries;
