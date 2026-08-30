import React from 'react'
import { Outlet, useLocation, Link } from 'react-router-dom'
import { assetUrl } from '../utils/assetUrl.util'
import PlexusNetBackground from '../components/common/PlexusNetBackground'

function AuthLayout({ children }) {
  const location = useLocation()
  const isLogin = location.pathname === '/login'
  const isRegister = location.pathname === '/register'

  return (
    <div className={`auth-page ${isLogin ? 'auth-page-login' : ''} ${isRegister ? 'auth-page-register' : ''}`}>
      <PlexusNetBackground
        nodeColor="#EC4899"
        lineColor="236, 72, 153"
        secondaryColor="255, 90, 31"
        maxDistance={135}
        speed={0.5}
      />
      <div className="auth-ambient-blob-1" aria-hidden="true" />
      <div className="auth-ambient-blob-2" aria-hidden="true" />

      <div className="auth-centered-shell">
        {/* Centered Brand & Title Header */}
        <div className="auth-center-header">
          <Link to="/" className="auth-center-logo-wrap" aria-label="Go to Home">
            <img
              src={assetUrl('/assets/ozilla/logo.png')}
              alt="Ozilla Festival"
              className="auth-center-logo"
              onError={(e) => { e.currentTarget.src = assetUrl('/assets/logo.jpeg') }}
            />
            <div className="auth-center-brand-text">
              <strong>OZILLA FESTIVAL</strong>
              <span>OFFICIAL PORTAL · 2026</span>
            </div>
          </Link>

          <span className="auth-center-tag">PAKISTAN'S PREMIER MUSIC FESTIVAL</span>

          <h1 className="auth-center-title">
            {isLogin ? 'Welcome Back to Ozilla' : 'Join Ozilla Festival 2026'}
          </h1>
        </div>

        {/* Centered Sleek Glass Form Card */}
        <section className="auth-card">
          <div className="auth-card-tabs">
            <Link
              to={`/login${location.search}`}
              className={`auth-tab-btn ${isLogin ? 'active' : ''}`}
            >
              Sign In
            </Link>
            <Link
              to={`/register${location.search}`}
              className={`auth-tab-btn ${isRegister ? 'active' : ''}`}
            >
              Create Account
            </Link>
          </div>

          <div className="auth-card-body">
            {children || <Outlet />}
          </div>
        </section>

        {/* Centered Event Date & Security Ribbon */}
        <div className="auth-center-ribbon">
          <span>📅 Nov 01, 2026</span>
          <span>📍 Lahore, Pakistan</span>
          <span>⭐ 10,000+ Fans</span>
        </div>
      </div>
    </div>
  )
}

export default AuthLayout
