import HeroSection from "@/components/hero";

import About from "./views/about";
import Sidebar from "@/components/sidebar";




export default function Home() {
  return (
    <div>
       <div className="flex">
    {/* Sidebar */}
   
    <Sidebar />
    {/* Main Content */}
    <div className=" flex-1">
      <HeroSection />
    </div>
  </div>
    <About/>
    </div>
   
      
    
  );
}

