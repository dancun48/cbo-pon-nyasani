import React from 'react'
import { Link } from 'react-router-dom'

const ProgramsPreview = () => {
  const programs = [
    { title: "Digital Literacy 101", icon: "💻", color: "blue", audience: "Teenagers & Youth" },
    { title: "Coding & Web Dev", icon: "⌨️", color: "green", audience: "Advanced Youth" },
    { title: "Teen Mom Empowerment", icon: "👩‍👧", color: "orange", audience: "Teen Mothers" },
    { title: "Community Feeding", icon: "🍲", color: "yellow", audience: "Vulnerable Groups" },
  ]

  return (
    <section className="py-20 bg-secondary-light">
      <div className="container-custom">
        <h2 className="section-title">Our Key Programs</h2>
        <p className="section-subtitle">
          Tailored programs for every age group, from early childhood to seniors who want to learn.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((prog, idx) => (
            <div key={idx} className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className={`text-4xl mb-4 ${prog.color === 'blue' && 'text-primary-blue'}
                ${prog.color === 'green' && 'text-primary-green'}
                ${prog.color === 'orange' && 'text-primary-orange'}
                ${prog.color === 'yellow' && 'text-primary-yellow'}
              `}>
                {prog.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{prog.title}</h3>
              <span className="inline-block text-xs bg-gray-100 px-3 py-1 rounded-full mb-3">
                {prog.audience}
              </span>
              <p className="text-text-gray text-sm">
                {prog.title === "Digital Literacy 101" && "Basic computer skills, internet safety, and productivity tools."}
                {prog.title === "Coding & Web Dev" && "HTML, CSS, JavaScript, and Python fundamentals."}
                {prog.title === "Teen Mom Empowerment" && "Digital skills with childcare support and entrepreneurship."}
                {prog.title === "Community Feeding" && "Regular meals for vulnerable children and elderly."}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link to="/programs" className="btn-outline">
            View All Programs →
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ProgramsPreview
