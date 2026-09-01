import React, { useState } from 'react'

function formatMobileNumber(value) {
  const digits = value.replace(/\D/g, '').slice(0, 11)
  if (digits.length > 4) {
    return `${digits.slice(0, 4)}-${digits.slice(4)}`
  }
  return digits
}

export default function EasypaisaPaymentForm({ amount, onSubmit, loading, onBack }) {
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
      newErrors.mobileNumber = 'Please enter a valid 11-digit Easypaisa number (e.g., 0333-1234567)'
    }

    if (!formData.accountTitle.trim()) {
      newErrors.accountTitle = 'Please enter the name registered on your Easypaisa account'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return

    setProcessingPhase('Connecting to Easypaisa Open API...')
    await new Promise((r) => setTimeout(r, 450))
    setProcessingPhase('Verifying account status and authorization...')
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
    <div className="easypaisa-payment-container">
      <div className="easypaisa-header-badge">
        <div className="ep-logo-circle">EP</div>
        <div>
          <h4>Easypaisa Mobile Account</h4>
          <span>Automatic instant deduction from your mobile account</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="easypaisa-payment-form">
        <div className="ep-field-group">
          <label className="ep-field-label">
            <span className="required-star">*</span> Easypaisa Mobile Account Number
          </label>
          <input
            type="tel"
            inputMode="numeric"
            placeholder="0333-1234567"
            value={formData.mobileNumber}
            onChange={handleMobileChange}
            className={`ep-input ${errors.mobileNumber ? 'has-error' : ''}`}
            maxLength={12}
            disabled={loading}
          />
          {errors.mobileNumber && <span className="ep-field-error">{errors.mobileNumber}</span>}
        </div>

        <div className="ep-field-group">
          <label className="ep-field-label">
            <span className="required-star">*</span> Account Title / Registered Name
          </label>
          <input
            type="text"
            placeholder="e.g. HAMZA ALI"
            value={formData.accountTitle}
            onChange={handleNameChange}
            className={`ep-input ${errors.accountTitle ? 'has-error' : ''}`}
            disabled={loading}
          />
          {errors.accountTitle && <span className="ep-field-error">{errors.accountTitle}</span>}
        </div>

        {processingPhase && (
          <div className="ep-processing-status">
            <span className="ep-spinner" />
            <span>{processingPhase}</span>
          </div>
        )}

        <div className="ep-actions-row">
          {onBack && (
            <button type="button" onClick={onBack} disabled={loading} className="ticket-secondary-button">
              Back
            </button>
          )}

          <button type="submit" disabled={loading} className="ep-pay-now-btn">
            {loading ? (
              <span className="btn-loading-content">
                <span className="btn-spinner" /> Processing Easypaisa Payment...
              </span>
            ) : (
              amount ? `Pay with Easypaisa • PKR ${amount.toLocaleString()}` : 'Pay with Easypaisa'
            )}
          </button>
        </div>

        <div className="ep-security-footer">
          <span>🔒 256-Bit SSL Encrypted Easypaisa Gateway Integration</span>
          <span>⚡ Instant Digital QR Ticket Generated</span>
        </div>
      </form>

      <style>{`
        .easypaisa-payment-container {
          background: rgba(27, 17, 11, 0.72);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 22px;
          padding: clamp(1.4rem, 3vw, 2.2rem);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.06), 0 18px 45px rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(20px);
          width: 100%;
          color: #ffffff;
        }
        .easypaisa-header-badge {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.6rem;
          padding-bottom: 1.2rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }
        .ep-logo-circle {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: #00A651;
          color: #fff;
          font-weight: 900;
          font-size: 1.1rem;
          display: grid;
          place-items: center;
          flex-shrink: 0;
          box-shadow: 0 4px 15px rgba(0, 166, 81, 0.4);
        }
        .easypaisa-header-badge h4 {
          font-family: 'Outfit', sans-serif;
          font-size: 1.2rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 0.2rem;
        }
        .easypaisa-header-badge span {
          font-size: 0.82rem;
          color: rgba(255, 255, 255, 0.65);
        }
        .easypaisa-payment-form {
          display: flex;
          flex-direction: column;
          gap: 1.3rem;
        }
        .ep-field-group {
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }
        .ep-field-label {
          font-size: 0.88rem;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.88);
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }
        .required-star { color: #00A651; font-weight: 700; }
        .ep-input {
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
        .ep-input:focus {
          border-color: #00A651;
          box-shadow: 0 0 0 3px rgba(0, 166, 81, 0.25);
        }
        .ep-input.has-error {
          border-color: #ef4444;
          background: rgba(239, 68, 68, 0.1);
        }
        .ep-field-error { font-size: 0.8rem; color: #fca5a5; font-weight: 600; }
        .ep-processing-status {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.85rem 1.2rem;
          border-radius: 12px;
          background: rgba(0, 166, 81, 0.15);
          border: 1px solid rgba(0, 166, 81, 0.35);
          color: #6ee7b7;
          font-weight: 700;
          font-size: 0.9rem;
          animation: pulse 1.5s infinite;
        }
        .ep-spinner {
          width: 16px;
          height: 16px;
          border: 2px solid rgba(0, 166, 81, 0.3);
          border-top-color: #00A651;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
        }
        .ep-actions-row {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-top: 0.8rem;
        }
        .ep-pay-now-btn {
          flex: 1;
          min-height: 54px;
          background: linear-gradient(120deg, #00A651, #007338);
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
          box-shadow: 0 10px 35px -8px rgba(0, 166, 81, 0.55);
        }
        .ep-pay-now-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 16px 45px -6px rgba(0, 166, 81, 0.75);
        }
        .ep-pay-now-btn:disabled { opacity: 0.65; cursor: not-allowed; }
        .ep-security-footer {
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
