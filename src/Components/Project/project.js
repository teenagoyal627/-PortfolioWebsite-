import React from 'react'
import Navbar from '../Navbar./navbar'
import HeroSection from '../HeroSectionForAll/heroSection'
import Footer from '../Footer/footer'
import ProjectCard from './projectCard'
const Project = () => {
  return (
    <div>
    
     <Navbar/>
     <HeroSection heading={"Projects."} text={"Here are some my projects."}/>
     <ProjectCard/>
     <Footer/>
    
    </div>
  )
}

export default Project
