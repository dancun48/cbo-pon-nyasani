import React from 'react'
import Hero from '../components/common/Hero'
import AboutPreview from '../components/common/AboutPreview'
import ProgramsPreview from '../components/common/ProgramsPreview'
import ImpactStats from '../components/common/ImpactStats'
import DirectorMessage from '../components/common/DirectorMessage'
import CTASection from '../components/common/CTASection'

const HomePage = () => {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ProgramsPreview />
      <ImpactStats />
      <DirectorMessage />
      <CTASection />
    </>
  )
}

export default HomePage
