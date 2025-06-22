"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";

const Approach = () => {
  return (
    <section className="w-full py-20 bg-[#f4f1ec]">
    <h1 className="text-center text-4xl font-bold mb-10">
      <span className="text-zinc-900">My </span>
      <span className="text-violet-400">Approach</span>
    



      </h1>
      <div className="my-16 flex flex-col lg:flex-row items-center justify-center w-full gap-6">
        <Card
          title="Planning & Strategy"
          icon={<PhaseButton order="Phase 1" />}
          des="We collaborate to map out your website’s goals, target users, and desired structure. I prioritize clarity, content flow, and communication from the start."
        >
          <CanvasRevealEffect
            animationSpeed={5.5}
            containerClassName="bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-3xl overflow-hidden"
            colors={[[147, 197, 253], [56, 189, 248]]}
          />
        </Card>

        <Card
          title="Development & Progress Update"
          icon={<PhaseButton order="Phase 2" />}
          des="As development begins, you’ll receive consistent updates with visuals, interactions, and functionality for feedback and alignment throughout."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-gradient-to-br from-[#3b0764] to-[#86198f] rounded-3xl overflow-hidden"
            colors={[[244, 114, 182], [192, 132, 252]]}
            dotSize={2}
          />
        </Card>

        <Card
          title="Finalization & Launch"
          icon={<PhaseButton order="Phase 3" />}
          des="After review and refinements, your site is prepped for production, tested across devices, and launched with optimized performance."
        >
          <CanvasRevealEffect
            animationSpeed={2.5}
            containerClassName="bg-gradient-to-br from-[#0ea5e9] to-[#2563eb] rounded-3xl overflow-hidden"
            colors={[[125, 211, 252], [59, 130, 246]]}
          />
        </Card>
      </div>
    </section>
  );
};

export default Approach;

// --------------------------------------------------
// Card Component
// --------------------------------------------------

const Card = ({
  title,
  icon,
  children,
  des,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  des: string;
}) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group/canvas-card relative border border-white/10 backdrop-blur-lg max-w-sm w-full mx-auto p-4 lg:h-[36rem] h-[30rem] overflow-hidden rounded-3xl"
      style={{
        background: "linear-gradient(135deg, rgba(8,8,20,0.8), rgba(25,25,40,0.7))",
      }}
    >
      {/* Border Icons */}
      <Icon className="absolute h-10 w-10 -top-3 -left-3 text-white opacity-10" />
      <Icon className="absolute h-10 w-10 -top-3 -right-3 text-white opacity-10" />
      <Icon className="absolute h-10 w-10 -bottom-3 -left-3 text-white opacity-10" />
      <Icon className="absolute h-10 w-10 -bottom-3 -right-3 text-white opacity-10" />

      {/* Background Canvas */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0 z-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Card Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
        <div className="group-hover/canvas-card:-translate-y-4 transition duration-200 mb-4">
          {icon}
        </div>
        <h2 className="text-white text-3xl font-bold opacity-0 group-hover/canvas-card:opacity-100 transition duration-300">
          {title}
        </h2>
        <p className="text-blue-100 text-sm mt-4 opacity-0 group-hover/canvas-card:opacity-100 transition duration-300">
          {des}
        </p>
      </div>
    </div>
  );
};

// --------------------------------------------------
// PhaseButton Component
// --------------------------------------------------

const PhaseButton = ({ order }: { order: string }) => {
  return (
    <button className="relative inline-flex overflow-hidden rounded-full p-[1px] shadow-xl">
      <span
        className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
        bg-[conic-gradient(from_90deg_at_50%_50%,#D8B4FE_0%,#7C3AED_50%,#D8B4FE_100%)]"
      />
      <span className="inline-flex items-center justify-center rounded-full bg-[#09090b] px-5 py-2 text-purple-400 font-semibold text-lg backdrop-blur-3xl">
        {order}
      </span>
    </button>
  );
};

// --------------------------------------------------
// Plus Icon Component
// --------------------------------------------------

export const Icon = ({ className, ...rest }: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className={className}
    {...rest}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
  </svg>
);
