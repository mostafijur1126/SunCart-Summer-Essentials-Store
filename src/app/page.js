import HeroSection from "@/components/home/Banner";
import PopularProducts from "@/components/home/PopularProducts";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <HeroSection></HeroSection>
      <PopularProducts></PopularProducts>
    </div>
  );
}
