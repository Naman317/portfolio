const IntroSection = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-[#eae8e6]">
      {/* Lottie Background Animation */}
      <iframe
        className="absolute -top-40 left-0 z-0 h-screen w-full pointer-events-none"
        src="https://lottie.host/embed/c47bf96d-a432-4eb7-a46c-aa9737802a9c/s679d5D55T.json"
        title="background animation"
        allowFullScreen
      ></iframe>

      {/* Text Content */}
      <div className="relative z-20 px-12 pt-24">
        <h1 className="text-5xl font-semibold text-gray-800 leading-tight">
          Naman Sharma is a <span className="font-bold">full stack software engineer.</span>
        </h1>

        {/* Tech Stack Icons */}
        <div className="flex gap-6 mt-10 flex-wrap">
          {/* TypeScript */}
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
            alt="TypeScript"
            className="h-10 w-10"
          />

          {/* Next.js */}
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
            alt="Next.js"
            className="h-10 w-10 invert"
          />

          {/* React */}
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            alt="React"
            className="h-10 w-10"
          />

          {/* Node.js */}
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
            alt="Node.js"
            className="h-10 w-10"
          />

      

          {/* MongoDB */}
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
            alt="MongoDB"
            className="h-10 w-10"
          />

        
        </div>
      </div>

      {/* Yellow semi-circle (Sun) */}
      <div
        className="absolute bottom-0 right-36 z-10"
        style={{
          width: '500px',
          height: '350px',
          backgroundColor: '#f4b728',
          borderTopLeftRadius: '500px',
          borderTopRightRadius: '500px',
          clipPath: 'ellipse(100% 100% at 50% 100%)',
        }}
      />

      {/* Boat Image */}
      <img
        src="https://www.tim-stanton.dev/_next/image?url=%2Fboat.png&w=640&q=75"
        alt="boat"
        className="absolute bottom-24 right-48 z-30 drop-shadow-lg"
        style={{ width: '250px', height: '250px' }}
      />

      {/* Ocean Waves (layered sea effect) */}
      <div
        className="absolute -bottom-20 z-0 h-48 -rotate-3 bg-[#f4f1ec]"
        style={{ width: 'calc(100vw + 3rem)' }}
      />
      <div
        className="absolute -bottom-24 z-10 h-48 -rotate-3 bg-[#5f7d95] drop-shadow"
        style={{ width: 'calc(100vw + 3rem)' }}
      />
      <div
        className="absolute -bottom-12 -left-3 z-20 h-32 rotate-3 bg-[#0f4c47]"
        style={{ width: 'calc(100vw + 8rem)' }}
      />
    </div>
  );
};

export default IntroSection;
