import React, { useEffect, useMemo, useState } from 'react'

const ticketOptions = {
  regular: {
    label: 'General',
    value: 'regular',
    price: 1,
    seats: '1,200+',
    benefits: ['Festival entry', 'Food court access', 'Partner discount offers']
  },
  vip: {
    label: 'VIP',
    value: 'vip',
    price: 15000,
    seats: '320',
    benefits: ['Priority entry', 'Premium seating', 'Celebrity performance zone']
  },
  premium: {
    label: 'Premium',
    value: 'premium',
    price: 25000,
    seats: '120',
    benefits: ['VIP lounge', 'Premium seating', 'Festival merchandise']
  }
}

function splitName(fullName = '') {
  const chunks = String(fullName).trim().split(/\s+/).filter(Boolean)
  if (chunks.length === 0) {
    return { firstName: '', lastName: '' }
  }
  return {
    firstName: chunks[0],
    lastName: chunks.slice(1).join(' ')
  }
}

function TicketRequestForm({ onSubmit, loading, profileDefaults, onBookingChange, availability, availabilityLoading }) {
  const normalizedDefaults = useMemo(() => {
    const full = splitName(profileDefaults?.name)
    return {
      firstName: profileDefaults?.firstName || full.firstName || '',
      lastName: profileDefaults?.lastName || full.lastName || '',
      email: profileDefaults?.email || '',
      phone: profileDefaults?.phone || ''
    }
  }, [profileDefaults])

  const [step, setStep] = useState(1)
  const [cnicError, setCnicError] = useState('')
  const [formData, setFormData] = useState({
    idCardNumber: '',
    festivalDay: 'day1',
    ticketType: 'regular',
    quantity: 1,
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  })

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      firstName: normalizedDefaults.firstName || prev.firstName,
      lastName: normalizedDefaults.lastName || prev.lastName,
      email: normalizedDefaults.email || prev.email,
      phone: normalizedDefaults.phone || prev.phone
    }))
  }, [normalizedDefaults])

  const getOptionAvailability = (value) => availability?.byType?.[value]
  const isOptionSoldOut = (value) => Boolean(getOptionAvailability(value)?.soldOut)
  const selectedTicket = ticketOptions[formData.ticketType]
  const selectedAvailability = getOptionAvailability(formData.ticketType)
  const selectedRemaining = Number.isFinite(selectedAvailability?.remaining) ? selectedAvailability.remaining : null
  const selectedSoldOut = isOptionSoldOut(formData.ticketType)
  const maxQuantity = Math.max(1, Math.min(10, selectedRemaining || 10))
  const quantity = Number(formData.quantity) || 1
  const subtotal = selectedTicket.price * quantity
  const serviceFee = 0
  const discount = formData.ticketType === 'premium' ? 2500 : 0
  const total = Math.max(1, subtotal - discount)
  const loggedName = `${normalizedDefaults.firstName} ${normalizedDefaults.lastName}`.trim() || profileDefaults?.email

  useEffect(() => {
    onBookingChange?.({
      ticketType: selectedTicket.label,
      day: formData.festivalDay === 'day1' ? 'Day 1' : 'Day 2',
      quantity,
      subtotal,
      serviceFee: 0,
      discount,
      total,
      benefits: selectedTicket.benefits
    })
  }, [discount, formData.festivalDay, onBookingChange, quantity, selectedTicket, subtotal, total])

  useEffect(() => {
    if (!availability?.byType || !selectedSoldOut) return
    const availableOption = Object.values(ticketOptions).find((option) => !isOptionSoldOut(option.value))
    if (availableOption) {
      setFormData((prev) => ({
        ...prev,
        ticketType: availableOption.value,
        quantity: 1
      }))
    }
  }, [availability, selectedSoldOut])

  useEffect(() => {
    if (quantity > maxQuantity) {
      setFormData((prev) => ({ ...prev, quantity: maxQuantity }))
    }
  }, [maxQuantity, quantity])

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
    if (e.target.name === 'idCardNumber') setCnicError('')
  }

  const validatePersonalInfo = () => {
    return Boolean(formData.firstName && formData.lastName && formData.email && formData.phone)
  }

  const validateCnic = () => {
    const normalizedCnic = String(formData.idCardNumber || '').trim()
    const valid = /^(?:\d{13}|\d{5}-\d{7}-\d{1})$/.test(normalizedCnic)
    setCnicError(valid ? '' : 'Use 13 digits or format XXXXX-XXXXXXX-X.')
    return valid
  }

  const goNext = () => {
    if (step === 1 && !validatePersonalInfo()) return
    if (step === 2 && (selectedSoldOut || !validateCnic())) return
    setStep((prev) => Math.min(3, prev + 1))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (selectedSoldOut || !validatePersonalInfo() || !validateCnic()) {
      setStep(!validatePersonalInfo() ? 1 : 2)
      return
    }

    onSubmit({
      ...formData,
      quantity,
      name: `${formData.firstName} ${formData.lastName}`.trim()
    })
  }

  const handleCancel = () => {
    setStep(1)
    setCnicError('')
    setFormData({
      idCardNumber: '',
      festivalDay: 'day1',
      ticketType: 'regular',
      quantity: 1,
      firstName: normalizedDefaults.firstName || '',
      lastName: normalizedDefaults.lastName || '',
      email: normalizedDefaults.email || '',
      phone: normalizedDefaults.phone || ''
    })
  }

  return (
    <form onSubmit={handleSubmit} className="ticket-wizard-form">
      <div className="ticket-form-stepper" aria-label="Ticket form steps">
        {['Personal Information', 'Ticket Information', 'Review & Confirm'].map((label, index) => (
          <button
            key={label}
            type="button"
            className={step === index + 1 ? 'is-active' : step > index + 1 ? 'is-complete' : ''}
            onClick={() => setStep(index + 1)}
          >
            <span>{index + 1}</span>
            {label}
          </button>
        ))}
      </div>

      {loggedName && (
        <div className="ticket-login-chip">
          <span>OK</span>
          Logged in as {loggedName}
        </div>
      )}

      {step === 1 && (
        <section className="ticket-form-panel">
          <div className="ticket-panel-heading">
            <p>Step 1</p>
            <h3>Personal Information</h3>
          </div>
          <div className="ticket-input-grid">
            <label className="ticket-input-wrap">
              <span>First Name</span>
              <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
            </label>
            <label className="ticket-input-wrap">
              <span>Last Name</span>
              <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
            </label>
            <label className="ticket-input-wrap">
              <span>Email Address</span>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </label>
            <label className="ticket-input-wrap">
              <span>Phone Number</span>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
            </label>
          </div>
        </section>
      )}

      {step === 2 && (
        <section className="ticket-form-panel">
          <div className="ticket-panel-heading">
            <p>Step 2</p>
            <h3>Ticket Information</h3>
          </div>
          <div className="ticket-option-grid" role="radiogroup" aria-label="Ticket type">
            {Object.values(ticketOptions).map((option) => {
              const optionAvailability = getOptionAvailability(option.value)
              const optionSoldOut = Boolean(optionAvailability?.soldOut)
              const availabilityText = availabilityLoading
                ? 'Checking availability...'
                : optionAvailability
                  ? optionSoldOut
                    ? 'Sold out'
                    : `${optionAvailability.remaining.toLocaleString()} seats available`
                  : `${option.seats} seats available`

              return (
                <button
                  key={option.value}
                  type="button"
                  disabled={optionSoldOut}
                  aria-disabled={optionSoldOut}
                  className={`ticket-option-card ${formData.ticketType === option.value ? 'is-selected' : ''} ${optionSoldOut ? 'is-sold-out' : ''}`}
                  onClick={() => {
                    if (optionSoldOut) return
                    setFormData((prev) => ({ ...prev, ticketType: option.value, quantity: 1 }))
                  }}
                >
                  <span>{option.label}</span>
                  <strong>PKR {option.price.toLocaleString()}</strong>
                  <small>{availabilityText}</small>
                </button>
              )
            })}
          </div>

          <div className="ticket-input-grid">
            <label className="ticket-input-wrap">
              <span>Festival Day</span>
              <select name="festivalDay" value={formData.festivalDay} onChange={handleChange} required>
                <option value="day1">Day 1 - November 1, 2026</option>
                <option value="day2">Day 2 - November 2, 2026</option>
              </select>
            </label>
            <label className="ticket-input-wrap">
              <span>Quantity</span>
              <input
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                min="1"
                max={maxQuantity}
                disabled={selectedSoldOut}
                required
              />
            </label>
            <label className="ticket-input-wrap ticket-input-wide">
              <span>ID Card Number (CNIC / National ID)</span>
              <input
                type="text"
                name="idCardNumber"
                value={formData.idCardNumber}
                onChange={handleChange}
                placeholder="35202-1234567-1"
                pattern="(?:\d{13}|\d{5}-\d{7}-\d{1})"
                title="Use 13 digits or format XXXXX-XXXXXXX-X"
                required
              />
              {cnicError && <em>{cnicError}</em>}
            </label>
          </div>
        </section>
      )}

      {step === 3 && (
        <section className="ticket-form-panel">
          <div className="ticket-panel-heading">
            <p>Step 3</p>
            <h3>Review & Confirm</h3>
          </div>
          <div className="ticket-review-layout">
            <div className="ticket-benefit-list">
              {selectedTicket.benefits.map((benefit) => (
                <span key={benefit}>{benefit}</span>
              ))}
            </div>
            <aside className="ticket-summary-card">
              <h4>Booking Summary</h4>
              <div><span>Ticket Type</span><strong>{selectedTicket.label}</strong></div>
              <div><span>Quantity</span><strong>{quantity}</strong></div>
              <div><span>Price</span><strong>PKR {subtotal.toLocaleString()}</strong></div>
              <div><span>Processing Fee</span><strong style={{ color: '#10b981' }}>Free (PKR 0)</strong></div>
              <div><span>Discount</span><strong>PKR {discount.toLocaleString()}</strong></div>
              <div className="ticket-total"><span>Total</span><strong>PKR {total.toLocaleString()}</strong></div>
            </aside>
          </div>
        </section>
      )}

      <div className="ticket-form-actions">
        <button type="button" onClick={step === 1 ? handleCancel : () => setStep((prev) => prev - 1)} className="ticket-secondary-button">
          {step === 1 ? 'Reset' : 'Back'}
        </button>
        {step < 3 ? (
          <button type="button" onClick={goNext} className="ticket-primary-button">
            Continue
          </button>
        ) : (
          <button type="submit" disabled={loading} className="ticket-primary-button ticket-shimmer-button">
            {loading ? 'Verifying Details...' : 'Complete Your Booking'}
          </button>
        )}
      </div>
    </form>
  )
}

export default TicketRequestForm
