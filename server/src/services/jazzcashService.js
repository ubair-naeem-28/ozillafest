import crypto from 'crypto'
import { env } from '../config/env.js'

export const jazzcashService = {
  formatDateTime(date = new Date()) {
    const pad = (n) => String(n).padStart(2, '0')
    const yyyy = date.getFullYear()
    const MM = pad(date.getMonth() + 1)
    const dd = pad(date.getDate())
    const HH = pad(date.getHours())
    const mm = pad(date.getMinutes())
    const ss = pad(date.getSeconds())
    return `${yyyy}${MM}${dd}${HH}${mm}${ss}`
  },

  generateSecureHash(params, integritySalt) {
    const salt = integritySalt || env.jazzcashIntegritySalt || 'test_salt_ozilla_2026'
    const sortedKeys = Object.keys(params).sort()
    const hashString = sortedKeys
      .filter((key) => key !== 'pp_SecureHash' && params[key] !== undefined && params[key] !== null && String(params[key]).trim() !== '')
      .map((key) => String(params[key]))
      .join('&')

    const stringToHash = `${salt}&${hashString}`
    return crypto.createHmac('sha256', salt).update(stringToHash).digest('hex').toUpperCase()
  },

  createCheckoutPayload(ticket, returnUrl) {
    const unitPrice = ticket.ticketType === 'premium' ? 25000 : ticket.ticketType === 'vip' ? 15000 : 1
    const amountInPKR = Number((ticket.quantity || 1) * unitPrice)
    const amountInPaisa = String(amountInPKR * 100) // JazzCash expects amount in paisas (no decimals)

    const now = new Date()
    const expiry = new Date(now.getTime() + 60 * 60 * 1000) // 1 hour expiry

    const txnRefNo = `T${Date.now()}${Math.random().toString(36).substring(2, 6).toUpperCase()}`
    const callbackUrl = returnUrl || `${env.frontendUrl}/tickets/view/${ticket.id}?payment=success`

    const payload = {
      pp_Version: '1.1',
      pp_TxnType: 'MWALLET',
      pp_Language: 'EN',
      pp_MerchantID: env.jazzcashMerchantId || 'MC12345',
      pp_Password: env.jazzcashPassword || 'password123',
      pp_TxnRefNo: txnRefNo,
      pp_Amount: amountInPaisa,
      pp_TxnCurrency: 'PKR',
      pp_TxnDateTime: this.formatDateTime(now),
      pp_BillReference: `BILL-${ticket.ticketId || ticket.id}`,
      pp_Description: `Ozilla Festival Pass Booking (${ticket.ticketType || 'General'})`,
      pp_TxnExpiryDateTime: this.formatDateTime(expiry),
      pp_ReturnURL: callbackUrl,
      pp_MobileNumber: ticket.phone || ticket.senderPhone || '',
      pp_CNIC: ticket.idCardNumber || '3520112345671'
    }

    payload.pp_SecureHash = this.generateSecureHash(payload, env.jazzcashIntegritySalt)
    return payload
  },

  verifyCallback(callbackData) {
    if (!callbackData) return false
    const responseCode = String(callbackData.pp_ResponseCode || '')
    return responseCode === '000' || responseCode === '121'
  }
}
