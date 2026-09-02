import React, { useEffect, useMemo, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { GoogleLogin } from '@react-oauth/google'
import { useAuth } from '../../hooks/useAuth'
import { authService } from '../../services/authService'
import { tokenStorage } from '../../utils/tokenStorage.util'
import { startGooglePopupLogin } from '../../utils/googleAuth.util'
import { getSafeReturnTo } from '../../utils/navigation.util'

const GOOGLE_LOGO_DATA_URL =
  'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="%23EA4335" d="M12 10.2v3.9h5.5c-.2 1.2-1.4 3.6-5.5 3.6-3.3 0-6-2.8-6-6.2s2.7-6.2 6-6.2c1.9 0 3.2.8 3.9 1.5l2.7-2.6C16.9 2.5 14.6 1.5 12 1.5 6.9 1.5 2.8 6 2.8 11.5S6.9 21.5 12 21.5c6.9 0 9.2-4.9 9.2-7.4 0-.5 0-.8-.1-1.2H12z"/><path fill="%2334A853" d="M3.9 7.4l3.2 2.4C7.9 7.8 9.8 6.3 12 6.3c1.9 0 3.2.8 3.9 1.5l2.7-2.6C16.9 2.5 14.6 1.5 12 1.5 8.1 1.5 4.8 3.8 3.9 7.4z"/><path fill="%23FBBC05" d="M12 21.5c2.6 0 4.8-.9 6.4-2.6l-3-2.5c-.8.6-1.9 1.1-3.4 1.1-3 0-5.5-2-6.4-4.8l-3.3 2.6c1 3.7 4.3 6.2 9.3 6.2z"/><path fill="%234285F4" d="M21.2 14.1c.1-.4.1-.8.1-1.2s0-.8-.1-1.2H12v3.9h5.5c-.3 1.4-1.1 2.5-2.1 3.2l3 2.5c1.7-1.6 2.8-4 2.8-7.2z"/></svg>'

const pauseForTransition = () => new Promise((resolve) => setTimeout(resolve, 450))

function RegisterForm() {
  const navigate = useNavigate()
  const location = useLocation()
  const { register, checkAuth } = useAuth()
  const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID || ''
  const returnToFromQuery = new URLSearchParams(location.search).get('returnTo')
  const safeReturnTo = getSafeReturnTo(returnToFromQuery, '/dashboard')

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  })
  const [otp, setOtp] = useState('')
  const [otpSent, setOtpSent] = useState(false)
  const [otpVerified, setOtpVerified] = useState(false)
  const [otpLoading, setOtpLoading] = useState(false)
  const [otpVerifying, setOtpVerifying] = useState(false)
  const [resendSeconds, setResendSeconds] = useState(0)
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [googleLoading, setGoogleLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [touched, setTouched] = useState({
    email: false,
    phone: false,
    password: false,
    confirmPassword: false
  })

  const emailValid = /^\S+@\S+\.\S+$/.test(formData.email)
  const phoneValid = /^(\+?\d{1,3})?[\s-]?\d{10,12}$/.test(formData.phone.replace(/\s+/g, ''))
  const passwordChecks = {
    upper: /[A-Z]/.test(formData.password),
    lower: /[a-z]/.test(formData.password),
    number: /\d/.test(formData.password),
    special: /[^A-Za-z0-9]/.test(formData.password),
    length: formData.password.length >= 8
  }
  const passwordScore = Object.values(passwordChecks).filter(Boolean).length
  const passwordValid = passwordScore === 5
  const confirmPasswordValid = formData.confirmPassword.length > 0 && formData.password === formData.confirmPassword
  const hasPasswordInput = formData.password.length > 0

  const passwordStrength = useMemo(() => {
    if (!hasPasswordInput) return { label: 'Start typing', className: 'empty', percent: 8 }
    if (passwordScore <= 2) return { label: 'Weak', className: 'weak', percent: 28 }
    if (passwordScore === 3) return { label: 'Medium', className: 'medium', percent: 52 }
    if (passwordScore === 4) return { label: 'Strong', className: 'strong', percent: 78 }
    return { label: 'Excellent', className: 'excellent', percent: 100 }
  }, [hasPasswordInput, passwordScore])

  const passwordRequirements = [
    { key: 'upper', text: 'Uppercase letter', met: passwordChecks.upper },
    { key: 'lower', text: 'Lowercase letter', met: passwordChecks.lower },
    { key: 'number', text: 'Number', met: passwordChecks.number },
    { key: 'special', text: 'Special character', met: passwordChecks.special },
    { key: 'length', text: '8+ characters', met: passwordChecks.length }
  ]

  const canSubmit =
    formData.firstName.trim() &&
    formData.lastName.trim() &&
    emailValid &&
    phoneValid &&
    passwordValid &&
    confirmPasswordValid &&
    otpVerified &&
    !loading &&
    !googleLoading

  useEffect(() => {
    if (resendSeconds <= 0) return undefined
    const timer = window.setInterval(() => {
      setResendSeconds((seconds) => Math.max(0, seconds - 1))
    }, 1000)
    return () => window.clearInterval(timer)
  }, [resendSeconds])

  const resetFeedback = () => {
    setError('')
    setMessage('')
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    resetFeedback()
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (name === 'email') {
      setOtp('')
      setOtpSent(false)
      setOtpVerified(false)
      setResendSeconds(0)
    }
    if (name in touched && value.length > 0) {
      setTouched((prev) => ({ ...prev, [name]: true }))
    }
  }

  const handleBlur = (e) => {
    const { name } = e.target
    if (name in touched) {
      setTouched((prev) => ({ ...prev, [name]: true }))
    }
  }

  const handleSendOtp = async () => {
    resetFeedback()
    if (!emailValid) {
      setTouched((prev) => ({ ...prev, email: true }))
      setError('Please enter a valid email address before sending OTP.')
      return
    }

    setOtpLoading(true)
    try {
      const response = await authService.sendOtp(formData.email)
      setOtpSent(true)
      setOtpVerified(false)
      setResendSeconds(60)
      if (response.otpForDevelopment) {
        setOtp(response.otpForDevelopment)
        setMessage(`${response.message} Development OTP: ${response.otpForDevelopment}`)
      } else {
        setOtp('')
        setMessage(response.message || 'OTP has been sent to your email address. Please check your inbox.')
      }
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Unable to send OTP.')
    } finally {
      setOtpLoading(false)
    }
  }

  const handleVerifyOtp = async () => {
    resetFeedback()
    if (!emailValid || otp.trim().length < 4) {
      setError('Enter the OTP sent to your email.')
      return
    }

    setOtpVerifying(true)
    try {
      const response = await authService.verifyOtp({ email: formData.email, otp })
      setOtpVerified(true)
      setMessage(response.message || 'Email verified successfully.')
    } catch (err) {
      setOtpVerified(false)
      setError(err.response?.data?.message || err.message || 'OTP verification failed.')
    } finally {
      setOtpVerifying(false)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    resetFeedback()

    if (!emailValid) {
      setTouched((prev) => ({ ...prev, email: true }))
      setError('Please enter a valid email address.')
      return
    }

    if (!otpVerified) {
      setError('Please verify your email OTP before creating your account.')
      return
    }

    if (!phoneValid) {
      setTouched((prev) => ({ ...prev, phone: true }))
      setError('Please enter a valid mobile number.')
      return
    }

    if (!passwordValid) {
      setTouched((prev) => ({ ...prev, password: true }))
      setError('Please satisfy all password requirements.')
      return
    }

    if (!confirmPasswordValid) {
      setTouched((prev) => ({ ...prev, confirmPassword: true }))
      setError('Passwords do not match.')
      return
    }

    setLoading(true)
    try {
      await register({
        firstName: formData.firstName,
        lastName: formData.lastName,
        name: `${formData.firstName} ${formData.lastName}`.trim(),
        email: formData.email,
        phone: formData.phone,
        password: formData.password
      })
      setMessage('Account created successfully. Preparing your festival workspace...')
      await pauseForTransition()
      navigate(safeReturnTo)
    } catch (err) {
      const status = err.response?.status
      const apiMessage = err.response?.data?.message || 'Registration failed'
      const normalized = apiMessage.toLowerCase()
      if (status === 409 || normalized.includes('already') || normalized.includes('exists')) {
        setError('Account already exists with this email or phone number')
      } else {
        setError(apiMessage)
      }
    } finally {
      setLoading(false)
    }
  }

  const handleGoogleSuccess = async (credentialResponse) => {
    resetFeedback()
    setGoogleLoading(true)
    try {
      const response = await authService.googleAuth(credentialResponse.credential)
      tokenStorage.setToken(response.token)
      await checkAuth()
      setMessage('Google sign-up successful. Preparing your festival workspace...')
      await pauseForTransition()
      navigate(safeReturnTo)
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Google sign-up failed')
    } finally {
      setGoogleLoading(false)
    }
  }

  const handleGoogleRegister = async () => {
    resetFeedback()
    if (!googleClientId) {
      setError('Google Sign-In configuration required: Please add VITE_GOOGLE_CLIENT_ID in client/.env')
      return
    }

    setGoogleLoading(true)
    try {
      await startGooglePopupLogin({
        clientId: googleClientId,
        onCode: async (code) => {
          const response = await authService.googleCodeLogin(code, 'postmessage')
          tokenStorage.setToken(response.token)
          await checkAuth()
          setMessage('Google sign-up successful. Preparing your festival workspace...')
          await pauseForTransition()
          navigate(safeReturnTo)
        }
      })
    } catch (err) {
      const message = err.response?.data?.message || err.message || 'Google sign-up failed'
      if (!message.toLowerCase().includes('cancel')) {
        setError(message)
      }
    } finally {
      setGoogleLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="auth-form register-form-premium">
      {error && <div className="auth-alert auth-alert-error register-alert">{error}</div>}
      {message && <div className="auth-alert auth-alert-success register-alert">{message}</div>}

      <div className="auth-social-wrap" style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        {googleClientId ? (
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={() => setError('Google Sign-Up failed. Please try again.')}
              theme="filled_black"
              shape="pill"
              size="large"
              width="100%"
              text="signup_with"
            />
          </div>
        ) : (
          <button
            type="button"
            className="auth-btn auth-btn-outline auth-btn-google register-google-btn"
            onClick={handleGoogleRegister}
            disabled={googleLoading || loading}
          >
            <img src={GOOGLE_LOGO_DATA_URL} alt="Google logo" className="auth-google-logo" />
            <span>{googleLoading ? 'Opening Google...' : 'Sign up with Google'}</span>
          </button>
        )}
      </div>

      <div className="auth-divider">
        <span>Or create with email</span>
      </div>

      <div className="auth-row register-name-row">
        <div className="auth-field register-field-shell">
          <label className="auth-label" htmlFor="register-first-name">First Name</label>
          <input id="register-first-name" type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="auth-input" autoComplete="given-name" required />
        </div>
        <div className="auth-field register-field-shell">
          <label className="auth-label" htmlFor="register-last-name">Last Name</label>
          <input id="register-last-name" type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="auth-input" autoComplete="family-name" required />
        </div>
      </div>

      <div className="auth-field register-field-shell">
        <label className="auth-label" htmlFor="register-email">Email Address</label>
        <input
          id="register-email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`auth-input ${touched.email && !emailValid ? 'auth-input-invalid' : ''}`}
          placeholder="you@example.com"
          autoComplete="email"
          required
        />
      </div>
      {touched.email && !emailValid && <p className="auth-field-error">Please enter a valid email address.</p>}

      <div className={`register-otp-card register-otp-card-desktop ${otpVerified ? 'register-otp-verified' : ''}`}>
        <div>
          <p className="register-otp-kicker">Email Verification</p>
          <strong>{otpVerified ? 'Email verified' : otpSent ? 'Enter your OTP' : 'Verify before signup'}</strong>
          <span className="register-otp-status">
            {otpVerified ? 'Verified with premium security' : resendSeconds > 0 ? `Resend available in ${resendSeconds}s` : 'One-time code expires in 10 minutes'}
          </span>
        </div>
        <div className="register-otp-controls">
          <button type="button" className="register-mini-btn" onClick={handleSendOtp} disabled={otpLoading || !emailValid || otpVerified || resendSeconds > 0}>
            {otpLoading ? 'Sending...' : otpSent ? 'Resend OTP' : 'Send OTP'}
          </button>
          <input
            type="text"
            value={otp}
            onChange={(event) => {
              resetFeedback()
              setOtp(event.target.value.replace(/\D/g, '').slice(0, 6))
              setOtpVerified(false)
            }}
            className="register-otp-input"
            placeholder="6-digit OTP"
            inputMode="numeric"
            autoComplete="one-time-code"
            disabled={!otpSent || otpVerified}
          />
          <button type="button" className="register-mini-btn register-mini-btn-dark" onClick={handleVerifyOtp} disabled={!otpSent || otpVerified || otpVerifying}>
            {otpVerifying ? 'Verifying...' : otpVerified ? 'Verified' : 'Verify'}
          </button>
        </div>
        {otpVerified && <span className="register-success-check" aria-hidden="true">✓</span>}
      </div>

      <div className="auth-field register-field-shell">
        <label className="auth-label" htmlFor="register-phone">Phone Number</label>
        <input
          id="register-phone"
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`auth-input ${touched.phone && !phoneValid ? 'auth-input-invalid' : ''}`}
          placeholder="+92 3XX XXXXXXX"
          autoComplete="tel"
          required
        />
      </div>
      {touched.phone && !phoneValid && <p className="auth-field-error">Please enter a valid mobile number.</p>}

      <div className="auth-field register-field-shell">
        <label className="auth-label" htmlFor="register-password">Password</label>
        <div className="auth-input-wrap">
          <input
            id="register-password"
            type={showPassword ? 'text' : 'password'}
            name="password"
            value={formData.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`auth-input auth-input-with-icon ${touched.password && !passwordValid ? 'auth-input-invalid' : ''}`}
            autoComplete="new-password"
            required
          />
          <button type="button" className="auth-input-icon-btn" onClick={() => setShowPassword((prev) => !prev)} aria-label={showPassword ? 'Hide password' : 'Show password'}>
            {showPassword ? '\u{1F648}' : '\u{1F441}'}
          </button>
        </div>
      </div>

      <div className={`register-strength register-strength-${passwordStrength.className}`}>
        <div className="register-strength-top">
          <span>Password Strength</span>
          <strong>{passwordStrength.label}</strong>
        </div>
        <div className="register-strength-track">
          <span style={{ width: `${passwordStrength.percent}%` }} />
        </div>
      </div>

      <ul className="auth-password-rules register-password-rules">
        {passwordRequirements.map((requirement) => {
          const stateClass = requirement.met ? 'auth-rule-met' : hasPasswordInput ? 'auth-rule-unmet' : 'auth-rule-neutral'
          return (
            <li key={requirement.key} className={`auth-password-rule-item ${stateClass}`}>
              <span className="auth-rule-icon" aria-hidden="true">{requirement.met ? '\u2713' : '\u2717'}</span>
              <span>{requirement.text}</span>
            </li>
          )
        })}
      </ul>

      <div className="auth-field register-field-shell">
        <label className="auth-label" htmlFor="register-confirm-password">Confirm Password</label>
        <div className="auth-input-wrap">
          <input
            id="register-confirm-password"
            type={showConfirmPassword ? 'text' : 'password'}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`auth-input auth-input-with-icon ${touched.confirmPassword && !confirmPasswordValid ? 'auth-input-invalid' : ''}`}
            autoComplete="new-password"
            required
          />
          <button type="button" className="auth-input-icon-btn" onClick={() => setShowConfirmPassword((prev) => !prev)} aria-label={showConfirmPassword ? 'Hide confirm password' : 'Show confirm password'}>
            {showConfirmPassword ? '\u{1F648}' : '\u{1F441}'}
          </button>
        </div>
      </div>
      {touched.confirmPassword && !confirmPasswordValid && <p className="auth-field-error">Passwords do not match.</p>}

      <div className={`register-otp-card register-otp-card-mobile ${otpVerified ? 'register-otp-verified' : ''}`}>
        <div>
          <p className="register-otp-kicker">Email Verification</p>
          <strong>{otpVerified ? 'Email verified' : otpSent ? 'Enter your OTP' : 'Verify before signup'}</strong>
          <span className="register-otp-status">
            {otpVerified ? 'Verified with premium security' : resendSeconds > 0 ? `Resend available in ${resendSeconds}s` : 'One-time code expires in 10 minutes'}
          </span>
        </div>
        <div className="register-otp-controls">
          <button type="button" className="register-mini-btn" onClick={handleSendOtp} disabled={otpLoading || !emailValid || otpVerified || resendSeconds > 0}>
            {otpLoading ? 'Sending...' : otpSent ? 'Resend OTP' : 'Send OTP'}
          </button>
          <input
            type="text"
            value={otp}
            onChange={(event) => {
              resetFeedback()
              setOtp(event.target.value.replace(/\D/g, '').slice(0, 6))
              setOtpVerified(false)
            }}
            className="register-otp-input"
            placeholder="6-digit OTP"
            inputMode="numeric"
            autoComplete="one-time-code"
            aria-label="Email OTP code"
            disabled={!otpSent || otpVerified}
          />
          <button type="button" className="register-mini-btn register-mini-btn-dark" onClick={handleVerifyOtp} disabled={!otpSent || otpVerified || otpVerifying}>
            {otpVerifying ? 'Verifying...' : otpVerified ? 'Verified' : 'Verify'}
          </button>
        </div>
        {otpVerified && <span className="register-success-check" aria-hidden="true">✓</span>}
      </div>

      <button type="submit" disabled={!canSubmit} className="auth-btn auth-btn-primary register-create-btn">
        {loading ? (
          <span className="login-loading-wrap">
            <span className="login-loading-dot" />
            Preparing Your Experience...
          </span>
        ) : (
          <span>Create Account</span>
        )}
      </button>

      <div className="register-login-line">
        <span>Already have an account?</span>
        <Link to={`/login?${new URLSearchParams({ returnTo: safeReturnTo }).toString()}`}>
          Sign In
        </Link>
      </div>

      <div className="register-trust-grid" aria-label="Registration trust indicators">
        <span>Secure Registration</span>
        <span>Instant Verification</span>
        <span>Protected Account</span>
        <span>Google Verified</span>
      </div>
    </form>
  )
}

export default RegisterForm
