import apiClient from './apiClient'

export const contentService = {
  async getEvents() {
    const response = await apiClient.get('/content/events')
    return response.data
  },

  async getEventById(eventId) {
    const response = await apiClient.get(`/content/events/${eventId}`)
    return response.data
  },

  async getSponsors() {
    const response = await apiClient.get('/content/sponsors')
    return response.data
  },

  async getFacilities() {
    const response = await apiClient.get('/content/facilities')
    return response.data
  },

  async submitContactForm(formData) {
    const response = await apiClient.post('/content/contact', formData)
    return response.data
  }
}
