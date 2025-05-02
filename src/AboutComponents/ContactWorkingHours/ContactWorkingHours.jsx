import './ContactWorkingHours.css';
import Maggy_4 from '../../assets/images/gal4.jpg';
import { GoArrowUpRight } from "react-icons/go";
import { Link } from 'react-router-dom';

const ContactWorkingHours = () => {
  return (
    <div className="cwh-container">
      {/* Open Hours Section */}
      <div className="cwh-left">
        <h2>Open Hours</h2>
        <div className="cwh-item">
          <span>Mon - Fri</span>
          <p>8:30am - 7:00pm</p>
        </div>
        <div className="cwh-item">
          <span>Saturday</span>
          <p>9:00am - 5:00pm</p>
        </div>
        <div className="cwh-item">
          <span>Sunday</span>
          <p>10:00am - 4:00pm</p>
        </div>
        <Link to='/services'>View Services <GoArrowUpRight /></Link>
      </div>

      {/* Center Image */}
      <div className="cwh-middle">
        <img src={Maggy_4} alt="Spa Promotion" />
      </div>

      {/* Holiday Hours Section */}
      <div className="cwh-right">
        <h2>Holiday Hours</h2>
        <div className="cwh-item">
          <span>Christmas</span>
          <p>9:00am - 3:00pm</p>
        </div>
        <div className="cwh-item">
          <span>New Year's</span>
          <p>9:00am - 3:00pm</p>
        </div>
        <div className="cwh-item">
          <span>Other Holidays</span>
          <p>9:00am - 3:00pm</p>
        </div>
        <a 
    href="https://maps.app.goo.gl/pyZm9JEPhx7YpUb18" 
    target="_blank" 
    rel="noopener noreferrer"
  >
   Visit Spa <GoArrowUpRight />
  </a>
      </div>
    </div>
  );
}

export default ContactWorkingHours;
