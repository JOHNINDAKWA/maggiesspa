import React, { useState } from "react";
import "./BabyPackages.css";
import BabyImage1 from "../../../../assets/images/spa-services/mag35.jpg";
import BabyImage2 from "../../../../assets/images/spa-services/mag36.jpg";
import BabyImage3 from "../../../../assets/images/spa-services/mag31.jpg";
import BabyImage4 from "../../../../assets/images/spa-services/mag32.jpg";
import Nobg from "../../../../assets/images/nobg1.png";

import { useCart, CartActions } from "../../../../Context/CartContext";
import { formatKES } from "../../../../Utils/currency";

const BabyPackages = () => {
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

  return (
    <section
      className="baby-care"
      style={{ color: "#01a1a1", maxWidth: "1200px", margin: "0 auto" }}
    >
      <h2>Baby Packages</h2>

      {/* Screen reader live region + tiny toast */}
      <span className="sr-only" aria-live="polite">
        {toast ? toast : ""}
      </span>
      {toast && <div className="mini-toast">{toast}</div>}

      <div className="baby-packages">
        {/* 1. Little Hands, Big Love */}
        {(() => {
          const id = "pkg-baby-little-hands";
          const price = 22740;
          const duration = "2–5 hrs";
          const disabled = isInCart(id) || addedMap[id];
          const label = isInCart(id)
            ? "Added To Cart ✓"
            : addedMap[id]
            ? "Added ✓"
            : "Add to Cart";
          return (
            <div className="baby-package">
              <img
                src={withDefaultImage(BabyImage1)}
                alt="Little Hands, Big Love"
                className="baby-package-img"
              />
              <h3>
                1. Little Hands, Big Love <br />
                <span>(6 weeks+ postpartum)</span>
              </h3>

              <div className="baby-meta">
                <span className="tag">{duration}</span>
                <span className="tag tag-price">{formatKES(price)}</span>
              </div>

              <p>
                A shared moment of love and care between mother and child. Deep
                connection through massage and wellness rituals.
              </p>
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

              <button
                type="button"
                className={`baby-btn ${disabled ? "is-added" : ""}`}
                onClick={() =>
                  handleAdd({
                    id,
                    title: "Little Hands, Big Love",
                    price,
                    image: BabyImage1,
                    meta: `${duration} • 6 weeks+ postpartum`,
                  })
                }
                disabled={disabled}
              >
                {label}
              </button>
            </div>
          );
        })()}

        {/* 2. Golden Steps */}
        {(() => {
          const id = "pkg-baby-golden-steps";
          const price = 28000;
          const duration = "2 hrs";
          const disabled = isInCart(id) || addedMap[id];
          const label = isInCart(id)
            ? "Added To Cart ✓"
            : addedMap[id]
            ? "Added ✓"
            : "Add to Cart";
          return (
            <div className="baby-package">
              <img
                src={withDefaultImage(BabyImage2)}
                alt="Golden Steps"
                className="baby-package-img"
              />
              <h3>
                2. Golden Steps <br />
                <span>(0–12 months)</span>
              </h3>

              <div className="baby-meta">
                <span className="tag">{duration}</span>
                <span className="tag tag-price">{formatKES(price)}</span>
              </div>

              <p>
                Capture milestones with love, memory and charm. A heartwarming
                celebration of baby’s growth.
              </p>
              <p className="what-to-expect">What to expect:</p>
              <ul>
                <li>Milestone photo session & gifts</li>
                <li>Soothing baby massage</li>
                <li>Professional keepsake photos</li>
              </ul>

              <button
                type="button"
                className={`baby-btn ${disabled ? "is-added" : ""}`}
                onClick={() =>
                  handleAdd({
                    id,
                    title: "Golden Steps",
                    price,
                    image: BabyImage2,
                    meta: `${duration} • 0–12 months`,
                  })
                }
                disabled={disabled}
              >
                {label}
              </button>
            </div>
          );
        })()}

        {/* 3. Palm To Soul */}
        {(() => {
          const id = "pkg-baby-palm-to-soul";
          const price = 40000;
          const duration = "4 hrs";
          const disabled = isInCart(id) || addedMap[id];
          const label = isInCart(id)
            ? "Added To Cart ✓"
            : addedMap[id]
            ? "Added ✓"
            : "Add to Cart";
          return (
            <div className="baby-package">
              <img
                src={withDefaultImage(BabyImage3)}
                alt="Palm To Soul"
                className="baby-package-img"
              />
              <h3>
                3. Palm To Soul <br />
                <span>(For 1–2 people)</span>
              </h3>

              <div className="baby-meta">
                <span className="tag">{duration}</span>
                <span className="tag tag-price">{formatKES(price)}</span>
              </div>

              <p>
                Celebrate motherhood with luxury and care. An elegant
                postpartum retreat for mind, body & spirit.
              </p>
              <p className="what-to-expect">What to expect:</p>
              <ul>
                <li>Holistic four-hand massage</li>
                <li>Skin therapy, feet care, floral decor</li>
                <li>Wellness box + 20 edited photos & video</li>
              </ul>

              <button
                type="button"
                className={`baby-btn ${disabled ? "is-added" : ""}`}
                onClick={() =>
                  handleAdd({
                    id,
                    title: "Palm To Soul",
                    price,
                    image: BabyImage3,
                    meta: `${duration} • For 1–2 people`,
                  })
                }
                disabled={disabled}
              >
                {label}
              </button>
            </div>
          );
        })()}

        {/* 4. Harmony After Loss */}
        {(() => {
          const id = "pkg-baby-harmony-after-loss";
          const price = 23450;
          const duration = "3 hrs";
          const disabled = isInCart(id) || addedMap[id];
          const label = isInCart(id)
            ? "Added To Cart ✓"
            : addedMap[id]
            ? "Added ✓"
            : "Add to Cart";
          return (
            <div className="baby-package">
              <img
                src={withDefaultImage(BabyImage4)}
                alt="Harmony After Loss"
                className="baby-package-img"
              />
              <h3>
                4. Harmony After Loss <br />
                <span>(Post-loss therapy)</span>
              </h3>

              <div className="baby-meta">
                <span className="tag">{duration}</span>
                <span className="tag tag-price">{formatKES(price)}</span>
              </div>

              <p>
                Gentle healing for grief and restoration. A sanctuary for
                emotional and physical reconnection.
              </p>
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

              <button
                type="button"
                className={`baby-btn ${disabled ? "is-added" : ""}`}
                onClick={() =>
                  handleAdd({
                    id,
                    title: "Harmony After Loss",
                    price,
                    image: BabyImage4,
                    meta: `${duration} • Post-loss therapy`,
                  })
                }
                disabled={disabled}
              >
                {label}
              </button>
            </div>
          );
        })()}
      </div>
    </section>
  );
};

export default BabyPackages;
