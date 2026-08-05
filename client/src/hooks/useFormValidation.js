import { useState } from 'react'
import { validationRules } from '../utils/validationRules.util'

export function useFormValidation(initialValues, rules) {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues(prev => ({ ...prev, [name]: value }))
    
    if (touched[name]) {
      validateField(name, value)
    }
  }

  const handleBlur = (e) => {
    const { name, value } = e.target
    setTouched(prev => ({ ...prev, [name]: true }))
    validateField(name, value)
  }

  const validateField = (name, value) => {
    const fieldRules = rules[name]
    if (!fieldRules) return

    for (const rule of fieldRules) {
      const error = validationRules[rule](value)
      if (error) {
        setErrors(prev => ({ ...prev, [name]: error }))
        return
      }
    }
    setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const validate = () => {
    const newErrors = {}
    let isValid = true

    Object.keys(rules).forEach(fieldName => {
      const fieldRules = rules[fieldName]
      const value = values[fieldName]

      for (const rule of fieldRules) {
        const error = validationRules[rule](value)
        if (error) {
          newErrors[fieldName] = error
          isValid = false
          break
        }
      }
    })

    setErrors(newErrors)
    setTouched(Object.keys(rules).reduce((acc, key) => ({ ...acc, [key]: true }), {}))
    return isValid
  }

  const reset = () => {
    setValues(initialValues)
    setErrors({})
    setTouched({})
  }

  return {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    validate,
    reset
  }
}
