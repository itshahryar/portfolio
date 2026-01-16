import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCertificate, FaCode, FaBriefcase, FaArrowRight } from "react-icons/fa";

const QuickLinks = () => {
  const navigate = useNavigate();

  const quickLinks = [
    {
      icon: FaCertificate,
      title: "Credentials & Certifications",
      description: "Academic credentials, certifications, experience letters, workshops, and recommendation letters for admissions and scholarships.",
      path: "/certifications",
    },
    {
      icon: FaCode,
      title: "Technical Skills",
      description: "Technical expertise across frontend, backend, AI/ML, computer vision, and development tools.",
      path: "/skills",
    },
    {
      icon: FaBriefcase,
      title: "Services & Solutions",
      description: "Professional services including web development, e-commerce, AI dashboards, mobile apps, and backend solutions.",
      path: "/services",
    },
  ];

  return (
    <section id="quick-links" className="mt-24 px-6 md:px-12 max-w-7xl mx-auto pb-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16 text-center"
      >
        <p className="text-secondary uppercase text-sm tracking-wider mb-2">
          Explore More
        </p>
        <h2 className="text-white text-3xl md:text-4xl font-bold">Explore More</h2>
        <div className="w-16 h-1 bg-purple-500 mx-auto mt-3 rounded-full"></div>
        <p className="mt-4 text-secondary text-[17px] max-w-3xl mx-auto leading-[30px]">
          Navigate through my credentials, technical skills, and professional services.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {quickLinks.map((link, index) => {
          const Icon = link.icon;
          return (
            <motion.div
              key={link.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => navigate(link.path)}
              className="bg-tertiary p-6 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group flex flex-col h-full"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-purple-600 to-purple-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md shadow-purple-500/30">
                <Icon className="text-white text-xl" />
              </div>
              
              <h3 className="text-white text-xl font-bold mb-3">{link.title}</h3>
              <p className="text-secondary text-[14px] leading-relaxed mb-auto flex-grow">
                {link.description}
              </p>
              
              <button className="mt-6 w-full py-2.5 px-4 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white rounded-lg text-sm font-medium transition-all duration-300 shadow-md shadow-purple-500/20 flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-purple-500/30">
                <span>Explore</span>
                <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default QuickLinks;

