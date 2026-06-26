import React from 'react';
import { motion } from 'framer-motion';
import { educationData } from "../constants";

// EducationCard Component - Unchanged
const EducationCard = ({ index, school, marks, percentage, year, program, level, image }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.75, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="group bg-gradient-to-br from-[#1d1836] to-black/40 rounded-2xl w-full max-w-[380px] text-left shadow-lg transition-all duration-500 backdrop-blur-sm border border-white/[0.06] hover:ring-1 hover:ring-purple-500/25 overflow-hidden flex flex-col"
    >
      {/* Image */}
      <div className="relative w-full h-[150px] overflow-hidden bg-[#12101f]">
        {image && (
          <img
            src={image}
            alt={school}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1d1836] via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-white text-lg font-semibold leading-tight">
          {school}
        </h3>

        {program && (
          <p className="mt-2 text-gray-400 text-sm leading-relaxed">
            {program}
          </p>
        )}

        <div className="mt-3 space-y-1.5">
          {level && (
            <p className="text-[13px] flex items-center gap-2 text-gray-400">
              <svg className="w-3.5 h-3.5 text-purple-600 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3z" />
              </svg>
              {level}
            </p>
          )}
          {year && (
            <p className="text-[13px] flex items-center gap-2 text-gray-400">
              <svg className="w-3.5 h-3.5 text-purple-600 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" />
              </svg>
              {year}
            </p>
          )}
          {percentage && (
            <p className="text-[13px] flex items-center gap-2 text-gray-400">
              <svg className="w-3.5 h-3.5 text-purple-600 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M18 20V10M12 20V4M6 20v-6" />
              </svg>
              {percentage}%
            </p>
          )}
          {marks && (
            <p className="text-[13px] flex items-center gap-2 text-gray-400">
              <svg className="w-3.5 h-3.5 text-purple-600 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              {marks}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

// Education Page - Enhanced styling while preserving cards
const Education = () => {
  return (
    <section id="education" className="mt-24 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Enhanced Section Header */}
      <div className="mb-16 text-center">
        <motion.div 
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} 
          transition={{ duration: 0.75 }}
          className="mb-4"
        >
          <p className="text-secondary uppercase text-sm tracking-wider mb-2">
            My Educational Journey
          </p>
          <h2 className="text-white text-3xl font-bold">Education</h2>
          <div className="w-16 h-1 bg-purple-500 mx-auto mt-3 rounded-full"></div>
        </motion.div>
        
        <motion.p 
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} 
          transition={{ duration: 0.75, delay: 0.2 }}
          className="mt-4 text-secondary text-[17px] max-w-3xl mx-auto leading-[30px]"
        >
          My education has laid a strong foundation for continuous learning, problem-solving, and growth in a rapidly evolving field.
        </motion.p>
      </div>

      {/* Preserved Card Grid */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 justify-items-center">
        {educationData.map((edu, index) => (
          <EducationCard
            key={`education-${index}`}
            index={index}
            school={edu.school}
            marks={edu.marks}
            percentage={edu.percentage}
            year={edu.year}
            program={edu.program}
            image={edu.image}
            level={edu.level}
          />
        ))}
      </div>
    </section>
  );
};

export default Education;