import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/btc.png'
import IMG2 from '../../assets/btc1.jpg'
import IMG3 from '../../assets/fgg.jpg'
import IMG4 from '../../assets/rms.jpg'
import Ai from './projects/ai.js'
import Ui from './projects/ui.js'
import Graphic from './projects/graphic'
import Coding from './projects/coding'
import { Link, Route } from 'react-router-dom'
import Projects from './pjojects'



export const Portfolio = () => {
    const data =[
      {
        id:1,
        image:IMG1,
        title:'Crypto Currency price prediction',
        github:'https://github.com',
        path : '/ai'
      },
      {
        id:2,
        image:  IMG2,
        title:'Calorie Calculator',
        github:'https://github.com',
        path: '/ui',
        tech:"Python Language, pyQt framework"
      },
      {
        id:3,
        image:IMG3,
        title:'Chicken Stock management portal',
        path: '/graphic',
        demo:'https://google.com'
      },
      {
        id:4,
        image:IMG4,
        title:'Restaurant Management System',
        github:'https://github.com',
        path: '/coding'
      }
    ]

  return (
    <section id="Portfolio">
      <h5> My Recent Work</h5>
      <h2>Porfolio</h2>

      <div className="container portfolio_container">
        {
       data.map(({id,image,title,github,path,tech})=>{
        return(
          <article key={id} className="portfolio_items">
          <div className="portfolio_items_image">
          <img src={image} alt={title} />
          {tech}
          </div>
         
          <h3>{title}</h3>
          <div className="cta">
            <a href={github} className="btn" target='_blank'>Github</a>        
            <a href={< Projects /> } className="btn" target='_blank'>Github</a>           

            
          </div>
         
        
        </article>
        
        )
       })}
      </div>
    </section>
  )
}
