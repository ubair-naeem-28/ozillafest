import React from 'react'
import { Link } from 'react-router-dom'
import LoginForm from '../../components/auth/LoginForm'
import { assetUrl } from '../../utils/assetUrl.util'

function LoginPage() {
  return (
    <div className="login-premium-panel">
      <div className="login-brand-lockup">
        <img src={assetUrl('/assets/logo.jpeg')} alt="Ozilla Festival" className="login-brand-logo" />
        <div>
          <p className="auth-brand">Ozilla Festival 2026</p>
          <h2 className="auth-title">Welcome Back</h2>
          <p className="auth-subtitle">Continue your Ozilla Festival journey.</p>
        </div>
      </div>
      <LoginForm />
      <div className="login-auth-footer">
        <Link to="/privacy">Privacy Policy</Link>
        <Link to="/terms">Terms & Conditions</Link>
        <Link to="/contact">Need Help?</Link>
        <Link to="/contact">Contact Support</Link>
      </div>
    </div>
  )
}

export default LoginPage
