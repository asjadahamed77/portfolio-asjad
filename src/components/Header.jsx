import React, { useEffect, useState } from "react";
import { words } from "../assets/assets";

const Header = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="h-screen px-4 sm:px-20 text-white flex flex-col justify-center">
      {/* Spacer for fixed navbar */}
      <div id="hero" className="pt-[75px]" />

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center gap-10 w-full h-[calc(100vh-75px)]">
        <div className="flex flex-col items-start w-full lg:w-[60%]">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-snug">
            Hi, I’m{" "}
            <span className="text-blue-400 font-bold">Asjad Ahamed</span>, a{" "}
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
                    className="flex items-center gap-2 sm:gap-3 h-12"
                  >
                    <img
                      src={word.imgPath}
                      alt="icon"
                      className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full p-1.5 object-cover"
                    />
                    <span className="text-2xl sm:text-3xl lg:text-4xl">
                      {word.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            passionate about building real-world, scalable web experiences.
          </h1>

          <p className="text-gray-300 mt-6 text-base sm:text-lg leading-relaxed">
            I’m a Full-Stack Developer based in Sri Lanka, skilled in{" "}
            <span className="text-blue-400 font-medium">MERN</span> and{" "}
            <span className="text-blue-400 font-medium">Spring Boot</span>.
            I craft responsive, secure, and high-performance applications with
            clean code and cloud-ready architecture.
          </p>

          <a
            href="#work"
            className="relative inline-block px-6 py-2 rounded-md text-black bg-white border border-transparent overflow-hidden transition-colors duration-300 group mt-10"
          >
            <span className="relative z-10 text-lg sm:text-xl transition-colors duration-300 group-hover:text-white">
              SEE MY WORKS
            </span>
            <span className="absolute inset-0 bg-black transform -skew-x-12 scale-0 origin-bottom-left transition-transform duration-500 group-hover:scale-150 z-0"></span>
            <span className="absolute inset-0 rounded-md border border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;