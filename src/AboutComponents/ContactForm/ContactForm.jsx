import './ContaactForm.css'
import { LuTimerReset } from "react-icons/lu";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const ContactForm = () => {
  return (
    <div className="contactForm-container">
      <div className="contactForm-details">
        <div className="detail-item">
          <FaLocationDot />
          <div className="detail-info">
            <span>Center Address</span>
            <p>Karen, 31 Nandi Rd Nairobi, Kenya</p>
          </div>
        </div>

        <div className="detail-item">
        <FaPhoneSquareAlt />
          <div className="detail-info">
            <span>Phone</span>
            <p>+254 796 125 105</p>
          </div>
        </div>


        <div className="detail-item">
        <MdOutlineMarkEmailRead />
          <div className="detail-info">
            <span>Center Address</span>
            <p>info@maggiesspa.com</p>
          </div>
        </div>

        <div className="detail-item">
        <LuTimerReset />
          <div className="detail-info">
            <span>Working Hours</span>
            <p>Check Next Section</p>
          </div>
        </div>
      </div>

      <div className="contactForm-content">
  <h2>We're Here for You</h2>

  {/* Contact Form */}
  <form className="contactForm-form">
    {/* Email & Phone Number Side by Side */}
    <div className="contactForm-row">
      <input type="text" placeholder="Your Name" required />
      <input type="tel" placeholder="Your Phone Number" required />
    </div>

    <div className="contactForm-row">
      <input type="email" placeholder="Your Email" required />

      <select required>
        <option value="">Choose a Spa Service</option>
        <option value="Massage Therapy">Massage Therapy</option>
        <option value="Prenatal & Postnatal Care">Prenatal & Postnatal Care</option>
        <option value="Luxury Facials">Luxury Facials</option>
        <option value="Body Scrubs & Exfoliation">Body Scrubs & Exfoliation</option>
        <option value="Manicures & Pedicures">Manicures & Pedicures</option>
        <option value="Relaxation Packages">Relaxation Packages</option>
      </select>
    </div>

    <textarea placeholder="Your Message" required></textarea>
    <button type="submit">Send Message</button>
  </form>
</div>

    </div>
  );
};

export default ContactForm;
