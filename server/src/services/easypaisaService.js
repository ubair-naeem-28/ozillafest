import { env } from '../config/env.js'

export const easypaisaService = {
  createCheckoutPayload(ticket, postBackUrl) {
    const unitPrice = ticket.ticketType === 'premium' ? 25000 : ticket.ticketType === 'vip' ? 15000 : 1
    const totalAmount = Number((ticket.quantity || 1) * unitPrice)

    const orderId = `EP-OZ-${ticket.ticketId || ticket.id}-${Date.now().toString().slice(-6)}`
    const callback = postBackUrl || `${env.frontendUrl}/tickets/view/${ticket.id}?payment=success`

    return {
      storeId: env.easypaisaStoreId || '10089',
      orderId,
      transactionAmount: totalAmount.toFixed(1),
      transactionType: 'MA', // Mobile Account
      mobileNum: ticket.phone || ticket.senderPhone || '03330000000',
      emailAddress: ticket.email || 'customer@ozillafestival.com',
      postBackURL: callback,
      authCredentials: Buffer.from(`${env.easypaisaUser || 'easypaisa_user'}:${env.easypaisaPassword || 'easypaisa_pass'}`).toString('base64')
    }
  },

  verifyCallback(callbackData) {
    if (!callbackData) return false
    const responseCode = String(callbackData.responseCode || callbackData.status || '')
    return responseCode === '0000' || responseCode === '000' || responseCode === 'SUCCESS'
  }
}
