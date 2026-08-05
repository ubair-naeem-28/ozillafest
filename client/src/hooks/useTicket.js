import { useCallback, useState } from 'react'
import { ticketService } from '../services/ticketService'

export function useTicket() {
  const [tickets, setTickets] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchMyTickets = useCallback(async () => {
    setLoading(true)
    try {
      const data = await ticketService.getMyTickets()
      setTickets(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }, [])

  const requestTicket = useCallback(async (ticketData) => {
    setLoading(true)
    try {
      const response = await ticketService.requestTicket(ticketData)
      await fetchMyTickets()
      return response
    } catch (err) {
      setError(err.message)
      throw err
    } finally {
      setLoading(false)
    }
  }, [fetchMyTickets])

  const getTicketById = useCallback(async (ticketId) => {
    setLoading(true)
    try {
      const ticket = await ticketService.getTicketById(ticketId)
      return ticket
    } catch (err) {
      setError(err.message)
      throw err
    } finally {
      setLoading(false)
    }
  }, [])

  const uploadPaymentProof = useCallback(async (ticketId, file) => {
    setLoading(true)
    try {
      const formData = new FormData()
      formData.append('paymentProof', file)
      const response = await ticketService.uploadPaymentProof(ticketId, formData)
      await fetchMyTickets()
      return response
    } catch (err) {
      setError(err.message)
      throw err
    } finally {
      setLoading(false)
    }
  }, [fetchMyTickets])

  return {
    tickets,
    loading,
    error,
    fetchMyTickets,
    requestTicket,
    getTicketById,
    uploadPaymentProof
  }
}
