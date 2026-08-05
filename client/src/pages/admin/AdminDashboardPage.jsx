import React, { useEffect, useState } from 'react'
import PageHeader from '../../components/common/PageHeader'
import AlertMessage from '../../components/common/AlertMessage'
import { adminService } from '../../services/adminService'
import { useAuth } from '../../hooks/useAuth'

function AdminDashboardPage() {
  const { isAdmin } = useAuth()
  const [loading, setLoading] = useState(true)
  const [alert, setAlert] = useState(null)
  const [dashboard, setDashboard] = useState(null)
  const [users, setUsers] = useState([])
  const [payments, setPayments] = useState([])
  const [reports, setReports] = useState(null)

  useEffect(() => {
    const load = async () => {
      if (!isAdmin) {
        setLoading(false)
        return
      }
      setLoading(true)
      try {
        const [dashRes, usersRes, paymentsRes, reportsRes] = await Promise.all([
          adminService.getDashboard(),
          adminService.getUsers(),
          adminService.getPayments(),
          adminService.getReports()
        ])
        setDashboard(dashRes)
        setUsers(usersRes)
        setPayments(paymentsRes)
        setReports(reportsRes)
      } catch (error) {
        setAlert({ type: 'error', message: error.response?.data?.message || 'Failed to load admin dashboard.' })
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [isAdmin])

  if (!isAdmin) {
    return (
      <div className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Admin Access Required</h1>
        <p className="text-gray-600">Only admin accounts can access this dashboard.</p>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-md p-8">
        <p className="text-gray-600">Loading admin dashboard...</p>
      </div>
    )
  }

  const stats = dashboard?.stats || {}
  const status = dashboard?.ticketStatus || {}
  const reportTypes = reports?.ticketsByType || {}

  return (
    <div>
      <PageHeader title="Admin Dashboard" subtitle="Users, payments, ticket status, and reports" />
      {alert && (
        <AlertMessage type={alert.type} message={alert.message} onClose={() => setAlert(null)} />
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-sm text-gray-600 mb-1">Total Users</p>
          <p className="text-3xl font-bold text-gray-800">{stats.totalUsers || 0}</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-sm text-gray-600 mb-1">Total Tickets</p>
          <p className="text-3xl font-bold text-gray-800">{stats.totalTickets || 0}</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-sm text-gray-600 mb-1">Total Events</p>
          <p className="text-3xl font-bold text-gray-800">{stats.totalEvents || 0}</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-sm text-gray-600 mb-1">Revenue Estimate</p>
          <p className="text-2xl font-bold text-gray-800">PKR {Number(stats.totalRevenueEstimate || 0).toLocaleString()}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Ticket Status</h2>
          <div className="space-y-2">
            <p className="text-gray-700">Pending: <span className="font-semibold">{status.pending || 0}</span></p>
            <p className="text-gray-700">Payment Submitted: <span className="font-semibold">{status.payment_submitted || 0}</span></p>
            <p className="text-gray-700">Approved: <span className="font-semibold">{status.approved || 0}</span></p>
            <p className="text-gray-700">Rejected: <span className="font-semibold">{status.rejected || 0}</span></p>
            <p className="text-gray-700">Cancelled: <span className="font-semibold">{status.cancelled || 0}</span></p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Tickets by Type</h2>
          <div className="space-y-2">
            <p className="text-gray-700">Regular: <span className="font-semibold">{reportTypes.regular || 0}</span></p>
            <p className="text-gray-700">VIP: <span className="font-semibold">{reportTypes.vip || 0}</span></p>
            <p className="text-gray-700">Premium: <span className="font-semibold">{reportTypes.premium || 0}</span></p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Users</h2>
          {users.length === 0 ? (
            <p className="text-gray-600">No users yet.</p>
          ) : (
            <div className="space-y-2">
              {users.slice(0, 8).map((user) => (
                <div key={user.id} className="p-3 bg-gray-50 rounded-lg">
                  <p className="font-semibold text-gray-800">{user.name || `${user.firstName || ''} ${user.lastName || ''}`.trim() || 'User'}</p>
                  <p className="text-sm text-gray-600">{user.email}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Payment Cases</h2>
          {payments.length === 0 ? (
            <p className="text-gray-600">No payment records yet.</p>
          ) : (
            <div className="space-y-2">
              {payments.slice(0, 8).map((ticket) => (
                <div key={ticket.id} className="p-3 bg-gray-50 rounded-lg">
                  <p className="font-semibold text-gray-800">{ticket.fullName} - {ticket.eventName}</p>
                  <p className="text-sm text-gray-600">{ticket.email}</p>
                  <p className="text-sm text-gray-600">Status: <span className="font-semibold">{ticket.status}</span></p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default AdminDashboardPage
