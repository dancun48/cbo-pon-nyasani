import React from 'react'
import PageHeader from '../components/common/PageHeader'

const ProgramsPage = () => {
  const programs = [
    {
      title: "Digital Literacy 101",
      audience: "Teenagers & Youth",
      description: "From basic computer operation to internet safety, email, and productivity tools. Learn essential digital skills for everyday life and work.",
      icon: "💻",
      color: "blue",
      details: ["Basic computer operation", "Internet safety", "Email & communication", "Productivity tools"]
    },
    {
      title: "Coding & Web Development",
      audience: "Advanced Youth",
      description: "HTML, CSS, JavaScript, and introduction to Python for future developers. Build real-world projects.",
      icon: "⌨️",
      color: "green",
      details: ["HTML & CSS fundamentals", "JavaScript basics", "Python introduction", "Project-based learning"]
    },
    {
      title: "Teen Mom Empowerment",
      audience: "Teen Mothers",
      description: "Digital skills training with childcare support at our ECE center. Entrepreneurship and online freelancing opportunities.",
      icon: "👩‍👧",
      color: "orange",
      details: ["Childcare support", "Digital entrepreneurship", "Online freelancing", "Financial literacy"]
    },
    {
      title: "ICT Hub Training",
      audience: "All Ages",
      description: "Hands-on access to computers, mentorship, and group projects in our upcoming ICT hub.",
      icon: "🏛️",
      color: "yellow",
      details: ["Computer access", "Mentorship programs", "Group projects", "Innovation workshops"]
    },
    {
      title: "Wi-Fi Entrepreneurship",
      audience: "Community",
      description: "Selling internet access to sustain our programs while connecting the community. Revenue generation for sustainability.",
      icon: "📶",
      color: "green",
      details: ["Affordable internet", "Community hotspots", "Revenue generation", "Digital access for all"]
    },
    {
      title: "Kids Tech Club",
      audience: "Young Children",
      description: "Fun, age-appropriate introduction to technology and problem-solving through games and activities.",
      icon: "🧸",
      color: "blue",
      details: ["Age-appropriate tech", "Problem-solving games", "Creative activities", "Early digital literacy"]
    },
    {
      title: "Community Feeding Program",
      audience: "Vulnerable Groups",
      description: "Regular meals for vulnerable children and elderly individuals who lack access to basic food.",
      icon: "🍲",
      color: "orange",
      details: ["Nutritious meals", "Children support", "Elderly care", "Dignity restoration"]
    },
    {
      title: "Community Awareness",
      audience: "All Community",
      description: "Promoting awareness on digital inclusion, education, and poverty reduction within rural communities.",
      icon: "📢",
      color: "yellow",
      details: ["Digital inclusion awareness", "Education advocacy", "Poverty reduction", "Community engagement"]
    }
  ]

  return (
    <>
      <PageHeader 
        title="Our Programs" 
        subtitle="Tailored programs for every age group, from early childhood to seniors who want to learn"
      />
      
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((prog, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border-t-4 
                border-t-primary-blue">
                <div className="p-6">
                  <div className="text-4xl mb-4">{prog.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{prog.title}</h3>
                  <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3
                    ${prog.color === 'blue' && 'bg-blue-100 text-primary-blue'}
                    ${prog.color === 'green' && 'bg-green-100 text-primary-green'}
                    ${prog.color === 'orange' && 'bg-orange-100 text-primary-orange'}
                    ${prog.color === 'yellow' && 'bg-yellow-100 text-primary-yellow'}
                  `}>
                    {prog.audience}
                  </span>
                  <p className="text-text-gray mb-4">{prog.description}</p>
                  <ul className="space-y-1">
                    {prog.details.map((detail, i) => (
                      <li key={i} className="text-sm text-text-light flex items-center gap-2">
                        <span className="text-primary-green">✓</span> {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-gradient-to-r from-primary-blue to-primary-green rounded-2xl p-8 text-center text-white">
            <p className="text-xl font-semibold mb-4">🎓 Special priority given to young girls, teen mothers, and those without access to digital tools.</p>
            <a href="/contact" className="inline-block bg-white text-primary-blue font-semibold py-3 px-8 rounded-full hover:shadow-lg transition-shadow">
              Join a Program Today
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProgramsPage
