import React, { useState } from 'react'

function formatCardNumber(value) {
  const digits = value.replace(/\D/g, '').slice(0, 16)
  const groups = digits.match(/.{1,4}/g)
  return groups ? groups.join(' ') : digits
}

function formatExpiry(value) {
  const digits = value.replace(/\D/g, '').slice(0, 4)
  if (digits.length >= 3) {
    return `${digits.slice(0, 2)}/${digits.slice(2)}`
  }
  return digits
}

function detectCardType(number) {
  const clean = number.replace(/\D/g, '')
  if (/^4/.test(clean)) return 'visa'
  if (/^(5[1-5]|2[2-7])/.test(clean)) return 'mastercard'
  if (/^(62|81)/.test(clean)) return 'unionpay'
  return null
}

function CardPaymentForm({ amount, onSubmit, loading, onBack }) {
  const [formData, setFormData] = useState({
    cardNumber: '',
    cardholderName: '',
    expiryDate: '',
    cvv: '',
    saveCard: true
  })
  const [errors, setErrors] = useState({})
  const [showCvvInfo, setShowCvvInfo] = useState(false)
  const [processingPhase, setProcessingPhase] = useState('')

  const cardType = detectCardType(formData.cardNumber)

  const handleCardNumberChange = (e) => {
    const formatted = formatCardNumber(e.target.value)
    setFormData((prev) => ({ ...prev, cardNumber: formatted }))
    if (errors.cardNumber) setErrors((prev) => ({ ...prev, cardNumber: '' }))
  }

  const handleExpiryChange = (e) => {
    const formatted = formatExpiry(e.target.value)
    setFormData((prev) => ({ ...prev, expiryDate: formatted }))
    if (errors.expiryDate) setErrors((prev) => ({ ...prev, expiryDate: '' }))
  }

  const handleCvvChange = (e) => {
    const digits = e.target.value.replace(/\D/g, '').slice(0, 4)
    setFormData((prev) => ({ ...prev, cvv: digits }))
    if (errors.cvv) setErrors((prev) => ({ ...prev, cvv: '' }))
  }

  const handleNameChange = (e) => {
    setFormData((prev) => ({ ...prev, cardholderName: e.target.value }))
    if (errors.cardholderName) setErrors((prev) => ({ ...prev, cardholderName: '' }))
  }

  const validate = () => {
    const newErrors = {}
    const cleanNumber = formData.cardNumber.replace(/\s/g, '')

    if (!cleanNumber || cleanNumber.length < 15) {
      newErrors.cardNumber = 'Please enter a valid 16-digit card number'
    }

    if (!formData.cardholderName.trim()) {
      newErrors.cardholderName = 'Please enter name as shown on card'
    }

    if (!formData.expiryDate || formData.expiryDate.length < 5) {
      newErrors.expiryDate = 'Enter MM/YY'
    } else {
      const [month, year] = formData.expiryDate.split('/').map(Number)
      if (month < 1 || month > 12) {
        newErrors.expiryDate = 'Invalid month (01-12)'
      } else {
        const now = new Date()
        const currentYear = Number(String(now.getFullYear()).slice(-2))
        const currentMonth = now.getMonth() + 1
        if (year < currentYear || (year === currentYear && month < currentMonth)) {
          newErrors.expiryDate = 'Card has expired'
        }
      }
    }

    if (!formData.cvv || formData.cvv.length < 3) {
      newErrors.cvv = 'Enter 3 or 4 digits'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return

    setProcessingPhase('Validating card details...')
    await new Promise((r) => setTimeout(r, 400))
    setProcessingPhase('Deducting payment from card...')

    try {
      await onSubmit({
        cardNumber: formData.cardNumber.replace(/\s/g, ''),
        cardLast4: formData.cardNumber.replace(/\s/g, '').slice(-4),
        cardholderName: formData.cardholderName.trim(),
        expiryDate: formData.expiryDate,
        cvv: formData.cvv,
        saveCard: formData.saveCard,
        cardType: cardType || 'card'
      })
    } finally {
      setProcessingPhase('')
    }
  }

  return (
    <div className="card-payment-container">
      {/* Logos Row matching image */}
      <div className="card-brands-row">
        {/* Mastercard Logo */}
        <div className={`card-brand-logo mastercard ${cardType === 'mastercard' ? 'is-active' : ''}`} title="Mastercard">
          <svg viewBox="0 0 38 24" width="48" height="30" aria-label="Mastercard">
            <circle cx="14" cy="12" r="10" fill="#EB001B" />
            <circle cx="24" cy="12" r="10" fill="#F79E1B" fillOpacity="0.88" />
          </svg>
        </div>

        {/* Visa Logo */}
        <div className={`card-brand-logo visa ${cardType === 'visa' ? 'is-active' : ''}`} title="VISA">
          <svg viewBox="0 0 50 20" width="58" height="24" aria-label="VISA">
            <text x="2" y="16" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontStyle="italic" fontSize="18" fill="#1A1F71" letterSpacing="1">
              VISA
            </text>
          </svg>
        </div>

        {/* UnionPay Logo */}
        <div className={`card-brand-logo unionpay ${cardType === 'unionpay' ? 'is-active' : ''}`} title="UnionPay">
          <div className="unionpay-badge">
            <span className="up-red" />
            <span className="up-blue" />
            <span className="up-green" />
            <span className="up-text">UnionPay<br />银联</span>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="card-payment-form">
        {/* Card Number */}
        <div className="card-field-group">
          <label className="card-field-label">
            <span className="required-star">*</span> Card number
          </label>
          <div className="card-input-wrapper">
            <input
              type="text"
              inputMode="numeric"
              autoComplete="cc-number"
              placeholder="Card number"
              value={formData.cardNumber}
              onChange={handleCardNumberChange}
              className={`card-input ${errors.cardNumber ? 'has-error' : ''}`}
              maxLength={19}
              disabled={loading}
            />
            {cardType && (
              <span className="card-detected-badge">{cardType.toUpperCase()}</span>
            )}
          </div>
          {errors.cardNumber && <span className="card-field-error">{errors.cardNumber}</span>}
        </div>

        {/* Name on card */}
        <div className="card-field-group">
          <label className="card-field-label">
            <span className="required-star">*</span> Name on card
          </label>
          <input
            type="text"
            autoComplete="cc-name"
            placeholder="Name on card"
            value={formData.cardholderName}
            onChange={handleNameChange}
            className={`card-input ${errors.cardholderName ? 'has-error' : ''}`}
            disabled={loading}
          />
          {errors.cardholderName && <span className="card-field-error">{errors.cardholderName}</span>}
        </div>

        {/* Expiry Date & CVV Grid */}
        <div className="card-row-two-col">
          <div className="card-field-group">
            <label className="card-field-label">
              <span className="required-star">*</span> Expiry date
            </label>
            <input
              type="text"
              inputMode="numeric"
              autoComplete="cc-exp"
              placeholder="MM/YY"
              value={formData.expiryDate}
              onChange={handleExpiryChange}
              className={`card-input ${errors.expiryDate ? 'has-error' : ''}`}
              maxLength={5}
              disabled={loading}
            />
            {errors.expiryDate && <span className="card-field-error">{errors.expiryDate}</span>}
          </div>

          <div className="card-field-group">
            <label className="card-field-label">
              <span className="required-star">*</span> CVV
              <button
                type="button"
                className="cvv-info-btn"
                onClick={() => setShowCvvInfo(!showCvvInfo)}
                onMouseEnter={() => setShowCvvInfo(true)}
                onMouseLeave={() => setShowCvvInfo(false)}
                aria-label="CVV information"
              >
                ⓘ
              </button>
              {showCvvInfo && (
                <div className="cvv-tooltip">
                  3 or 4 digit security code located on the back of your card.
                </div>
              )}
            </label>
            <input
              type="password"
              inputMode="numeric"
              autoComplete="cc-csc"
              placeholder="CVV"
              value={formData.cvv}
              onChange={handleCvvChange}
              className={`card-input ${errors.cvv ? 'has-error' : ''}`}
              maxLength={4}
              disabled={loading}
            />
            {errors.cvv && <span className="card-field-error">{errors.cvv}</span>}
          </div>
        </div>

        {/* Save Card Checkbox */}
        <div className="save-card-wrapper">
          <label className="save-card-checkbox-label">
            <input
              type="checkbox"
              checked={formData.saveCard}
              onChange={(e) => setFormData((prev) => ({ ...prev, saveCard: e.target.checked }))}
              className="save-card-checkbox"
              disabled={loading}
            />
            <span className="save-card-title">Save Card</span>
          </label>
          <p className="save-card-subtext">
            We will save this card for your convenience. If required, you can remove the card in the "Payment Options" section in the "Account" menu.
          </p>
        </div>

        {/* Processing Indicator */}
        {processingPhase && (
          <div className="card-processing-status">
            <span className="card-spinner" />
            <span>{processingPhase}</span>
          </div>
        )}

        {/* Action Buttons */}
        <div className="card-actions-row">
          {onBack && (
            <button
              type="button"
              onClick={onBack}
              disabled={loading}
              className="ticket-secondary-button"
            >
              Back
            </button>
          )}

          <button
            type="submit"
            disabled={loading}
            className="pay-now-btn"
          >
            {loading ? (
              <span className="btn-loading-content">
                <span className="btn-spinner" /> Deducting Payment...
              </span>
            ) : (
              amount ? `Pay Now • PKR ${amount.toLocaleString()}` : 'Pay Now'
            )}
          </button>
        </div>

        {/* Trust Badges */}
        <div className="card-security-footer">
          <span>🔒 256-Bit SSL Encrypted & PCI Compliant</span>
          <span>⚡ Automatic Payment Deduction & Instant QR Ticket</span>
        </div>
      </form>

      <style>{`
        .card-payment-container {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 20px;
          padding: clamp(1.2rem, 3vw, 2rem);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
          width: 100%;
        }

        .card-brands-row {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          margin-bottom: 1.8rem;
          padding-bottom: 1.2rem;
          border-bottom: 1px solid #edf2f7;
        }

        .card-brand-logo {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.35rem 0.6rem;
          border-radius: 8px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          transition: all 0.2s ease;
        }

        .card-brand-logo.is-active {
          border-color: #f97316;
          background: #fff7ed;
          box-shadow: 0 0 0 2px rgba(249, 115, 22, 0.2);
        }

        .unionpay-badge {
          display: flex;
          align-items: center;
          gap: 2px;
          height: 24px;
          padding: 0 4px;
          background: #005a9c;
          border-radius: 4px;
          color: #fff;
          font-family: sans-serif;
        }

        .unionpay-badge span.up-red {
          width: 6px;
          height: 18px;
          background: #e21c24;
          border-radius: 2px;
        }
        .unionpay-badge span.up-blue {
          width: 6px;
          height: 18px;
          background: #004586;
          border-radius: 2px;
        }
        .unionpay-badge span.up-green {
          width: 6px;
          height: 18px;
          background: #008146;
          border-radius: 2px;
        }
        .unionpay-badge span.up-text {
          font-size: 8px;
          line-height: 1;
          font-weight: bold;
          margin-left: 2px;
        }

        .card-payment-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .card-field-group {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }

        .card-field-label {
          font-size: 0.92rem;
          font-weight: 600;
          color: #475569;
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }

        .required-star {
          color: #ef4444;
          font-weight: 700;
        }

        .card-input-wrapper {
          position: relative;
          width: 100%;
        }

        .card-input {
          width: 100%;
          min-height: 50px;
          padding: 0 1rem;
          border: 1.5px solid #cbd5e1;
          border-radius: 8px;
          font-size: 1rem;
          color: #1e293b;
          background: #ffffff;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
        }

        .card-input:focus {
          border-color: #f97316;
          box-shadow: 0 0 0 3px rgba(249, 115, 22, 0.15);
        }

        .card-input.has-error {
          border-color: #ef4444;
          background: #fef2f2;
        }

        .card-detected-badge {
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 0.72rem;
          font-weight: 800;
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
          background: #ffedd5;
          color: #c2410c;
          letter-spacing: 0.05em;
        }

        .card-field-error {
          font-size: 0.8rem;
          color: #ef4444;
          font-weight: 500;
        }

        .card-row-two-col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .cvv-info-btn {
          border: none;
          background: none;
          color: #0284c7;
          cursor: pointer;
          font-size: 0.95rem;
          padding: 0 0.2rem;
          display: inline-flex;
          align-items: center;
        }

        .cvv-tooltip {
          position: absolute;
          right: 0;
          bottom: 100%;
          background: #1e293b;
          color: #fff;
          font-size: 0.75rem;
          padding: 0.4rem 0.75rem;
          border-radius: 6px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          width: max-content;
          max-width: 220px;
          z-index: 10;
          margin-bottom: 4px;
        }

        .save-card-wrapper {
          margin-top: 0.5rem;
        }

        .save-card-checkbox-label {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          cursor: pointer;
          user-select: none;
        }

        .save-card-checkbox {
          width: 18px;
          height: 18px;
          accent-color: #f97316;
          cursor: pointer;
        }

        .save-card-title {
          font-size: 0.95rem;
          font-weight: 700;
          color: #1e293b;
        }

        .save-card-subtext {
          margin: 0.35rem 0 0 1.7rem;
          font-size: 0.82rem;
          line-height: 1.45;
          color: #64748b;
        }

        .card-processing-status {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1rem;
          border-radius: 8px;
          background: #fff7ed;
          border: 1px solid #fed7aa;
          color: #c2410c;
          font-weight: 600;
          font-size: 0.88rem;
          animation: pulse 1.5s infinite;
        }

        .card-spinner,
        .btn-spinner {
          width: 16px;
          height: 16px;
          border: 2px solid rgba(194, 65, 12, 0.3);
          border-top-color: #c2410c;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
        }

        .btn-spinner {
          border: 2px solid rgba(255, 255, 255, 0.4);
          border-top-color: #ffffff;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.75; }
        }

        .card-actions-row {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-top: 0.6rem;
        }

        .pay-now-btn {
          flex: 1;
          min-height: 52px;
          background: #f97316;
          border: none;
          border-radius: 8px;
          color: #ffffff;
          font-size: 1.05rem;
          font-weight: 700;
          cursor: pointer;
          transition: background 0.2s ease, transform 0.1s ease, box-shadow 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 14px rgba(249, 115, 22, 0.35);
        }

        .pay-now-btn:hover:not(:disabled) {
          background: #ea580c;
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(249, 115, 22, 0.45);
        }

        .pay-now-btn:active:not(:disabled) {
          transform: translateY(0);
        }

        .pay-now-btn:disabled {
          opacity: 0.75;
          cursor: not-allowed;
        }

        .btn-loading-content {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .card-security-footer {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 0.5rem;
          margin-top: 0.6rem;
          padding-top: 0.9rem;
          border-top: 1px dashed #e2e8f0;
          font-size: 0.78rem;
          color: #64748b;
          font-weight: 500;
        }

        @media (max-width: 480px) {
          .card-row-two-col {
            grid-template-columns: 1fr;
          }
          .card-security-footer {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </div>
  )
}

export default CardPaymentForm
