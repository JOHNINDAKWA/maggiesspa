import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  RiMenu3Line, RiCloseLine, RiArrowDownSLine,
  RiFacebookFill, RiInstagramLine, RiTwitterXFill,
  RiMailLine, RiPhoneFill
} from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";

import { CiMenuBurger } from "react-icons/ci";
import "./MobileMenu.css";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const closeOnClickOutside = (e) => {
      if (!e.target.closest(".mobile-sidebar") && !e.target.closest(".menu-icon")) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", closeOnClickOutside);
    return () => document.removeEventListener("mousedown", closeOnClickOutside);
  }, []);


  return (
    <div className="mobile-nav">
      <div className="mobile-header">
        <Link to="/" className="mobile-logo">Maggies Spa</Link>
        <CiMenuBurger className="menu-icon" onClick={() => setIsOpen(true)} />
      </div>

      <div className={`mobile-sidebar ${isOpen ? "active" : ""}`}>
        <div className="sidebar-header">
          <Link to="/" className="sidebar-logo">Maggies Spa</Link>
          <RiCloseLine className="close-icon" onClick={() => setIsOpen(false)} />
        </div>

        <ul className="nav-links">
          <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/services" onClick={() => setIsOpen(false)}>Services</Link></li>
          <li><Link to="/package" onClick={() => setIsOpen(false)}>Pricing</Link></li>
          <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
        </ul>

        <div className="book-now">
          <Link to="/book" onClick={() => setIsOpen(false)}>Book Now</Link>
        </div>

        <div className="sidebar-footer">
          <p><RiPhoneFill />+254705650292</p>
          <p><RiMailLine /> maggiespnpmassage@gmail. </p>
          <p><FaLocationDot /> Karen 31 collective, on Ngong road. <br />1st floor, Right side </p>
          <div className="social-icons">
            <a href="#"><RiFacebookFill /></a>
            <a href="#"><RiInstagramLine /></a>
            <a href="#"><RiTwitterXFill /></a>
          </div>
        </div>
      </div>

      {isOpen && <div className="overlay" />}
    </div>
  );
};

export default MobileMenu;
