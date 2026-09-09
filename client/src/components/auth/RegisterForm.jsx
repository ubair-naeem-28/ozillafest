import React, { useEffect, useMemo, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { authService } from '../../services/authService'
import { tokenStorage } from '../../utils/tokenStorage.util'
import { startGooglePopupLogin } from '../../utils/googleAuth.util'
import { getSafeReturnTo } from '../../utils/navigation.util'

function UserIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  )
}

function PhoneIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function LockIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="4" y="10" width="16" height="11" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
    </svg>
  )
}

function EyeIcon({ hidden = false, ...props }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
      {hidden && <line x1="1" y1="1" x2="23" y2="23" />}
    </svg>
  )
}

function ArrowIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

function GoogleIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="#4285F4"
        d="M21.6 12.23c0-.71-.06-1.4-.18-2.06H12v3.9h5.38a4.6 4.6 0 0 1-2 3.01v2.53h3.23c1.9-1.75 2.99-4.32 2.99-7.38Z"
      />
      <path
        fill="#34A853"
        d="M12 22c2.7 0 4.97-.9 6.62-2.39l-3.23-2.53c-.9.6-2.04.96-3.39.96-2.61 0-4.82-1.76-5.61-4.13H3.05v2.61A10 10 0 0 0 12 22Z"
      />
      <path
        fill="#FBBC05"
        d="M6.39 13.91A6.02 6.02 0 0 1 6.08 12c0-.66.11-1.3.31-1.91V7.48H3.05A10 10 0 0 0 2 12c0 1.61.39 3.14 1.05 4.52l3.34-2.61Z"
      />
      <path
        fill="#EA4335"
        d="M12 5.96c1.47 0 2.79.51 3.82 1.5l2.87-2.87A9.63 9.63 0 0 0 12 2a10 10 0 0 0-8.95 5.48l3.34 2.61C7.18 7.72 9.39 5.96 12 5.96Z"
      />
    </svg>
  )
}

const pauseForTransition = () => new Promise((resolve) => setTimeout(resolve, 450))

