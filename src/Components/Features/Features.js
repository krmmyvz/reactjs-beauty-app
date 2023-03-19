import React from 'react'
import './Features.css'
import service1 from '../../Assets/bg5.jpg'

function Features() {
  return (
    <div className='features-container'>
      <div className='service1'>
        <img src={service1} alt='resim1'></img>
      </div>

      <div className="aboutus1">
        <div className="about">Services</div>
        <h1 className="about2">Half Body Treatment Package</h1>
        <div className="learn1">Learn More</div>
      </div>
    </div>
  )
}

export default Features