import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function SideBar() {
  return (
    <div>
      <div className="w-60 h-[550px] bg-black px-10 flex flex-col items-center justify-start border-r-8 border-gray-500">
        {/* Image with rounded-full */}
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-500 mt-6">
          <Image
            className="object-cover"
            src="/portfoliogirl.jpg"
            width={200}
            height={200}
            alt="image"
          />
        </div>
        <p className="text-white font-bold mt-6">Iqra Saleem</p>
        <p className="text-gray-500 hover:text-white font-bold mt-6 gap-6 text-center">
          Portfolio
        </p>
        <div className="flex flex-col mt-2 text-xl">
          {/* Links with images */}
          <div className="flex items-center gap-6 mt-4">
            <Image
              className="hover:grayscale"
              src="/home.png"
              width={24}
              height={24}
              alt="image"
            />
            <Link className="text-gray-500 hover:text-white" href={""}>
              Home
            </Link>
          </div>
          <div className="flex items-center gap-6 mt-4">
            <Image
              className="hover:grayscale"
              src="/personicon.png"
              width={24}
              height={24}
              alt="image"
            />
            <Link className="text-gray-500 hover:text-white" href={""}>
              About
            </Link>
          </div>
          <div className="flex items-center gap-6 mt-4">
            <Image
              className="hover:grayscale"
              src="/resume.png"
              width={24}
              height={24}
              alt="image"
            />
            <Link className="text-gray-500 hover:text-white" href={""}>
              Resume
            </Link>
          </div>
          <div className="flex items-center gap-6 mt-4">
            <Image
              className="hover:grayscale"
              src="/portfolio.png"
              width={24}
              height={24}
              alt="image"
            />
            <Link className="text-gray-500 hover:text-white" href={""}>
              Portfolio
            </Link>
          </div>

          <div className="flex items-center gap-6 mt-4">
            <Image
              className="hover:grayscale"
              src="/contact.png"
              width={24}
              height={24}
              alt="image"
            />
            <Link className="text-gray-500 hover:text-white" href={""}>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
