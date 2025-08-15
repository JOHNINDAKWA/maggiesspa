import React, { useState } from 'react';
import './PostpartumPackages.css';
import Nobg from '../../../../assets/images/young-preg.jpg'; // default fallback
import { useCart, CartActions } from '../../../../Context/CartContext';

const postpartumData = [
  {
    days: "3 Days",
    duration: [
      "1hr 30 mins – Mother’s care only (per day)",
      "2hrs Baby’s care only (per day)",
    ],
    services: [
      "Postpartum Massage",
      "Maggie’s Herbal Hot Ball",
      "Breast Massage",
      "Belly Wrap",
      "Provision of 1 Belly Binder",
      "Baby Hot Herbal",
      "Baby & Ball Massage",
    ],
    cost: "Ksh21,000",
  },
  {
    days: "5 Days",
    duration: [
      "1hr 30mins Mother’s care only",
      "2hrs Baby’s care only",
    ],
    services: [
      "Postpartum Massage",
      "Hot Herbal Ball",
      "Breast Massage",
      "Belly Wrap",
      "Provision of 1 Belly Binder",
      "Relaxation Massage",
      "Uterine Reposition Massage",
      "Herbal Uterine Steam",
      "Baby Massage",
      "Baby Hot Herbal",
    ],
    cost: "Ksh35,000",
  },
  {
    days: "7 Days",
    duration: [
      "1hr 30mins Mother’s care only",
      "2hrs Baby’s care only",
    ],
    services: [
      "Postpartum massage",
      "Hot Herbal ball",
      "Breast Massage",
      "Belly Wrap",
      "Provision of 1 Belly Binder",
      "Relaxation Massage",
      "Uterine Reposition Massage",
      "Herbal Uterine Steam",
      "Face Lifting Massage",
      "Baby Massage",
      "Baby Hot Herbal",
    ],
    cost: "Ksh50,000",
  },
  {
    days: "10 Days",
    duration: [
      "1hr 30 mins Mother’s care only",
      "2hrs Baby’s care only",
    ],
    services: [
      "Postpartum Massage",
      "Hot Herbal ball",
      "Breast Massage",
      "Belly Wrap",
      "Provision of 1 Belly Binder",
      "Relaxation Massage",
      "Uterine Reposition Massage",
      "Herbal Uterine Steam",
      "Face Lifting Massage",
      "Slimming Massage",
      "Body Wrapping",
      "Baby Massage",
      "Baby Hot Herbal",
    ],
    cost: "Ksh67,500",
  },
  {
    days: "14 Days",
    duration: [
      "1hr 30mins Mother’s care only",
      "2hrs Baby’s care only",
    ],
    services: [
      "Postpartum Massage",
      "Hot Herbal Ball",
      "Breast Massage",
      "Belly Wrap",
      "Provision of 1 Belly Binder",
      "Relaxation Massage",
      "Uterine Reposition Massage",
      "Herbal Uterine Steam",
      "Face Lifting Massage",
      "Slimming Massage",
      "Body Wrapping",
      "Additional Relaxation and Specialized Massages",
      "Baby Massage",
      "Baby Hot Herbal",
    ],
    cost: "Ksh92,000",
  },
  {
    days: "21 Days",
    duration: [
      "1hr 30mins Mother’s care only",
      "2hrs Baby’s care only",
    ],
    services: [
      "Postpartum Massage",
      "Hot Herbal ball",
      "Breast Massage",
      "Belly Wrap",
      "Provision of 1 Belly Binder",
      "Relaxation Massage",
      "Uterine Reposition Massage",
      "Herbal Uterine Steam",
      "Face Lifting Massage",
      "Slimming Massage",
      "Body Wrapping",
      "Additional Relaxation and Specialized Massages",
      "Fourth Trimester Restoration (Aroma massage, uterine massage, body scrub, belly wrap, herbal bath)",
      "Family Sharing Package – (Relaxation massage + Hot Herbal Compress + Maggie’s Signature Herbs Massage)",
      "Baby Massage",
      "Baby Hot Herbal",
    ],
    cost: "Ksh135,000",
  },
];

const parseKES = (str) => {
  // Turns "Ksh21,000" into 21000
  const n = (str || '').toString().replace(/[^\d]/g, '');
  return Number(n || 0);
};

const PostpartumPackages = () => {
  const { items, dispatch } = useCart();
  const [addedMap, setAddedMap] = useState({});
  const [toast, setToast] = useState(null);

  const withDefaultImage = (img) => img || Nobg;
  const isInCart = (id) => items?.some((i) => i.id === id);

  const addPackage = (pkg) => dispatch(CartActions.add(pkg));

  const handleAdd = (pkg) => {
    if (isInCart(pkg.id) || addedMap[pkg.id]) return;
    addPackage({ ...pkg, image: withDefaultImage(pkg.image) });
    setAddedMap((m) => ({ ...m, [pkg.id]: true }));
    setToast(`${pkg.title} added to cart`);
    setTimeout(() => {
      setAddedMap((m) => ({ ...m, [pkg.id]: false }));
      setToast(null);
    }, 1600);
  };

  return (
    <div className="postpartum-packages">
      <h2>Postpartum Packages with Sessions</h2>

      {/* Screen reader live region */}
      <span className="sr-only" aria-live="polite">{toast ? toast : ''}</span>
      {/* Small visual toast (optional) */}
      {toast && <div className="mini-toast">{toast}</div>}

      <div className="postpartum-packages__cards-container">
        {postpartumData.map((pkg) => {
          const id = `pkg-pp-${pkg.days.toLowerCase().replace(/\s+/g, '-')}`;
          const price = parseKES(pkg.cost);
          const disabled = isInCart(id) || addedMap[id];
          const label = isInCart(id) ? 'Added To Cart ✓' : addedMap[id] ? 'Added ✓' : 'Add to Cart';

          return (
            <div key={id} className="postpartum-packages__card">
              <div className="postpartum-packages__badge">{pkg.days}</div>

              <div className="postpartum-packages__package-details">
                <div className="postpartum-packages__package-info">
                  <div className="postpartum-packages__info-text">
                    <strong>Duration</strong>
                    <ul className="postpartum-packages__info-list">
                      {pkg.duration.map((duration, idx) => (
                        <li key={idx}>{duration}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="postpartum-packages__package-info">
                  <div className="postpartum-packages__info-text">
                    <strong>Services</strong>
                    <ul className="postpartum-packages__info-list">
                      {pkg.services.map((service, idx) => (
                        <li key={idx}>{service}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="postpartum-packages__package-info">
                  <div className="postpartum-packages__info-text">
                    <strong>Cost</strong>
                    <p>{pkg.cost}</p>
                  </div>
                </div>

                <div className="postpartum-packages__btn-container">
                  <button
                    type="button"
                    className={`postpartum-packages__btn ${disabled ? 'is-added' : ''}`}
                    onClick={() =>
                      handleAdd({
                        id,
                        title: `Postpartum – ${pkg.days}`,
                        price,
                        image: null, // will fall back to Nobg
                        meta: `${pkg.days} • ${pkg.duration?.[0] || 'Postpartum care'}`,
                      })
                    }
                    disabled={disabled}
                  >
                    {label}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PostpartumPackages;
