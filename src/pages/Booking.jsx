import { useState } from 'react'
import { bookingAPI } from '../services/api'

const Booking = () => {
  const [formData, setFormData] = useState({
    packageName: '',
    numberOfPeople: '',
    numberOfDays: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const packages = [
    'Europe Adventure',
    'Bali Paradise',
    'Thailand Explorer',
    'Japan Discovery',
    'Vietnam Journey',
    'Rajasthan Royalty',
    'Meghalaya Magic',
    'Andaman Escape',
    'Goa Getaway',
    'Leh Ladakh Expedition',
    'Maldives Romance',
    'Singapore City Tour',
    'Switzerland Alpine'
  ]

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    setError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    const result = await bookingAPI.requestCallback(
      formData.packageName,
      parseInt(formData.numberOfPeople),
      parseInt(formData.numberOfDays)
    )

    if (result.success) {
      setSubmitted(true)
      setFormData({
        packageName: '',
        numberOfPeople: '',
        numberOfDays: ''
      })
    } else {
      setError(result.message || 'Something went wrong. Please try again.')
    }

    setLoading(false)
  }

  if (submitted) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <div className="card p-12 text-center">
            <div className="text-6xl mb-6">✅</div>
            <h2 className="text-3xl font-bold mb-4 gradient-text">
              Request Submitted Successfully!
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              You will be contacted soon for the same! 🎉
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="btn-primary"
            >
              Book Another Trip
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-8 gradient-text">
          Book Your Dream Trip
        </h1>
        <div className="card p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                {error}
              </div>
            )}

            <div>
              <label htmlFor="packageName" className="block text-sm font-medium text-gray-700 mb-2">
                Select Package
              </label>
              <select
                id="packageName"
                name="packageName"
                required
                value={formData.packageName}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="">Choose a package...</option>
                {packages.map((pkg) => (
                  <option key={pkg} value={pkg}>
                    {pkg}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="numberOfPeople" className="block text-sm font-medium text-gray-700 mb-2">
                Number of People
              </label>
              <input
                type="number"
                id="numberOfPeople"
                name="numberOfPeople"
                min="1"
                max="20"
                required
                value={formData.numberOfPeople}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Enter number of people"
              />
            </div>

            <div>
              <label htmlFor="numberOfDays" className="block text-sm font-medium text-gray-700 mb-2">
                Number of Days
              </label>
              <input
                type="number"
                id="numberOfDays"
                name="numberOfDays"
                min="1"
                max="30"
                required
                value={formData.numberOfDays}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Enter number of days"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Submitting...' : 'Request a Callback'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Booking
