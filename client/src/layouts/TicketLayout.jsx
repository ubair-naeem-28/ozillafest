import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'

function TicketLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-50 to-blue-50">
      <Navbar />
      <main className="flex-1 p-6 app-main app-content">
        <div className="app-page-frame">
          {children || <Outlet />}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default TicketLayout
