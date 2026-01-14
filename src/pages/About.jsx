const About = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-8 gradient-text">
          About TravelOn
        </h1>
        <div className="card p-8 space-y-6">
          <p className="text-lg text-gray-700 leading-relaxed">
            Welcome to TravelOn, your gateway to unforgettable adventures! We are passionate about 
            creating unique travel experiences that bring people together and create lasting memories.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            At TravelOn, we believe that travel is not just about visiting places, but about 
            experiencing cultures, meeting new people, and discovering yourself along the way. 
            Our carefully curated trips are designed to provide you with authentic experiences 
            while ensuring your safety and comfort.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-6 rounded-xl">
              <h3 className="text-2xl font-bold mb-3 text-purple-700">Our Mission</h3>
              <p className="text-gray-700">
                To make travel accessible, safe, and memorable for everyone, fostering connections 
                and creating experiences that last a lifetime.
              </p>
            </div>
            <div className="bg-gradient-to-br from-cyan-100 to-blue-100 p-6 rounded-xl">
              <h3 className="text-2xl font-bold mb-3 text-cyan-700">Our Vision</h3>
              <p className="text-gray-700">
                To become the most trusted and loved travel companion for adventurers worldwide, 
                known for our transparency, quality, and customer-centric approach.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
