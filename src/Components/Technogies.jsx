import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiExpress } from "react-icons/si";

const technologies = [
  { name: "HTML & CSS", icon: <FaHtml5 className="text-orange-500" />, width: "w-10/12" },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" />, width: "w-9/12" },
  { name: "React.js", icon: <FaReact className="text-blue-400" />, width: "w-8/12" },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, width: "w-9/12" },
  { name: "Express.js", icon: <SiExpress className="text-gray-400" />, width: "w-10/12" },
  { name: "MongoDB", icon: <FaDatabase className="text-green-600" />, width: "w-8/12" },
];

const Technologies = () => {
  return (
    <div className="space-y-3">
      {technologies.map((tech, index) => (
        <div key={index} className="flex items-center gap-4">
          <span className="text-2xl">{tech.icon}</span>
          <span className="w-32 text-lg font-semibold">{tech.name}</span>
          <div className="grow bg-gray-800 rounded-full h-3">
            <div className={`bg-gradient-to-r from-green-400 to-blue-500 h-3 rounded-full ${tech.width} transform transition-transform duration-300 hover:scale-105`}></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Technologies;
