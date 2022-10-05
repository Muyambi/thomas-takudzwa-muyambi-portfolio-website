import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'
import {  MdPhone }  from 'react-icons/md'

export const Contact = () => {
  return (
    <section id="Contact">
      <h5>Get in touch</h5>
      <h2>Contact</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            < MdOutlineEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>muyambitaku@gmail.com</h5>
            <a href="mailto:muyambitaku@gmail.com"></a>

          </article>

          <article className="contact_option">
            < MdPhone className='contact_option-icon'/>
            <h4>Phone</h4>
            <h5 className='numbers'>+263 771 386 613</h5>
            <a href="mailto:muyambitaku@gmail.com"></a>

          </article>

          <article className="contact_option">
            < BsWhatsapp className='contact_option-icon'/>
            <h4>Whatsapp</h4>
            <h5 className='numbers'>+263 773 374 895</h5>
            <a href="mailto:muyambitaku@gmail.com"></a>

          </article>
        </div>
        <form action="">
          <input type="text" name='name' placeholder='enter full name'/>
          <input type="text" name='email' placeholder='enter your email' />
           <textarea name="essae" id="msg" rows="7" placeholder='enter your message'></textarea>  
           <button type='submit' className='btn btn-primary'>send message</button>
                 </form>
      </div>
    </section>
    
  )
}
