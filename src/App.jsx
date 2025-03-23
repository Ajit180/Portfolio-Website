
import About from './Components/About'
import AboutSection from './Components/AboutSection'
import Contact from './Components/Contact'
import Experiance from './Components/Experiance'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import IconNavbar from './Components/IconNavbar'
import Navbar from './Components/Navbar'
import Project from './Components/Project'
import './index.css'

import React from 'react'

const App = () => {
  return (
    <div>
        {/* <Navbar/> */}
        <IconNavbar/>
        <Hero/>
        <About/>
        <Project/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default App

