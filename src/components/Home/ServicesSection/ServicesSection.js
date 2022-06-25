import React from 'react'
import './ServicesSection.css'
import ServiceImg from '../../../images/manegedIT.png';

const ServicesSection = () => {
  return (
    <div className='servicesSection'>
      <section className='intro'>
        <p>Our Services</p>
        <h3>Stay up, Stay running, Stay protected</h3>
      </section>
      <section className='services'>
        <div className='service'>
            <div className='serviceDetails'>
                <h5>Maneged IT Services</h5>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, dignissimos. Lorem ipsum dolor sit amet.</p>
            </div>
            <div>
                <img src={ServiceImg} alt="" />
            </div>
            <div className='link'>
                <button>Stay Up Running</button>
            </div>
        </div>

        <div className='service'>
            <div className='serviceDetails'>
                <h5>Maneged IT Services</h5>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, dignissimos. Lorem ipsum dolor sit amet.</p>
            </div>
            <div>
                <img src={ServiceImg} alt="" />
            </div>
            <div className='link'>
                <button>Stay Up Running</button>
            </div>
        </div>

        <div className='service'>
            <div className='serviceDetails'>
                <h5>Maneged IT Services</h5>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, dignissimos. Lorem ipsum dolor sit amet.</p>
            </div>
            <div>
                <img src={ServiceImg} alt="" />
            </div>
            <div className='link'>
                <button>Stay Up Running</button>
            </div>
        </div>
      </section>
    </div>
  )
}

export default ServicesSection
