
import About from './Components/About'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
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
        <Footer/>
    </div>
  )
}

export default App

