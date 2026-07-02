"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const certificatesFolderLink = "https://drive.google.com/drive/folders/10QRXt3umf2aLv7I4BD5olViI5N_zjGXJ?usp=drive_link";

const certifications = [
  {
    title: "Programming in C++",
    org: "Coursera",
    desc: "Mastered CPP, OOPs, and Object Basics",
    link: certificatesFolderLink,
  },
  {
    title: "Node.js Professional Certificate",
    org: "Coursera",
    desc: "Learned RESTful API development and MongoDB integration",
    link: certificatesFolderLink,
  },
  {
    title: "DeepLearning.AI - Generative AI",
    org: "Coursera",
    desc: "Learned about LLMs, NLM, and Generative AI applications",
    link: certificatesFolderLink,
  },
  {
    title: "Understanding Cloud Fundamentals",
    org: "LinkedIn Learning",
    desc: "Network Administration, AWS, and Cloud Computing",
    link: certificatesFolderLink,
  },
  {
    title: "Summer Training Certification",
    org: "W3Elites",
    desc: "Learned MERN stack development with AI integration",
    link: certificatesFolderLink,
  },
  {
    title: "WEB-A-THON",
    org: "AirEV - Ondemand",
    desc: "Learned about plugins with AI integration",
    link: certificatesFolderLink,
  },
  {
    title: "System Design Primer",
    org: "Udemy",
    desc: "Built scalable systems and learned load balancing patterns",
    link: certificatesFolderLink,
  },
  {
    title: "Git & GitHub Mastery",
    org: "Coursera",
    desc: "Version control, collaboration, and CI/CD workflows",
    link: certificatesFolderLink,
  },
];

const Certification = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleCerts = showAll ? certifications : certifications.slice(0, 6);

  return (
    <section className="w-full py-20 bg-[#0f0f0f]">
      <h1 className="text-center text-4xl font-bold text-white mb-12">
        My <span className="text-purple-400">Certifications</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 max-w-7xl mx-auto">
        <AnimatePresence>
          {visibleCerts.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-[#1e1e2f] to-[#121212] p-6 rounded-2xl border border-white/10 shadow-lg hover:shadow-purple-500/30 transition duration-300 backdrop-blur-md"
            >
              <h3 className="text-white font-semibold text-lg mb-1">
                {cert.title}
              </h3>
              <p className="text-green-400 font-medium text-sm">{cert.org}</p>
              <p className="text-gray-400 mt-2 text-sm">{cert.desc}</p>
              <a
                href={cert.link}
                className="inline-block mt-4 text-sm text-purple-400 hover:underline"
              >
                View Certificate →
              </a>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {certifications.length > 6 && (
        <div className="mt-10 text-center">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-full transition duration-200 shadow-md"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </section>
  );
};

export default Certification;
