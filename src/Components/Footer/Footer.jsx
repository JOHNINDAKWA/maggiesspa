import "./Footer.css";
import { useState, useEffect } from "react";
import footerFlower from "../../assets/images/foot-flow-2.jpg";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";

import Img1 from "../../assets/images/image1.jpg";
import Img2 from "../../assets/images/image2.jpg";
import Img3 from "../../assets/images/image3.jpg";
import Img4 from "../../assets/images/image4.jpg";
import Img5 from "../../assets/images/two.jpg";
import Img6 from "../../assets/images/six.jpg";
import { GoArrowUp } from "react-icons/go";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  return (
    <>
    <div className="footer-container">
      <div className="footer-top">
        <div className="footer-top-left">
          <div className="footer-top-left-icon">
            <IoLocationSharp />
          </div>

          <p className="top-p">Location</p>

          <div className="footer-top-left-line"></div>

          <div className="footer-top-left-details">
            <h4>Karen, 31 Nandi Rd</h4>
            <p> Nairobi, Kenya</p>
          </div>
        </div>

        <div className="footer-top-middle">
          <img src={footerFlower} alt="" />
          <div className="footer-top-middle-items">
            <div className="footer-top-middle-icon">
              <MdOutlineEmail />
            </div>
            <p className="top-p">Email</p>
            <div className="footer-top-middle-line"></div>
            <div className="footer-top-middle-details">
              <h4>info@maggiesspa.com</h4>
              <p> admin@maggiesspa.com</p>
            </div>
          </div>
          <img src={footerFlower} alt="" />
        </div>

        <div className="footer-top-right">
          <div className="footer-top-right-icon">
            <FiPhoneCall />
          </div>

          <p className="top-p">Contact</p>

          <div className="footer-top-right-line"></div>

          <div className="footer-top-right-details">
            <h4>+254798335126</h4>
            <p> +254713599235</p>
          </div>
        </div>
      </div>
      <div className="footer-middle">
  <div className="footer-middle-left">
    <div className="footer-logo">
      <img src="/logo.png" alt="" />
      <h1>Maggies P&P Spa</h1>
    </div>
    <div className="footer-middle-left-details">
      <p>
        Maggies Spa offers a serene and rejuvenating escape for expecting and 
        new mothers. Our tailored treatments ensure relaxation, wellness, and 
        self-care throughout pregnancy and postpartum recovery.
      </p>

      <p>
        From therapeutic massages to customized skincare, we provide holistic 
        services designed to nurture both body and mind. Experience the perfect 
        balance of comfort, care, and professional expertise at Maggies Spa.
      </p>
    </div>
    <div className="footer-middle-left-socials">
      <div className="footer-socials">
        <FaXTwitter />
        <FaTiktok />
        <CiFacebook />
        <CiInstagram />
      </div>
    </div>
  </div>

  <div className="footer-middle-middle">
    <h3>Our Services</h3>
    <ul>
      <li>
        <a href="#">☢ Prenatal Massage Therapy</a>
      </li>
      <li>
        <a href="#">★ Postpartum Massage Therapy</a>
      </li>
      <li>
        <a href="#">❄ Customized Facial & Skincare</a>
      </li>
      <li>
        <a href="#">☮ Body Treatments & Stretch Mark Care</a>
      </li>
      <li>
        <a href="#">♺ Relaxation & Stress Relief Therapies</a>
      </li>
    </ul>
  </div>

  <div className="footer-middle-right">
    <p>Our Gallery</p>
    <div className="footer-gallery">
      <img src={Img1} alt="" />
      <img src={Img2} alt="" />
      <img src={Img3} alt="" />
      <img src={Img4} alt="" />
      <img src={Img5} alt="" />
      <img src={Img6} alt="" />
    </div>
  </div>
</div>


      <div className="footer-bottom">
        <p>© 2017 Maggies Spa Theme, Made by John Indakwa</p>
      </div>
    </div>


    <div
      className={`scroll-to-top ${isVisible ? "show" : ""}`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <div className="leaf-shape">
        <GoArrowUp className="icon" />
      </div>
    </div>
    </>
  );
};

export default Footer;
