import React from 'react'
import './Experience.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import IBM_SkillsBuild from '../../assets/IBM_Skillsbuild.jpeg'
const Experience = () => {
  return (
      <div id='experience' className='experience'>
    <div className="experience-title">
        <h1>Experiences</h1>
        <img src={theme_pattern}alt="" />
    </div>
    <div className="experience-content1">
<img src={IBM_SkillsBuild} alt="" />
        <h2>IBM SkillsBuild</h2>
        <p>Web Development Internship</p>
        <p>19-Jun-2023 to 19-July-2023</p>
    </div>
    <div className="experience-content2">
        <h2>Data Kaltics Private Ltd.</h2>
        <p>Front-End Development Intern</p>
        <p>1-May-2024 to 1-August-2024</p> 
    </div>

    </div>
  )
}

export default Experience
