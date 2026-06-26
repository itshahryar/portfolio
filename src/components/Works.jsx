import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaGithub, FaEye, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";

const ProjectCard = ({
  id,
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  isLive,
  liveLink,
}) => {
  const navigate = useNavigate();

  const handleViewDetails = (e) => {
    e.stopPropagation();
    navigate(`/project/${id}`);
  };

  const handleGithubClick = (e) => {
    e.stopPropagation();
    window.open(source_code_link, "_blank");
  };

  const handleLiveLinkClick = (e) => {
    e.stopPropagation();
    window.open(liveLink, "_blank");
  };

  const shortDescription =
    description.length > 220 ? `${description.slice(0, 220).trim()}...` : description;

  return (
    <div className="group bg-gradient-to-br from-[#1d1836] to-black/40 rounded-2xl w-full h-full text-left shadow-lg transition-all duration-500 backdrop-blur-sm border border-white/[0.06] hover:ring-1 hover:ring-purple-500/25 overflow-hidden flex flex-col">
      {/* ── Image ─────────────────────────────────── */}
      <div className="relative w-full h-[200px] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1d1836] via-transparent to-transparent pointer-events-none" />
      </div>

      {/* ── Content ───────────────────────────────── */}
      <div className="p-5 flex flex-col flex-1">
        {/* Title & Description */}
        <h3 className="text-white text-lg font-semibold leading-tight">
          {name}
        </h3>
        <p className="mt-2 text-gray-400 text-sm leading-relaxed flex-1">
          {shortDescription}
        </p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {tags.slice(0, 4).map((tag) => (
            <span
              key={`${name}-${tag.name}`}
              className={`text-[11px] font-medium px-2 py-0.5 rounded-full border border-white/5 bg-white/[0.03] ${tag.color}`}
            >
              {tag.name}
            </span>
          ))}
          {tags.length > 4 && (
            <span className="text-[11px] text-gray-500 px-2 py-0.5">
              +{tags.length - 4}
            </span>
          )}
        </div>

        {/* ── Divider ─────────────────────────────── */}
        <div className="border-t border-white/5 mt-4 mb-3" />

        {/* ── Actions ─────────────────────────────── */}
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
          {isLive && liveLink && (
            <button
              onClick={handleLiveLinkClick}
              className="py-2 px-3 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white rounded-lg text-xs font-medium transition-colors duration-200 border border-white/5 hover:border-white/10 flex items-center justify-center gap-1.5"
            >
              <FaExternalLinkAlt className="text-[10px]" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const Works = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  // Map display names to project types
  const displayNameToType = {
    'Academic Projects': 'academic',
    'Solo Projects': 'solo',
    'Client Projects': 'client-project',
    'UI/UX Design': 'ui-ux',
  };

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => {
        if (activeFilter === 'Client Projects') {
          return project.type === 'client-project' || project.type === 'client-portfolio';
        }
        const projectType = displayNameToType[activeFilter];
        return project.type === projectType;
      });

  const totalProjects = projects.length;
  const filteredCount = filteredProjects.length;
  const categories = ['All', 'Academic Projects', 'Solo Projects', 'Client Projects', 'UI/UX Design'];

  return (
    <>
      <div className="mt-5">
        <p className="text-secondary uppercase text-sm tracking-wider">My work</p>
        <h2 className="text-white text-3xl font-bold">Projects.</h2>
        <p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
          These projects show how I solve real product problems across web, AI,
          and client-focused builds. Each card includes a short overview plus
          quick access to code, details, and live demos when available.
        </p>
      </div>

      {/* Category Filter Buttons */}
      <div className="mt-12 flex flex-wrap gap-4">
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-6 py-2.5 rounded-lg font-medium text-sm transition-all duration-300 ${
              activeFilter === category
                ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg shadow-purple-500/30'
                : 'bg-tertiary text-secondary hover:text-white hover:bg-black-100 border border-purple-500/20'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category}
          </motion.button>
        ))}
      </div>

      {/* Project Count */}
      <div className="mt-4 text-secondary text-sm">
        Showing{" "}
        <span className="text-white font-semibold">{filteredCount}</span> of{" "}
        <span className="text-white font-semibold">{totalProjects}</span>{" "}
        projects
        {activeFilter !== 'All' && (
          <> in <span className="capitalize">{activeFilter}</span></>
        )}
        .
      </div>

      {/* Extra context for different categories */}
      {activeFilter === 'Academic Projects' && (
        <p className="mt-2 text-secondary text-xs md:text-sm max-w-3xl">
          Academic projects showcase my ability to apply theoretical knowledge to practical
          problems, often involving research, innovation, and complex problem-solving.
        </p>
      )}
      
      {activeFilter === 'Solo Projects' && (
        <p className="mt-2 text-secondary text-xs md:text-sm max-w-3xl">
          Solo projects demonstrate my initiative to explore new technologies and build
          solutions for problems I'm passionate about, often incorporating AI, web development,
          and innovative features.
        </p>
      )}
      
      {activeFilter === 'Client Projects' && (
        <p className="mt-2 text-secondary text-xs md:text-sm max-w-3xl">
          Client projects highlight my ability to understand requirements, deliver professional
          solutions, and collaborate effectively to meet specific business needs, including
          portfolio websites and custom applications.
        </p>
      )}
      
      
      {activeFilter === 'UI/UX Design' && (
        <p className="mt-2 text-secondary text-xs md:text-sm max-w-3xl">
          UI/UX design projects demonstrate my ability to create intuitive, user-centered
          interfaces and experiences through thoughtful design principles.
        </p>
      )}

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 items-stretch">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <motion.div
              key={`project-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard 
                id={project.id}
                index={index} 
                {...project} 
              />
            </motion.div>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-secondary text-lg">No projects found in this category.</p>
          </div>
        )}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
