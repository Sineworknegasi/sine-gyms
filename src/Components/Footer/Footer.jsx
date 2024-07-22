import React from 'react'
import './Footer.css'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
  return (
    <section className='Footer_section'>
        <div className="Social_media">
            <FaInstagram className='social_icon' />
            <FaFacebookF className='social_icon'/>
            <FaTiktok className='social_icon' />
            <FaXTwitter className='social_icon'/>
        </div>
        <div className="footer_text">
            <p> {new Date().getFullYear()}©️ <span>Sine Gym</span> Copyright All Rights Reserved.</p>
        </div>
    </section>
  )
}

export default Footer
