import React from 'react'
import { Routes, BrowserRouter, Route, Link} from 'react-router-dom'
import Ai from './projects/ai.js'
import Ui from './projects/ui.js'
import Graphic from './projects/graphic'
import Coding from './projects/coding'

const projects = () => {
  return (
    
    <BrowserRouter>
          <nav>
            <Link to='/ai'>Artificial Intelligence</Link>
            <Link to='/ui'>UI/UX Designing</Link>
            <Link to='/graphic'>Graphic Designing</Link>
            <Link to='/coding'>Coding</Link>
            
          </nav>
      <Routes>
            <Route path='/ai' element={< Ai />}/>
            <Route path='/ui' element={< Ui />}/>
            <Route path='/graphic' element={< Graphic />}/>
            <Route path='/coding' element={< Coding />}/>

      </Routes>
    </BrowserRouter>
)}

export default projects