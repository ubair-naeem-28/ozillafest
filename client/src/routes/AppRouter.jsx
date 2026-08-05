import React from 'react'
import { Routes, Route } from 'react-router-dom'
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
import AboutUsPage from '../pages/about/AboutUsPage'
import BrandCollaborationPage from '../pages/collaboration/BrandCollaborationPage'
import PrismFestPage from '../pages/prismfest/PrismFestPage'
import PrismFest2023Page from '../pages/prismfest/PrismFest2023Page'
import PrismFest2024Page from '../pages/prismfest/PrismFest2024Page'
import PrismFest2025Page from '../pages/prismfest/PrismFest2025Page'
import CelebritySingersPage from '../pages/prismfest/CelebritySingersPage'
import EventsPage from '../pages/prismfest/EventsPage'
import FutureEventsPage from '../pages/prismfest/FutureEventsPage'
import HistoryPage from '../pages/history/HistoryPage'
import SponsorshipPage from '../pages/sponsorship/SponsorshipPage'
import ContactUsPage from '../pages/contact/ContactUsPage'
import FacilitiesPage from '../pages/facilities/FacilitiesPage'
import HotelsPage from '../pages/hotels/HotelsPage'
import RestaurantsPage from '../pages/restaurants/RestaurantsPage'
import DiscountsPage from '../pages/discounts/DiscountsPage'
import BecomePartnerPage from '../pages/partners/BecomePartnerPage'
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

      {/* Public Website Routes */}
      <Route path="/" element={<MainLayout><DashboardPage /></MainLayout>} />
      <Route path="/dashboard" element={<MainLayout><DashboardPage /></MainLayout>} />
      <Route path="/about" element={<MainLayout><AboutUsPage /></MainLayout>} />
      <Route path="/collaboration" element={<MainLayout><BrandCollaborationPage /></MainLayout>} />
      <Route path="/prismfest" element={<MainLayout><PrismFestPage /></MainLayout>} />
      <Route path="/prismfest/2023" element={<MainLayout><PrismFest2023Page /></MainLayout>} />
      <Route path="/prismfest/2024" element={<MainLayout><PrismFest2024Page /></MainLayout>} />
      <Route path="/prismfest/2025" element={<MainLayout><PrismFest2025Page /></MainLayout>} />
      <Route path="/prismfest/celebrities" element={<MainLayout><CelebritySingersPage /></MainLayout>} />
      <Route path="/prismfest/events" element={<MainLayout><EventsPage /></MainLayout>} />
      <Route path="/prismfest/future" element={<MainLayout><FutureEventsPage /></MainLayout>} />
      <Route path="/history" element={<MainLayout><HistoryPage /></MainLayout>} />
      <Route path="/events" element={<MainLayout><EventsPage /></MainLayout>} />
      <Route path="/sponsorship" element={<MainLayout><SponsorshipPage /></MainLayout>} />
      <Route path="/contact" element={<MainLayout><ContactUsPage /></MainLayout>} />
      <Route path="/facilities" element={<MainLayout><FacilitiesPage /></MainLayout>} />
      <Route path="/hotels" element={<MainLayout><HotelsPage /></MainLayout>} />
      <Route path="/restaurants" element={<MainLayout><RestaurantsPage /></MainLayout>} />
      <Route path="/discounts" element={<MainLayout><DiscountsPage /></MainLayout>} />
      <Route path="/partner" element={<MainLayout><BecomePartnerPage /></MainLayout>} />
      <Route path="/privacy" element={<MainLayout><LegalPage type="privacy" /></MainLayout>} />
      <Route path="/terms" element={<MainLayout><LegalPage type="terms" /></MainLayout>} />
      <Route path="/verification/:ticketId" element={<MainLayout><TicketVerificationPage /></MainLayout>} />
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
