import HeroSection from "@/components/home/Banner";
import PopularProducts from "@/components/home/PopularProducts";
import SummerCareTips from "@/components/home/SummerCareTips";
import TopBrands from "@/components/home/TopBrands";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <HeroSection></HeroSection>
      <PopularProducts></PopularProducts>
      <SummerCareTips></SummerCareTips>
      <TopBrands></TopBrands>
    </div>
  );
}
