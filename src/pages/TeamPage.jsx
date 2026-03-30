import React from 'react'
import PageHeader from '../components/common/PageHeader'

const TeamPage = () => {
  const leaders = [
    { name: "Mr. Martin Akunya", role: "Founder & Director", focus: "Strategic Leadership & Vision", color: "blue", description: "Passionate about community empowerment, youth mentorship, and social development. Leads the organization with a vision for digital transformation in rural communities." },
    { name: "Jane Akinyi", role: "Programs Coordinator", focus: "Digital Training & ICT Hub", color: "green", description: "Oversees all training programs and ensures quality delivery of digital literacy initiatives." },
    { name: "Grace Achieng", role: "Women & Youth Lead", focus: "Empowerment & Childcare", color: "orange", description: "Dedicated to supporting teen mothers and young women through mentorship and empowerment programs." },
    { name: "Peter Omondi", role: "Tech & Infrastructure", focus: "Connectivity & Equipment", color: "yellow", description: "Manages Wi-Fi hotspots and ensures reliable technology infrastructure for all programs." },
  ]

  const members = [
    "Community Tech Mentors (5+)",
    "Early Childhood Educators",
    "Volunteer Coders",
    "Youth Ambassadors",
    "Administrative Support Staff"
  ]

  return (
    <>
      <PageHeader 
        title="Our Team" 
        subtitle="Passionate individuals driving digital transformation in Siaya County"
      />
      
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-title">Leadership Team</h2>
          <p className="section-subtitle">Meet the dedicated leaders guiding our mission forward</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leaders.map((leader, idx) => (
              <div key={idx} className="bg-secondary-light rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className={`h-32 bg-gradient-to-r 
                  ${leader.color === 'blue' && 'from-primary-blue to-blue-600'}
                  ${leader.color === 'green' && 'from-primary-green to-green-600'}
                  ${leader.color === 'orange' && 'from-primary-orange to-orange-500'}
                  ${leader.color === 'yellow' && 'from-primary-yellow to-yellow-500'}
                `}></div>
                <div className="p-6 text-center">
                  <div className="w-24 h-24 rounded-full bg-white shadow-lg mx-auto -mt-12 mb-4 flex items-center justify-center border-4 border-white">
                    <span className="text-3xl font-bold text-primary-blue">{leader.name.charAt(0)}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-1">{leader.name}</h3>
                  <p className="text-primary-blue font-semibold text-sm mb-2">{leader.role}</p>
                  <p className="text-text-gray text-sm mb-2">{leader.focus}</p>
                  <p className="text-text-light text-xs">{leader.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-secondary-light">
        <div className="container-custom">
          <h2 className="section-title">Our Dedicated Team</h2>
          <p className="section-subtitle">A growing team of passionate individuals making a difference</p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {members.map((member, idx) => (
              <span key={idx} className="bg-white px-6 py-3 rounded-full shadow-md text-text-dark font-medium hover:shadow-lg transition-shadow">
                {member}
              </span>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-text-gray">➕ Growing team of volunteers and community members joining every month</p>
            <a href="/contact" className="btn-primary inline-block mt-6">
              Join Our Team
            </a>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-primary-blue mb-4">From Our Director</h2>
          <div className="bg-secondary-light rounded-2xl p-8">
            <p className="text-text-gray italic mb-4">
              "When women are empowered, children are supported, and communities are equipped with knowledge, 
              lasting transformation becomes possible. We are committed to building a future where rural communities 
              are not only connected to the digital world but are also able to use it as a tool to fight poverty."
            </p>
            <p className="font-semibold text-primary-blue">Mr. Martin Akunya</p>
            <p className="text-sm text-text-light">Founder & Director, Pon Nyasani CBO</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default TeamPage
