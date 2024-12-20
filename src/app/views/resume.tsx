import React from "react";
import { HiDownload } from "react-icons/hi"; // Importing HiDownload Icon
import { FaGithubSquare } from "react-icons/fa"; // Importing FaGithubSquare Icon
import { SiVercel } from "react-icons/si"; // Importing Vercel Icon

export default function Resume() {
  return (
    <div className="px-2 overflow-hidden"> {/* Ensuring content stays within screen bounds */}
      {/* Title */}
      <h1 className="text-2xl sm:text-3xl font-bold mt-10">Resume</h1>
      <div className="bg-green-800 w-8 h-1 mt-5"></div>
      <div>
        <p className="text-gray-700 mt-5 sm:text-base md:text-lg">
          Checkout CV, GitHub, and Vercel link below:
        </p>
      </div>

      {/* Buttons */}
      <div className="mt-10 flex flex-col sm:flex-row gap-6 sm:gap-8">
        {/* Download CV Button */}
        <a
          className="group bg-green-100 px-3 py-2 flex items-center gap-2 sm:gap-3 rounded-full text-sm sm:text-base outline-none focus:scale-105 hover:scale-105 active:scale-100 transition cursor-pointer border border-green-800 shadow-sm dark:bg-white/10"
          href="/CV.pdf"
          download
        >
          Download CV
          <HiDownload className="text-lg sm:text-xl opacity-60 group-hover:translate-y-1 transition" />
        </a>

        {/* GitHub Button */}
        <a
          className="bg-green-100 px-3 py-2 flex items-center gap-2 sm:gap-3 text-[1.2rem] sm:text-[1.35rem] rounded-full text-gray-700 focus:scale-105 hover:scale-105 active:scale-100 transition cursor-pointer border border-green-800 shadow-sm dark:bg-white/10 dark:text-white/60"
          href="https://github.com/iqrasaleem-umt"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithubSquare />
        </a>

        {/* Vercel Button */}
        <a
          className="bg-green-100 px-3 py-2 flex items-center gap-2 sm:gap-3 rounded-full text-sm sm:text-base text-gray-700 outline-none focus:scale-105 hover:scale-105 active:scale-100 transition cursor-pointer border border-green-800 shadow-sm dark:bg-white/10 dark:text-white/60"
          href="https://vercel.com/iqrasaleems-projects"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vercel Projects
          <SiVercel className="text-lg sm:text-xl" />
        </a>
      </div>
    </div>
  );
}

