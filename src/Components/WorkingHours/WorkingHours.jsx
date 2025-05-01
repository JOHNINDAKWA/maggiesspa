import "./WorkingHours.css";

import TopImg from "../../assets/images/image4.jpg";
import BottomImg from "../../assets/images/image3.jpg";
import Leg from "../../assets/images/leg.png";
import Bottle from "../../assets/images/bottle.png";
import Candle from "../../assets/images/candle.png";

const WorkingHours = () => {
  return (
    <div className="working-hours-container">
      <h2>Nurturing Wellness, One Touch at a Time</h2>

      <div className="working-hours-top">
        <div className="top-image">
          <img src={TopImg} alt="Massage Therapy" />
        </div>
        <div className="top-content">
          <p>
            Escape the stress of daily life and indulge in a serene, healing
            atmosphere. Our tailored spa treatments focus on deep relaxation,
            rejuvenation, and complete wellness. Take a deep breath, let go, and
            allow yourself to be pampered in a tranquil setting designed for
            your comfort.
          </p>
          <div className="line"></div>
          <div className="top-content-items">
            <div className="top-content-item">
              <img src={Leg} alt="Spa Treatment" />
              <h3>Luxury Spa & Massage</h3>
            </div>
            <div className="top-content-item">
              <img src={Bottle} alt="Herbal Products" />
              <h3>Natural Herbal Therapy</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="working-hours-bottom">
        <div className="working-hours-left">
          <span>Operating Hours</span>

          <div className="items">
            <div className="item">
              <p>Monday - Friday</p>
              <p>8:30 AM - 7:00 PM</p>
            </div>
            <div className="items-line"></div>
            <div className="item">
              <p>Saturday</p>
              <p>9:00 AM - 5:00 PM</p>
            </div>
            <div className="items-line"></div>
            <div className="item">
              <p>Sunday</p>
              <p>10:00 AM - 4:00 PM</p>
            </div>
            <div className="items-line"></div>

            <div className="items-bottom">
              <img src={Candle} alt="Relaxation Candle" />
              <h4>"Self-care is not a luxury, it's a necessity."</h4>
            </div>
          </div>
        </div>

        <div className="working-hours-right">
          <img src={BottomImg} alt="Relaxation Space" />
        </div>
      </div>
    </div>
  );
};

export default WorkingHours;
