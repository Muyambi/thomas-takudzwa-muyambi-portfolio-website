import React from 'react'
import './navbar.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import { useState } from 'react'




export const Navbar = () => {
  const [ activeNav, setActiveNav] = useState('#')
  return (
   <nav>
    <a href="#" className={ activeNav === '#' ? 'active' : ''}>< AiOutlineHome /> 
    <div className="nav-text">
      <h5>Home</h5>
    </div>
  
    </a>
    <a href="#About" onClick={()=>setActiveNav('#About')} className={activeNav ==='#About' ? 'active' : ''} >
      < AiOutlineUser /> 
      <div className="nav-text">
      <h5>About</h5>
    </div>
    </a>
    <a href="#Experience" onClick={()=>setActiveNav('#Experience')} className={activeNav ==='#Experience' ? 'active' : ''}>
      < BiBook /> 
      <div className="nav-text">
      <h5>Experience</h5>
    </div>
      </a>
    <a href="#Services" onClick={()=>setActiveNav('#Services')} className={activeNav ==='#Services' ? 'active' : ''}>
      <RiServiceLine />
      
      <div className="nav-text">
      <h5>Services</h5>
    </div> </a>
    <a href="#Contact" onClick={()=>setActiveNav('#Contact')} className={activeNav ==='#Contact' ? 'active' : ''} >
      < BiMessageSquareDetail />
      
      <div className="nav-text">
      <h5>Contact</h5>
    </div> </a>




   </nav>
  )
}
