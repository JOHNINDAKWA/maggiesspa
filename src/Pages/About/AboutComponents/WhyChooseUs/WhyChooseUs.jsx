import {
  FaSpa,
  FaHeartbeat,
  FaUserMd,
  FaHandsHelping,
  FaBookMedical,
} from "react-icons/fa";
import "./WhyChooseUs.css";

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      <h2>Why Choose Maggie’s Spa?</h2>
      <div className="features-grid">
        <div className="feature">
          <FaUserMd className="feature-icon" />
          <h3>Rooted in Experience</h3>
          <p>A decade of expertise in women's and maternity wellness.</p>
        </div>
        <div className="feature">
          <FaSpa className="feature-icon" />
          <h3>A Healing Sanctuary</h3>
          <p>Designed to nurture the body, mind, and spirit.</p>
        </div>
        <div className="feature">
          <FaHeartbeat className="feature-icon" />
          <h3>Holistic Care</h3>
          <p>Natural, tailored treatments for every life phase.</p>
        </div>
        <div className="feature">
          <FaHandsHelping className="feature-icon" />
          <h3>Empowering Women</h3>
          <p>Support through care, training, and community outreach.</p>
        </div>
        <div className="feature">
          <FaBookMedical className="feature-icon" />
          <h3>Professional & Personal</h3>
          <p>Each session blends skill with heartfelt attention.</p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
