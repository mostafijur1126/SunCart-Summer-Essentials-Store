"use client";
import { motion } from "framer-motion";
import {
  FaTint,
  FaSun,
  FaLeaf,
  FaHeartbeat,
  FaShieldAlt,
  FaSmile,
  FaAppleAlt,
  FaBicycle,
  FaCloudSun,
  FaRegClock,
  FaCheckCircle,
} from "react-icons/fa";
import { GiWaterDrop, GiSunglasses, GiStrawberry } from "react-icons/gi";

const SummerCareTips = () => {
  const tips = [
    {
      icon: <FaTint className="text-3xl" />,
      title: "Stay Hydrated",
      description:
        "Drink at least 8-10 glasses of water daily to keep your body cool and skin glowing.",
      gradient: "from-[#FFB7A4] to-[#FF9B82]",
      tip: "Carry a reusable water bottle",
    },
    {
      icon: <FaSun className="text-3xl" />,
      title: "Sun Protection",
      description:
        "Apply SPF 30+ sunscreen 15 minutes before sun exposure. Reapply every 2 hours.",
      gradient: "from-[#FFD4B8] to-[#FFB7A4]",
      tip: "Don't forget your ears and neck!",
    },
    {
      icon: <FaLeaf className="text-3xl" />,
      title: "Lightweight Clothing",
      description:
        "Wear light-colored, breathable fabrics like cotton and linen to stay cool.",
      gradient: "from-[#E8F3EF] to-[#D4E8E0]",
      tip: "Avoid dark colors that absorb heat",
    },
    {
      icon: <GiStrawberry className="text-3xl" />,
      title: "Eat Summer Fruits",
      description:
        "Include water-rich fruits like watermelon, cucumber, and oranges in your diet.",
      gradient: "from-[#FFF0D3] to-[#FFE4B5]",
      tip: "Fresh fruits = natural hydration",
    },
  ];

  const quickTips = [
    { icon: <FaRegClock />, text: "Avoid sun between 10 AM - 4 PM" },
    { icon: <FaShieldAlt />, text: "Wear sunglasses & wide hat" },
    { icon: <FaHeartbeat />, text: "Take cool showers twice a day" },
    { icon: <FaAppleAlt />, text: "Eat light, frequent meals" },
    { icon: <FaSmile />, text: "Use aloe vera for sunburns" },
    { icon: <FaBicycle />, text: "Exercise during morning/evening" },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#FFF9F0] via-[#E8F3EF] to-[#FFF0D3] py-16 md:py-24">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, 20, 0],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 right-10 text-6xl opacity-10 text-[#FFB7A4]"
        >
          <FaCloudSun />
        </motion.div>
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 10, 0],
          }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute bottom-20 left-10 text-7xl opacity-10 text-[#FF9B82]"
        >
          <GiWaterDrop />
        </motion.div>

        <div className="absolute top-0 -left-20 w-72 h-72 bg-[#FFB7A4] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 -right-20 w-96 h-96 bg-[#E8F3EF] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#FFB7A4]/20 text-[#FF9B82] px-4 py-2 rounded-full text-sm font-semibold mb-4 backdrop-blur-sm">
            <GiSunglasses />
            <span>Summer Wellness Guide</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C3E3E] mb-4">
            Summer Care Tips
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#FFB7A4] to-[#FF9B82] mx-auto rounded-full"></div>
          <p className="text-[#2C3E3E]/70 mt-4 max-w-2xl mx-auto">
            Essential tips to keep you cool, hydrated, and healthy all summer
            long
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {tips.map((tip, index) => (
            <motion.div
              key={index}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-[#FFF9F0] rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 h-full border border-[#E2DCD1]">
                <div
                  className={`bg-gradient-to-r ${tip.gradient} p-6 text-[#2C3E3E] relative overflow-hidden`}
                >
                  <div className="absolute -right-6 -top-6 w-24 h-24 bg-white/30 rounded-full"></div>
                  <div className="relative z-10">
                    <div className="mb-3">{tip.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{tip.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-[#2C3E3E]/70 mb-4 leading-relaxed">
                    {tip.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-[#FF9B82]">
                    <FaCheckCircle />
                    <span className="font-medium">{tip.tip}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div className="bg-gradient-to-r from-[#FFB7A4] to-[#FF9B82] rounded-3xl p-8 md:p-10 text-[#2C3E3E] relative overflow-hidden shadow-xl">
          <div className="relative z-10">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                Quick Summer Tips
              </h3>
              <p className="text-[#2C3E3E]/80">
                Follow these simple tips for a healthy summer
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {quickTips.map((tip, index) => (
                <motion.div
                  key={index}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex items-center gap-3 bg-white/30 backdrop-blur-sm rounded-xl p-3 hover:bg-white/50 transition-all duration-300"
                >
                  <div className="text-[#2C3E3E] text-xl">{tip.icon}</div>
                  <span className="text-sm md:text-base font-medium text-[#2C3E3E]">
                    {tip.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 bg-[#FFF9F0] rounded-2xl shadow-md p-6 md:p-8 border border-[#E2DCD1]"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="bg-[#E8F3EF] rounded-full p-4">
                <GiWaterDrop className="text-4xl text-[#FFB7A4]" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#2C3E3E] mb-1">
                  Daily Hydration Tracker
                </h4>
                <p className="text-[#2C3E3E]/70">
                  Keep track of your water intake
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#FF9B82]">8+</div>
                <div className="text-sm text-[#2C3E3E]/60">Glasses/Day</div>
              </div>
              <div className="w-px h-10 bg-[#E2DCD1]"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#FF9B82]">2L</div>
                <div className="text-sm text-[#2C3E3E]/60">Minimum Water</div>
              </div>
              <div className="w-px h-10 bg-[#E2DCD1]"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#FF9B82]">30%</div>
                <div className="text-sm text-[#2C3E3E]/60">More Energy</div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#FFB7A4] to-[#FF9B82] text-[#2C3E3E] px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
            >
              Track My Water
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SummerCareTips;
