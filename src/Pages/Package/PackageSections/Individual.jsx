import './PackageSection.css';
import Price1 from '../../../assets/images/price1.jpg';
import Price2 from '../../../assets/images/price2.jpg';
import Price3 from '../../../assets/images/price3.jpg';
import Price4 from '../../../assets/images/price4.jpg';
import Price5 from '../../../assets/images/price5.jpg';
import Price6 from '../../../assets/images/price6.jpg';
import Price7 from '../../../assets/images/price7.jpg';
import Price8 from '../../../assets/images/price8.jpg';

const serviceCategories = [
  {
    heading: "Prenatal & Postpartum Packages",
    services: [
      { image: Price1, description: "60-Min Prenatal Massage", price: "KES 6,000 ($40)" },
      { image: Price2, description: "90-Min Prenatal Massage", price: "KES 8,500 ($55)" },
      { image: Price3, description: "60-Min Postpartum Massage", price: "KES 6,500 ($45)" },
      { image: Price4, description: "90-Min Postpartum Massage", price: "KES 9,000 ($60)" }
    ]
  },
  {
    heading: "Skincare & Facial Treatments",
    services: [
      { image: Price5, description: "Stretch Mark & Skin Elasticity Treatment", price: "KES 6,000 ($40)" },
      { image: Price6, description: "Postpartum Hydration Facial", price: "KES 5,500 ($38)" },
      { image: Price7, description: "Pregnancy Glow Facial", price: "KES 6,000 ($40)" },
      { image: Price8, description: "90-Min Postpartum Massage", price: "KES 7,000 ($50)" }
    ]
  },
  {
    heading: "Postpartum Recovery Herbs & Herbal Therapy",
    services: [
      { image: Price1, description: "Herbal Sitz Bath (Single Session)", price: "KES 4,000 ($30)" },
      { image: Price2, description: "Herbal Compress Therapy", price: "KES 5,000 ($35)" },
      { image: Price3, description: "Herbal Teas & Supplements (Monthly Pack)", price: "KES 6,500 ($45)" }
    ]
  },
  {
    heading: "Fitness & Wellness",
    services: [
      { image: Price4, description: "Prenatal Yoga (Group Session)", price: "KES 2,500 ($18)" },
      { image: Price5, description: "Prenatal Yoga (Private Session)", price: "KES 5,000 ($35)" },
      { image: Price6, description: "Lactation & Breastfeeding Consultation", price: "KES 4,000 ($30)" }
    ]
  },
  {
    heading: "Educational Workshops & Support Groups",
    services: [
      { image: Price7, description: "One-Day Pregnancy Wellness Workshop", price: "KES 8,000 ($55)" },
      { image: Price8, description: "Postpartum Mental Health & Recovery Session", price: "KES 5,000 ($35)" },
      { image: Price1, description: "Newborn Care & Breastfeeding Class", price: "KES 5,500 ($40)" }
    ]
  }
];

const Individual = () => {
  return (
    <div className="individual-container">
      <div className="individual">
        <h3>Individual Services Pricing</h3>

        <div className="individual-items">
          {serviceCategories.map((category, index) => (
            <div key={index} className={`individual-item ${category.column}`}>
              <h4 className="category-heading">{category.heading}</h4>
              <div className="individual-service-list">
                {category.services.map((service, idx) => (
                  <div key={idx} className="individual-service">
                    <img src={service.image} alt={service.description} />
                    <div className="individual-details">
                      <p>{service.description}</p>
                    </div>
                    <div className="individual-horizontal-line"></div>
                    <span className="price">{service.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Individual;