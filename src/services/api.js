import apiClient from '../config/axios'

// Extract the actual error message from backend response
// If there are validation errors, use the first one's message
const extractErrorMessage = (error, defaultMessage = 'Request failed') => {
  const errors = error.response?.data?.errors
  let errorMessage = error.response?.data?.message || defaultMessage
  
  // Use the first validation error message if available
  if (errors && Array.isArray(errors) && errors.length > 0) {
    errorMessage = errors[0].msg || errorMessage
  }
  
  return {
    success: false,
    message: errorMessage,
    errors: errors
  }
}

// API functions for authentication
export const authAPI = {
  // Check if user is logged in
  checkAuth: async () => {
    try {
      const response = await apiClient.get('/api/auth/me')
      if (response.data.success) {
        return { success: true, user: response.data.user }
      }
      return { success: false, user: null }
    } catch (error) {
      return { success: false, user: null }
    }
  },

  // Login with email and password
  login: async (email, password) => {
    try {
      const response = await apiClient.post('/api/auth/login', { email, password })
      if (response.data.success) {
        return {
          success: true,
          user: response.data.user
        }
      }
      return {
        success: false,
        message: 'Login failed'
      }
    } catch (error) {
      return extractErrorMessage(error, 'Login failed')
    }
  },

  // Register a new user
  register: async (username, email, password) => {
    try {
      const response = await apiClient.post('/api/auth/register', {
        username,
        email,
        password
      })
      if (response.data.success) {
        return {
          success: true,
          user: response.data.user
        }
      }
      return {
        success: false,
        message: 'Registration failed'
      }
    } catch (error) {
      return extractErrorMessage(error, 'Registration failed')
    }
  },

  // Logout the current user
  logout: async () => {
    try {
      await apiClient.post('/api/auth/logout', {})
      return { success: true }
    } catch (error) {
      console.error('Logout error:', error)
      return { success: false }
    }
  }
}

// API functions for booking
export const bookingAPI = {
  // Submit a callback request for booking
  requestCallback: async (packageName, numberOfPeople, numberOfDays) => {
    try {
      const response = await apiClient.post('/api/booking/request-callback', {
        packageName,
        numberOfPeople,
        numberOfDays
      })
      if (response.data.success) {
        return {
          success: true,
          message: response.data.message || 'Callback request submitted successfully'
        }
      }
      return {
        success: false,
        message: 'Failed to submit callback request'
      }
    } catch (error) {
      return extractErrorMessage(error, 'Failed to submit callback request')
    }
  }
}
