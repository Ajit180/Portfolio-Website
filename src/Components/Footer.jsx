import {FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "motion/react";
import { fadein } from "../varients";

const Footer = () => {
  return (
    <motion.footer className="py-8"
       variants={fadein("up",0.2)}
     initial="hidden"
     whileInView={"show"}
     viewport={{once:false , amount:0.7}}
    >
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4">
          <div className="flex-1 mb-4 md:mb-0">
            <h3 className="text-2xl font-bold mb-2" >Ajit</h3>
            <p className="text-gray-400">
              Full-Stack Developer in Nashik , Specializing in web Software
              Development
            </p>
          </div>
          {/* <div className="flex-1 w-full">
            <form className="flex items-center justify-center">
                <input type="email" placeholder="Enter Email"
                className="w-full p-2 rounded bg-gray-800 border border-gray-600 
                focus:outline-none focus:border-green-400" />
                <button type="submit"
                 className="bg-gradient-to-r from-green-400 to-blue-500 text-white 
                 px-4 py-2 rounded-r-lg"
                >Subscribe</button>
            </form>
          </div> */}
        </div>
        <div className="border-t border-gray-600 pt-4 flex flex-col md:flex-row
        justify-between items-center">
            <p className="text-gray-400">
                &copy; {new Date().getFullYear()} All rights reserved.
            </p>
            <div className="flex space-x-4 my-4 md:my-0">
                <a href="https://www.linkedin.com/in/ajit180/" className="text-gray-400 hover:text-white">
                    <FaLinkedin/>
                    
                </a>
                <a href="https://github.com/Ajit180" className="text-gray-400 hover:text-white">
                    <FaGithub/>
                </a>
                <a href="" className="text-gray-400 hover:text-white">
                    <FaTwitter/>
                </a>
            </div>
            <div>

            </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
