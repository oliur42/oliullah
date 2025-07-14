import Link from "next/link";
import React from "react";

function Resume() {
  return (
    <div className="bg-gray-900 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-10 py-10">
        {/* Left Column */}
        <div className="text-white w-full lg:w-1/2">
          <h1 className="text-[32px] md:text-[40px] lg:text-[45px] font-bold">
            Why hire me?
          </h1>
          <p className="py-5 text-gray-300">
            Under the hood, Next.js also abstracts and automatically configures
            tooling needed for React, like bundling, compiling, and more.
          </p>
          <div className="flex flex-col gap-3">
            {[
              { label: "Experience", href: "/resume" },
              { label: "Education", href: "/education" },
              { label: "Skill", href: "/skill" },
              { label: "About Me", href: "/about" },
            ].map((item) => (
              <div
                key={item.href}
                className="bg-gray-600 rounded-[10px] flex justify-center items-center hover:bg-green-600 transition-all"
              >
                <Link href={item.href}>
                  <button className="w-full text-white text-center py-2 px-4">
                    {item.label}
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-white text-[28px] md:text-[34px] lg:text-[40px] font-semibold">
            My Experiences
          </h1>
          <p className="text-white py-3 text-gray-300">
            Under the hood, Next.js also abstracts and automatically configures
            tooling needed for React, like bundling, compiling, and more.
          </p>

          {/* Experience Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {[
              {
                year: "2023-2025",
                duration: "01 September / till now",
                role: "Web Developer",
                stack: "MERN",
                company: "Zara Zaman Technology Ltd.",
              },
              {
                year: "2023-2024",
                duration: "01 August / 30 April",
                role: "Full Stack Developer",
                stack: "MERN",
                company: "Orbgnix",
              },
              {
                year: "2023",
                duration: "15 June / 30 August",
                role: "Frontend Developer",
                stack: "MERN",
                company: "BookingBee",
              },
              {
                year: "2024-2025",
                duration: "01 October / 30 May",
                role: "Frontend Developer",
                stack: "MERN",
                company: "Tiqha",
              },
            ].map((exp, index) => (
              <div
                key={index}
                className="bg-gray-600 p-4 rounded-[10px] font-bold"
              >
                <h1 className="text-white">{exp.year}</h1>
                <p className="text-green-500 py-2">
                  <span className="text-amber-500">Duration:</span>{" "}
                  {exp.duration}
                </p>
                <h1 className="text-white text-[20px]">{exp.role}</h1>
                <p className="text-green-500 py-1">
                  <span>Stack:</span> {exp.stack}
                </p>
                <p className="text-white">
                  <span className="text-[25px] text-green-500">.</span>{" "}
                  {exp.company}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
