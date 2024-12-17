import React from 'react'
import Image from 'next/image'

export default function About() {
  return (
    <div>
    <div className='px-2 text-gray-600'>
        <h1 className='text-black mt-10 font-bold text-2xl '>About</h1>
        <div className='bg-green-800 w-8 h-1 mt-5'></div>
        <p className='mt-5'>Frontend developers create the visual elements of websites, ensuring users have an interactive and engaging experience with web applications.
          Work with HTML, CSS, and JavaScript to bring designs to life and ensure responsive layouts across all devices and screen sizes. Utilize modern frameworks and libraries like React and Next.js to build dynamic and efficient UIs.</p>
    <div className='flex'>
    <div className='mt-10 w-96 h-70 relative'> 
        {/* Wrapper div with fixed size */}
        <Image
          src="/portfoliogirl.jpg"
          layout="fill" // This makes the image fill the container
          objectFit="cover" // Ensures the image covers the entire area without distorting
          alt="Portfolio Image"
        />
    </div>
    <div className='mt-10 px-10'>
    <h1 className="font-bold text-2xl text-black">Web Developer</h1>
    <div className='bg-green-800 w-15 h-1 mt-5'></div>
    <p className='mt-5'>Hi, my name is Iqra. I am a passionate, results-driven Frontend Developer. I specialize in creating responsive, accessible, and intuitive user-friendly interfaces. I graduated with a BSc in Computer Science, Mathematics, and Statistics.</p>
    <div className='flex mt-10'>
  <div className='font-bold text-black'>
    <p><span className="font-bold mt-2">Birthday:</span> <span className="font-light">1 May 1995</span></p>
    <p><span className="font-bold mt-2">Website:</span> <span className="font-light">www.example</span></p>
    <p><span className="font-bold mt-2">Phone:</span> <span className="font-light">+123 456 7890</span></p>
    <p><span className="font-bold mt-2">City:</span> <span className="font-light">New York, USA</span></p>
  </div>
  <div className='font-bold px-8 text-black'>
    <p><span className="font-bold mt-2">Age:</span> <span className="font-light">30</span></p>
    <p><span className="font-bold mt-2">Degree:</span> <span className="font-light">Master</span></p>
    <p><span className="font-bold mt-2">Email:</span> <span className="font-light">email@example.com</span></p>
    <p><span className="font-bold mt-2">Freelance:</span> <span className="font-light">Available</span></p>
  </div>
</div>

    
    </div>
    </div>
    </div>
    <div className='mt-20 px-2 flex gap-4'>
      <div className='flex'>
      <Image src={"/smile.png"} height={50 } width={50} alt='image'/>
      </div>
      <div>
      <h1 className='text-2xl font-bold text-black'>232</h1>
      <p className='text-gray-600'>Happy Clients  <br /> consequuntur quae</p>
      </div>
      <div className="flex space-x-8">
  {/* First Section */}
  <div className="flex space-x-8">
  {/* First Section */}
  <div className="flex items-center space-x-2">
    <Image src={"/project.png"} height={50} width={50} alt="image" className="w-12 h-12" />
    <div>
      <h1 className="text-2xl font-bold text-black">232</h1>
      <p className="text-gray-600">Happy Clients <br /> consequuntur quae</p>
    </div>
  </div>

  {/* Second Section */}
  <div className="flex items-center space-x-2">
    <Image src={"/person.png"} height={50} width={50} alt="image" className="w-12 h-12" />
    <div>
      <h1 className="text-2xl font-bold text-black">232</h1>
      <p className="text-gray-600">Happy Clients <br /> consequuntur quae</p>
    </div>
  </div>

  {/* Third Section */}
  <div className="flex items-center space-x-2">
    <Image src={"/support.png"} height={50} width={50} alt="image" className="w-12 h-12" />
    <div>
      <h1 className="text-2xl font-bold text-black">232</h1>
      <p className="text-gray-600">Happy Clients <br /> consequuntur quae</p>
    </div>
  </div>
</div>
</div>
  </div>
</div>
  )
}
