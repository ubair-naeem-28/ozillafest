export const validationRules = {
  required: (value) => {
    if (!value || value.trim() === '') {
      return 'This field is required'
    }
    return null
  },

  email: (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (value && !emailRegex.test(value)) {
      return 'Please enter a valid email address'
    }
    return null
  },

  minLength: (min) => (value) => {
    if (value && value.length < min) {
      return `Minimum ${min} characters required`
    }
    return null
  },

  maxLength: (max) => (value) => {
    if (value && value.length > max) {
      return `Maximum ${max} characters allowed`
    }
    return null
  },

  phone: (value) => {
    const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/
    if (value && !phoneRegex.test(value)) {
      return 'Please enter a valid phone number'
    }
    return null
  },

  match: (fieldName) => (value, allValues) => {
    if (value !== allValues[fieldName]) {
      return `Passwords do not match`
    }
    return null
  }
}
