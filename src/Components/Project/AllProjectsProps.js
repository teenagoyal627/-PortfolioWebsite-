import React from 'react'
import './projectCard.css'
const AllProjectProps = (props) => {
  return (
  
        <div className="project-card">
            <img src={props.image} alt="" />
            <h2 className="project-title">{props.title}</h2>
            <div className="project-des">
                <p>{props.text}</p>
                <div className="pro-btns">
                    <a href={props.view} className='btn'>View</a>
                    <a href={props.source} className='btn'>Source</a>

                </div>
            </div>
        </div>
   
  )
}

export default AllProjectProps
