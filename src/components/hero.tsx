import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative w-full h-screen sm:h-[560px]">
      {/* Background Image */}
      <Image
        className="object-cover sm:object-contain"
        src="/portfoliogirl.jpg"
        alt="Portfolio Background"
        layout="fill"
        objectFit="cover"
      />
      
      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col items-center sm:items-start justify-center sm:justify-start px-6 sm:px-10 transform transition-transform duration-500 hover:scale-105 z-10 sm:mt-32 mt-[150px]">
        <h1 className="text-white text-3xl sm:text-4xl md:text-3xl lg:text-3xl font-bold">
          IQRA SALEEM
        </h1>
        <p className="text-white font-bold text-xl sm:text-2xl md:text-3xl lg:text-2xl">
          I am Frontend Developer
        </p>
      </div>
    </div>
  );
}









