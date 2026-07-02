"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
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
                I'm very flexible with time zone communications
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
              <div className="flex flex-wrap gap-3 mt-4">
                {["ReactJS", "NextJS", "Express", "PostgreSQL", "TypeScript", "Node.js"].map(
                  (tech, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.1 }}
                      className="bg-[#334155] text-white px-4 py-1 rounded-full text-sm font-medium hover:bg-[#475569] transition"
                    >
                      {tech}
                    </motion.span>
                  )
                )}
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
          src="https://www.avinashsuthar.in/b1.svg"
          alt="Laptop with Earth"
          width={800}
          height={400}
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Blog Link */}
      <motion.a
        href="/blog"
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
  <img
    src="https://media.giphy.com/media/VTtANKl0beDFQRLDTh/giphy.gif"
    alt="Coding GIF"
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
        className="col-span-1 bg-white/30 border border-white/10 backdrop-blur-xl rounded-2xl p-6 text-center shadow-lg text-gray-800 hover:scale-[1.01] transition"
        variants={gridItemAnim}
        initial="hidden"
        whileInView="visible"
        custom={7}
      >
        <p className="text-lg font-semibold">{date}</p>
        <p className="text-3xl font-bold mt-1 text-green-600">{time}</p>
      </motion.div>

      {/* LinkedIn */}
     <motion.a
  href="https://linkedin.com/in/your-profile"
  target="_blank"
  rel="noopener noreferrer"
  className="col-span-1 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-2xl flex items-center justify-center shadow-xl font-extrabold text-3xl hover:scale-[1.03] transition"
  variants={gridItemAnim}
  initial="hidden"
  whileInView="visible"
  custom={8}
>
  LinkedIn
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
    href="mailto:your@email.com"
    className="flex-1 flex items-center justify-center bg-white/30 border border-white/10 backdrop-blur-xl text-gray-800 rounded-2xl p-5 shadow-md font-semibold text-lg hover:scale-[1.03] hover:bg-white/40 transition"
  >
    Email
  </a>

  <a
    href="/cv.pdf"
    download
    className="flex-1 flex items-center justify-center bg-white/30 border border-white/10 backdrop-blur-xl text-gray-800 rounded-2xl p-5 shadow-md font-semibold text-lg hover:scale-[1.03] hover:bg-white/40 transition"
  >
    CV
  </a>
</motion.div>
    </div>
  );
};

export default Grid;
