import { FaSpa, FaHeartbeat, FaUserMd, FaHandsHelping, FaBookMedical } from "react-icons/fa";
import './WhyChooseUs.css'

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      <h2>Why Choose Maggies Spa? </h2>
      <div className="features-grid">
        <div className="feature">
          <FaUserMd className="feature-icon" />
          <h3>Dedicated Expertise</h3>
          <p>Our specialists provide expert maternal wellness care.</p>
        </div>
        <div className="feature">
          <FaSpa className="feature-icon" />
          <h3>Safe & Calming Environment</h3>
          <p>A retreat designed for relaxation and self-care.</p>
        </div>
        <div className="feature">
          <FaHeartbeat className="feature-icon" />
          <h3>Personalized Care</h3>
          <p>Every treatment is customized to your needs.</p>
        </div>
        <div className="feature">
          <FaHandsHelping className="feature-icon" />
          <h3>Comprehensive Support</h3>
          <p>Education, emotional support, and community guidance.</p>
        </div>
        <div className="feature">
          <FaBookMedical className="feature-icon" />
          <h3>Evidence-Based Practices</h3>
          <p>Maternal care backed by the latest research.</p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
