import React from 'react'
import './about.css'
import Me from '../../assets/Me.jpg'
import { FaAward } from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
   <section id="About">
    <h5>Get To Know</h5>
    <h2>About Me</h2>
    <div className="container about_container">
      <div className="about_me">
        <div className="about_me-image">
           <img src={Me} alt="About Image" />
        </div>
      </div>
   
      <div className="about_content">
        <div className="about_cards">
        <article className='about_card'>
          < FaAward  className='about_icon'/>
          <h5  className='numbers'>Experirnce</h5>
          <small className='numbers'>2+ Years Working</small>
        </article>
        <article className='about_card'>
          < VscFolderLibrary className='about_icon'/>
          <h5  className='numbers'>Projects</h5>
          <small className='numbers'>4+ Projects</small>
        </article>
        <article className='about_card'>
          < VscFolderLibrary className='about_icon'/>
          <h5  className='numbers'>Skills</h5>
          <small className='numbers'>20+ Skills</small>
        </article>
        </div>
        <p>
          I graduated at Bindura University with an upper second class in Computer Science. I have skills in information security, cyber 
          security, networking engeneering, systems analysis and designing, software project management, desktop app development,
           web developmnt, API testing and Artficial Intelligence. I have done projects in front end development using vue.js, react.js,
           materialize and Bootstrap and UI/UX designing using adobe XD
        </p>
        <a href="#contact" className='btn btn-primary'>lets talk</a>        
      </div>
    </div>
   </section>
  )
}

export default About