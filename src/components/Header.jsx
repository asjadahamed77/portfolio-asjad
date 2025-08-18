import React, { useEffect, useState } from "react";
import { navLinks, words } from "../assets/assets";
import hero from "../assets/images/hero.jpeg";

const Header = () => {
  const [index, setIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);


  // Handle Scroll for blur effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 150);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        backgroundImage: "url('/images/black-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="h-screen px-4 sm:px-20 text-white"
    >
      {/* Top Bar */}
      <div
        className={`w-full flex items-center justify-between px-4 sm:px-20 py-4 fixed top-0 left-0 right-0 z-10 transition-all duration-500 ${
          isScrolled ? "backdrop-blur-[200px] z-20 bg-black" : ""
        }`}
      >
        <a href="#hero" className="text-2xl font-semibold">
          Asjad Ahd
        </a>

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

        <a
          href="#contact"
          className="relative inline-block px-6 py-2 rounded-md text-black bg-white border border-transparent overflow-hidden transition-colors duration-300 group"
        >
          <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
            Contact me
          </span>

          <span className="absolute inset-0 bg-black transform -skew-x-12 scale-0 origin-bottom-left transition-transform duration-500 group-hover:scale-150 z-0"></span>

          <span className="absolute inset-0 rounded-md border border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></span>
        </a>
      </div>

      {/* Spacer for fixed header */}
      <div id="hero" className="pt-[75px]"></div>

      {/* Hero Section */}
      <div className="flex flex-col xl:flex-row items-center justify-center gap-12 w-full h-[calc(100vh-75px)]">
        <div className="flex flex-col items-start w-full xl:w-1/2">
          <h1 className="text-2xl lg:text-4xl font-semibold">
            Hi, I’m Asjad, a{" "}
            <div className="overflow-hidden h-12 my-6">
              <div
                className="transition-transform duration-[450ms] ease-in-out"
                style={{
                  transform: `translateY(-${index * 3}rem)`,
                }}
              >
                {words.map((word, i) => (
                  <div
                    key={i}
                    className="flex items-center md:gap-3 gap-1 h-12"
                  >
                    <img
                      src={word.imgPath}
                      alt="icon"
                      className="w-12 h-12 md:p-2 p-1 bg-white rounded-full object-cover"
                    />
                    <span className="text-2xl lg:text-4xl">{word.text}</span>
                  </div>
                ))}
              </div>
            </div>{" "}
            based in Sri Lanka with a passion for code.
          </h1>

          <a
            href="#work"
            className="relative inline-block px-6 py-2 rounded-md text-black bg-white border border-transparent overflow-hidden transition-colors duration-300 group mt-8"
          >
            <span className="relative z-10 text-xl transition-colors duration-300 group-hover:text-white">
              SEE MY WORKS
            </span>

            <span className="absolute inset-0 bg-black transform -skew-x-12 scale-0 origin-bottom-left transition-transform duration-500 group-hover:scale-150 z-0"></span>

            <span className="absolute inset-0 rounded-md border border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></span>
          </a>
        </div>

        <div className="w-full xl:w-1/2 xl:p-8 p-4">
          <img
            src={hero}
            alt="Hero"
            className="rounded-xl shadow-black border-4 border-black shadow-[0px_20px_20px_0px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;