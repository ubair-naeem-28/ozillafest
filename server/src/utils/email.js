import nodemailer from 'nodemailer'
import { env } from '../config/env.js'

let transporter

function getMailFrom() {
  const configuredFrom = String(env.smtpFrom || '').trim()
  if (
    configuredFrom &&
    !configuredFrom.includes('no-reply@ozillafestival.com') &&
    !configuredFrom.includes('your_email@example.com')
  ) {
    return configuredFrom
  }

  return env.smtpUser ? `OZILLA FEST <${env.smtpUser}>` : 'OZILLA FEST <info@ozillafestival.com>'
}

function getTransporter() {
  if (transporter) return transporter

  const user = env.smtpUser || 'obaer2102@gmail.com'
  const pass = env.smtpPass || 'nqqg vovr pcsc halb'

  transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: user.trim(),
      pass: pass.trim()
    },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 15000,
    tls: {
      rejectUnauthorized: false
    }
  })

  return transporter
}

function buildEmailWrapper(title, contentHtml) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${title}</title>
    </head>
    <body style="margin: 0; padding: 0; background-color: #0b0c10; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #e5e7eb;">
      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; background-color: #0b0c10; padding: 30px 10px;">
        <tr>
          <td align="center">
            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background: linear-gradient(180deg, #161822 0%, #0d0e15 100%); border: 1px solid rgba(212, 175, 55, 0.25); border-radius: 20px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.6);">
              <!-- Header Banner -->
              <tr>
                <td style="background: linear-gradient(135deg, #3d0c1e 0%, #170712 100%); padding: 30px 24px; text-align: center; border-bottom: 2px solid #d4af37;">
                  <h1 style="margin: 0; font-size: 26px; font-weight: 800; letter-spacing: 2px; color: #f9df88; text-transform: uppercase;">OZILLA FEST 2026</h1>
                  <p style="margin: 6px 0 0; font-size: 13px; color: rgba(255, 255, 255, 0.7); letter-spacing: 1px;">THE PREMIER LUXURY CULTURAL & MUSIC EXPERIENCE</p>
                </td>
              </tr>
              <!-- Content Body -->
              <tr>
                <td style="padding: 32px 28px; line-height: 1.6; color: #d1d5db; font-size: 15px;">
                  ${contentHtml}
                </td>
              </tr>
              <!-- Footer -->
              <tr>
                <td style="background-color: #0a0b0e; padding: 20px; text-align: center; border-top: 1px solid rgba(255,255,255,0.06); font-size: 12px; color: #71717a;">
                  <p style="margin: 0 0 6px;">© 2026 OZILLA FEST. All rights reserved.</p>
                  <p style="margin: 0;">Karachi, Pakistan | Official Ticketing & Concierge</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `
}

async function sendViaResend({ to, subject, html, text }) {
  const apiKey = env.resendApiKey || process.env.RESEND_API_KEY
  if (!apiKey || typeof apiKey !== 'string' || !apiKey.trim()) {
    return null
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey.trim()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'Ozilla Fest <onboarding@resend.dev>',
        to: Array.isArray(to) ? to : [to],
        subject,
        html,
        text
      })
    })

    const data = await response.json()
    if (response.ok && data?.id) {
      return data
    }
    console.warn('[Resend API Notice]:', data?.message || 'Trying SMTP fallback')
    return null
  } catch (err) {
    console.warn('[Resend API Error]:', err.message)
    return null
  }
}

export async function sendOtpEmail({ to, otpCode }) {
  const html = buildEmailWrapper(
    'Your OZILLA FEST Verification Code',
    `
      <h2 style="color: #ffffff; margin-top: 0; font-size: 20px;">Email Verification</h2>
      <p>Use the following 6-digit one-time code to complete your security verification:</p>
      <div style="margin: 24px 0; text-align: center;">
        <span style="display: inline-block; font-size: 36px; font-weight: 800; letter-spacing: 10px; color: #ffd700; background: rgba(212, 175, 55, 0.1); border: 1px solid #d4af37; border-radius: 12px; padding: 14px 28px;">
          ${otpCode}
        </span>
      </div>
      <p style="font-size: 13px; color: #9ca3af;">This code is valid for <strong>10 minutes</strong>. Do not share this OTP with anyone for your security.</p>
    `
  )
  const subject = `[Ozilla 2026] Verification Code: ${otpCode}`
  const text = `Your OZILLA FEST OTP code is: ${otpCode}. It expires in 10 minutes.`

  // 1. Try Resend HTTPS API (Instant over Port 443, never blocked on Render)
  const resendResult = await sendViaResend({ to, subject, html, text })
  if (resendResult) {
    return resendResult
  }

  // 2. Fallback to standard Nodemailer SMTP
  try {
    const client = getTransporter()
    const info = await client.sendMail({
      from: getMailFrom(),
      to,
      subject,
      text,
      html
    })
    return info
  } catch (error) {
    console.warn(`[Email Service] Failed to deliver OTP to ${to}:`, error.message)
    throw error
  }
}

export async function sendPasswordResetEmail({ to, resetUrl }) {
  try {
    const client = getTransporter()
    const html = buildEmailWrapper(
      'Reset Your OZILLA FEST Password',
      `
        <h2 style="color: #ffffff; margin-top: 0; font-size: 20px;">Password Reset Request</h2>
        <p>We received a request to reset your password for your OZILLA FEST account.</p>
        <div style="margin: 28px 0; text-align: center;">
          <a href="${resetUrl}" style="background: linear-gradient(135deg, #d4af37 0%, #aa8420 100%); color: #111827; text-decoration: none; padding: 14px 32px; border-radius: 10px; font-weight: 700; font-size: 15px; display: inline-block; box-shadow: 0 4px 15px rgba(212, 175, 55, 0.3);">
            Reset My Password
          </a>
        </div>
        <p style="font-size: 13px; color: #9ca3af;">If you did not request a password reset, you can safely ignore this email. This link expires in <strong>30 minutes</strong>.</p>
      `
    )

    await client.sendMail({
      from: getMailFrom(),
      to,
      subject: '[Ozilla 2026] Password Reset Instructions',
      text: `Reset your password at: ${resetUrl} (Link expires in 30 minutes)`,
      html
    })
  } catch (error) {
    console.warn(`[Email Service] Failed to deliver reset link to ${to}:`, error.message)
  }
}

export async function sendWelcomeEmail({ to, name }) {
  try {
    const client = getTransporter()
    const html = buildEmailWrapper(
      'Welcome to OZILLA FEST 2026',
      `
        <h2 style="color: #ffffff; margin-top: 0; font-size: 22px;">Welcome to the Experience, ${name || 'Festival Guest'}! 🌟</h2>
        <p>Your OZILLA FEST account is now active and ready. You have complete access to the VIP lounges, stage lineups, luxury hotel concierges, and our streamlined Ticket Portal.</p>
        
        <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 18px; margin: 20px 0;">
          <h3 style="color: #f9df88; margin: 0 0 8px; font-size: 16px;">Festival Highlights:</h3>
          <ul style="margin: 0; padding-left: 20px; color: #9ca3af; font-size: 14px;">
            <li>Exclusive Stage Pass & Digital QR Verification</li>
            <li>Direct Bank Transfer & Instant Mobile Wallet Support (JazzCash / Easypaisa)</li>
            <li>Curated 5-Star Partner Accommodations</li>
          </ul>
        </div>

        <div style="margin: 28px 0; text-align: center;">
          <a href="${env.frontendUrl}/tickets" style="background: linear-gradient(135deg, #d4af37 0%, #aa8420 100%); color: #111827; text-decoration: none; padding: 14px 32px; border-radius: 10px; font-weight: 700; font-size: 15px; display: inline-block;">
            Explore Tickets
          </a>
        </div>
      `
    )

    await client.sendMail({
      from: getMailFrom(),
      to,
      subject: '🌟 Welcome to OZILLA FEST 2026',
      text: `Welcome to OZILLA FEST 2026, ${name || 'Guest'}! Log in to view your tickets at: ${env.frontendUrl}/tickets`,
      html
    })
  } catch (error) {
    console.warn(`[Email Service] Failed to send welcome email to ${to}:`, error.message)
  }
}

export async function sendPaymentReceivedEmail({ to, name, ticketId, tierName, amount, paymentMethod }) {
  try {
    const client = getTransporter()
    const html = buildEmailWrapper(
      'Payment Received - OZILLA FEST 2026',
      `
        <h2 style="color: #ffffff; margin-top: 0; font-size: 20px;">Payment Confirmation Received 🎟️</h2>
        <p>Hello ${name || 'Guest'},</p>
        <p>We have successfully registered your payment for <strong>OZILLA FEST 2026</strong>.</p>
        
        <table border="0" cellpadding="8" cellspacing="0" width="100%" style="margin: 20px 0; background: rgba(255,255,255,0.03); border: 1px solid rgba(212,175,55,0.2); border-radius: 12px; font-size: 14px;">
          <tr>
            <td style="color: #9ca3af; border-bottom: 1px solid rgba(255,255,255,0.05);">Pass Tier:</td>
            <td style="color: #f9df88; font-weight: bold; text-align: right; border-bottom: 1px solid rgba(255,255,255,0.05); text-transform: uppercase;">${tierName || 'General Pass'}</td>
          </tr>
          <tr>
            <td style="color: #9ca3af; border-bottom: 1px solid rgba(255,255,255,0.05);">Ticket ID:</td>
            <td style="color: #ffffff; font-family: monospace; text-align: right; border-bottom: 1px solid rgba(255,255,255,0.05);">${ticketId}</td>
          </tr>
          <tr>
            <td style="color: #9ca3af; border-bottom: 1px solid rgba(255,255,255,0.05);">Amount:</td>
            <td style="color: #10b981; font-weight: bold; text-align: right; border-bottom: 1px solid rgba(255,255,255,0.05);">PKR ${Number(amount || 0).toLocaleString()}</td>
          </tr>
          <tr>
            <td style="color: #9ca3af;">Payment Method:</td>
            <td style="color: #ffffff; text-align: right; text-transform: capitalize;">${paymentMethod || 'Online Gateway'}</td>
          </tr>
        </table>

        <div style="margin: 28px 0; text-align: center;">
          <a href="${env.frontendUrl}/tickets" style="background: linear-gradient(135deg, #d4af37 0%, #aa8420 100%); color: #111827; text-decoration: none; padding: 14px 32px; border-radius: 10px; font-weight: 700; font-size: 15px; display: inline-block;">
            View Pass & QR Code
          </a>
        </div>
      `
    )

    await client.sendMail({
      from: getMailFrom(),
      to,
      subject: `[Ozilla 2026] Payment Received for Pass #${ticketId}`,
      text: `Payment of PKR ${Number(amount || 0).toLocaleString()} received for ticket ${ticketId}. View your pass at ${env.frontendUrl}/tickets`,
      html
    })
  } catch (error) {
    console.warn(`[Email Service] Failed to deliver payment received email to ${to}:`, error.message)
  }
}

