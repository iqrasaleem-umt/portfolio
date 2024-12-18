import HeroSection from "@/components/hero";

import About from "./views/about";
import Sidebar from "@/components/sidebar";
import Skills from "./views/skills";
import Resume from "./views/resume";
import Projects from "./views/projects";
import Contact from "./views/contact";




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
    <Skills/>
    <Resume/>
    <Projects/>
    <Contact/>
    </div>
   
      
    
  );
}

