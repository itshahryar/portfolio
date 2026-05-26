import React, { useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaArrowLeft,
  FaGithub,
  FaExternalLinkAlt,
  FaChevronDown,
  FaLightbulb,
  FaSearch,
  FaLayerGroup,
  FaCode,
} from "react-icons/fa";
import { projectDetails } from "./projectDetailsData";
import { projects } from "../../constants";

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
};

const SectionLabel = ({ icon: Icon, label, accent }) => (
  <div className="flex items-center gap-3 mb-4">
    <span
      className={`flex h-9 w-9 items-center justify-center rounded-lg border ${accent}`}
    >
      <Icon className="text-sm" />
    </span>
    <span className="text-secondary uppercase text-xs tracking-[0.2em]">
      {label}
    </span>
  </div>
);

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const breakdownRef = useRef(null);
  const project = projectDetails.find((p) => p.id === id);
  const projectPreview = projects.find((p) => p.id === id);

  const scrollToBreakdown = () => {
    breakdownRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-white text-2xl font-bold mb-4">Project not found</h2>
          <button
            onClick={() => navigate("/projects")}
            className="text-purple-400 hover:text-purple-300"
          >
            ← Back to Projects
          </button>
        </div>
      </div>
    );
  }

  const overviewText =
    projectPreview?.description || project.solutionIntro;

  return (
    <section
      id="project-details"
      className="relative pt-24 px-6 md:px-12 max-w-6xl mx-auto pb-24"
    >
      {/* Ambient accent */}
      <div
        className="pointer-events-none absolute top-24 left-1/2 -translate-x-1/2 w-[min(100%,720px)] h-64 bg-purple-600/10 blur-[100px] rounded-full"
        aria-hidden
      />

      <motion.button
        onClick={() => navigate("/projects")}
        className="relative text-purple-300 hover:text-white inline-flex items-center gap-2 text-sm font-medium transition-colors mb-6"
        whileHover={{ x: -4 }}
      >
        <FaArrowLeft /> Back to Projects
      </motion.button>

      {/* —— Compact hero: two cards —— */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 mb-5">
        <motion.article
          {...fadeUp}
          transition={{ duration: 0.4 }}
          className="bg-tertiary/90 backdrop-blur-sm rounded-xl border border-purple-500/25 p-4 md:p-5 shadow-lg shadow-black/20"
        >
          <p className="text-[#915EFF] text-[10px] font-semibold uppercase tracking-[0.24em] mb-2">
            Case Study
          </p>
          <h1 className="text-white text-lg md:text-xl font-bold leading-snug">
            {project.name}
          </h1>
          <p className="text-secondary text-xs md:text-sm mt-3 leading-relaxed line-clamp-4">
            {overviewText}
          </p>

          <div className="flex flex-wrap gap-2 mt-4">
            {project.source_code_link && (
              <a
                href={project.source_code_link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-600/90 hover:bg-purple-600 text-white text-xs font-medium transition-colors"
              >
                <FaGithub className="text-[11px]" /> Repository
              </a>
            )}
            {project.isLive && project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-purple-400/40 text-purple-200 hover:bg-purple-500/10 text-xs font-medium transition-colors"
              >
                <FaExternalLinkAlt className="text-[11px]" /> Live demo
              </a>
            )}
          </div>
        </motion.article>

        <motion.article
          {...fadeUp}
          transition={{ duration: 0.4, delay: 0.06 }}
          className="bg-tertiary/90 backdrop-blur-sm rounded-xl border border-purple-500/25 overflow-hidden shadow-lg shadow-black/20"
        >
          <div className="relative w-full h-[230px] overflow-hidden rounded-xl">
            {projectPreview?.image ? (
              <img
                src={projectPreview.image}
                alt={project.name}
                className="w-full h-full object-cover rounded-xl"
              />
            ) : (
              <div className="flex h-full items-center justify-center text-secondary text-xs">
                Preview unavailable
              </div>
            )}
          </div>
        </motion.article>
      </div>

      {/* CTA below hero cards */}
      <motion.div
        {...fadeUp}
        transition={{ duration: 0.4, delay: 0.12 }}
        className="flex justify-center mb-14 md:mb-16"
      >
        <button
          type="button"
          onClick={scrollToBreakdown}
          className="group inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full border border-purple-500/40 bg-gradient-to-r from-purple-600/20 to-violet-600/10 text-white text-sm font-medium hover:border-purple-400/60 hover:from-purple-600/30 hover:to-violet-600/20 transition-all duration-300 shadow-md shadow-purple-900/30"
        >
          Explore the full project breakdown
          <FaChevronDown className="text-xs text-purple-300 group-hover:translate-y-0.5 transition-transform" />
        </button>
      </motion.div>

      {/* —— Breakdown sections —— */}
      <div ref={breakdownRef} className="scroll-mt-28 space-y-10 md:space-y-12">
        <div className="text-center max-w-xl mx-auto">
          <p className="text-secondary uppercase text-xs tracking-[0.22em]">
            Deep dive
          </p>
          <h2 className="text-white text-xl md:text-2xl font-bold mt-2">
            How this project was built
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mt-3" />
        </div>

        {/* Problem & Solution — always visible (no whileInView; right card was stuck at opacity 0) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <motion.article
            initial={fadeUp.initial}
            animate={fadeUp.animate}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="relative rounded-xl border border-red-500/15 bg-gradient-to-br from-tertiary to-[#151028] p-5 md:p-6 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/5 rounded-full blur-2xl" />
            <SectionLabel
              icon={FaSearch}
              label="The challenge"
              accent="border-red-500/30 text-red-300 bg-red-500/10"
            />
            <p className="text-secondary text-sm leading-relaxed mb-4">
              {project.problemIntro}
            </p>
            <ul className="space-y-2.5">
              {project.problemPoints.map((point, index) => (
                <li
                  key={index}
                  className="text-white/80 text-sm leading-relaxed pl-3 border-l-2 border-red-500/40"
                >
                  {point}
                </li>
              ))}
            </ul>
          </motion.article>

          <motion.article
            initial={fadeUp.initial}
            animate={fadeUp.animate}
            transition={{ duration: 0.45, delay: 0.12 }}
            className="relative rounded-xl border border-emerald-500/15 bg-gradient-to-br from-tertiary to-[#151028] p-5 md:p-6 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-2xl" />
            <SectionLabel
              icon={FaLightbulb}
              label="The solution"
              accent="border-emerald-500/30 text-emerald-300 bg-emerald-500/10"
            />
            <p className="text-secondary text-sm leading-relaxed mb-4">
              {project.solutionIntro}
            </p>
            <ul className="space-y-2.5">
              {project.solutionPoints.map((point, index) => (
                <li
                  key={index}
                  className="text-white/80 text-sm leading-relaxed pl-3 border-l-2 border-emerald-500/40"
                >
                  {point}
                </li>
              ))}
            </ul>
          </motion.article>
        </div>

        {/* Scope */}
        <motion.article
          initial={fadeUp.initial}
          whileInView={fadeUp.animate}
          viewport={{ once: true }}
          className="rounded-xl border border-purple-500/20 bg-tertiary/80 p-5 md:p-6"
        >
          <SectionLabel
            icon={FaLayerGroup}
            label="Delivery scope"
            accent="border-purple-500/30 text-purple-300 bg-purple-500/10"
          />
          <p className="text-secondary text-sm leading-relaxed mb-5 max-w-3xl">
            {project.scopeIntro}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.scopePoints?.map((point, index) => (
              <div
                key={index}
                className="flex items-start gap-2.5 rounded-lg bg-black-100/80 border border-purple-500/10 px-3 py-2.5"
              >
                <span className="text-purple-400 text-xs font-bold mt-0.5">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-white/85 text-sm leading-relaxed">
                  {point}
                </span>
              </div>
            ))}
          </div>
        </motion.article>

        {/* Tech & tools */}
        <motion.article
          initial={fadeUp.initial}
          whileInView={fadeUp.animate}
          viewport={{ once: true }}
          className="rounded-xl border border-purple-500/20 bg-gradient-to-b from-tertiary to-[#120f22] p-5 md:p-6"
        >
          <SectionLabel
            icon={FaCode}
            label="Stack & tooling"
            accent="border-purple-500/30 text-purple-300 bg-purple-500/10"
          />

          <div className="mb-6">
            <h3 className="text-white text-sm font-semibold mb-3">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {project.techs.map((tech, index) => (
                <span
                  key={index}
                  className={`px-3 py-1 rounded-md text-xs font-medium bg-black-100 border border-purple-500/25 ${tech.color}`}
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>

          {project.tools && project.tools.length > 0 && (
            <div>
              <h3 className="text-white text-sm font-semibold mb-3">
                Development tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1 rounded-md text-xs font-medium bg-black-100/60 border border-white/10 text-secondary ${tool.color}`}
                  >
                    {tool.name}
                  </span>
                ))}
              </div>
            </div>
          )}
        </motion.article>
      </div>
    </section>
  );
};

export default ProjectDetails;
