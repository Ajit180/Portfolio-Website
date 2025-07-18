import React from 'react'
import { Briefcase, Info } from "lucide-react";
import table  from '../assets/table.jpg'

const Experiance = () => {
  const experiences = [
    {
      id: 1,
      role: "Full Stack Developer",
      company: "Labmantix",
      Info:"",
      duration: "Mar 2025 - May 2025",
    },
    {
      id: 2,
      role: "Frontend Developer",
      company: "Innovation hub",
      Info:"",
      duration: "Jan 2023 - march 2023",
    },
  ];

  return (
    <div className="bg-black text-white py-20" id="Experience">
      <h2 className="text-4xl font-bold text-white">Experience</h2>
      <div className="container mx-auto px-8 md:px-16 lg:px-24 flex flex-col lg:flex-row items-center lg:items-start">
        {/* Left Side - Image */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src={table}
            alt="Workspace Illustration"
            className="w-full max-w-md"
          />
        </div>

        {/* Right Side - Experience Cards */}
        <div className="lg:w-1/2 space-y-6">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="bg-gray-800 p-6 rounded-lg hover:shadow-lg
                transform transition-transform duration-300 hover:scale-105g"
            >
              <div className="bg-gray-500 text-white p-3 rounded-full w-20">
                <Briefcase size={24} />
              </div>
              <div>
                <p className="text-orange-300 font-semibold">{exp.duration}</p>
                <h3 className="text-lg font-bold">{exp.role}</h3>
                <p className="text-gray-300">{exp.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experiance
