import messageslackimage from '../assets/message-Slack.png'
import EdutechImage from '../assets/edu-website.png'
import cryptoImage from '../assets/crypto-track.png'
import useThemeStore from '../store/ThemeChange'
import ecommerce from '../assets/ecommerce.png'
import { motion } from 'motion/react';
import { fadein } from '../varients';

const Project = () => {
   
    const projects = [
           {
          id: 1,
          name: "Ecommerce With Admin Dashboard(Working)",
          technologies: ["React.js", "Node.js", "Express", "MongoDB", "AWS S3"],
          image: ecommerce,  // Update with actual image path
          githubLink: "https://github.com/Ajit180/StiMart",
          liveLink:"https://stimart-frontend.vercel.app/"
        },
      ,
        {
          id: 2,
          name: "Messaging Slack",
          technologies: ["React.js", "Node.js", "Express", "MongoDB", "Socket.IO", "AWS S3"],
          image: messageslackimage,  // Update with actual image path
          githubLink: "https://github.com/Ajit180/Frontend-Message-Slack",
          liveLink:"https://frontend-message-slack.vercel.app/auth/signin"
        },
        {
          id: 3,
          name: "Crypto Tracker",
          technologies: ["React", "Taiwind", "API"],
          image: cryptoImage,  // Update with actual image path
          githubLink: "https://github.com/Ajit180/Crypto-Tracker",
          liveLink:"https://crypto-tracker-three-sigma.vercel.app/"
        },
        {
          id: 4,
          name: "Edutech Website",
          technologies: ["HTML", "CSS", "JavaScript"],
          image: EdutechImage,  // Update with actual image path
          githubLink: "https://github.com/Ajit180/EduTech-Project",
          liveLink:"https://ajit180.github.io/EduTech-Project/"
        },
      
      ];
      
    const {isDark} = useThemeStore();

  return (
    <motion.div className="py-15" id="Project"
     variants={fadein("up",0.2)}
     initial="hidden"
     whileInView={"show"}
     viewport={{once:false , amount:0.7}}
    >
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map(projects=>(
                <div className={`p-6 rounded-lg transform transition-transform duration-300
                 hover:scale-105 ${isDark?"bg-gray-800 hover:shadow-green-400/10":"bg-gray-100 text-black hover:shadow-blue-400/10"}`}>
                    <img src={projects.image} alt={projects.name} className="rounded-lg mb-4
                    w-full h-48 object-cover" />
                    <h3 className="text-2xl font-bold mb-2">{projects.name}</h3>
                    <p className={`${isDark ? "text-gray-400" : "text-black"} mb-4`}>{projects.technologies.join(", ")}</p>
                    <div className="flex sm:flex-col  md:flex-row space-x-3">
                    <a className="inline-block bg-gradient-to-r from-green-400 to-blue-400
                    text-white px-4 py-2 rounded-full" href={projects.githubLink}
                       
                    >Github</a>
                    <a className="inline-block bg-gradient-to-r from-green-400 to-blue-400
                    text-white px-4 py-2 rounded-full" href={projects.liveLink}  
                    >Live</a>
                    </div>
                    
                </div>
            ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
