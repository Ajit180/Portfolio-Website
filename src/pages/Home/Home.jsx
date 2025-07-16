import Navbar from '../../Components/Navbar';
import Hero from '../../Components/Hero';
import About from '../../Components/About';
import Project from '../../Components/Project';
import TechStackSVG from '../../Components/TechStackSVG';
import Contact from '../../Components/Contact';
import Footer from '../../Components/Footer';
import Experiance from '../../Components/Experiance';


const Home = () => {

  return (
    <>
        <Navbar/>
        <Hero/>
        <About/>
        <Project/>
        {/* <Experiance/> */}
        <TechStackSVG/>
        <Contact/>
        <Footer/>
    </>
  )
}

export default Home
