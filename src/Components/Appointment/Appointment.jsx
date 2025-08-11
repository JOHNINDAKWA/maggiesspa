import React from "react";
import "./Appointment.css";
import { Link } from "react-router-dom";

const Appointment = () => {
  return (
    <div className="appointment-container">
      <div className="appointment-overlay">
        <div className="appointment-content">
          <h2 className="appointment-title">
            Relax, Recharge & Reconnect – You Deserve It, Mama!
          </h2>
          <div className="appointment-line"></div>
          <p className="appointment-description">
            <em>Hey Mama!</em>
            <br />
            <br />
            You’ve made it and now it’s time to put yourself first.
            <br />
            <br />
            Welcome to Maggie’s Pregnancy and Postpartum Spa, your sanctuary of calm, beauty, and
            care. Whether you're pregnant, postpartum, or just need a
            breather, we’re here for you.
            <br />
            <br />
            From massages and facials to stretch mark care and wellness
            sessions, every moment is tailored for your well-being.
            <br />
            <br />
            Because self-care isn’t selfish—it’s sacred. Go ahead and book your
            moment of peace...you’ve earned it.
            <br />
            <br />
            We can't wait to pamper you 💕
          </p>

          <Link to="/book">
            <button className="appointment-button">
              Book Your Appointment
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
