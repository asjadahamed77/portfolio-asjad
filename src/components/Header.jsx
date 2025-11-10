import React, { useEffect, useState } from "react";
import { words } from "../assets/assets";

const Header = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="h-screen px-4 sm:px-20 text-white">
  

      {/* Spacer for fixed navbar */}
      <div id="hero" className="pt-[75px]"></div>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center gap-12 w-full h-[calc(100vh-75px)]">
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
      </div>
    </header>
  );
};

export default Header;