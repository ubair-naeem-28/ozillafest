import React from 'react'
import { Link } from 'react-router-dom'
import LoginForm from '../../components/auth/LoginForm'

function LoginPage() {
  return (
    <div className="auth-form-container">
      <LoginForm />

      <div className="auth-footer-links">
        <Link to="/privacy">Privacy Policy</Link>
        <span>•</span>
        <Link to="/terms">Terms of Service</Link>
        <span>•</span>
        <Link to="/#contact">Need Help?</Link>
      </div>
    </div>
  )
}

export default LoginPage
