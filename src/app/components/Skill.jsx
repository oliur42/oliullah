import Link from "next/link";
import React from "react";

function Skill() {
  const skills = [
    "HTML",
    "CSS",
    "Java Script",
    "Tailwind CSS",
    "React Js",
    "Node Js",
    "Express JS",
    "Next Js",
    "Ant",
    "Prisma",
    "Mongoose",
    "Postgrsql",
    "MongoDb",
    "Material UI",
    "Github",
    "AWS",
    "Schad UI",
    "Chakra UI",
  ];

  return (
    <div className="bg-gray-800 py-10 px-4">
      <div className="max-w-[1080px] mx-auto flex flex-col lg:flex-row gap-10">
        {/* Left Side – Navigation and Intro */}
        <div className="text-white w-full lg:w-[500px]">
          <h1 className="text-[32px] lg:text-[45px] font-bold">Why hire me?</h1>
          <p className="py-4 text-sm md:text-base">
            Under the hood, Next.js also abstracts and automatically configures
            tooling needed for React, like bundling, compiling, and more.
          </p>

          <div className="flex flex-col gap-3">
            {[
              { href: "/resume", label: "Experience" },
              { href: "/education", label: "Education" },
              { href: "/skill", label: "Skill" },
              { href: "/about", label: "About Me" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-600 rounded-[10px] flex justify-center items-center hover:bg-green-600 transition"
              >
                <Link href={item.href}>
                  <button className="w-full py-2 text-center">
                    {item.label}
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side – Skills */}
        <div className="w-full">
          <div className="border-b-2 border-dotted border-amber-50 mb-4">
            <h1 className="text-white text-[26px] lg:text-[40px] font-bold">
              I am expert in:
            </h1>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-green-600 rounded-[10px] p-2 text-center hover:bg-amber-600 transition"
              >
                <button className="text-white text-sm md:text-base">
                  {skill}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
