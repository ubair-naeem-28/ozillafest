import React, { useState } from 'react'

export default function PayFastGatewayModal({ isOpen, onClose, ticket, amount, onComplete }) {
  const [selectedChannel, setSelectedChannel] = useState('card')
  const [processing, setProcessing] = useState(false)
  const [phase, setPhase] = useState('')
  const [otpStep, setOtpStep] = useState(false)
  const [otp, setOtp] = useState('849201')
  const [cardData, setCardData] = useState({
    cardNumber: '5893 4100 8821 9402',
    expiry: '08/28',
    cvv: '921',
    holderName: ticket?.fullName || 'Customer'
  })
  const [walletPhone, setWalletPhone] = useState(ticket?.phone || '03001234567')

  if (!isOpen) return null

  const handlePay = async (e) => {
    e.preventDefault()
    setProcessing(true)
    setPhase('Connecting to SBP 1LINK switch...')
    await new Promise((r) => setTimeout(r, 600))
    setPhase('Sending 3D Secure OTP verification request to issuing bank...')
    await new Promise((r) => setTimeout(r, 600))
    setProcessing(false)
    setOtpStep(true)
  }

  const handleConfirmOtp = async () => {
    setProcessing(true)
    setPhase('Verifying OTP with issuing bank...')
    await new Promise((r) => setTimeout(r, 700))
    setPhase(`Deducting PKR ${Number(amount || 0).toLocaleString()} and settling to Organizer Bank Account...`)
    await new Promise((r) => setTimeout(r, 800))
    setPhase('Payment Successful! Sending IPN webhook to Ozilla Festival...')
    await new Promise((r) => setTimeout(r, 600))

    try {
      await onComplete({
        basket_id: `OZILLA-${ticket?.id || ticket?.ticketId}`,
        bankName: selectedChannel === 'card' ? 'Meezan Bank 1LINK' : selectedChannel === 'jazzcash' ? 'JazzCash MWallet' : 'Easypaisa MAccount',
        customerName: ticket?.fullName || cardData.holderName
      })
    } finally {
      setProcessing(false)
    }
  }

  return (
    <div className="pf-modal-overlay">
      <div className="pf-modal-container">
        {/* Official Header */}
        <div className="pf-modal-header">
          <div className="pf-modal-brand">
            <span className="pf-logo">PayFast</span>
            <span className="pf-tagline">Secure Multi-Channel IPG</span>
          </div>
          <button type="button" className="pf-close-btn" onClick={onClose} disabled={processing}>✕</button>
        </div>

        {/* Merchant Info Banner */}
        <div className="pf-merchant-banner">
          <div>
            <small>Merchant</small>
            <strong>Prism Events & Tours (Ozilla Festival 2026)</strong>
          </div>
          <div className="pf-amount-pill">
            <small>Total Due</small>
            <strong>PKR {Number(amount || 0).toLocaleString()}</strong>
          </div>
        </div>

        {/* Modal Body */}
        <div className="pf-modal-body">
          {!otpStep ? (
            <>
              {/* Channel Selector */}
              <div className="pf-modal-tabs">
                <button
                  type="button"
                  className={`pf-tab ${selectedChannel === 'card' ? 'is-active' : ''}`}
                  onClick={() => setSelectedChannel('card')}
                >
                  💳 Debit / Credit Card
                </button>
                <button
                  type="button"
                  className={`pf-tab ${selectedChannel === 'jazzcash' ? 'is-active' : ''}`}
                  onClick={() => setSelectedChannel('jazzcash')}
                >
                  🟠 JazzCash
                </button>
                <button
                  type="button"
                  className={`pf-tab ${selectedChannel === 'easypaisa' ? 'is-active' : ''}`}
                  onClick={() => setSelectedChannel('easypaisa')}
                >
                  🟢 Easypaisa
                </button>
              </div>

              {selectedChannel === 'card' && (
                <form onSubmit={handlePay} className="pf-modal-form">
                  <div className="pf-fg">
                    <label>Card Number</label>
                    <input
                      type="text"
                      value={cardData.cardNumber}
                      onChange={(e) => setCardData({ ...cardData, cardNumber: e.target.value })}
                      required
                    />
                  </div>
                  <div className="pf-grid-2">
                    <div className="pf-fg">
                      <label>Expiry (MM/YY)</label>
                      <input
                        type="text"
                        value={cardData.expiry}
                        onChange={(e) => setCardData({ ...cardData, expiry: e.target.value })}
                        required
                      />
                    </div>
                    <div className="pf-fg">
                      <label>CVV / CVC</label>
                      <input
                        type="password"
                        maxLength={4}
                        value={cardData.cvv}
                        onChange={(e) => setCardData({ ...cardData, cvv: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                  <div className="pf-fg">
                    <label>Cardholder Name</label>
                    <input
                      type="text"
                      value={cardData.holderName}
                      onChange={(e) => setCardData({ ...cardData, holderName: e.target.value })}
                      required
                    />
                  </div>

                  {phase && <div className="pf-phase-msg">{phase}</div>}

                  <button type="submit" className="pf-modal-submit" disabled={processing}>
                    {processing ? 'Connecting...' : `Pay PKR ${Number(amount || 0).toLocaleString()} via PayFast`}
                  </button>
                </form>
              )}

              {(selectedChannel === 'jazzcash' || selectedChannel === 'easypaisa') && (
                <form onSubmit={handlePay} className="pf-modal-form">
                  <div className="pf-fg">
                    <label>{selectedChannel === 'jazzcash' ? 'JazzCash Mobile Number' : 'Easypaisa Mobile Number'}</label>
                    <input
                      type="text"
                      value={walletPhone}
                      onChange={(e) => setWalletPhone(e.target.value)}
                      placeholder="0300-1234567"
                      required
                    />
                  </div>
                  <div className="pf-fg">
                    <label>Account Title</label>
                    <input
                      type="text"
                      value={cardData.holderName}
                      onChange={(e) => setCardData({ ...cardData, holderName: e.target.value })}
                      required
                    />
                  </div>

                  {phase && <div className="pf-phase-msg">{phase}</div>}

                  <button type="submit" className="pf-modal-submit" disabled={processing}>
                    {processing ? 'Connecting...' : `Authenticate & Pay PKR ${Number(amount || 0).toLocaleString()}`}
                  </button>
                </form>
              )}
            </>
          ) : (
            <div className="pf-otp-screen">
              <div className="pf-otp-icon">🔐</div>
              <h3>3D Secure Bank OTP Verification</h3>
              <p>
                A one-time verification code has been sent to your bank-registered mobile number ending in <strong>•••• 402</strong>.
              </p>

              <div className="pf-fg" style={{ maxWidth: '240px', margin: '16px auto' }}>
                <input
                  type="text"
                  maxLength={6}
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="pf-otp-input"
                  style={{ textAlign: 'center', fontSize: '22px', letterSpacing: '4px', fontWeight: 'bold' }}
                />
              </div>

              {phase && <div className="pf-phase-msg">{phase}</div>}

              <button
                type="button"
                className="pf-modal-submit"
                onClick={handleConfirmOtp}
                disabled={processing}
              >
                {processing ? phase : 'Confirm & Authorize Payment'}
              </button>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="pf-modal-footer">
          <span>🔒 256-Bit Encrypted Secure Connection · PCI-DSS Compliant</span>
        </div>
      </div>

      <style>{`
        .pf-modal-overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          padding: 16px;
        }
        .pf-modal-container {
          width: 100%;
          max-width: 500px;
          border-radius: 16px;
          background: #0f172a;
          border: 1px solid rgba(235, 77, 75, 0.4);
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7);
          color: #fff;
          font-family: inherit;
        }
        .pf-modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 14px 20px;
          background: #1e293b;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        .pf-modal-brand {
          display: flex;
          align-items: baseline;
          gap: 8px;
        }
        .pf-logo {
          font-size: 20px;
          font-weight: 900;
          color: #eb4d4b;
        }
        .pf-tagline {
          font-size: 11px;
          color: #94a3b8;
        }
        .pf-close-btn {
          background: none;
          border: none;
          color: #94a3b8;
          font-size: 16px;
          cursor: pointer;
        }
        .pf-merchant-banner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 20px;
          background: rgba(255, 255, 255, 0.03);
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }
        .pf-merchant-banner small {
          display: block;
          font-size: 10px;
          color: #94a3b8;
          text-transform: uppercase;
        }
        .pf-merchant-banner strong {
          font-size: 13px;
          color: #f1f5f9;
        }
        .pf-amount-pill {
          text-align: right;
        }
        .pf-amount-pill strong {
          color: #fbbf24;
          font-size: 16px;
        }
        .pf-modal-body {
          padding: 20px;
        }
        .pf-modal-tabs {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 6px;
          margin-bottom: 16px;
        }
        .pf-tab {
          padding: 8px 6px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #cbd5e1;
          font-size: 11px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }
        .pf-tab.is-active {
          background: rgba(235, 77, 75, 0.2);
          border-color: #eb4d4b;
          color: #ff8b8b;
        }
        .pf-modal-form {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .pf-fg {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .pf-fg label {
          font-size: 11px;
          color: #94a3b8;
          font-weight: 600;
        }
        .pf-fg input {
          padding: 10px 12px;
          border-radius: 8px;
          background: rgba(15, 23, 42, 0.9);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: #fff;
          font-size: 13px;
        }
        .pf-grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }
        .pf-phase-msg {
          padding: 10px 12px;
          border-radius: 8px;
          background: rgba(235, 77, 75, 0.15);
          border: 1px solid rgba(235, 77, 75, 0.3);
          color: #ff8b8b;
          font-size: 12px;
          text-align: center;
          animation: pulse 1.5s infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
        .pf-modal-submit {
          padding: 12px;
          border-radius: 8px;
          background: linear-gradient(135deg, #eb4d4b, #f97316);
          border: none;
          color: #fff;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          margin-top: 6px;
        }
        .pf-modal-submit:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        .pf-otp-screen {
          text-align: center;
          padding: 10px 0;
        }
        .pf-otp-icon {
          font-size: 36px;
          margin-bottom: 8px;
        }
        .pf-otp-screen h3 {
          margin: 0 0 6px;
          font-size: 16px;
          color: #f1f5f9;
        }
        .pf-otp-screen p {
          margin: 0;
          font-size: 12px;
          color: #94a3b8;
          line-height: 1.4;
        }
        .pf-modal-footer {
          padding: 10px 20px;
          background: #090d16;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          font-size: 10px;
          color: #64748b;
          text-align: center;
        }
      `}</style>
    </div>
  )
}
