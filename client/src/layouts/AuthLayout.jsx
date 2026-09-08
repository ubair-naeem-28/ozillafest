import React, { useState } from 'react'
import { Outlet, useLocation, Link } from 'react-router-dom'
import { assetUrl } from '../utils/assetUrl.util'
import PlexusNetBackground from '../components/common/PlexusNetBackground'

function AuthLayout({ children }) {
  const location = useLocation()
  const isLogin = location.pathname === '/login'
  const isRegister = location.pathname === '/register'

  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [glow, setGlow] = useState({ x: 50, y: 42 })

  const handlePointerMove = (event) => {
    if (event.pointerType === 'touch') return

    const bounds = event.currentTarget.getBoundingClientRect()
    const relativeX = (event.clientX - bounds.left) / bounds.width
    const relativeY = (event.clientY - bounds.top) / bounds.height

    setTilt({
      x: (0.5 - relativeY) * 10,
      y: (relativeX - 0.5) * 10,
    })
    setGlow({ x: relativeX * 100, y: relativeY * 100 })
  }

  const resetTilt = () => {
    setTilt({ x: 0, y: 0 })
    setGlow({ x: 50, y: 42 })
  }

  return (
    <main className={`kx-page auth-page ${isLogin ? 'auth-page-login' : ''} ${isRegister ? 'auth-page-register' : ''}`}>
      {/* Background Visual Layers */}
      <PlexusNetBackground
        nodeColor="#EC4899"
        lineColor="236, 72, 153"
        secondaryColor="255, 90, 31"
        maxDistance={130}
        speed={0.4}
      />
      <div className="kx-grid" aria-hidden="true" />
      <div className="kx-noise" aria-hidden="true" />
      <div className="kx-halo kx-halo-top" aria-hidden="true" />
      <div className="kx-halo kx-halo-bottom" aria-hidden="true" />
      <div className="kx-orb kx-orb-left" aria-hidden="true" />
      <div className="kx-orb kx-orb-right" aria-hidden="true" />

      {/* 3D Perspective Stage */}
      <section className={`kx-stage ${isRegister ? 'kx-stage-wide' : ''}`}>
        <div
          className="kx-tilt"
          onPointerMove={handlePointerMove}
          onPointerLeave={resetTilt}
          onPointerCancel={resetTilt}
          style={{
            transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          }}
        >
          <div className="kx-card-shell">
            <div className="kx-shadow" aria-hidden="true" />

            {/* Glowing Border Runners */}
            <div className="kx-runners" aria-hidden="true">
              <span className="kx-runner kx-runner-top" />
              <span className="kx-runner kx-runner-right" />
              <span className="kx-runner kx-runner-bottom" />
              <span className="kx-runner kx-runner-left" />
            </div>

            {/* Main Interactive Card */}
            <article className="kx-card">
              <div
                className="kx-pointer-glow"
                aria-hidden="true"
                style={{ left: `${glow.x}%`, top: `${glow.y}%` }}
              />
              <div className="kx-card-pattern" aria-hidden="true" />

              {/* Card Header & Brand */}
              <header className="kx-header">
                <Link to="/" className="kx-logo-link" aria-label="OZILLA FEST Home">
                  <div className="kx-logo">
                    <img
                      src={assetUrl('/assets/ozilla/logo.png')}
                      alt="OZILLA FEST Logo"
                      onError={(e) => { e.currentTarget.src = assetUrl('/assets/logo.jpeg') }}
                    />
                    <i aria-hidden="true" />
                  </div>
                </Link>

                <span className="kx-tag">PAKISTAN'S PREMIER MUSIC FESTIVAL</span>
                <h1 className="kx-title">
                  {isLogin ? 'Welcome Back' : 'Join OZILLA FEST'}
                </h1>
                <p className="kx-subtitle">
                  {isLogin
                    ? 'Sign in to access your passes, tickets & workspace'
                    : 'Create your account for the ultimate festival experience'}
                </p>

                {/* Tab Switcher */}
                <div className="kx-tabs">
                  <Link
                    to={`/login${location.search}`}
                    className={`kx-tab-btn ${isLogin ? 'active' : ''}`}
                  >
                    Sign In
                  </Link>
                  <Link
                    to={`/register${location.search}`}
                    className={`kx-tab-btn ${isRegister ? 'active' : ''}`}
                  >
                    Create Account
                  </Link>
                </div>
              </header>

              {/* Form Content */}
              <div className="kx-card-body">
                {children || <Outlet />}
              </div>
            </article>
          </div>
        </div>

        {/* Festival Ribbon */}
        <div className="auth-center-ribbon">
          <span>📅 Nov 01, 2026</span>
          <span>📍 Lahore, Pakistan</span>
          <span>⭐ 10,000+ Fans</span>
        </div>
      </section>
    </main>
  )
}

export default AuthLayout
