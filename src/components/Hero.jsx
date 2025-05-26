import { motion } from "framer-motion";
import { styles } from "../style";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
<div
  className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
>
  <div className="flex flex-col justify-center items-center mt-5">
    <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
    <div className="w-1 sm:h-80 h-40 violet-gradient" />
  </div>

  <div>
    <h1 className={`${styles.heroHeadText} text-white`}>
      Hi, I'm <span className="text-[#915EFF]">Shahryar</span>
    </h1>
    <p className="mt-2 text-white text-[14px] sm:text-[10px] lg:text-lg italic mb-4">
    "Pushing boundaries to make digital spaces feel like home, with a vision that stays unforgettable."
    </p>
<p className={`${styles.heroSubText} mt-2 text-white-100`}>
  I build full-stack web solutions using the MERN stack and Next.js, <br className="sm:block hidden" />
  with seamless integration of AI technologies to enhance functionality and user experience.
</p>
  </div>
</div>

      {/* Removed ComputersCanvas for performance optimization */}
      {/* <ComputersCanvas /> */}

    {/* Removed Movong dot 0 for performance optimization */}
      {/* <div className="absolute xs:bottom-20 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div> */}

<div className="absolute xs:bottom-20 bottom-24 w-full flex justify-center items-center">
  <a href="#about">
    <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-center p-2">
      <span className="block w-3 h-3 border-b-4 border-r-4 border-secondary rotate-45 transform" />
    </div>
  </a>
</div>

    </section>
  );
};

export default Hero;
