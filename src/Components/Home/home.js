import React from 'react'
import Navbar from '../Navbar./navbar'
import Footer from '../Footer/footer'
import HeroSectionHome from './HeroSectionHome/heroSection'
import ProjectCard from '../Project/projectCard'

const Home = () => {
  return (
    <div>
    <Navbar/>
     <HeroSectionHome/>
     <ProjectCard/>
    <Footer/>
    </div>
  )
}

export default Home
