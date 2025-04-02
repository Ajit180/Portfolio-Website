import React from "react";

const techCategories = [
    {
        title:"Programming Language",
        technologies:[
            { name: "C++", link: "https://cdn.simpleicons.org/cplusplus/00599C" },
            { name: "JavaScript", link: "https://cdn.simpleicons.org/javascript/F7DF1E" },
        ],
    },
  {
    title: "Frontend",
    technologies: [
      { name: "HTML5", link: "https://cdn.simpleicons.org/html5/EF652A" },
      { name: "CSS3", link: "https://cdn.simpleicons.org/css3/1572B6" },
      { name: "JavaScript", link: "https://cdn.simpleicons.org/javascript/F7DF1E" },
      { name: "React.js", link: "https://cdn.simpleicons.org/react/61DAFB" },
      { name: "Redux Toolkit", link: "https://cdn.simpleicons.org/redux/764ABC" },
      { name: "Tailwind CSS", link: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
      { name: "shadcnui", link: "https://cdn.simpleicons.org/shadcnui/FFFFFF" },
    ],
  },
  {
    title: "Backend",
    technologies: [
      { name: "Node.js", link: "https://cdn.simpleicons.org/node.js/339933" },
      { name: "Express.js", link: "https://cdn.simpleicons.org/express/FFFFFF" },
      { name: "Zod Validation", link: "https://cdn.simpleicons.org/zod/3B82F6" },
      { name: "Moongoose", link: "https://cdn.simpleicons.org/mongoose/880000" },
      { name: "Socket.IO", link: "https://cdn.simpleicons.org/socketdotio/FFFFFF" },
      { name: "Redis", link: "https://cdn.simpleicons.org/redis/DC382D" },
    ],
  },
  {
    title: "Database & Cloud",
    technologies: [
      { name: "MongoDB", link: "https://cdn.simpleicons.org/mongodb/47A248" },
      { name: "MySQL", link: "https://cdn.simpleicons.org/mysql/4479A1" },
      { name: "AWS S3", link: "https://cdn.simpleicons.org/amazons3/569A31" },
      { name: "AWS EC2", link: "https://cdn.simpleicons.org/amazonec2/FF9900" },
    ],
  },
  {
    title: "Tools & Platform",
    technologies: [
      { name: "Git", link: "https://cdn.simpleicons.org/git/F05032" },
      { name: "GitHub", link: "https://cdn.simpleicons.org/github/FFFFFF" },
      { name: "Postman", link: "https://cdn.simpleicons.org/postman/FF6C37" },
      { name: "AWS", link: "https://cdn.simpleicons.org/amazonwebservices/FF9900" },
      { name: "VS Code", link: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519" },

    ],
  },
];

const TechStackSVG = () => {
  return (
    <div className="bg-black text-white py-12">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Technical Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {techCategories.map((category, index) => (
            <div key={index} className="p-6 border border-gray-700 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-center mb-4">{category.title}</h3>
              <div className="flex flex-wrap justify-center gap-6">
                {category.technologies.map((tech, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center">
                    <img
                      src={tech.link}
                      alt={tech.name}
                      className="w-12 h-12 md:w-14 md:h-14" // Adjust size for consistency
                    />
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

export default TechStackSVG;
