import React from 'react'
import './footer.css'
import { FiInstagram } from 'react-icons/fi'
import { FaFacebook } from 'react-icons/fa'
import {IoLogoTwitter} from 'react-icons/io'
export const Footer = () => {
  return (
    <footer>
      <div className="footer_logo">
        miracleHands
      </div>
      <ul className="permlinks">
        <li><a href="#home">home</a></li>
        <li><a href="#About">About</a></li>
        <li><a href="#Services">Services</a></li>
        <li><a href="#Experience">Experience</a></li>
        <li><a href="#Portfolio">Portfilio</a></li>
        <li><a href="#Contact">Contact</a></li>

      </ul>

      <div className="footer_socials">
       <a href="">< FiInstagram /></a> 
       <a href="">< FaFacebook /></a> 
        <a href="">< IoLogoTwitter /></a>

      </div>


      <div className="footer_copyright">
        <small>&copy; Thomas-Takudzwa-Profile. All rights reserved </small>
      </div>

    </footer>
  )
}

export default Footer