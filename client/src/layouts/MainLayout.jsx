import React from 'react'
import { Outlet } from 'react-router-dom'
import DockNavbar from '../components/common/DockNavbar'
import Footer from '../components/common/Footer'

function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#550e0e] text-white overflow-x-hidden w-full">
      <DockNavbar />
      <div className="flex-1 w-full overflow-x-hidden">
        {children || <Outlet />}
      </div>
      <Footer />
    </div>
  )
}

export default MainLayout
