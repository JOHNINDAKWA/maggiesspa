import './Bliss.css';
import flower from '../../assets/images/flower.jpg';

const Bliss = () => {
  return (
    <div className="bliss-container">
      {/* Left Section */}
      <div className="bliss-left">
        <div className="bliss-text">
          <h2>Our Specialized Services</h2>
          <div className="bliss-line"></div>
          <p className="bliss-subtitle">Caring for You at Every Stage</p>
          <p className="bliss-description">
          We offer expertly tailored services designed to support you through pregnancy and postpartum recovery. Experience holistic care in a peaceful and nurturing environment.
          </p>
        </div>
        <div className="bliss-image">
          <img src={flower} alt="Flower" />
        </div>
      </div>

      {/* Right Section */}
      <div className="bliss-right">
        <div className="bliss-item">
          <div className="bliss-item-img aroma"></div>
          <div className="bliss-item-text">
            <h3>Prenatal Massage Therapy</h3>
            <div className="bliss-item-line"></div>
            <p>
            Relieve muscle tension, improve circulation, and ease discomforts like back pain and swelling with a safe, tailored prenatal massage experience.
            </p>
          </div>
        </div>

        <div className="bliss-item">
          <div className="bliss-item-img hot-stone"></div>
          <div className="bliss-item-text">
          <h3>Postpartum Massage Therapy</h3>
            <div className="bliss-item-line"></div>
            <p>
            Designed to help mothers recover after childbirth by reducing pain, improving mobility, and promoting relaxation during the healing process.
            </p>
          </div>
        </div>

        <div className="bliss-item">
          <div className="bliss-item-img manicure"></div>
          <div className="bliss-item-text">
            <h3>Customized Facial & Skincare Treatments</h3>
            <div className="bliss-item-line"></div>
            <p>
            Specially formulated facials to nourish sensitive skin, combat acne, hyperpigmentation, and dryness, restoring a natural, healthy glow.
            </p>
          </div>
        </div>

        <div className="bliss-item">
          <div className="bliss-item-img spa"></div>
          <div className="bliss-item-text">
            <h3>Body Treatments & Stretch Mark Solutions</h3>
            <div className="bliss-item-line"></div>
            <p>
            Hydrating wraps, exfoliation, and massage techniques designed to improve skin elasticity, reduce stretch marks, and restore overall skin health.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bliss;
