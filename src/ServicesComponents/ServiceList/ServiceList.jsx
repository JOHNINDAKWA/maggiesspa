import React from 'react';
import { Link } from 'react-router-dom';
import services from './ServeList';
import './ServiceList.css';
import HealthDisclaimer from '../HealthDisclaimer/HealthDisclaimer';

const ServiceList = () => {
  return (

    <>
    <div className="services-container">
      <h2 className="services-title">Discover Our Services</h2>
      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <img src={service.image} alt={service.title} className="service-image" />
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
            
            {/* Use Link for internal navigation */}
            <Link to={`/services/${service.id}`} className="service-button">
              Learn More →
            </Link>

          </div>
        ))}
      </div>
    </div>

    <HealthDisclaimer/>
    </>
  );
};

export default ServiceList;
