import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { SectionWrapper } from "../hoc";
import { FaGlobe, FaShoppingCart, FaBrain, FaMobileAlt, FaPaintBrush, FaCloud } from "react-icons/fa";

const serviceGroups = [
  {
    icon: FaGlobe,
    title: "Web Experiences",
    subtitle: "Portfolios, landing pages, and content sites.",
    items: [
      "Personal & team portfolios",
      "Product landing pages",
      "Blog / content platforms",
      "Marketing & launch sites",
    ],
  },
  {
    icon: FaShoppingCart,
    title: "E‑commerce",
    subtitle: "Selling products and services online.",
    items: [
      "Storefronts & catalog pages",
      "Checkout & payments integration",
      "Admin dashboards & inventory",
      "Analytics & conversion tracking",
    ],
  },
  {
    icon: FaBrain,
    title: "AI Dashboards & Tools",
    subtitle: "AI‑assisted workflows and analytics.",
    items: [
      "AI copilots & chatbots (Gemini, LLMs)",
      "Risk / insights dashboards",
      "Document & data assistants",
      "Automation workflows",
    ],
  },
  {
    icon: FaMobileAlt,
    title: "Product UIs & Apps",
    subtitle: "Interfaces that feel fast, clean, and intuitive.",
    items: [
      "React & React Native frontends",
      "Design systems & component libraries",
      "Responsive, mobile‑first layouts",
      "Micro‑interactions & motion",
    ],
  },
  {
    icon: FaPaintBrush,
    title: "Design & Prototyping",
    subtitle: "Before we code, we design clearly.",
    items: [
      "Wireframes & user flows",
      "High‑fidelity UI in Figma",
      "Clickable prototypes",
      "Design handoff for dev teams",
    ],
  },
  {
    icon: FaCloud,
    title: "Back‑end & Platforms",
    subtitle: "The foundations that keep products reliable.",
    items: [
      "APIs with Node.js / FastAPI",
      "Auth, roles & permissions",
      "Databases & ORM integration",
      "Deployments & observability",
    ],
  },
];

const ServicesPage = () => {
  const navigate = useNavigate();

  const handleContactCTA = () => {
    navigate("/", { state: { scrollTo: "contact" } });
  };

  return (
    <section className="pt-8 md:pt-8 pb-20">
      {/* Header - small and left aligned like Achievements */}
      <div className="mb-8 md:mb-10">
        <p className="text-secondary uppercase text-xs md:text-sm tracking-[0.25em] mb-2">
          Services
        </p>
        <h1 className="text-white text-2xl md:text-3xl font-bold tracking-tight">
          Professional, end‑to‑end digital solutions.
        </h1>
        <p className="mt-3 text-secondary text-[14px] md:text-[15px] max-w-3xl leading-relaxed">
          From portfolio sites and e‑commerce to AI dashboards and full products,
          I help you design, build, and ship experiences that feel polished and
          practical — not over‑engineered.
        </p>
      </div>

      {/* Services Grid with categories */}
      <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {serviceGroups.map((group, index) => {
          const Icon = group.icon;
          return (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
              className="bg-tertiary rounded-2xl p-5 md:p-6 border border-purple-500/15 hover:border-purple-500/35 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col gap-3"
            >
              <div className="flex items-center gap-3 mb-1">
                <div className="w-10 h-10 rounded-xl bg-black-100 flex items-center justify-center text-purple-300">
                  <Icon className="text-lg" />
                </div>
                <div>
                  <h3 className="text-white text-base md:text-lg font-semibold">
                    {group.title}
                  </h3>
                  <p className="text-secondary text-xs md:text-[13px]">
                    {group.subtitle}
                  </p>
                </div>
              </div>

              <ul className="mt-2 space-y-1.5 text-secondary text-xs md:text-[13px] leading-relaxed list-disc list-inside">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.div>
          );
        })}
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

