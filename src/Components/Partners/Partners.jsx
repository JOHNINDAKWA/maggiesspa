import "./Partners.css";
import logo1 from "../../assets/images/partners/partner6.png"; 
// import logo2 from "../../assets/images/partners/partner8.jpg"; 
// import logo3 from "../../assets/images/partners/partner7.jpg"; 
import logo4 from "../../assets/images/partners/partner5.jpg";

const Partners = () => {
  return (
    <section className="partner-section">
      <div className="partner-container">
        <h2 className="partner-heading">
          Trusted By Leading Maternal Wellness Partners
        </h2>
        <p className="partner-subtext">
          Maggie’s Spa is recognized by respected organizations committed to motherhood,
          fitness, wellness, and postpartum care.
        </p>

        <div className="partner-logos">
          <div className="partner-logo-card">
            <img src={logo1} alt="Malaika Mums" />
            <p>Malaika Mums - Maternity Care Alliance</p>
          </div>
          {/* <div className="partner-logo-card">
            <img src={logo2} alt="Creative Nest Studio" />
            <p>Creative Nest & CrossFit Karen - Maternal Fitness</p>
          </div>
          <div className="partner-logo-card">
            <img src={logo3} alt="Fiesta House" />
            <p>Fiesta House Maternity - Beauty in Pregnancy</p>
          </div> */}
          <div className="partner-logo-card">
            <img src={logo4} alt="Wellness Alliance" />
            <p>Partnered for Recovery, Wellness & Support</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
