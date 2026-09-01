import React, { useState } from 'react'

function formatMobileNumber(value) {
  const digits = value.replace(/\D/g, '').slice(0, 11)
  if (digits.length > 4) {
    return `${digits.slice(0, 4)}-${digits.slice(4)}`
  }
  return digits
}

export default function JazzCashPaymentForm({ amount, onSubmit, loading, onBack }) {
  const [formData, setFormData] = useState({
    mobileNumber: '',
    accountTitle: ''
  })
  const [errors, setErrors] = useState({})
  const [processingPhase, setProcessingPhase] = useState('')

  const handleMobileChange = (e) => {
    const formatted = formatMobileNumber(e.target.value)
    setFormData((prev) => ({ ...prev, mobileNumber: formatted }))
    if (errors.mobileNumber) setErrors((prev) => ({ ...prev, mobileNumber: '' }))
  }

  const handleNameChange = (e) => {
    setFormData((prev) => ({ ...prev, accountTitle: e.target.value }))
    if (errors.accountTitle) setErrors((prev) => ({ ...prev, accountTitle: '' }))
  }

  const validate = () => {
    const newErrors = {}
    const cleanMobile = formData.mobileNumber.replace(/\D/g, '')

    if (!cleanMobile || cleanMobile.length < 11 || !cleanMobile.startsWith('03')) {
      newErrors.mobileNumber = 'Please enter a valid 11-digit JazzCash number (e.g., 0300-1234567)'
    }

    if (!formData.accountTitle.trim()) {
      newErrors.accountTitle = 'Please enter the title/name registered with this JazzCash account'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return

    setProcessingPhase('Connecting to JazzCash Secure Gateway...')
    await new Promise((r) => setTimeout(r, 450))
    setProcessingPhase('Validating JazzCash wallet balance & credentials...')
    await new Promise((r) => setTimeout(r, 450))
    setProcessingPhase(`Authorizing deduction of PKR ${amount.toLocaleString()}...`)

    try {
      await onSubmit({
        mobileNumber: formData.mobileNumber.replace(/\D/g, ''),
        accountTitle: formData.accountTitle.trim()
      })
    } finally {
      setProcessingPhase('')
    }
  }

  return (
    <div className="jazzcash-payment-container">
      <div className="jazzcash-header-badge">
        <div className="jc-logo-circle">JC</div>
        <div>
          <h4>JazzCash Direct Wallet</h4>
          <span>Automatic instant deduction from your mobile wallet</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="jazzcash-payment-form">
        <div className="jc-field-group">
          <label className="jc-field-label">
            <span className="required-star">*</span> JazzCash Mobile Account Number
          </label>
          <input
            type="tel"
            inputMode="numeric"
            placeholder="0300-1234567"
            value={formData.mobileNumber}
            onChange={handleMobileChange}
            className={`jc-input ${errors.mobileNumber ? 'has-error' : ''}`}
            maxLength={12}
            disabled={loading}
          />
          {errors.mobileNumber && <span className="jc-field-error">{errors.mobileNumber}</span>}
        </div>

        <div className="jc-field-group">
          <label className="jc-field-label">
            <span className="required-star">*</span> Account Title / Registered Name
          </label>
          <input
            type="text"
            placeholder="e.g. HAMZA ALI"
            value={formData.accountTitle}
            onChange={handleNameChange}
            className={`jc-input ${errors.accountTitle ? 'has-error' : ''}`}
            disabled={loading}
          />
          {errors.accountTitle && <span className="jc-field-error">{errors.accountTitle}</span>}
        </div>

        {processingPhase && (
          <div className="jc-processing-status">
            <span className="jc-spinner" />
            <span>{processingPhase}</span>
          </div>
        )}

        <div className="jc-actions-row">
          {onBack && (
            <button type="button" onClick={onBack} disabled={loading} className="ticket-secondary-button">
              Back
            </button>
          )}

          <button type="submit" disabled={loading} className="jc-pay-now-btn">
            {loading ? (
              <span className="btn-loading-content">
                <span className="btn-spinner" /> Processing JazzCash Payment...
              </span>
            ) : (
              amount ? `Pay with JazzCash • PKR ${amount.toLocaleString()}` : 'Pay with JazzCash'
            )}
          </button>
        </div>

        <div className="jc-security-footer">
          <span>🔒 256-Bit SSL Encrypted JazzCash API Integration</span>
          <span>⚡ Instant Digital QR Ticket Generated</span>
        </div>
      </form>

      <style>{`
        .jazzcash-payment-container {
          background: rgba(27, 17, 11, 0.72);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 22px;
          padding: clamp(1.4rem, 3vw, 2.2rem);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.06), 0 18px 45px rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(20px);
          width: 100%;
          color: #ffffff;
        }
        .jazzcash-header-badge {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.6rem;
          padding-bottom: 1.2rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }
        .jc-logo-circle {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: #E30613;
          color: #fff;
          font-weight: 900;
          font-size: 1.1rem;
          display: grid;
          place-items: center;
          flex-shrink: 0;
          box-shadow: 0 4px 15px rgba(227, 6, 19, 0.4);
        }
        .jazzcash-header-badge h4 {
          font-family: 'Outfit', sans-serif;
          font-size: 1.2rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 0.2rem;
        }
        .jazzcash-header-badge span {
          font-size: 0.82rem;
          color: rgba(255, 255, 255, 0.65);
        }
        .jazzcash-payment-form {
          display: flex;
          flex-direction: column;
          gap: 1.3rem;
        }
        .jc-field-group {
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }
        .jc-field-label {
          font-size: 0.88rem;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.88);
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }
        .required-star { color: #E30613; font-weight: 700; }
        .jc-input {
          width: 100%;
          min-height: 52px;
          padding: 0 1.1rem;
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 14px;
          font-size: 0.96rem;
          color: #ffffff;
          background: rgba(0, 0, 0, 0.6);
          outline: none;
          font-family: inherit;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .jc-input:focus {
          border-color: #E30613;
          box-shadow: 0 0 0 3px rgba(227, 6, 19, 0.25);
        }
        .jc-input.has-error {
          border-color: #ef4444;
          background: rgba(239, 68, 68, 0.1);
        }
        .jc-field-error { font-size: 0.8rem; color: #fca5a5; font-weight: 600; }
        .jc-field-hint { font-size: 0.78rem; color: rgba(255, 255, 255, 0.5); }
        .jc-processing-status {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.85rem 1.2rem;
          border-radius: 12px;
          background: rgba(227, 6, 19, 0.15);
          border: 1px solid rgba(227, 6, 19, 0.35);
          color: #ff6b6b;
          font-weight: 700;
          font-size: 0.9rem;
          animation: pulse 1.5s infinite;
        }
        .jc-spinner {
          width: 16px;
          height: 16px;
          border: 2px solid rgba(227, 6, 19, 0.3);
          border-top-color: #E30613;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
        }
        .jc-actions-row {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-top: 0.8rem;
        }
        .jc-pay-now-btn {
          flex: 1;
          min-height: 54px;
          background: linear-gradient(120deg, #E30613, #b8000b);
          border: none;
          border-radius: 16px;
          color: #ffffff;
          font-size: 1.05rem;
          font-weight: 800;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 35px -8px rgba(227, 6, 19, 0.55);
        }
        .jc-pay-now-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 16px 45px -6px rgba(227, 6, 19, 0.75);
        }
        .jc-pay-now-btn:disabled { opacity: 0.65; cursor: not-allowed; }
        .jc-security-footer {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 0.6rem;
          margin-top: 0.8rem;
          padding-top: 1rem;
          border-top: 1px dashed rgba(255, 255, 255, 0.1);
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.55);
          font-weight: 600;
        }
      `}</style>
    </div>
  )
}
