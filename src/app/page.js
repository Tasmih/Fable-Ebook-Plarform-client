import EbookGenres from "@/components/home/EbookGenres";
import Hero from "@/components/home/Hero";
import PlatformStats from "@/components/home/PlatformStats";
import Testimonials from "@/components/home/Testimonials";
// import TopWriters from "@/components/home/TopWriters";
import WhyChooseFable from "@/components/home/WhyChooseFable";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f6f1ea]">
      <Hero />
      <EbookGenres/>
       {/* <FeaturedEbooks /> */}

      <WhyChooseFable />
      <PlatformStats />

      {/* <TopWriters /> */}

      <EbookGenres />

      <Testimonials />
     
    </main>
  );
}