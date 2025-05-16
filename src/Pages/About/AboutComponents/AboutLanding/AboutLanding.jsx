import React from "react";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import AB1 from "../../../../assets/images/about-maggy.jpg";
import "./AboutLanding.css";
import { Link } from "react-router-dom";

const AboutLanding = () => {
  return (
    <div className="about-landing-container">
      <div className="about-landing-left">
        <span>About</span>
        <h2>Maggy P & P Spa – Where Motherhood Meets Wellness</h2>

        <p>
          At Maggie’s Pregnancy & Postpartum Spa, we offer more than treatments—we
          provide a sanctuary for healing and self-care. Specializing in pregnancy,
          postpartum, and women’s holistic health, we nurture every woman’s journey
          with expert, heartfelt care rooted in tradition and innovation.
        </p>

        <div className="listed-items">
          <ul>
            <li>
              <IoCheckmarkDoneOutline /> Expert care for moms & infants
            </li>
            <li>
              <IoCheckmarkDoneOutline /> Holistic pregnancy & postpartum healing
            </li>
            <li>
              <IoCheckmarkDoneOutline /> Tailored women’s wellness therapies
            </li>
          </ul>

          <ul>
            <li>
              <IoCheckmarkDoneOutline /> Tranquil, restorative experiences
            </li>
            <li>
              <IoCheckmarkDoneOutline /> Decade of spa & wellness expertise
            </li>
            <li>
              <IoCheckmarkDoneOutline /> Community & maternal outreach
            </li>
          </ul>
        </div>

        <Link to='/services'>View More</Link>
      </div>

      <div className="about-landing-right">
        <img src={AB1} alt="Maggy P & P Spa" />

        <div className="img-bottom-left-corner">
          <p>10+ Years</p>
          <p>Experience</p>
        </div>
      </div>
    </div>
  );
};

export default AboutLanding;
