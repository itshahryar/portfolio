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

      <div className="mt-4 flex flex-col gap-3">
        <div className="flex gap-3">
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
        {isLive && liveLink && (
          <button
            onClick={handleLiveLinkClick}
            className="w-full py-1.5 px-3 bg-gradient-to-r from-violet-600 to-violet-700 hover:from-violet-700 hover:to-violet-800 text-white rounded-lg text-xs font-medium transition-all duration-300 shadow-md shadow-violet-500/20 flex items-center justify-center gap-1"
          >
            <FaExternalLinkAlt className="text-white text-sm" />
            Visit Live Site
          </button>
        )}
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

  // Map project types to display names
  const typeToDisplayName = {
    'academic': 'Academic Projects',
    'solo': 'Solo Projects',
    'client-project': 'Client Projects',
    'client-portfolio': 'Client Portfolios',
    'ui-ux': 'UI/UX Design',
  };

  // Map display names to project types
  const displayNameToType = {
    'Academic Projects': 'academic',
    'Solo Projects': 'solo',
    'Client Projects': 'client-project',
    'Client Portfolios': 'client-portfolio',
    'UI/UX Design': 'ui-ux',
  };

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => {
        const projectType = displayNameToType[activeFilter];
        return project.type === projectType;
      });

  const totalProjects = projects.length;
  const filteredCount = filteredProjects.length;
  const categories = ['All', 'Academic Projects', 'Solo Projects', 'Client Projects', 'Client Portfolios', 'UI/UX Design'];

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
          solutions, and collaborate effectively to meet specific business needs.
        </p>
      )}
      
      {activeFilter === 'Client Portfolios' && (
        <p className="mt-2 text-secondary text-xs md:text-sm max-w-3xl">
          Portfolio websites showcase my ability to create professional, visually appealing
          online presences that effectively represent individuals and their work.
        </p>
      )}
      
      {activeFilter === 'UI/UX Design' && (
        <p className="mt-2 text-secondary text-xs md:text-sm max-w-3xl">
          UI/UX design projects demonstrate my ability to create intuitive, user-centered
          interfaces and experiences through thoughtful design principles.
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
