import "./AboutExplore.css";
import Scissors from "../../../../assets/images/scissors.jpg";
import Soap from "../../../../assets/images/soap.jpg";
import Leg from "../../../../assets/images/leg.png";

const AboutExplore = () => {
  return (
    <div className="about-explore-container">
      <div className="explore-top">
        <h1>Our Legacy, Vision & Innovation</h1>
        <p>
          Inspired by a legacy of ingenuity, we strive to build solutions that redefine possibilities.  
          Technology and leadership drive us forward, shaping a future that blends innovation with purpose.
        </p>
      </div>

      <div className="explore-bottom">
        <div className="explore-bottom-item">
          <img src={Scissors} alt="" />
          <div className="explore-bottom-content">
          <h3>Innovation & Creativity</h3>
            <p>
              Pioneering technology ideas fuel our commitment to progress and excellence.
            </p>
          </div>          
        </div>

        <div className="explore-bottom-item">
          <img src={Leg} alt="" />
          <div className="explore-bottom-content">
          <h3>A Legacy of Vision</h3>
            <p>
              Inspired by those before us, we carry forward a legacy..
            </p>
          </div>          
        </div>

        <div className="explore-bottom-item">
          <img src={Soap} alt="" />
          <div className="explore-bottom-content">
          <h3>Leadership & Future</h3>
            <p>
              Every step we take is a step toward a future for growth and empowerment.
            </p>
          </div>          
        </div>
      </div>
    </div>
  );
};

export default AboutExplore;
