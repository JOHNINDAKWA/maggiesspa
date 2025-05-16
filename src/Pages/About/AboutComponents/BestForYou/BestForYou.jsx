import React from "react";
import "./BestForYou.css"; // Import the CSS file
import { FaPlay } from "react-icons/fa";
import Best from "../../../../assets/images/image1.jpg";

const BestForYou = () => {
  return (
    <section className="best-for-you">
      {/* Left Side - Image with Play Button */}
      <div className="best-for-you-left">
        <img src={Best} alt="Spa Experience" />
        <div className="play-button">
          <FaPlay />
        </div>
      </div>

      {/* Right Side - Text Content */}
      <div className="best-for-you-right">
        <h2>Empowering Care, Elevating Standards</h2>
        <p>
          At Maggie’s Pregnancy & Postpartum Spa, we go beyond wellness services by 
          offering specialized training programs for spas, hospitals, colleges, and hotels. 
          Our workshops equip professionals with essential maternal care, wellness, and holistic therapy skills.
        </p>

        <div className="listed-list">
          <ul>
            <li>Professional spa & maternity care training</li>
            <li>Workshops for hospitals & wellness centers</li>
            <li>Holistic therapy certifications</li>
          </ul>

          <ul>
            <li>Pregnancy & postpartum wellness sessions</li>
            <li>Newborn care & breastfeeding classes</li>
          </ul>
        </div>

        <div className="buttons">
          <button className="services-btn">Explore Training</button>
          <Link className="services-btn" to='/contact'>Contact Us</Link>
        </div>
      </div>
    </section>
  );
};

export default BestForYou;
