import React, { useMemo, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { useCart } from "../../Context/CartContext";
import { formatKES } from "../../Utils/currency";
import { FiCopy, FiCheckCircle, FiClock, FiLock, FiArrowLeft } from "react-icons/fi";
import "../Checkout/Checkout.css"; // reuse your checkout styling

const BANK_DETAILS = {
  bankName: "KCB Bank",
  accountName: "Maggie’s Pregnancy Spa",
  accountNumber: "0123456789",
  branch: "Ngong Road Branch",
};

export default function ThankYouPage() {
  const [params] = useSearchParams();
  const orderId = params.get("orderId");
  const method = params.get("method"); // 'bank' | 'mpesa'
  const { totals } = useCart();

  const [proofRef, setProofRef] = useState("");
  const [note, setNote] = useState("");
  const [sent, setSent] = useState(false);
  const [err, setErr] = useState("");

  const amount = useMemo(() => totals?.total ?? 0, [totals]);

  const copy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (e) {
        setErr(e)
    }
  };

  const submitProof = async () => {
    try {
      setErr("");
      if (!orderId) {
        setErr("Missing Order ID.");
        return;
      }
      // Minimal serverless endpoint that just updates the order with proof
      const r = await fetch("/api/orders/add-proof", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          orderId,
          proofRef: proofRef || null,
          note: note || null,
        }),
      });
      const data = await r.json();
      if (!data?.ok) throw new Error("Failed to submit proof.");
      setSent(true);
    } catch (e) {
      setErr(e, "Could not submit proof. Please try again or contact us.");
    }
  };

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <h2>Thank You</h2>
      </div>

      <div className="checkout-grid">
        <div className="checkout-left">
          <section className="card">
            <h3 className="card-title">Order received</h3>

            <div className="banner banner--info" style={{ marginTop: 0 }}>
              <FiClock />
              <div>
                <div><strong>Status:</strong> Awaiting Bank Transfer</div>
                <div>Order ID: <strong>{orderId}</strong></div>
              </div>
            </div>

            {method === "bank" && (
              <>
                <div className="bank-panel" style={{ marginTop: 12 }}>
                  <h4>Bank Details</h4>
                  <ul className="bank-list">
                    <li><strong>Bank:</strong> {BANK_DETAILS.bankName} <button className="btn-ghost" onClick={() => copy(BANK_DETAILS.bankName)}><FiCopy /> Copy</button></li>
                    <li><strong>Account Name:</strong> {BANK_DETAILS.accountName} <button className="btn-ghost" onClick={() => copy(BANK_DETAILS.accountName)}><FiCopy /> Copy</button></li>
                    <li><strong>Account Number:</strong> {BANK_DETAILS.accountNumber} <button className="btn-ghost" onClick={() => copy(BANK_DETAILS.accountNumber)}><FiCopy /> Copy</button></li>
                    <li><strong>Branch:</strong> {BANK_DETAILS.branch} <button className="btn-ghost" onClick={() => copy(BANK_DETAILS.branch)}><FiCopy /> Copy</button></li>
                    <li><strong>Amount:</strong> {formatKES(amount)}</li>
                    <li className="hint">Use your name and/or <strong>{orderId}</strong> as the reference if possible.</li>
                  </ul>
                </div>

                <section className="card" style={{ marginTop: 12 }}>
                  <h3 className="card-title">I’ve Paid</h3>
                  {sent ? (
                    <div className="banner banner--info" style={{ marginTop: 0 }}>
                      <FiCheckCircle />
                      Thanks! We’ve received your payment reference. We’ll verify and notify you once confirmed.
                    </div>
                  ) : (
                    <>
                      <div className="form-grid" style={{ gridTemplateColumns: "1fr" }}>
                        <div className="field">
                          <label htmlFor="proofRef">Bank payment reference (optional)</label>
                          <input
                            id="proofRef"
                            placeholder="e.g. ABC123XYZ"
                            value={proofRef}
                            onChange={(e) => setProofRef(e.target.value)}
                          />
                        </div>
                        <div className="field">
                          <label htmlFor="note">Note to spa (optional)</label>
                          <textarea
                            id="note"
                            rows={3}
                            placeholder="Anything we should know?"
                            value={note}
                            onChange={(e) => setNote(e.target.value)}
                          />
                        </div>
                      </div>
                      {err && <div className="banner banner--error">{err}</div>}
                      <div className="actions" style={{ justifyContent: "flex-end" }}>
                        <button className="btn-primary" onClick={submitProof}>
                          Submit
                        </button>
                      </div>
                    </>
                  )}
                </section>
              </>
            )}

            <div className="banner banner--info">
              <FiLock />
              We’ll email/SMS you once we confirm the payment. You’ll then be able to schedule your appointment.
            </div>

            <div className="actions">
              <Link className="btn-ghost" to="/services">
                <FiArrowLeft /> Continue shopping
              </Link>
              <Link className="btn-primary" to="/">
                Go to Home
              </Link>
            </div>
          </section>
        </div>

        <aside className="checkout-right">
          <div className="card summary">
            <h3 className="card-title">Summary</h3>
            <div className="summary-row">
              <span>Amount due</span>
              <span>{formatKES(amount)}</span>
            </div>
            <div className="summary-hint"><FiLock /> Keep your Order ID handy: {orderId}</div>
          </div>
        </aside>
      </div>
    </div>
  );
}
