import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaGithub, FaEye } from "react-icons/fa";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";

const ProjectCard = ({
  id, // Add id prop
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  const navigate = useNavigate();

  const handleViewDetails = (e) => {
    e.stopPropagation();
    navigate(`/project/${id}`);
  };

  const handleGithubClick = (e) => {
    e.stopPropagation(); // Prevent card navigation
    window.open(source_code_link, "_blank");
  };

  return (
    <div 
      className='bg-tertiary p-5 rounded-2xl w-full sm:w-[360px] lg:h-[720px] hover:scale-[1.02] transition-all duration-300 border border-purple-500/20 hover:border-purple-500/40 shadow-lg hover:shadow-xl'
    >  
      <div className='relative w-full h-[230px] overflow-hidden rounded-2xl group'>
        <img
          src={image}
          alt='project_image'
          className='w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl' />
      </div>

      {/* Buttons Section */}
      <div className='mt-4 flex gap-3'>
        <button
          onClick={handleViewDetails}
          className="flex-1 py-1.5 px-3 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white rounded-lg text-xs font-medium transition-all duration-300 shadow-md shadow-purple-500/20 flex items-center justify-center gap-1"
        >
          <FaEye className="text-white text-sm" />
          View Details
        </button>
        <button
          onClick={handleGithubClick}
          className="flex-1 py-1.5 px-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg text-xs font-medium transition-all duration-300 shadow-md shadow-blue-500/20 flex items-center justify-center gap-1"
        >
          <FaGithub className="text-white text-sm" />
          View Code
        </button>
      </div>

      <div className='mt-5'>
        <h3 className='text-white font-bold text-[24px]'>{name}</h3>
        <p className='mt-2 text-secondary text-[14px]'>{description}</p>
      </div>

      <div className='mt-4 flex flex-wrap gap-2'>
        {tags.slice(0, 4).map((tag) => (
          <span 
            key={`${name}-${tag.name}`} 
            className={`text-[12px] px-2 py-1 rounded-md bg-black-100 border border-purple-500/20 ${tag.color}`}
          >
            #{tag.name}
          </span>
        ))}
        {tags.length > 4 && (
          <span className="text-[12px] px-2 py-1 rounded-md bg-black-100 border border-purple-500/20 text-secondary">
            +{tags.length - 4} more
          </span>
        )}
      </div>
    </div>
  );
};

const Works = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  // Categorize projects
  const getProjectCategory = (project) => {
    // Check if project is UI-only (Figma projects)
    const isUI = project.tags.some(tag => 
      tag.name.toLowerCase() === 'figma'
    );
    
    if (isUI) return 'UI';
    return 'Web';
  };

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => getProjectCategory(project) === activeFilter);

  const totalProjects = projects.length;
  const filteredCount = filteredProjects.length;
  const categories = ['All', 'Web', 'UI'];

  return (
    <>
      <div className="mt-5">
        <p className="text-secondary uppercase text-sm tracking-wider">My work</p>
        <h2 className="text-white text-3xl font-bold">Projects.</h2>
        <p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories.
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

      {/* Extra context for Web projects */}
      {activeFilter === 'Web' && (
        <p className="mt-2 text-secondary text-xs md:text-sm max-w-3xl">
          Many of these web experiences also weave in supporting stacks like AI assistants,
          computer‑vision (YOLO / CV), FastAPI services, and robust DevTools — so each project
          is more than just a UI.
        </p>
      )}

      <div className='mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7'>
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

