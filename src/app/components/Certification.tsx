"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const certifications = [
  {
    title: "Server-side JavaScript with Node.js",
    org: "NIIT / Coursera",
    desc: "Completed NIIT-authorized course on server-side JavaScript, REST APIs, and backend development with Node.js",
    link: "/certificates/Coursera_01.pdf",
  },
  {
    title: "Introduction to Generative AI",
    org: "Google Cloud / Coursera",
    desc: "Learned foundations of Generative AI, LLMs, and practical AI application development via Google Cloud",
    link: "/certificates/Coursera_02.pdf",
  },
  {
    title: "Introduction to Large Language Models",
    org: "Google Cloud / Coursera",
    desc: "Deep dive into LLM architecture, fine-tuning strategies, and responsible deployment with Google Cloud Training",
    link: "/certificates/Coursera_03.pdf",
  },
  {
    title: "MERN Stack Development",
    org: "CipherSchools",
    desc: "Completed intensive MERN Stack training at CipherSchools (Jan–Feb 2025) at Lovely Professional University",
    link: "/certificates/Cipher.pdf",
  },
  {
    title: "FLAMES'24 Summer Training Program",
    org: "W3Elites Pvt. Ltd.",
    desc: "Completed intensive MERN Stack + GenAI Integration training with industrial practices (Jun–Jul 2024). Submitted a capstone project as outcome.",
    link: "/certificates/W3elites-Internship-Certificate.pdf",
  },
  {
    title: "HackOn With Amazon — Season 4",
    org: "Amazon / Unstop",
    desc: "Participated in the Coding Round of HackOn With Amazon Season 4, organised by Amazon for students at LPU",
    link: "/certificates/HackOn.pdf",
  },
  {
    title: "Certificate of Appreciation",
    org: "Meenar Samiti Public School",
    desc: "Recognized for outstanding contribution and dedication toward community development activities",
    link: "/certificates/Naman Sharma_CDP.pdf",
  },
];

const Certification = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedCert, setSelectedCert] = useState<{
    title: string;
    org: string;
    desc: string;
    link: string;
  } | null>(null);

  const visibleCerts = showAll ? certifications : certifications.slice(0, 6);

  // Close on Escape key press
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedCert(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section className="w-full py-20 bg-[#0f0f0f] relative">
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
              onClick={() => setSelectedCert(cert)}
              className="bg-gradient-to-br from-[#1e1e2f] to-[#121212] p-6 rounded-2xl border border-white/10 shadow-lg hover:shadow-purple-500/30 hover:border-purple-500/30 hover:scale-[1.02] transition duration-300 backdrop-blur-md flex flex-col justify-between cursor-pointer group"
            >
              <div>
                <h3 className="text-white font-semibold text-lg mb-1 group-hover:text-purple-300 transition">
                  {cert.title}
                </h3>
                <p className="text-green-400 font-medium text-sm">{cert.org}</p>
                <p className="text-gray-400 mt-2 text-sm">{cert.desc}</p>
              </div>
              <div className="inline-flex items-center gap-1.5 mt-4 text-sm text-purple-400 group-hover:text-purple-300 font-medium w-max transition">
                <span>View Certificate</span>
                <span className="transform group-hover:translate-x-1 transition duration-200">→</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {certifications.length > 6 && (
        <div className="mt-10 text-center">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-full transition duration-200 shadow-md cursor-pointer"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}

      {/* Glassmorphic Certificate Modal - Pure Clean Minimal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              className="relative w-full max-w-4xl h-[85vh] bg-[#14141d]/90 backdrop-blur-2xl rounded-2xl overflow-hidden shadow-2xl border border-white/15 flex flex-col"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Clean Minimal Header */}
              <div className="flex items-center justify-between px-5 py-3.5 bg-white/5 border-b border-white/10 select-none">
                <div className="text-sm font-medium text-white truncate max-w-[70%]">
                  {selectedCert.title} <span className="text-purple-400 text-xs ml-1">• {selectedCert.org}</span>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={selectedCert.link}
                    download
                    className="text-gray-300 hover:text-white transition text-xs flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10"
                    title="Download Certificate"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3.5 h-3.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                    <span>Download</span>
                  </a>

                  <button
                    onClick={() => setSelectedCert(null)}
                    className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-gray-400 hover:text-white flex items-center justify-center cursor-pointer transition"
                    title="Close (Esc)"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* PDF Embed / Preview Container */}
              <div className="flex-1 bg-[#0f0f14] relative overflow-hidden">
                <object
                  data={`${selectedCert.link}#toolbar=0&navpanes=0&scrollbar=0`}
                  type="application/pdf"
                  className="w-full h-full"
                >
                  <div className="flex flex-col items-center justify-center h-full text-gray-400 p-6 text-center">
                    <p className="mb-4">Unable to display PDF preview in this browser.</p>
                    <a
                      href={selectedCert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm transition"
                    >
                      Open PDF in New Window
                    </a>
                  </div>
                </object>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certification;