function RegisterForm() {
  const navigate = useNavigate()
  const location = useLocation()
  const { register, checkAuth } = useAuth()
  const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID || '231763775562-gc86oo86thvcfrnlt9u4i3m4emdaga7e.apps.googleusercontent.com'
  const returnToFromQuery = new URLSearchParams(location.search).get('returnTo')
  const safeReturnTo = getSafeReturnTo(returnToFromQuery, '/dashboard')

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  })
  const [focusedField, setFocusedField] = useState(null)
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
    confirmPassword: false,
  })

  const emailValid = /^\S+@\S+\.\S+$/.test(formData.email)
  const phoneValid = /^(\+?\d{1,3})?[\s-]?\d{10,12}$/.test(formData.phone.replace(/\s+/g, ''))
  const passwordChecks = {
    upper: /[A-Z]/.test(formData.password),
    lower: /[a-z]/.test(formData.password),
    number: /\d/.test(formData.password),
    special: /[^A-Za-z0-9]/.test(formData.password),
    length: formData.password.length >= 8,
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
    { key: 'length', text: '8+ characters', met: passwordChecks.length },
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
    setFocusedField(null)
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
      if (
        response?.emailDelivery === 'failed' ||
        (typeof response?.message === 'string' && response.message.toLowerCase().includes('delivery failed') && !response?.devOtp)
      ) {
        setOtpSent(false)
        setError(
          response.emailError ||
          'Email delivery failed: SMTP credentials (SMTP_USER and SMTP_PASS) are not configured on the backend server.'
        )
      } else {
        setOtpSent(true)
        setOtpVerified(false)
        setResendSeconds(60)
        if (response?.devOtp) {
          setOtp(String(response.devOtp))
        } else {
          setOtp('')
        }
        setMessage(response.message || 'OTP code has been sent to your email. Please check your inbox.')
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
        password: formData.password,
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

  const handleGoogleRegister = async () => {
    resetFeedback()
    setGoogleLoading(true)
    try {
      const activeClientId = googleClientId || '231763775562-gc86oo86thvcfrnlt9u4i3m4emdaga7e.apps.googleusercontent.com'

      await startGooglePopupLogin({
        clientId: activeClientId,
        onProfile: async (profile, accessToken) => {
          const response = await authService.googleAuth(accessToken, profile)
          tokenStorage.setToken(response.token)
          await checkAuth()
          setMessage(`Google sign-up verified as ${profile.email}. Welcome to OZILLA FEST!`)
          await pauseForTransition()
          navigate(safeReturnTo)
        },
      })
    } catch (err) {
      const message = err.response?.data?.message || err.message || 'Google sign-up failed'
      if (!message.toLowerCase().includes('cancel') && !message.toLowerCase().includes('closed')) {
        setError(message)
      }
    } finally {
      setGoogleLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="kx-form">
      {error && (
        <div className="kx-alert kx-alert-error" role="alert">
          {error}
        </div>
      )}
      {message && (
        <div className="kx-alert kx-alert-success" role="alert">
          {message}
        </div>
      )}

      {/* Google Sign Up */}
      <button
        type="button"
        className="kx-google"
        onClick={handleGoogleRegister}
        disabled={googleLoading || loading}
      >
        <GoogleIcon />
        <span>{googleLoading ? 'Connecting to Google...' : 'Sign up with Google'}</span>
        <i aria-hidden="true" />
      </button>

      {/* Divider */}
      <div className="kx-divider">
        <span />
        <em>or register with email</em>
        <span />
      </div>

      {/* First & Last Name */}
      <div className="kx-grid-row">
        <label
          className={`kx-field ${focusedField === 'firstName' ? 'kx-focused' : ''}`}
        >
          <UserIcon className="kx-field-icon" />
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            placeholder="First Name"
            autoComplete="given-name"
            required
            onChange={handleChange}
            onFocus={() => setFocusedField('firstName')}
            onBlur={handleBlur}
          />
          <span className="kx-field-light" aria-hidden="true" />
        </label>

        <label
          className={`kx-field ${focusedField === 'lastName' ? 'kx-focused' : ''}`}
        >
          <UserIcon className="kx-field-icon" />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            placeholder="Last Name"
            autoComplete="family-name"
            required
            onChange={handleChange}
            onFocus={() => setFocusedField('lastName')}
            onBlur={handleBlur}
          />
          <span className="kx-field-light" aria-hidden="true" />
        </label>
      </div>

      {/* Email Address */}
      <label
        className={`kx-field ${focusedField === 'email' ? 'kx-focused' : ''} ${
          touched.email && !emailValid ? 'kx-field-invalid' : ''
        }`}
      >
        <MailIcon className="kx-field-icon" />
        <input
          type="email"
          name="email"
          value={formData.email}
          placeholder="Email address"
          autoComplete="email"
          required
          onChange={handleChange}
          onFocus={() => setFocusedField('email')}
          onBlur={handleBlur}
        />
        <span className="kx-field-light" aria-hidden="true" />
      </label>
      {touched.email && !emailValid && (
        <p className="kx-field-error-msg">Please enter a valid email address.</p>
      )}

      {/* Email OTP Verification Block */}
      <div className={`kx-otp-box ${otpVerified ? 'kx-otp-verified' : ''}`}>
        <div className="kx-otp-meta">
          <span className="kx-otp-kicker">Email Verification</span>
          <strong>{otpVerified ? '✓ Email verified' : otpSent ? 'Enter 6-digit code' : 'Verify email before submit'}</strong>
          <span className="kx-otp-subtext">
            {otpVerified
              ? 'Security verified'
              : resendSeconds > 0
              ? `Resend available in ${resendSeconds}s`
              : 'Code will be sent to your email'}
          </span>
        </div>

        <div className="kx-otp-controls">
          <button
            type="button"
            className="kx-otp-btn"
            onClick={handleSendOtp}
            disabled={otpLoading || !emailValid || otpVerified || resendSeconds > 0}
          >
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
            className="kx-otp-input"
            placeholder="Enter 6-digit OTP"
            inputMode="numeric"
            autoComplete="one-time-code"
            disabled={!otpSent || otpVerified}
          />
          <button
            type="button"
            className="kx-otp-btn kx-otp-btn-accent"
            onClick={handleVerifyOtp}
            disabled={!otpSent || otpVerified || otpVerifying}
          >
            {otpVerifying ? 'Verifying...' : otpVerified ? 'Verified' : 'Verify'}
          </button>
        </div>
      </div>

      {/* Phone Number */}
      <label
        className={`kx-field ${focusedField === 'phone' ? 'kx-focused' : ''} ${
          touched.phone && !phoneValid ? 'kx-field-invalid' : ''
        }`}
      >
        <PhoneIcon className="kx-field-icon" />
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          placeholder="Phone (+92 3XX XXXXXXX)"
          autoComplete="tel"
          required
          onChange={handleChange}
          onFocus={() => setFocusedField('phone')}
          onBlur={handleBlur}
        />
        <span className="kx-field-light" aria-hidden="true" />
      </label>
      {touched.phone && !phoneValid && (
        <p className="kx-field-error-msg">Please enter a valid mobile number.</p>
      )}

      {/* Password */}
      <label
        className={`kx-field ${focusedField === 'password' ? 'kx-focused' : ''} ${
          touched.password && !passwordValid ? 'kx-field-invalid' : ''
        }`}
      >
        <LockIcon className="kx-field-icon" />
        <input
          type={showPassword ? 'text' : 'password'}
          name="password"
          value={formData.password}
          placeholder="Create Password"
          autoComplete="new-password"
          required
          onChange={handleChange}
          onFocus={() => setFocusedField('password')}
          onBlur={handleBlur}
        />
        <button
          className="kx-password-toggle"
          type="button"
          onClick={() => setShowPassword((current) => !current)}
          aria-label={showPassword ? 'Hide password' : 'Show password'}
        >
          <EyeIcon hidden={showPassword} />
        </button>
        <span className="kx-field-light" aria-hidden="true" />
      </label>

      {/* Password Strength Meter */}
      <div className={`kx-strength kx-strength-${passwordStrength.className}`}>
        <div className="kx-strength-header">
          <span>Password Strength</span>
          <strong>{passwordStrength.label}</strong>
        </div>
        <div className="kx-strength-bar-track">
          <span style={{ width: `${passwordStrength.percent}%` }} />
        </div>
      </div>

      {/* Password Requirements */}
      <ul className="kx-pwd-rules">
        {passwordRequirements.map((requirement) => {
          const stateClass = requirement.met
            ? 'kx-rule-met'
            : hasPasswordInput
            ? 'kx-rule-unmet'
            : 'kx-rule-neutral'
          return (
            <li key={requirement.key} className={`kx-pwd-rule ${stateClass}`}>
              <span className="kx-rule-badge">{requirement.met ? '✓' : '•'}</span>
              <span>{requirement.text}</span>
            </li>
          )
        })}
      </ul>

      {/* Confirm Password */}
      <label
        className={`kx-field ${focusedField === 'confirmPassword' ? 'kx-focused' : ''} ${
          touched.confirmPassword && !confirmPasswordValid ? 'kx-field-invalid' : ''
        }`}
      >
        <LockIcon className="kx-field-icon" />
        <input
          type={showConfirmPassword ? 'text' : 'password'}
          name="confirmPassword"
          value={formData.confirmPassword}
          placeholder="Confirm Password"
          autoComplete="new-password"
          required
          onChange={handleChange}
          onFocus={() => setFocusedField('confirmPassword')}
          onBlur={handleBlur}
        />
        <button
          className="kx-password-toggle"
          type="button"
          onClick={() => setShowConfirmPassword((current) => !current)}
          aria-label={showConfirmPassword ? 'Hide confirm password' : 'Show confirm password'}
        >
          <EyeIcon hidden={showConfirmPassword} />
        </button>
        <span className="kx-field-light" aria-hidden="true" />
      </label>
      {touched.confirmPassword && !confirmPasswordValid && (
        <p className="kx-field-error-msg">Passwords do not match.</p>
      )}

      {/* Submit Button */}
      <button
        className="kx-sign-in"
        type="submit"
        disabled={!canSubmit}
      >
        <span className="kx-button-glow" aria-hidden="true" />
        <span className="kx-button-sheen" aria-hidden="true" />

        {loading ? (
          <span className="kx-spinner" aria-label="Creating account..." />
        ) : (
          <span className="kx-button-copy">
            Create Account
            <ArrowIcon />
          </span>
        )}
      </button>

      {/* Switch to Login */}
      <p className="kx-signup">
        Already have an account?{' '}
        <Link to={`/login?${new URLSearchParams({ returnTo: safeReturnTo }).toString()}`}>
          Sign In
        </Link>
      </p>

      {/* Trust Badges */}
      <div className="kx-trust-grid" aria-label="Security indicators">
        <span>🔒 Secure Sign Up</span>
        <span>⚡ Instant Access</span>
        <span>🛡️ Protected</span>
        <span>✓ Google Verified</span>
      </div>
    </form>
  )
}

export default RegisterForm
