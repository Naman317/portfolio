"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    "id": 1,
    "title": "WebToolSmith",
    "type": "AI-Powered UI Generator",
    "description": "AI tool that generates UI components from text prompts",
    "overview": [
      "Built an AI-powered UI generator using OpenAI API to convert prompts into reusable components.",
      "Developed a responsive frontend using React and TailwindCSS for fast prototyping.",
      "Deployed on Vercel with optimized performance and instant load times."
    ],
    "technologies": [
      "React",
      "Next.js",
      "OpenAI API",
      "TailwindCSS",
      "Node.js"
    ],
    "features": [
      "Prompt-based UI generation",
      "Live component preview and export",
      "Dark mode support",
      "Clipboard integration"
    ],
    "github": "https://github.com/Naman317",
    "live": "https://webtoolsmith.vercel.app"
  },
  {
    "id": 2,
    "title": "Virtual-WB",
    "type": "Real-Time Collaboration Platform",
    "description": "High-performance, real-time collaborative digital whiteboard with multiplayer cursors and advanced RBAC",
    "overview": [
      "Maintained persistent, bi-directional WebSocket connections powered by Django Channels for near-zero latency broadcasts.",
      "Engineered a decentralized peer-to-peer sync architecture for state recovery, eliminating server memory bottlenecks.",
      "Designed a strict Role-Based Access Control (RBAC) system for Teachers and Students with live WebSocket notifications.",
      "Optimized the 60 FPS drawing engine by bypassing standard React state updates during active drawing phases."
    ],
    "technologies": [
      "React (Vite)",
      "Zustand",
      "Tailwind CSS",
      "Framer Motion",
      "Django",
      "Django Channels (WebSockets)",
      "ASGI",
      "PostgreSQL (Supabase)",
      "Render",
      "Vercel"
    ],
    "features": [
      "Real-Time WebSocket Synchronization",
      "Peer-to-Peer State Recovery",
      "High-Performance 60 FPS Canvas Engine",
      "Multiplayer Live Cursors",
      "Live Chat & Notifications Engine"
    ],
    "github": "",
    "live": ""
  },
  {
    "id": 3,
    "title": "PeerLink",
    "type": "Peer-to-Peer File Sharing System",
    "description": "High-performance ephemeral P2P file-sharing application with direct TCP socket streaming and zero-copy I/O",
    "overview": [
      "Engineered an ephemeral P2P file sharing engine in Java, managing dynamic TCP port allocations (49152–65535) for direct peer transfer.",
      "Eliminated memory exhaustion (OOM) risks by building a streaming I/O pipeline using HTTP chunked transfer encoding.",
      "Architected a multi-threaded connection daemon with ExecutorService and ConcurrentHashMap, resolving connection bottlenecks.",
      "Automated resource reclamation via a ScheduledExecutorService (30-min TTL) to safely release bound ports and purge disk files."
    ],
    "technologies": [
      "Java 17",
      "TCP Sockets",
      "Multi-Threading",
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "Docker",
      "Render"
    ],
    "features": [
      "Zero-Memory-Spike Streaming (No OOM)",
      "Dynamic Port Invite Codes",
      "Automated TTL Resource Cleanup",
      "Thread-Safe State (ConcurrentHashMap)",
      "Real-Time Progress Tracking"
    ],
    "github": "",
    "live": "https://peerlink-share.onrender.com"
  },
  {
    "id": 4,
    "title": "Tasky (TaskMate)",
    "type": "Enterprise-grade Task Management & Productivity SaaS",
    "description": "Modern SaaS platform featuring zero-latency optimistic Kanban drag-and-drop and browser-native voice command control",
    "overview": [
      "Architected and deployed a full-stack MERN task management SaaS platform featuring real-time Kanban boards and voice-command navigation.",
      "Engineered a resilient cross-origin authentication system utilizing JWT, secure HttpOnly cookies, and custom header fallbacks.",
      "Optimized frontend performance using Redux Toolkit (RTK) Query, implementing optimistic UI updates for zero-latency drag-and-drop.",
      "Designed a 3-tier Role-Based Access Control (RBAC) system to enforce secure data isolation and administrative privileges.",
      "Integrated browser-native Web Speech API for voice-driven task automation and a tokenized team invitation system."
    ],
    "technologies": [
      "React 18",
      "Redux Toolkit",
      "RTK Query",
      "Tailwind CSS",
      "Framer Motion",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Web Speech API",
      "Vercel",
      "Render"
    ],
    "features": [
      "Optimistic UI & Kanban Drag-and-Drop",
      "Resilient Dual-Layer Authentication",
      "3-Tier Role-Based Access Control (RBAC)",
      "Voice-Controlled Productivity",
      "Tokenized Team Invitation System"
    ],
    "github": "https://github.com/Naman317/TaskMate",
    "live": "https://tasky-one-iota.vercel.app"
  },
  {
    "id": 5,
    "title": "AI Interviewer",
    "type": "AI-Powered Assessment Platform",
    "description": "Multimodal AI system for evaluating interviews using audio, video, and code analysis",
    "overview": [
      "Built a distributed AI interview platform combining React, Node.js, and FastAPI.",
      "Integrated multimodal evaluation using audio, video, and coding analysis.",
      "Implemented hybrid LLM routing between local (Ollama) and cloud (Gemini) models.",
      "Enabled real-time transcription, emotion detection, and performance scoring."
    ],
    "technologies": [
      "React",
      "Vite",
      "Node.js",
      "Express",
      "FastAPI",
      "Python",
      "MediaPipe",
      "OpenCV",
      "MongoDB",
      "Whisper",
      "Ollama",
      "Gemini",
      "WebSockets"
    ],
    "features": [
      "Real-time interview simulation",
      "Speech-to-text transcription (Whisper)",
      "Eye tracking and emotion analysis",
      "Code execution sandbox",
      "Resume-based adaptive questioning",
      "AI-powered performance analytics"
    ],
    "github": "",
    "live": ""
  }
];
const highlightWords = [
  "React", "MongoDB", "Tailwind", "TailwindCSS", "OpenAI", "full-stack",
  "backend", "frontend", "Vercel", "Next.js", "Node.js"
];

