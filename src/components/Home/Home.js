import React from 'react'
import CompanyShowcase from './CompanyShowcase/CompanyShowcase';
import HeroSection from './HeroSection/HeroSection'
import './Home.css';
import ServicesSection from './ServicesSection/ServicesSection';

const Home = () => {
  return (
    <div className='home'>
      <HeroSection />
      <CompanyShowcase />
      <ServicesSection />
    </div>
  )
}

export default Home
