import React from 'react'

const DirectorMessage = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-blue to-primary-green text-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Message from Our Director</h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <p className="text-lg md:text-xl mb-6 leading-relaxed">
              "At <span className="font-semibold">Pon Nyasani CBO</span>, we believe that every community, 
              no matter how rural or underserved, holds immense potential for transformation when people are 
              empowered with knowledge, opportunity, and hope.
              
              Our journey began with a simple but powerful realization: many talented young mothers, girls, 
              and youth in rural communities remain trapped in poverty not because they lack ability, but 
              because they lack access to information, digital skills, and opportunities."
            </p>
            <p className="font-bold text-xl">Mr. Martin Akunya</p>
            <p className="text-sm opacity-90">Founder & Director, Pon Nyasani CBO</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DirectorMessage
