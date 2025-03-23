import { FaHome, FaUser, FaEnvelope, FaProjectDiagram } from "react-icons/fa"; 
import { MdWork } from "react-icons/md"; 
import { AiOutlineMenu } from "react-icons/ai"; 
import { useState } from "react";

const IconNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white p-4 fixed w-full z-10">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold">My Portfolio</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-lg">
          <a href="#home" className="flex items-center space-x-2 hover:text-blue-400">
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
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <AiOutlineMenu size={30} />
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 text-white text-center mt-4 space-y-3 p-4">
          <a href="#home" className="flex justify-center items-center space-x-2 hover:text-blue-400">
            <FaHome /> <span>Home</span>
          </a>
          <a href="#about" className="flex justify-center items-center space-x-2 hover:text-blue-400">
            <FaUser /> <span>About</span>
          </a>
          {/* <a href="#experience" className="flex justify-center items-center space-x-2 hover:text-blue-400">
            <MdWork /> <span>Experience</span>
          </a> */}
          <a href="#projects" className="flex justify-center items-center space-x-2 hover:text-blue-400">
            <FaProjectDiagram /> <span>Projects</span>
          </a>
          <a href="#contact" className="flex justify-center items-center space-x-2 hover:text-blue-400">
            <FaEnvelope /> <span>Contact</span>
          </a>
        </div>
      )}
    </nav>
  );
};

export default IconNavbar;
