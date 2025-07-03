
import About from './Components/About'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import IconNavbar from './Components/IconNavbar'
import Project from './Components/Project'
import TechStackSVG from './Components/TechStackSVG'
import './index.css'
import useThemeStore from './store/ThemeChange'

const App = () => {
  const isDark = useThemeStore((state)=>state.isDark);
  return (
    <div className={`${isDark?'bg-black text-white':'bg-white text-black'} transition-colors duration-900`}>
        <IconNavbar/>
        <Hero/>
        <About/>
        <Project/>
        <TechStackSVG/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default App

