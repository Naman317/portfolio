"use client";

import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = React.useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = React.useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      setErrorMessage("Please fill in all fields.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      // Using Web3Forms free public endpoint
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "YOUR_ACCESS_KEY_HERE", // Fallback gracefully if not set
          subject: `Portfolio Contact from ${formData.name}`,
          from_name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        // If no access key is configured, fallback to native mailto
        const mailtoUrl = `mailto:namansharma3194@gmail.com?subject=Portfolio%20Contact%20from%20${encodeURIComponent(
          formData.name
        )}&body=${encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        )}`;
        window.location.href = mailtoUrl;
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      }
    } catch {
      // Fallback to mailto
      const mailtoUrl = `mailto:namansharma3194@gmail.com?subject=Portfolio%20Contact%20from%20${encodeURIComponent(
        formData.name
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      window.location.href = mailtoUrl;
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <section className="w-full pt-20 pb-32 md:pb-44 bg-[#0f0f0f] text-white relative overflow-hidden">
      <h1 className="text-center text-4xl font-bold mb-4">
        Get <span className="text-purple-400">in Touch</span>
      </h1>
      <p className="text-center text-gray-400 mb-10 max-w-xl mx-auto px-4 text-sm sm:text-base">
        Feel free to reach out for collaborations, questions, or just to say hi!
      </p>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-6 text-center mb-10">
        <ContactCard
          icon={<FaEnvelope className="text-purple-400 text-3xl mb-2" />}
          title="Email"
          subtitle="namansharma3194@gmail.com"
          link="mailto:namansharma3194@gmail.com"
        />
        <ContactCard
          icon={<FaPhone className="text-purple-400 text-3xl mb-2" />}
          title="Phone"
          subtitle="+91 8780942460"
          link="tel:+918780942460"
        />
        <ContactCard
          icon={<FaLinkedin className="text-purple-400 text-3xl mb-2" />}
          title="LinkedIn"
          subtitle="/in/naman370"
          link="https://www.linkedin.com/in/naman370/"
        />
        <ContactCard
          icon={<FaGithub className="text-purple-400 text-3xl mb-2" />}
          title="GitHub"
          subtitle="@Naman317"
          link="https://github.com/Naman317"
        />
      </div>

      {/* Message form + illustration */}
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center relative z-30 mb-6">
        {/* Form Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#1a1a1a] p-6 sm:p-7 rounded-2xl shadow-2xl border border-white/10 w-full"
        >
          <h2 className="text-xl font-semibold mb-4 text-white">Drop me a message</h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="bg-[#101010] text-white p-3 rounded-lg border border-gray-700/80 focus:border-purple-500 outline-none text-sm transition"
              required
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="bg-[#101010] text-white p-3 rounded-lg border border-gray-700/80 focus:border-purple-500 outline-none text-sm transition"
              required
            />

            <textarea
              rows={3}
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="bg-[#101010] text-white p-3 rounded-lg border border-gray-700/80 focus:border-purple-500 outline-none resize-none text-sm transition"
              required
            />

            {status === "error" && (
              <p className="text-xs text-rose-400 font-medium">{errorMessage}</p>
            )}

            {status === "success" && (
              <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium text-center">
                ✨ Message received! Thanks for reaching out.
              </div>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 hover:opacity-90 active:scale-[0.99] transition-all duration-200 text-white font-medium py-2.5 px-6 rounded-full text-sm shadow-md cursor-pointer disabled:opacity-70 mt-1"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>
          </form>
        </motion.div>

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
            src="/img/boat.webp"
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
  subtitle,
  link,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  link: string;
}) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-[#1e1e2f] hover:bg-[#252538] hover:shadow-purple-500/20 hover:border-purple-500/30 transition-all duration-300 p-5 rounded-2xl border border-white/10 flex flex-col items-center justify-center group"
  >
    <div className="transform group-hover:scale-110 transition duration-300">
      {icon}
    </div>
    <h3 className="font-semibold text-lg text-white mt-1">{title}</h3>
    {subtitle && (
      <p className="text-xs text-gray-400 mt-1 font-mono group-hover:text-purple-300 transition truncate max-w-full">
        {subtitle}
      </p>
    )}
  </a>
);

export default Contact;
