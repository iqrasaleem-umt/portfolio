import React from 'react'
import Image from 'next/image'

export default function About() {
  return (
    <div>
    <div className='px-2 text-gray-600'>
        <h1 className='text-black mt-10 font-bold text-2xl '>About</h1>
        <div className='bg-green-800 w-8 h-1 mt-5'></div>
        <p className='mt-5'> I am a Frontend developers and create the visual elements of websites, ensuring users have an interactive and engaging experience with web applications.
          Work with HTML, CSS, andmodern Typescript to bring designs to life and ensure responsive layouts across all devices and screen sizes. Utilize modern frameworks and libraries like React and Next.js to build dynamic and efficient UIs.</p>
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
    
    <p><span className="font-bold mt-2">Website1:</span> <span className="font-light">https://agriculture-rouge.vercel.app/</span></p>
    <p><span className="font-bold mt-2">Website2:</span> <span className="font-light">https://website-omega-fawn.vercel.app/</span></p>
    <p><span className="font-bold mt-2">City:</span> <span className="font-light">Lahore</span></p>
  </div>
  <div className='font-bold px-8 text-black'>
   
    <p><span className="font-bold mt-2">Degree:</span> <span className="font-light">Bsc</span></p>
    <p><span className="font-bold mt-2">Email:</span> <span className="font-light">fhsaleem8104@gmail.com</span></p>
    <p><span className="font-bold mt-2">Freelance:</span> <span className="font-light">Available</span></p>
  </div>
</div>

    
    </div>
    </div>
    </div>
    <div className='mt-20 px-2 flex gap-4'>
     
     
      <div className="flex space-x-8">
  {/* First Section */}
  <div className="flex space-x-8">
  {/* First Section */}
  <div className="flex items-center space-x-2">
    <Image src={"/project.png"} height={50} width={50} alt="image" className="w-12 h-12" />
    <div>
      <h1 className="text-2xl font-bold text-black">232</h1>
      <p className="text-gray-600">Projects  </p>
    </div>
  </div>

  {/* Second Section */}
  <div className="flex items-center space-x-2">
    <Image src={"/person.png"} height={50} width={50} alt="image" className="w-12 h-12" />
    <div>
      <h1 className="text-2xl font-bold text-black">232</h1>
      <p className="text-gray-600">24/7 </p>
    </div>
  </div>

  {/* Third Section */}
  
</div>
</div>
  </div>
</div>
  )
}
