import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-secondary-dark text-white pt-12 pb-6 mt-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="flex gap-1">
                <div className="w-2.5 h-2.5 rounded-full bg-primary-blue"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-primary-green"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-primary-yellow"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-primary-orange"></div>
              </div>
              <span className="font-bold text-lg">Pon Nyasani CBO</span>
            </div>
            <p className="italic text-primary-yellow mb-2">"Bridging the Digital Gap, Transforming Communities."</p>
            <p className="text-sm text-text-light">Pon Nyasani — "Living in the current generation"</p>
          </div>
          
          <div>
            <h4 className="text-primary-yellow font-semibold mb-3">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-gray-300 hover:text-primary-yellow transition-colors">Home</Link>
              <Link to="/about" className="text-gray-300 hover:text-primary-yellow transition-colors">About Us</Link>
              <Link to="/programs" className="text-gray-300 hover:text-primary-yellow transition-colors">Programs</Link>
              <Link to="/team" className="text-gray-300 hover:text-primary-yellow transition-colors">Our Team</Link>
              <Link to="/contact" className="text-gray-300 hover:text-primary-yellow transition-colors">Contact</Link>
            </div>
          </div>
          
          <div>
            <h4 className="text-primary-yellow font-semibold mb-3">Our Programs</h4>
            <div className="flex flex-col gap-2 text-gray-300 text-sm">
              <span>Digital Literacy Training</span>
              <span>Women & Girls Empowerment</span>
              <span>Education Support</span>
              <span>Community Feeding Program</span>
              <span>Community Awareness</span>
            </div>
          </div>
          
          <div>
            <h4 className="text-primary-yellow font-semibold mb-3">Contact Us</h4>
            <div className="flex flex-col gap-2 text-gray-300 text-sm">
              <p>📍 Siaya County, Kenya</p>
              <p>📧 info@ponnyasani.org</p>
              <p>📞 +254 700 123 456</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Pon Nyasani CBO. All rights reserved.</p>
          <p className="text-gray-500 text-xs mt-1">Empowering rural communities through digital transformation</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