export async function sendTicketApprovedEmail({ to, name, ticketId, tierName, verificationUrl, eventName, eventDate, quantity }) {
  try {
    const client = getTransporter()
    const verifyLink = verificationUrl || `${env.frontendUrl}/verification/${ticketId}`
    const html = buildEmailWrapper(
      'Your Ticket is Ready - OZILLA FEST 2026',
      `
        <div style="text-align: center; margin-bottom: 20px;">
          <span style="background: #064e3b; color: #34d399; font-weight: 700; font-size: 12px; padding: 6px 14px; border-radius: 9999px; text-transform: uppercase; letter-spacing: 1px;">
            ✓ Confirmed & Verified
          </span>
        </div>
        <h2 style="color: #ffffff; margin-top: 0; font-size: 22px; text-align: center;">Your Official Festival Pass is Ready!</h2>
        <p>Dear ${name || 'Guest'}, your pass for <strong>${eventName || 'OZILLA FEST 2026'}</strong> has been generated and confirmed.</p>

        <div style="background: #1c1d29; border: 1px solid #d4af37; border-radius: 16px; padding: 20px; margin: 24px 0; text-align: center;">
          <p style="color: #9ca3af; margin: 0 0 6px; font-size: 13px;">OFFICIAL TICKET IDENTIFIER</p>
          <p style="color: #f9df88; font-family: monospace; font-size: 20px; font-weight: 800; margin: 0 0 16px; letter-spacing: 2px;">${ticketId}</p>
          <div style="font-size: 14px; color: #d1d5db; line-height: 1.8;">
            <div><strong>Pass Type:</strong> <span style="text-transform: uppercase; color: #ffd700;">${tierName || 'General'}</span> (${quantity || 1} Pass)</div>
            <div><strong>Event Date:</strong> ${eventDate || 'November 1-2, 2026'}</div>
            <div><strong>Venue:</strong> Karachi, Pakistan</div>
          </div>
        </div>

        <p style="font-size: 14px; color: #9ca3af; text-align: center;">Present your QR code at the fast-track VIP / General entrance gates for instant scanning.</p>

        <div style="margin: 28px 0; text-align: center;">
          <a href="${verifyLink}" style="background: linear-gradient(135deg, #d4af37 0%, #aa8420 100%); color: #111827; text-decoration: none; padding: 14px 32px; border-radius: 10px; font-weight: 700; font-size: 15px; display: inline-block;">
            Open Fast-Track QR Pass
          </a>
        </div>
      `
    )

    await client.sendMail({
      from: getMailFrom(),
      to,
      subject: `🎉 [Confirmed] Your OZILLA FEST 2026 Pass (${ticketId})`,
      text: `Your ticket ${ticketId} is ready! View your QR pass here: ${verifyLink}`,
      html
    })
  } catch (error) {
    console.warn(`[Email Service] Failed to send ticket approval email to ${to}:`, error.message)
  }
}

