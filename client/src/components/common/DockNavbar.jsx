import React, { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { assetUrl } from '../../utils/assetUrl.util'
import Dock from './Dock'
import './DockNavbar.css'

function Icon({ path, size = 24, viewBox = '0 0 24 24', fill = 'none', stroke = 'currentColor', strokeWidth = 1.8 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox={viewBox}
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {path}
    </svg>
  )
}

const icons = {
  home: <Icon path={<><path d="M3 10.5 12 3l9 7.5" /><path d="M5 9.5V21h14V9.5" /><path d="M9 21v-6h6v6" /></>} />,
  calendar: <Icon path={<><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></>} />,
  mic: <Icon path={<><rect x="9" y="2" width="6" height="12" rx="3" /><path d="M5 10a7 7 0 0 0 14 0" /><path d="M12 17v5" /></>} />,
  clock: <Icon path={<><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></>} />,
  history: <Icon path={<><path d="M3 12a9 9 0 1 0 3-6.7" /><path d="M3 4v5h5" /><path d="M12 8v4l3 2" /></>} />,
  hotels: <Icon path={<><path d="M2 21V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16" /><path d="M2 21h20" /><path d="M6 7h4M6 11h4M14 7h4M14 11h4M6 15h4M14 15h4M6 19h4M14 19h4" /></>} />,
  restaurants: <Icon path={<><path d="M4 21v-8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8" /><path d="M2 21h20" /><path d="M8 9V3M12 9V3M16 9V3" /><path d="M4 13h16" /></>} />,
  discounts: <Icon path={<><path d="M20.6 13.4 12 22 2 12 3.5 4.5 11 3l9.6 10.4Z" /><circle cx="8" cy="8" r="1.5" /><path d="m15.5 5.5 4 4" /></>} />,
  facilities: <Icon path={<><path d="M3 21V7l6-4 6 4v14" /><path d="M15 21V9h6v12" /><path d="M3 21h18" /><path d="M7 10h3M7 14h3M7 18h3" /></>} />,
  sponsorship: <Icon path={<><path d="M12 21s-7.5-4.6-10-9.2C.6 8.6 3 5 6.5 5c2 0 3.5 1 5.5 3 2-2 3.5-3 5.5-3C21 5 23.4 8.6 22 11.8 19.5 16.4 12 21 12 21Z" /></>} />,
  sparkle: <Icon path={<><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z" /></>} />,
  ticket: <Icon path={<><path d="M3 9V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3a3 3 0 0 0 0 6v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3a3 3 0 0 0 0-6Z" /><path d="M13 5v2M13 11v2M13 17v2" /></>} />,
  contact: <Icon path={<><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>} />,
  shield: <Icon path={<><path d="M12 22s8-3.6 8-10V5l-8-3-8 3v7c0 6.4 8 10 8 10Z" /><path d="m9 11.5 2 2 4-4" /></>} />,
  user: <Icon path={<><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 4-6 8-6s8 2 8 6" /></>} />,
  menu: <Icon path={<><path d="M3 6h18M3 12h18M3 18h18" /></>} />,
  close: <Icon path={<><path d="M5 5l14 14M19 5 5 19" /></>} />
}

const navGroups = [
  { label: 'Home', to: '/#home', icon: 'home' },
  { label: 'Ticket Portal', to: '/tickets', icon: 'ticket', cta: true },
  { label: 'Lineup', to: '/#celebrities', icon: 'mic' },
  { label: 'VIP Passes', to: '/#vip-experience', icon: 'ticket' },
  { label: 'Atmosphere', to: '/#about', icon: 'sparkle' },
  { label: 'Editions', to: '/#events', icon: 'calendar' },
  { label: 'Timeline', to: '/#history', icon: 'history' },
  { label: 'Hotels', to: '/hotels', icon: 'hotels' },
  { label: 'Facilities', to: '/#facilities', icon: 'facilities' },
  { label: 'Sponsorship', to: '/#sponsorship', icon: 'sponsorship' },
  { label: 'My Tickets', to: '/tickets/my-tickets', icon: 'ticket' }
]

function userName(user) {
  return user?.firstName || user?.name || user?.email || 'Account'
}

function DockNavbar() {
  const { user, isAdmin, logout } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [accountOpen, setAccountOpen] = useState(false)
  const frameRef = useRef(null)

  const navItems = React.useMemo(() => {
    const items = [...navGroups]
    if (isAdmin) items.push({ label: 'Admin', to: '/admin/dashboard', icon: 'shield' })
    return items
  }, [isAdmin])

  const dockItems = React.useMemo(
    () =>
      navItems.map((item) => ({
        label: item.label,
        to: item.to,
        icon: icons[item.icon],
        className: item.cta ? 'dock-item-cta' : ''
      })),
    [navItems]
  )

  useEffect(() => {
    const onScroll = () => {
      if (frameRef.current) return
      frameRef.current = window.requestAnimationFrame(() => {
        setScrolled(window.scrollY > 12)
        frameRef.current = null
      })
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (frameRef.current) window.cancelAnimationFrame(frameRef.current)
    }
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setAccountOpen(false)
  }, [location.pathname])

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <>
      <header className={`dock-site-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="dock-site-header-inner">
          <Link to="/" className="dock-site-brand" aria-label="Ozilla Festival home">
            <span className="dock-site-brand-logo">
              <img
                src={assetUrl('/assets/ozilla/logo.png')}
                alt="Ozilla Festival"
                onError={(e) => { e.currentTarget.src = assetUrl('/assets/company-logo.jpeg') }}
              />
            </span>
            <div className="dock-site-brand-text">
              <strong>OZILLA</strong>
              <small>FESTIVAL '26</small>
            </div>
          </Link>

          <div className="dock-header-center">
            <Dock
              items={dockItems}
              className="dock-nav"
              magnification={50}
              distance={130}
              panelHeight={58}
              baseItemSize={38}
              spring={{ mass: 0.1, stiffness: 260, damping: 19 }}
            />
          </div>

          <div className="dock-site-header-actions">
            {user ? (
              <div className={`dock-account ${accountOpen ? 'open' : ''}`}>
                <button
                  type="button"
                  className="dock-account-button"
                  onClick={() => setAccountOpen((open) => !open)}
                  aria-expanded={accountOpen}
                  aria-label="Account menu"
                >
                  <span className="dock-account-avatar">{String(userName(user)).slice(0, 1).toUpperCase()}</span>
                  <strong>{userName(user)}</strong>
                </button>
                <div className="dock-account-menu">
                  <Link to="/account">Account</Link>
                  <Link to="/tickets/my-tickets">My Tickets</Link>
                  {isAdmin && <Link to="/admin/dashboard">Admin Dashboard</Link>}
                  <button type="button" onClick={handleLogout}>Logout</button>
                </div>
              </div>
            ) : (
              <>
                <Link to="/login" className="dock-site-login-btn">Login</Link>
                <Link to="/register" className="dock-site-register-btn">Sign Up</Link>
              </>
            )}

            <button
              type="button"
              className={`dock-mobile-toggle ${mobileOpen ? 'open' : ''}`}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((open) => !open)}
            >
              {mobileOpen ? icons.close : icons.menu}
            </button>
          </div>
        </div>
      </header>

      <div className={`dock-mobile-overlay ${mobileOpen ? 'open' : ''}`} onClick={() => setMobileOpen(false)}>
        <div className={`dock-mobile-panel ${mobileOpen ? 'open' : ''}`} onClick={(event) => event.stopPropagation()}>
          <div className="dock-mobile-header">
            <div>
              <h2>Menu</h2>
            </div>
            <button type="button" className="dock-mobile-close" onClick={() => setMobileOpen(false)} aria-label="Close menu">
              x
            </button>
          </div>

          <div className="dock-mobile-links">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={item.cta ? 'dock-mobile-link-cta' : ''}
                onClick={() => setMobileOpen(false)}
              >
                <span className="dock-mobile-link-icon">{icons[item.icon]}</span>
                <span>{item.label}</span>
                {item.cta && <span className="dock-mobile-badge">PASSES</span>}
              </NavLink>
            ))}
          </div>

          <div className="dock-mobile-auth">
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
    </>
  )
}

export default DockNavbar