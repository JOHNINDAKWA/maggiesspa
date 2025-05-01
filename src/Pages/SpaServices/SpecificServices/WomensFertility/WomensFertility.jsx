import "./WomensFertility.css";
import { Link } from "react-router-dom";
import WomensImg from "../../../../assets/images/spa-services/mag11.jpg";
import FertilityImg from "../../../../assets/images/spa-services/mag5.jpg";

const WomensFertility = () => {
  return (
    <section className="womens-fertility-care">

      <div className="womens-fertility-packages">
      <h2>Women's Health </h2>
        {/* Women's Health - Breast Divine Release */}
        <div className="womens-fertility-card">
          <img
            src={WomensImg}
            alt="Breast Divine Release"
            className="womens-fertility-img"
          />
          <h3>
            Breast Divine Release <br />
            <span>(75 MIN • Ksh 7,000)</span>
          </h3>
          <p>
            A nurturing therapy supporting breast health and hormonal balance.
            Ideal for moms and post-surgery recovery.
          </p>

          <p className="womens-subtitle">What to expect:</p>
          <ul>
            <li>Breast massage therapy</li>
            <li>Craniosacral head/neck treatment</li>
          </ul>

          <p className="womens-subtitle">Benefits:</p>
          <ul>
            <li>Relieves mastitis & soreness</li>
            <li>Stimulates milk flow</li>
            <li>Boosts lymphatic detox</li>
            <li>Supports hormone balance</li>
          </ul>

          <Link className="womens-link" to="/book">
            Get this package
          </Link>
        </div>

        {/* Fertility - The Miracle Path */}
        <div className="womens-fertility-card">
        <h2>Fertility</h2>
          <img
            src={FertilityImg}
            alt="Fertility Treatments"
            className="womens-fertility-img"
          />
          <h3>
             The Miracle Path <br />
            <span>(Fertility Support Programs)</span>
          </h3>
          <p>
            Holistic care for women preparing for conception. A blend of
            massage, herbs, coaching & guided wellness.
          </p>

          <p className="womens-subtitle">Benefits:</p>
          <ul>
            <li>Boosts reproductive circulation</li>
            <li>Improves cycle regulation</li>
            <li>Reduces stress & balances hormones</li>
          </ul>

          <table className="womens-pricing">
            <thead>
              <tr>
                <th>Package</th>
                <th>Session</th>
                <th className="hide-mobile">Services Included</th>
                <th>Price (Ksh)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Single</td>
                <td>60 min</td>
                <td className="hide-mobile">Fertility Massage</td>
                <td>6,000</td>
              </tr>
              <tr>
                <td>Single</td>
                <td>90 min</td>
                <td className="hide-mobile">Fertility Massage</td>
                <td>8,000</td>
              </tr>
              <tr>
                <td>Home Service</td>
                <td>60 min</td>
                <td className="hide-mobile">Fertility Massage</td>
                <td>8,500</td>
              </tr>
              <tr>
                <td>Starter Fertility Package</td>
                <td>3 sessions (1 month)</td>
                <td className="hide-mobile">
                  <ul className="table-list">
                    <li>Fertility Massage</li>
                    <li>1 pack Herbal Fertility Tea</li>
                    <li>Dietary & Wellness Guide</li>
                  </ul>
                </td>
                <td>16,000</td>
              </tr>
              <tr>
                <td>Advanced Fertility Package</td>
                <td>6 sessions (2 months)</td>
                <td className="hide-mobile">
                  <ul className="table-list">
                    <li>Fertility Massage</li>
                    <li>Fertility Abdominal Wrap</li>
                    <li>2 packs Herbal Fertility Tea</li>
                    <li>Guided Meditation Session</li>
                  </ul>
                </td>
                <td>30,000</td>
              </tr>
              <tr>
                <td>Premium Fertility Boost</td>
                <td>9 sessions (3 months)</td>
                <td className="hide-mobile">
                  <ul className="table-list">
                    <li>Fertility Massage</li>
                    <li>Abdominal Wrap (monthly)</li>
                    <li>Fertility Steam (2 sessions)</li>
                    <li>3 packs Herbal Fertility Tea</li>
                    <li>Womb Detox Herbs</li>
                    <li>Personalized Fertility Coaching</li>
                  </ul>
                </td>
                <td>45,000</td>
              </tr>
            </tbody>
          </table>

          <Link className="womens-link" to="#">
            Get this package
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WomensFertility;
