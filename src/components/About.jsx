import React from "react";
import profile from "../assets/images/profile.jpeg";

const About = () => {
  return (
    <section id="about" className="px-4 sm:px-20 my-20">
      <div className="grid lg:grid-cols-2 lg:gap-20 gap-12">
        {/* Left: About Text */}
        <div className="flex-1 bg-zinc-900 relative overflow-hidden group lg:p-12 p-6 h-fit rounded-lg transition-all duration-500">
          {/* animated border with glow */}
          <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-white group-hover:shadow-[0_0_10px_2px_rgba(255,255,255,0.5)] transition-all duration-500 pointer-events-none z-10"></div>

          {/* content */}
          <article className="relative z-20">
            <h2 className="text-4xl font-bold mb-6 text-white">About Me</h2>
            <p className="mb-4 text-white">
              Hi, I'm Asjad Ahamed — a passionate and self-driven Software
              Engineer from Sri Lanka, currently pursuing my BSc (Hons) in
              Software Engineering at Sabaragamuwa University.
            </p>
            <p className="mb-4 text-white">
              Over the years, I've immersed myself in full-stack development,
              working with both the MERN stack and Spring Boot. I enjoy building
              clean, scalable, and user-focused apps.
            </p>
            <p className="mb-4 text-white">
              I'm skilled in React, Next.js, Tailwind CSS, MongoDB, MySQL, AWS,
              Git, and more. I love collaborative environments and always seek
              opportunities to learn and grow.
            </p>
            <p className="text-white">
              Outside coding, I explore UI/UX design, contribute to open source,
              and watch tech talks.
            </p>
          </article>
        </div>

        {/* Right: Image */}
        <div className="flex-1 max-w-[450px] lg:mt-[-100px] mx-auto flex justify-center">
          <img
            src={profile}
            alt="profile-asjad"
            className="w-full h-full rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default About;