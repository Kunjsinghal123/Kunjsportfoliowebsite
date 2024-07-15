import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import Profile_img from '../../assets/Profile_img-1.png'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme_pattern}alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={Profile_img} alt="" />
                </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am a passionate frontend developer with a strong background in creating responsive and user-friendly web applications. With expertise in HTML, CSS, and JavaScript, as well as experience with modern frameworks like React, I excel at transforming design mockups into interactive, high-performance websites. </p>
                    <p>I want to work for a company that values its employees and fosters a positive work environment. A place where teamwork is encouraged and everyone's contributions are appreciated. I am looking for a company that prioritizes growth and learning, offering opportunities for professional development.Lastly, I want to be part of a team that is passionate about its mission and committed to making a positive impact.</p>
                     </div>
                     <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}} /></div>
                        <div className="about-skill"><p>CSS</p><hr style={{width:"70%"}} /></div>
                        <div className="about-skill"><p>Javascript</p><hr style={{width:"60%"}} /></div>
                        <div className="about-skill"><p>React Js</p><hr style={{width:"50%"}} /></div>
                     </div>
            </div>
        </div>
        <div className="about-achievements">
        <div className="about-achievement">
            <h1>3+</h1>
            <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>10+</h1>
            <p>PROJECT COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>15+</h1>
            <p>HAPPY CLIENTS</p>
        </div>
        <hr />
        </div>
        </div>

  )
}

export default About
