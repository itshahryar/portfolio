import React from 'react';
import { motion } from 'framer-motion';
import { educationData } from "../constants"; // Import education data from constants

// EducationCard Component
// EducationCard Component
const EducationCard = ({ index, school, marks, percentage, year, program, level, image }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.75, delay: index * 0.5 }}
      className="bg-tertiary p-5 rounded-2xl w-full lg:h-[460px] h-auto flex flex-col"
    >
      <div className="relative w-full h-[230px]">
        {/* Optionally, add an image */}
        {image && <img src={image} alt={school} className="w-full h-full object-cover rounded-2xl" />}
      </div>

      <div className="mt-5 flex-1 flex flex-col justify-between">
        <h3 className="text-white font-bold text-[24px]">{school}</h3>
        {level && <p className="mt-2 text-secondary text-[14px]">Education Level: {level}</p>}
        {percentage && <p className="mt-2 text-secondary text-[14px]">Percentage: {percentage}</p>}
        {program && <p className="mt-2 text-secondary text-[14px]">Program: {program}</p>}
        {year && <p className="mt-2 text-secondary text-[14px]">Duration: {year}</p>}
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