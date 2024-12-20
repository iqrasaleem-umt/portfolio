import React from 'react';
import Image from 'next/image';

export default function Projects() {
  return (
    <div>
      <div className="mt-10 px-2">
        <h1 className="font-bold text-2xl sm:text-3xl">Projects</h1>
        <div className="bg-green-800 w-8 h-1 mt-5"></div>
        <div className="mt-8 p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 rounded-lg">
          {/* Image 1 */}
          <div className="relative w-full h-60">
            <Image
              src="/pic1.png"
              alt="photo"
              layout="fill" // Ensures the image fills the container
              objectFit="cover" // Ensures the image covers the container without distortion
              className="rounded-lg overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-110"
            />
          </div>

          {/* Image 2 */}
          <div className="relative w-full h-60">
            <Image
              src="/pic1.png"
              alt="photo"
              layout="fill"
              objectFit="cover"
              className="rounded-lg overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-110"
            />
          </div>

          {/* Image 3 */}
          <div className="relative w-full h-60">
            <Image
              src="/pic1.png"
              alt="photo"
              layout="fill"
              objectFit="cover"
              className="rounded-lg overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-110"
            />
          </div>

          {/* Image 4 */}
          <div className="relative w-full h-60">
            <Image
              src="/pic1.png"
              alt="photo"
              layout="fill"
              objectFit="cover"
              className="rounded-lg overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-110"
            />
          </div>

          {/* Image 5 */}
          <div className="relative w-full h-60">
            <Image
              src="/pic1.png"
              alt="photo"
              layout="fill"
              objectFit="cover"
              className="rounded-lg overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-110"
            />
          </div>

          {/* Image 6 */}
          <div className="relative w-full h-60">
            <Image
              src="/pic1.png"
              alt="photo"
              layout="fill"
              objectFit="cover"
              className="rounded-lg overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-110"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
