import axios from 'axios'

// Get API URL from env or use production URL
const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://travelon-backend.onrender.com'

// Create axios instance with cookies enabled
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true, // Send cookies with requests
  headers: {
    'Content-Type': 'application/json'
  }
})

export default apiClient
