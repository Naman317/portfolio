"use client";

import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="w-full py-20 bg-[#0f0f0f] text-white relative overflow-hidden">
      <h1 className="text-center text-4xl font-bold mb-6">
        Get <span className="text-purple-400">in Touch</span>
      </h1>
      <p className="text-center text-gray-400 mb-12 max-w-xl mx-auto">
        Feel free to reach out for collaborations, questions, or just to say hi!
      </p>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-6 text-center mb-16">
        <ContactCard
          icon={<FaEnvelope className="text-purple-400 text-3xl mb-2" />}
          title="Email"
          link="mailto:namansharma3194@gmail.com"
        />
        <ContactCard
          icon={<FaPhone className="text-purple-400 text-3xl mb-2" />}
          title="Phone"
          link="tel:+918780942460"
        />
        <ContactCard
          icon={<FaLinkedin className="text-purple-400 text-3xl mb-2" />}
          title="LinkedIn"
          link="https://www.linkedin.com/in/naman370/"
        />
        <ContactCard
          icon={<FaGithub className="text-purple-400 text-3xl mb-2" />}
          title="GitHub"
          link="https://github.com/Naman317"
        />
      </div>

      {/* Message form + illustration */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-20">
        {/* Form Section */}
        <div className="bg-[#1a1a1a] p-8 rounded-2xl shadow-md border border-white/10 w-full">
          <h2 className="text-xl font-semibold mb-4">Drop me a message</h2>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-[#101010] text-white p-3 rounded-md border border-gray-700 outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="bg-[#101010] text-white p-3 rounded-md border border-gray-700 outline-none"
            />
            <textarea
              rows={4}
              placeholder="Your Message"
              className="bg-[#101010] text-white p-3 rounded-md border border-gray-700 outline-none resize-none"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 hover:opacity-90 transition-all duration-200 text-white font-medium py-2 px-6 rounded-full"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Illustration Section */}
        <div className="relative w-full h-[300px] md:h-[400px] flex justify-center items-end">
          {/* Moon */}
          <div
            className="absolute bottom-0 left-60 z-10"
            style={{
              width: "380px",
              height: "210px",
              backgroundColor: "#fefefe",
              borderTopLeftRadius: "500px",
              borderTopRightRadius: "500px",
              clipPath: "ellipse(100% 100% at 50% 100%)",
              filter: "blur(0.5px)",
            }}
          />

          {/* Boat */}
          <motion.img
            src="https://www.tim-stanton.dev/_next/image?url=%2Fboat.png&w=640&q=75"
            alt="boat"
            className="absolute bottom-1 right-28 z-30 drop-shadow-xl"
            style={{ width: "200px", height: "200px" }}
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          />

       {/* Back Wave */}
<motion.div
  className="absolute -bottom-10 z-0 h-22 -rotate-2 rounded-t-full shadow-inner"
  style={{
    width: 'calc(100vw + 32rem)',
    backgroundColor: '#0a1e2d',
    borderTopLeftRadius: '50% 100%',
    borderTopRightRadius: '50% 100%',
  }}
  
/>

{/* Middle Wave */}
<motion.div
  className="absolute -bottom-25 z-10 h-30 -rotate-1 rounded-t-full"
  
  style={{
    width: 'calc(100vw + 56rem)',
    backgroundColor: '#12394d',
    borderTopLeftRadius: '50% 100%',
    borderTopRightRadius: '50% 100%',
    
  }}
  animate={{ y: [0, -5, 0] }}
  transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
/>

{/* Front Wave */}
<motion.div
  className="absolute -bottom-24 left-40 z-10 h-30 rotate-0 rounded-t-full shadow-lg"
  style={{
    width: 'calc(90vw + 98rem)',
    backgroundColor: '#1f4e69',
    borderTopLeftRadius: '50% 100%',
    borderTopRightRadius: '50% 100%',
  }}
  animate={{ y: [0, -5, 0] }}
  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
/>

          
        </div>
      </div>
    </section>
  );
};

const ContactCard = ({
  icon,
  title,
  link,
}: {
  icon: React.ReactNode;
  title: string;
  link: string;
}) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-[#1e1e2f] hover:shadow-purple-400/30 transition-shadow duration-300 p-6 rounded-xl border border-white/10 flex flex-col items-center justify-center"
  >
    {icon}
    <h3 className="font-semibold text-lg">{title}</h3>
  </a>
);

export default Contact;
