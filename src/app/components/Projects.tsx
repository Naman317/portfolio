"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "WebToolSmith",
    type: "AI-Powered UI Generator",
    description: "AI tool that generates UI components from text prompts",
    overview: [
      "Built an AI-powered UI generator using OpenAI API to convert prompts into reusable components.",
      "Developed a responsive frontend using React and TailwindCSS for fast prototyping.",
      "Deployed on Vercel with optimized performance and instant load times."
    ],
    technologies: ["React", "Next.js", "OpenAI API", "TailwindCSS", "Node.js"],
    features: [
      "Prompt-based UI generation",
      "Live component preview and export",
      "Dark mode support",
      "Clipboard integration"
    ],
    github: "https://github.com/your-repo",
    live: "https://webtoolsmith.vercel.app"
  },
  {
    id: 2,
    title: "Real-Time Collaborative Whiteboard System",
    type: "Real-Time Collaboration Platform",
    description: "Multi-user interactive whiteboard for live collaboration",
    overview: [
      "Developed a real-time collaborative whiteboard enabling simultaneous drawing and interaction.",
      "Implemented WebSocket-based synchronization using Django Channels and ASGI architecture.",
      "Designed role-based access control for structured teacher-student interaction."
    ],
    technologies: [
      "Django",
      "Django Channels",
      "ASGI",
      "WebSockets",
      "Redis",
      "Daphne",
      "JavaScript",
      "HTML5 Canvas",
      "CSS",
      "PostgreSQL"
    ],
    features: [
      "Real-time drawing synchronization",
      "Live chat integration",
      "Role-based permissions (Teacher/Student)",
      "Undo/Redo canvas actions",
      "Session-based collaboration"
    ],
    github: "",
    live: ""
  },
  {
    id: 3,
    title: "PeerLink",
    type: "Peer-to-Peer File Sharing System",
    description: "Decentralized file sharing system with parallel transfer support",
    overview: [
      "Designed a decentralized peer-to-peer file sharing system using Java-based dynamic HTTP servers.",
      "Implemented multipart upload/download for efficient and fast file transfers.",
      "Containerized services using Docker for isolated and scalable deployment."
    ],
    technologies: ["Java", "Docker", "Next.js"],
    features: [
      "Decentralized file exchange",
      "Parallel file transfer system",
      "Chunk-based upload/download",
      "Dockerized microservice architecture",
      "Concurrent request handling"
    ],
    github: "",
    live: ""
  },
  {
    id: 4,
    title: "TaskMate",
    type: "Full Stack Productivity Application",
    description: "Task management platform with authentication and voice commands",
    overview: [
      "Built a full-stack task management system using MERN stack architecture.",
      "Implemented secure authentication using JWT and role-based access control.",
      "Integrated voice-based task creation using Web Speech API for accessibility."
    ],
    technologies: [
      "React.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Tailwind CSS"
    ],
    features: [
      "Task creation, update, and deletion",
      "Voice-powered task input",
      "Role-based access control",
      "Secure authentication system",
      "Responsive UI design"
    ],
    github: "",
    live: ""
  },
  {
    id: 5,
    title: "AI Interviewer",
    type: "AI-Powered Assessment Platform",
    description: "Multimodal AI system for evaluating interviews using audio, video, and code analysis",
    overview: [
      "Built a distributed AI interview platform combining React, Node.js, and FastAPI.",
      "Integrated multimodal evaluation using audio, video, and coding analysis.",
      "Implemented hybrid LLM routing between local (Ollama) and cloud (Gemini) models.",
      "Enabled real-time transcription, emotion detection, and performance scoring."
    ],
    technologies: [
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
    features: [
      "Real-time interview simulation",
      "Speech-to-text transcription (Whisper)",
      "Eye tracking and emotion analysis",
      "Code execution sandbox",
      "Resume-based adaptive questioning",
      "AI-powered performance analytics"
    ],
    github: "",
    live: ""
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
