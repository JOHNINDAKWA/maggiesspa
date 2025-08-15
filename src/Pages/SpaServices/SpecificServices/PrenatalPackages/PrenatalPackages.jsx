import "./PrenatalPackages.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import Nobg from "../../../../assets/images/nobg1.png";
import { useCart, CartActions } from "../../../../Context/CartContext";

const PrenatalPackages = () => {
  const { dispatch, items } = useCart();
  const [addedMap, setAddedMap] = useState({});
  const [toast, setToast] = useState(null);

  const withDefaultImage = (img) => img || Nobg;
  const isInCart = (id) => items?.some((i) => i.id === id);

  const addPackage = (pkg) => {
    dispatch(CartActions.add(pkg));
  };

  const handleAdd = (pkg) => {
    // Prevent duplicate presses while showing feedback
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
    <section className="prenatal-packages-v2">
      <h2 className="prenatal-packages-v2__title">Prenatal Packages</h2>

      {/* Screen reader updates */}
      <span className="sr-only" aria-live="polite">
        {toast ? toast : ""}
      </span>

      {/* Tiny visual toast (optional) */}
      {toast && <div className="mini-toast">{toast}</div>}

      <div className="prenatal-packages-v2__grid">
        {/* Mama Haven Package */}
        <div className="prenatal-packages-v2__card prenatal-packages-v2__card--premium">
          <div className="prenatal-packages-v2__info-bar">
            <h3>Mama Haven Package</h3>
            <div className="prenatal-packages-v2__tag">
              <span className="prenatal-packages-v2__tag-time">2 HRS</span>
              <span className="prenatal-packages-v2__tag-divider">•</span>
              <span className="prenatal-packages-v2__tag-price">Ksh 40,000</span>
            </div>
            <p className="prenatal-packages-v2__subtext">Suitable after 35 weeks</p>
          </div>

          <p className="prenatal-packages-v2__description">
            A sanctuary of comfort for mamas in their final stretch. Designed to relax,
            restore, and empower in the final weeks of pregnancy.
          </p>

          <img className="nobg" src={withDefaultImage(Nobg)} alt="MAMA PACKAGE" />

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

          {(() => {
            const id = "pkg-mama-haven";
            const disabled = isInCart(id) || addedMap[id];
            const label = isInCart(id) ? "Added to Cart ✓" : addedMap[id] ? "Added ✓" : "Add to Cart";
            return (
              <button
                type="button"
                className={`prenatal-packages-v2__button ${disabled ? "is-added" : ""}`}
                onClick={() =>
                  handleAdd({
                    id,
                    title: "Mama Haven Package",
                    price: 40000,
                    image: Nobg,
                    meta: "2 Hours • Suitable after 35 weeks",
                  })
                }
                disabled={disabled}
              >
                {label}
              </button>
            );
          })()}
        </div>

        {/* Elegant Pregnancy Package */}
        <div className="prenatal-packages-v2__card">
          <div className="prenatal-packages-v2__body">
            <div className="prenatal-packages-v2__info-bar">
              <h3>Elegant Pregnancy Package</h3>
              <div className="prenatal-packages-v2__tag">
                <span className="prenatal-packages-v2__tag-time">4 HRS</span>
                <span className="prenatal-packages-v2__tag-divider">•</span>
                <span className="prenatal-packages-v2__tag-price">Ksh 40,000</span>
              </div>
              <p className="prenatal-packages-v2__subtext">
                Perfect for baby showers, birthdays, or a gift
              </p>
            </div>

            <p className="prenatal-packages-v2__description">
              A luxurious, all-inclusive celebration of motherhood. Designed for one or two
              guests, with wellness gifts, curated therapies, and loving attention to every detail.
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
            {(() => {
              const id = "pkg-elegant-pregnancy";
              const disabled = isInCart(id) || addedMap[id];
              const label = isInCart(id) ? "Added to Cart ✓" : addedMap[id] ? "Added ✓" : "Add to Cart";
              return (
                <button
                  type="button"
                  className={`prenatal-packages-v2__button ${disabled ? "is-added" : ""}`}
                  onClick={() =>
                    handleAdd({
                      id,
                      title: "Elegant Pregnancy Package",
                      price: 40000,
                      image: null, // no image provided – will fall back
                      meta: "4 Hours • Gift-ready",
                    })
                  }
                  disabled={disabled}
                >
                  {label}
                </button>
              );
            })()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrenatalPackages;
