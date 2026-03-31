import React from 'react'
import { Link } from 'react-router-dom';
import { FaLaptopCode, FaFemale, FaBook, FaUtensils } from 'react-icons/fa';

const AboutPreview = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-4">
              About Pon Nyasani CBO
            </h2>
            <p className="text-text-gray mb-4">
              <span className="font-semibold">Pon Nyasani</span> — meaning <span className="italic">"living in the current generation"</span> in Luo language — 
              is a grassroots organization dedicated to ensuring rural communities are not left behind in the digital era.
            </p>
            <p className="text-text-gray mb-6">
              We empower young mothers, girls, youth, and the elderly through digital literacy, education support, 
              and community welfare programs. Since November 2025, we've been transforming lives in Siaya County.
            </p>
            <Link to="/about" className="btn-primary inline-block">
              Learn More About Us
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-primary-blue flex  flex-col items-center to-blue-700 rounded-2xl p-6 text-white text-center">
              <div className="text-3xl mb-2"><FaLaptopCode /></div>
              <h3 className="font-bold">Digital Literacy</h3>
            </div>
            <div className="bg-gradient-to-br from-primary-green flex  flex-col items-center to-green-700 rounded-2xl p-6 text-white text-center">
              <div className="text-3xl mb-2"><FaFemale /></div>
              <h3 className="font-bold">Women Empowerment</h3>
            </div>
            <div className="bg-gradient-to-br from-primary-yellow flex  flex-col items-center to-yellow-600 rounded-2xl p-6 text-white text-center">
              <div className="text-3xl mb-2"><FaBook /></div>
              <h3 className="font-bold">Education Support</h3>
            </div>
            <div className="bg-gradient-to-br from-primary-orange flex  flex-col items-center to-orange-600 rounded-2xl p-6 text-white text-center">
              <div className="text-3xl mb-2"><FaUtensils /></div>
              <h3 className="font-bold">Feeding Program</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutPreview
