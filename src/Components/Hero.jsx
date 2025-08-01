import heroimage from "../assets/Hero.png";
import { motion } from "motion/react";
import { fadein } from "../varients";

const Hero = () => {

  const email = 'yajit1908@gmail.com';
  const handleonClick =()=>{
    window.location.href = `mailto:${email}`;
  }
  return (
    <motion.div className="text-center py-18" id="Home"
      variants={fadein("up",0.4)}
     initial="hidden"
     whileInView={"show"}
     viewport={{once:false , amount:0.7}}
    >
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
      px-4 py-2 rounded-full w-auto md:w-auto" onClick={handleonClick}
        >
          Contact Me
        </button>

        <a href="/resume">
          <button
            className="bg-gradient-to-r from-pink-500 to-yellow-500 
        transform transition-transform duration-300 hover:scale-105 
        px-4 py-2 rounded-full w-full md:w-auto"
          >
            View Resume
          </button>
        </a>
      </div>
    </motion.div>
  );
};

export default Hero;
