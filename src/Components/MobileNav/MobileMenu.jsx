import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  RiCloseLine,
  RiFacebookFill,
  RiInstagramLine,
  RiMailLine,
  RiPhoneFill,
  RiShoppingCartLine,   // 🛒 cart icon
} from "react-icons/ri";
import { FaLocationDot, FaTiktok } from "react-icons/fa6";
import { CiMenuBurger } from "react-icons/ci";
import "./MobileMenu.css";
import { CiMenuFries } from "react-icons/ci";

// 🛒 cart state
import { useCart } from "../../Context/CartContext";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { count } = useCart(); // total item count

  useEffect(() => {
    const closeOnClickOutside = (e) => {
      if (
        !e.target.closest(".mobile-sidebar") &&
        !e.target.closest(".menu-icon") &&
        !e.target.closest(".mobile-cart")      // don't close when tapping cart in header
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", closeOnClickOutside);
    return () => document.removeEventListener("mousedown", closeOnClickOutside);
  }, []);

  return (
    <div className="mobile-nav">
      <div className="mobile-header">
        <Link to="/" className="mobile-logo">
          Maggies Spa
        </Link>

        {/* Right side actions: Cart + Burger */}
        <div className="mobile-actions">
          <Link
            to="/cart"
            className="mobile-cart"
            aria-label={`Open cart${count > 0 ? ` with ${count} item${count > 1 ? "s" : ""}` : ""}`}
          >
            <RiShoppingCartLine size={22} />
            {count > 0 && <span className="mobile-cart__badge">{count}</span>}
          </Link>

     <CiMenuFries className="menu-icon" onClick={() => setIsOpen(true)} />
        </div>
      </div>

      <div className={`mobile-sidebar ${isOpen ? "active" : ""}`}>
        <div className="sidebar-header">
          <Link to="/" className="sidebar-logo">
            Maggies Spa
          </Link>
          <RiCloseLine className="close-icon" onClick={() => setIsOpen(false)} />
        </div>

        <ul className="nav-links">
          <li>
            <Link to="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/services" onClick={() => setIsOpen(false)}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/articles" onClick={() => setIsOpen(false)}>
              Blog
            </Link>
          </li>
          <li>
            <Link to="/package" onClick={() => setIsOpen(false)}>
              Pricing
            </Link>
          </li>

          {/* 🛒 Cart inside the menu list */}
          <li>
            <Link to="/cart" className="cart-link" onClick={() => setIsOpen(false)}>
              <RiShoppingCartLine />
              <span>Cart</span>
              {count > 0 && <span className="cart-count-badge">{count}</span>}
            </Link>
          </li>

          <li>
            <Link to="/about" onClick={() => setIsOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>

        <div className="book-now">
          <Link to="/book" onClick={() => setIsOpen(false)}>
            Book Now
          </Link>
        </div>

        <div className="sidebar-footer">
          <p>
            <RiPhoneFill />
            +254796125105
          </p>
          <p>
            <RiMailLine /> info@maggiespregnancyspa.co.ke
          </p>
          <p>
            <FaLocationDot /> Karen 31 collective, on Ngong road. <br />
            1st floor, Right side
          </p>

          <div className="social-icons">
            <a href="https://www.facebook.com/maggiespnpmassage" target="_blank" rel="noopener noreferrer">
              <RiFacebookFill />
            </a>
            <a href="https://www.instagram.com/postpartumpregnancy.spa/" target="_blank" rel="noopener noreferrer">
              <RiInstagramLine />
            </a>
            <a href="https://www.tiktok.com/@maggieamanda0" target="_blank" rel="noopener noreferrer">
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>

      {isOpen && <div className="overlay" />}
    </div>
  );
};

export default MobileMenu;
