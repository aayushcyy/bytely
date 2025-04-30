import Image from "next/image";
import Navbar from "./Component/Navbar";
import HeroSection from "./Component/HeroSection";
import HeroSection2 from "./Component/HeroSection2";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <Navbar />
      {/* Hero Section */}
      <HeroSection />
      <HeroSection2 />
    </div>
  );
}
