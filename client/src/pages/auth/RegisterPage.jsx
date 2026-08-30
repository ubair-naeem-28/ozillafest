import React from 'react'
import { Link } from 'react-router-dom'
import RegisterForm from '../../components/auth/RegisterForm'

function RegisterPage() {
  return (
    <div className="auth-form-container">
      <RegisterForm />

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

export default RegisterPage
