import React from 'react'
import './projectCard.css'
import ProjectCardData from './DummyData'
import AllProjectProps from './AllProjectsProps'
const ProjectCard = (props) => {
  return (
    <div className='work-container'>
    <h1 className="project-heading">Projects</h1>
    <div className="project-container">
    {ProjectCardData.map((value,index)=>{
           return(
            <AllProjectProps 
              key={index}
              image={value.image}
              title={value.title}
              text={value.text}
              view={value.view}
              source={value.source}
            />
           )
    })}
   
            
    </div>
      
    </div>
  )
}

export default ProjectCard
