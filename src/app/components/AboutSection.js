const AboutSection = () => {
  return (
    <section className="bg-[#0f4c47] text-white py-20 px-8 relative">
      <div className="max-w-5xl mx-auto space-y-12">

        {/* LCD screen with Hello World */}
        <div className="relative">
          <img
            alt="lcd screen"
            loading="lazy"
            width={300}
            height={300}
            decoding="async"
            className="w-190 h-45 mb-4"
            src="https://www.tim-stanton.dev/_next/image?url=%2Fprecomputer-screen.png&w=1920&q=75"
            style={{ color: "transparent" }}
          />
          <p className="font-robotoSlab font-bold text-5xl absolute top-[20%] left-[7%] text-lcd">
            Hello World<span className="ml-1 blink">▊</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="text-[#7b8a69]">
            <h2 className="text-lg mb-6">I'm Naman.</h2>
            <p className="text-lg leading-relaxed mb-4">
              I wrote my first line of code in BASIC on a vTech PreComputer 2000 that I got for my 8th birthday.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              I'm a full-stack software engineer specializing in TypeScript, Node.js, React, and Next.js.
            </p>
            <p className="text-lg leading-relaxed">
              I'm currently learning NestJS and focusing on building scalable backend systems.
            </p>
          </div>

          {/* Right: Portrait */}
          <div className="flex justify-center">
            <img
              alt="portrait"
              loading="lazy"
              width={400}
              height={400}
              decoding="async"
              className="h-auto w-72 opacity-90"
              src="https://www.tim-stanton.dev/_next/image?url=%2Fportrait.png&w=828&q=75"
              style={{ color: "transparent", userSelect: "auto" }}
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
