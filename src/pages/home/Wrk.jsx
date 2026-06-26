import React from "react";
import { useNavigate } from "react-router-dom";
import { projects } from "../../constants";
import { motion } from "framer-motion";
import { FaGithub, FaEye, FaExternalLinkAlt } from "react-icons/fa";

const ProjectPreviewCard = ({ project }) => {
  const navigate = useNavigate();
  const shortDescription =
    project.description.length > 170
      ? `${project.description.slice(0, 170).trim()}...`
      : project.description;

  const handleGithubClick = (e) => {
    e.stopPropagation();
    window.open(project.source_code_link, "_blank");
  };

  const handleViewDetails = (e) => {
    e.stopPropagation();
    navigate(`/project/${project.id}`);
  };

  const handleLiveLinkClick = (e) => {
    e.stopPropagation();
    window.open(project.liveLink, "_blank");
  };

  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="group bg-gradient-to-br from-[#1d1836] to-black/40 rounded-2xl w-full sm:w-[360px] text-left shadow-lg transition-all duration-500 backdrop-blur-sm border border-white/[0.06] hover:ring-1 hover:ring-purple-500/25 overflow-hidden flex flex-col"
    >
            {/* ── Image ─────────────────────────────────── */}
      <div className="relative w-full h-[200px] overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1d1836] via-transparent to-transparent pointer-events-none" />
      </div>

      {/* ── Content ───────────────────────────────── */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-white text-lg font-semibold leading-tight">
          {project.name}
        </h3>
        <p className="mt-2 text-gray-400 text-sm leading-relaxed flex-1">
          {shortDescription}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={`${project.name}-${tag.name}`}
              className={`text-[11px] font-medium px-2 py-0.5 rounded-full border border-white/5 bg-white/[0.03] ${tag.color}`}
            >
              {tag.name}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="text-[11px] text-gray-500 px-2 py-0.5">
              +{project.tags.length - 4}
            </span>
          )}
        </div>

        <div className="border-t border-white/5 mt-4 mb-3" />

        <div className="flex gap-2">
          <button
            onClick={handleViewDetails}
            className="flex-1 py-2 px-3 bg-purple-600/80 hover:bg-purple-600 text-white rounded-lg text-xs font-medium transition-colors duration-200 flex items-center justify-center gap-1.5"
          >
            <FaEye className="text-[11px]" />
            View Full Details
          </button>
          <button
            onClick={handleGithubClick}
            className="flex-1 py-2 px-3 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white rounded-lg text-xs font-medium transition-colors duration-200 border border-white/5 hover:border-white/10 flex items-center justify-center gap-1.5"
          >
            <FaGithub className="text-[11px]" />
            Code
          </button>
          {project.isLive && project.liveLink && (
            <button
              onClick={handleLiveLinkClick}
              className="py-2 px-3 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white rounded-lg text-xs font-medium transition-colors duration-200 border border-white/5 hover:border-white/10 flex items-center justify-center gap-1.5"
            >
              <FaExternalLinkAlt className="text-[10px]" />
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Wrk = () => {
  const navigate = useNavigate();

  return (
    <section id="home-projects" className="mt-24 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="mb-16 text-center">
        <p className="text-secondary uppercase text-sm tracking-wider mb-2">
          My Work
        </p>
        <h2 className="text-white text-3xl font-bold">Projects</h2>
        <div className="w-16 h-1 bg-purple-500 mx-auto mt-3 rounded-full"></div>
      </div>

      {/* Cards + View All in Same Row */}
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-6">
        {/* Show only first 2 projects */}
        {projects.slice(0, 2).map((project, index) => (
          <ProjectPreviewCard key={index} project={project} />
        ))}

        {/* View All Card with same design as Experience section */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2 }}
          onClick={() => navigate("/projects")}
          className="flex flex-col justify-center items-center p-6 rounded-2xl shadow-lg bg-gradient-to-r from-purple-700 to-purple-500 text-white font-semibold w-full sm:w-[360px] hover:shadow-purple-800/30 transition-shadow duration-300 cursor-pointer relative overflow-hidden min-h-[460px]"
        >
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CiAgPGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIgZmlsbD0iI2ZmZiIgLz4KPC9zdmc+')] bg-repeat"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 text-center">
            {/* Icon */}
            <div className="mb-4 flex justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            
            <p className="text-xl font-bold mb-2">View All</p>
            <p className="text-sm text-purple-100 mb-4">Explore complete project gallery</p>
            
            {/* Animated Arrow */}
            <motion.div
              className="flex items-center justify-center mt-2"
              animate={{ x: [0, 8, 0] }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            >
              <span className="text-2xl font-bold">→</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Wrk;

