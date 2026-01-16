import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

// Group technologies into broad skill areas
const skillGroups = [
  {
    title: "Frontend & UI",
    subtitle: "Crafting fast, responsive, and accessible interfaces.",
    // Prioritise React / Next at the front of the list
    techNames: [
      "Next JS",
      "React Native",
      "HTML 5",
      "CSS 3",
      "Tailwind CSS",
      "Shadcn UI",
      "Ant Design",
      "JavaScript",
      "TypeScript",
      "Redux Toolkit",
    ],
  },
  {
    title: "Backend & Databases",
    subtitle: "APIs, data modeling, and reliable infrastructure.",
    techNames: [
      "Node JS",
      "MongoDB",
      "Prisma",
      "Python",
      "FastAPI",
      "Clerk",
      "INNGEST",
      "Firebase",
      "MySQL",
    ],
  },
  {
    title: "AI & Machine Learning",
    subtitle: "LLM‑powered assistants and data‑driven insights.",
    techNames: ["Ai", "Gemini", "Google Colab"],
  },
  {
    title: "Computer Vision",
    subtitle: "Visual understanding with YOLO and OpenCV.",
    techNames: ["Yolo", "CV"],
  },
  {
    title: "Tools & Workflow",
    subtitle: "Everything that keeps projects maintainable and shippable.",
    techNames: ["git", "Postman", "figma", "AWS"],
    extraItems: ["VS Code", "Jupyter Notebook", "GitHub", "SQL Workbench"],
  },
];

const SkillsPage = () => {
  return (
    <section className="pt-8 md:pt-8 pb-20">
      {/* Header - small/left aligned like Achievements/Services */}
      <div className="mb-8 md:mb-10">
        <p className="text-secondary uppercase text-xs md:text-sm tracking-[0.25em] mb-2">
          Skills
        </p>
        <h1 className="text-white text-2xl md:text-3xl font-bold tracking-tight">
          A practical, product‑focused skillset.
        </h1>
        <p className="mt-3 text-secondary text-[14px] md:text-[15px] max-w-3xl leading-relaxed">
          From UI polish to API design and AI integrations, I use this stack to
          ship real products — not just demos.
        </p>
      </div>

      <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2">
        {skillGroups.map((group, index) => {
          const groupTechs = technologies.filter((t) =>
            group.techNames.includes(t.name)
          );

          return (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              className="bg-tertiary rounded-2xl p-5 md:p-6 border border-purple-500/15 hover:border-purple-500/35 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col gap-4"
            >
              <div>
                <h3 className="text-white text-base md:text-lg font-semibold">
                  {group.title}
                </h3>
                <p className="text-secondary text-xs md:text-[13px] mt-1">
                  {group.subtitle}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {groupTechs.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black-100 border border-purple-500/20"
                  >
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="w-5 h-5 object-contain"
                    />
                    <span className="text-xs md:text-[13px] text-white">
                      {tech.name}
                    </span>
                  </div>
                ))}

                {/* Extra tools that don't have dedicated icons */}
                {group.extraItems &&
                  group.extraItems.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black-100 border border-purple-500/20"
                    >
                      <span className="w-5 h-5 flex items-center justify-center rounded-full bg-purple-500/20 text-[10px] text-purple-200 font-semibold uppercase">
                        {item[0]}
                      </span>
                      <span className="text-xs md:text-[13px] text-white">
                        {item}
                      </span>
                    </div>
                  ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default SectionWrapper(SkillsPage, "");
