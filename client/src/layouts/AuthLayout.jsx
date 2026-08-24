import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { assetUrl } from '../utils/assetUrl.util'

function AuthLayout({ children }) {
  const location = useLocation()
  const isLogin = location.pathname === '/login'
  const isRegister = location.pathname === '/register'

  return (
    <div className={`auth-page ${isLogin ? 'auth-page-login' : ''} ${isRegister ? 'auth-page-register' : ''}`}>
      <div className="auth-shell">
        <aside className="auth-side-panel">
          <div className="auth-side-copy">
            <div className="auth-side-logo-wrap">
              <img
                src={assetUrl('/assets/company-logo.jpeg')}
                alt="Ozilla Festival"
                className="auth-side-logo"
              />
            </div>
            <h1 className="auth-side-title">Premium Concert & Event</h1>
            <p className="auth-side-text">
              Continue with your account to purchase tickets and manage festival access.
            </p>
          </div>
        </aside>

        <section className="auth-card">
          {children || <Outlet />}
        </section>
      </div>
    </div>
  )
}

export default AuthLayout
