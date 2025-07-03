import { FaHome, FaUser, FaEnvelope, FaProjectDiagram, FaSun, FaMoon } from "react-icons/fa"; 
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import useThemeStore from "../store/ThemeChange";

const IconNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isDark = useThemeStore((state) => state.isDark);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  return (
    <div className={"p-4 w-full z-10"}>
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold">Ajit Yadav</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-lg">
          <a href="#Home" className="flex items-center space-x-2 hover:text-blue-400">
            <FaHome /> <span>Home</span>
          </a>
          <a href="#About" className="flex items-center space-x-2 hover:text-blue-400">
            <FaUser /> <span>About</span>
          </a>
          {/* <a href="#experience" className="flex items-center space-x-2 hover:text-blue-400">
            <MdWork /> <span>Experience</span>
          </a> */}
          <a href="#Project" className="flex items-center space-x-2 hover:text-blue-400">
            <FaProjectDiagram /> <span>Projects</span>
          </a>
          <a href="#Contact" className="flex items-center space-x-2 hover:text-blue-400">
            <FaEnvelope /> <span>Contact</span>
          </a>
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
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <AiOutlineMenu size={30} />
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 text-white text-center mt-4 space-y-3 p-4">
          <a href="#Home" className="flex justify-center items-center space-x-2 hover:text-blue-400">
            <FaHome /> <span>Home</span>
          </a>
          <a href="#About" className="flex justify-center items-center space-x-2 hover:text-blue-400">
            <FaUser /> <span>About</span>
          </a>
          {/* <a href="#experience" className="flex justify-center items-center space-x-2 hover:text-blue-400">
            <MdWork /> <span>Experience</span>
          </a> */}
          <a href="#Project" className="flex justify-center items-center space-x-2 hover:text-blue-400">
            <FaProjectDiagram /> <span>Projects</span>
          </a>
          <a href="#Contact" className="flex justify-center items-center space-x-2 hover:text-blue-400">
            <FaEnvelope /> <span>Contact</span>
          </a>
        </div>
      )}
    </div>
  );
};

export default IconNavbar;
