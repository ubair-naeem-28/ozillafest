import React, { useEffect, useState } from 'react'
import PageHeader from '../../components/common/PageHeader'
import AlertMessage from '../../components/common/AlertMessage'
import { adminService } from '../../services/adminService'
import { useAuth } from '../../hooks/useAuth'
import { Link } from 'react-router-dom'

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
      <div className="max-w-4xl mx-auto py-12">
        <div className="bg-black/40 backdrop-blur-xl border border-red-500/20 rounded-2xl p-8 text-center">
          <h1 className="text-2xl font-black text-red-400 mb-2">Admin Access Required</h1>
          <p className="text-white/70">Only authenticated festival admin accounts can access this command center.</p>
        </div>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto py-12 text-center">
        <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
          <p className="text-white/70">Loading festival admin analytics...</p>
        </div>
      </div>
    )
  }

  const stats = dashboard?.stats || {}
  const status = dashboard?.ticketStatus || {}
  const reportTypes = reports?.ticketsByType || {}

  return (
    <div className="max-w-6xl mx-auto py-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div>
          <PageHeader title="Admin Command Center" subtitle="Real-time festival ticket velocity, user data, revenue analytics & approvals" />
        </div>
      </div>

      {alert && (
        <AlertMessage type={alert.type} message={alert.message} onClose={() => setAlert(null)} />
      )}

      {/* Quick Action Navigation */}
      <div className="flex items-center gap-3 mb-8">
        <Link
          to="/admin/tickets"
          className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#EC4899] to-[#cf5704] text-white font-bold text-sm shadow-lg hover:scale-105 transition-transform"
        >
          Review Pending Ticket Approvals ({status.payment_submitted || 0}) →
        </Link>
      </div>

      {/* Top Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-black/35 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl">
          <p className="text-xs font-bold text-white/50 uppercase tracking-wider mb-1">Total Users</p>
          <p className="text-3xl font-black text-white">{stats.totalUsers || 0}</p>
        </div>
        <div className="bg-black/35 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl">
          <p className="text-xs font-bold text-white/50 uppercase tracking-wider mb-1">Total Tickets</p>
          <p className="text-3xl font-black text-[#ffbd59]">{stats.totalTickets || 0}</p>
        </div>
        <div className="bg-black/35 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl">
          <p className="text-xs font-bold text-white/50 uppercase tracking-wider mb-1">Active Events</p>
          <p className="text-3xl font-black text-[#EC4899]">{stats.totalEvents || 0}</p>
        </div>
        <div className="bg-black/35 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl">
          <p className="text-xs font-bold text-white/50 uppercase tracking-wider mb-1">Revenue Estimate</p>
          <p className="text-2xl font-black text-green-400">PKR {Number(stats.totalRevenueEstimate || 0).toLocaleString()}</p>
        </div>
      </div>

      {/* Analytics Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-black/35 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">
          <h2 className="text-lg font-extrabold text-white mb-4 pb-2 border-b border-white/10">Pass Status Breakdown</h2>
          <div className="space-y-3">
            {[
              ['Pending', status.pending || 0, 'text-yellow-400'],
              ['Payment Submitted', status.payment_submitted || 0, 'text-blue-400'],
              ['Approved & Issued', status.approved || 0, 'text-green-400'],
              ['Rejected', status.rejected || 0, 'text-red-400'],
              ['Cancelled', status.cancelled || 0, 'text-gray-400']
            ].map(([label, val, col]) => (
              <div key={label} className="flex justify-between items-center bg-white/5 p-3 rounded-xl">
                <span className="text-sm font-semibold text-white/80">{label}</span>
                <span className={`text-base font-black ${col}`}>{val}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-black/35 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">
          <h2 className="text-lg font-extrabold text-white mb-4 pb-2 border-b border-white/10">Passes by Category</h2>
          <div className="space-y-3">
            {[
              ['General Access Pass', reportTypes.regular || 0],
              ['VIP All-Access Pass', reportTypes.vip || 0],
              ['Gold Sponsor Pass', reportTypes.premium || 0]
            ].map(([label, val]) => (
              <div key={label} className="flex justify-between items-center bg-white/5 p-3 rounded-xl">
                <span className="text-sm font-semibold text-white/80">{label}</span>
                <span className="text-base font-black text-[#ffbd59]">{val}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Users and Payments */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-black/35 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">
          <h2 className="text-lg font-extrabold text-white mb-4 pb-2 border-b border-white/10">Recent Users</h2>
          {users.length === 0 ? (
            <p className="text-white/50 text-sm py-4">No users registered yet.</p>
          ) : (
            <div className="space-y-2">
              {users.slice(0, 6).map((u) => (
                <div key={u.id} className="p-3 bg-white/5 rounded-xl flex items-center justify-between">
                  <div>
                    <p className="font-bold text-white text-sm">{u.name || `${u.firstName || ''} ${u.lastName || ''}`.trim() || 'Guest'}</p>
                    <p className="text-xs text-white/50">{u.email}</p>
                  </div>
                  <span className="text-xs font-bold uppercase px-2 py-0.5 rounded-full bg-white/10 text-white/70">
                    {u.role || 'user'}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="bg-black/35 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">
          <h2 className="text-lg font-extrabold text-white mb-4 pb-2 border-b border-white/10">Latest Transactions</h2>
          {payments.length === 0 ? (
            <p className="text-white/50 text-sm py-4">No payment activity recorded.</p>
          ) : (
            <div className="space-y-2">
              {payments.slice(0, 6).map((p) => (
                <div key={p.id} className="p-3 bg-white/5 rounded-xl flex items-center justify-between">
                  <div>
                    <p className="font-bold text-white text-sm">PKR {Number(p.amount || 0).toLocaleString()}</p>
                    <p className="text-xs text-white/50">{p.ticketId || p.id} · {p.status}</p>
                  </div>
                  <span className="text-xs font-bold uppercase px-2.5 py-1 rounded-full bg-green-500/20 text-green-400">
                    {p.status}
                  </span>
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
