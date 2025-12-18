import React from "react";
import { useNavigate } from "react-router-dom";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const previewGroups = [
  {
    title: "Frontend & UI",
    techNames: ["Next JS", "React Native", "Tailwind CSS", "Shadcn UI"],
  },
  {
    title: "Backend & Data",
    techNames: ["Node JS", "MongoDB", "Prisma"],
  },
  {
    title: "AI & ML",
    techNames: ["Ai", "Gemini"],
  },
  {
    title: "Computer Vision",
    techNames: ["Yolo", "CV"],
  },
  {
    title: "Tools",
    techNames: ["git", "Postman", "figma"],
  },
];

const Tech = () => {
  const navigate = useNavigate();

  return (
    <section className="mt-8">
      <div className="mb-4">
        <p className="text-secondary uppercase text-xs tracking-[0.25em] mb-1">
          Skills
        </p>
        <h2 className="text-white text-2xl md:text-3xl font-bold">
          A quick look at my toolkit.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {previewGroups.map((group) => {
          const groupTechs = technologies
            .filter((t) => group.techNames.includes(t.name))
            .slice(0, 2); // show 2 skills per category

          if (groupTechs.length === 0) return null;

          return (
            <div key={group.title}>
              <p className="text-secondary text-xs mb-2">{group.title}</p>
              <div className="flex flex-wrap gap-3">
                {groupTechs.map((technology) => (
                  <div
                    key={technology.name}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black-100 border border-purple-500/20"
                  >
                    <img
                      src={technology.icon}
                      alt={technology.name}
                      className="w-5 h-5 object-contain"
                    />
                    <span className="text-xs md:text-sm text-white">
                      {technology.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <button
        type="button"
        onClick={() => navigate("/skills")}
        className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg border border-purple-500/40 text-white text-sm font-semibold hover:bg-purple-500/10 transition-all"
      >
        View all skills
      </button>
    </section>
  );
};

export default SectionWrapper(Tech, "");
