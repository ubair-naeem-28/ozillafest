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

// Lazy-loaded Pages (Code Splitting for instant first load & low memory footprint)
const LoginPage = lazy(() => import('../pages/auth/LoginPage'))
const RegisterPage = lazy(() => import('../pages/auth/RegisterPage'))
const GoogleAuthCallbackPage = lazy(() => import('../pages/auth/GoogleAuthCallbackPage'))
const DashboardPage = lazy(() => import('../pages/dashboard/DashboardPage'))
const UserDashboardPage = lazy(() => import('../pages/account/UserDashboardPage'))
const TicketPortalPage = lazy(() => import('../pages/tickets/TicketPortalPage'))
const MyTicketsPage = lazy(() => import('../pages/tickets/MyTicketsPage'))
const TicketViewPage = lazy(() => import('../pages/tickets/TicketViewPage'))
const TicketVerificationPage = lazy(() => import('../pages/verification/TicketVerificationPage'))
const AdminDashboardPage = lazy(() => import('../pages/admin/AdminDashboardPage'))
const AdminTicketReviewPage = lazy(() => import('../pages/admin/AdminTicketReviewPage'))
const HotelsPage = lazy(() => import('../pages/hotels/HotelsPage'))
const LegalPage = lazy(() => import('../pages/legal/LegalPage'))
const NotFound = lazy(() => import('../components/common/NotFound'))

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
        <Route path="/restaurants" element={<Navigate to="/#restaurants" replace />} />
        <Route path="/discounts" element={<Navigate to="/#discounts" replace />} />
        <Route path="/partner" element={<Navigate to="/#about" replace />} />
        <Route path="/privacy" element={<MainLayout><LegalPage type="privacy" /></MainLayout>} />
        <Route path="/terms" element={<MainLayout><LegalPage type="terms" /></MainLayout>} />
        <Route path="/verification/:ticketId" element={<MainLayout><TicketVerificationPage /></MainLayout>} />
        
        {/* Ticket Portal Pages (Kept Separate as requested) */}
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

