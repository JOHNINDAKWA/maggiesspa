import './Future.css'
import { FaArrowTrendUp, FaLeaf, FaRegFaceSmileBeam, FaSpa } from "react-icons/fa6";
import TinyBottle from "../../assets/images/candle.png";
import MaggyMaggy from "../../assets/images/maggy2.jpeg";
import { Link } from 'react-router-dom';


const Future = () => {
  return (
    <div className="future-container">
      <div className="future-left">
        <div className="future-left-top">
          <h2>Embrace the Art of Wellness</h2>
          <p>
            Beyond relaxation, a true wellness experience awakens your senses, nurtures your soul, and reconnects you with nature. Step into a space where serenity meets expertise, and let each touch guide you toward harmony.
          </p>
        </div>

        <div className="future-left-bottom">
          <div className="left">
            <img src={TinyBottle} alt="Aromatic Massage Oil" />
            <p>
              "Wellness is not a luxury; it is the foundation of a fulfilled life."  
            </p>
          </div>

          <div className="right">
            <h3>Our Signature Wellness Journey</h3>
            <div className="right-list">
              <ul>
                <li><FaLeaf /> Nature-inspired Treatments</li>
                <li><FaSpa /> Personalized Holistic Therapies</li>
                <li><FaRegFaceSmileBeam /> Rejuvenation for Mind & Body</li>
                <li><FaLeaf /> Organic & Sustainable Practices</li>
                <li><FaSpa /> A Sanctuary of Tranquility</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="future-right">
        <img src={MaggyMaggy} alt="Wellness & Relaxation" />

        <div className="future-right-bottom">
          <p>“To find yourself, lose yourself in the rhythm of nature and stillness of the soul.”</p>
          <Link to='/book'><button>Begin Your Journey</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Future;