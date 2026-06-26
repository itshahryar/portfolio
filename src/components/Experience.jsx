import React from "react";

import { styles } from "../style";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import parseDescription from "../utils/parseDescription.jsx";

const ExperienceCard = ({ experience }) => {
  return (
    <div className="group relative bg-gradient-to-br from-tertiary to-black/40 rounded-2xl p-6 border border-purple-500/10 hover:border-purple-500/25 shadow-lg hover:shadow-purple-500/5 transition-all duration-500 backdrop-blur-sm">

      {/* ── Header ────────────────────────────────── */}
      <div className="flex items-start gap-4 mb-5">
        {/* Icon */}
        <div
          className="flex-shrink-0 w-12 h-12 rounded-xl shadow-md flex items-center justify-center"
          style={{ background: experience.iconBg }}
        >
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-6 h-6 object-contain"
          />
        </div>

        {/* Title Block */}
        <div className="flex-1 min-w-0">
          <h3 className="text-white text-base font-semibold leading-tight truncate">
            {experience.title}
          </h3>
          <p className="text-purple-400 text-sm font-medium mt-0.5">
            {experience.company_name}
          </p>
          <p className="text-gray-500 text-xs mt-1 font-mono tracking-wide">
            {experience.date}
          </p>
        </div>

        {/* Badge */}
        {experience.date.includes("Present") && (
          <span className="flex-shrink-0 bg-green-500/10 text-green-400 text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full border border-green-500/20">
            Current
          </span>
        )}
      </div>

      {/* ── Divider ───────────────────────────────── */}
      <div className="border-t border-white/5 mb-4" />

      {/* ── Bullet Points ─────────────────────────── */}
      <ul className="space-y-2.5">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-gray-400 text-sm leading-relaxed flex items-start gap-3"
          >
            <span className="flex-shrink-0 w-1 h-1 bg-purple-500 rounded-full mt-2" />
            <span className="flex-1">{parseDescription(point)}</span>
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

