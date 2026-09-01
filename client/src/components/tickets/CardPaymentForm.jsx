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

function detectBankName(number) {
  const clean = number.replace(/\D/g, '')
  const prefix4 = clean.slice(0, 4)
  if (['5893', '4012', '5399', '4519', '4507'].includes(prefix4)) return 'Meezan Bank'
  if (['4116', '5241', '4214', '5488', '4027'].includes(prefix4)) return 'HBL'
  if (['4848', '5189', '4589', '5294', '4282'].includes(prefix4)) return 'Bank Alfalah'
  if (['4351', '5236', '4271', '5521', '4046'].includes(prefix4)) return 'MCB Bank'
  if (['4021', '5123', '4921', '5424'].includes(prefix4)) return 'Standard Chartered'
  if (['4203', '5250', '4894', '5320'].includes(prefix4)) return 'UBL'
  if (['4008', '5456', '4692', '5378'].includes(prefix4)) return 'Allied Bank'
  if (clean.length >= 6) return 'Verified Bank'
  return ''
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
  const detectedBank = detectBankName(formData.cardNumber)

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

    setProcessingPhase('Validating card credentials with bank...')
    await new Promise((r) => setTimeout(r, 450))
    setProcessingPhase('Authorizing payment deduction...')

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
      {/* Logos Row */}
      <div className="card-brands-row">
        {/* Mastercard Logo */}
        <div className={`card-brand-logo mastercard ${cardType === 'mastercard' ? 'is-active' : ''}`} title="Mastercard">
          <svg viewBox="0 0 38 24" width="44" height="28" aria-label="Mastercard">
            <circle cx="14" cy="12" r="10" fill="#EB001B" />
            <circle cx="24" cy="12" r="10" fill="#F79E1B" fillOpacity="0.88" />
          </svg>
        </div>

        {/* Visa Logo */}
        <div className={`card-brand-logo visa ${cardType === 'visa' ? 'is-active' : ''}`} title="VISA">
          <svg viewBox="0 0 50 20" width="54" height="22" aria-label="VISA">
            <text x="2" y="16" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontStyle="italic" fontSize="18" fill="#ffffff" letterSpacing="1">
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
            <span className="up-text">UnionPay</span>
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
              placeholder="4000 1234 5678 9010"
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
            placeholder="e.g. HAMZA ALI"
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
              placeholder="•••"
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
            <span className="save-card-title">Save Card for Express Rebooking</span>
          </label>
          <p className="save-card-subtext">
            Card details are encrypted with bank-grade 256-bit tokenization for your security.
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
                <span className="btn-spinner" /> Processing Payment...
              </span>
            ) : (
              amount ? `Pay Now • PKR ${amount.toLocaleString()}` : 'Pay Now'
            )}
          </button>
        </div>

        {/* Trust Badges */}
        <div className="card-security-footer">
          <span>🔒 256-Bit SSL Encrypted & PCI-DSS Compliant</span>
          <span>⚡ Instant Verified QR Pass Delivery</span>
        </div>
      </form>

      <style>{`
        .card-payment-container {
          background: rgba(27, 17, 11, 0.72);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 22px;
          padding: clamp(1.4rem, 3vw, 2.2rem);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.06), 0 18px 45px rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(20px);
          width: 100%;
          color: #ffffff;
        }

        .card-brands-row {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.6rem;
          padding-bottom: 1.2rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .card-brand-logo {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.4rem 0.75rem;
          border-radius: 10px;
          background: rgba(0, 0, 0, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.12);
          transition: all 0.2s ease;
        }

        .card-brand-logo.is-active {
          border-color: #ff5a1f;
          background: rgba(255, 90, 31, 0.15);
          box-shadow: 0 0 0 2px rgba(255, 90, 31, 0.3);
        }

        .unionpay-badge {
          display: flex;
          align-items: center;
          gap: 2px;
          height: 22px;
          padding: 0 4px;
          background: #005a9c;
          border-radius: 4px;
          color: #fff;
          font-family: sans-serif;
        }

        .unionpay-badge span.up-red {
          width: 5px;
          height: 16px;
          background: #e21c24;
          border-radius: 2px;
        }
        .unionpay-badge span.up-blue {
          width: 5px;
          height: 16px;
          background: #004586;
          border-radius: 2px;
        }
        .unionpay-badge span.up-green {
          width: 5px;
          height: 16px;
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
          gap: 1.3rem;
        }

        .card-field-group {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }

        .card-field-label {
          font-size: 0.88rem;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.88);
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }

        .required-star {
          color: #ff5a1f;
          font-weight: 700;
        }

        .card-input-wrapper {
          position: relative;
          width: 100%;
        }

        .card-input {
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

        .card-input::placeholder {
          color: rgba(255, 255, 255, 0.3);
        }

        .card-input:focus {
          border-color: #ff5a1f;
          box-shadow: 0 0 0 3px rgba(255, 90, 31, 0.25);
        }

        .card-input.has-error {
          border-color: #ef4444;
          background: rgba(239, 68, 68, 0.1);
        }

        .card-detected-badge {
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 0.72rem;
          font-weight: 900;
          padding: 0.25rem 0.55rem;
          border-radius: 6px;
          background: rgba(255, 189, 89, 0.2);
          color: #ffbd59;
          border: 1px solid rgba(255, 189, 89, 0.35);
          letter-spacing: 0.08em;
        }

        .card-field-error {
          font-size: 0.8rem;
          color: #fca5a5;
          font-weight: 600;
        }

        .card-row-two-col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.1rem;
        }

        .cvv-info-btn {
          border: none;
          background: none;
          color: #ffbd59;
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
          background: #1e0d06;
          border: 1px solid rgba(255, 189, 89, 0.3);
          color: #fff;
          font-size: 0.75rem;
          padding: 0.5rem 0.85rem;
          border-radius: 8px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
          width: max-content;
          max-width: 240px;
          z-index: 10;
          margin-bottom: 6px;
        }

        .save-card-wrapper {
          margin-top: 0.3rem;
        }

        .save-card-checkbox-label {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          cursor: pointer;
          user-select: none;
        }

        .save-card-checkbox {
          width: 18px;
          height: 18px;
          accent-color: #ff5a1f;
          cursor: pointer;
        }

        .save-card-title {
          font-size: 0.92rem;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.9);
        }

        .save-card-subtext {
          margin: 0.35rem 0 0 1.8rem;
          font-size: 0.8rem;
          line-height: 1.5;
          color: rgba(255, 255, 255, 0.6);
        }

        .card-processing-status {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.85rem 1.2rem;
          border-radius: 12px;
          background: rgba(255, 90, 31, 0.15);
          border: 1px solid rgba(255, 90, 31, 0.35);
          color: #ff8a3d;
          font-weight: 700;
          font-size: 0.9rem;
          animation: pulse 1.5s infinite;
        }

        .card-spinner,
        .btn-spinner {
          width: 16px;
          height: 16px;
          border: 2px solid rgba(255, 138, 61, 0.3);
          border-top-color: #ff8a3d;
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
          margin-top: 0.8rem;
        }

        .pay-now-btn {
          flex: 1;
          min-height: 54px;
          background: linear-gradient(120deg, #ff8a3d, #ff5a1f 55%, #e0380c);
          border: none;
          border-radius: 16px;
          color: #ffffff;
          font-size: 1.05rem;
          font-weight: 800;
          letter-spacing: 0.01em;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 35px -8px rgba(255, 90, 31, 0.55);
        }

        .pay-now-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 16px 45px -6px rgba(255, 90, 31, 0.75);
        }

        .pay-now-btn:disabled {
          opacity: 0.65;
          cursor: not-allowed;
        }

        .btn-loading-content {
          display: flex;
          align-items: center;
          gap: 0.65rem;
        }

        .card-security-footer {
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
