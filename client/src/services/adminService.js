import apiClient from './apiClient'

export const adminService = {
  async getDashboard() {
    const response = await apiClient.get('/admin/dashboard')
    return response.data
  },

  async getUsers() {
    const response = await apiClient.get('/admin/users')
    return response.data
  },

  async getPayments() {
    const response = await apiClient.get('/admin/payments')
    return response.data
  },

  async getReports() {
    const response = await apiClient.get('/admin/reports')
    return response.data
  }
}
