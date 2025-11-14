import React, { useEffect, useState } from "react";
import { navLinks } from "../assets/assets";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 150);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full flex items-center justify-between px-4 sm:px-20 py-6 fixed top-0 left-0 right-0 z-50 bg-black transition-all duration-500 ${
        isScrolled ? "backdrop-blur-[200px] bg-black" : ""
      }`}
    >
      {/* Logo */}
      <a href="#hero" className="text-2xl font-semibold text-white">
        Asjad Ahd
      </a>

      {/* Nav Links */}
      <ul className="hidden lg:flex items-center gap-12">
        {navLinks.map(({ name, link }) => (
          <li key={name} className="relative group">
            <a href={link} className="text-xl text-white">
              {name}
            </a>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </li>
        ))}
      </ul>

      {/* Contact Button */}
      <a
        href="#contact"
        className="relative inline-block sm:px-6 px-4 py-2 rounded-md text-black bg-white border border-transparent overflow-hidden transition-colors duration-300 group"
      >
        <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
          Contact me
        </span>

        <span className="absolute inset-0 bg-black transform -skew-x-12 scale-0 origin-bottom-left transition-transform duration-500 group-hover:scale-150 z-0"></span>

        <span className="absolute inset-0 rounded-md border border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></span>
      </a>
    </nav>
  );
};

export default Navbar;