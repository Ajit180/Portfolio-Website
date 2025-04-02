import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaAws, FaDocker, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiExpress, SiMysql,SiMongodb, SiRedux, SiSocketdotio, SiTailwindcss, SiVite, SiZod, SiSwagger, SiJest } from "react-icons/si";


const zustandIcon = "https://repository-images.githubusercontent.com/180328715/fca49300-e7f1-11ea-9f51-cfd949b31560"
const moongoose = "https://icon.icepanel.io/Technology/svg/Mongoose.js.svg"

const techCategories = [
  {
    title: "Frontend",
    technologies: [
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      { name: "React.js", icon: <FaReact className="text-blue-400" /> },
      { name: "Redux Toolkit", icon: <SiRedux className="text-purple-500" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
      { name: "Zustand", icon: <img src={zustandIcon} alt="Zustand" className="w-10 h-10 " /> }

    ],
  },
  {
    title: "Backend",
    technologies: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-400" /> },
      { name: "Zod Validation", icon: <SiZod className="text-blue-600" /> },
      { name: "Moongoose", icon: <img src={moongoose} alt="Zustand" className="w-6 h-6 " /> }

    ],
  },
  {
    title: "Database & Cloud",
    technologies: [
      { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
      { name: "AWS S3 & EC2", icon: <FaAws className="text-yellow-500" /> },
    ],
  },
  {
    title: "Real-Time & Tools",
    technologies: [
      { name: "Socket.IO", icon: <SiSocketdotio className="text-white" /> },
      { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
      { name: "GitHub", icon: <FaGithub className="text-white" /> },
    ],
  },
];

const TechStack = () => {
  return (
    <div className="bg-black text-white py-12">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Tech Stack</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {techCategories.map((category, index) => (
            <div key={index} className="p-6 border border-gray-700 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-center mb-4">{category.title}</h3>
              <div className="flex flex-wrap justify-center gap-6">
                {category.technologies.map((tech, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center">
                    <span className="text-4xl">{tech.icon}</span>
                    <span className="mt-2 text-sm">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
