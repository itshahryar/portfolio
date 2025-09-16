import React from "react";
import { Tilt } from "react-tilt";

import { styles } from "../style";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ title, subtitle, icon }) => (
  <div className="xs:w-[250px] w-full">
    <div className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card hover:shadow-card-hover transition-shadow duration-300">
      <div className="bg-tertiary rounded-[20px] py-6 px-8 min-h-[300px] flex flex-col items-center justify-between transition-all duration-300 hover:bg-tertiary-light">
        <div className="flex flex-col items-center">
          <img
            src={icon}
            alt={title}
            className="w-20 h-20 object-contain mb-4 transition-transform duration-300 hover:scale-110"
          />

          <h3 className="text-white text-[22px] font-bold text-center mb-2 font-poppins tracking-wide">
            {title}
          </h3>

          <p className="text-secondary text-[16px] text-center leading-relaxed font-semibold font-raleway px-2">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  </div>
);

const About = () => {
  return (
    <>
      <div>
        <p className={`${styles.sectionSubText} font-mono tracking-widest`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText} font-bold tracking-tight`}>Overview.</h2>
      </div>

      <p className="mt-6 text-secondary text-[18px] max-w-3xl leading-[32px] font-light font-raleway">
        I am an Associate Software Engineer and a BS Computer Science graduate from COMSATS University Islamabad with projects in web development, YOLO, computer vision, AI, and machine learning, passionate about building scalable, user-friendly, and AI-powered applications.
      </p>

      <div className="mt-20 flex flex-wrap justify-center gap-8">
        {services.map((service, index) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
