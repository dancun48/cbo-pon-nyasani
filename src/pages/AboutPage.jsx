import React from 'react'
import PageHeader from '../components/common/PageHeader'

const AboutPage = () => {
  const coreValues = [
    { title: "Digital Inclusion", desc: "Ensuring no one is left behind in the digital revolution", color: "blue" },
    { title: "Empowerment", desc: "Building confidence and skills for self-reliance", color: "green" },
    { title: "Compassion", desc: "Supporting the most vulnerable with dignity", color: "orange" },
    { title: "Community Ownership", desc: "Programs driven by community needs", color: "yellow" },
  ]

  return (
    <>
      <PageHeader 
        title="About Us" 
        subtitle="Learn about our mission, vision, and the community we serve"
      />
      
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary-blue mb-4">Our Story</h2>
              <p className="text-text-gray mb-4">
                <span className="font-semibold">Pon Nyasani Community Based Organization (CBO)</span> is a grassroots rural organization dedicated to empowering vulnerable communities through digital literacy, education support, and social welfare programs.
              </p>
              <p className="text-text-gray mb-4">
                The name <span className="font-semibold">Pon Nyasani</span> comes from the Luo language, meaning <span className="italic">"living in the current generation" or "being relevant in today's time."</span> This reflects our mission: ensuring rural communities are fully equipped to participate and thrive in the modern digital era.
              </p>
              <p className="text-text-gray">
                Founded in November 2025, we work to address poverty, social exclusion, and limited access to opportunities among rural populations, particularly young mothers, girls, children, and the elderly.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary-blue to-primary-green rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="mb-6">A digitally empowered community where every young person, teen mother, and child has the skills and tools to thrive in the digital economy.</p>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p>To provide accessible digital training, internet connectivity, and a nurturing environment that transforms lives through technology.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-secondary-light">
        <div className="container-custom">
          <h2 className="section-title">Our Core Values</h2>
          <p className="section-subtitle">Guiding principles that drive our work every day</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-2xl
                  ${value.color === 'blue' && 'bg-blue-100 text-primary-blue'}
                  ${value.color === 'green' && 'bg-green-100 text-primary-green'}
                  ${value.color === 'orange' && 'bg-orange-100 text-primary-orange'}
                  ${value.color === 'yellow' && 'bg-yellow-100 text-primary-yellow'}
                `}>
                  {value.color === 'blue' && '🌍'}
                  {value.color === 'green' && '💪'}
                  {value.color === 'orange' && '❤️'}
                  {value.color === 'yellow' && '🤝'}
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-text-gray">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-title">Key Program Areas</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-l-4 border-primary-blue pl-4">
              <h3 className="text-xl font-bold text-primary-blue mb-2">Digital Literacy and Skills Development</h3>
              <p className="text-text-gray">Training young mothers and girls on digital tools, online communication, digital entrepreneurship, and safe internet use.</p>
            </div>
            <div className="border-l-4 border-primary-green pl-4">
              <h3 className="text-xl font-bold text-primary-green mb-2">Women and Girls Empowerment</h3>
              <p className="text-text-gray">Building confidence, leadership, and economic independence among young women through knowledge sharing and mentorship.</p>
            </div>
            <div className="border-l-4 border-primary-yellow pl-4">
              <h3 className="text-xl font-bold text-primary-yellow mb-2">Education Support Programs</h3>
              <p className="text-text-gray">Supporting children's learning through mentorship, access to learning resources, and promoting school retention.</p>
            </div>
            <div className="border-l-4 border-primary-orange pl-4">
              <h3 className="text-xl font-bold text-primary-orange mb-2">Community Feeding Program</h3>
              <p className="text-text-gray">Establishing and running a feeding center to provide meals for vulnerable children and elderly members of the community.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutPage
