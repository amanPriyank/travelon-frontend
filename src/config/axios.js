import axios from 'axios'

// Set the base URL for API calls
// Use environment variable if available, otherwise use the production URL
const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://travelon-backend.onrender.com'

// Create axios instance with default config
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true, // Important for cookies
  headers: {
    'Content-Type': 'application/json'
  }
})

export default apiClient
