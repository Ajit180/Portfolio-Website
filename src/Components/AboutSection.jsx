import React from "react";
import { FaHtml5,FaCss3 } from "react-icons/fa";


const AboutSection = () => {
    return (
      <section className=" bg-black flex flex-col md:flex-row items-center justify-between gap-8 p-8 ">
        {/* Left Side - Image & About Info */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl font-bold mt-4">About Me</h2>
          <p className="text-white mt-2">
            I am a passionate Full Stack Developer skilled in the MERN stack. I love building 
            scalable web applications and solving complex problems with clean, efficient code.
          </p>
        </div>
  
        {/* Right Side - Technologies */}
        <div className="md:w-1/2 grid grid-cols-3 gap-6 justify-center text-center">
          {/* Each tech icon with label */}
          <div className="flex flex-col items-center">
          <FaHtml5 className="bg-blue-400 w-12 h-12" size={60}/>
          <span className="text-sm mt-2 text-white">HTML</span>
          </div>
          <div className="flex flex-col items-center">
            {/* <img src="/icons/css.svg" alt="CSS" className="w-12 h-12" /> */}
            <FaCss3 className="bg-blue-500" size={60} />
            <span className="text-sm mt-2 text-white">CSS</span>
          </div>
          <div className="flex flex-col items-center">
            <img src="/icons/javascript.svg" alt="JavaScript" className="w-12 h-12" />
            <span className="text-sm mt-2">JavaScript</span>
          </div>
          <div className="flex flex-col items-center">
            <img src="/icons/react.svg" alt="React" className="w-12 h-12" />
            <span className="text-sm mt-2">React.js</span>
          </div>
          <div className="flex flex-col items-center">
            <img src="/icons/nodejs.svg" alt="Node.js" className="w-12 h-12" />
            <span className="text-sm mt-2">Node.js</span>
          </div>
          <div className="flex flex-col items-center">
            <img src="/icons/mongodb.svg" alt="MongoDB" className="w-12 h-12" />
            <span className="text-sm mt-2">MongoDB</span>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutSection;
  