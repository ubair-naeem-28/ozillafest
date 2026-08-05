import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'

function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 app-shell">
      <Navbar />
      <div className="flex flex-1 app-layout-body">
        <main className="flex-1 p-6 app-main app-content">
          <div className="app-page-frame">
            {children || <Outlet />}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default MainLayout
