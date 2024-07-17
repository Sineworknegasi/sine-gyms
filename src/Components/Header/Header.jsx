import React from 'react'
import './Header.css'
import { TiThMenu } from "react-icons/ti";
import { IoCloseSharp } from "react-icons/io5";

const Header = () => {
  return (
       <section className='header_section'>
         <nav className='container'>
            <h3 className='Brand_title'>SINE<span>GYM</span></h3>
            <ul>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>AboutUs</a></li>
                <li><a href='#'>classes</a></li>
                <li><a href='#'>Staff</a></li>
                <li><a href='#'>Contact us</a></li>
                <li><a href='#'>Join Now</a></li>
                <li className='menu_icon'><IoCloseSharp size='25'/></li>
            </ul>
            <div className='hamburger_menu'>
                <TiThMenu/>
            </div>
        </nav>
       </section>
  )
}

export default Header