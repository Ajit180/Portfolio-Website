import React from "react";


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
        
        </div>
      </section>
    );
  };
  
  export default AboutSection;
  