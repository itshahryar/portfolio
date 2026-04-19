import React from "react";

import { styles } from "../style";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";

const ExperienceCard = ({ experience }) => {
  return (
    <div className="bg-gradient-to-br from-tertiary to-black/50 rounded-2xl p-6 border border-purple-500/20 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 backdrop-blur-sm">
      {/* Icon and Title Section */}
      <div className="flex items-center mb-5">
        {/* Icon */}
        <div
          className="flex justify-center items-center w-14 h-14 rounded-xl shadow-lg"
          style={{ background: experience.iconBg }}
        >
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-3/5 h-3/5 object-contain"
          />
        </div>

        {/* Title and Company Info */}
        <div className="ml-4 flex-1">
          <div className="flex items-center justify-between mb-1">
            <h3 className="text-white text-lg font-bold">{experience.title}</h3>
            {experience.date.includes("Present") && (
              <span className="bg-purple-500/20 text-purple-400 text-xs font-medium px-2 py-1 rounded-full border border-purple-500/30">Current</span>
            )}
          </div>
          <p className="text-secondary text-sm font-medium">{experience.company_name}</p>
          <p className="text-white text-xs opacity-80">{experience.date}</p>
        </div>
      </div>

      {/* Points Section */}
      <ul className="mt-4 space-y-3">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-secondary text-sm leading-relaxed flex items-start"
          >
            <span className="w-2 h-2 bg-purple-400 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Experience = () => {
  return (
    <>
      <div className="mt-5 text-center">
        <p className="text-secondary uppercase text-sm tracking-wider">
          What I have done so far
        </p>
        <h2 className="text-white text-3xl font-bold">
          Work Experience.
        </h2>
      </div>

      <div className="mt-20">
        {experiences.map((experience, index) => (
          <div key={`experience-wrapper-${index}`}>
            <ExperienceCard
              experience={experience}
            />
            {index < experiences.length - 1 && (
              <div className="my-8 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");

