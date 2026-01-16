import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-pink-50 to-cyan-50">
      <div className="max-w-2xl w-full text-center">
        <div className="card p-8 md:p-12">
          {/* 404 Animation/Icon */}
          <div className="text-9xl md:text-[12rem] font-bold mb-4 gradient-text leading-none">
            404
          </div>
          
          
          {/* Error Message */}
          <h1 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Oops! Page Not Found
          </h1>
          
          <p className="text-gray-600 mb-2 text-lg">
            Looks like you've wandered off the beaten path!
          </p>
          <p className="text-gray-500 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/" 
              className="btn-primary w-full sm:w-auto px-8 py-3"
            >
              🏠 Go Home
            </Link>
            <Link 
              to="/booking" 
              className="btn-secondary w-full sm:w-auto px-8 py-3"
            >
              ✈️ Book a Trip
            </Link>
          </div>
          
          {/* Fun Message */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Don't worry, even the best travelers get lost sometimes! 🌍
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound
