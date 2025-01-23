// import React from "react";
// import { Tilt } from "react-tilt";
// import { motion } from "framer-motion";

// import { certifications } from "../constants";
// import { fadeIn, textVariant } from "../utils/motion";

// const CertificationCard = ({ index, title, date, issuedBy, image }) => {
//   return (
//     <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
//       <Tilt
//         options={{
//           max: 45,
//           scale: 1,
//           speed: 450,
//         }}
//          className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full lg:h-[420px] h-auto flex flex-col"
//       >
//         <div className="relative w-full h-[230px]">
//           <img
//             src={image}
//             alt={title}
//             className="w-full h-full object-cover rounded-2xl"
//           />
//         </div>

//         <div className="mt-5 flex-1 flex flex-col justify-between">
//           <h3 className="text-white font-bold text-[24px]">{title}</h3>
//           <p className="mt-2 text-secondary text-[14px]">Issued By: {issuedBy}</p>
//           <p className="mt-2 text-secondary text-[14px]">{date}</p>
//         </div>
//       </Tilt>
//     </motion.div>
//   );
// };

// const Certifications = () => {
//   return (
//     <div className="px-6 sm:px-16">
//       <motion.div variants={textVariant()}>
//         <p className="text-secondary uppercase text-sm tracking-wider">My Achievements</p>
//         <h2 className="text-white text-3xl font-bold">Certifications</h2>
//       </motion.div>

//       <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
//         {certifications.map((cert, index) => (
//           <CertificationCard
//             key={`certification-${index}`}
//             index={index}
//             title={cert.title}
//             date={cert.date}
//             issuedBy={cert.issuedBy}
//             image={cert.image}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Certifications;

import React from "react";
import { Tilt } from "react-tilt";

import { certifications } from "../constants";

const CertificationCard = ({ index, title, date, issuedBy, image }) => {
  return (
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full lg:h-[420px] h-auto flex flex-col"
    >
      <div className="relative w-full h-[230px]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>

      <div className="mt-5 flex-1 flex flex-col justify-between">
        <h3 className="text-white font-bold text-[24px]">{title}</h3>
        <p className="mt-2 text-secondary text-[14px]">Issued By: {issuedBy}</p>
        <p className="mt-2 text-secondary text-[14px]">{date}</p>
      </div>
    </Tilt>
  );
};

const Certifications = () => {
  return (
    <div className="px-6 sm:px-16">
      <div>
        <p className="text-secondary uppercase text-sm tracking-wider">My Achievements</p>
        <h2 className="text-white text-3xl font-bold">Certifications.</h2>
      </div>

      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {certifications.map((cert, index) => (
          <CertificationCard
            key={`certification-${index}`}
            index={index}
            title={cert.title}
            date={cert.date}
            issuedBy={cert.issuedBy}
            image={cert.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Certifications;
