import { useState } from "react";
import { Link } from "react-router-dom";
import { RiMenu3Line, RiCloseLine, RiArrowDownSLine, RiFacebookFill, RiInstagramLine, RiTwitterXFill, RiMailLine, RiPhoneFill } from "react-icons/ri";
import "./MobileMenu.css";
import services from "../../ServicesComponents/ServiceList/ServeList"; // Import service list

const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  // Get only the first 4 services
  const displayedServices = services.slice(0, 4);

  return (
    <div className="mobile-wrapper">
      {/* Top Header */}
      <div className="mobile-header">
        <img src="/white.png" alt="Logo" className="mobile-logo" />
        <RiMenu3Line className="mobile-menu-icon" onClick={() => setIsMenuOpen(true)} />
      </div>

      {/* Slide-in Navigation */}
      <div className={`mobile-sidebar ${isMenuOpen ? "open" : ""}`}>
        {/* Logo & Close Button */}
        <div className="mobile-sidebar-header">
          <img src="/white.png" alt="Logo" className="mobile-sidebar-logo" />
          <RiCloseLine className="mobile-close-icon" onClick={() => setIsMenuOpen(false)} />
        </div>

        {/* Navigation Links */}
        <ul className="mobile-nav-list">
          <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>

          {/* Services Dropdown */}
          <li className="mobile-dropdown">
            <Link to='/services' className="dropdown-header" onClick={() => setIsServicesOpen(!isServicesOpen)}>
              Our Services <RiArrowDownSLine className={`dropdown-icon ${isServicesOpen ? "rotate" : ""}`} />
            </Link>
            {isServicesOpen && (
              <ul className="dropdown-list">
                {displayedServices.map((service) => (
                  <li key={service.id}>
                    <Link to={`/services/${service.id}`} onClick={() => setIsMenuOpen(false)}>
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li><Link to="/package" onClick={() => setIsMenuOpen(false)}>Packages</Link></li>
          <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>About Us</Link></li>
          <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
          <li className="mobile-book-now"><Link to="/book" onClick={() => setIsMenuOpen(false)}>Book Now</Link></li>
        </ul>

        {/* Footer Section */}
        <div className="mobile-footer">
          <p><RiPhoneFill /> +123 456 7890</p>
          <p><RiMailLine /> info@example.com</p>
          <div className="mobile-social-icons">
            <a href="#"><RiFacebookFill /></a>
            <a href="#"><RiInstagramLine /></a>
            <a href="#"><RiTwitterXFill /></a>
          </div>
        </div>
      </div>

      {/* Click outside to close menu */}
      {isMenuOpen && <div className="mobile-overlay" onClick={() => setIsMenuOpen(false)} />}
    </div>
  );
};

export default MobileMenu;
