import React, { Suspense, lazy } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'
import PublicRoute from './PublicRoute'

// Layouts
import AuthLayout from '../layouts/AuthLayout'
import MainLayout from '../layouts/MainLayout'
import TicketLayout from '../layouts/TicketLayout'

// Loading & Fallback
import LoadingSpinner from '../components/common/LoadingSpinner'

// Direct static imports for all public/customer routes (prevents chunk loading failure in mobile browsers)
import LoginPage from '../pages/auth/LoginPage'
import RegisterPage from '../pages/auth/RegisterPage'
import GoogleAuthCallbackPage from '../pages/auth/GoogleAuthCallbackPage'
import DashboardPage from '../pages/dashboard/DashboardPage'
import TicketPortalPage from '../pages/tickets/TicketPortalPage'
import MyTicketsPage from '../pages/tickets/MyTicketsPage'
import TicketViewPage from '../pages/tickets/TicketViewPage'
import TicketVerificationPage from '../pages/verification/TicketVerificationPage'
import HotelsPage from '../pages/hotels/HotelsPage'
import FestivalSchedulePage from '../pages/schedule/FestivalSchedulePage'
import LegalPage from '../pages/legal/LegalPage'
import NotFound from '../components/common/NotFound'

function lazyWithRetry(componentImport) {
  return lazy(async () => {
    try {
      return await componentImport()
    } catch (error) {
      const msg = String(error?.message || '').toLowerCase()
      const isChunkError =
        msg.includes('importing a module script failed') ||
        msg.includes('failed to fetch dynamically imported module') ||
        msg.includes('loading chunk') ||
        msg.includes('failed to load module script') ||
        msg.includes('error loading dynamically imported module')

      if (isChunkError) {
        const lastReload = Number(sessionStorage.getItem('chunk_reload_ts') || 0)
        if (Date.now() - lastReload > 8000) {
          sessionStorage.setItem('chunk_reload_ts', String(Date.now()))
          window.location.reload()
          return new Promise(() => {}) // keep suspended while page reloads
        }
      }
      throw error
    }
  })
}

// Protected Account & Admin Dashboards
const UserDashboardPage = lazyWithRetry(() => import('../pages/account/UserDashboardPage'))
const AdminDashboardPage = lazyWithRetry(() => import('../pages/admin/AdminDashboardPage'))
const AdminTicketReviewPage = lazyWithRetry(() => import('../pages/admin/AdminTicketReviewPage'))

function AppRouter() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        {/* Auth Routes (only for guests) */}
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<AuthLayout><LoginPage /></AuthLayout>} />
          <Route path="/register" element={<AuthLayout><RegisterPage /></AuthLayout>} />
          <Route path="/auth/google/callback" element={<AuthLayout><GoogleAuthCallbackPage /></AuthLayout>} />
        </Route>

        {/* Public Single-Page Dashboard & Section Redirects */}
        <Route path="/" element={<MainLayout><DashboardPage /></MainLayout>} />
        <Route path="/dashboard" element={<Navigate to="/" replace />} />
        <Route path="/about" element={<Navigate to="/#about" replace />} />
        <Route path="/collaboration" element={<Navigate to="/#sponsorship" replace />} />
        <Route path="/prismfest" element={<Navigate to="/#home" replace />} />
        <Route path="/prismfest/celebrities" element={<Navigate to="/#celebrities" replace />} />
        <Route path="/prismfest/events" element={<Navigate to="/#events" replace />} />
        <Route path="/prismfest/future" element={<Navigate to="/#future-events" replace />} />
        <Route path="/history" element={<Navigate to="/#history" replace />} />
        <Route path="/events" element={<Navigate to="/#events" replace />} />
        <Route path="/sponsorship" element={<Navigate to="/#sponsorship" replace />} />
        <Route path="/contact" element={<Navigate to="/#contact" replace />} />
        <Route path="/facilities" element={<Navigate to="/#facilities" replace />} />
        <Route path="/hotels" element={<MainLayout><HotelsPage /></MainLayout>} />
        <Route path="/schedule" element={<MainLayout><FestivalSchedulePage /></MainLayout>} />
        <Route path="/lineup" element={<MainLayout><FestivalSchedulePage /></MainLayout>} />
        <Route path="/restaurants" element={<Navigate to="/#restaurants" replace />} />
        <Route path="/discounts" element={<Navigate to="/#discounts" replace />} />
        <Route path="/partner" element={<Navigate to="/#about" replace />} />
        <Route path="/privacy" element={<MainLayout><LegalPage type="privacy" /></MainLayout>} />
        <Route path="/terms" element={<MainLayout><LegalPage type="terms" /></MainLayout>} />
        <Route path="/verification/:ticketId" element={<MainLayout><TicketVerificationPage /></MainLayout>} />
        
        {/* Ticket Portal Pages */}
        <Route path="/tickets" element={<TicketLayout><TicketPortalPage /></TicketLayout>} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/account" element={<MainLayout><UserDashboardPage /></MainLayout>} />
          <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />
          <Route path="/admin/dashboard" element={<MainLayout><AdminDashboardPage /></MainLayout>} />
          <Route path="/tickets/my-tickets" element={<TicketLayout><MyTicketsPage /></TicketLayout>} />
          <Route path="/tickets/view/:ticketId" element={<TicketLayout><TicketViewPage /></TicketLayout>} />
          <Route path="/admin/tickets" element={<MainLayout><AdminTicketReviewPage /></MainLayout>} />
        </Route>

        {/* 404 Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  )
}

export default AppRouter
