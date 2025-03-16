import "./Stats.css";
import BGImg from "../../assets/images/spa-stone-wash-petals-white-bgimage.jpg";
import IconOne from "../../assets/images/icon-cheppals-pink.png";
import IconTwo from "../../assets/images/icon-flask-mug-yellow.png";
import IconThree from "../../assets/images/icon-herbal-soil-green.png";
import { Link } from "react-router-dom";

const Stats = () => {
  return (
    <div className="stats-container">
      <div className="stats-overlay">
        <div className="stats-items">
          <div className="stat-item">
            <div className="stat-icon rhombus pink">
              <img src={IconOne} alt="Icon One" />
            </div>

            <h2 className="p-pink">4000+</h2>
            <div className="stat-line"></div>

            <p>Therapies Done</p>
          </div>
          <div className="stat-item">
            <div className="stat-icon rhombus yellow">
              <img src={IconTwo} alt="Icon Two" />
            </div>

            <h2 className="p-yellow">15000+</h2>
            <div className="stat-line"></div>

            <p>Happy Clients</p>
          </div>
          <div className="stat-item">
            <div className="stat-icon rhombus green">
              <img src={IconThree} alt="Icon Three" />
            </div>

            <h2 className="p-green">2000</h2>
            <div className="stat-line"></div>

            <p>Natural Treatments</p>
          </div>
        </div>
        <div className="stats-footer">
          <h3>Experience Ultimate Postpartum Relaxation</h3>
          <div className="stat-line"></div>
          <p>
            Restore, Heal, and Rejuvenate.
          </p>
          <Link to='/services'><button className="stats-explore">EXPLORE SERVICES</button></Link>
          
        </div>
      </div>
    </div>
  );
};

export default Stats;
