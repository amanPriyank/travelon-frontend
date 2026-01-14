import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Home = () => {
  const { user } = useAuth()

  const internationalTrips = [
    { name: 'Europe', image: '🇪🇺' },
    { name: 'Bali', image: '🏝️' },
    { name: 'Thailand', image: '🏖️' },
    { name: 'Japan', image: '🗾' },
    { name: 'Vietnam', image: '🌾' }
  ]

  const indiaTrips = [
    { name: 'Rajasthan', image: '🏰' },
    { name: 'Meghalaya', image: '🌿' },
    { name: 'Andaman', image: '🏝️' },
    { name: 'Goa', image: '🌴' },
    { name: 'Leh Ladakh', image: '⛰️' }
  ]

  const romanticEscapes = [
    { name: 'Bali', image: '💕' },
    { name: 'Maldives', image: '🌺' },
    { name: 'Singapore', image: '🌆' },
    { name: 'Thailand', image: '🏖️' },
    { name: 'Switzerland', image: '🏔️' }
  ]

  const features = [
    {
      title: 'No Third Party Mess',
      description: '100 percent in-house operations for all trips! No third parties involved, hence no fishy claims!',
      icon: '✨'
    },
    {
      title: 'Transparency & Security',
      description: 'Real time monitoring of all trips by ground team! All routes and weather conditions are accurately updated!',
      icon: '🔒'
    },
    {
      title: 'Co-Travelers Filtering',
      description: 'Multi-step filtering to bring only like-minded people together! That\'s our key to have fuss-free trips!',
      icon: '👥'
    },
    {
      title: 'One Stop Hassle Free Experience',
      description: 'Comfortable stays, trained drivers, hospitable staff and friendly trip leaders put together that one memorable trip for you!',
      icon: '🌟'
    }
  ]

  return (
    <div>
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-pulse">
            Welcome to TravelOn
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Your Adventure Awaits! Explore the world with us 🌍
          </p>
          {!user && (
            <Link to="/signup" className="btn-primary text-lg inline-block">
              Book a Trip
            </Link>
          )}
          {user && (
            <Link to="/booking" className="btn-primary text-lg inline-block">
              Book a Trip
            </Link>
          )}
        </div>
      </section>

      {/* International Trips */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
          International Trips
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {internationalTrips.map((trip) => (
            <div key={trip.name} className="card p-6 text-center">
              <div className="text-6xl mb-4">{trip.image}</div>
              <h3 className="text-xl font-bold text-gray-800">{trip.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Explore India */}
      <section className="py-16 bg-white container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
          Explore India
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {indiaTrips.map((trip) => (
            <div key={trip.name} className="card p-6 text-center">
              <div className="text-6xl mb-4">{trip.image}</div>
              <h3 className="text-xl font-bold text-gray-800">{trip.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Romantic Escapes */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
          Romantic Escapes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {romanticEscapes.map((trip) => (
            <div key={trip.name} className="card p-6 text-center">
              <div className="text-6xl mb-4">{trip.image}</div>
              <h3 className="text-xl font-bold text-gray-800">{trip.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Why TravelOn */}
      <section className="py-16 bg-gradient-to-br from-purple-100 to-pink-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
            Why TravelOn
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card p-6">
                <div className="text-5xl mb-4 text-center">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
