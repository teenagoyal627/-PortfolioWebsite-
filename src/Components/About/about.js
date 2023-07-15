import React from 'react'
import Navbar from '../Navbar./navbar'
import Footer from '../Footer/footer'
import HeroSection from '../HeroSectionForAll/heroSection'
import AboutContent from './AboutContent'
const About = () => {
  return (
    <div>
     <Navbar/>
     <HeroSection heading={"ABOUT."} text={"I'm a Full-stack developer."}/>
     <AboutContent/>
     <Footer/>
    </div>
  )
}

export default About
