import { FaHome, FaUser, FaEnvelope, 
  FaProjectDiagram, FaSun, FaMoon,FaLinkedin ,FaGithub} from "react-icons/fa"; 
  import { IoMdClose } from "react-icons/io";
import { GoFile } from "react-icons/go";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import useThemeStore from "../store/ThemeChange";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {isDark,toggleTheme} = useThemeStore()

  return (
    <div className={"p-4 w-full z-10"}>
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to={'/'}>
        <h1  className="text-2xl font-bold">Ajit Yadav</h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-lg">
          <a href="/" className="flex items-center space-x-2 hover:text-blue-400">
            <FaHome /> <span>Home</span>
          </a>
           <a href="#Project" className="flex items-center space-x-2 hover:text-blue-400">
            <FaProjectDiagram /> <span>Projects</span>
          </a>
           <a href="/resume" className="flex items-center space-x-2 hover:text-blue-400">
            <GoFile /> <span>Resume</span>
          </a>
         <a href="https://github.com/ajit180" className="flex items-center space-x-2 hover:text-blue-400">
            <FaGithub /> <span>Github</span>
          </a>
           <a href="https://www.linkedin.com/in/ajit180/" className="flex items-center space-x-2 hover:text-blue-400">
            <FaLinkedin /> <span>LinkedIn</span>
          </a>
          {/* <a href="#experience" className="flex items-center space-x-2 hover:text-blue-400">
            <MdWork /> <span>Experience</span>
          </a> */}
         
          {/* Theme Toggle */}
          <button
             onClick={toggleTheme}
              className="p-2 rounded-full hover:text-blue-400"
                title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
               >
              {isDark ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>

        </div>

        {/* Mobile Menu Button */}
        {
        <button className="md:hidden"  onClick={() => setIsOpen(!isOpen)}>

          {isOpen?<IoMdClose size={30}/>:<AiOutlineMenu size={30}/>}
        </button>
}
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 text-white text-center mt-4 space-y-3 p-4">
          <a href="#Home" className="flex justify-center items-center space-x-2 hover:text-blue-400">
            <FaHome /> <span>Home</span>
          </a>
          <a href="#Project" onClick={()=>setIsOpen(!isOpen)} className="flex justify-center items-center space-x-2 hover:text-blue-400">
            <FaProjectDiagram /> <span>Projects</span>
          </a>
          {/* <a href="#experience" className="flex justify-center items-center space-x-2 hover:text-blue-400">
            <MdWork /> <span>Experience</span>
          </a> */}
          <a href="#resume"  onClick={()=>setIsOpen(!isOpen)} className="flex justify-center items-center space-x-2 hover:text-blue-400">
            <GoFile /> <span>Resume</span>
          </a>
          <a href="https://github.com/ajit180" onClick={()=>setIsOpen(!isOpen)} className="flex justify-center items-center space-x-2 hover:text-blue-400">
             <FaGithub /> <span>Github</span>
          </a>
           <a href="https://www.linkedin.com/in/ajit180/" onClick={()=>setIsOpen(!isOpen)} className="flex justify-center items-center space-x-2 hover:text-blue-400">
              <FaLinkedin /> <span>LinkedIn</span>
          </a>
            
        </div>
      )}
    </div>
  );
};

export default Navbar;
