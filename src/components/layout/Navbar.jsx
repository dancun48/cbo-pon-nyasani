import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Team', path: '/team' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-lg py-3' : 'bg-transparent py-4'
    }`}>
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex gap-1">
            <div className="w-2.5 h-2.5 rounded-full bg-primary-blue"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-primary-green"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-primary-yellow"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-primary-orange"></div>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-extrabold text-primary-blue text-lg">Pon Nyasani</span>
            <span className="font-semibold text-primary-green text-xs tracking-wide">CBO</span>
          </div>
        </Link>
        
        <div className={`fixed md:static top-20 left-0 w-full md:w-auto bg-white md:bg-transparent 
                        flex flex-col md:flex-row items-center gap-6 md:gap-8 py-8 md:py-0 
                        transition-all duration-300 z-40 shadow-lg md:shadow-none
                        ${isOpen ? 'left-0' : 'left-[-100%]'}`}>
          {navLinks.map((link) => (
            <NavLink 
              key={link.name} 
              to={link.path} 
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => 
                `font-medium transition-colors hover:text-primary-blue ${
                  isActive ? 'text-primary-blue' : 'text-text-dark'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <Link to="/contact" className="btn-primary py-2 px-5 text-sm">
            Support Us
          </Link>
        </div>
        
        <button 
          className="md:hidden flex flex-col gap-1.5 z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={`w-6 h-0.5 bg-primary-blue transition-all duration-300 ${
            isOpen ? 'rotate-45 translate-y-2' : ''
          }`}></span>
          <span className={`w-6 h-0.5 bg-primary-blue transition-all duration-300 ${
            isOpen ? 'opacity-0' : ''
          }`}></span>
          <span className={`w-6 h-0.5 bg-primary-blue transition-all duration-300 ${
            isOpen ? '-rotate-45 -translate-y-2' : ''
          }`}></span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
