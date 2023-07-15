import React from 'react'
import './heroSection.css'
const HeroSection = ( {heading,text}) => {
  return (
    <div className="heroImg">
    <div className="heading">
        <h1>{heading}</h1>
        <p>{text}</p>
    </div>
      
    </div>
  )
}

export default HeroSection
