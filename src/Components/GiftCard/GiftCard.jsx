import { Link } from "react-router-dom";
import "./GiftCard.css";

const GiftCard = () => {
  return (
    <div className="gift-card-section">
      {/* Gift Card Heading */}
      <div className="gift-card-header">
        <h2 className="gift-title">Give the Gift of Wellness & Relaxation</h2>
        <div className="gift-line"></div>
        <p className="gift-subtitle">Surprise your loved ones with a spa experience they’ll cherish</p>
      </div>

      {/* Description */}
      <p className="gift-description">
        Whether for a new mom in need of postpartum recovery, a friend seeking stress relief, 
        or someone who simply deserves a moment of self-care, our gift cards are the perfect way to show love and appreciation.
      </p>

      {/* Offers Section */}
      <div className="offers-container">
        <div className="offer-circle">
          <div className="inner-circle">
            <p>Postpartum <br /> Recovery Massage <br /> <span>Gift Card</span></p>
          </div>
        </div>

        <div className="offer-circle">
          <div className="inner-circle">
            <p>Herbal Healing <br /> Steam Therapy <br /> <span>Gift Card</span></p>
          </div>
        </div>

        <div className="offer-circle">
          <div className="inner-circle">
            <p>Relaxation & <br /> Stress Relief Session <br /> <span>Gift Card</span></p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="gift-card-cta">
        <p>Give the ultimate self-care experience. Purchase a gift card today!</p>
        <Link to='/package' className="gift-button">Get a Gift Card</Link>
      </div>
    </div>
  );
};

export default GiftCard;
