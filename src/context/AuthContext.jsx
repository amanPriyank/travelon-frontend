import { createContext, useState, useEffect, useContext } from 'react'
import apiClient from '../config/axios'

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    checkAuth()
  }, [])

  const checkAuth = async () => {
    try {
      const response = await apiClient.get('/api/auth/me')
      if (response.data.success) {
        setUser(response.data.user)
      }
    } catch (error) {
      setUser(null)
    } finally {
      setLoading(false)
    }
  }

  const login = async (email, password) => {
    try {
      const response = await apiClient.post('/api/auth/login', 
        { email, password }
      )
      if (response.data.success) {
        setUser(response.data.user)
        return { success: true }
      }
    } catch (error) {
      return { 
        success: false, 
        message: error.response?.data?.message || 'Login failed' 
      }
    }
  }

  const signup = async (username, email, password) => {
    try {
      const response = await apiClient.post('/api/auth/register', 
        { username, email, password }
      )
      if (response.data.success) {
        setUser(response.data.user)
        return { success: true }
      }
    } catch (error) {
      return { 
        success: false, 
        message: error.response?.data?.message || 'Registration failed',
        errors: error.response?.data?.errors 
      }
    }
  }

  const logout = async () => {
    try {
      await apiClient.post('/api/auth/logout', {})
      setUser(null)
    } catch (error) {
      console.error('Logout error:', error)
    }
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout, checkAuth }}>
      {children}
    </AuthContext.Provider>
  )
}
