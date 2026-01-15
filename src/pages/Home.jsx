import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Home = () => {
  const { user } = useAuth()

  const internationalTrips = [
    { 
      name: 'Europe', 
      image: '/images/international-cards/europe.avif',
      price: '1,49,999',
      emoji: '🇪🇺'
    },
    { 
      name: 'Vietnam', 
      image: '/images/international-cards/vietnam.avif',
      price: '59,999',
      emoji: '🌾'
    },
    { 
      name: 'Bali', 
      image: '/images/international-cards/bali.avif',
      price: '49,999',
      emoji: '🏝️'
    },
    { 
      name: 'Thailand', 
      image: '/images/international-cards/thailand.jpeg',
      price: '44,999',
      emoji: '🏖️'
    },
    { 
      name: 'Japan', 
      image: '/images/international-cards/japan_card.webp',
      price: '1,29,999',
      emoji: '🗾'
    }
  ]

  const indiaTrips = [
    { 
      name: 'Rajasthan', 
      image: '/images/india-cards/rajasthan.avif',
      price: '34,999'
    },
    { 
      name: 'Meghalaya', 
      image: '/images/india-cards/meghalaya.avif',
      price: '39,999'
    },
    { 
      name: 'Andaman', 
      image: '/images/india-cards/andaman.avif',
      price: '44,999'
    },
    { 
      name: 'Spiti', 
      image: '/images/india-cards/spiti.avif',
      price: '49,999'
    },
    { 
      name: 'Ladakh', 
      image: '/images/india-cards/ladakh.avif',
      price: '54,999'
    }
  ]

  const romanticEscapes = [
    { 
      name: 'Bali', 
      image: '/images/romantic-cards/bali-romantic-02.avif',
      price: '64,999'
    },
    { 
      name: 'Maldives', 
      image: '/images/romantic-cards/maldives.avif',
      price: '1,19,999'
    },
    { 
      name: 'Singapore', 
      image: '/images/romantic-cards/singapore-romantic-02.avif',
      price: '74,999'
    },
    { 
      name: 'Thailand', 
      image: '/images/romantic-cards/thailand-romantic-02.avif',
      price: '54,999'
    },
    { 
      name: 'Vietnam', 
      image: '/images/romantic-cards/vietnam 2.webp',
      price: '59,999'
    }
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
      <section className="relative h-[600px] md:h-[700px] overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/main.mp4" type="video/mp4" />
        </video>
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/70 via-pink-900/70 to-cyan-900/70 z-10"></div>
        
        {/* Content */}
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-pulse drop-shadow-2xl">
            Welcome to TravelOn
          </h1>
          <p className="text-xl md:text-2xl mb-8 drop-shadow-lg">
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
        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
          {internationalTrips.map((trip) => (
            <Link
              key={trip.name}
              to="/booking"
              className="relative w-72 h-[500px] flex-shrink-0 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer group block"
            >
              {/* Background Image */}
              <img
                src={trip.image}
                alt={trip.name}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              {/* Overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
              
              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-6 text-white z-10">
                <h3 className="text-3xl font-bold mb-3 drop-shadow-lg">{trip.name}</h3>
                <div className="flex flex-col gap-1">
                  <span className="text-sm text-gray-300">Starting Price</span>
                  <span className="text-2xl font-bold text-white">Rs. {trip.price}/-</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Explore India */}
      <section className="py-16 bg-white container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
          Explore India
        </h2>
        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
          {indiaTrips.map((trip) => (
            <Link
              key={trip.name}
              to="/booking"
              className="relative w-72 h-[500px] flex-shrink-0 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer group block"
            >
              {/* Background Image */}
              <img
                src={trip.image}
                alt={trip.name}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              {/* Overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
              
              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-6 text-white z-10">
                <h3 className="text-3xl font-bold mb-3 drop-shadow-lg">{trip.name}</h3>
                <div className="flex flex-col gap-1">
                  <span className="text-sm text-gray-300">Starting Price</span>
                  <span className="text-2xl font-bold text-white">Rs. {trip.price}/-</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Romantic Escapes */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
          Romantic Escapes
        </h2>
        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
          {romanticEscapes.map((trip) => (
            <Link
              key={trip.name}
              to="/booking"
              className="relative w-72 h-[500px] flex-shrink-0 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer group block"
            >
              {/* Background Image */}
              <img
                src={trip.image}
                alt={trip.name}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              {/* Overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
              
              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-6 text-white z-10">
                <h3 className="text-3xl font-bold mb-3 drop-shadow-lg">{trip.name}</h3>
                <div className="flex flex-col gap-1">
                  <span className="text-sm text-gray-300">Starting Price</span>
                  <span className="text-2xl font-bold text-white">Rs. {trip.price}/-</span>
                </div>
              </div>
            </Link>
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
