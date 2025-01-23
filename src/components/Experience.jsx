// import React from "react";
// import {
//   VerticalTimeline,
//   VerticalTimelineElement,
// } from "react-vertical-timeline-component";
// import { motion } from "framer-motion";

// import "react-vertical-timeline-component/style.min.css";

// import { styles } from "../style";
// import { experiences } from "../constants";
// import { SectionWrapper } from "../hoc";
// import { textVariant } from "../utils/motion";

// const ExperienceCard = ({ experience }) => {
//   return (
//     <VerticalTimelineElement
//       contentStyle={{
//         background: "#1d1836",
//         color: "#fff",
//       }}
//       contentArrowStyle={{ borderRight: "7px solid  #232631" }}
//       date={experience.date}
//       iconStyle={{ background: experience.iconBg }}
//       icon={
//         <div className='flex justify-center items-center w-full h-full'>
//           <img
//             src={experience.icon}
//             alt={experience.company_name}
//             className='w-[60%] h-[60%] object-contain'
//           />
//         </div>
//       }
//     >
//       <div>
//         <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
//         <p
//           className='text-secondary text-[16px] font-semibold'
//           style={{ margin: 0 }}
//         >
//           {experience.company_name}
//         </p>
//       </div>

//       <ul className='mt-5 list-disc ml-5 space-y-2'>
//         {experience.points.map((point, index) => (
//           <li
//             key={`experience-point-${index}`}
//             className='text-white-100 text-[14px] pl-1 tracking-wider'
//           >
//             {point}
//           </li>
//         ))}
//       </ul>
//     </VerticalTimelineElement>
//   );
// };

// const Experience = () => {
//   return (
//     <>
//       <motion.div variants={textVariant()}>
//         <p className={`${styles.sectionSubText} text-center`}>
//           What I have done so far
//         </p>
//         <h2 className={`${styles.sectionHeadText} text-center`}>
//           Work Experience.
//         </h2>
//       </motion.div>

//       <div className='mt-20 flex flex-col'>
//         <VerticalTimeline>
//           {experiences.map((experience, index) => (
//             <ExperienceCard
//               key={`experience-${index}`}
//               experience={experience}
//             />
//           ))}
//         </VerticalTimeline>
//       </div>
//     </>
//   );
// };

// export default SectionWrapper(Experience, "work");
import React from "react";
import { motion } from "framer-motion";

import { styles } from "../style";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience, isLeft }) => {
  return (
    <div
      className={`flex flex-col mb-10 p-5 rounded-lg shadow-lg bg-[#1d1836] 
        ${isLeft ? "self-start mr-5" : "self-end ml-5"} 
        w-full md:w-[45%]`}
    >
      {/* Icon and Title Section */}
      <div className="flex items-center mb-5">
        {/* Icon */}
        <div
          className="flex justify-center items-center w-12 h-12 rounded-full"
          style={{ background: experience.iconBg }}
        >
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-3/5 h-3/5 object-contain"
          />
        </div>

        {/* Title and Company Info */}
        <div className="ml-4">
          <h3 className="text-white text-lg font-bold">{experience.title}</h3>
          <p className="text-secondary text-sm font-medium">{experience.company_name}</p>
          <p className="text-white text-xs">{experience.date}</p>
        </div>
      </div>

      {/* Points Section */}
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white text-sm leading-relaxed tracking-wide"
          >
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
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>What I have done so far</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Work Experience</h2>
      </motion.div>

      <div className="mt-20 flex justify-center items-center relative">
        {/* Vertical Line: Hidden on small screens */}
        <div className="absolute top-0 bottom-0 w-[2px] bg-gray-500 hidden md:block"></div>

        {/* Cards Wrapper */}
        <div className="flex flex-col space-y-10">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
              isLeft={index % 2 === 0} // Alternate left and right based on index
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
