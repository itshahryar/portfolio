import React from "react";
import { useNavigate } from "react-router-dom";
import { projects } from "../../constants";
import { motion } from "framer-motion";
import { github } from "../../assets";

const ProjectPreviewCard = ({ project }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.2 }}
      className="bg-tertiary p-5 rounded-2xl w-full sm:w-[360px] h-[640px] text-left shadow-lg hover:shadow-purple-800/30 transition-shadow duration-300"
    >
      <div className='relative w-full h-[230px]'>
        <img
          src={project.image}
          alt='project_image'
          className='w-full h-full object-cover rounded-2xl'
        />

        <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
          <div
            onClick={() => window.open(project.source_code_link, "_blank")}
            className='bg-blue-100 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
          >
            <img
              src={github}
              alt='source code'
              className='w-1/2 h-1/2 object-contain'
            />
          </div>
        </div>
      </div>

      <div className='mt-5'>
        <h3 className='text-white font-bold text-[24px]'>{project.name}</h3>
        <p className='mt-2 text-secondary text-[14px]'>{project.description}</p>
      </div>

      <div className='mt-4 flex flex-wrap gap-2'>
        {project.tags.map((tag) => (
          <p key={`${project.name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
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
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-8">
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
          className="flex flex-col justify-center items-center p-6 rounded-2xl shadow-lg bg-gradient-to-r from-purple-700 to-purple-500 text-white font-semibold w-full sm:w-[360px] h-[640px] hover:shadow-purple-800/30 transition-shadow duration-300 cursor-pointer relative overflow-hidden"
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
