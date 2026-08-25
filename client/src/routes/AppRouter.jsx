import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'
import PublicRoute from './PublicRoute'

// Layouts
import AuthLayout from '../layouts/AuthLayout'
import MainLayout from '../layouts/MainLayout'
import TicketLayout from '../layouts/TicketLayout'

// Pages
import LoginPage from '../pages/auth/LoginPage'
import RegisterPage from '../pages/auth/RegisterPage'
import GoogleAuthCallbackPage from '../pages/auth/GoogleAuthCallbackPage'
import DashboardPage from '../pages/dashboard/DashboardPage'
import UserDashboardPage from '../pages/account/UserDashboardPage'
import TicketPortalPage from '../pages/tickets/TicketPortalPage'
import MyTicketsPage from '../pages/tickets/MyTicketsPage'
import TicketViewPage from '../pages/tickets/TicketViewPage'
import TicketVerificationPage from '../pages/verification/TicketVerificationPage'
import AdminDashboardPage from '../pages/admin/AdminDashboardPage'
import AdminTicketReviewPage from '../pages/admin/AdminTicketReviewPage'
import LegalPage from '../pages/legal/LegalPage'

// Components
import NotFound from '../components/common/NotFound'

function AppRouter() {
  return (
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
      <Route path="/hotels" element={<Navigate to="/#hotels" replace />} />
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
        <Route path="/admin/dashboard" element={<MainLayout><AdminDashboardPage /></MainLayout>} />
        <Route path="/tickets/my-tickets" element={<TicketLayout><MyTicketsPage /></TicketLayout>} />
        <Route path="/tickets/view/:ticketId" element={<TicketLayout><TicketViewPage /></TicketLayout>} />
        <Route path="/admin/tickets" element={<MainLayout><AdminTicketReviewPage /></MainLayout>} />
      </Route>

      {/* 404 Route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRouter
