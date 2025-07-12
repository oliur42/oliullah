"use client";
import Image from "next/image";
import React from "react";
import { IoMdDownload } from "react-icons/io";
import { FaGithub, FaLinkedinIn, FaWhatsapp, FaTelegram } from "react-icons/fa";
import Link from "next/link";

function Benner() {
  return (
    <div className="bg-gray-900 py-10">
      <div className="max-w-[1080px] mx-auto px-4">
        {/* Banner Content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Text Section */}
          <div className="flex-1">
            <p className="text-white">Software Developer</p>
            <h1 className="text-[30px] md:text-[35px] text-white font-bold">
              Hello I<span className="text-green-700">'</span>m
            </h1>
            <h1 className="text-[36px] md:text-[40px] font-bold text-green-600">
              MD OLIULLAH
            </h1>
            <p className="text-white text-sm md:text-base mt-2">
              I'm a passionate Full-Stack developer specializing in building
              dynamic, responsive, and user-friendly web applications. With
              expertise in React, Next.js, Tailwind CSS, Node.js, Express.js,
              MongoDB, and PostgreSQL, I create efficient and scalable solutions
              tailored to client needs. I thrive on transforming ideas into
              reality through clean, modern code, ensuring performance and
              functionality go hand-in-hand. Let&apos;s collaborate to bring
              your vision to life!
            </p>
          </div>

          {/* Image Section */}
          <div className="flex justify-center">
            <Image
              className="w-[250px] h-[250px] md:w-[300px] md:h-[300px] rounded-full border-4 border-dotted border-green-700 object-cover"
              src="https://res.cloudinary.com/dpcd3h94q/image/upload/v1752338742/Md_oliullah_ori_kn0gce.jpg"
              height={300}
              width={300}
              alt="logo"
            />
          </div>
        </div>

        {/* Buttons and Social Icons */}
        <div className="flex flex-col md:flex-row items-center gap-4 mt-8">
          {/* CV Button */}
          <button className="text-green-600 flex gap-1 items-center justify-center border border-green-300 px-4 py-2 font-bold rounded-[15px] hover:text-white hover:bg-green-600 transition">
            Download CV <IoMdDownload />
          </button>

          {/* Social Icons */}
          <ul className="flex gap-5 text-white text-[25px] mt-2 md:mt-0">
            <li>
              <Link href="#">
                <FaGithub className="hover:text-black" />
              </Link>
            </li>
            <li>
              <Link href="#">
                <FaLinkedinIn className="hover:text-blue-900" />
              </Link>
            </li>
            <li>
              <Link href="#">
                <FaWhatsapp className="hover:text-green-500" />
              </Link>
            </li>
            <li>
              <Link href="#">
                <FaTelegram className="hover:text-blue-700" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Benner;
