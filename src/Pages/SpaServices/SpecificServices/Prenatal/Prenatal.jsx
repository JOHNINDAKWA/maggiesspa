import "./Prenatal.css";
import PregImage1 from "../../../../assets/images/spa-services/mag2.jpg";
import PregImage2 from "../../../../assets/images/spa-services/postnatal1.jpg";
import PregImage3 from "../../../../assets/images/spa-services/postnatal2.jpg";
import PregImage4 from "../../../../assets/images/spa-services/postnatal4.jpg";
import { Link } from "react-router-dom";
import PrenatalPackages from './../PrenatalPackages/PrenatalPackages';

const Prenatal = () => {
  return (

    <>
    <section
      className="prenatal-care"
      style={{ color: "#01a1a1", maxWidth: "1200px", margin: "0 auto" }}
    >
      <h2>Prenatal Singles</h2>

      <div className="packages">
        <div className="package2">
          <img
            src={PregImage1}
            alt="Divine Mother's Touch"
            className="package-img"
          />
          <h3>
            1. Divine Mother’s Touch <br />
            <span>(3–9 months)</span>
          </h3>
          <p>
            Experience the soothing embrace of Maggie’s pregnancy spa. Tailored
            prenatal massage using gentle, pregnancy-safe techniques to support
            your transformation.
          </p>

          <table className="pricing2">
            <thead>
              <tr>
                <th>Sessions</th>
                <th>Prices (Ksh)</th>
                <th>Services Offered</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>60 MIN</td>
                <td>6,000</td>
                <td>Pregnancy Massage</td>
              </tr>
              <tr>
                <td>75 MIN</td>
                <td>8,500</td>
                <td>Pregnancy Massage</td>
              </tr>
              <tr>
                <td>90 MIN</td>
                <td>11,300</td>
                <td>
                  <ul className="table-list">
                    <li>Pregnancy Massage</li>
                    <li>Glow Facial</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>1 HR 45 MIN</td>
                <td>12,250</td>
                <td>
                  <ul className="table-list">
                    <li>Foot Bath</li>
                    <li>Pregnancy Massage</li>
                    <li>Head Relaxation Massage</li>
                    <li>Face Lifting Massage</li>
                    <li>Maggie’s Wellness Bites</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>2 HRS</td>
                <td>13,200</td>
                <td>
                  <ul className="table-list">
                    <li>Refreshing Pure Skin Therapy (Body Scrub)</li>
                    <li>Prenatal Massage</li>
                    <li>Head Relaxation Massage</li>
                    <li>Breast Massage</li>
                    <li>Maggie’s Wellness Bites</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>

          <div className="ul-divider">
            <div>
              <p className="what-to-expect">What to expect:</p>
              <ul>
                <li>Pregnancy Massage</li>
                <li>Glow Facial</li>
                <li>Head Relaxation</li>
                <li>Foot Bath</li>
                <li>Wellness Bites</li>
              </ul>
            </div>

            <div className="">
              <p className="what-to-expect">Benefits:</p>
              <ul>
                <li>Pain relief</li>
                <li>Reduced swelling</li>
                <li>Hormonal balance</li>
                <li>Improved circulation</li>
                <li>Sciatic relief & flexibility</li>
              </ul>
            </div>
          </div>
          <Link className="package-link" to="/book">
            Get this package
          </Link>
        </div>

        <div className="package2">
          <img
            src={PregImage2}
            alt="Bump Luxe Facial"
            className="package-img"
          />
          <h3>
            2. Bump Luxe Facial <br />
            <span>(3–9 months)</span>
          </h3>
          <p>
            A nurturing belly and pelvic care experience designed to soothe skin
            changes and provide ultimate comfort and glow.
          </p>

          <table className="pricing">
            <thead>
              <tr>
                <th>SESSIONS</th>
                <th>PRICES (KSH)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>75 Min</td>
                <td>Ksh 8,535</td>
              </tr>         
            </tbody>
            </table>


          <p className="what-to-expect">What to expect:</p>
          <ul>
            <li>Belly facial</li>
            <li>Foot massage</li>
            <li>Pelvic massage</li>
          </ul>

          <p className="what-to-expect">Benefits:</p>
          <ul>
            <li>Scars and stretchmark care</li>
            <li>Dryness, itchiness, irritation</li>
            <li>Pelvic & lower back pain relief</li>
            <li>Improves elasticity and glow</li>
          </ul>

          <Link className="package-link" to="/book">
            Get this package
          </Link>
        </div>

        <div className="package2">
          <img
            src={PregImage3}
            alt="Bump Luxe Facial"
            className="package-img"
          />
          <h3>
            3. Unveil: The Birth Ready Ritual <br />
            <span>(37–42 weeks)</span>
          </h3>
          <p>
            Labor-preparation massage designed for final weeks of pregnancy.
            Encourages a smoother, more comfortable birth.
          </p>
            
          <table className="pricing">
            <thead>
              <tr>
                <th>SESSIONS</th>
                <th>PRICES (KSH)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>3 Hrs</td>
                <td>Ksh 21,345</td>
              </tr>         
            </tbody>
            </table>
     

          <p className="what-to-expect">What to expect:</p>
          <ul>
            <li>Labor reflexology</li>
            <li>Induction massage</li>
            <li>Skin therapy + hair removal</li>
            <li>Wellness bites</li>
          </ul>

          <p className="what-to-expect">Benefits:</p>
          <ul>
            <li>Encourages timely delivery</li>
            <li>Relieves Braxton Hicks & cramps</li>
            <li>Boosts relaxation hormones</li>
            <li>Calms anxiety and fatigue</li>
          </ul>

          <Link className="package-link" to="/book">
            Get this package
          </Link>
        </div>

        <div className="package2">
          <img
            src={PregImage4}
            alt="Bump Luxe Facial"
            className="package-img"
          />
          <h3>
            4. Earth Mama Healing <br />
            <span>(3–9 months)</span>
          </h3>
          <p>
            Rediscover harmony and embrace the sacred journey of motherhood with
            this holistic prenatal experience.
          </p>

          <table className="pricing">
            <thead>
              <tr>
                <th>SESSIONS</th>
                <th>PRICES (KSH)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>3.5 Hrs</td>
                <td>Ksh 31,800</td>
              </tr>         
            </tbody>
            </table>

          <p className="what-to-expect">What to expect:</p>
          <ul>
            <li>Prenatal massage</li>
            <li>Belly facial</li>
            <li>Skin therapy</li>
            <li>Happy feet & flower décor</li>
          </ul>

          <p className="what-to-expect">Benefits:</p>
          <ul>
            <li>Relief from pain and swelling</li>
            <li>Better sleep, energy & clarity</li>
            <li>Spiritual balance and bonding</li>
          </ul>

          <Link className="package-link" to="/book">
            Get this package
          </Link>
        </div>
      </div>
    </section>
    <PrenatalPackages/>
    </>
  );
};

export default Prenatal;
