//code with motion and 3D rendering (Framer Motion and React Tilt)
// import React from "react";
// import { Tilt } from 'react-tilt';
// import { motion } from "framer-motion";

// import { styles } from "../style";
// import { services } from "../constants";
// import { SectionWrapper } from "../hoc";
// import { fadeIn, textVariant } from "../utils/motion";

// const ServiceCard = ({ index, title, icon }) => (
//   <Tilt className='xs:w-[250px] w-full'>
//     <motion.div
//       variants={fadeIn("right", "spring", index * 0.5, 0.75)}
//       className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
//     >
//       <div
//         options={{
//           max: 45,
//           scale: 1,
//           speed: 450,
//         }}
//         className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
//       >
//         <img
//           src={icon}
//           alt='web-development'
//           className='w-16 h-16 object-contain'
//         />

//         <h3 className='text-white text-[20px] font-bold text-center'>
//           {title}
//         </h3>
//       </div>
//     </motion.div>
//   </Tilt>
// );

// const About = () => {
//   return (
//     <>
//       <motion.div variants={textVariant()}>
//         <p className={styles.sectionSubText}>Introduction</p>
//         <h2 className={styles.sectionHeadText}>Overview.</h2>
//       </motion.div>

//       <motion.p
//         variants={fadeIn("", "", 0.1, 1)}
//         className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
//       >
// I'm Shahryar, a passionate Computer Scientist focused on the MERN stack (MongoDB, Express.js, React, and Node.js) for web development, with React Native as my secondary skill for frontend mobile app development. I create intuitive UI/UX designs to ensure seamless and user-friendly experiences across platforms.
// In addition to my development skills, I also work with Adobe Photoshop to design logos, posters, and flyers that stand out.
// Let’s collaborate and create impactful, seamless digital solutions together!
//       </motion.p>

//       <div className='mt-20 flex flex-wrap gap-10'>
//         {services.map((service, index) => (
//           <ServiceCard key={service.title} index={index} {...service} />
//         ))}
//       </div>
//     </>
//   );
// };

// export default SectionWrapper(About, "about");

import React from "react";
import { styles } from "../style";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ title, icon }) => {
  const titleParts = title.split(' ('); // Split the title into two parts at the first '('
  
  return (
    <div className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
      <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt="web-development" className="w-16 h-16 object-contain" />
        <h3 className="text-white text-[20px] font-bold text-center">
          {titleParts[0]} <br />
          <span className="block">{titleParts[1]}</span> {/* "React Native" will go here */}
        </h3>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <>
      <div>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </div>

<p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
  I'm Muhammad Shahryar Amjad, a passionate Computer Scientist focused on full-stack web development using the MERN stack and Next.js. I integrate modern AI technologies to build intelligent, efficient, and user-friendly web applications. <br />
  {/* Let’s collaborate and create impactful digital solutions together! */}
</p>

      <div className="mt-20 flex gap-10 overflow-x-auto">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");