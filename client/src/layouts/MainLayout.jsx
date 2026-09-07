import React from 'react'
import { Outlet } from 'react-router-dom'
import DockNavbar from '../components/common/DockNavbar'
import Footer from '../components/common/Footer'

function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-transparent text-white overflow-x-hidden w-full relative z-[1]">
      <DockNavbar />
      <div className="flex-1 w-full overflow-x-hidden bg-transparent">
        {children || <Outlet />}
      </div>
      <Footer />
    </div>
  )
}

export default MainLayout
