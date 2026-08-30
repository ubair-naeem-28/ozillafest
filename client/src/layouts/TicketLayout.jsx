import React from 'react'
import { Outlet } from 'react-router-dom'
import DockNavbar from '../components/common/DockNavbar'
import Footer from '../components/common/Footer'

function TicketLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#120205] text-white overflow-x-hidden w-full dock-app-shell">
      <DockNavbar />
      <main className="flex-1 px-4 sm:px-6 py-8 app-main app-content dock-app-content">
        <div className="app-page-frame">
          {children || <Outlet />}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default TicketLayout
