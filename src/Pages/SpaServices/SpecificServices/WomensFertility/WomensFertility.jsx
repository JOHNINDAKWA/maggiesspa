import React, { useState } from "react";
import "./WomensFertility.css";
import { Link } from "react-router-dom";
import WomensImg from "../../../../assets/images/spa-services/mag11.jpg";
import FertilityImg from "../../../../assets/images/postnatal4.jpg";
import Nobg from "../../../../assets/images/nobg1.png";

// cart + currency
import { useCart, CartActions } from "../../../../Context/CartContext";
import { formatKES } from "../../../../Utils/currency";

const WomensFertility = () => {
  const { items, dispatch } = useCart();
  const [addedMap, setAddedMap] = useState({});
  const [toast, setToast] = useState(null);

  const isInCart = (id) => items?.some((i) => i.id === id);
  const withDefaultImage = (img) => img || Nobg;

  const handleAdd = (pkg) => {
    if (isInCart(pkg.id) || addedMap[pkg.id]) return;
    dispatch(CartActions.add({ ...pkg, image: withDefaultImage(pkg.image) }));
    setAddedMap((m) => ({ ...m, [pkg.id]: true }));
    setToast(`${pkg.title} added to cart`);
    setTimeout(() => {
      setAddedMap((m) => ({ ...m, [pkg.id]: false }));
      setToast(null);
    }, 1600);
  };

  // ---- Services to book (from your table: Single/Home Service) ----
  const servicesToBook = [
    { label: "Single", session: "60 min", includes: "Fertility Massage", price: 6000 },
    { label: "Single", session: "90 min", includes: "Fertility Massage", price: 8000 },
    { label: "Home Service", session: "60 min", includes: "Fertility Massage", price: 8500 },
  ];

  // ---- Packages to add to cart (from your table) ----
  const fertilityPackages = [
    {
      id: "pkg-fertility-starter",
      title: "Starter Fertility Package",
      sessions: "3 sessions (1 month)",
      price: 16000,
      bullet: ["Fertility Massage", "1 pack Herbal Fertility Tea", "Dietary & Wellness Guide"],
    },
    {
      id: "pkg-fertility-advanced",
      title: "Advanced Fertility Package",
      sessions: "6 sessions (2 months)",
      price: 30000,
      bullet: [
        "Fertility Massage",
        "Fertility Abdominal Wrap",
        "2 packs Herbal Fertility Tea",
        "Guided Meditation Session",
      ],
    },
    {
      id: "pkg-fertility-premium",
      title: "Premium Fertility Boost",
      sessions: "9 sessions (3 months)",
      price: 45000,
      bullet: [
        "Fertility Massage",
        "Abdominal Wrap (monthly)",
        "Fertility Steam (2 sessions)",
        "3 packs Herbal Fertility Tea",
        "Womb Detox Herbs",
        "Personalized Fertility Coaching",
      ],
    },
  ];

  return (
    <section className="womens-fertility-care">
      <div className="womens-fertility-packages">
        <h2>Women's Health Treatments</h2>

        {/* Card: Breast Divine Release (Book) */}
        <div className="womens-fertility-card">
          <img
            src={WomensImg}
            alt="Breast Divine Release"
            className="womens-fertility-img"
          />
          <h3>
            Breast Divine Release <br />
            <span>(75 MIN • {formatKES(7000)})</span>
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
            Book Now
          </Link>
        </div>

        {/* Block: Fertility Treatments */}
        <div className="womens-fertility-card">
          <h2>Fertility Treatments</h2>
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

          {/* Screen reader live region + tiny toast for cart feedback */}
          <span className="sr-only" aria-live="polite">
            {toast ? toast : ""}
          </span>
          {toast && <div className="mini-toast">{toast}</div>}

          {/* 1) SERVICES TO BOOK */}
          <h4 className="womens-section-heading">{"a)"} Fertility Services</h4>
          <table className="womens-services-table">
            <thead>
              <tr>
                <th>Type</th>
                <th>Session</th>
                <th className="hide-mobile">Includes</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {servicesToBook.map((s, idx) => (
                <tr key={`${s.label}-${idx}`}>
                  <td>{s.label}</td>
                  <td>{s.session}</td>
                  <td className="hide-mobile">{s.includes}</td>
                  <td>{formatKES(s.price)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <Link className="womens-link womens-book-cta" to="/book">
            Book Now
          </Link>

          {/* 2) PACKAGES TO BUY (ADD TO CART) */}
          <h4 className="womens-section-heading">{"b)"} Fertility Packages</h4>
          <div className="fertility-cards">
            {fertilityPackages.map((pkg) => {
              const disabled = isInCart(pkg.id) || addedMap[pkg.id];
              const label = isInCart(pkg.id)
                ? "Added Cart ✓"
                : addedMap[pkg.id]
                ? "Added ✓"
                : "Add to Cart";
              return (
                <div key={pkg.id} className="fertility-card">
                  <div className="fertility-card__head">
                    <h5 className="fertility-card__title">{pkg.title}</h5>
                    <div className="fertility-card__tags">
                      <span className="tag">{pkg.sessions}</span>
                      <span className="tag tag-price">{formatKES(pkg.price)}</span>
                    </div>
                  </div>

                  <ul className="fertility-card__list">
                    {pkg.bullet.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    className={`fertility-card__btn ${disabled ? "is-added" : ""}`}
                    onClick={() =>
                      handleAdd({
                        id: pkg.id,
                        title: pkg.title,
                        price: pkg.price,
                        image: FertilityImg, // will fallback to Nobg if undefined
                        meta: `${pkg.sessions} • Fertility Program`,
                      })
                    }
                    disabled={disabled}
                  >
                    {label}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WomensFertility;
