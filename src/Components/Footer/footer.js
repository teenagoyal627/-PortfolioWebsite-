import React from 'react'
import './fotter.css'
import { FaMailBulk} from 'react-icons/fa'
import {AiFillLinkedin} from 'react-icons/ai'
import {BsGithub,BsTwitter} from 'react-icons/bs'
const Footer = () => {
  return (
    <div className='footer'>
    <div className="footer-container">
        <div className="left">
            {/* <div className="location">
               <FaHome size={20} style={{
                color:"white",marginRight:"1rem"
               }}/> 
               <div>
                <p>House no.333 Ram Lila madan</p>
                <p>Paota(Jaipur).</p>
               </div>
            </div>
            <div className="phone">
            <h4>
               <AiFillPhone size={20} style={{color:"white",marginRight:"1rem"}}/> 
              8875389674  
              </h4>
            </div> */}
            <div className="email">
            <h4>
               <FaMailBulk size={20} style={{color:"white",marginRight:"1rem"}}/> 
               goyalteena8875@gmail.com 
              </h4>
            </div>
            <div className="social">
          <a href='https://twitter.com/TeenaGoyal18?t=bTP2UlIhBNNw1PEp56Dqtw&s=08' target='_blank' rel='noreferrer'> <BsTwitter size={30} style={{ color:"white",marginLeft:"2rem"}}/></a>
          <a href='https://www.linkedin.com/in/teena-goyal-1758b5238' target='_blank' rel='noreferrer'>  <AiFillLinkedin size={30} style={{ color:"white",marginLeft:"2rem"}}/></a>
           <a href='https://github.com/teenagoyal627' target='_blank' rel='noreferrer'> <BsGithub size={30} style={{ color:"white",marginLeft:"2rem"}}/></a>

           
           </div>
        </div>
        <div className="right">
            <h4>About myself</h4>
            <p>I am Full-stack developer.Currently I am pursuing B-tech in Computer Science from Laxmi Devi Institute Of Engineering and Technology, Chikani, Alwar.I am very passionate about improving my coding skills.Working on myself to improve my skills.</p>
          
        </div>
    </div>
      
    </div>
  )
}

export default Footer
