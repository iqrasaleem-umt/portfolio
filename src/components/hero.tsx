import React from 'react'
import Image from "next/image";

export default function Hero() {
  return (
    <div>
         <div className="relative w-full h-[560px]">
        {/* Background Image */}
        <Image
          className="object-cover"
          src="/portfoliogirl.jpg"
          alt="Farming Background"
          layout="fill"
          objectFit="cover"
        />
       </div>
       <div className="absolute inset-0 flex flex-col items-center justify-center px-6  transform transition-transform duration-500 hover:scale-105 mt-48">
          <h1 className="text-white text-2xl md:text-4xl font-bold">
          IQRA SALEEM
          </h1>
          <p className="text-white font-bold text-2xl"> I am Frontend Developer</p>
          </div>
    </div>
    
  )
}
