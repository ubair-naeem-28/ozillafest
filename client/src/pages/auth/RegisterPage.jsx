import React from 'react'
import { Link } from 'react-router-dom'
import RegisterForm from '../../components/auth/RegisterForm'
import { assetUrl } from '../../utils/assetUrl.util'

function RegisterPage() {
  return (
    <div className="register-premium-panel">
      <div className="register-brand-lockup">
        <img src={assetUrl('/assets/logo.jpeg')} alt="Ozilla Festival" className="register-brand-logo" />
        <div>
          <p className="auth-brand">Ozilla Festival 2026</p>
          <h2 className="auth-title">Join Ozilla Festival</h2>
          <p className="auth-subtitle">Become part of an unforgettable experience.</p>
        </div>
      </div>
      <RegisterForm />
      <div className="register-auth-footer">
        <Link to="/privacy">Privacy Policy</Link>
        <Link to="/terms">Terms & Conditions</Link>
        <Link to="/contact">Need Help?</Link>
        <Link to="/contact">Contact Support</Link>
      </div>
    </div>
  )
}

export default RegisterPage
