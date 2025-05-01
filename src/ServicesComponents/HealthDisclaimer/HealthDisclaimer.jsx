import React from "react";
import "./HealthDisclaimer.css";
import { RiShieldCheckLine } from "react-icons/ri";

const HealthDisclaimer = () => {
  return (
    <section className="health-disclaimer-section">
      <div className="disclaimer-container">
        <div className="disclaimer-icon">
          <RiShieldCheckLine className="icon" />
        </div>
        <h2 className="disclaimer-heading">Health & Safety Disclaimer</h2>
        <p className="disclaimer-text">
          At <strong>Maggie’s Pregnancy and Postpartum Spa</strong>, your well-being is our top priority. If you have any health conditions that could be affected by our treatments, we kindly request a <strong>doctor’s note</strong> confirming that it's safe to proceed.
        </p>
        <p className="disclaimer-text">
          Please remember, our therapies are designed for wellness and comfort and are <strong>not a substitute for medical care</strong>. Always consult your healthcare provider before undergoing any alternative therapies—especially if managing pregnancy-related conditions or chronic illness.
        </p>
        <p className="disclaimer-text">
          We are here to support you. If you have concerns or questions, feel free to <strong>contact us</strong> for guidance before booking.
        </p>
      </div>
    </section>
  );
};

export default HealthDisclaimer;
