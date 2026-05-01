"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  GiAirBalloon,
  GiCooler,
  GiFootsteps,
  GiHealthNormal,
  GiSeaDragon,
  GiSnowflake2,
  GiSunCloud,
  GiSunglasses,
  GiWaterDrop,
  GiWaveSurfer,
  GiWindyStripes,
} from "react-icons/gi";

const BrandMarquee = () => {
  const brands = [
    { name: "SunShade", icon: <GiSunglasses /> },
    { name: "SunnyWear", icon: <GiSunCloud /> },
    { name: "ComfortStep", icon: <GiFootsteps /> },
    { name: "CoolFit", icon: <GiCooler /> },
    { name: "HydroMax", icon: <GiWaterDrop /> },
    { name: "SkinGuard", icon: <GiHealthNormal /> },
    { name: "AquaWear", icon: <GiWaveSurfer /> },
    { name: "BreezeMini", icon: <GiWindyStripes /> },
    { name: "ChillMate", icon: <GiSnowflake2 /> },
    { name: "OceanStyle", icon: <GiSeaDragon /> },
    { name: "SafeView", icon: <GiSunglasses /> },
    { name: "AirWear", icon: <GiAirBalloon /> },
  ];

  // Duplicate brands for seamless loop
  const duplicatedBrands = [...brands, ...brands, ...brands];

  return (
    <div className="relative w-full overflow-hidden bg-[#E8F3EF]/50 py-8 border-y border-[#E2DCD1]">
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#E8F3EF] to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#E8F3EF] to-transparent z-10"></div>
      <h1 className="text-center font-semibold py-5 text-3xl">Top Brands</h1>
      <div className="relative overflow-hidden">
        <motion.div
          animate={{
            x: [0, -50 + "%"],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
          className="flex gap-8 whitespace-nowrap"
        >
          {duplicatedBrands.map((brand, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-[#FFF9F0] px-6 py-3 rounded-full shadow-md border border-[#E2DCD1] hover:shadow-lg hover:border-[#FFB7A4] transition-all duration-300 group cursor-pointer"
            >
              <span className="text-[#FFB7A4] text-xl group-hover:text-[#FF9B82] transition-colors duration-300">
                {brand.icon}
              </span>
              <span className="text-[#2C3E3E] font-semibold text-base group-hover:text-[#FF9B82] transition-colors duration-300">
                {brand.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="relative overflow-hidden mt-4">
        <motion.div
          animate={{
            x: [-50 + "%", 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
          className="flex gap-8 whitespace-nowrap opacity-70"
        >
          {duplicatedBrands.map((brand, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-white/50 backdrop-blur-sm px-6 py-3 rounded-full shadow-sm border border-[#E2DCD1] group cursor-pointer"
            >
              <span className="text-[#FFB7A4] text-xl group-hover:text-[#FF9B82] transition-colors">
                {brand.icon}
              </span>
              <span className="text-[#2C3E3E]/70 font-medium text-base group-hover:text-[#FF9B82] transition-colors">
                {brand.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default BrandMarquee;
