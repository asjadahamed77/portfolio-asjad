import React, { useEffect, useRef, useState } from "react";
import { counterItems } from "../assets/assets";

const AnimatedCounter = () => {
  const containerRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const numberRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          startCounting();
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [hasAnimated]);

  const startCounting = () => {
    counterItems.forEach((item, index) => {
      const el = numberRefs.current[index];
      if (!el) return;

      const duration = 2000; // 2 seconds
      const start = performance.now();

      const animate = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const currentVal = Math.floor(progress * item.value);
        el.textContent = `${currentVal}${item.suffix}`;

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    });
  };

  return (
    <div
      ref={containerRef}
      className="xl:mt-0 my-32 px-4 sm:px-20"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7">
        {counterItems.map((item, index) => (
          <div
            key={index}
            className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center items-center text-center"
          >
            <div
              ref={(el) => (numberRefs.current[index] = el)}
              className="text-5xl font-bold mb-2 text-white"
            >
              0{item.suffix}
            </div>
            <div className="text-lg text-white">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;