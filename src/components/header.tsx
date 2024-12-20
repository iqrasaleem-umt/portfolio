import React from 'react'
import Image from 'next/image'

export default function Header() {
  return (
    // Add 'hidden lg:flex' to hide the header on mobile/tablet and show it only on laptops/desktops
    <div className="bg-green-800 w-full h-8 hidden lg:flex items-center justify-between px-4">
      {/* Left Section: IQRASALEEM MADE */}
      <div className="flex items-center space-x-2">
        <p className="text-white">IQRASALEEM</p>
        <p className="text-green-300">MADE</p>
      </div>

      {/* Center Section: Portfolio with Arrows */}
      <div className="flex items-center space-x-2">
        {/* Backward Arrow */}
        <Image
          src="/arrowback.png"
          height={15}
          width={15}
          alt="backward arrow"
          className="filter invert"
        />
        {/* Portfolio Text */}
        <p className="text-white text-center">Portfolio</p>
        {/* Forward Arrow */}
        <Image
          src="/arrowfor.png"
          height={15}
          width={15}
          alt="forward arrow"
          className="filter invert"
        />
      </div>
    </div>
  )
}
