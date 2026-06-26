import React from "react";
import { useNavigate } from "react-router-dom";
import { experiences } from "../../constants";
import { motion } from "framer-motion";

const ExperiencePreviewCard = ({ experience }) => {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="group relative bg-gradient-to-br from-[#1d1836] to-black/40 rounded-2xl p-6 border border-purple-500/10 hover:border-purple-500/25 shadow-lg hover:shadow-purple-800/10 transition-all duration-500 backdrop-blur-sm w-full text-left"
    >
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
      </div>

      {/* ── Divider ───────────────────────────────── */}
      <div className="border-t border-white/5 mb-4" />

      {/* ── Preview Points ────────────────────────── */}
      <ul className="space-y-2.5">
        {experience.points.slice(0, 2).map((point, index) => (
          <li
            key={`experience-preview-point-${index}`}
            className="text-gray-400 text-sm leading-relaxed flex items-start gap-3"
          >
            <span className="flex-shrink-0 w-1 h-1 bg-purple-500 rounded-full mt-2" />
            <span className="flex-1">{point}</span>
          </li>
        ))}
      </ul>

      {/* ── More Indicator ────────────────────────── */}
      {experience.points.length > 2 && (
        <p className="text-purple-500/50 text-xs font-medium mt-4 pl-4">
          +{experience.points.length - 2} more
        </p>
      )}
    </motion.div>
  );
};

const Exp = () => {
  const navigate = useNavigate();

  return (
    <section id="home-experience" className="mt-24 px-6 md:px-12 text-center max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="mb-16">
        <p className="text-secondary uppercase text-sm tracking-wider mb-2">
          What I have done so far
        </p>
        <h2 className="text-white text-3xl font-bold">Work Experience</h2>
        <div className="w-16 h-1 bg-purple-500 mx-auto mt-3 rounded-full"></div>
      </div>

      {/* Cards + View All in Same Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
        {/* Show first 2 experiences */}
        {experiences.slice(0, 2).map((experience, index) => (
          <ExperiencePreviewCard key={index} experience={experience} />
        ))}

        {/* Enhanced View All Card */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2 }}
          onClick={() => navigate("/experience")}
          className="flex flex-col justify-center items-center p-6 rounded-2xl shadow-lg bg-gradient-to-r from-purple-700 to-purple-500 text-white font-semibold w-full min-h-[340px] hover:shadow-purple-800/40 transition-all duration-300 cursor-pointer relative overflow-hidden border border-purple-300/20"
        >
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CiAgPGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIgZmlsbD0iI2ZmZiIgLz4KPC9zdmc+')] bg-repeat"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 text-center">
            {/* Icon */}
            <div className="mb-4 flex justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            
            <p className="text-xl font-bold mb-2">View All</p>
            <p className="text-sm text-purple-100 mb-4">Explore complete experience timeline</p>
            
            {/* Animated Arrow */}
            <motion.div
              className="flex items-center justify-center mt-2"
              animate={{ x: [0, 8, 0] }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            >
              <span className="text-2xl font-bold">→</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Exp;