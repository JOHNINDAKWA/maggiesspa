import React from "react";
import "./Deserve.css";

import Service_1 from "../../assets/images/postnatal1.jpg";
import Service_2 from "../../assets/images/spa-services/mag39.jpg";
import Service_3 from "../../assets/images/facial2.avif";
import Service_4 from "../../assets/images/spa-services/mag38.jpg";
import Service_5 from "../../assets/images/spa-services/mag34.jpg";

import Thing1 from "../../assets/images/thing1png.png";
import Thing2 from "../../assets/images/thing2.png";
import Thing3 from "../../assets/images/thing3.png";
import Thing4 from "../../assets/images/thing4.png";
import Thing5 from "../../assets/images/thing5.png";
import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    title: "Prenatal Massage Therapy",
    description:
      "Relieve back pain, improve circulation, and relax with safe, tailored techniques for moms-to-be.",
    image: Service_1,
  },
  {
    id: 2,
    title: "Postpartum Massage Therapy",
    description:
      "Ease physical stress after childbirth, reduce pain, and speed up postpartum recovery.",
    image: Service_2,
  },
  {
    id: 3,
    title: "Self-Care Rituals",
    description:
      "Our Signature Self-Care Rituals are designed to nourish your skin and honor your feminine essence. ",
    image: Service_3,
  },
  {
    id: 4,
    title: "Women's Wellness & Fertility",
    description:
      "Holistic therapies for breast health, emotional balance, and fertility support.",
    image: Service_4,
  },
  {
    id: 5,
    title: "Belly Binding Therapy",
    description:
      "Enhance flexibility, strength, and mental focus to prepare for labor and reduce stress.",
    image: Service_5,
  },
];

const Deserve = () => {
  return (
    <div className="deserve-container">
      <h3 className="havel">Mums Deserve Our Best</h3>
      <div className="deserve-line"></div>
      <h5>Get to know the various services</h5>

      {/* Top Featured Service */}
      <div className="deserve-service-top">
        <img className="side-img" src={services[0].image} alt={services[0].title} />
        <div className="deserve-service-top-content">
          <h2>We Treat You Our Best</h2>
          <div className="deserve-title">
            <img src={Thing1} alt="icon" />
            <h3>{services[0].title}</h3>
          </div>
          <p>{services[0].description}</p>
          <Link to='/services'>
                <button className="deserve">Discover More</button>
              </Link>
        </div>
      </div>

      {/* Bottom Services Grid */}
      <div className="deserve-service-bottom">
        {services.slice(1).map((service, index) => (
          <div className="deserve-item" key={service.id}>
            <img src={service.image} alt={service.title} className="top-img" />
            <div className="btm-content">
              <div className="deserve-title">
                <img src={index === 0 ? Thing2 : index === 1 ? Thing3 : index === 2 ? Thing4 : Thing5} alt="icon" />
                <h3>{service.title}</h3>
              </div>
              <p>{service.description}</p>
              <Link to='/services'>
                <button className="deserve">Discover More</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Deserve;
