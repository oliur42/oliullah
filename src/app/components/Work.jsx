import Image from "next/image";
import React from "react";

function Work() {
  return (
    <div className="bg-gray-900 py-10 px-4">
      <div className="max-w-[1080px] mx-auto">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-white text-[22px] sm:text-[24px] md:text-[28px]">
            2+ Years Experience
          </h1>
          <p className="text-white mt-6 text-[24px] border-b-2 inline-block border-green-800 font-bold">
            Work
          </p>
        </div>

        {/* Grid of Works */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 py-10">
          {Array.from({ length: 12 }).map((_, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-md hover:scale-105 transition"
            >
              <Image
                className="w-full h-[200px] object-cover"
                src="https://res.cloudinary.com/dpcd3h94q/image/upload/v1752295512/1st_ostad_pic_helufj.png"
                width={350}
                height={200}
                alt={`work-${index}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Work;
