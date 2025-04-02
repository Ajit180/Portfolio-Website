import React from "react";

const About = () => {
  return (
    <div className="bg-black text-white py-1" id="About">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <p className="text-lg mb-4">
              I am a passionate Full Stack Developer skilled in building
              scalable web applications using the MERN stack. With expertise in
              frontend and backend technologies, I create seamless user
              experiences and efficient APIs. I specialize in real-time
              communication, authentication, and cloud integrations. Constantly
              learning and evolving, I love solving complex problems with clean
              and optimized code. 🚀
            </p>
            {/* Technologies Section */}
            {/* <Technologies/> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
