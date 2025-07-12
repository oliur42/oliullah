import Link from "next/link";
import React from "react";

function Resume() {
  return (
    <div className="bg-gray-900 ">
      <div className="w-[1080px] mx-auto flex gap-10 py-5 ">
        <div className="text-white w-[500px]">
          <h1 className=" text-[45px] font-bold">Why hire me?</h1>
          <p className="py-5">
            Under the hood, Next.js also abstracts and automatically configures
            tooling needed for React, like bundling, compiling, and more.
          </p>
          <div className="flex flex-col gap-3">
            <div className="bg-gray-600 rounded-[10px] flex justify-center items-center hover:bg-green-600   ">
              <Link href="/resume">
                <button className="mx-2 p-1  ">Experience</button>
              </Link>
            </div>
            <div className="bg-gray-600 rounded-[10px] flex justify-center items-center hover:bg-green-600   ">
              <Link href="/education">
                <button className="mx-2 p-1  ">Education</button>
              </Link>
            </div>
            <div className="bg-gray-600 rounded-[10px] flex justify-center items-center hover:bg-green-600   ">
              <Link href="/skill">
                <button className="mx-2 p-1  ">Skill</button>
              </Link>
            </div>
            <div className="bg-gray-600 rounded-[10px] flex justify-center items-center hover:bg-green-600   ">
              <Link href="/about">
                <button className="mx-2 p-1  ">About Me</button>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div>
            <h1 className="text-white text-[40px] ">My Experiences</h1>
            <p className="text-white py-3">
              Under the hood, Next.js also abstracts and automatically
              configures tooling needed for React, like bundling, compiling, and
              more.
            </p>
          </div>
          <div className="grid grid-cols-2 py-6 gap-10 ">
            <div className="bg-gray-600 py-6 font-bold rounded-[10px]">
              <h1 className="mx-3 text-white">2023-2025</h1>
              <p className="text-green-500 py-2 mx-3">
                <span className="text-amber-500">Duration:</span>01
                september/till now
              </p>
              <h1 className="text-white text-[22px] mx-3">Web Developer </h1>
              <p className="text-green-500 py-1 mx-3">
                <span>Stack:</span>MERN
              </p>
              <p className="text-white mx-3">
                <span className="text-[25px] text-green-500">.</span> Zara Zaman
                Technology Ltd.
              </p>
            </div>
            <div className="bg-gray-600 py-6 font-bold rounded-[10px]">
              <h1 className="mx-3 text-white">2023-2024</h1>
              <p className="text-green-500 py-2 mx-3">
                <span className="text-amber-500">Duration:</span>01 August/30
                April
              </p>
              <h1 className="text-white text-[22px] mx-3">
                Full Stack Developer{" "}
              </h1>
              <p className="text-green-500 py-1 mx-3">
                <span>Stack:</span>MERN
              </p>
              <p className="text-white mx-3">
                <span className="text-[25px] text-green-500">.</span>{" "}
                Orbgnix
              </p>
            </div>
            <div className="bg-gray-600 py-6 font-bold rounded-[10px]">
              <h1 className="mx-3 text-white">2023</h1>
              <p className="text-green-500 py-2 mx-3">
                <span className="text-amber-500">Duration:</span>15 jun /30
                August
              </p>
              <h1 className="text-white text-[22px] mx-3">
                Frontend Developer{" "}
              </h1>
              <p className="text-green-500 py-1 mx-3">
                <span>Stack:</span>MERN
              </p>
              <p className="text-white mx-3">
                <span className="text-[25px] text-green-500">.</span> BookingBee
              </p>
            </div>
            <div className="bg-gray-600 py-6 font-bold rounded-[10px]">
              <h1 className="mx-3 text-white">2024-2025</h1>
              <p className="text-green-500 py-2 mx-3">
                <span className="text-amber-500">Duration:</span>01 october /30
                May
              </p>
              <h1 className="text-white text-[22px] mx-3">
                Frontend Developer{" "}
              </h1>
              <p className="text-green-500 py-1 mx-3">
                <span>Stack:</span>MERN
              </p>
              <p className="text-white mx-3">
                <span className="text-[25px] text-green-500">.</span>Tiqha
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
