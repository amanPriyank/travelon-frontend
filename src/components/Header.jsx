import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Header = () => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleLogout = async () => {
    await logout()
    navigate('/')
    setIsMenuOpen(false)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 cursor-pointer hover:opacity-80 transition-opacity">
            <img 
              src="/logo.png" 
              alt="TravelOn Logo" 
              className="h-14 w-14 object-contain cursor-pointer"
            />
            <span className="text-2xl font-bold gradient-text cursor-pointer">TravelOn</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-purple-600 font-medium transition-colors cursor-pointer">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-purple-600 font-medium transition-colors cursor-pointer">
              About Us
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-purple-600 font-medium transition-colors cursor-pointer">
              Contact Us
            </Link>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <>
                <Link to="/booking" className="btn-primary text-sm">
                  Book a Trip
                </Link>
                <button 
                  onClick={handleLogout}
                  className="text-gray-700 hover:text-purple-600 font-medium transition-colors cursor-pointer"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-gray-700 hover:text-purple-600 font-medium transition-colors cursor-pointer">
                  Login
                </Link>
                <Link to="/signup" className="btn-primary text-sm">
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Hamburger Menu Button - Mobile Only */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col items-center justify-center w-10 h-10 space-y-1.5 cursor-pointer focus:outline-none"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4 pt-4">
              <Link
                to="/"
                onClick={closeMenu}
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors cursor-pointer py-2"
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={closeMenu}
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors cursor-pointer py-2"
              >
                About Us
              </Link>
              <Link
                to="/contact"
                onClick={closeMenu}
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors cursor-pointer py-2"
              >
                Contact Us
              </Link>
              
              {user ? (
                <>
                  <Link
                    to="/booking"
                    onClick={closeMenu}
                    className="btn-primary text-sm text-center py-2"
                  >
                    Book a Trip
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="text-gray-700 hover:text-purple-600 font-medium transition-colors cursor-pointer text-left py-2"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    onClick={closeMenu}
                    className="text-gray-700 hover:text-purple-600 font-medium transition-colors cursor-pointer py-2"
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    onClick={closeMenu}
                    className="btn-primary text-sm text-center py-2"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
