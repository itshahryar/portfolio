import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  const techGroups = [
    // Group 1: CSS, Tailwind, Shadcn
    technologies.filter(tech => 
      ["CSS 3", "Tailwind CSS", "Shadcn UI"].includes(tech.name)
    ),
    
    // Group 2: HTML, JS, TS, Three.js, Node, Next, Redux
    technologies.filter(tech => 
      ["HTML 5", "JavaScript", "TypeScript", "React Native", "Node JS", "Next JS", "Redux Toolkit"].includes(tech.name)
    ),
    
    // Group 3: AI, Gemini
    technologies.filter(tech => 
      ["Ai", "Gemini"].includes(tech.name)
    ),
    
    // Group 4: YOLO, CV
    technologies.filter(tech => 
      ["Yolo", "CV"].includes(tech.name)
    ),
    
    // Group 5: MongoDB, Prisma
    technologies.filter(tech => 
      ["MongoDB", "Prisma"].includes(tech.name)
    ),
    
    // Group 6: Git, Postman, Figma
    technologies.filter(tech => 
      ["git", "Postman", "figma"].includes(tech.name)
    )
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {techGroups.map((group, groupIndex) => (
        <div key={groupIndex} className="flex flex-col items-center">
          {/* Optional: Add group titles */}
          {/* <h3 className="text-lg font-medium mb-3">Group {groupIndex + 1}</h3> */}
          
          <div className="flex flex-row flex-wrap justify-center gap-4">
            {group.map((technology) => (
              <div
                key={technology.name}
                className="w-16 h-16 flex justify-center items-center bg-gray-100 bg-opacity-70 rounded-full shadow-md"
              >
                <img
                  src={technology.icon}
                  alt={technology.name}
                  className="w-10 h-10 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");

