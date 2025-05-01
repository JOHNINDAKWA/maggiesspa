import "./SelfCare.css";
import Self1 from "../../../../assets/images/spa-services/mag30.jpg";
import Self2 from "../../../../assets/images/spa-services/mag29.jpg";
import Self3 from "../../../../assets/images/spa-services/mag28.jpg";
import Self4 from "../../../../assets/images/spa-services/mag27.jpg";
import { Link } from "react-router-dom";

const SelfCare = () => {
  return (
    <section className="selfcare-care" style={{ color: "#01a1a1", maxWidth: "1200px", margin: "0 auto" }}>
      <h2>Self-Care Services</h2>

      <div className="selfcare-packages">

        {/* PURE SKIN THERAPY */}
        <div className="selfcare-package">
          <img src={Self1} alt="Pure Skin Therapy" className="selfcare-img" />
          <h3>1. Pure Skin Therapy<br /><span>(1 HR – Ksh 5,700)</span></h3>
          <p>
            A healing and restorative ritual blending full-body exfoliation, herbal masks and hot oil therapies for luminous, balanced skin.
          </p>

          <p className="selfcare-subhead">What to expect:</p>
          <ul>
            <li>Full-body exfoliation and herbal mask</li>
            <li>Hot oil hydration therapy</li>
            <li>Ancient herbal infusions</li>
          </ul>

          <p className="selfcare-subhead">Benefits:</p>
          <ul>
            <li>Hydrates & nourishes the skin</li>
            <li>Improves elasticity & texture</li>
            <li>Detoxifies and boosts glow</li>
            <li>Reduces puffiness & fine lines</li>
          </ul>

          <Link className="selfcare-link" to="/book">Book this Service</Link>
        </div>

        {/* FOOT WELLNESS RITUAL */}
        <div className="selfcare-package">
          <img src={Self2} alt="Foot Wellness Ritual" className="selfcare-img" />
          <h3>2. Foot Wellness Ritual<br /><span>(1 HR 30 MIN – Ksh 8,535)</span></h3>
          <p>
            An herbal foot revival for swelling, fatigue, and nail health — using reflexology and care that revives from the sole up.
          </p>

          <p className="selfcare-subhead">What to expect:</p>
          <ul>
            <li>Full foot restoration</li>
            <li>Hand therapy</li>
            <li>Wellness bites</li>
          </ul>

          <p className="selfcare-subhead">Benefits:</p>
          <ul>
            <li>Soothes pain & tension</li>
            <li>Improves circulation & reduces swelling</li>
            <li>Supports nail health</li>
            <li>Deeply relaxing through reflexology</li>
          </ul>

          <Link className="selfcare-link" to="/book">Book this Service</Link>
        </div>

        {/* BARE AND BEAUTIFUL */}
        <div className="selfcare-package">
          <img src={Self3} alt="Bare and Beautiful" className="selfcare-img" />
          <h3>3. Bare & Beautiful<br /><span>(75 MIN – Ksh 5,300)</span></h3>
          <p>
            A feminine care ritual for intimate glow, hygiene and softness — includes wax/trim, vajacial, and underarm treatment.
          </p>

          <p className="selfcare-subhead">What to expect:</p>
          <ul>
            <li>Wax/trim & vajacial</li>
            <li>Underarm treatment</li>
            <li>Ingrown extraction</li>
          </ul>

          <p className="selfcare-subhead">Benefits:</p>
          <ul>
            <li>Improves hygiene & hydration</li>
            <li>Soothes irritation</li>
            <li>Restores pH balance</li>
            <li>Boosts smoothness and softness</li>
          </ul>

          <Link className="selfcare-link" to="/book">Book this Service</Link>
        </div>

        {/* GODDESS RENEWAL */}
        <div className="selfcare-package">
          <img src={Self4} alt="Goddess Renewal" className="selfcare-img" />
          <h3>4. Goddess Renewal<br /><span>(1 HR – Ksh 5,700)</span></h3>
          <p>
            A sacred herbal steam followed by a deep back massage for feminine balance, muscle relief, and emotional grounding.
          </p>

          <p className="selfcare-subhead">What to expect:</p>
          <ul>
            <li>Feminine herbal steam</li>
            <li>Deep back therapy</li>
          </ul>

          <p className="selfcare-subhead">Benefits:</p>
          <ul>
            <li>Balances hormones</li>
            <li>Supports menstrual & postpartum health</li>
            <li>Relieves back pain & tension</li>
            <li>Promotes emotional grounding</li>
          </ul>

          <Link className="selfcare-link" to="/book">Book this Service</Link>
        </div>

      </div>
    </section>
  );
};

export default SelfCare;
