import { Link } from "react-router-dom";
import "./Membership.css";
import { MdArrowRightAlt } from "react-icons/md";

const Membership = () => {
  return (
    <div className="membership-container">
      <div className="cont">
        <div className="membership-heading">
          <h3>SPA PACKAGES</h3>
          <div className="membership-head-line"></div>

          <h4>Where nature meets bliss</h4>
          <p>
            Members are eligible for regular discounts apart from the seasonal
            offers and announcements. Refer your friend and get 25% off on our
            Fitness package.
          </p>
        </div>

        <div className="membership-cards">
          <div className="membership-card pink-card active">
            <div className="total">
              <h2>$105.00</h2>
              <span>/ Month</span>
            </div>
            <div className="membership-card-line"></div>
            <h3>Prenatal Bliss Package </h3>

            <div className="membership-percent">
              <div className="percentage">
                <h3>60</h3>
                <span>Min</span>
              </div>
              <div className="vertical-line"></div>

              <p>Prenatal Massage</p>
            </div>

            <div className="membership-card-bottom">
              <h4>Additional Privileges</h4>
              <p>Pregnancy Glow Facial</p>
              <div className="dotted-horizontal-line"></div>
              <p>Herbal Sitz Bath</p>

              <h5>*above offer valid for only one person </h5>
              <Link to="/book">
                <button>
                  Book Now
                  <MdArrowRightAlt />
                </button>
              </Link>
            </div>
          </div>

          <div className="membership-card green-card">
            <div className="total">
              <h2>$125.00</h2>
              <span>/ Month</span>
            </div>
            <div className="membership-card-line"></div>
            <h3>Postpartum Renewal </h3>

            <div className="membership-percent">
              <div className="percentage">
                <h3>90</h3>
                <span>Min</span>
              </div>
              <div className="vertical-line"></div>

              <p>Postpartum Massage</p>
            </div>

            <div className="membership-card-bottom">
              <h4>Additional Privileges</h4>
              <p>Herbal Compress Therapy</p>
              <div className="dotted-horizontal-line"></div>
              <p>Stretch Mark & Skin Elasticity </p>

              <h5>*above offer valid for only one person </h5>

              <Link to="/book">
                <button>
                  Book Now
                  <MdArrowRightAlt />
                </button>
              </Link>
            </div>
          </div>

          <div className="membership-card yellow-card">
            <div className="total">
              <h2>$195.00</h2>
              <span>/ Month</span>
            </div>
            <div className="membership-card-line"></div>
            <h3>Ultimate Mama Care</h3>

            <div className="membership-percent">
              <div className="percentage">
                <h3>50%</h3>
                <span>OFF</span>
              </div>
              <div className="vertical-line"></div>

              <p>On all treatments</p>
            </div>

            <div className="membership-card-bottom">
              <h4>Additional Privileges</h4>
              <p>Free Herbal Steam Bath</p>
              <div className="dotted-horizontal-line"></div>
              <p>25 mins Reflexology</p>

              <h5>*above offer valid for only one person </h5>

              <button>
                Book Now <MdArrowRightAlt />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Membership;
