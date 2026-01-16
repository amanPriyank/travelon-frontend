import { createContext, useState, useEffect, useContext } from 'react'
import { authAPI } from '../services/api'

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
    const result = await authAPI.checkAuth()
    if (result.success) {
      setUser(result.user)
    } else {
      setUser(null)
    }
    setLoading(false)
  }

  const login = async (email, password) => {
    const result = await authAPI.login(email, password)
    if (result.success) {
      setUser(result.user)
      return { success: true }
    }
    return result
  }

  const signup = async (username, email, password) => {
    const result = await authAPI.register(username, email, password)
    if (result.success) {
      setUser(result.user)
      return { success: true }
    }
    return result
  }

  const logout = async () => {
    await authAPI.logout()
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout, checkAuth }}>
      {children}
    </AuthContext.Provider>
  )
}
