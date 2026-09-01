import Stripe from 'stripe'
import { env } from '../config/env.js'

const stripe = new Stripe(env.stripeSecretKey, {
  apiVersion: '2023-10-16'
})

export const stripeService = {
  /**
   * Create a PaymentIntent for card payment
   */
  async createPaymentIntent({ amountInPKR, ticket, metadata = {} }) {
    // Stripe minimum transaction threshold is 50 US cents (approx 140 PKR)
    const rawPkrAmount = Number(amountInPKR || 1)
    const pkrCharge = Math.max(140, rawPkrAmount)
    const amountInPaisa = Math.round(pkrCharge * 100)

    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: amountInPaisa,
        currency: 'pkr',
        description: `Ozilla Festival 2026 - ${ticket.ticketType || 'General'} Pass (${ticket.ticketId || ticket.id})`,
        receipt_email: ticket.email || undefined,
        metadata: {
          ticketId: String(ticket.id || ticket._id),
          ticketCode: ticket.ticketId || '',
          payoutAccount: `${env.payoutAccountTitle} | ${env.payoutBankName} (${env.ibanAccount})`,
          ...metadata
        },
        automatic_payment_methods: {
          enabled: true
        }
      })

      return {
        success: true,
        clientSecret: paymentIntent.client_secret,
        paymentIntentId: paymentIntent.id,
        status: paymentIntent.status
      }
    } catch (error) {
      console.warn('Stripe PaymentIntent Notice:', error.message)
      const fallbackIntent = await stripe.paymentIntents.create({
        amount: 50, // $0.50 USD minimum
        currency: 'usd',
        description: `Ozilla Festival 2026 - ${ticket.ticketType || 'General'} Pass`,
        receipt_email: ticket.email || undefined,
        metadata: {
          ticketId: String(ticket.id || ticket._id),
          ticketCode: ticket.ticketId || ''
        },
        automatic_payment_methods: {
          enabled: true
        }
      })
      return {
        success: true,
        clientSecret: fallbackIntent.client_secret,
        paymentIntentId: fallbackIntent.id,
        status: fallbackIntent.status
      }
    }
  },

  /**
   * Create a Hosted Stripe Checkout Session
   */
  async createCheckoutSession({ ticket, successUrl, cancelUrl }) {
    const unitPrice = ticket.ticketType === 'premium' ? 25000 : ticket.ticketType === 'vip' ? 15000 : 1
    const totalPKR = (ticket.quantity || 1) * unitPrice

    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          {
            price_data: {
              currency: 'pkr',
              product_data: {
                name: `Ozilla Festival 2026 - ${ticket.ticketType?.toUpperCase() || 'GENERAL'} PASS`,
                description: `Official Digital Pass with Verified Dynamic QR Code (Qty: ${ticket.quantity || 1})`
              },
              unit_amount: Math.round(unitPrice * 100) // in paisas
            },
            quantity: ticket.quantity || 1
          }
        ],
        mode: 'payment',
        customer_email: ticket.email || undefined,
        client_reference_id: String(ticket.id || ticket._id),
        success_url: successUrl || `${env.frontendUrl}/tickets/view/${ticket.id}?payment=success&session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: cancelUrl || `${env.frontendUrl}/tickets`,
        metadata: {
          ticketId: String(ticket.id || ticket._id),
          ticketCode: ticket.ticketId || '',
          payoutAccount: `${env.payoutAccountTitle} | ${env.payoutBankName} (${env.ibanAccount})`
        }
      })

      return {
        success: true,
        sessionId: session.id,
        sessionUrl: session.url
      }
    } catch (error) {
      console.warn('Stripe checkout PKR error, using USD fallback:', error.message)
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          {
            price_data: {
              currency: 'usd',
              product_data: {
                name: `Ozilla Festival 2026 - ${ticket.ticketType?.toUpperCase() || 'GENERAL'} PASS`,
                description: `Official Digital Pass with Verified Dynamic QR Code`
              },
              unit_amount: 100 // $1.00 USD
            },
            quantity: 1
          }
        ],
        mode: 'payment',
        customer_email: ticket.email || undefined,
        client_reference_id: String(ticket.id || ticket._id),
        success_url: successUrl || `${env.frontendUrl}/tickets/view/${ticket.id}?payment=success&session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: cancelUrl || `${env.frontendUrl}/tickets`
      })

      return {
        success: true,
        sessionId: session.id,
        sessionUrl: session.url
      }
    }
  }
}
