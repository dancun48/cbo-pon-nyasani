import React from 'react'

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] bg-gradient-to-r from-primary-blue via-primary-green to-primary-yellow flex items-center text-center text-white">
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="relative container-custom w-full z-10">
        <div className="animate-fade-in">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-6">
            <span>✨ Since November 2025</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Bridging the Digital Gap,<br />
            <span className="bg-gradient-to-r from-yellow-300 to-white bg-clip-text text-transparent">
              Transforming Communities
            </span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-95">
            Empowering young mothers, girls, youth, and the elderly in Siaya County through digital literacy, 
            education support, and community welfare programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary bg-white text-primary-blue hover:bg-gray-100 shadow-lg">
              Get Involved
            </a>
            <a href="/programs" className="btn-outline border-white text-white hover:bg-white hover:text-primary-blue">
              Our Programs
            </a>
          </div>
          
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mt-12">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold">200+</div>
              <div className="text-sm opacity-90">Youth Trained</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold">50+</div>
              <div className="text-sm opacity-90">Teen Moms Supported</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold">3</div>
              <div className="text-sm opacity-90">Wi-Fi Hotspots</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
