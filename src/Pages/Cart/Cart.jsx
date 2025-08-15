import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart, CartActions } from "../../Context/CartContext";
import CartItem from "../../Components/CartItem/CartItem";
import { formatKES } from "../../Utils/currency";
import {
  FiTrash2,
  FiLock,
  FiGift,
  FiShield,
  FiCheckCircle,
  FiArrowLeft,
} from "react-icons/fi";
import "./Cart.css";

const CartPage = () => {
  const { items, totals, dispatch } = useCart();
  const [coupon, setCoupon] = useState("");
  const [note, setNote] = useState("");
  const [couponMsg, setCouponMsg] = useState("");
  const navigate = useNavigate();

  const applyCoupon = (e) => {
    e.preventDefault();
    // Placeholder – integrate real logic later
    setCouponMsg("Coupon feature coming soon.");
  };

useEffect(() => {
  localStorage.setItem('checkout_note', note || '');
}, [note]);

const handleCheckout = () => {
  navigate('/checkout');
};


  return (
    <div className="cart-page">
      <div className="cart-page__header">
        <h2>Your Cart</h2>
        {items.length > 0 && (
          <button
            className="clear-btn"
            onClick={() => dispatch(CartActions.clear())}
          >
            <FiTrash2 /> Clear Cart
          </button>
        )}
      </div>

      {items.length === 0 ? (
        <div className="cart-empty">
          <h3>Your cart is empty</h3>
          <p>Explore our curated packages designed with moms in mind.</p>
          <div className="cart-empty__actions">
            <Link to="/services/1" className="cta-btn">
              Shop Prenatal
            </Link>
            <Link to="/services/2" className="cta-btn cta-btn--outline">
              Shop Postpartum
            </Link>
          </div>
        </div>
      ) : (
        <div className="cart-grid">
          <div className="cart-grid__left">
            {items.map((it) => (
              <CartItem key={it.id} item={it} />
            ))}

            <div className="cart-note">
              <label htmlFor="note">Order note (optional)</label>
              <textarea
                id="note"
                rows={4}
                placeholder="Any special preferences, surprises, or gift messages?"
                value={note}
                onChange={(e) => setNote(e.target.value)}
              />
            </div>

            <form className="coupon" onSubmit={applyCoupon}>
              <input
                type="text"
                placeholder="Coupon code"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
              />
              <button type="submit">Apply</button>
            </form>
            {couponMsg && <div className="coupon-msg">{couponMsg}</div>}
          </div>

          <aside className="cart-grid__right">
            <div className="summary-card">
              <h3>Order Summary</h3>
              <div className="summary-row">
                <span>Subtotal</span>
                <span>{formatKES(totals.subtotal)}</span>
              </div>
              <div className="summary-row">
                <span>Service fee</span>
                <span>{formatKES(totals.serviceFee)}</span>
              </div>
              <div className="summary-divider" />
              <div className="summary-total">
                <span>Total</span>
                <span>{formatKES(totals.total)}</span>
              </div>
              <p className="summary-hint">
                <FiLock aria-hidden="true" /> Secure checkout • Prices in KES
              </p>
              <button
                className="checkout-btn"
                onClick={handleCheckout}
                disabled={items.length === 0}
              >
                Proceed to Checkout
              </button>

              <Link className="continue-link" to="/services">
                <FiArrowLeft aria-hidden="true" /> Continue shopping
              </Link>
            </div>

            <div className="assurance">
              <ul>
                <li>
                  <FiShield className="assurance-icon" aria-hidden="true" />
                  Pregnancy-safe, therapist-approved treatments
                </li>
                <li>
                  <FiCheckCircle
                    className="assurance-icon"
                    aria-hidden="true"
                  />
                  Flexible scheduling after purchase
                </li>
                <li>
                  <FiGift className="assurance-icon" aria-hidden="true" />
                  Giftable → perfect for showers & birthdays
                </li>
              </ul>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
};

export default CartPage;
