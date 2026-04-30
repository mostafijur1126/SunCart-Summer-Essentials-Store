"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaHome, FaShoppingCart, FaSun } from "react-icons/fa";
import {
  GiSunglasses,
  GiBeachBall,
  GiWatermelon,
  GiIceCreamCone,
} from "react-icons/gi";

const NotFoundPage = () => {
  return (
    <div className="relative min-h-[80vh] overflow-hidden bg-gradient-to-br from-[#FFF9F0] via-[#E8F3EF] to-[#FFF0D3] flex items-center justify-center px-4 py-16 md:py-24">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            rotate: [0, 10, 0],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 left-10 text-6xl md:text-7xl opacity-20 text-[#FFB7A4]"
        >
          <GiWatermelon />
        </motion.div>

        <motion.div
          animate={{
            y: [0, 30, 0],
            x: [0, -20, 0],
            rotate: [0, -10, 0],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-10 text-6xl md:text-7xl opacity-20 text-[#FFB7A4]"
        >
          <GiIceCreamCone />
        </motion.div>

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 15, 0],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-20 text-5xl opacity-10 text-[#E8F3EF]"
        >
          <GiBeachBall />
        </motion.div>

        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/3 left-20 text-5xl opacity-15 text-[#FFB7A4]"
        >
          <FaSun />
        </motion.div>

        <div className="absolute top-0 -right-20 w-72 h-72 bg-[#FFB7A4] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 -left-20 w-96 h-96 bg-[#E8F3EF] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative max-w-2xl mx-auto text-center z-10"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <div className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-[#FFB7A4] via-[#FF9B82] to-[#FFB7A4] bg-clip-text text-transparent">
            404
          </div>
        </motion.div>

        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-6 flex justify-center"
        >
          <div className="bg-[#FFB7A4]/20 rounded-full p-4 inline-flex">
            <GiSunglasses className="text-5xl md:text-6xl text-[#FFB7A4]" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#2C3E3E] mb-4"
        >
          Oops! Page Not Found
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-[#2C3E3E]/70 text-base md:text-lg mb-8 max-w-md mx-auto"
        >
          The page youre looking for seems to have taken a summer vacation. Lets
          get you back to shopping!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#FFB7A4] text-[#2C3E3E] px-6 py-3 rounded-full font-semibold flex items-center justify-center gap-2 shadow-md hover:shadow-lg hover:bg-[#FF9B82] transition-all duration-300 w-full sm:w-auto"
            >
              <FaHome /> Back to Home
            </motion.button>
          </Link>

          <Link href="/products">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-[#FFB7A4] text-[#FFB7A4] px-6 py-3 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-[#FFB7A4] hover:text-[#2C3E3E] transition-all duration-300 w-full sm:w-auto"
            >
              <FaShoppingCart /> Browse Products
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;
