import React from 'react'
import Image from 'next/image'

export default function About() {
  return (
    <div className="px-2 text-gray-600">
      {/* About Title */}
      <h1 className='text-black mt-10 font-bold text-xl sm:text-2xl md:text-3xl'>About</h1>
      <div className='bg-green-800 w-8 h-1 mt-5'></div>

      <p className='mt-5 text-sm sm:text-base whitespace-normal break-words'>
        I am a Frontend developer and create the visual elements of websites, ensuring users have an interactive and engaging experience with web applications.
        Work with HTML, CSS, and modern Typescript to bring designs to life and ensure responsive layouts across all devices and screen sizes. Utilize modern frameworks and libraries like React and Next.js to build dynamic and efficient UIs.
      </p>

      {/* Content Flex */}
      <div className="mt-10 flex flex-col sm:flex-row gap-10">

        {/* Left Image Section */}
        <div className="w-full sm:w-1/3 h-[200px] sm:h-[300px] relative">
          <Image
            src="/portfoliogirl.jpg"
            layout="fill"
            objectFit="cover"
            alt="Portfolio Image"
          />
        </div>

        {/* Right Content Section */}
        <div className="flex-1 px-2 sm:px-10">
          <h1 className="font-bold text-xl sm:text-2xl text-black">Web Developer</h1>
          <div className='bg-green-800 w-15 h-1 mt-5'></div>
          <p className='mt-5 text-sm sm:text-base whitespace-normal break-words'>
            Hi, my name is Iqra. I am a passionate, results-driven Frontend Developer. I specialize in creating responsive, accessible, and intuitive user-friendly interfaces. I graduated with a BSc in Computer Science, Mathematics, and Statistics.
          </p>

          {/* Contact and Info */}
          <div className='flex flex-col sm:flex-row mt-10 gap-6'>
            <div className='font-bold text-black'>
              <p><span className="font-bold">Website1:</span> <span className="font-light">https://agriculture-rouge.vercel.app/</span></p>
              <p><span className="font-bold">Website2:</span> <span className="font-light">https://website-omega-fawn.vercel.app/</span></p>
              <p><span className="font-bold">City:</span> <span className="font-light">Lahore</span></p>
            </div>
            <div className='font-bold text-black'>
              <p><span className="font-bold">Degree:</span> <span className="font-light">Bsc</span></p>
              <p><span className="font-bold">Email:</span> <span className="font-light">fhsaleem8104@gmail.com</span></p>
              <p><span className="font-bold">Freelance:</span> <span className="font-light">Available</span></p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="mt-20 px-2 flex flex-wrap justify-evenly gap-6">
        {/* Stats: Projects */}
        <div className="flex items-center space-x-2">
          <Image src={"/project.png"} height={50} width={50} alt="image" className="w-12 h-12" />
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-black">232</h1>
            <p className="text-gray-600">Projects</p>
          </div>
        </div>

        {/* Stats: 24/7 */}
        <div className="flex items-center space-x-2">
          <Image src={"/person.png"} height={50} width={50} alt="image" className="w-12 h-12" />
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-black">232</h1>
            <p className="text-gray-600">24/7</p>
          </div>
        </div>
      </div>
    </div>
  )
}

