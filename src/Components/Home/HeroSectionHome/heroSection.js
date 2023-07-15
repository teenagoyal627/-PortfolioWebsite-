import React from 'react'
import './heroSecitonHome.css'
import { Link } from 'react-router-dom/cjs/react-router-dom'
const HeroSectionHome = () => {
  return (
    <div className='hero'>
    <div className="mask">
        <img src="Image/back.jpg" alt="backgroundImage" className="into-img" />
    </div>
    <div className="content">
        <p>HI, I'M FULL-STACK DEVELOPER</p>
        <h1>Teena Goyal</h1>
        <div>
           <Link to='/project' className="btn">PROJECTS</Link>
           <Link to='/contact' className="btn btn-light">CONTACT</Link>
        </div>
    </div>
     
    </div>
  )
}

export default HeroSectionHome
