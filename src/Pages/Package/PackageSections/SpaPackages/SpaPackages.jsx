import { Link } from "react-router-dom";
import "./SpaPackages.css";

const spaPackages = [
  {
    title: "Prenatal Bliss Package",
    price: "KES 15,000 / $105",
    gradient: "linear-gradient(135deg, #F8CBA6, #F2A57E)", 
    features: [
      "60-Min Prenatal Massage",
      "Pregnancy Glow Facial",
      "Herbal Sitz Bath"
    ],
    link: '/services/1'
  },
  {
    title: "Postpartum Renewal Package",
    price: "KES 18,000 / $125",
    gradient: "linear-gradient(135deg,rgb(117, 255, 255),rgb(3, 121, 121))", 
    features: [
      "90-Min Postpartum Massage",
      "Herbal Compress Therapy",
      "Stretch Mark & Skin Elasticity Treatment"
    ],
     link: '/services/2'
  },
  {
    title: "Ultimate Mama Care Package",
    price: "KES 28,000 / $195",
    gradient: "linear-gradient(135deg, #E6B8A2, #D19C85)", 
    features: [
      "3x Prenatal Massage Sessions",
      "3x Postpartum Massage Sessions",
      "Pregnancy Glow Facial",
      "Postpartum Recovery Herbal Tea (1 Month)",
      "Lactation & Breastfeeding Consultation"
    ],
     link: '/services/2'
  }
];

const SpaPackages = () => {
  return (
    <div className="spa-packages-container">
      <h3 className="section-heading">Spa Packages <span>Monthly</span></h3>

      <div className="spa-packages">
        {spaPackages.map((packageItem, index) => (
          <div key={index} className="spa-package-card">
            <div 
              className="package-header" 
              style={{ background: packageItem.gradient }}
            >
              <h4 className="package-title">{packageItem.title}</h4>
            </div>
            <div className="package-body">
              <p className="package-price">{packageItem.price}</p>
              <ul className="package-features">
                {packageItem.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
            <Link to={packageItem.link} className="book-now-btn" style={{ background: packageItem.gradient }}>
              See More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpaPackages;
