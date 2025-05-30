// import React from "react";
// import { motion } from "framer-motion";

// import { styles } from "../style";
// import { SectionWrapper } from "../hoc";
// import { fadeIn, textVariant } from "../utils/motion";
// import { testimonials } from "../constants";

// const FeedbackCard = ({
//   index,
//   testimonial,
//   name,
//   designation,
//   company,
//   image,
// }) => (
//   <motion.div
//     variants={fadeIn("", "spring", index * 0.5, 0.75)}
//     className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full lg:w-[30%] lg:h-[450px] h-auto"
//   >
//     <p className="text-white font-black text-[48px]">"</p>

//     <div className="mt-1 flex flex-col justify-between h-full">
//       <p className="text-white tracking-wider text-[18px]">{testimonial}</p>

//       {/* Adjusted div to move name and image upwards using relative positioning */}
//       <div className="flex justify-between items-center gap-1 relative top-[-50px]"> {/* Using relative positioning to move upwards */}
//         <div className="flex-1 flex flex-col">
//           <p className="text-white font-medium text-[16px]">
//             <span className="blue-text-gradient">@</span> {name}
//           </p>
//           <p className="mt-1 text-secondary text-[12px]">
//             {designation} {company}
//           </p>
//         </div>

//         {/* Adjusted image with relative positioning */}
//         <img
//           src={image}
//           alt={`feedback_by-${name}`}
//           className="w-10 h-10 rounded-full object-cover relative top-[-10px]"
//         />
//       </div>
//     </div>
//   </motion.div>
// );


// const Feedbacks = () => {
//   return (
//     <div className="mt-12 bg-black-100 rounded-[20px]">
//       <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
//         <motion.div variants={textVariant()}>
//           <p className={styles.sectionSubText}>What others say</p>
//           <h2 className={styles.sectionHeadText}>Testimonials.</h2>
//         </motion.div>
//       </div>
//       <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
//         {testimonials.map((testimonial, index) => (
//           <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SectionWrapper(Feedbacks, "");
import React from "react";

import { styles } from "../style";
import { SectionWrapper } from "../hoc";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <div className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full lg:w-[30%] lg:h-[450px] h-auto">
    <p className="text-white font-black text-[48px]">"</p>

    <div className="mt-1 flex flex-col justify-between h-full">
      <p className="text-white tracking-wider text-[18px]">{testimonial}</p>

      {/* Adjusted div to move name and image upwards using relative positioning */}
      <div className="flex justify-between items-center gap-1 relative top-[-50px]"> {/* Using relative positioning to move upwards */}
        <div className="flex-1 flex flex-col">
          <p className="text-white font-medium text-[16px]">
            <span className="blue-text-gradient">@</span> {name}
          </p>
          <p className="mt-1 text-secondary text-[12px]">
            {designation} {company}
          </p>
        </div>

        {/* Adjusted image with relative positioning */}
        <img
          src={image}
          alt={`feedback_by-${name}`}
          className="w-10 h-10 rounded-full object-cover relative top-[-10px]"
        />
      </div>
    </div>
  </div>
);

const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
        <div>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");