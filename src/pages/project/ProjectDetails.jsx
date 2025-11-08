import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { projectDetails } from './projectDetailsData';

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectDetails.find(p => p.id === id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) {
    return <div className="text-white text-center py-20">Project not found</div>;
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
    <section id="project-details" className="pt-32 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Project Header with Back Button */}
      <div className="mb-16 relative">
        <button 
            onClick={() => window.history.back()}
            className="absolute left-0 top-2 md:top-2 text-blue-400 hover:text-blue-300 flex items-center text-sm md:text-sm"
        >
            ← Back to Projects
        </button>

        <div className="text-center pt-8 md:pt-0">
            <p className="text-secondary uppercase text-sm tracking-wider mb-2">Project Showcase</p>
            <h2 className="text-white text-2xl md:text-3xl font-bold">{project.name}</h2>
            <div className="w-16 h-1 bg-purple-500 mx-auto mt-3 rounded-full"></div>
            <p className="mt-4 text-secondary text-[15px] md:text-[17px] max-w-3xl mx-auto leading-[28px] md:leading-[30px]">
            A detailed look at the project, its challenges, and solutions implemented.
            </p>
        </div>
      </div>

      {/* Video Section */}
      {project.video && (
        <div className="bg-tertiary p-6 rounded-xl shadow-md mb-12">
          <h2 className="text-white text-xl font-semibold mb-4 flex items-center">
            <span className="mr-2">🎬</span> Demo Video
          </h2>
          <div className="aspect-w-16 aspect-h-9 bg-black rounded-xl overflow-hidden">
            <video 
              controls 
              className="w-full h-full"
              poster={project.videoPoster}
            >
              <source src={project.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}

      {/* Problem and Solution Cards in a Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
        {/* Problem Section */}
        <div className="bg-tertiary p-6 rounded-xl shadow-md">
          <h2 className="text-white text-xl font-semibold mb-4 flex items-center">
            <span className="mr-2">🔍</span> Problem
          </h2>
          <p className="text-secondary text-base mb-3">{project.problemIntro}</p>
          <ul className="text-secondary text-base list-disc pl-5 space-y-2">
            {project.problemPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>

        {/* Solution Section */}
        <div className="bg-tertiary p-6 rounded-xl shadow-md">
          <h2 className="text-white text-xl font-semibold mb-4 flex items-center">
            <span className="mr-2">💡</span> Solution
          </h2>
          <p className="text-secondary text-base mb-3">{project.solutionIntro}</p>
          <ul className="text-secondary text-base list-disc pl-5 space-y-2">
            {project.solutionPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Project Scope Section */}
      <div className="bg-tertiary p-6 rounded-xl shadow-md mb-12">
        <h2 className="text-white text-xl font-semibold mb-4 flex items-center">
          <span className="mr-2">📋</span> Project Scope
        </h2>
        <p className="text-secondary text-base mb-3">{project.scopeIntro}</p>
        <ul className="text-secondary text-base list-disc pl-5 space-y-2">
          {project?.scopePoints?.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>

      {/* Tools and Tech Stack */}
      <div className="mb-12">
        <div className="mb-8">
          <h3 className="text-white text-lg font-semibold mb-4">Tech Stack</h3>
          <div className="flex flex-wrap gap-3">
            {project.techs.map((tech, index) => (
              <span key={index} className={`px-3 py-1 rounded-full text-sm ${tech.color}`}>
                {tech.name}
              </span>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Tools Used</h3>
          <div className="flex flex-wrap gap-3">
            {project.tools && project.tools.map((tool, index) => (
              <span key={index} className={`px-3 py-1 rounded-full text-sm ${tool.color}`}>
                {tool.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* UI Screenshots Slider Section */}
      <div className="bg-tertiary p-6 rounded-xl shadow-md">
        <h2 className="text-white text-xl font-semibold mb-4 flex items-center">
          <span className="mr-2">🖼️</span> UI Screenshots
        </h2>
        
        <div className="relative">
          {/* Main Image Display */}
          <div className="bg-black rounded-xl overflow-hidden mb-4">
            <img 
              src={project.images[currentImageIndex]} 
              alt={`Project screenshot ${currentImageIndex + 1}`}
              className="w-full h-auto object-cover"
            />
          </div>
          
          {/* Navigation Arrows */}
          <button 
            onClick={prevImage}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
          >
            &lt;
          </button>
          <button 
            onClick={nextImage}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
          >
            &gt;
          </button>
          
          {/* Image Indicators */}
          <div className="flex justify-center space-x-2 mt-4">
            {project.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full ${index === currentImageIndex ? 'bg-purple-500' : 'bg-gray-500'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
