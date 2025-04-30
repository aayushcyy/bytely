import Image from "next/image";
import Navbar from "./Component/Navbar";
import HeroSection from "./Component/HeroSection";
import HeroSection2 from "./Component/HeroSection2";
import Section3 from "./Component/Section3";
import FeedbackPage from "./Component/FeedbackPage";
import Section5 from "./Component/Section5";
import Footer from "./Component/Footer";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <Navbar />
      {/* Hero Section */}
      <HeroSection />
      <HeroSection2 />
      <Section3 />
      <FeedbackPage />
      <Section5 />
      <Footer />
    </div>
  );
}
