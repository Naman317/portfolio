import Image from "next/image";
import me from "./img/me.jpeg";

const AboutSection = () => {
  return (
    <section className="bg-[#0f4c47] text-white py-20 px-8 relative">
      <div className="max-w-5xl mx-auto space-y-12">

        {/* LCD SCREEN (UNCHANGED POSITION) */}
        <div className="relative">
          <img
            alt="lcd screen"
            loading="lazy"
            width={300}
            height={300}
            decoding="async"
            className="w-190 h-45 mb-4"
            src="https://www.tim-stanton.dev/_next/image?url=%2Fprecomputer-screen.png&w=1920&q=75"
          />

          <p className="font-robotoSlab font-bold text-5xl absolute top-[20%] left-[7%] text-lcd">
            Hello World<span className="ml-1 blink">▊</span>
          </p>
        </div>

        {/* GRID FIXED STRUCTURE ONLY */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* LEFT TEXT (UNCHANGED COLORS) */}
          <div className="text-[#7b8a69]">
            <h2 className="text-2xl font-semibold mb-6 underline  decoration-4 w-max">
              About Me
            </h2>

            <p className="text-lg leading-relaxed text-[#cbd5e1] mb-5">
  I am a Computer Science Engineering student at Lovely Professional University, with a strong foundation in
  full-stack web development and scalable system design.
</p>

<p className="text-lg leading-relaxed text-[#cbd5e1] mb-5">
  I specialize in building modern web applications using React, Node.js, Express, and Django, with hands-on
  experience in real-time systems, distributed architectures, and AI-integrated applications.
</p>

<p className="text-lg leading-relaxed text-[#cbd5e1] mb-5">
  I have completed Full Stack MERN + AI training at W3Elites and developed production-level projects including
  collaborative platforms, peer-to-peer systems, and task management applications.
</p>

<p className="text-lg leading-relaxed text-[#cbd5e1]">
  I am passionate about system design, backend engineering, and building impactful software solutions that solve
  real-world problems efficiently and at scale.
</p>
          </div>

          {/* RIGHT IMAGE FIXED INSIDE GRID */}
          <div className="flex justify-center">
            <div className="relative group">

              <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-emerald-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>

              <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                <Image
                  src={me}
                  alt="portrait"
                  className="w-72 md:w-80 h-auto object-cover transform group-hover:scale-105 transition duration-500 ease-out"
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;