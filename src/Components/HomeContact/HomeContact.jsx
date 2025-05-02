import React from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import "./HomeContact.css"; // Import your CSS file

const HomeContact = () => {
  return (
    <section className="home-contact">
      <div className="contact-content">
      <h2>Contact Maggie’s Spa</h2>

        <p>Feel free to reach out for any inquiries or service requests.</p>


        {/* Contact Form */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />

          {/* Email & Phone Number Side by Side */}
          <div className="contact-row">
            <input type="email" placeholder="Your Email" required />
            <input type="tel" placeholder="Your Phone Number" required />
          </div>

          <select required>
            <option value="">Service Requirement</option>
            <option value="Web Development">Web Development</option>
            <option value="Network Setup">Network Setup</option>
            <option value="IT Consultation">IT Consultation</option>
          </select>

          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default HomeContact;
