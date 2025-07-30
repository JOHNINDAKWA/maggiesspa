import './ContaactForm.css'
import { LuTimerReset } from "react-icons/lu";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6"; // Ensure this is imported

const ContactForm = () => {
  return (
    <div className="contactForm-container">
      <div className="contactForm-details">
        {/* Karen Branch */}
        <div className="detail-item">
          <FaLocationDot />
          <div className="detail-info">
            <span>Karen Branch</span> {/* Changed from "Center Address" */}
            <p>Karen 31 Collective Ngong Rd, Nairobi</p>
          </div>
        </div>

        {/* Nanyuki Branch - NEW */}
        <div className="detail-item">
          <FaLocationDot /> {/* Reusing the location icon */}
          <div className="detail-info">
            <span>Nanyuki Branch</span> {/* New text */}
            <p>Shop 14 Restaurant, Nanyuki Town, Nanyuki</p> {/* New address */}
          </div>
        </div>

        <div className="detail-item">
          <FaPhoneSquareAlt />
          <div className="detail-info">
            <span>Phone</span>
            <p> +254796125105</p>
          </div>
        </div>


        <div className="detail-item">
          <MdOutlineMarkEmailRead />
          <div className="detail-info">
            <span>Email</span> {/* Changed from "Center Address" */}
            <p>info@maggiespregnancyspa.co.ke</p>
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
          <button type="submit"><span>Send Message</span></button>
        </form>
      </div>

    </div>
  );
};

export default ContactForm;