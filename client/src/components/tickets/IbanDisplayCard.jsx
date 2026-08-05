import React, { useState } from 'react'

function IbanDisplayCard() {
  const [copied, setCopied] = useState('')
  const bankDetails = {
    bankName: 'HBL',
    accountTitle: 'Ozilla Festival',
    accountNumber: '1234-5678-9012-3456',
    iban: 'PK36HABB0000123456789012345',
    branchCode: '1234'
  }

  const copyValue = async (label, value) => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(label)
      window.setTimeout(() => setCopied(''), 1800)
    } catch {
      setCopied('')
    }
  }

  return (
    <div className="ticket-bank-card">
      <div className="ticket-bank-header">
        <p>Payment Details</p>
        <h3>Bank Transfer</h3>
        <span>Verified festival account</span>
      </div>

      <div className="ticket-bank-grid">
        {Object.entries(bankDetails).map(([key, value]) => {
          const label = key
            .replace(/([A-Z])/g, ' $1')
            .replace(/^./, (char) => char.toUpperCase())

          return (
            <article key={key}>
              <span>{label}</span>
              <strong>{value}</strong>
              {(key === 'iban' || key === 'accountNumber') && (
                <button type="button" onClick={() => copyValue(label, value)}>
                  {copied === label ? 'Copied' : 'Copy'}
                </button>
              )}
            </article>
          )
        })}
      </div>

      <div className="ticket-bank-note">
        <strong>Important</strong>
        <p>Please include your name and ticket reference in the payment description for easy verification.</p>
      </div>
    </div>
  )
}

export default IbanDisplayCard
