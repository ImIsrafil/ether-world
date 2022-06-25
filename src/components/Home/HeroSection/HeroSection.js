import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className='homeBanner'>
        <div className='heroContent'>
            <h1>An Optimum Growth To Your Business</h1>
            <br />
            <h3>We Help You To Digitalize Your Plan</h3>
            <br />
            <button className='btn btn-hero'>Learn More</button>
        </div>
        <div className='background'></div>
        <div className='background1'></div>
    </div>
  )
}

export default HeroSection
