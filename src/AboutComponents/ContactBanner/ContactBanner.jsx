import React from "react";
import "./ContactBanner.css";

const ContactBanner = () => {
  return (
    <div className="contact-banner">
      <div className="contact-banner-overlay">
        <h2>Contact Us</h2>
        <p className="breadcrumb">
          <span>Home</span> &gt;&gt; <span className="active">Contact Us</span>
        </p>
      </div>
    </div>
  );
};

export default ContactBanner;
