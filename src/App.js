//import Home from './pages/home'
import './App.css'
import React from 'react'
import Header from './Components/Header/Header'
import { Navbar } from './Components/Navbar/Navbar'
import About from './Components/About/about'
import { Experience } from './Components/Experience/Experience'
import { Portfolio } from './Components/Portfolio/Portfolio'
import { Contact } from './Components/Contact/contact'
import { Testimonials } from './Components/Testimonials/testimonials'
import { Footer } from './Components/Footer/Footer'
import { Services } from './Components/Services/Services'
import { BrowserRouter, Route, Routes, Link} from 'react-router-dom'


function App() {
 
  return (
          
    <>
    < Header/>
    < Navbar />
    < About />
    < Experience />
    <Services />
    < Portfolio />
    < Contact />
    < Testimonials />
    < Footer />
  </>
     
    
    
  )
 }
  

export default App;


