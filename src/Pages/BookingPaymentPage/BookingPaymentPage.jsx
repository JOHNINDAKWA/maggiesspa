import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiSmartphone, FiArrowLeft, FiLock, FiCheckCircle, FiAlertCircle } from "react-icons/fi";
import { BsBank2 } from "react-icons/bs";
import { formatKES } from "../../Utils/currency";
import "./../../Pages/Checkout/Checkout.css"; // reuse your checkout styles

/** Toggle this off when your /api endpoints are ready */
const DEMO_MODE = true;

const BANK_DETAILS = {
  bankName: "KCB Bank",
  accountName: "Maggie’s P & P Spa",
  accountNumber: "1314699016",
  branch: "Ngong Road Branch",
};

const wait = (ms) => new Promise((r) => setTimeout(r, ms));

async function safeJson(resp) {
  const text = await resp.text();
  if (!text) return null;
  try { return JSON.parse(text); } catch (err) {
    console.warn("Failed to parse JSON:", err);
    return null;
  }
}

export default function BookingPaymentPage() {
  const navigate = useNavigate();
  const [method, setMethod] = useState("mpesa"); // 'mpesa' | 'bank'
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [stkStarted, setStkStarted] = useState(false);
  const [orderId, setOrderId] = useState(null);

  // Pull the snapshot created in Confirmation
  const [bookingInfo, setBookingInfo] = useState(null);

  useEffect(() => {
    const raw = localStorage.getItem("booking_payment_info");
    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        setBookingInfo(parsed);
      } catch (err) {
        console.warn("Invalid booking_payment_info JSON:", err);
      }
    }
  }, []);

  const deposit = useMemo(() => bookingInfo?.amounts?.deposit ?? 0, [bookingInfo]);
  const total = useMemo(() => bookingInfo?.amounts?.total ?? 0, [bookingInfo]);

  /** DEMO create "payment intent" (or booking order) */
  async function createBookingPayment(payload) {
    if (DEMO_MODE) {
      await wait(400);
      return { ok: true, orderId: `BK-${Math.random().toString(36).slice(2, 8).toUpperCase()}` };
    }
    const r = await fetch("/api/booking/create-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await safeJson(r);
    if (!r.ok) throw new Error(data?.error || "create_failed");
    return data;
  }

  /** DEMO STK push for deposit */
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
        accountReference: `Booking ${orderId}`,
      }),
    });
    const data = await safeJson(r);
    if (!r.ok) throw new Error(data?.error || "stk_failed");
    return data;
  }

  const placePayment = async () => {
    try {
      setError("");
      setLoading(true);

      if (!bookingInfo) {
        setError("Missing booking details. Please start again.");
        setLoading(false);
        navigate("/book");
        return;
      }

      const payload = {
        booking: bookingInfo.booking,
        amounts: bookingInfo.amounts,
        paymentMethod: method, // 'mpesa' | 'bank'
        purpose: "booking_deposit",
      };

      const created = await createBookingPayment(payload);
      if (!created?.ok || !created?.orderId) {
        setError("Could not create payment. Please try again.");
        setLoading(false);
        return;
      }
      setOrderId(created.orderId);

      if (method === "bank") {
        setLoading(false);
        // Keep snapshot; navigate to a thank-you page for bank transfer instructions
        navigate(`/thank-you?orderId=${created.orderId}&method=bank&type=booking`);
        return;
      }

      // M-Pesa STK for DEPOSIT only
      const phone = bookingInfo?.booking?.phone || "";
      const stk = await startStk({
        amount: deposit,
        phone,
        orderId: created.orderId,
      });

      if (stk?.ok) {
        setStkStarted(true);
        setLoading(false);
        // Do NOT clear or finalize here—wait for callback/poll in real mode
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

  if (!bookingInfo) {
    return (
      <div className="checkout-page">
        <div className="checkout-header">
          <h2>Payment</h2>
        </div>
        <div className="banner banner--error" style={{ maxWidth: 640, margin: "0 auto" }}>
          <FiAlertCircle /> We couldn’t find your booking details. Please start again.
        </div>
        <div style={{ maxWidth: 640, margin: "12px auto" }}>
          <button className="btn-ghost2" onClick={() => navigate("/book")}>
            <FiArrowLeft /> Back to Booking
          </button>
        </div>
      </div>
    );
  }

  const b = bookingInfo.booking;

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <h2>Booking Payment</h2>
        <div className="stepper">
          <div className="step active"><span className="step-index">1</span><span className="step-label">Payment</span></div>
        </div>
      </div>

      <div className="checkout-grid">
        {/* LEFT */}
        <div className="checkout-left">
          <section className="card">
            <h3 className="card-title">Choose Payment Method</h3>

            <div className="methods">
              <label className={`method ${method === "mpesa" ? "selected" : ""}`}>
                <input
                  type="radio"
                  name="method"
                  value="mpesa"
                  checked={method === "mpesa"}
                  onChange={() => setMethod("mpesa")}
                />
                <div className="method-body">
                  <div className="method-icon"><FiSmartphone /></div>
                  <div>
                    <div className="method-title">M-Pesa (STK Push)</div>
                    <div className="method-sub">We’ll prompt your phone for a 50% deposit.</div>
                  </div>
                </div>
              </label>

              <label className={`method ${method === "bank" ? "selected" : ""}`}>
                <input
                  type="radio"
                  name="method"
                  value="bank"
                  checked={method === "bank"}
                  onChange={() => setMethod("bank")}
                />
                <div className="method-body">
                  <div className="method-icon"><BsBank2 /></div>
                  <div>
                    <div className="method-title">Bank Transfer</div>
                    <div className="method-sub">Send the 50% deposit and we’ll confirm manually.</div>
                  </div>
                </div>
              </label>
            </div>

            {method === "bank" && (
              <div className="bank-panel">
                <h4>Bank Details</h4>
                <ul className="bank-list">
                  <li><strong>Bank:</strong> {BANK_DETAILS.bankName}</li>
                  <li><strong>Account Name:</strong> {BANK_DETAILS.accountName}</li>
                  <li><strong>Account Number:</strong> {BANK_DETAILS.accountNumber}</li>
                  <li><strong>Branch:</strong> {BANK_DETAILS.branch}</li>
                  <li><strong>Deposit to Pay:</strong> {formatKES(deposit)}</li>
                  <li className="hint">Use your name and the booking date/time as the reference if possible.</li>
                </ul>
              </div>
            )}

            {error && (
              <div className="banner banner--error">
                <FiAlertCircle /> {typeof error === "string" ? error : (error?.message || "Something went wrong.")}
              </div>
            )}

            {orderId && method === "bank" && (
              <div className="banner banner--info">
                <FiCheckCircle /> Payment intent created as <strong>{orderId}</strong>. We’ll confirm once funds arrive.
              </div>
            )}

            {stkStarted && (
              <div className="banner banner--info">
                <FiLock /> STK initiated for {formatKES(deposit)}. Check your phone to authorize.
              </div>
            )}

            <div className="actions">
              <button className="btn-ghost2" onClick={() => navigate("/book")}>
                <FiArrowLeft /> Back
              </button>
              <button
                className={`btn-primary ${loading ? "is-loading" : ""}`}
                onClick={placePayment}
                disabled={loading}
              >
                {method === "mpesa" ? "Pay Deposit with M-Pesa" : "Continue with Bank Transfer"}
              </button>
            </div>
          </section>
        </div>

        {/* RIGHT: Summary */}
        <aside className="checkout-right">
          <div className="card summary">
            <h3 className="card-title">Booking Summary</h3>
            <div className="summary-row"><span>Service</span><span>{b.service_name}</span></div>
            <div className="summary-row"><span>Location</span><span>{b.branchName}</span></div>
            <div className="summary-row"><span>Date</span><span>{b.date ? new Date(b.date).toLocaleDateString() : "N/A"}</span></div>
            <div className="summary-row"><span>Time</span><span>{b.startTime} – {b.endTime}</span></div>
            <div className="summary-divider" />
            <div className="summary-row"><span>Total</span><span>{formatKES(total)}</span></div>
            <div className="summary-row"><span>Deposit (50%)</span><span>{formatKES(deposit)}</span></div>
            <div className="summary-hint"><FiLock /> Secure payment • KES</div>
          </div>
        </aside>
      </div>
    </div>
  );
}
