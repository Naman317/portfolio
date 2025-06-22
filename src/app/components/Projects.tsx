/*"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A sleek personal website made with Next.js, Tailwind, and Framer Motion.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    link: "#",
  },
  {
    title: "E-commerce Store",
    description: "Full-stack shopping app with cart, payment, and admin panel.",
    tech: ["React", "Node.js", "MongoDB"],
    link: "#",
  },
  {
    title: "AI Interview Bot",
    description:
      "A voice/video AI bot that conducts mock interviews with analytics.",
    
    tech: ["OpenAI", "Socket.io", "TypeScript"],
    link: "#",
  },
];

const Projects = () => {
  return (
    <section className="w-full bg-[#f4f1ec] py-20 px-6 text-gray-900">
      <h2 className="text-4xl font-bold text-center mb-16">Projects</h2>

      <div className="flex flex-col gap-20 max-w-6xl mx-auto">
        {projects.map((proj, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className={`flex flex-col lg:flex-row items-center gap-10 ${
              idx % 2 !== 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            <div className="w-full lg:w-1/2 h-64 relative rounded-xl overflow-hidden shadow-xl">
              
                alt={proj.title}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
            
            </div>

            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h3 className="text-2xl font-semibold mb-2">{proj.title}</h3>
              <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                {proj.description}
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-4">
                {proj.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={proj.link}
                className="inline-block mt-2 text-sm text-blue-600 font-semibold hover:underline"
                target="_blank"
              >
                View Project →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
*/
// components/Projects.tsx
"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "WebToolSmith",
    type: "Creative Project",
    description: "A productivity tool that helps generate quick web components using AI.",
  },
  {
    id: 2,
    title: "PayTimePlus (HMS)",
    type: "Team Project",
    description: "A hospital management system with payroll, appointment & role access management.",
  },
  {
    id: 3,
    title: "Union Bank: Digital Public Library (UTouch)",
    type: "Team Project",
    description: "A library system to issue/manage digital content integrated with UTouch for Union Bank.",
  },
];

const Projects = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const selectedProject = projects.find((p) => p.id === selectedId);

  return (
    <section className="bg-[#f4f1ec] min-h-screen px-6 py-16 font-sans">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">03.0 Projects</h2>

        <AnimatePresence>
          {selectedId === null ? (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  onClick={() => setSelectedId(project.id)}
                  whileHover={{ scale: 1.01 }}
                  className="cursor-pointer rounded-xl p-6 bg-white/50 shadow-md backdrop-blur transition border border-white/20"
                >
                  <h3 className="text-xl font-semibold text-gray-800">
                    {String(project.id).padStart(2, "0")} {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">{project.type}</p>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="details"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="rounded-xl bg-white/70 backdrop-blur p-6 shadow-md border border-white/20"
            >
              <h3 className="text-2xl font-bold text-gray-800">{selectedProject?.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{selectedProject?.type}</p>
              <p className="text-gray-700 mt-4">{selectedProject?.description}</p>

              <button
                onClick={() => setSelectedId(null)}
                className="mt-6 inline-block px-4 py-2 rounded-md bg-gray-800 text-white hover:bg-gray-700 transition"
              >
                ← Back to Projects
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
