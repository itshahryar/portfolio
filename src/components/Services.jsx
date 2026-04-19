import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { SectionWrapper } from "../hoc";
import { 
  FaGlobe, 
  FaShoppingCart, 
  FaBrain, 
  FaCloud, 
  FaCode, 
  FaServer, 
  FaBriefcase, 
  FaChartBar, 
  FaRobot, 
  FaProjectDiagram 
} from "react-icons/fa";

const serviceGroups = [
  {
    icon: FaCode,
    title: "MERN Applications",
    subtitle: "Full-stack web applications with MongoDB, Express, React, and Node.js.",
    category: "web",
  },
  {
    icon: FaServer,
    title: "Next.js Applications",
    subtitle: "Server-side rendered applications with Next.js framework.",
    category: "web",
  },
  {
    icon: FaShoppingCart,
    title: "E-Commerce Platforms",
    subtitle: "Online stores with payment integration and inventory management.",
    category: "web",
  },
  {
    icon: FaBriefcase,
    title: "Business Applications",
    subtitle: "Custom solutions for business processes and workflows.",
    category: "web",
  },
  {
    icon: FaGlobe,
    title: "Portfolio Websites",
    subtitle: "Personal and professional portfolio sites with modern design.",
    category: "web",
  },
  {
    icon: FaChartBar,
    title: "Dashboard Solutions",
    subtitle: "Data visualization and analytics dashboards.",
    category: "web",
  },
  {
    icon: FaRobot,
    title: "AI Chatbots",
    subtitle: "Intelligent conversational assistants with LLM integration.",
    category: "ai",
  },
    {
    icon: FaBrain,
    title: "AI Analytics",
    subtitle: "Predictive analytics and data-driven insights.",
    category: "ai",
  },
  {
    icon: FaProjectDiagram,
    title: "AI Integration",
    subtitle: "Embedding AI models into existing applications.",
    category: "ai",
  },
  ];

const ServicesPage = () => {
  const navigate = useNavigate();

  const handleContactCTA = () => {
    navigate("/", { state: { scrollTo: "contact" } });
  };

  return (
    <section className="pt-8 md:pt-8 pb-20">
      {/* Header */}
      <div className="mb-8 md:mb-10">
        <p className="text-secondary uppercase text-xs md:text-sm tracking-[0.25em] mb-2">
          Services
        </p>
        <h1 className="text-white text-2xl md:text-3xl font-bold tracking-tight">
          Specialized Web & AI Development Services
        </h1>
        <p className="mt-3 text-secondary text-[14px] md:text-[15px] max-w-3xl leading-relaxed">
          I focus on two core areas: building modern web applications and integrating 
          intelligent AI solutions. Each service is tailored to deliver scalable, 
          performant, and user-friendly experiences.
        </p>
      </div>

      {/* Web Development Section */}
      <div className="mb-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 flex items-center gap-3">
            <FaGlobe className="text-purple-400" />
            Web Development
          </h2>
          <p className="text-secondary text-base">
            Creating responsive, scalable web applications with modern frameworks and best practices.
          </p>
        </motion.div>

        <div className="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-3">
          {serviceGroups.filter(group => group.category === 'web').map((group, index) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.1 }}
                className="bg-gradient-to-br from-tertiary to-black/50 rounded-xl p-4 border border-blue-500/20 hover:border-blue-500/40 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center h-[180px] w-full hover:scale-105 backdrop-blur-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-300 mb-3 flex-shrink-0">
                  <Icon className="text-xl" />
                </div>
                <h3 className="text-white text-sm md:text-base font-semibold mb-2 text-center">
                  {group.title}
                </h3>
                <p className="text-secondary text-xs leading-relaxed text-center flex-grow">
                  {group.subtitle}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* AI Integration in Web Platforms */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 p-4 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl border border-purple-500/20"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center">
              <span className="text-white text-lg font-bold">+</span>
            </div>
            <div className="flex-1">
              <h3 className="text-white text-base font-semibold">
                AI Integration in Web Platforms
              </h3>
              <p className="text-secondary text-xs leading-relaxed">
                Smart search, personalization, and automated content generation for next-gen web apps.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* AI Services Section */}
      <div className="mb-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-6"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 flex items-center gap-3">
            <FaBrain className="text-purple-400" />
            AI Solutions
          </h2>
          <p className="text-secondary text-base">
            Integrating artificial intelligence to create intelligent, automated, and data-driven applications.
          </p>
        </motion.div>

        <div className="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-3">
          {serviceGroups.filter(group => group.category === 'ai').map((group, index) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: (index + 5) * 0.1 }}
                className="bg-gradient-to-br from-tertiary to-black/50 rounded-xl p-4 border border-purple-500/20 hover:border-purple-500/40 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center h-[180px] w-full hover:scale-105 backdrop-blur-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-300 mb-3 flex-shrink-0">
                  <Icon className="text-xl" />
                </div>
                <h3 className="text-white text-sm md:text-base font-semibold mb-2 text-center">
                  {group.title}
                </h3>
                <p className="text-secondary text-xs leading-relaxed text-center flex-grow">
                  {group.subtitle}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-10 md:mt-12 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
        <button
          type="button"
          onClick={handleContactCTA}
          className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-purple-700 text-white text-sm md:text-base font-medium shadow-lg shadow-purple-500/30 hover:from-purple-700 hover:to-purple-800 transition-all"
        >
          Let&apos;s discuss your project
        </button>
        <p className="text-secondary text-xs md:text-sm max-w-xl">
          Share a short brief — what you&apos;re building, timeline, and any links — and
          I&apos;ll reply with a clear next step and how I can help.
        </p>
      </div>
    </section>
  );
};

export default SectionWrapper(ServicesPage, "");

