import React, { useState } from 'react'
import './Header.css'
import { TiThMenu } from "react-icons/ti";
import { TbWaveSine } from "react-icons/tb";
import { Link } from 'react-router-dom';


const Header = () => {

  const [Show, setShow] = useState(false);
  return (
       <section className='header_section'>
         <nav className='container'>
            <h3 className='Brand_title'>SINE<TbWaveSine/><span>GYM</span></h3>
            <ul className={Show ? "hide_menu" : "show_menu"}>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/aboutus'>AboutUs</Link></li>
                <li><Link to='/class'>classes</Link></li>
                <li><Link to='/staff'>Staff</Link></li>
                <li><Link to='/pricing'>Pricing</Link></li>
                <li><Link to='/contactus'>Contact us</Link></li>
                <li><Link to='/join'>Join Now</Link></li>
            </ul>
            <div className='hamburger_menu' onClick={() => {
              setShow(!Show);
            }} >
                <TiThMenu/>
            </div>
        </nav>
       </section>
  )
}

export default Header