import Image from "next/image";

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
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
            alt="TypeScript"
            unoptimized
            width={40}
            height={40}
            className="h-10 w-10"
          />

          {/* Next.js */}
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
            alt="Next.js"
            unoptimized
            width={40}
            height={40}
            className="h-10 w-10 invert"
          />

          {/* React */}
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            alt="React"
            unoptimized
            width={40}
            height={40}
            className="h-10 w-10"
          />

          {/* Node.js */}
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
            alt="Node.js"
            unoptimized
            width={40}
            height={40}
            className="h-10 w-10"
          />

      

          {/* MongoDB */}
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
            alt="MongoDB"
            unoptimized
            width={40}
            height={40}
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
      <Image
        src="/img/boat.webp"
        alt="boat"
        width={250}
        height={250}
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