const Projects = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState("Overview");

  const selectedProject = projects.find((p) => p.id === selectedId);

  const tabContent = {
    Overview: selectedProject?.overview || [],
    Technologies: selectedProject?.technologies || [],
    Features: selectedProject?.features || []
  };

  return (
    <section className="bg-[#f4f1ec] min-h-screen px-6 py-16 font-sans text-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-gray-900"> Projects</h2>

        <AnimatePresence mode="wait">
          {selectedId === null ? (
            <motion.div
              key="list"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  onClick={() => {
                    setSelectedId(project.id);
                    setActiveTab("Overview");
                  }}
                  whileHover={{ scale: 1.01 }}
                  className="cursor-pointer rounded-xl p-6 bg-white/50 shadow-md backdrop-blur-md border border-white/40 transition"
                >
                  <h3 className="text-xl font-semibold text-indigo-700">
                    {project.title}
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
              className="rounded-xl bg-white/60 backdrop-blur-lg p-6 shadow-xl border border-gray-300 text-gray-800"
            >
              <h3 className="text-2xl font-bold text-indigo-700">{selectedProject?.title}</h3>
              <p className="text-sm text-gray-500 mb-4">{selectedProject?.type}</p>

              <div className="flex gap-3 mb-4">
                {["Overview", "Technologies", "Features"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-1 rounded-full text-sm font-medium transition ${
                      activeTab === tab
                        ? "bg-indigo-100 text-indigo-800"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="space-y-3">
                {activeTab === "Technologies" ? (
                  <div className="flex flex-wrap gap-2">
                    {tabContent[activeTab].map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full bg-white border border-gray-300 text-sm text-purple-600 font-semibold shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                ) : (
                  tabContent[activeTab].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-2 text-sm bg-white/70 text-gray-800 p-3 rounded-md shadow-sm"
                    >
                      <FaArrowRight className="mt-1 text-indigo-600 shrink-0" />
                      <span>
                        {item.split(" ").map((word, i) =>
                          highlightWords.includes(word.replace(/[.,]/g, "")) ? (
                            <span key={i} className="text-indigo-700 font-semibold">
                              {word}{" "}
                            </span>
                          ) : (
                            <span key={i}>{word} </span>
                          )
                        )}
                      </span>
                    </div>
                  ))
                )}
              </div>

              <div className="flex justify-between mt-6 flex-wrap gap-4">
                <button
                  onClick={() => setSelectedId(null)}
                  className="px-4 py-2 rounded-md bg-gray-800 text-white hover:bg-gray-700 transition"
                >
                  ← Back to Projects
                </button>

                <div className="flex gap-3">
                  {selectedProject?.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-md bg-indigo-600 hover:bg-indigo-500 transition text-white"
                    >
                      <FaGithub /> GitHub
                    </a>
                  )}
                  {selectedProject?.live && (
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-500 transition text-white"
                    >
                      <FaExternalLinkAlt /> Live
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
