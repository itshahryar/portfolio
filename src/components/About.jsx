import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import { styles } from "../style";
import { creator } from "../assets";
import { SectionWrapper } from "../hoc";

const About = () => {
  const navigate = useNavigate();

  const handleCollaborateClick = (e) => {
    e.preventDefault();
    navigate("/", { state: { scrollTo: "contact" } });
  };

  return (
    <section className="mt-4 lg:mt-12">
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        {/* Left card */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="w-full max-w-sm bg-tertiary rounded-2xl border border-purple-500/15 shadow-lg px-6 py-7 flex flex-col items-center"
        >
          <div className="w-full aspect-[4.5/5] rounded-xl bg-black-100 flex items-center justify-center mb-4 overflow-hidden">
            <img
              src={creator}
              alt="Shahryar illustration"
              className="w-3/4 h-auto object-contain opacity-90"
            />
          </div>

          <div className="w-full bg-black-100 rounded-xl px-4 py-3 flex flex-col gap-1">
            <p className="text-white text-sm font-semibold">
              Full-stack engineer & AI solution architect
            </p>
            <p className="text-secondary text-xs leading-relaxed">
              Building scalable MERN applications with AI integration, 
              optimizing performance, and delivering measurable business impact.
            </p>
          </div>
        </motion.div>

        {/* Right content */}
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="flex-1"
        >
          <p
            className={`${styles.sectionSubText} font-mono tracking-[0.25em] text-xs`}
          >
            ABOUT THE ENGINEER
          </p>

          <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mt-2">
            Thoughtful products,{" "}
            <span className="text-[#915EFF]">practical engineering</span>.
          </h2>

          <div className="mt-4 space-y-3 text-secondary text-[14px] md:text-[15px] leading-[24px] max-w-2xl">
            <p>
              I am an <strong>𝐀𝐬𝐬𝐨𝐜𝐢𝐚𝐭𝐞 𝐒𝐨𝐟𝐭𝐰𝐚𝐫𝐞 𝐄𝐧𝐠𝐢𝐧𝐞𝐞𝐫</strong>, a <strong>𝐁𝐒𝐂𝐒 𝐠𝐫𝐚𝐝𝐮𝐚𝐭𝐞</strong> from COMSATS Islamabad, and a <strong>𝐅𝐮𝐥𝐥-𝐒𝐭𝐚𝐜𝐤 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫</strong> specializing in MERN, Next.js, and FastAPI.
            </p>
            <p>
              I build scalable <strong>𝐰𝐞𝐛 𝐚𝐧𝐝 𝐦𝐨𝐛𝐢𝐥𝐞 applications</strong>, focusing on performance optimization, responsiveness, and reliability.
            </p>
            <p>
              Focus on <strong>𝐀𝐈-𝐝𝐫𝐢𝐯𝐞𝐧 problem solving</strong>, build efficient solutions, and contribute to impactful tech initiatives.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/projects"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-white text-black text-sm font-semibold shadow hover:shadow-md hover:bg-white/90 transition-all"
            >
              View all work
            </Link>

            <button
              type="button"
              onClick={handleCollaborateClick}
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg border border-purple-500/40 text-white text-sm font-semibold hover:bg-purple-500/10 transition-all"
            >
              Let&apos;s collaborate
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionWrapper(About, "about");

