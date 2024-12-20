import React from 'react'

const skills = [
  { name: "HTML", percentage: 100 },
  { name: "CSS", percentage: 90 },
  { name: "TYPESCRIPT", percentage: 75 },
  { name: "TAILWIND CSS", percentage: 80 },
  { name: "GITHUB", percentage: 100 },
  { name: "WEB 3.0", percentage: 95 },
];

export default function Skills() {
  return (
    <>
      <div className="px-2 mt-10">
        <h1 className="font-bold text-xl sm:text-2xl md:text-3xl">Skills</h1>
        <div className="bg-green-800 w-8 h-1 mt-5"></div>
        <p className="text-gray-600 mt-5 sm:text-base md:text-lg">
          A highly skilled Frontend Developer with expertise in Next.js, React, and modern
          TypeScript, specializing in building user-interactive, responsive, and dynamic web
          applications. Proficient in leveraging tools like Tailwind CSS to craft clean,
          visually appealing user interfaces while adhering to the best practices of clean
          and maintainable code with Vercel deployment.
        </p>
      </div>

      <div className="bg-green-100 py-10 px-4 sm:px-6 md:px-8 mt-5">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 sm:text-2xl md:text-3xl">
          Skills
        </h2>
        <div className="space-y-6">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between mb-1">
                <span className="text-sm sm:text-base font-medium text-gray-700">
                  {skill.name}
                </span>
                <span className="text-sm sm:text-base font-medium text-gray-700">
                  {skill.percentage}%
                </span>
              </div>
              <div className="w-full bg-gray-200 h-2 rounded">
                <div
                  className="bg-green-800 h-full rounded"
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
