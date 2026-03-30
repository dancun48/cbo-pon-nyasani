import React from 'react'

const ImpactStats = () => {
  const stats = [
    { number: "250+", label: "Youth Trained in Digital Skills", color: "blue" },
    { number: "45+", label: "Teen Mothers Enrolled", color: "orange" },
    { number: "3", label: "Active Wi-Fi Hotspots", color: "green" },
    { number: "30+", label: "Children in ECE Program", color: "yellow" },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <h2 className="section-title">Our Impact So Far</h2>
        <p className="section-subtitle">Since November 2025, we've been transforming lives in Siaya County</p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center p-6 bg-secondary-light rounded-xl">
              <div className={`text-3xl md:text-4xl font-bold mb-2 
                ${stat.color === 'blue' && 'text-primary-blue'}
                ${stat.color === 'green' && 'text-primary-green'}
                ${stat.color === 'orange' && 'text-primary-orange'}
                ${stat.color === 'yellow' && 'text-primary-yellow'}
              `}>
                {stat.number}
              </div>
              <div className="text-text-gray text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-secondary-light rounded-2xl p-8 text-center">
          <p className="text-lg italic text-text-dark mb-4">
            "The Wi-Fi hotspot near my home has allowed me to learn online and even earn from freelance work. 
            This CBO gave me hope."
          </p>
          <p className="font-semibold text-primary-blue">— Mary, 19, Siaya Town</p>
        </div>
      </div>
    </section>
  )
}

export default ImpactStats
