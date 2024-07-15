import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src={footer_logo} alt="" />
                    <p>We are the Frontend Developer from Pune,Maharashtra with 3+ years of Experience in Multiple Companies like HCL, Deloitte etc.</p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src={user_icon} alt="" />
                        <input type="email" placeholder='Enter Your Mail' />
                    </div>
                    <div className="footer-subscribe"> Subscribe </div>
                </div>
            </div>
            <hr />

            <div className="icons">
                <a href="https://www.linkedin.com/in/kunj-singhal-97373922b" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/Kunjsinghal123" target="_blank" rel="noopener noreferrer">
                    <FaGithubSquare />
                </a>
                <a href="mailto:kunjsinghal08@gmail.com">
                <SiGmail className="gmail-icon" />
                </a>
            </div>
            <div className="footer-bottom">
                <p className="footer-bottom-left">©2023 Kunj Singhal.All Right Reserved.</p>
                <div className="footer-bottom-right">
                    <p>Terms of Service</p>
                    <p>Privacy Policy</p>
                    <p>Contact With Me</p>
                </div>
            </div>
        </div>

    )
}

export default Footer
