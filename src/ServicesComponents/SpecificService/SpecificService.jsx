import React from "react";
import { Link, useParams } from "react-router-dom";
import services from "../ServiceList/ServeList"; // Import the service list
import "./SpecificService.css";
import { GoArrowUpRight } from "react-icons/go";
import FaqsForm from "../FaqsForm/FaqsForm";
import Postpartum from "../../Pages/SpaServices/SpecificServices/PostPartum/PostPartum";
import Prenatal from "../../Pages/SpaServices/SpecificServices/Prenatal/Prenatal";
import SelfCare from "../../Pages/SpaServices/SpecificServices/SelfCare/SelfCare";
import WomensFertility from "../../Pages/SpaServices/SpecificServices/WomensFertility/WomensFertility";

const SpecificService = () => {
  const { id } = useParams(); 
  const service = services.find((s) => s.id === parseInt(id)); 

  if (!service) {
    return <h2>Service Not Found</h2>;
  }

  return (
    <div className="specific-service-container">
      <div className="specific-service-banner">
        <div className="specific-banner-overlay">
          <h2>{service.title}</h2>
              </div>
      </div>

      <div className="specific-service-container2">
        {/* Left Side: Services List */}
        <div className="services-list">
          <h3 className="services-list-title">Our Services</h3>
          <ul className="services-list-items">
            {services.map((item) => (
              <li
                key={item.id}
                className={`service-item ${
                  item.id === parseInt(id) ? "active" : ""
                }`}
              >
                <Link to={`/services/${item.id}`} className="service-link">
                  {item.title} <GoArrowUpRight className="service-icon" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side: Specific Service Details */}
        <div className="service-details">
          <img
            src={service.image}
            alt={service.title}
            className="service-details-image"
          />
          <h2 className="service-details-title">{service.title}</h2>
          <p className="service-details-description">{service.detailed}</p>

          {/* Benefits Section */}

          <div className="extra-benefits">
            {/* Key Benefits Section */}
            <div className="service-benefits">
              <h3 className="section-title">Key Benefits</h3>
              <ul className="benefits-list">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="benefit-item">
                    <span className="benefit-icon">✔</span> {benefit}
                  </li>
                ))}
              </ul>
            </div>

            {/* Additional Features Section */}
            <div className="service-extras">
              <h3 className="section-title">Additional Features</h3>
              <ul className="extras-list">
                {service.extras.map((extra, index) => (
                  <li key={index} className="extra-item">
                    <span className="extra-icon">➤</span> {extra}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {parseInt(id) === 1 && <Prenatal />}
      {parseInt(id) === 2 && <Postpartum />}
      {parseInt(id) === 3 && <SelfCare />}
      {parseInt(id) === 4 && <WomensFertility />}

      <FaqsForm />
    </div>
  );
};

export default SpecificService;
