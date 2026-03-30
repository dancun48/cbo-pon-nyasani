import React from 'react'
import { Link } from 'react-router-dom'

const CTASection = () => {
  return (
    <section className="py-20 bg-secondary-light">
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-4">
          Join Us in Transforming Lives
        </h2>
        <p className="text-text-gray max-w-2xl mx-auto mb-8">
          Together, we can bridge the digital divide and create lasting change in Siaya County. 
          Whether through partnership, volunteering, or donations, your support makes a difference.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact" className="btn-primary">
            Partner With Us
          </Link>
          <Link to="/programs" className="btn-outline">
            Explore Programs
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CTASection
