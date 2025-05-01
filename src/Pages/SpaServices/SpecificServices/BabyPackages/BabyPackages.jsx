import "./BabyPackages.css";
import BabyImage1 from '../../../../assets/images/spa-services/mag35.jpg';
import BabyImage2 from '../../../../assets/images/spa-services/mag36.jpg';
import BabyImage3 from '../../../../assets/images/spa-services/mag31.jpg';
import BabyImage4 from '../../../../assets/images/spa-services/mag32.jpg';
import { Link } from "react-router-dom";

const BabyPackages = () => {
  return (
    <section className="baby-care" style={{ color: "#01a1a1", maxWidth: "1200px", margin: "0 auto" }}>
      <h2>Baby Packages</h2>
      <div className="baby-packages">
        <div className="baby-package">
          <img src={BabyImage1} alt="Little Hands, Big Love" className="baby-package-img" />
          <h3>1. Little Hands, Big Love <br /><span>(6 weeks+ postpartum)</span></h3>
          <p>A shared moment of love and care between mother and child. Deep connection through massage and wellness rituals.</p>
          <p className="what-to-expect">What to expect:</p>
          <ul>
            <li>Infused baby bath, baby massage</li>
            <li>Full body postpartum massage</li>
            <li>Breast release, hand & foot treatment</li>
            <li>Maggie’s wellness bites</li>
          </ul>
          <p className="what-to-expect">Benefits:</p>
          <ul>
            <li>Strengthens bond & emotional security</li>
            <li>Promotes relaxation & sleep</li>
            <li>Supports mama’s healing</li>
          </ul>
          <Link className="package-link" to="/book">Get this package</Link>
        </div>

        <div className="baby-package">
          <img src={BabyImage2} alt="Golden Steps" className="baby-package-img" />
          <h3>2. Golden Steps <br /><span>(0–12 months)</span></h3>
          <p>Capture milestones with love, memory and charm. A heartwarming celebration of baby’s growth.</p>
          <p className="what-to-expect">What to expect:</p>
          <ul>
            <li>Milestone photo session & gifts</li>
            <li>Soothing baby massage</li>
            <li>Professional keepsake photos</li>
          </ul>
          <Link className="package-link" to="/book">Get this package</Link>
        </div>

        <div className="baby-package">
          <img src={BabyImage3} alt="Palm to Soul" className="baby-package-img" />
          <h3>3. Palm To Soul <br /><span>(For 1–2 people)</span></h3>
          <p>Celebrate motherhood with luxury and care. An elegant postpartum retreat for mind, body & spirit.</p>
          <p className="what-to-expect">What to expect:</p>
          <ul>
            <li>Holistic four-hand massage</li>
            <li>Skin therapy, feet care, floral decor</li>
            <li>Wellness box + 20 edited photos & video</li>
          </ul>
          <Link className="package-link" to="/book">Get this package</Link>
        </div>

        <div className="baby-package">
          <img src={BabyImage4} alt="Harmony After Loss" className="baby-package-img" />
          <h3>4. Harmony After Loss <br /><span>(Post-loss therapy)</span></h3>
          <p>Gentle healing for grief and restoration. A sanctuary for emotional and physical reconnection.</p>
          <p className="what-to-expect">What to expect:</p>
          <ul>
            <li>Womb cleansing + healing massage</li>
            <li>Sound meditation, wellness bites</li>
          </ul>
          <p className="what-to-expect">Benefits:</p>
          <ul>
            <li>Emotional balance & grief support</li>
            <li>Restores physical and mental clarity</li>
            <li>Holistic healing through love</li>
          </ul>
          <Link className="package-link" to="/book">Get this package</Link>
        </div>
      </div>
    </section>
  );
};

export default BabyPackages;