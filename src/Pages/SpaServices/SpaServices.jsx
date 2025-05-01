import { Link } from 'react-router-dom';
import ServiceBanner from '../../ServicesComponents/ServicesBanner/ServiceBanner';
import './SpaServices.css';
import Service1 from '../../assets/images/spa-services/service1.jpg';
import Service2 from '../../assets/images/spa-services/service2.jpg';
import Service3 from '../../assets/images/spa-services/service3.jpg';
import Service4 from '../../assets/images/spa-services/service4.jpg';
import Service5 from '../../assets/images/spa-services/service5.jpg';

const SpaServices = () => {
  const services = [
    {
      title: "Postpartum Services",
      description: "Restorative care focused on healing, nurturing, and rejuvenation after childbirth. Tailored support for a smoother recovery journey.",
      image: Service1,
      link: "/services/postpartum"
    },
    {
      title: "Prenatal Services",
      description: "Gentle treatments to support the well-being of both mother and baby during pregnancy. Promotes relaxation and comfort throughout each trimester.",
      image: Service2,
      link: "/services/prenatal"
    },
    {
      title: "Selfcare Services",
      description: "Holistic experiences for body, skin, and feet to restore balance, glow, and inner calm. Your me-time just got an upgrade.",
      image: Service3,
      link: "/services/selfcare"
    },
    {
      title: "Women’s Health Services",
      description: "Targeted therapies that promote breast health, abdominal wellness, and emotional healing. Rooted in nurturing the feminine body.",
      image: Service4,
      link: "/services/womens-health"
    },
    {
      title: "Fertility Services",
      description: "A holistic path to support conception through detox, massage, herbs, and energy work. Align your body, mind, and spirit for new life.",
      image: Service5,
      link: "/services/fertility"
    }
  ];

  return (
    <>
      <ServiceBanner />
      <div className="spa-services">
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card2" key={index}>
              <img src={service.image} alt={service.title} className="service-image" />
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link to={service.link} className="view-service-button">View Service</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SpaServices;
