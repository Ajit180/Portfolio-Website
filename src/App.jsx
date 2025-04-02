
import About from './Components/About'
import AboutSection from './Components/AboutSection'
import Contact from './Components/Contact'
import Experiance from './Components/Experiance'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import IconNavbar from './Components/IconNavbar'
import Navbar from './Components/Navbar'
import Project from './Components/Project'
import TechStack from './Components/TechStack'
import TechStackSVG from './Components/TechStackSVG'
import './index.css'

import React from 'react'

const App = () => {
  return (
    <>
        {/* <Navbar/> */}
        <IconNavbar/>
        <Hero/>
        <About/>
        <Project/>
        {/* <TechStack/> */}
        <TechStackSVG/>
        <Contact/>
        <Footer/>
    </>
  )
}

export default App

