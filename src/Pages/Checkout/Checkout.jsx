import React, { useMemo, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../Context/CartContext";
import { formatKES } from "../../Utils/currency";
import {
  FiUser,
  FiMail,
  FiPhone,
  FiCalendar,
  FiArrowLeft,
  FiArrowRight,
  FiSmartphone,
  FiLock,
  FiCheckCircle,
  FiAlertCircle,
} from "react-icons/fi";
import { BsBank2 } from "react-icons/bs";
import "./Checkout.css";

/** Toggle this off when your /api endpoints are ready */
const DEMO_MODE = true;

const BANK_DETAILS = {
  bankName: "KCB Bank",
  accountName: "Maggie’s P & P Spa",
  accountNumber: "1314699016",
  branch: "Ngong Road Branch",
};

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  preferredDate: "",
  notes: "",
};

/** Helpers */
const wait = (ms) => new Promise((r) => setTimeout(r, ms));

async function safeJson(resp) {
  const text = await resp.text();
  if (!text) return null;
  try {
    return JSON.parse(text);
  } catch (err) {
    console.warn("Failed to parse JSON:", err);
    return null;
  }
}

export default function CheckoutPage() {
  const { items, totals } = useCart();
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [form, setForm] = useState(initialForm);
  const [method, setMethod] = useState("mpesa"); // 'mpesa' | 'bank'
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const [error, setError] = useState("");
  const [stkStarted, setStkStarted] = useState(false);

  /** Prefill contact from localStorage */
  useEffect(() => {
    const raw = localStorage.getItem("checkout_contact");
    if (raw) {
      try {
        const cached = JSON.parse(raw);
        setForm((f) => ({ ...f, ...cached }));
      } catch (err) {
        console.warn("Invalid checkout_contact JSON:", err);
      }
    }
  }, []);

  /** Persist contact to localStorage */
  useEffect(() => {
    try {
      localStorage.setItem("checkout_contact", JSON.stringify(form));
    } catch (err) {
      console.warn("Failed saving checkout_contact:", err);
    }
  }, [form]);

  /** Prefill note from Cart (saved in localStorage by Cart page) */
  useEffect(() => {
    const savedNote = localStorage.getItem("checkout_note");
    if (savedNote && !form.notes) {
      setForm((f) => ({ ...f, notes: savedNote }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // run once

  const isCartEmpty = items.length === 0;

  const canContinue = useMemo(() => {
    if (!form.firstName?.trim()) return false;
    if (!form.lastName?.trim()) return false;
    if (!/^\S+@\S+\.\S+$/.test(form.email || "")) return false;
    if (!form.phone?.trim()) return false;
    return true;
  }, [form]);

  const onNext = () => {
    if (!canContinue) return;
    setStep(2);
  };

  const onBack = () => setStep(1);

  /** API: create order (mocked in DEMO_MODE) */
  async function createOrder(payload) {
    if (DEMO_MODE) {
      await wait(400);
      return {
        ok: true,
        orderId: `DEMO-${Math.random().toString(36).slice(2, 8).toUpperCase()}`,
      };
    }
    const r = await fetch("/api/orders/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await safeJson(r);
    if (!r.ok) {
      throw new Error(data?.error || "create_failed");
    }
    return data;
  }

  /** API: initiate STK (mocked in DEMO_MODE) */
  async function startStk({ amount, phone, orderId }) {
    if (DEMO_MODE) {
      await wait(600);
      return { ok: true, checkout: { CheckoutRequestID: "DEMO-CHECKOUT" } };
    }
    const r = await fetch("/api/mpesa/stk", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        amount,
        phone,
        orderId,
        accountReference: `Order ${orderId}`,
      }),
    });
    const data = await safeJson(r);
    if (!r.ok) {
      throw new Error(data?.error || "stk_failed");
    }
    return data;
  }

  const placeOrder = async () => {
    try {
      setError("");
      setLoading(true);

      if (isCartEmpty) {
        setError("Your cart is empty.");
        setLoading(false);
        return;
      }

      const payload = {
        items,
        totals,
        contact: {
          firstName: form.firstName.trim(),
          lastName: form.lastName.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          preferredDate: form.preferredDate || null,
          notes: form.notes || "",
        },
        paymentMethod: method, // 'mpesa' | 'bank'
      };

      const created = await createOrder(payload);
      if (!created?.ok || !created?.orderId) {
        setError("Could not create order. Please try again.");
        setLoading(false);
        return;
      }

      setOrderId(created.orderId);

      if (method === "bank") {
        setLoading(false);
        // clear the saved cart note now that an order exists
        try {
          localStorage.removeItem("checkout_note");
        } catch (err) {
          console.warn("Failed removing checkout_note:", err);
        }
        // Adjust path if your route differs:
        navigate(`/thank-you?orderId=${created.orderId}&method=bank`);
        return;
      }

      // M-Pesa STK
      const stk = await startStk({
        amount: totals.total,
        phone: form.phone,
        orderId: created.orderId,
      });

      if (stk?.ok) {
        setStkStarted(true);
        setLoading(false);
        try {
          localStorage.removeItem("checkout_note");
        } catch (err) {
          console.warn("Failed removing checkout_note:", err);
        }
        // Optionally: navigate to an "Awaiting Confirmation" page or start polling here
      } else {
        setError("Failed to initiate M-Pesa STK. Please try again.");
        setLoading(false);
      }
    } catch (e) {
      console.error(e);
      setError(e?.message || "Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <h2>Checkout</h2>
        <div className="stepper">
          <div className={`step ${step >= 1 ? "active" : ""}`}>
            <span className="step-index">1</span>
            <span className="step-label">Your Details</span>
          </div>
          <div className={`step-rail ${step >= 2 ? "active" : ""}`} />
          <div className={`step ${step >= 2 ? "active" : ""}`}>
            <span className="step-index">2</span>
            <span className="step-label">Payment</span>
          </div>
        </div>
      </div>

      <div className="checkout-grid">
        {/* LEFT: Forms */}
        <div className="checkout-left">
          {/* Step 1: Personal Details */}
          {step === 1 && (
            <section className="card">
              <h3 className="card-title">Your Details</h3>
              <div className="form-grid">
                <div className="field">
                  <label htmlFor="firstName">
                    <FiUser /> First name
                  </label>
                  <input
                    id="firstName"
                    value={form.firstName}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, firstName: e.target.value }))
                    }
                    placeholder="Jane"
                  />
                </div>
                <div className="field">
                  <label htmlFor="lastName">
                    <FiUser /> Last name
                  </label>
                  <input
                    id="lastName"
                    value={form.lastName}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, lastName: e.target.value }))
                    }
                    placeholder="Doe"
                  />
                </div>
                <div className="field">
                  <label htmlFor="email">
                    <FiMail /> Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, email: e.target.value }))
                    }
                    placeholder="jane@example.com"
                  />
                </div>
                <div className="field">
                  <label htmlFor="phone">
                    <FiPhone /> Phone (M-Pesa)
                  </label>
                  <input
                    id="phone"
                    value={form.phone}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, phone: e.target.value }))
                    }
                    placeholder="07xx xxx xxx"
                  />
                </div>
                <div className="field">
                  <label htmlFor="preferredDate">
                    <FiCalendar /> Preferred date (optional)
                  </label>
                  <input
                    id="preferredDate"
                    type="date"
                    value={form.preferredDate}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, preferredDate: e.target.value }))
                    }
                  />
                </div>
                <div className="field field--full">
                  <label htmlFor="notes">Order note (optional)</label>
                  <textarea
                    id="notes"
                    rows={3}
                    placeholder="Any preferences, gift message, or requests?"
                    value={form.notes}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, notes: e.target.value }))
                    }
                  />
                </div>
              </div>

              <div className="actions">
                <button
                  className="btn-primary"
                  onClick={onNext}
                  disabled={!canContinue || isCartEmpty}
                >
                  Continue to Payment <FiArrowRight />
                </button>
              </div>
            </section>
          )}

          {/* Step 2: Payment */}
          {step === 2 && (
            <section className="card">
              <h3 className="card-title">Payment</h3>

              <div className="methods">
                <label
                  className={`method ${method === "mpesa" ? "selected" : ""}`}
                >
                  <input
                    type="radio"
                    name="method"
                    value="mpesa"
                    checked={method === "mpesa"}
                    onChange={() => setMethod("mpesa")}
                  />
                  <div className="method-body">
                    <div className="method-icon">
                      <FiSmartphone />
                    </div>
                    <div>
                      <div className="method-title">M-Pesa (STK Push)</div>
                      <div className="method-sub">
                        We’ll prompt your phone to authorize the payment.
                      </div>
                    </div>
                  </div>
                </label>

                <label
                  className={`method ${method === "bank" ? "selected" : ""}`}
                >
                  <input
                    type="radio"
                    name="method"
                    value="bank"
                    checked={method === "bank"}
                    onChange={() => setMethod("bank")}
                  />
                  <div className="method-body">
                    <div className="method-icon">
                      <BsBank2 />
                    </div>
                    <div>
                      <div className="method-title">Bank Transfer</div>
                      <div className="method-sub">
                        Send the total and we’ll confirm manually.
                      </div>
                    </div>
                  </div>
                </label>
              </div>

              {method === "bank" && (
                <div className="bank-panel">
                  <h4>Bank Details</h4>
                  <ul className="bank-list">
                    <li>
                      <strong>Bank:</strong> {BANK_DETAILS.bankName}
                    </li>
                    <li>
                      <strong>Account Name:</strong> {BANK_DETAILS.accountName}
                    </li>
                    <li>
                      <strong>Account Number:</strong>{" "}
                      {BANK_DETAILS.accountNumber}
                    </li>
                    <li>
                      <strong>Branch:</strong> {BANK_DETAILS.branch}
                    </li>
                    <li>
                      <strong>Amount:</strong> {formatKES(totals.total)}
                    </li>
                    <li className="hint">
                      Use your name as the payment reference if possible.
                    </li>
                  </ul>
                </div>
              )}

              {error && (
                <div className="banner banner--error">
                  <FiAlertCircle />{" "}
                  {typeof error === "string"
                    ? error
                    : error?.message || "Something went wrong."}
                </div>
              )}

              {orderId && method === "bank" && (
                <div className="banner banner--info">
                  <FiCheckCircle /> Order created as <strong>{orderId}</strong>.
                  We’ll confirm payment once received.
                </div>
              )}

              {stkStarted && (
                <div className="banner banner--info">
                  <FiLock /> STK initiated. Check your phone and enter your
                  M-Pesa PIN to complete.
                </div>
              )}

              <div className="actions">
                <button className="btn-ghost" onClick={onBack}>
                  <FiArrowLeft /> Back
                </button>
                <button
                  className={`btn-primary ${loading ? "is-loading" : ""}`}
                  onClick={placeOrder}
                  disabled={loading || isCartEmpty}
                >
                  {method === "mpesa" ? "Pay with M-Pesa" : "Place Order"}
                </button>
              </div>
            </section>
          )}
        </div>

        {/* RIGHT: Summary */}
        <aside className="checkout-right">
          <div className="card summary">
            <h3 className="card-title">Order Summary</h3>
            <div className="summary-items">
              {items.map((it) => (
                <div className="summary-item" key={it.id}>
                  <img src={it.image} alt={it.title} />
                  <div className="si-meta">
                    <div className="si-title">{it.title}</div>
                    {it.meta && <div className="si-sub">{it.meta}</div>}
                    <div className="si-qty">Qty: {it.qty}</div>
                  </div>
                  <div className="si-price">{formatKES(it.price * it.qty)}</div>
                </div>
              ))}
            </div>
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
            <div className="summary-hint">
              <FiLock /> Secure checkout • Prices in KES
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
