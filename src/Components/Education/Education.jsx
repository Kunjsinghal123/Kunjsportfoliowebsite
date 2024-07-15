import React from 'react'
import './Education.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import BlueBirds_logo from '../../assets/BlueBirdsInternationalSchool2.jpg'
import Galgotias_logo from '../../assets/Galgotias_University.jpg'

const Education = () => {
  return (
    <div id='education' className='education'>
    <div className="education-title">
        <h1>Education</h1>
        <img src={theme_pattern}alt="" />
    </div>
    <div className="education-content1">
        <img src={BlueBirds_logo} alt="" />
        <h2>Blue Birds International School</h2>
        <p>High School</p>
        <p>2018-19</p>
    </div>
    <div className="education-content2">
    <img src={BlueBirds_logo} alt="" />
        <h2>Blue Birds International School</h2>
        <p>Senior Secondary School</p>
        <p>2020-21</p>
    </div>
    <div className="education-content3">
        <img src={Galgotias_logo} alt="" />
        <h2>Galgotias University</h2>
        <p>Bachelor's of Computer Applications</p>
        <p>2021-24</p>
    </div>

      
    </div>
  )
}

export default Education
