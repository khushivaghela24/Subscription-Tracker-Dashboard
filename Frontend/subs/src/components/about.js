import { FaUsers, FaBullseye, FaHandshake } from "react-icons/fa";


export default function About(){
    return(
                <div className="max-w-6xl mx-auto px-6">
                  {/* Title */}
                  <h3 className="text-3xl font-bold text-center text-green-800 mb-12">
                    About Us
                  </h3>
        
                  {/* Grid Layout */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
                    {/* Our Team */}
                    <div className="p-6 bg-gray-50 shadow-md rounded-lg hover:shadow-xl hover:scale-105 transform transition duration-300">
                      <FaUsers className="text-green-800 text-4xl mx-auto mb-4" />
                      <h4 className="text-xl font-semibold mb-2 text-green-800">Our Team</h4>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        We are a group of passionate developers and designers dedicated to 
                        building tools that simplify your subscription management.  
                        Collaboration and innovation are at the heart of our work.
                      </p>
                    </div>
        
                    {/* Our Mission */}
                    <div className="p-6 bg-gray-50 shadow-md rounded-lg hover:shadow-xl hover:scale-105 transform transition duration-300">
                      <FaBullseye className="text-green-800 text-4xl mx-auto mb-4" />
                      <h4 className="text-xl font-semibold mb-2 text-green-800">Our Mission</h4>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        Our mission is to help individuals and businesses save time and 
                        money by providing a single place to track, analyze, and manage 
                        all their subscriptions effectively.
                      </p>
                    </div>
        
                    {/* Our Values */}
                    <div className="p-6 bg-gray-50 shadow-md rounded-lg hover:shadow-xl hover:scale-105 transform transition duration-300">
                      <FaHandshake className="text-green-800 text-4xl mx-auto mb-4" />
                      <h4 className="text-xl font-semibold mb-2 text-green-800">Our Values</h4>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        We believe in trust, transparency, and user-first design.  
                        Every feature we build is centered around making your life 
                        easier and your subscription tracking seamless.
                      </p>
                    </div>
                  </div>
                </div>
    )
}