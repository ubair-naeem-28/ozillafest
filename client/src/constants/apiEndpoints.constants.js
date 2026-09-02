export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    LOGOUT: '/auth/logout',
    SEND_OTP: '/auth/send-otp',
    RESEND_OTP: '/auth/resend-otp',
    VERIFY_OTP: '/auth/verify-otp',
    FORGOT_PASSWORD: '/auth/forgot-password',
    RESET_PASSWORD: '/auth/reset-password',
    GOOGLE: '/auth/google',
    GOOGLE_CODE_LOGIN: '/auth/google/code-login',
    GOOGLE_TOKEN_LOGIN: '/auth/google/token-login',
    ME: '/auth/me',
    PROFILE: '/auth/profile'
  },
  TICKETS: {
    MY_TICKETS: '/tickets/my-tickets',
    REQUEST: '/tickets/request',
    BY_ID: '/tickets/:id',
    PAYMENT_PROOF: '/tickets/:id/payment-proof',
    VERIFY: '/tickets/:id/verify'
  },
  CONTENT: {
    EVENTS: '/content/events',
    EVENT_BY_ID: '/content/events/:id',
    SPONSORS: '/content/sponsors',
    FACILITIES: '/content/facilities',
    CONTACT: '/content/contact'
  }
}
