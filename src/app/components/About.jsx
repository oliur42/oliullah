import Link from "next/link";
import React from "react";

function About() {
  return (
    <div className="bg-gray-800 pb-20 px-4">
      <div className="max-w-[1080px] mx-auto flex flex-col lg:flex-row gap-10 py-10">
        {/* Left Side: Why Hire Me */}
        <div className="text-white w-full lg:w-[500px]">
          <h1 className="text-[32px] lg:text-[45px] font-bold">Why hire me?</h1>
          <p className="py-4 text-sm md:text-base">
            Under the hood, Next.js also abstracts and automatically configures
            tooling needed for React, like bundling, compiling, and more.
          </p>
          <div className="flex flex-col gap-3">
            {[
              { label: "Experience", href: "/resume" },
              { label: "Education", href: "/education" },
              { label: "Skill", href: "/skill" },
              { label: "About Me", href: "/about" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-600 rounded-[10px] flex justify-center items-center hover:bg-green-600 transition"
              >
                <Link href={item.href}>
                  <button className="mx-2 py-2 w-full text-center">
                    {item.label}
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: About Me Info */}
        <div className="w-full">
          <div className="border-b-2 border-dotted border-amber-50 mb-6">
            <h1 className="text-amber-600 text-[28px] lg:text-[38px] font-bold">
              About Me
            </h1>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/2">
              <ul className="text-white flex flex-col gap-4 text-sm">
                <li>
                  <span className="text-amber-600 font-bold">Name:</span> MD
                  OLIULLAH
                </li>
                <li>
                  <span className="text-amber-600 font-bold">Experience:</span>{" "}
                  2+ years
                </li>
                <li>
                  <span className="text-amber-600 font-bold">Nationality:</span>{" "}
                  Bangladeshi
                </li>
                <li>
                  <span className="text-amber-600 font-bold">
                    Present Address:
                  </span>{" "}
                  House:11, road:09, sector:06, uttara, Dhaka, Bangladesh
                </li>
              </ul>
            </div>

            <div className="w-full md:w-1/2">
              <ul className="text-white flex flex-col gap-4 text-sm">
                <li>
                  <span className="text-amber-600 font-bold">Email:</span>{" "}
                  mdoliullah165311@gmail.com
                </li>
                <li>
                  <span className="text-amber-600 font-bold">Phone:</span>{" "}
                  +8801929072083, +8801558984420
                </li>
                <li>
                  <span className="text-amber-600 font-bold">Language:</span>{" "}
                  English, Bangla
                </li>
                <li>
                  <span className="text-amber-600 font-bold">
                    Permanent Address:
                  </span>{" "}
                  218, Barenda, Kahimpur, Gazipur, Dhaka, Bangladesh
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
