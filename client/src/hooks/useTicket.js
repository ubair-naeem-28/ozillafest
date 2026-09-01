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

  const payWithCard = useCallback(async (ticketId, cardData) => {
    setLoading(true)
    try {
      const response = await ticketService.payWithCard(ticketId, cardData)
      await fetchMyTickets()
      return response
    } catch (err) {
      setError(err.message)
      throw err
    } finally {
      setLoading(false)
    }
  }, [fetchMyTickets])

  const payWithJazzCash = useCallback(async (ticketId, jazzCashData) => {
    setLoading(true)
    try {
      const response = await ticketService.payWithJazzCash(ticketId, jazzCashData)
      await fetchMyTickets()
      return response
    } catch (err) {
      setError(err.message)
      throw err
    } finally {
      setLoading(false)
    }
  }, [fetchMyTickets])

  const payWithEasypaisa = useCallback(async (ticketId, easypaisaData) => {
    setLoading(true)
    try {
      const response = await ticketService.payWithEasypaisa(ticketId, easypaisaData)
      await fetchMyTickets()
      return response
    } catch (err) {
      setError(err.message)
      throw err
    } finally {
      setLoading(false)
    }
  }, [fetchMyTickets])

  const initiatePayFastCheckout = useCallback(async (ticketId) => {
    setLoading(true)
    try {
      const response = await ticketService.initiatePayFastCheckout(ticketId)
      return response
    } catch (err) {
      setError(err.message)
      throw err
    } finally {
      setLoading(false)
    }
  }, [])

  const completePayFastGateway = useCallback(async (ticketId, gatewayData) => {
    setLoading(true)
    try {
      const response = await ticketService.completePayFastGateway(ticketId, gatewayData)
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
    payWithCard,
    payWithJazzCash,
    payWithEasypaisa,
    initiatePayFastCheckout,
    completePayFastGateway,
    uploadPaymentProof
  }
}
