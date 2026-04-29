"use client";
import { motion } from "framer-motion";
import {
  FaFire,
  FaShoppingCart,
  FaArrowRight,
  FaSun,
  FaUmbrellaBeach,
  FaPercent,
  FaTshirt,
  FaClock,
} from "react-icons/fa";
import {
  GiWatermelon,
  GiIceCreamCone,
  GiBeachBall,
  GiSunglasses,
} from "react-icons/gi";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-yellow-400 via-orange-400 to-red-500 min-h-[90vh] flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            rotate: [0, 10, 0],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 left-10 text-6xl md:text-7xl opacity-30"
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
          className="absolute bottom-20 right-10 text-6xl md:text-7xl opacity-30"
        >
          <GiIceCreamCone />
        </motion.div>

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 15, 0],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-20 text-5xl opacity-20"
        >
          <GiBeachBall />
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white space-y-6 md:space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold"
            >
              <FaFire className="text-yellow-300 animate-pulse" />
              <span>LIMITED TIME OFFER</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
              Summer Sale
              <br />
              <span className="inline-block mt-2 bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                50% OFF
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-base md:text-lg opacity-95 max-w-lg"
            >
              Get ready for the hottest summer deals! Up to 50% off on all
              summer essentials. Limited time offer. Dont miss out!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-3"
            >
              <div className="flex items-center gap-2 text-sm font-semibold">
                <FaClock className="animate-pulse" />
                <span>HURRY UP! OFFER ENDS IN:</span>
              </div>
              <div className="flex gap-3 md:gap-4">
                {[
                  { label: "Days", value: "12" },
                  { label: "Hours", value: "08" },
                  { label: "Mins", value: "45" },
                  { label: "Secs", value: "32" },
                ].map((item) => (
                  <div key={item.label} className="text-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl px-3 py-2 md:px-4 md:py-3 min-w-[60px] md:min-w-[70px]">
                      <div className="text-2xl md:text-3xl font-bold">
                        {item.value}
                      </div>
                      <div className="text-xs md:text-sm">{item.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-orange-600 px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Shop Now <FaArrowRight />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-white hover:text-orange-600 transition-all duration-300"
              >
                <FaShoppingCart /> View Collection
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-6 pt-6"
            >
              {[
                { icon: <FaTshirt />, text: "Premium Quality" },
                { icon: <FaPercent />, text: "Best Prices" },
                { icon: <FaUmbrellaBeach />, text: "Free Shipping" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm">
                  <div className="text-yellow-300">{item.icon}</div>
                  <span>{item.text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center items-center"
          >
            <div className="relative w-full max-w-md mx-auto">
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, 0],
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-orange-300 rounded-full blur-3xl opacity-30"
              />

              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-2xl mb-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <GiSunglasses className="text-3xl text-orange-500" />
                    <span className="font-bold text-gray-800">
                      Summer Shades
                    </span>
                  </div>
                  <span className="text-red-500 font-bold">-40%</span>
                </div>
                <div className="bg-gradient-to-r from-yellow-400 to-orange-400 h-32 rounded-xl flex items-center justify-center">
                  <FaSun className="text-6xl text-white" />
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <div>
                    <span className="text-gray-400 line-through text-sm">
                      $49.99
                    </span>
                    <span className="text-2xl font-bold text-gray-800 ml-2">
                      $29.99
                    </span>
                  </div>
                  <button className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-orange-600 transition">
                    Buy Now
                  </button>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
                className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-2xl"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <GiIceCreamCone className="text-3xl text-pink-500" />
                    <span className="font-bold text-gray-800">Cool Treats</span>
                  </div>
                  <div className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold animate-pulse">
                    HOT DEAL
                  </div>
                </div>
                <div className="bg-gradient-to-r from-pink-400 to-purple-400 h-32 rounded-xl flex items-center justify-center">
                  <GiWatermelon className="text-6xl text-white" />
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <div>
                    <span className="text-gray-400 line-through text-sm">
                      $34.99
                    </span>
                    <span className="text-2xl font-bold text-gray-800 ml-2">
                      $19.99
                    </span>
                  </div>
                  <button className="bg-pink-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-pink-600 transition">
                    Shop Now
                  </button>
                </div>
              </motion.div>

              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-6 -right-6 bg-red-500 text-white rounded-full w-20 h-20 flex flex-col items-center justify-center shadow-lg"
              >
                <span className="text-2xl font-bold">50%</span>
                <span className="text-xs">OFF</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="w-full"
          >
            <path
              fill="#ffffff"
              fillOpacity="0.1"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
