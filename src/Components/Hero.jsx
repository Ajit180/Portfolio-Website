import React from "react";
import heroimage from "../assets/hero.jpg";

const Hero = () => {
  return (
    <div className="bg-black text-white text-center py-16">
      <img
        className="mx-auto mb-8 w-48 h-48 rounded-full object-cover transform
       transition-transform duration-300 hover:scale-105"
        src={heroimage}
      />
      <h1 className="text-4xl font-bold">
        I'm {"  "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500 ">
          Ajit Yadav{" "}
        </span>
        , Full-Stack Developer
      </h1>
      <p className="mt-4 text-lg text-gray-300">
        {" "}
        I Specilize in building mordern Website and responsive web applications.
      </p>
      <div className="mt-8 flex flex-col gap-4 md:flex-row md:space-x-4 items-center justify-center">
        <button
          className="bg-gradient-to-r from-green-400 to-blue-500 
      transform transition-transform duration-300 hover:scale-105 
      px-4 py-2 rounded-full w-auto md:w-auto"
        >
          Contact Me
        </button>

        <a href="https://drive.google.com/file/d/17ptSquFYww0D0KpBIlfJMdngm_2oAymC/view?usp=sharing">
          <button
            className="bg-gradient-to-r from-pink-500 to-yellow-500 
        transform transition-transform duration-300 hover:scale-105 
        px-4 py-2 rounded-full w-full md:w-auto"
          >
            Resume
          </button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