export async function sendTicketRejectedEmail({ to, name, ticketId, reason }) {
  try {
    const client = getTransporter()
    const html = buildEmailWrapper(
      'Ticket Status Update - OZILLA FEST 2026',
      `
        <h2 style="color: #ef4444; margin-top: 0; font-size: 20px;">Verification Update for Ticket #${ticketId}</h2>
        <p>Dear ${name || 'Guest'},</p>
        <p>We were unable to verify your submitted payment receipt for Ticket <strong>#${ticketId}</strong>.</p>
        
        <div style="background: rgba(239, 68, 68, 0.08); border: 1px solid rgba(239, 68, 68, 0.3); border-radius: 12px; padding: 18px; margin: 20px 0;">
          <h3 style="color: #fca5a5; margin: 0 0 6px; font-size: 15px;">Reason for Rejection:</h3>
          <p style="color: #e5e7eb; margin: 0; font-size: 14px;">${reason || 'The transaction screenshot provided was unclear, duplicated, or the amount did not match the required tier total.'}</p>
        </div>

        <p style="font-size: 14px; color: #9ca3af;">Please log in to your account to re-upload a clear receipt screenshot or try another instant payment method (JazzCash / Easypaisa / Card).</p>

        <div style="margin: 28px 0; text-align: center;">
          <a href="${env.frontendUrl}/tickets" style="background: #374151; color: #ffffff; text-decoration: none; padding: 12px 28px; border-radius: 10px; font-weight: 600; font-size: 14px; display: inline-block;">
            Review Ticket in Portal
          </a>
        </div>
      `
    )

    await client.sendMail({
      from: getMailFrom(),
      to,
      subject: `[Action Required] OZILLA FEST Ticket #${ticketId} Payment Status`,
      text: `Your payment for ticket ${ticketId} could not be verified. Reason: ${reason || 'Invalid payment receipt'}. Please log in at ${env.frontendUrl}/tickets to update.`,
      html
    })
  } catch (error) {
    console.warn(`[Email Service] Failed to deliver ticket rejection email to ${to}:`, error.message)
  }
}
