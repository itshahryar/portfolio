import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

// Group technologies into broad skill areas
const skillGroups = [
  {
    title: "Frontend & UI",
    subtitle: "Crafting fast, responsive, and accessible interfaces.",
    techNames: [
      "JavaScript",
      "TypeScript",
      "Next.js",
      "React Native",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Shadcn UI",
      "Ant Design",
    ],
  },
  {
    title: "Backend & Databases",
    subtitle: "APIs, data modeling, and reliable infrastructure.",
    techNames: [
      "Node.js",
      "Python",
      "FastAPI",
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "Prisma ORM",
      "Firebase",
    ],
  },
  {
    title: "AI & Generative AI",
    subtitle: "Building intelligent applications with AI, machine learning, and automation.",
    techNames: ["AI", "Machine Learning", "Generative AI", "Gemini", "OpenAI" ]
  },
  {
    title: "LLMs & RAG",
    subtitle: "Building intelligent systems with retrieval-augmented generation.",
    techNames: [
      "LangChain",
      "Pinecone",
      "Voyage AI",
    ],
    extraItems: [
      "Vector Embeddings",
      "Semantic Search",
    ],
  },
  {
    title: "Computer Vision",
    subtitle: "Visual understanding with YOLO and OpenCV.",
    techNames: ["YOLO", "OpenCV"],
  },
 {
    title: "Tools & Workflow",
    subtitle: "Everything that keeps projects maintainable and shippable.",
    techNames: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Docker",
      "AWS",
      "Clerk",
      "Inngest",
      "Figma",
      "Google Colab",
    ],
    extraItems: [
      "Jupyter Notebook",
      "SQL Workbench",
    ],
  },
];

const SkillsPage = () => {
  return (
    <section className="pt-8 md:pt-8 pb-20">
      {/* Header */}
      <div className="mb-8 md:mb-10">
        <p className="text-gray-400 uppercase text-xs md:text-sm tracking-[0.25em] mb-2">
          Skills
        </p>
        <h1 className="text-white text-2xl md:text-3xl font-bold tracking-tight">
          A practical, product‑focused <span className="text-[#915EFF]">skillset</span>.
        </h1>
        <p className="mt-3 text-gray-400 text-[14px] md:text-[15px] max-w-3xl leading-relaxed">
          From <span className="text-[#915EFF]">responsive interfaces</span> and <span className="text-[#915EFF]">scalable APIs</span> to <span className="text-[#915EFF]">AI</span> and <span className="text-[#915EFF]">LLM integrations</span>, I use this stack to build <span className="text-[#915EFF]">production-ready applications</span>.
        </p>
      </div>

      <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2">
        {skillGroups.map((group, index) => {
          // Filter main technologies in the order specified in techNames
          const groupTechs = group.techNames
            .map(name => technologies.find(t => t.name === name))
            .filter(t => t !== undefined);

          // Combine into a single list of names in the correct order
          // Include all techNames even if not found in constants
          const allSkills = [
            ...group.techNames,
            ...(group.extraItems || []),
          ];

          return (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group bg-gradient-to-br from-[#1d1836] to-black/40 rounded-2xl w-full text-left shadow-lg transition-all duration-500 backdrop-blur-sm border border-white/[0.06] hover:ring-1 hover:ring-purple-500/25 overflow-hidden flex flex-col p-5 md:p-6"
            >
              {/* Title & Subtitle */}
              <div>
                <h3 className="text-white text-lg font-semibold leading-tight tracking-tight">
                  {group.title}
                </h3>
                <p className="mt-1 text-gray-400 text-[13px] leading-relaxed">
                  {group.subtitle}
                </p>
              </div>

              {/* Divider */}
              <div className="border-t border-white/5 mt-4 mb-4" />

              {/* 3-Column Bullet Grid */}
              <div className="grid grid-cols-3 gap-x-4 gap-y-2.5 flex-1">
                {allSkills.map((name) => (
                  <div key={name} className="flex items-start gap-2 text-[13px]">
                    <span className="mt-[6px] w-1.5 h-1.5 rounded-full bg-purple-600/80 flex-shrink-0" />
                    <span className="text-gray-300 leading-relaxed">{name}</span>
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
