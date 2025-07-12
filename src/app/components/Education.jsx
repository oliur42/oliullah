import Link from "next/link";
import React from "react";

function Education() {
  return (
    <div className="bg-gray-900 py-6 px-4">
      <div className="max-w-[1080px] mx-auto flex flex-col lg:flex-row gap-10">
        {/* Left Section - Why Hire Me */}
        <div className="text-white w-full lg:w-[500px]">
          <h1 className="text-[32px] lg:text-[45px] font-bold">Why hire me?</h1>
          <p className="py-4 text-sm md:text-base">
            Under the hood, Next.js also abstracts and automatically configures
            tooling needed for React, like bundling, compiling, and more.
          </p>
          <div className="flex flex-col gap-3">
            {[
              { label: "Experience", link: "/resume" },
              { label: "Education", link: "/education" },
              { label: "Skill", link: "/skill" },
              { label: "About Me", link: "/about" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-600 rounded-[10px] flex justify-center items-center hover:bg-green-600 transition"
              >
                <Link href={item.link}>
                  <button className="mx-2 p-2 w-full text-center">
                    {item.label}
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section - Education Info */}
        <div className="w-full">
          <h1 className="text-white text-[30px] lg:text-[40px]">
            My Educations
          </h1>
          <p className="text-white py-3 text-sm md:text-base">
            Under the hood, Next.js also abstracts and automatically configures
            tooling needed for React, like bundling, compiling, and more.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-6">
            {[
              {
                title: "2023-Bsc Engineering",
                subject: "Computer Science & Engineering",
                cgpa: "CGPA: 3.83 out of 4",
                institute: "Manarat International University",
              },
              {
                title: "2017-Diploma Engineering",
                subject: "Electronics Engineering",
                cgpa: "CGPA: 3.13 out of 4",
                institute: "Dhaka Polytechnic Institute",
              },
              {
                title: "2012-Secondary School Certificate",
                subject: "Science",
                cgpa: "CGPA: 4.50 out of 5",
                institute: "Hatimara High School",
              },
            ].map((edu, index) => (
              <div
                key={index}
                className="bg-gray-600 flex flex-col justify-center items-center py-4 px-2 gap-2 rounded-[10px] text-center"
              >
                <h1 className="text-amber-600 text-[18px]">{edu.title}</h1>
                <h2 className="text-white text-[16px]">{edu.subject}</h2>
                <p className="text-white">{edu.cgpa}</p>
                <p className="text-green-400">{edu.institute}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
