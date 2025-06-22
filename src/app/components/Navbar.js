'use client';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShow(false); // Hide on scroll down
      } else {
        setShow(true); // Show on scroll up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-6 left-1/2 transform -translate-x-1/2 transition-all duration-300 z-50 ${
        show ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
      }`}
    >
      <div className="px-10 py-3 rounded-full backdrop-blur-md bg-white/30 border border-white/30 shadow-xl">
        <ul className="flex gap-10 text-black font-semibold">
          {["Home", "About", "Projects", "Contact"].map((item, index) => (
            <li
              key={index}
              className="cursor-pointer transition-colors duration-200 hover:text-blue-500"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
