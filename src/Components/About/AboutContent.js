import React from 'react'
import './AboutContent.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
const AboutContent = () => {
  return (
    <div className='about'>
    <div className="left">
        <h1>Who Am I?</h1>
        <p> I am a react font-end developer.I create responsive secure websites.</p>
        <Link to='/contact'>
            <button className='btn'>Contact</button>
        </Link>
    </div>

    <div className="right">
        <div className="img-container">
            <div className="img-stack_top">
                <img src="Image/react3.jpeg" alt="topImage" className="img" />
            </div>
            <div className="img-stack_bottom">
                <img src="Image/react5.jpeg" alt="bottomImage" className="img" />
            </div>
        </div>
    </div>
      
    </div>
  )
}

export default AboutContent
