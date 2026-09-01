import React from 'react'

export default function PaymentMethodSelector({ activeMethod, onSelectMethod }) {
  const methods = [
    {
      id: 'payfast',
      title: 'PayFast Hosted Gateway',
      subtitle: 'Cards, Wallets, 1LINK Bank Accounts',
      badge: 'Recommended',
      icon: (
        <div style={{ width: 24, height: 24, borderRadius: '6px', background: 'linear-gradient(135deg, #eb4d4b, #f97316)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '900', fontSize: '11px', color: '#fff' }}>
          PF
        </div>
      ),
      color: '#eb4d4b'
    },
    {
      id: 'card',
      title: 'Debit / Credit Card',
      subtitle: 'Visa, Mastercard, UnionPay, PayPak',
      badge: 'Auto-Deduct',
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
          <line x1="1" y1="10" x2="23" y2="10" />
        </svg>
      ),
      color: '#ff5a1f'
    },
    {
      id: 'jazzcash',
      title: 'JazzCash',
      subtitle: 'Mobile Wallet / Direct Pay',
      badge: 'Zero Fee',
      icon: (
        <div style={{ width: 22, height: 22, borderRadius: '50%', background: '#E30613', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '900', fontSize: '11px', color: '#fff', letterSpacing: '-0.5px' }}>
          JC
        </div>
      ),
      color: '#E30613'
    },
    {
      id: 'easypaisa',
      title: 'Easypaisa',
      subtitle: 'Mobile Account / Push Approval',
      badge: 'Instant Pass',
      icon: (
        <div style={{ width: 22, height: 22, borderRadius: '50%', background: '#00A651', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '900', fontSize: '11px', color: '#fff', letterSpacing: '-0.5px' }}>
          EP
        </div>
      ),
      color: '#00A651'
    }
  ]

  return (
    <div className="payment-method-selector-container">
      <div className="payment-method-tabs">
        {methods.map((method) => {
          const isActive = activeMethod === method.id
          return (
            <button
              key={method.id}
              type="button"
              className={`payment-method-tab ${isActive ? 'is-active' : ''}`}
              onClick={() => onSelectMethod(method.id)}
            >
              <div className="payment-tab-top">
                <div className="payment-tab-icon">{method.icon}</div>
                <span className="payment-tab-badge">{method.badge}</span>
              </div>
              <div className="payment-tab-text">
                <div className="payment-tab-title">
                  <strong>{method.title}</strong>
                  {isActive && <span className="active-dot" />}
                </div>
                <small>{method.subtitle}</small>
              </div>
            </button>
          )
        })}
      </div>

      <style>{`
        .payment-method-selector-container {
          margin-bottom: 20px;
        }
        .payment-method-tabs {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }
        @media (max-width: 768px) {
          .payment-method-tabs {
            grid-template-columns: 1fr;
          }
        }
        .payment-method-tab {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 10px;
          padding: 16px 18px;
          border-radius: 16px;
          background: rgba(0, 0, 0, 0.45);
          border: 1.5px solid rgba(255, 255, 255, 0.08);
          color: #ffffff;
          cursor: pointer;
          transition: all 0.2s ease;
          text-align: left;
          position: relative;
          backdrop-filter: blur(10px);
        }
        .payment-method-tab:hover {
          border-color: rgba(255, 189, 89, 0.35);
          transform: translateY(-2px);
        }
        .payment-method-tab.is-active {
          border-color: #ff5a1f !important;
          background: rgba(255, 90, 31, 0.15) !important;
          box-shadow: 0 0 25px rgba(255, 90, 31, 0.2);
        }
        .payment-tab-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }
        .payment-tab-icon {
          color: #ffbd59;
          display: flex;
          align-items: center;
        }
        .payment-tab-badge {
          font-size: 0.7rem;
          font-weight: 800;
          color: #ffbd59;
          background: rgba(255, 189, 89, 0.15);
          padding: 2px 8px;
          border-radius: 999px;
          border: 1px solid rgba(255, 189, 89, 0.3);
        }
        .payment-tab-text {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .payment-tab-title {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .payment-tab-title strong {
          font-size: 0.95rem;
          font-weight: 800;
          color: #ffffff;
        }
        .active-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #ff5a1f;
          box-shadow: 0 0 8px #ff5a1f;
        }
        .payment-tab-text small {
          font-size: 0.78rem;
          color: rgba(255, 255, 255, 0.65);
        }
      `}</style>
    </div>
  )
}
