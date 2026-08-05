import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

function Sidebar() {
  const { user, isAdmin } = useAuth()
  const [collapsed, setCollapsed] = useState(false)
  const menuItems = [
    { path: '/dashboard', label: 'Dashboard', icon: 'D' },
    { path: '/tickets', label: 'Ticket Portal', icon: 'T' },
    { path: '/about', label: 'About Us', icon: 'A' },
    { path: '/collaboration', label: 'Brand Collaboration', icon: 'B' },
    { path: '/prismfest', label: 'Ozilla Festival', icon: 'O' },
    { path: '/prismfest/2023', label: 'Pre-Campaign Module', icon: '23' },
    { path: '/prismfest/2024', label: 'Scale Module', icon: '24' },
    { path: '/prismfest/2025', label: 'Ozilla Festival 2026', icon: '26' },
    { path: '/prismfest/celebrities', label: 'Celebrity Singers', icon: 'C' },
    { path: '/prismfest/events', label: 'Past Events', icon: 'PE' },
    { path: '/prismfest/future', label: 'Future Events', icon: 'F' },
    { path: '/hotels', label: 'Hotels', icon: 'H' },
    { path: '/restaurants', label: 'Restaurants', icon: 'R' },
    { path: '/discounts', label: 'Discounts', icon: 'D' },
    { path: '/partner', label: 'Become Partner', icon: 'P' },
    { path: '/sponsorship', label: 'Sponsorship', icon: 'S' },
    { path: '/contact', label: 'Contact Us', icon: 'C' },
    { path: '/facilities', label: 'Facilities', icon: 'F' }
  ]

  if (user) {
    menuItems.splice(2, 0, { path: '/tickets/my-tickets', label: 'My Tickets', icon: 'M' })
    menuItems.splice(3, 0, { path: '/account', label: 'My Account', icon: 'U' })
  }

  if (isAdmin) {
    menuItems.push({ path: '/admin/dashboard', label: 'Admin Dashboard', icon: 'A' })
    menuItems.push({ path: '/admin/tickets', label: 'Admin Verification', icon: 'AD' })
  }

  return (
    <aside
      className={`bg-white shadow-md min-h-screen layout-sidebar transition-all duration-200 overflow-hidden ${
        collapsed ? 'w-24' : 'w-72'
      }`}
    >
      <div className={`${collapsed ? 'p-3' : 'p-4'}`}>
        <button
          type="button"
          aria-label={collapsed ? 'Expand menu' : 'Collapse menu'}
          className={`rounded-lg flex items-center ${
            collapsed ? 'w-12 h-12 justify-center mx-auto' : 'w-full h-12 justify-start px-3 gap-3'
          } hover:bg-purple-50 transition-colors`}
          onClick={() => setCollapsed((prev) => !prev)}
        >
          <span className="flex flex-col items-center justify-center gap-1 bg-gray-100 rounded-full w-10 h-10">
            <span className="w-5 h-0.5 bg-gray-700 block"></span>
            <span className="w-5 h-0.5 bg-gray-700 block"></span>
            <span className="w-5 h-0.5 bg-gray-700 block"></span>
          </span>
          {!collapsed && <span className="text-xl font-bold text-gray-800 whitespace-nowrap">Ozilla Festival</span>}
        </button>

        <nav className={`mt-5 ${collapsed ? 'space-y-2' : 'space-y-1'}`}>
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                collapsed
                  ? `flex flex-col items-center justify-center gap-1 rounded-xl py-3 transition-colors ${
                    isActive
                      ? 'bg-purple-100 text-purple-700 font-semibold'
                      : 'text-gray-700 hover:bg-purple-50 hover:text-purple-600'
                  }`
                  : `flex items-center gap-3 rounded-xl px-4 py-3 transition-colors ${
                    isActive
                      ? 'bg-purple-100 text-purple-700 font-semibold shadow-sm'
                      : 'text-gray-700 hover:bg-purple-50 hover:text-purple-600'
                  }`
              }
            >
              <span className={`${collapsed ? 'text-sm leading-none' : 'text-sm leading-none'} font-semibold`}>{item.icon}</span>
              {collapsed ? (
                <span className="text-[12px] leading-tight text-center">{item.label}</span>
              ) : (
                <span className="text-base">{item.label}</span>
              )}
            </NavLink>
          ))}
        </nav>
      </div>
    </aside>
  )
}

export default Sidebar
