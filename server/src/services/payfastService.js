import crypto from 'crypto'
import { env } from '../config/env.js'

export const payfastService = {
  getGatewayUrl() {
    return env.payfastEnvironment === 'production'
      ? env.payfastLiveUrl
      : env.payfastSandboxUrl
  },

  generateBasketId(ticketId) {
    return `OZILLA-${ticketId}-${Date.now().toString().slice(-6)}`
  },

  generateSignature(params = {}) {
    const sortedKeys = Object.keys(params).sort()
    const queryString = sortedKeys
      .filter((key) => key !== 'signature' && params[key] !== undefined && params[key] !== null && params[key] !== '')
      .map((key) => `${key}=${params[key]}`)
      .join('&')

    return crypto
      .createHmac('sha256', env.payfastSecuredKey)
      .update(queryString)
      .digest('hex')
  },

  createCheckoutPayload(ticket, returnUrl, cancelUrl) {
    const unitPrice = ticket.ticketType === 'premium' ? 25000 : ticket.ticketType === 'vip' ? 15000 : 1
    const amount = Number((ticket.quantity || 1) * unitPrice)
    const basketId = this.generateBasketId(ticket.id || ticket.ticketId)
    const baseUrl = env.frontendUrl || 'http://localhost:8080'

    const payload = {
      merchant_id: env.payfastMerchantId,
      secured_key: env.payfastSecuredKey,
      basket_id: basketId,
      txnamt: amount.toFixed(2),
      customer_email: ticket.email || 'customer@example.com',
      customer_mobile: ticket.phone || '03001234567',
      customer_name: ticket.fullName || 'Customer',
      order_date: new Date().toISOString().slice(0, 19).replace('T', ' '),
      currency_code: 'PKR',
      success_url: returnUrl || `${baseUrl}/tickets/view/${ticket.id}?payment=success`,
      cancel_url: cancelUrl || `${baseUrl}/tickets?payment=cancelled`,
      ipn_url: `${process.env.BACKEND_URL || 'http://localhost:5000'}/api/tickets/payfast-ipn`,
      item_name: `Ozilla Festival 2026 - ${ticket.ticketType || 'Regular'} Pass (Qty: ${ticket.quantity || 1})`,
      item_description: `Official Ticket Pass for ${ticket.eventName || 'Ozilla Festival 2026'}`
    }

    const signature = this.generateSignature(payload)

    return {
      ...payload,
      signature,
      gateway_url: this.getGatewayUrl(),
      is_sandbox: env.payfastEnvironment !== 'production'
    }
  },

  verifyIpnPayload(payload = {}) {
    const { signature, ...rest } = payload
    if (!signature) return true // In sandbox/dev simulator, fallback if no signature
    const calculated = this.generateSignature(rest)
    return calculated === signature
  }
}
