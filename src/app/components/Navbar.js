// components/NavBar.js
import Link from "next/link";

const NavBar = () => {
  const navItems = ["Home", "About", "Projects", "Contact"];

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#050014]">
      <div className="bg-[#0b0c2a] px-8 py-3 rounded-2xl border border-[#1d1d35] shadow-md flex gap-8">
        {navItems.map((item) => (
          <Link href={`#${item.toLowerCase()}`} key={item}>
            <span className="relative text-white cursor-pointer transition duration-300 ease-in-out hover:text-[#a5b4fc]">
              <span className="z-10 relative">{item}</span>
              <span className="absolute inset-0 border border-transparent rounded-md hover:border-[#a5b4fc] transition-all duration-300"></span>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
