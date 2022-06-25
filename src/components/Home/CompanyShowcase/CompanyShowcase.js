import React from 'react'
import './CompanyShowcase.css'
import WorkingImg from '../../../images/working.jpg'
import TeamImg from '../../../images/team.jpeg'
import ClientImg from '../../../images/client.jpg'

const CompanyShowcase = () => {
  return (
    <div className='showcase'>
      <div className='mainShowcase'>
        <div className='top'>
            <div className='left'>
                <p>Our Company</p>
                <h5>EtherWorld is your trusted source in IT services and support</h5>
            </div>
            <div className='right'>
                <p>
                EtherWorld is a privately owned IT Support and IT Services business formed in 1988. Today we’re proud to boast a strong team of IT engineers who thrive on rolling up their sleeves and solving your IT problems and meeting your business needs.
                </p>
            </div>
        </div>
        <div className='bottom'>
            <div className='showcaseCard'>
                <img src={WorkingImg} alt="" />
                <div className='show'>
                    <div className='showContent'>
                        <span>Our Services</span>
                        <h5>How we can help</h5>
                        <a href='/'>Discover now &rarr;</a>
                    </div>
                </div>
            </div>
            <div className='showcaseCard'>
                <img src={TeamImg} alt="" />
                <div className='show'>
                    <div className='showContent'>
                        <span>Our expertise</span>
                        <h5>Why partner with us</h5>
                        <a href='/'>Learn more &rarr;</a>
                    </div>
                </div>
            </div>
            <div className='showcaseCard'>
                <img src={ClientImg} alt="" />
                <div className='show'>
                    <div className='showContent'>
                        <span>Our Customer</span>
                        <h5>Client success stories</h5>
                        <a href='/'>Read more &rarr;</a>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CompanyShowcase
