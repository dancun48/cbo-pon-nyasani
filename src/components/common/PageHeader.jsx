import React from 'react'

const PageHeader = ({ title, subtitle }) => {
  return (
    <section className="bg-gradient-to-r from-primary-blue via-primary-green to-primary-yellow py-20 text-white">
      <div className="container-custom text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">{subtitle}</p>
      </div>
    </section>
  )
}

export default PageHeader
