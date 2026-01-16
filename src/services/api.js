import apiClient from '../config/axios'

/**
 * Helper function to extract specific error message from backend validation errors
 * @param {Object} error - The error object from axios
 * @param {string} defaultMessage - Default error message if no specific error found
 * @returns {Object} - Object with success: false, message, and errors array
 */
const extractErrorMessage = (error, defaultMessage = 'Request failed') => {
  const errors = error.response?.data?.errors
  let errorMessage = error.response?.data?.message || defaultMessage
  
  // If there are validation errors, use the first error's message
  if (errors && Array.isArray(errors) && errors.length > 0) {
    errorMessage = errors[0].msg || errorMessage
  }
  
  return {
    success: false,
    message: errorMessage,
    errors: errors
  }
}

/**
 * Auth API Services
 */
export const authAPI = {
  /**
   * Check if user is authenticated
   * @returns {Promise<Object>} - User object if authenticated, null otherwise
   */
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

  /**
   * Login user
   * @param {string} email - User email
   * @param {string} password - User password
   * @returns {Promise<Object>} - Success status and user data or error message
   */
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

  /**
   * Register new user
   * @param {string} username - Username
   * @param {string} email - User email
   * @param {string} password - User password
   * @returns {Promise<Object>} - Success status and user data or error message
   */
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

  /**
   * Logout user
   * @returns {Promise<Object>} - Success status
   */
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

/**
 * Booking API Services
 */
export const bookingAPI = {
  /**
   * Request callback for booking
   * @param {string} packageName - Package name
   * @param {number} numberOfPeople - Number of people
   * @param {number} numberOfDays - Number of days
   * @returns {Promise<Object>} - Success status and message or error
   */
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
