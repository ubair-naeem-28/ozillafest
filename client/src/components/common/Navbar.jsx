import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

const navGroups = [
  { label: 'Home', to: '/dashboard' },
  {
    label: 'Events',
    items: [
      { label: 'Celebrity Singers', to: '/prismfest/celebrities' },
      { label: 'Future Events', to: '/prismfest/future' }
    ]
  },
  { label: 'History', to: '/history' },
  { label: 'Hotels', to: '/hotels' },
  { label: 'Restaurants', to: '/restaurants' },
  { label: 'Discounts', to: '/discounts' },
  { label: 'Facilities', to: '/facilities' },
  { label: 'Sponsorship', to: '/sponsorship' },
  { label: 'My Tickets', to: '/tickets/my-tickets' },
  { label: 'Contact', to: '/contact' },
  { label: 'Ticket Portal', to: '/tickets', cta: true }
]

function userName(user) {
  return user?.firstName || user?.name || user?.email || 'Account'
}

function Navbar() {
  const { user, isAdmin, logout } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [accountOpen, setAccountOpen] = useState(false)
  const [visibleStart, setVisibleStart] = useState(0)
  const [openGroup, setOpenGroup] = useState(null)
  const lastScrollYRef = useRef(0)
  const frameRef = useRef(null)
  const groupCloseTimerRef = useRef(null)

  const navItems = useMemo(() => {
    const items = [...navGroups]
    if (isAdmin) items.push({ label: 'Admin', to: '/admin/dashboard' })
    return items
  }, [isAdmin])

  const visibleCount = 6
  const maxStart = Math.max(navItems.length - visibleCount, 0)
  const visibleLinks = navItems.slice(visibleStart, visibleStart + visibleCount)

  useEffect(() => {
    const onScroll = () => {
      if (frameRef.current) return
      frameRef.current = window.requestAnimationFrame(() => {
        const currentY = window.scrollY
        const delta = currentY - lastScrollYRef.current
        setScrolled(currentY > 12)

        if (!mobileOpen && Math.abs(delta) > 6) {
          setHidden(currentY > 130 && delta > 0)
        }

        if (currentY <= 16) setHidden(false)
        lastScrollYRef.current = currentY
        frameRef.current = null
      })
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (frameRef.current) window.cancelAnimationFrame(frameRef.current)
    }
  }, [mobileOpen])

  useEffect(() => {
    setMobileOpen(false)
    setAccountOpen(false)
    setOpenGroup(null)
  }, [location.pathname])

  useEffect(() => {
    setVisibleStart((current) => Math.min(current, maxStart))
  }, [maxStart])

  useEffect(() => {
    return () => {
      if (groupCloseTimerRef.current) window.clearTimeout(groupCloseTimerRef.current)
    }
  }, [])

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  const openNavGroup = (label) => {
    if (groupCloseTimerRef.current) {
      window.clearTimeout(groupCloseTimerRef.current)
      groupCloseTimerRef.current = null
    }
    setOpenGroup(label)
  }

  const closeNavGroupSoon = () => {
    if (groupCloseTimerRef.current) window.clearTimeout(groupCloseTimerRef.current)
    groupCloseTimerRef.current = window.setTimeout(() => {
      setOpenGroup(null)
      groupCloseTimerRef.current = null
    }, 220)
  }

  const navClass = ({ isActive }) => `site-nav-rail-item ${isActive ? 'active' : ''}`
  const groupActive = (item) => item.items?.some((link) => location.pathname === link.to || location.pathname.startsWith(`${link.to}/`))

  return (
    <nav className={`site-nav booking-nav navbar-fixed ${scrolled ? 'scrolled' : ''} ${hidden ? 'nav-hidden' : ''}`} aria-label="Main navigation">
      <div className="site-nav-main-shell navbar-repair-shell">
        <Link to="/" className="site-brand-cluster navbar-repair-brand" aria-label="Ozilla Festival home">
          <span className="site-brand-logo-shell">
            <img src="/assets/ozilla/logo.png" alt="" className="site-brand-logo-img" />
          </span>
          <span className="site-brand-title">Ozilla Festival</span>
        </Link>

        <div className="navbar-repair-links">
          <button
            type="button"
            className={`navbar-nav-arrow ${visibleStart === 0 ? 'disabled' : ''}`}
            onClick={() => setVisibleStart((current) => Math.max(0, current - 1))}
            disabled={visibleStart === 0}
            aria-label="Show previous navigation links"
          >
            ‹
          </button>

          {visibleLinks.map((item) => {
            if (!item.items) {
              return (
                <NavLink key={item.to} to={item.to} className={({ isActive }) => `${navClass({ isActive })} ${item.cta ? 'site-nav-ticket-link' : ''}`}>
                  {item.label}
                </NavLink>
              )
            }

            return (
              <div
                key={item.label}
                className={`navbar-more navbar-nav-group ${openGroup === item.label ? 'open' : ''}`}
                onMouseEnter={() => openNavGroup(item.label)}
                onMouseLeave={closeNavGroupSoon}
                onFocus={() => openNavGroup(item.label)}
                onBlur={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget)) closeNavGroupSoon()
                }}
              >
                <button
                  type="button"
                  className={`site-nav-rail-item navbar-more-button ${groupActive(item) ? 'active' : ''} ${item.cta ? 'site-nav-ticket-link' : ''}`}
                  onClick={() => {
                    if (openGroup === item.label) {
                      closeNavGroupSoon()
                    } else {
                      openNavGroup(item.label)
                    }
                  }}
                  aria-expanded={openGroup === item.label}
                >
                  {item.label}
                  <span aria-hidden="true">v</span>
                </button>
                <div className="navbar-more-menu">
                  {item.items.map((link) => (
                    <NavLink key={link.to} to={link.to} className={navClass}>
                      {link.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            )
          })}

          <button
            type="button"
            className={`navbar-nav-arrow ${visibleStart >= maxStart ? 'disabled' : ''}`}
            onClick={() => setVisibleStart((current) => Math.min(maxStart, current + 1))}
            disabled={visibleStart >= maxStart}
            aria-label="Show next navigation links"
          >
            ›
          </button>
        </div>

        <div className="navbar-repair-actions">
          {user ? (
            <div className={`navbar-account ${accountOpen ? 'open' : ''}`}>
              <button type="button" className="navbar-account-button" onClick={() => setAccountOpen((open) => !open)} aria-expanded={accountOpen}>
                <span>{String(userName(user)).slice(0, 1).toUpperCase()}</span>
                <strong>{userName(user)}</strong>
              </button>
              <div className="navbar-account-menu">
                <Link to="/account">Account</Link>
                <Link to="/tickets/my-tickets">My Tickets</Link>
                {isAdmin && <Link to="/admin/dashboard">Admin</Link>}
                <button type="button" onClick={handleLogout}>Logout</button>
              </div>
            </div>
          ) : (
            <div className="site-nav-auth-pills">
              <Link to="/login" className="site-nav-login-pill">Login</Link>
              <Link to="/register" className="site-nav-register-pill">Sign Up</Link>
            </div>
          )}

          <button
            type="button"
            className={`site-mobile-icon-btn site-mobile-menu-trigger ${mobileOpen ? 'open' : ''}`}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
          >
            <span className="site-burger-line" />
            <span className="site-burger-line" />
            <span className="site-burger-line" />
          </button>
        </div>
      </div>

      <div className={`site-mobile-menu-overlay navbar-mobile-overlay ${mobileOpen ? 'open' : ''}`} onClick={() => setMobileOpen(false)}>
        <div className={`site-mobile-menu-drawer navbar-mobile-panel ${mobileOpen ? 'open' : ''}`} onClick={(event) => event.stopPropagation()}>
          <div className="site-mobile-menu-header">
            <div>
              <p className="site-mobile-menu-kicker">Ozilla Festival</p>
              <h2 className="site-mobile-menu-title">Menu</h2>
            </div>
            <button type="button" className="site-mobile-menu-close" onClick={() => setMobileOpen(false)} aria-label="Close menu">
              x
            </button>
          </div>

          <div className="site-mobile-menu-links">
            {navItems.map((item) => (
              item.items ? (
                <div key={item.label} className="site-mobile-menu-group">
                  <p>{item.label}</p>
                  {item.items.map((link) => (
                    <NavLink key={link.to} to={link.to} onClick={() => setMobileOpen(false)}>
                      {link.label}
                    </NavLink>
                  ))}
                </div>
              ) : (
                <NavLink key={item.to} to={item.to} onClick={() => setMobileOpen(false)}>
                  {item.label}
                </NavLink>
              )
            ))}
          </div>

          <div className="site-mobile-menu-auth">
            {user ? (
              <button type="button" onClick={() => { handleLogout(); setMobileOpen(false) }}>Logout</button>
            ) : (
              <>
                <Link to="/login" onClick={() => setMobileOpen(false)}>Login</Link>
                <Link to="/register" onClick={() => setMobileOpen(false)}>Sign Up</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
