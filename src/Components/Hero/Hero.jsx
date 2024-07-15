import React from 'react'
import './Hero.css'
import profile_img from '../../assets/Profile_img-1.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>We are Code Crafters,</span> Frontend Developers Based in Pune,Maharashtra.</h1>
        <p>We are the Frontend Developers from Pune,Maharashtra with 3+ years of Experience in Multiple Companies like HCL, Deloitte etc.</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
            <a href="/KunjSinghal_Resume.pdf" download='KunjSinghal_Resume.pdf' className='hero-resume'>My Resume</a>
        </div>
      
    </div>
  )
}

export default Hero
