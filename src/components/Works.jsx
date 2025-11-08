import { useNavigate } from 'react-router-dom';
import { FaGithub, FaEye } from "react-icons/fa";
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
      className='bg-tertiary p-5 rounded-2xl w-full sm:w-[360px] lg:h-[720px] hover:scale-[1.02] transition-transform duration-300'
    >  
      <div className='relative w-full h-[230px]'>
        <img
          src={image}
          alt='project_image'
          className='w-full h-full object-cover rounded-2xl'
        />
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
        {tags.map((tag) => (
          <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </div>
  );
};

const Works = () => {
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

      <div className='mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7'>
        {projects.map((project, index) => (
          <ProjectCard 
            key={`project-${index}`} 
            id={project.id} // Pass the id
            index={index} 
            {...project} 
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");

