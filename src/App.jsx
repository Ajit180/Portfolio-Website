
import About from './Components/About'
import Contact from './Components/Contact'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import Project from './Components/Project'
import './index.css'

import React from 'react'

const App = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <About/>
        <Project/>
        <Contact/>
    </div>
  )
}

export default App

