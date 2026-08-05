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

  return env.smtpUser ? `Ozilla Festival <${env.smtpUser}>` : 'Ozilla Festival'
}

function getTransporter() {
  if (transporter) return transporter

  if (!env.smtpHost || !env.smtpUser || !env.smtpPass) {
    throw new Error('SMTP is not configured. Please set SMTP_HOST, SMTP_USER, and SMTP_PASS.')
  }

  if (env.smtpUser.includes('your_email') || env.smtpPass.includes('your_email_app_password')) {
    throw new Error('SMTP is still using placeholder credentials. Replace SMTP_USER and SMTP_PASS in server/.env.')
  }

  transporter = nodemailer.createTransport({
    host: env.smtpHost,
    port: env.smtpPort,
    secure: env.smtpSecure,
    auth: {
      user: env.smtpUser,
      pass: env.smtpPass
    }
  })

  return transporter
}

export async function sendOtpEmail({ to, otpCode }) {
  const client = getTransporter()
  await client.sendMail({
    from: getMailFrom(),
    to,
    subject: 'Your Ozilla Festival OTP Code',
    text: `Your OTP code is ${otpCode}. It expires in 10 minutes.`,
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; background:#fff8ef; padding:24px;">
        <div style="max-width:520px; margin:auto; background:#ffffff; border:1px solid #f1d59a; border-radius:18px; padding:24px;">
          <h2 style="color:#5b1533; margin:0 0 12px;">Ozilla Festival</h2>
          <p style="color:#334; margin:0 0 14px;">Use this one-time code to verify your email address:</p>
          <p style="font-size:32px; font-weight:bold; letter-spacing:8px; color:#111; background:#fff3d8; border-radius:12px; padding:14px 18px; text-align:center;">${otpCode}</p>
          <p style="color:#667; margin:14px 0 0;">This code expires in 10 minutes. If you did not request it, you can ignore this email.</p>
        </div>
      </div>
    `
  })
}

export async function sendPasswordResetEmail({ to, resetUrl }) {
  const client = getTransporter()
  await client.sendMail({
    from: getMailFrom(),
    to,
    subject: 'Reset your Ozilla Festival password',
    text: `Use this link to reset your password: ${resetUrl}\nThis link expires in 30 minutes.`,
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2 style="color: #5b1533;">Ozilla Festival</h2>
        <p>Use the link below to reset your password:</p>
        <p><a href="${resetUrl}" style="color: #5b1533;">Reset Password</a></p>
        <p>This link expires in 30 minutes.</p>
      </div>
    `
  })
}
