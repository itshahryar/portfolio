import React from 'react';
import { motion } from 'framer-motion';
import { educationData } from "../constants"; // Import education data from constants

// EducationCard Component
const EducationCard = ({ index, school, marks, percentage, year, program, level, image }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.75, delay: index * 0.5 }}
      className="bg-tertiary p-4 rounded-xl w-full max-w-[380px] lg:h-[340px] h-auto flex flex-col shadow-md"
    >
      <div className="relative w-full h-[160px] flex items-center justify-center bg-[#1d1836] rounded-xl overflow-hidden">
        {image && (
          <img
            src={image}
            alt={school}
            className="w-[100%] h-auto object-contain rounded-xl"
          />
        )}
      </div>

      <div className="mt-3 flex-1 flex flex-col justify-between">
        <h3 className="text-white font-bold text-[18px]">{school}</h3>
        {level && <p className="mt-1 text-secondary text-[13px]">Education Level: {level}</p>}
        {percentage && <p className="mt-1 text-secondary text-[13px]">Percentage: {percentage}</p>}
        {program && <p className="mt-1 text-secondary text-[13px]">Program: {program}</p>}
        {year && <p className="mt-1 text-secondary text-[13px]">Duration: {year}</p>}
      </div>
    </motion.div>
  );
};

// Education Page
const Education = () => {
  return (
    <section className="bg-transparent pt-[120px] pb-20">
    <div className="px-6 sm:px-16">
      <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} transition={{ duration: 0.75 }}>
        <p className="text-secondary uppercase text-sm tracking-wider">My Educational Journey</p>
        <h2 className="text-white text-3xl font-bold">Education</h2>
        <p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        My education has laid a strong foundation, nurturing my passion for learning, problem-solving, and continuous growth in an ever-evolving field.
        </p>
      </motion.div>

      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
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
    </div>
    </section>
  );
};

export default Education;