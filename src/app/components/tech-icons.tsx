const TechIcons = () => {
  return (
    <div className="flex gap-8 items-center justify-center bg-[#f4f1ec] p-6 flex-wrap">
      {/* TypeScript */}
      <svg viewBox="0 0 256 256" className="w-12 h-12 text-gray-800" fill="currentColor">
        <path d="M0 0h256v256H0z" fill="#3178C6" />
        <path fill="#fff" d="M104.6 138.5v61.3H85.3v-61.3H56.7v-17.5h76.6v17.5h-28.7z..." />
      </svg>

      {/* Next.js */}
      <svg viewBox="0 0 256 256" className="w-12 h-12 text-gray-800" fill="currentColor">
        <circle cx="128" cy="128" r="128" fill="#000" />
        <path d="M98.18 143.43L78.65 111.9V143.43H64V93.89h15.3l20.12 31.15..." fill="#fff" />
      </svg>

      {/* React */}
      <svg viewBox="0 0 256 256" className="w-12 h-12 text-gray-800" fill="currentColor">
        <g fill="none">
          <circle cx="128" cy="128" r="28" fill="currentColor" />
          <g stroke="currentColor" strokeWidth="16">
            <ellipse rx="90" ry="30" cx="128" cy="128" />
            <ellipse rx="90" ry="30" cx="128" cy="128" transform="rotate(60 128 128)" />
            <ellipse rx="90" ry="30" cx="128" cy="128" transform="rotate(120 128 128)" />
          </g>
        </g>
      </svg>

      {/* Node.js */}
      <svg viewBox="0 0 256 272" className="w-12 h-12 text-gray-800" fill="currentColor">
        <path d="M128.3 0L10.7 73.8v124.4L128.3 272l117.6-73.8V73.8z..." />
      </svg>

      {/* Express.js */}
      <svg viewBox="0 0 128 128" className="w-12 h-12 text-gray-800" fill="currentColor">
        <path d="M40.9 72.7H28.5c1.3 7.1 5.7 10.6 13.3 10.3 5.3-.2 9.4-2.2 12.3-6.5l5.7 5.3c-4.6 6.3-10.7 9.5-18.4 9.5-12.8 0-20.9-8.3-21.3-21.2C20 57.1 28 48.7 39.8 48.7c11.7 0 19.5 8.5 19.1 21.7-.1.5-.1 1.2-.2 2.3zm-12.3-16c-5.8 0-9.6 3.6-10.2 9.2h19.8c-.5-5.8-3.9-9.2-9.6-9.2zM95 88.4c-4.9 0-8.3-2.2-11-5.8-2.7 3.5-6.1 5.6-10.5 5.8-6.2 0-10.5-4.2-10.5-10.7 0-6.3 4.3-10.4 10.5-10.4 4.3.1 7.7 2.1 10.2 5.6 2.5-3.5 6.1-5.5 10.4-5.6 6.2 0 10.4 4.2 10.4 10.6-.1 6.4-4.3 10.5-10.5 10.5zm-21.5-10.6c0 2.9 1.6 4.8 4.1 4.8 2.5 0 4.1-2 4.1-4.9 0-2.8-1.7-4.8-4.1-4.8-2.5 0-4.1 1.9-4.1 4.9zm15.7 0c0 2.9 1.6 4.8 4.1 4.8 2.5 0 4.1-2 4.1-4.9 0-2.8-1.7-4.8-4.1-4.8-2.4 0-4.1 1.9-4.1 4.9z" />
      </svg>

      {/* MongoDB */}
      <svg viewBox="0 0 256 512" className="w-12 h-12 text-gray-800" fill="currentColor">
        <path d="M127.6 0c4.3 54.3-8.3 101.5-25.7 146.6C79 209.1 100.8 271.6 127.6 321.4c26.6-49.4 47.3-112.2 25.6-174.6C135.6 101.4 123.3 54.4 127.6 0zm2.5 504.6c-6.1-4.3-11.5-10.4-16.7-18.3-3.7-5.7-7.2-11.6-10.2-17.6-.9-1.8-.7-3.2 1.5-3.7 4.2-1 8.3-2.2 12.4-3.5 1.2-.4 2.7.5 2.9 1.6 1.4 5.6 3.3 10.8 5.6 15.9 1.8 3.7 4 7.3 6.6 10.7 1.1 1.4 2.2 2.8 3.5 4.1.5.6.6 1.3.5 2.1-.6 2.3-2.3 2.8-4.1 1.6z" />
      </svg>
    </div>
  );
};

export default TechIcons;
