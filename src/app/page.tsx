import HeroSection from "@/components/hero";
import Sidebar from "@/components/sidebar";


export default function Home() {
  return (
    <div className="flex">
    {/* Sidebar */}
    <Sidebar />

    {/* Main Content */}
    <div className=" flex-1">
      <HeroSection />
    </div>
  </div>
      
    
  );
}

