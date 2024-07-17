import React, { useState } from 'react'
import './Header.css'
import { TiThMenu } from "react-icons/ti";
import { TbWaveSine } from "react-icons/tb";


const Header = () => {

  const [Show, setShow] = useState(false);
  return (
       <section className='header_section'>
         <nav className='container'>
            <h3 className='Brand_title'>SINE<TbWaveSine/><span>GYM</span></h3>
            <ul className={Show ? "hide_menu" : "show_menu"}>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>AboutUs</a></li>
                <li><a href='#'>classes</a></li>
                <li><a href='#'>Staff</a></li>
                <li><a href='#'>Contact us</a></li>
                <li><a href='#'>Join Now</a></li>
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