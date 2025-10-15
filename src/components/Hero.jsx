import { motion } from "framer-motion";
import { styles } from "../style";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="flex-1">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Shahryar</span>
          </h1>

          <p className="mt-2 text-white text-[14px] sm:text-[10px] lg:text-lg italic mb-4">
            "Pushing boundaries to make digital spaces feel like home."
          </p>

          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Associate Software Engineer | Full Stack | (MERN, Next.js & FastAPI) | Exploring AI & Computer Vision | CUI ‘25
          </p>

          {/* Download CV Button */}
          <motion.a
            href="/Shahryar Resume.pdf"
            download="Shahryar_Resume.pdf"
            className="mt-6 inline-flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3 bg-[#915EFF] text-white font-medium rounded-lg shadow-lg hover:bg-[#7a4de6] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#915EFF] focus:ring-opacity-50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            <span className="text-xs sm:text-sm">Grab My Resume</span>
          </motion.a>
        </div>
      </div>

      <div className="absolute xs:bottom-20 bottom-24 w-full flex justify-center items-center">
        <a href="#about">
          <motion.div 
            className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-center p-2"
            animate={{ y: [0, 8, 0] }}
            whileHover={{ 
              borderColor: "#915EFF",
              scale: 1.1,
              transition: { duration: 0.3 }
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          >
            <motion.span 
              className="block w-3 h-3 border-b-4 border-r-4 border-secondary rotate-45 transform"
              whileHover={{ 
                borderColor: "#915EFF",
                transition: { duration: 0.3 }
              }}
            />
          </motion.div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
