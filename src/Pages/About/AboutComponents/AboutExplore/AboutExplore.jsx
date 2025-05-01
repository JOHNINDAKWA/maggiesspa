import "./AboutExplore.css";
import Scissors from "../../../../assets/images/scissors.jpg"; // Reinterpreted as self-care ritual
import Soap from "../../../../assets/images/soap.jpg";       // Used for wellness products
import Leg from "../../../../assets/images/leg.png";         // Used for therapeutic massage

const AboutExplore = () => {
  return (
    <div className="about-explore-container">
      <div className="explore-top">
        <h1>Sacred Moments at Maggie’s Pregnancy Spa</h1>
        <p>
          Every visit to Maggie’s P&P Spa is an invitation to slow down, connect,
          and embrace your journey as a woman. From pregnancy to postpartum and beyond,
          we craft soulful experiences that heal, empower, and restore.
        </p>
      </div>

      <div className="explore-bottom">
        <div className="explore-bottom-item">
          <img src={Scissors} alt="Warm Cloth Ritual" />
          <div className="explore-bottom-content">
            <h3>Rituals of Care</h3>
            <p>
              From warm compresses to gentle wraps, every detail honors your body’s rhythm and comfort.
            </p>
          </div>
        </div>

        <div className="explore-bottom-item">
          <img src={Leg} alt="Foot Massage" />
          <div className="explore-bottom-content">
            <h3>Touch with Intention</h3>
            <p>
              Skilled hands, calming oils, and therapeutic massage—designed for mothers, made with love.
            </p>
          </div>
        </div>

        <div className="explore-bottom-item">
          <img src={Soap} alt="Wellness Products" />
          <div className="explore-bottom-content">
            <h3>Nature’s Healing</h3>
            <p>
              We use natural products and time-honored remedies to support your healing from the inside out.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutExplore;
