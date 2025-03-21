import './ContactWorkingHours.css';
import Maggy_4 from '../../assets/images/gal4.jpg';
import { GoArrowUpRight } from "react-icons/go";

const ContactWorkingHours = () => {
  return (
    <div className="cwh-container">
      {/* Open Hours Section */}
      <div className="cwh-left">
        <h2>Open Hours</h2>
        <div className="cwh-item">
          <span>Mon - Fri</span>
          <p>9:00am - 6:00pm</p>
        </div>
        <div className="cwh-item">
          <span>Saturday</span>
          <p>9:00am - 4:00pm</p>
        </div>
        <div className="cwh-item">
          <span>Sunday</span>
          <p>9:00am - 4:00pm</p>
        </div>
        <button>View Services <GoArrowUpRight /></button>
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
        <button>Visit Spa <GoArrowUpRight /></button>
      </div>
    </div>
  );
}

export default ContactWorkingHours;
