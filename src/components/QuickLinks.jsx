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
        <h2 className="text-white text-3xl md:text-4xl font-bold">Explore Further</h2>
        <div className="w-16 h-1 bg-purple-500 mx-auto mt-3 rounded-full"></div>
        <p className="mt-4 text-secondary text-[17px] max-w-3xl mx-auto leading-[30px]">
          Move through the key sections of my portfolio with quick, focused paths.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {quickLinks.map((link, index) => {
          const Icon = link.icon;

          return (
            <motion.div
              key={link.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              onClick={() => navigate(link.path)}
              className="cursor-pointer group h-full"
            >
              <div className="bg-gradient-to-br from-tertiary to-black/50 rounded-2xl p-5 border border-purple-500/20 hover:border-purple-500/40 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm h-full flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-600 to-purple-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md shadow-purple-500/30">
                  <Icon className="text-white text-lg" />
                </div>
                <h3 className="text-white text-base font-semibold leading-tight">{link.title}</h3>
                <p className="text-secondary text-sm mt-2 leading-relaxed flex-1">
                  {link.description}
                </p>
                <div className="mt-4 inline-flex items-center gap-2 text-sm text-purple-300 group-hover:text-purple-200 transition-colors">
                  Explore
                  <FaArrowRight className="text-xs" />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default QuickLinks;

