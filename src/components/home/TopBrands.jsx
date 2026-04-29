"use client";
import { motion } from "framer-motion";
import { FaStar, FaShoppingBag, FaCheckCircle } from "react-icons/fa";
import Image from "next/image";

const TopBrands = () => {
  const brands = [
    {
      id: 1,
      name: "Nike",
      logo: "/brands/nike.png", // Replace with actual logo path
      category: "Sportswear",
      products: 1240,
      rating: 4.8,
      discount: "Up to 40% OFF",
      color: "from-gray-700 to-black",
      bgLight: "bg-gray-50",
    },
    {
      id: 2,
      name: "Adidas",
      logo: "/brands/adidas.png", // Replace with actual logo path
      category: "Sports Equipment",
      products: 980,
      rating: 4.7,
      discount: "Up to 35% OFF",
      color: "from-blue-700 to-blue-900",
      bgLight: "bg-blue-50",
    },
    {
      id: 3,
      name: "Puma",
      logo: "/brands/puma.png", // Replace with actual logo path
      category: "Activewear",
      products: 750,
      rating: 4.6,
      discount: "Up to 30% OFF",
      color: "from-orange-600 to-red-600",
      bgLight: "bg-orange-50",
    },
    {
      id: 4,
      name: "Under Armour",
      logo: "/brands/underarmour.png", // Replace with actual logo path
      category: "Performance Gear",
      products: 620,
      rating: 4.5,
      discount: "Up to 25% OFF",
      color: "from-gray-600 to-gray-800",
      bgLight: "bg-gray-50",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <FaShoppingBag />
            <span>Premium Selection</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Top Brands
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Shop from the worlds most trusted and popular brands with exclusive
            summer discounts
          </p>
        </motion.div>

        {/* Brands Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 h-full">
                {/* Brand Header with Gradient */}
                <div
                  className={`bg-gradient-to-r ${brand.color} p-6 relative overflow-hidden`}
                >
                  <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full"></div>
                  <div className="absolute -left-8 -bottom-8 w-32 h-32 bg-white/10 rounded-full"></div>

                  {/* Brand Logo Placeholder */}
                  <div className="relative z-10 flex justify-center items-center h-32">
                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 w-full max-w-[150px] mx-auto">
                      <div className="text-white text-center">
                        {/* Replace with actual Image component when you have logos */}
                        <div className="text-2xl md:text-3xl font-bold mb-2">
                          {brand.name}
                        </div>
                        <div className="text-xs opacity-90">
                          {brand.category}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Brand Info */}
                <div className="p-6">
                  {/* Rating */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1">
                      <FaStar className="text-yellow-400" />
                      <span className="font-semibold text-gray-800">
                        {brand.rating}
                      </span>
                      <span className="text-gray-400 text-sm">/5</span>
                    </div>
                    <div className="text-sm text-gray-500">
                      {brand.products}+ Products
                    </div>
                  </div>

                  {/* Discount Badge */}
                  <div className="mb-4">
                    <div className="inline-block bg-red-50 text-red-600 px-3 py-1 rounded-full text-xs font-semibold">
                      {brand.discount}
                    </div>
                  </div>

                  {/* Shop Button */}
                  <button className="w-full bg-gray-900 text-white py-2.5 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-gray-800 transition-all duration-300 group-hover:shadow-md">
                    Shop Now
                    <FaShoppingBag className="text-sm" />
                  </button>

                  {/* Features */}
                  <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-center gap-4 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <FaCheckCircle className="text-green-500" />
                      <span>Authentic</span>
                    </div>
                    <div className="w-px h-3 bg-gray-200"></div>
                    <div className="flex items-center gap-1">
                      <FaStar className="text-yellow-400" />
                      <span>Top Rated</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Brands Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
            View All Brands
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default TopBrands;
