"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import QuoteOfTheDay from "./ui/QuoteOfTheDay";

const gridItemAnim = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.01, duration: 0.1, ease: "easeOut" },
  }),
};

const Grid = () => {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [isCVOpen, setIsCVOpen] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setDate(
        now.toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      );
      setTime(
        now.toLocaleTimeString("en-US", {
          hour12: true,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <div className="grid min-h-screen w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[minmax(150px,_auto)] gap-6 p-6 bg-[#f4f1ec] text-gray-900 font-sans">
      {/* Top Boxes */}
      {[
        {
          content: (
            <>
              <h2 className="text-3xl font-bold leading-snug transition group-hover:text-blue-500">
                I prioritize client collaboration, fostering open communication
              </h2>
              <div className="mt-4 h-1 w-16 bg-gradient-to-r from-blue-400 to-teal-300 rounded-full" />
            </>
          ),
        },
        {
          content: (
            <>
              <h2 className="text-3xl font-bold leading-snug transition group-hover:text-purple-500">
                I&apos;m very flexible with time zone communications
              </h2>
              <div className="mt-4 h-1 w-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full" />
            </>
          ),
        },
        {
          content: (
            <>
              <p className="text-sm text-gray-500">I constantly try to improve</p>
              <h2 className="text-3xl font-bold mt-2 transition group-hover:text-yellow-400">
                My tech stack
              </h2>
              <div className="relative mt-5 overflow-hidden w-full flex flex-col gap-3">
               

                <motion.div
                  className="flex gap-3 whitespace-nowrap w-max"
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{ repeat: Infinity, ease: "linear", duration: 18 }}
                >
                  {[
                    "ReactJS", "NextJS", "Express", "PostgreSQL", "TypeScript", "Node.js", "MongoDB", "TailwindCSS", "Git", "Docker", "Figma",
                    "ReactJS", "NextJS", "Express", "PostgreSQL", "TypeScript", "Node.js", "MongoDB", "TailwindCSS", "Git", "Docker", "Figma"
                  ].map((tech, i) => (
                    <span key={i} className="bg-[#334155] text-white px-4 py-1.5 rounded-full text-sm font-medium shadow-sm cursor-default">
                      {tech}
                    </span>
                  ))}
                </motion.div>

               
                <motion.div
                  className="flex gap-3 whitespace-nowrap w-max"
                  animate={{ x: ["-50%", "0%"] }}
                  transition={{ repeat: Infinity, ease: "linear", duration: 18 }}
                >
                  {[
                    "Redux", "REST API", "GraphQL", "Prisma", "Linux", "AWS", "Vercel", "Socket.io", "Jest", "Python", "Firebase",
                    "Redux", "REST API", "GraphQL", "Prisma", "Linux", "AWS", "Vercel", "Socket.io", "Jest", "Python", "Firebase"
                  ].map((tech, i) => (
                    <span key={i} className="bg-[#334155] text-white px-4 py-1.5 rounded-full text-sm font-medium shadow-sm cursor-default">
                      {tech}
                    </span>
                  ))}
                </motion.div>
              </div>
            </>
          ),
        },
      ].map((box, i) => (
        <motion.div
          key={i}
          className="group col-span-1 bg-white/30 border border-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-xl hover:scale-[1.02] transition-all"
          variants={gridItemAnim}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={i}
        >
          {box.content}
        </motion.div>
      ))}

      {/* Image */}
      <motion.div
        className="lg:col-span-2 row-span-2 rounded-2xl overflow-hidden shadow-xl hover:scale-[1.01] transition"
        variants={gridItemAnim}
        initial="hidden"
        whileInView="visible"
        custom={3}
      >
        <Image
  src="/img/laptop.png"
  alt="Laptop with Earth"
  width={800}
  height={400}
  className="w-full h-full object-cover"
/>
      </motion.div>

      {/* Blog Link */}
      <motion.a
        href="https://medium.com/@namansharma3194"
         target="_blank"
         rel="noopener noreferrer"
        className="col-span-1 rounded-2xl bg-gradient-to-r from-blue-100 to-purple-200 text-[#1e1e1e] font-semibold shadow-md flex items-center justify-center text-center p-6 hover:scale-[1.02] transition"
        variants={gridItemAnim}
        initial="hidden"
        whileInView="visible"
        custom={4}
      >
        Visit My Blogs
      </motion.a>

      {/* Work Card */}
     <motion.div
  className="col-span-1 row-span-1 bg-[#000000]/90 backdrop-blur-md border border-black rounded-2xl flex items-center justify-center shadow-xl hover:scale-[1.02] transition overflow-hidden"
  variants={gridItemAnim}
  initial="hidden"
  whileInView="visible"
  custom={5}
>
  <Image
    src="https://media.giphy.com/media/VTtANKl0beDFQRLDTh/giphy.gif"
    alt="Coding GIF"
    unoptimized
    width={400}
    height={300}
    className="w-auto h-auto max-w-full max-h-full object-contain"
  />
</motion.div>

      {/* Word of Day */}
      <motion.div
        className="col-span-1 bg-amber-800/20 border border-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:scale-[1.01] transition text-gray-800"
        variants={gridItemAnim}
        initial="hidden"
        whileInView="visible"
        custom={6}
      >
       <QuoteOfTheDay></QuoteOfTheDay>
      </motion.div>

      {/* Clock */}
      <motion.div
        className="col-span-1 bg-white/30 border border-white/10 backdrop-blur-xl rounded-2xl p-6 flex flex-col items-center justify-center shadow-md hover:scale-[1.02] transition"
        variants={gridItemAnim}
        initial="hidden"
        whileInView="visible"
        custom={7}
      >
        <p className="text-3xl sm:text-4xl font-extrabold text-gray-800 tracking-tighter drop-shadow-sm">{time}</p>
        <p className="text-xs font-bold text-gray-500 mt-2 tracking-widest uppercase text-center">{date}</p>
      </motion.div>

      {/* LinkedIn */}
     <motion.a
  href="https://www.linkedin.com/in/naman370/"
  target="_blank"
  rel="noopener noreferrer"
  className="relative overflow-hidden col-span-1 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-2xl flex items-center justify-center shadow-xl font-extrabold text-3xl hover:scale-[1.03] transition"
  variants={gridItemAnim}
  initial="hidden"
  whileInView="visible"
  custom={8}
>
  <span className="z-10 relative">LinkedIn</span>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="absolute -bottom-2 -left-2 w-24 h-24 opacity-20 text-white z-0"
  >
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
</motion.a>
     

      {/* Why Should You Hire Me */}
      <motion.div
        className="col-span-1 bg-white/30 border border-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-md hover:scale-[1.02] transition text-gray-800"
        variants={gridItemAnim}
        initial="hidden"
        whileInView="visible"
        custom={10}
      >
        <h2 className="text-xl font-bold mb-2">Why Should You Hire Me?</h2>
        <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
          <li>Strong foundation in full-stack development</li>
          <li>Effective communication & collaborative approach</li>
          <li>Consistent learner & fast adapter to new tech</li>
          <li>Focus on performance, accessibility, and UX</li>
        </ul>
      </motion.div>

      {/* Bottom Buttons */}
     <motion.div
  className="flex gap-4 col-span-1 sm:col-span-1 lg:col-span-2 h-full"
  variants={gridItemAnim}
  initial="hidden"
  whileInView="visible"
  custom={11}
>
  <a
    href="mailto:namansharma3194@gmail.com"
    className="group relative flex-1 flex items-center justify-center bg-white/30 border border-white/10 backdrop-blur-xl text-gray-800 rounded-2xl p-5 shadow-md font-semibold text-lg hover:scale-[1.03] hover:bg-white/40 transition overflow-hidden"
  >
    <span className="transition-all duration-300 group-hover:opacity-0 group-hover:scale-50">
      Email
    </span>
    <div className="absolute inset-0 flex items-center justify-center opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg"
        alt="Gmail"
        className="w-20 h-20"
      />
    </div>
  </a>

  {/* CV Flip Card */}
  <div className="group flex-1 relative" style={{ perspective: '1000px', minHeight: '80px' }}>
    <div
      className="relative w-full h-full transition-all duration-700 cursor-pointer"
      style={{ transformStyle: 'preserve-3d', transform: 'rotateY(0deg)' }}
      onMouseEnter={e => e.currentTarget.style.transform = 'rotateY(180deg)'}
      onMouseLeave={e => e.currentTarget.style.transform = 'rotateY(0deg)'}
    >
      {/* Front — Dark Professional */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center gap-1 rounded-2xl shadow-lg px-5 overflow-hidden"
        style={{ backfaceVisibility: 'hidden', background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)' }}
      >
        {/* subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'repeating-linear-gradient(0deg,#fff 0,#fff 1px,transparent 1px,transparent 20px),repeating-linear-gradient(90deg,#fff 0,#fff 1px,transparent 1px,transparent 20px)' }}></div>
        <div className="relative z-10 flex flex-col items-center gap-1">
          <div className="flex items-center gap-2 mb-0.5">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></div>
            <span className="text-green-400 text-[10px] font-semibold tracking-widest uppercase">Open to Work</span>
          </div>
          <p className="text-white font-bold text-base tracking-tight">Naman Sharma</p>
          <p className="text-slate-400 text-xs font-medium tracking-wide">Full Stack Developer</p>
        </div>

        {/* Flip hint */}
        <div className="absolute bottom-2.5 flex items-center gap-1 opacity-40">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 text-white animate-spin" style={{animationDuration:'3s'}} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          <span className="text-white text-[9px] font-medium tracking-widest uppercase">Hover to flip</span>
        </div>
      </div>

      {/* Back — Premium CTA */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-2xl shadow-lg px-5 overflow-hidden"
        style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)', background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a855f7 100%)' }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        <p className="text-white font-bold text-sm tracking-wide">My Resume</p>
        <div className="flex gap-2">
          <button
            onClick={() => setIsCVOpen(true)}
            className="text-xs bg-white text-purple-700 font-bold px-4 py-1.5 rounded-full hover:scale-105 transition shadow-md"
          >
            View
          </button>
          <a
            href="/Naman-Sharma--CV.pdf"
            download
            className="text-xs bg-white/20 hover:bg-white/30 text-white font-semibold px-4 py-1.5 rounded-full transition border border-white/30"
          >
            Download
          </a>
        </div>
      </div>
    </div>
  </div>
</motion.div>
    </div>

      {/* CV Modal - macOS Style */}
      <AnimatePresence>
        {isCVOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCVOpen(false)}
          >
            <motion.div
              className="relative w-full max-w-4xl h-[85vh] bg-[#1e1e1e] rounded-xl overflow-hidden shadow-2xl border border-gray-700 flex flex-col"
              initial={{ scale: 0.8, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.8, y: 50, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* macOS Window Header */}
              <div className="flex items-center px-4 py-3 bg-[#2d2d2d] border-b border-black/50 select-none">
                <div className="flex space-x-2">
                  <button 
                    onClick={() => setIsCVOpen(false)}
                    className="w-3.5 h-3.5 rounded-full bg-[#ff5f56] hover:bg-[#ff5f56]/80 flex items-center justify-center group"
                  >
                    <svg className="w-2 h-2 text-black/50 opacity-0 group-hover:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12"></path></svg>
                  </button>
                </div>
                <div className="flex-1 text-center text-xs font-medium text-gray-400 font-sans tracking-wide">
                  Naman-Sharma--CV.pdf
                </div>
                {/* Download Button */}
                <a 
                  href="/Naman-Sharma--CV.pdf" 
                  download 
                  className="text-gray-400 hover:text-white transition"
                  title="Download CV"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                </a>
              </div>
              
              {/* PDF Content */}
              <div className="flex-1 bg-white relative">
                <object
                  data="/Naman-Sharma--CV.pdf#toolbar=0&navpanes=0&scrollbar=0"
                  type="application/pdf"
                  className="w-full h-full"
                >
                  <div className="flex items-center justify-center h-full text-gray-500">
                    <p>Unable to display PDF file. <a href="/Naman-Sharma--CV.pdf" download className="text-blue-500 underline">Download</a> instead.</p>
                  </div>
                </object>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Grid;
