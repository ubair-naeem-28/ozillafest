import React, { useState } from 'react'

export default function PayFastGatewayCard({ amount, onProceed, loading, onBack }) {
  const [redirecting, setRedirecting] = useState(false)

  const handlePayFastClick = async () => {
    setRedirecting(true)
    try {
      await onProceed()
    } finally {
      setRedirecting(false)
    }
  }

  return (
    <div className="payfast-gateway-card">
      <div className="payfast-header-banner">
        <div className="payfast-logo-group">
          <span className="pf-brand-name">PayFast</span>
          <span className="pf-badge-tag">Official Payment Gateway</span>
        </div>
        <span className="pf-security-seal">🔒 SBP Regulated · 256-Bit SSL</span>
      </div>

      <div className="payfast-body">
        <p className="payfast-instruction">
          You will be redirected to the secure <strong>PayFast Payment Portal</strong> to complete your payment.
        </p>

        <div className="payfast-channels-grid">
          <div className="pf-channel-item">
            <span className="pf-icon">💳</span>
            <div>
              <strong>Cards</strong>
              <small>Visa, Master, PayPak, UnionPay</small>
            </div>
          </div>

          <div className="pf-channel-item">
            <span className="pf-icon">📱</span>
            <div>
              <strong>Wallets</strong>
              <small>JazzCash & Easypaisa</small>
            </div>
          </div>

          <div className="pf-channel-item">
            <span className="pf-icon">🏦</span>
            <div>
              <strong>Bank Accounts</strong>
              <small>1LINK & Direct Internet Banking</small>
            </div>
          </div>
        </div>

        <div className="payfast-summary-box">
          <div className="pf-summary-row">
            <span>Total Payable Amount:</span>
            <strong>PKR {Number(amount || 0).toLocaleString()}</strong>
          </div>
          <div className="pf-summary-row pf-small-row">
            <span>Processing / Gateway Fee:</span>
            <span className="pf-free-tag">Free (PKR 0)</span>
          </div>
        </div>

        <div className="payfast-flow-steps">
          <div className="pf-step"><span className="pf-step-num">1</span><span>Redirect to PayFast</span></div>
          <span className="pf-arrow">→</span>
          <div className="pf-step"><span className="pf-step-num">2</span><span>Enter Card / OTP / Wallet</span></div>
          <span className="pf-arrow">→</span>
          <div className="pf-step"><span className="pf-step-num">3</span><span>Instant Return & QR Pass</span></div>
        </div>

        <div className="payfast-actions">
          {onBack && (
            <button
              type="button"
              className="pf-back-btn"
              onClick={onBack}
              disabled={loading || redirecting}
            >
              ← Back
            </button>
          )}
          <button
            type="button"
            className="pf-proceed-btn"
            onClick={handlePayFastClick}
            disabled={loading || redirecting}
          >
            {redirecting || loading ? (
              <span className="pf-btn-loading">
                <span className="pf-spinner" /> Connecting to PayFast Gateway...
              </span>
            ) : (
              `Proceed to PayFast (PKR ${Number(amount || 0).toLocaleString()}) →`
            )}
          </button>
        </div>
      </div>

      <style>{`
        .payfast-gateway-card {
          border-radius: 14px;
          background: linear-gradient(145deg, rgba(30, 41, 59, 0.7), rgba(15, 23, 42, 0.85));
          border: 1px solid rgba(235, 77, 75, 0.3);
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }
        .payfast-header-banner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 20px;
          background: linear-gradient(135deg, rgba(235, 77, 75, 0.15), rgba(249, 115, 22, 0.1));
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        .payfast-logo-group {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .pf-brand-name {
          font-size: 20px;
          font-weight: 900;
          letter-spacing: -0.5px;
          background: linear-gradient(135deg, #ff6b6b, #f97316);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .pf-badge-tag {
          font-size: 11px;
          font-weight: 700;
          padding: 3px 8px;
          border-radius: 6px;
          background: rgba(235, 77, 75, 0.2);
          color: #ff8b8b;
          border: 1px solid rgba(235, 77, 75, 0.4);
        }
        .pf-security-seal {
          font-size: 12px;
          color: #cbd5e1;
          font-weight: 500;
        }
        .payfast-body {
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .payfast-instruction {
          margin: 0;
          font-size: 14px;
          color: #e2e8f0;
          line-height: 1.5;
        }
        .payfast-instruction strong {
          color: #ff8b8b;
        }
        .payfast-channels-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }
        @media (max-width: 640px) {
          .payfast-channels-grid {
            grid-template-columns: 1fr;
          }
        }
        .pf-channel-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 14px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }
        .pf-icon {
          font-size: 20px;
        }
        .pf-channel-item strong {
          display: block;
          font-size: 13px;
          color: #ffffff;
        }
        .pf-channel-item small {
          display: block;
          font-size: 11px;
          color: #94a3b8;
        }
        .payfast-summary-box {
          padding: 14px 18px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .pf-summary-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 14px;
          color: #cbd5e1;
        }
        .pf-summary-row strong {
          font-size: 18px;
          color: #fbbf24;
        }
        .pf-small-row {
          font-size: 12px;
          color: #94a3b8;
        }
        .pf-free-tag {
          color: #10b981;
          font-weight: 600;
        }
        .payfast-flow-steps {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 14px;
          border-radius: 8px;
          background: rgba(235, 77, 75, 0.05);
          border: 1px dashed rgba(235, 77, 75, 0.25);
          font-size: 12px;
          color: #cbd5e1;
        }
        .pf-step {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .pf-step-num {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #eb4d4b;
          color: #fff;
          font-size: 10px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .pf-arrow {
          color: #94a3b8;
          font-weight: bold;
        }
        .payfast-actions {
          display: flex;
          gap: 12px;
          margin-top: 6px;
        }
        .pf-back-btn {
          padding: 12px 18px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #cbd5e1;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
        }
        .pf-proceed-btn {
          flex: 1;
          padding: 14px 20px;
          border-radius: 10px;
          background: linear-gradient(135deg, #eb4d4b, #f97316);
          border: none;
          color: #ffffff;
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
          box-shadow: 0 4px 15px rgba(235, 77, 75, 0.4);
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .pf-proceed-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(235, 77, 75, 0.5);
        }
        .pf-btn-loading {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }
        .pf-spinner {
          width: 16px;
          height: 16px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-top-color: #ffffff;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}
