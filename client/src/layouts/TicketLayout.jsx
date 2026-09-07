import React from 'react'
import { Outlet } from 'react-router-dom'
import DockNavbar from '../components/common/DockNavbar'
import Footer from '../components/common/Footer'

function TicketLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-transparent text-white overflow-x-hidden w-full font-['Plus_Jakarta_Sans',sans-serif] dock-app-shell relative z-[1]">
      <DockNavbar />
      <main className="flex-1 px-4 sm:px-6 py-6 md:py-10 app-main app-content dock-app-content bg-transparent">
        <div className="w-full max-w-[1280px] mx-auto">
          {children || <Outlet />}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default TicketLayout
