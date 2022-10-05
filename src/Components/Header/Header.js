import React from 'react'
import './Header.css'
import CTA from './CTA'
import Me from '../../assets/Picture2.png'
import HeaderSocial from './HeaderSocial'
import Typical from 'react-typical'


const Header = () => {
  return (
    <header>
      <div className="container header-container">
        <h1>Hello I'm</h1>
        <h2>Thomas Muyambi</h2>
        <h5 className="text-light">
        UI/UX Designer
        
        </h5>
        < CTA />
        <HeaderSocial />
        <div className="me">
          <img src={Me} alt="" />
        </div>
        <a className='scroll_down' href="#Contact"> scroll down </a>
      </div>
    </header>
  )
}

export default Header