import React from "react";
import { HiDownload } from "react-icons/hi"; // Importing HiDownload Icon
import { FaGithubSquare } from "react-icons/fa"; // Importing FaGithubSquare Icon

export default function Resume() {
  return (
    <div className="px-2">
      {/* Title */}
      <h1 className="text-2xl font-bold mt-10">Resume</h1>
      <div className="bg-green-800 w-8 h-1 mt-5"></div>
      <div><p className="text-gray-700 mt-5">Checkout CV ang Github Link Below</p></div>

      {/* Buttons */}
      <div className="mt-10 flex gap-5">
        {/* Download CV Button */}
        <a
          className="group bg-green-100 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-green-800 shadow-sm dark:bg-white/10"
          href="/CV.pdf"
          download
        >
          Download CV
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        {/* GitHub Button */}
        <a
          className="bg-green-100 p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-green-800 shadow-sm dark:bg-white/10 dark:text-white/60"
          href="https://github.com/iqrasaleem-umt"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithubSquare />
        </a>
      </div>
    </div>
  );
}


