import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaShareAlt,
  FaShieldAlt,
  FaShoppingCart,
  FaTruck,
  FaUndo,
} from "react-icons/fa";

const ProductDetailsPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(
    "https://sun-cart-summer-essentials-store.vercel.app/Data.json",
  );
  const products = await res.json();
  const expectedProduct = products.find(
    (product) => Number(product.id) === Number(id),
  );

  // console.log(expectedProduct);
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF9F0] via-[#E8F3EF] to-[#FFF0D3] py-16 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <div className="flex items-center gap-2 text-sm text-[#2C3E3E]/60">
            <Link href="/" className="hover:text-[#FFB7A4] transition">
              Home
            </Link>
            <span>/</span>
            <Link href="/products" className="hover:text-[#FFB7A4] transition">
              Products
            </Link>
            <span>/</span>
            <span className="text-[#2C3E3E]">{expectedProduct.name}</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 px-4  gap-15">
          <div className="relative bg-[#FFF9F0] rounded-2xl overflow-hidden border border-[#E2DCD1] shadow-lg">
            <div className="relative aspect-square">
              <Image
                src={expectedProduct.image}
                alt={expectedProduct.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute top-4 left-4 bg-gradient-to-r from-[#FFB7A4] to-[#FF9B82] text-[#2C3E3E] px-3 py-1 rounded-full text-sm font-bold shadow-md">
              Summer Sale
            </div>
          </div>
          <div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm font-medium text-[#FF9B82] bg-[#FFB7A4]/20 px-3 py-1 rounded-full">
                  {expectedProduct.brand}
                </span>
                <span className="text-sm text-[#2C3E3E]/50">|</span>
                <span className="text-sm text-[#2C3E3E]/60">
                  {expectedProduct.category}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-[#2C3E3E] mb-2">
                {expectedProduct.name}
              </h1>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 text-[#FFB7A4]">
                {expectedProduct.rating}
              </div>
              <span className="text-sm font-medium text-[#2C3E3E]">
                {expectedProduct.rating}
              </span>
              <span className="text-sm text-[#2C3E3E]/50">
                ({Math.floor(Math.random() * 200) + 100} reviews)
              </span>
            </div>
            <div className="border-t border-b py-4 border-[#E2DCD1]">
              <div className="flex items-baseline gap-3">
                <span className="text-3xl md:text-4xl font-bold text-[#FF9B82]">
                  {expectedProduct.price}
                </span>
                <span className="text-lg text-[#2C3E3E]/40 line-through">
                  ${(expectedProduct.price * 1.4).toFixed(2)}
                </span>
                <span className="bg-[#FFB7A4]/30 text-[#FF9B82] px-2 py-0.5 rounded-full text-sm font-semibold">
                  40% OFF
                </span>
              </div>
              <p className="text-sm text-[#2C3E3E]/60 mt-1">Tax included</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#2C3E3E] mb-2">
                Description
              </h3>
              <p className="text-[#2C3E3E]/70 leading-relaxed">
                {expectedProduct.description}
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#2C3E3E]">Quantity</h3>
              <div>
                <span className="text-sm text-[#2C3E3E]/60">
                  {expectedProduct.stock} items available
                </span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="flex-1 bg-gradient-to-r from-[#FFB7A4] to-[#FF9B82] text-[#2C3E3E] px-6 py-3 rounded-full font-bold flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-300">
                <FaShoppingCart /> Add to Cart
              </Button>
              <Button className="flex-1 border-2 border-[#FFB7A4] text-[#FFB7A4] px-6 py-3 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-[#FFB7A4] hover:text-[#2C3E3E] transition-all duration-300">
                Buy Now
              </Button>
            </div>
            <div className="bg-[#E8F3EF] rounded-xl p-4 border border-[#E2DCD1] mt-4">
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <FaTruck className="text-[#FFB7A4] text-xl mx-auto mb-1" />
                  <p className="text-xs text-[#2C3E3E]/70">Free Shipping</p>
                </div>
                <div className="text-center">
                  <FaShieldAlt className="text-[#FFB7A4] text-xl mx-auto mb-1" />
                  <p className="text-xs text-[#2C3E3E]/70">2 Year Warranty</p>
                </div>
                <div className="text-center">
                  <FaUndo className="text-[#FFB7A4] text-xl mx-auto mb-1" />
                  <p className="text-xs text-[#2C3E3E]/70">30 Day Returns</p>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <button className="flex items-center gap-2 text-sm text-[#2C3E3E]/50 hover:text-[#FFB7A4] transition-colors">
                <FaShareAlt /> Share this product
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
