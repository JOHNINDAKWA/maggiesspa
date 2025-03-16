import React from "react";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import AB1 from "../../../../assets/images/ab1.jpg";
import "./AboutLanding.css";

const AboutLanding = () => {
  return (
    <div className="about-landing-container">
      <div className="about-landing-left">
        <span>About</span>
        <h2>Maggy P & P Spa – A Sanctuary of Wellness and Rejuvenation</h2>

        <p>
          Maggy P & P Spa is dedicated to providing exceptional spa treatments
          with a focus on relaxation, beauty, and holistic well-being. Our team
          of skilled therapists ensures that each session leaves you feeling
          refreshed and revitalized.
        </p>

        <div className="listed-items">
          <ul>
            <li>
              <IoCheckmarkDoneOutline /> Organic, oil-free treatments
            </li>
            <li>
              <IoCheckmarkDoneOutline /> Expert prenatal & postnatal massages
            </li>
            <li>
              <IoCheckmarkDoneOutline /> Luxurious facials & body care
            </li>
          </ul>

          <ul>
            <li>
              <IoCheckmarkDoneOutline /> Soothing hot stone therapy
            </li>
            <li>
              <IoCheckmarkDoneOutline /> Soft towels & bathrobes
            </li>
            <li>
              <IoCheckmarkDoneOutline /> 25+ years of expertise
            </li>
          </ul>
        </div>

        <button>View More</button>
      </div>

      <div className="about-landing-right">
        <img src={AB1} alt="Maggy P & P Spa" />

        <div className="img-bottom-left-corner">
          <p>25+ Years</p>
          <p>Experience</p>
        </div>
      </div>
    </div>
  );
};

export default AboutLanding;
