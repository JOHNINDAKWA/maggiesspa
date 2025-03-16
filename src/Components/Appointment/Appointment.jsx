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
            <em>Hey Mama!</em> <br /><br />
            You made it here—which means it's officially time to put yourself first!  
            <br /><br />
            Welcome to Maggy P & P Spa, your sanctuary for relaxation, beauty, and self-care.  
            We’re not just a spa—we’re your escape from the chaos of motherhood (even if just for an hour!).  
            <br /><br />
            Whether you’re expecting, newly postpartum, or just in need of some well-earned TLC, we’ve got your back (literally—with the best massages in town!).  
            <br /><br />
            From therapeutic massages and luxurious facials to skincare treatments and stretch mark solutions, we tailor every experience just for you.  
            Need some movement? Our prenatal yoga & fitness sessions will have you feeling strong and centered.  
            Want to just breathe? Let our expert therapists melt your stress away in a calming, serene atmosphere.  
            <br /><br />
            And the best part? You’ll be surrounded by other amazing moms who get it. Because self-care isn't selfish—it’s essential.  
            So go ahead, Mama—book that appointment. You’ve earned this!  
            <br /><br />
            Can’t wait to pamper you!  
          </p>
          <Link to="/contact">
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
