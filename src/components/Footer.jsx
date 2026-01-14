import { Link } from 'react-router-dom'

const Footer = () => {
  const internationalTrips = [
    'Europe', 'Bali', 'Vietnam', 'Thailand', 'Kazakhstan', 
    'Singapore', 'Bhutan', 'Maldives', 'Dubai', 'Malaysia'
  ]

  const indiaTrips = [
    'Ladakh', 'Spiti Valley', 'Meghalaya', 'Kashmir', 'Himachal Pradesh',
    'Andaman', 'Kerala', 'Rajasthan', 'Nagaland'
  ]

  const quickLinks = [
    'About Us', 'Privacy Policy', 'Terms & Conditions', 
    'Customer Success & Support', 'Disclaimer', 'Careers', 'Blogs', 'Payments'
  ]

  return (
    <footer className="bg-gradient-to-br from-purple-900 via-pink-900 to-cyan-900 text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* International Trips */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-neon-cyan">International Trips</h3>
            <ul className="space-y-2">
              {internationalTrips.map((trip) => (
                <li key={trip}>
                  <Link to="/" className="text-gray-300 hover:text-neon-cyan transition-colors">
                    {trip}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* India Trips */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-neon-cyan">India Trips</h3>
            <ul className="space-y-2">
              {indiaTrips.map((trip) => (
                <li key={trip}>
                  <Link to="/" className="text-gray-300 hover:text-neon-cyan transition-colors">
                    {trip}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* WanderOn Special */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-neon-cyan">WanderOn Special</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-neon-cyan transition-colors">
                  Community Trips
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-neon-cyan transition-colors">
                  Honeymoon Trips
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-neon-cyan transition-colors">
                  Corporate Trips
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-neon-cyan transition-colors">
                  Weekend Getaways
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-neon-cyan">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <Link to="/" className="text-gray-300 hover:text-neon-cyan transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 TravelOn. All rights reserved. Made with ❤️ for travelers.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
