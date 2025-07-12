'use client'
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-gray-950 sticky top-0 left-0 z-20">
      <div className="w-full max-w-[1080px] mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="http://localhost:3000/">
            <p className="text-[22px] font-bold text-white hover:text-green-800 cursor-pointer">
              MD OLIULLAH{" "}
            </p>
          </Link>
          <span className="text-[22px] font-bold text-green-600">.</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-white">
          <li className="border-b-2 border-b-black hover:text-green-600 hover:border-b-green-600">
            <Link href="http://localhost:3000/">Home</Link>
          </li>
          <li className="border-b-2 border-b-black hover:text-green-600 hover:border-b-green-600">
            <Link href="/serv">Service</Link>
          </li>
          <li className="border-b-2 border-b-black hover:text-green-600 hover:border-b-green-600">
            <Link href="/resume">Resume</Link>
          </li>
          <li className="border-b-2 border-b-black hover:text-green-600 hover:border-b-green-600">
            <Link href="/work">Work</Link>
          </li>
          <li className="border-b-2 border-b-black hover:text-green-600 hover:border-b-green-600">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden text-white text-2xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-900 text-white px-6 pb-4">
          <ul className="flex flex-col gap-4">
            <li>
              <Link
                href="http://localhost:3000/"
                onClick={() => setMenuOpen(false)}
                className="block py-2 border-b border-gray-700 hover:text-green-500"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/serv"
                onClick={() => setMenuOpen(false)}
                className="block py-2 border-b border-gray-700 hover:text-green-500"
              >
                Service
              </Link>
            </li>
            <li>
              <Link
                href="/resume"
                onClick={() => setMenuOpen(false)}
                className="block py-2 border-b border-gray-700 hover:text-green-500"
              >
                Resume
              </Link>
            </li>
            <li>
              <Link
                href="/work"
                onClick={() => setMenuOpen(false)}
                className="block py-2 border-b border-gray-700 hover:text-green-500"
              >
                Work
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="block py-2 border-b border-gray-700 hover:text-green-500"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Header;
