import { useState } from "react";
import { Link } from "react-router-dom";
import "./DeskTopMenu.css";
import services from "../../ServicesComponents/ServiceList/ServeList"; // Import service list

const DeskTopMenu = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Split services array into two halves
  const midIndex = Math.ceil(services.length / 2);
  const firstHalf = services.slice(0, midIndex);
  const secondHalf = services.slice(midIndex);

  return (
    <nav className="desktop-menu">
      <ul>
        <li><Link to="/">Home</Link></li>

        {/* Services Dropdown */}
        <li 
          className="services"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <Link to="/services">Our Services</Link>
          {isDropdownOpen && (
            <div className="dropdown">
              <div className="Adropdown-column">
                {firstHalf.map((service) => (
                  <Link 
                    key={service.id} 
                    to={`/services/${service.id}`} 
                    className="dropdown-item"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
              <div className="dropdown-column">
                {secondHalf.map((service) => (
                  <Link 
                    key={service.id} 
                    to={`/services/${service.id}`} 
                    className="dropdown-item"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </li>

        <li><Link to="/package">Pricing</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li className="book-now2"><Link to="/book">Book Now</Link></li>
      </ul>
    </nav>
  );
};

export default DeskTopMenu;
