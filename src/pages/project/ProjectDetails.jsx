import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaGithub, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { projectDetails } from './projectDetailsData';

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectDetails.find(p => p.id === id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-white text-2xl font-bold mb-4">Project not found</h2>
          <button
            onClick={() => navigate('/projects')}
            className="text-purple-400 hover:text-purple-300"
          >
            ← Back to Projects
          </button>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="project-details" className="pt-32 px-6 md:px-12 max-w-7xl mx-auto pb-20">
      {/* Project Header with Back Button */}
      <motion.div 
        className="mb-16 relative"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.button 
            onClick={() => navigate('/projects')}
            className="absolute left-0 top-2 md:top-2 text-purple-400 hover:text-purple-300 flex items-center gap-2 text-sm md:text-base font-medium transition-colors"
            whileHover={{ x: -5 }}
        >
            <FaArrowLeft /> Back to Projects
        </motion.button>

        <div className="text-center pt-8 md:pt-0">
            <motion.p 
              className="text-secondary uppercase text-sm tracking-wider mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Project Showcase
            </motion.p>
            <motion.h2 
              className="text-white text-3xl md:text-5xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              {project.name}
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-purple-600 to-purple-400 mx-auto mt-4 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            />
            <motion.p 
              className="mt-6 text-secondary text-[15px] md:text-[17px] max-w-3xl mx-auto leading-[28px] md:leading-[30px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              A detailed look at the project, its challenges, and solutions implemented.
            </motion.p>
            
            {/* GitHub Link */}
            {project.source_code_link && (
              <motion.a
                href={project.source_code_link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white rounded-lg font-medium transition-all duration-300 shadow-lg shadow-purple-500/30"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub /> View Source Code
              </motion.a>
            )}
        </div>
      </motion.div>

      {/* Video Section */}
      {project.video && (
        <motion.div 
          className="bg-tertiary p-6 rounded-xl shadow-lg border border-purple-500/20 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-white text-xl font-semibold mb-4 flex items-center">
            <span className="mr-2">🎬</span> Demo Video
          </h2>
          <div className="aspect-video bg-black rounded-xl overflow-hidden shadow-2xl">
            <video 
              controls 
              className="w-full h-full"
              poster={project.videoPoster}
            >
              <source src={project.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </motion.div>
      )}

      {/* Problem and Solution Cards in a Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Problem Section */}
        <motion.div 
          className="bg-tertiary p-6 rounded-xl shadow-lg border border-red-500/20 hover:border-red-500/40 transition-all duration-300"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
        >
          <h2 className="text-white text-xl font-semibold mb-4 flex items-center">
            <span className="mr-2 text-2xl">🔍</span> Problem
          </h2>
          <p className="text-secondary text-base mb-4 leading-relaxed">{project.problemIntro}</p>
          <ul className="text-secondary text-base list-disc pl-5 space-y-2.5">
            {project.problemPoints.map((point, index) => (
              <li key={index} className="leading-relaxed">{point}</li>
            ))}
          </ul>
        </motion.div>

        {/* Solution Section */}
        <motion.div 
          className="bg-tertiary p-6 rounded-xl shadow-lg border border-green-500/20 hover:border-green-500/40 transition-all duration-300"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
        >
          <h2 className="text-white text-xl font-semibold mb-4 flex items-center">
            <span className="mr-2 text-2xl">💡</span> Solution
          </h2>
          <p className="text-secondary text-base mb-4 leading-relaxed">{project.solutionIntro}</p>
          <ul className="text-secondary text-base list-disc pl-5 space-y-2.5">
            {project.solutionPoints.map((point, index) => (
              <li key={index} className="leading-relaxed">{point}</li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Project Scope Section */}
      <motion.div 
        className="bg-tertiary p-6 rounded-xl shadow-lg border border-purple-500/20 mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
      >
        <h2 className="text-white text-xl font-semibold mb-4 flex items-center">
          <span className="mr-2 text-2xl">📋</span> Project Scope
        </h2>
        <p className="text-secondary text-base mb-4 leading-relaxed">{project.scopeIntro}</p>
        <ul className="text-secondary text-base list-disc pl-5 space-y-2.5">
          {project?.scopePoints?.map((point, index) => (
            <li key={index} className="leading-relaxed">{point}</li>
          ))}
        </ul>
      </motion.div>

      {/* Tools and Tech Stack */}
      <motion.div 
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0 }}
      >
        <div className="mb-8">
          <h3 className="text-white text-xl font-semibold mb-6 flex items-center">
            <span className="w-1 h-6 bg-purple-500 mr-3 rounded-full"></span>
            Tech Stack
          </h3>
          <div className="flex flex-wrap gap-3">
            {project.techs.map((tech, index) => (
              <motion.span 
                key={index} 
                className={`px-4 py-2 rounded-full text-sm font-medium bg-black-100 border border-purple-500/30 hover:border-purple-500/60 transition-all ${tech.color}`}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1 + index * 0.05 }}
              >
                {tech.name}
              </motion.span>
            ))}
          </div>
        </div>
        
        {project.tools && project.tools.length > 0 && (
          <div>
            <h3 className="text-white text-xl font-semibold mb-6 flex items-center">
              <span className="w-1 h-6 bg-purple-500 mr-3 rounded-full"></span>
              Tools Used
            </h3>
            <div className="flex flex-wrap gap-3">
              {project.tools.map((tool, index) => (
                <motion.span 
                  key={index} 
                  className={`px-4 py-2 rounded-full text-sm font-medium bg-black-100 border border-purple-500/30 hover:border-purple-500/60 transition-all ${tool.color}`}
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + index * 0.05 }}
                >
                  {tool.name}
                </motion.span>
              ))}
            </div>
          </div>
        )}
      </motion.div>

      {/* UI Screenshots Slider Section */}
      <motion.div 
        className="bg-tertiary p-6 rounded-xl shadow-lg border border-purple-500/20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3 }}
      >
        <h2 className="text-white text-xl font-semibold mb-6 flex items-center">
          <span className="mr-2 text-2xl">🖼️</span> UI Screenshots
        </h2>
        
        <div className="relative group">
          {/* Main Image Display */}
          <motion.div 
            className="bg-black rounded-xl overflow-hidden mb-4 shadow-2xl"
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <img 
              src={project.images[currentImageIndex]} 
              alt={`Project screenshot ${currentImageIndex + 1}`}
              className="w-full h-auto object-cover"
            />
          </motion.div>
          
          {/* Navigation Arrows */}
          {project.images.length > 1 && (
            <>
              <motion.button 
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white p-3 rounded-full transition-all duration-300 shadow-lg backdrop-blur-sm"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaChevronLeft />
              </motion.button>
              <motion.button 
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white p-3 rounded-full transition-all duration-300 shadow-lg backdrop-blur-sm"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaChevronRight />
              </motion.button>
            </>
          )}
          
          {/* Image Indicators */}
          {project.images.length > 1 && (
            <div className="flex justify-center gap-2 mt-6">
              {project.images.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentImageIndex 
                      ? 'bg-purple-500 w-8 shadow-lg shadow-purple-500/50' 
                      : 'bg-gray-600 w-2 hover:bg-gray-500'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectDetails;
