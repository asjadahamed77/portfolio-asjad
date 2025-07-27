import React from "react";
import { GraduationCap, Calendar } from "lucide-react";

const Experience = () => {
  return (
    <section
      id="experience"
      className="px-4 sm:px-20 py-24 bg-zinc-950 text-white"
    >
      <div className="text-center">
        <p className="inline-flex items-center gap-2 font-semibold text-sm sm:text-base tracking-wide px-6 py-2.5 bg-zinc-800 rounded-full shadow-sm">
          <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />
          My Career Overview
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-6">
          Professional Work Experience
        </h2>
      </div>

      {/* Experience at SoftCox */}
      <div className="mt-16 border-l-4 border-zinc-700 pl-6 relative">
        <div className="absolute -left-2 top-1 w-4 h-4 bg-zinc-800 border-2 border-zinc-600 rounded-full"></div>
        <h3 className="text-2xl sm:text-3xl font-semibold text-zinc-100">
          Full Stack Developer <span className="text-zinc-400">– SoftCox</span>
        </h3>
        <p className="flex items-center gap-2 text-zinc-400 mt-2 text-sm sm:text-base">
          <Calendar className="w-4 h-4" />
          November 2024 – Present
        </p>
        <ul className="mt-6 space-y-3 list-disc list-inside text-zinc-300 text-sm sm:text-base leading-relaxed">
          <li>
            Developed and deployed a full-stack real-time Church Management
            System with client and admin portals using{" "}
            <span className="font-medium text-white">MERN Stack</span>,{" "}
            <span className="font-medium text-white">Redux</span>,{" "}
            <span className="font-medium text-white">Tailwind CSS</span>, and{" "}
            <span className="font-medium text-white">ShadCN UI</span>.
          </li>
          <li>
            Implemented secure{" "}
            <span className="font-medium text-white">dual-role admin site</span>
            , enabling centralized access control for data and user management.
          </li>
          <li>
            Integrated <span className="font-medium text-white">AWS S3</span>{" "}
            for scalable media and file storage across the platform.
          </li>
          <li>
            Built the frontend of a standalone{" "}
            <span className="font-medium text-white">
              Inventory Management System
            </span>{" "}
            using <span className="font-medium text-white">React</span>,{" "}
            <span className="font-medium text-white">Redux</span>, and{" "}
            <span className="font-medium text-white">Tailwind CSS</span>.
          </li>
          <li>
            Delivered features in an{" "}
            <span className="font-medium text-white">
              Agile team environment
            </span>
            , consistently meeting sprint deadlines with{" "}
            <span className="font-medium text-white">
              production-ready code
            </span>
            .
          </li>
        </ul>
      </div>
      {/* UAB Experience */}
      <div className="mt-16 border-l-4 border-zinc-700 pl-6 relative">
        <div className="absolute -left-2 top-1 w-4 h-4 bg-zinc-800 border-2 border-zinc-600 rounded-full"></div>
        <h3 className="text-2xl sm:text-3xl font-semibold text-zinc-100">
          Vice President & Chief Editor{" "}
          <span className="text-zinc-400">
            – UAB (Undergraduates Association of Beruwala)
          </span>
        </h3>
        <p className="flex items-center gap-2 text-zinc-400 mt-2 text-sm sm:text-base">
          <Calendar className="w-4 h-4" />
          Vice President: 2024 – 2025 | Chief Editor: 2023 – 2024
        </p>
        <ul className="mt-6 space-y-3 list-disc list-inside text-zinc-300 text-sm sm:text-base leading-relaxed">
          <li>
            Led and coordinated regional undergraduate initiatives and community
            programs under the UAB banner.
          </li>
          <li>
            Oversaw and guided multiple student-led events, workshops, and
            social impact projects.
          </li>
          <li>
            As Chief Editor, managed content creation, editing, and publication
            for official UAB newsletters and digital media.
          </li>
          <li>
            Strengthened collaboration between university bodies and local
            organizations through effective communication and leadership.
          </li>
        </ul>
      </div>
      <div id="education" className="my-20 bg-zinc-950 text-white">
  <div className="text-center">
    <p className="inline-flex items-center gap-2 font-semibold text-sm sm:text-base tracking-wide px-6 py-2.5 bg-zinc-800 rounded-full shadow-sm">
      <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />
      My Education
    </p>
    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-6">
      Academic Background
    </h2>
  </div>

  <div className="mt-16 border-l-4 border-zinc-700 pl-6 relative">
    <div className="absolute -left-2 top-1 w-4 h-4 bg-zinc-800 border-2 border-zinc-600 rounded-full"></div>
    <h3 className="text-2xl sm:text-3xl font-semibold text-zinc-100">
      BSc (Hons) in Software Engineering
    </h3>
    <p className="text-zinc-400 mt-1 text-sm sm:text-base">
      Sabaragamuwa University of Sri Lanka
    </p>
    <p className="flex items-center gap-2 text-zinc-400 mt-2 text-sm sm:text-base">
      <Calendar className="w-4 h-4" />
      2022 – Present
    </p>
    <p className="mt-4 text-zinc-300 text-sm sm:text-base leading-relaxed">
      Currently pursuing an undergraduate degree focused on software engineering principles, full-stack web development, system architecture, and cloud technologies. Involved in university-level tech projects and leadership activities.
    </p>
  </div>
   {/* A/Ls */}
   <div className="mt-12 border-l-4 border-zinc-700 pl-6 relative">
    <div className="absolute -left-2 top-1 w-4 h-4 bg-zinc-800 border-2 border-zinc-600 rounded-full"></div>
    <h3 className="text-2xl sm:text-3xl font-semibold text-zinc-100">
      GCE Advanced Level – Physical Science Stream
    </h3>
    <p className="text-zinc-400 mt-1 text-sm sm:text-base">
      Zahira College, Colombo
    </p>
    <p className="flex items-center gap-2 text-zinc-400 mt-2 text-sm sm:text-base">
      <Calendar className="w-4 h-4" />
      2020 (A/Ls)
    </p>
    <p className="mt-4 text-zinc-300 text-sm sm:text-base leading-relaxed">
      Passed the GCE A/L Examination with results: Chemistry – A, Combined Mathematics – B, Physics – C.  
      <br />
      Achieved a Z-Score of <span className="font-semibold text-white">1.4744</span>.
    </p>
  </div>
</div>
    </section>
  );
};

export default Experience;
