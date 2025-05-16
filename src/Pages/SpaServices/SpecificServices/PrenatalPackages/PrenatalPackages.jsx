import "./PrenatalPackages.css";
import { Link } from "react-router-dom";
import Nobg from '../../../../assets/images/nobg1.png'

const PrenatalPackages = () => {
  return (
    <section className="prenatal-packages-v2">
      <h2 className="prenatal-packages-v2__title">Prenatal Packages</h2>

      <div className="prenatal-packages-v2__grid">
        {/* Mama Haven Package */}
        <div className="prenatal-packages-v2__card prenatal-packages-v2__card--premium">
          <div className="prenatal-packages-v2__info-bar">
            <h3>Mama Haven Package</h3>
            <div className="prenatal-packages-v2__tag">
              <span className="prenatal-packages-v2__tag-time">2 HRS</span>
              <span className="prenatal-packages-v2__tag-divider">•</span>
              <span className="prenatal-packages-v2__tag-price">
                Ksh 40,000
              </span>
            </div>
            <p className="prenatal-packages-v2__subtext">
              Suitable after 35 weeks
            </p>
          </div>
          <p className="prenatal-packages-v2__description">
            A sanctuary of comfort for mamas in their final stretch. Designed to
            relax, restore, and empower in the final weeks of pregnancy.
          </p>
          <img className="nobg" src={Nobg} alt="MAMA PACKAGE" />
          <div className="prenatal-packages-v2__sessions">
            <div className="prenatal-packages-v2__session">
              <h4>Embrace & Nourish (2Hrs)</h4>
              <ul>
                <li>Prenatal massage</li>
                <li>Scalp massage</li>
                <li>Belly facial</li>
                <li>Maggie’s wellness bite</li>
              </ul>
            </div>
            <div className="prenatal-packages-v2__session">
              <h4>Restore & Glow (2Hrs)</h4>
              <ul>
                <li>Prenatal massage</li>
                <li>Scalp massage</li>
                <li>Breast massage</li>
                <li>Glow facial</li>
                <li>Maggie’s wellness bites</li>
              </ul>
            </div>
            <div className="prenatal-packages-v2__session">
              <h4>Prepare & Empower (2Hrs)</h4>
              <ul>
                <li>Prenatal massage</li>
                <li>Reflexology (labor prep points)</li>
                <li>Herbal foot baths</li>
                <li>Maggie’s wellness bites</li>
              </ul>
            </div>
          </div>
          <Link to="/book" className="prenatal-packages-v2__button">
            Get This Package
          </Link>
        </div>
        

        {/* Elegant Pregnancy Package */}
        <div className="prenatal-packages-v2__card ">
          <div className="prenatal-packages-v2__body">
            <div className="prenatal-packages-v2__info-bar">
              <h3>Elegant Pregnancy Package</h3>
              <div className="prenatal-packages-v2__tag">
                <span className="prenatal-packages-v2__tag-time">4 HRS</span>
                <span className="prenatal-packages-v2__tag-divider">•</span>
                <span className="prenatal-packages-v2__tag-price">
                  Ksh 40,000
                </span>
              </div>
              <p className="prenatal-packages-v2__subtext">
                Perfect for baby showers, birthdays, or a gift
              </p>
            </div>
            <p className="prenatal-packages-v2__description">
              A luxurious, all-inclusive celebration of motherhood. Designed for
              one or two guests, with wellness gifts, curated therapies, and
              loving attention to every detail.
            </p>
            <ul className="prenatal-packages-v2__session-list">
              <li>Four-hand holistic prenatal massage</li>
              <li>Bump luxe facial</li>
              <li>Pure skin therapy</li>
              <li>Happy feet retreat</li>
              <li>Maggie’s P&P flower decor</li>
              <li>Wellness box & gift basket</li>
              <li>20 edited professional photos/videos</li>
            </ul>
          </div>
          <div className="prenatal-packages-v2__footer">
            <Link to="/book" className="prenatal-packages-v2__button">
              Get This Package
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrenatalPackages;
