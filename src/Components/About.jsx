import React from "react";
import aboutimage from "../assets/hero.jpg";

const About = () => {
  return (
    <div className="bg-black text-white py-1" id="About">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={aboutimage}
            alt=""
            className="w-72 h-90 rounded object-cover mb-8 md:mb-0"
          />
          <div className="flex-1">
            <p className="text-lg mb-20">
              I am a passionate Full Stack Developer skilled in building
              scalable web applications using the MERN stack. With expertise in
              frontend and backend technologies, I create seamless user
              experiences and efficient APIs. I specialize in real-time
              communication, authentication, and cloud integrations. Constantly
              learning and evolving, I love solving complex problems with clean
              and optimized code. 🚀
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">
                  HTML & CSS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
            transform transition-transform duration-300 hover:scale-105 w-10/12 "
                  ></div>
                </div>
              </div>

              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">
                  Javascript
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
            transform transition-transform duration-300 hover:scale-105 w-9/12 "
                  ></div>
                </div>
              </div>
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">
                  React Js
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
            transform transition-transform duration-300 hover:scale-105 w-8/12 "
                  ></div>
                </div>
              </div>
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">
                  NodeJs
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
            transform transition-transform duration-300 hover:scale-105 w-9/12 "
                  ></div>
                </div>
              </div>
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">
                  Express Js
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
            transform transition-transform duration-300 hover:scale-105 w-10/12 "
                  ></div>
                </div>
              </div>
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">
                  MongoDB
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
            transform transition-transform duration-300 hover:scale-105 w-8/12 "
                  ></div>
                </div>
              </div>
            </div>
            {/* <div className="mt-12 flex justify-between text-center">
               <div>
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text
                  bg-gradient-to-r from-green-400 to blue-500">10+</h3>
                  <p>Project Completed</p>
               </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
