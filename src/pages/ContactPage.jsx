import React, { useState } from 'react'
import PageHeader from '../components/common/PageHeader';
import { MapPin, EnvelopeSimple, Phone } from 'phosphor-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <>
      <PageHeader 
        title="Get Involved" 
        subtitle="Partner with us, volunteer, donate, or enroll in our programs"
      />
      
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-primary-blue mb-4">Support Our Mission</h2>
              <p className="text-text-gray mb-6">
                Your support helps us expand digital literacy programs, sustain our community feeding center, 
                and build the ICT Hub that will serve as a center for innovation and learning.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-primary-blue text-lg"><MapPin /></div>
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-text-gray">Siaya County, Kenya (near Siaya Town)</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-primary-green text-lg"><EnvelopeSimple /></div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-text-gray">info@ponnyasani.org</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center text-primary-yellow text-lg"><Phone /></div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-text-gray">+254 721 391 630</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-primary-blue to-primary-green rounded-xl p-6 text-white">
                <h3 className="text-xl font-bold mb-2"> Seeking Funding Partnerships</h3>
                <p className="mb-3">We are looking for partners to help us establish our ICT Hub and expand our programs.</p>
                <p className="text-sm opacity-90">Contact us to discuss partnership opportunities and how you can help transform lives in Siaya County.</p>
              </div>
            </div>
            
            <div>
              <form onSubmit={handleSubmit} className="bg-secondary-light rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-primary-blue">Send Us a Message</h3>
                
                {submitted && (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                    Thank you! We'll get back to you soon.
                  </div>
                )}
                
                <div className="mb-4">
                  <label className="block text-text-dark font-medium mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-primary-blue"
                  />
                </div>
                
                <div className="mb-4">
                  <label className="block text-text-dark font-medium mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-primary-blue"
                  />
                </div>
                
                <div className="mb-4">
                  <label className="block text-text-dark font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-primary-blue"
                  />
                </div>
                
                <div className="mb-6">
                  <label className="block text-text-dark font-medium mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-primary-blue"
                  ></textarea>
                </div>
                
                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactPage
