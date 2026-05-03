import Image from "next/image";
import React from "react";
import { Button, Card, Chip } from "@heroui/react";
import { FaStar } from "react-icons/fa";
import { CgDollar } from "react-icons/cg";
import Link from "next/link";

const PopularProducts = async () => {
  const res = await fetch(
    "https://sun-cart-summer-essentials-store.vercel.app/Data.json",
  );
  const products = await res.json();

  return (
    <div className=" bg-gradient-to-br from-[#FFF9F0] via-[#E8F3EF] to-[#FFF0D3] px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto py-20">
        <h1 className="text-4xl font-bold mb-8 text-[#2C3E3E]">
          Popular Products
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => {
            return (
              <div key={product.id}>
                <Card className="border border-[#E2DCD1] rounded-2xl bg-[#FFF9F0] shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group">
                  <div className="relative w-full aspect-square bg-[#E8F3EF]">
                    <Image
                      src={product.image}
                      alt={product.name}
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      fill
                    />
                    <Chip className="absolute top-3 right-3 bg-[#FFB7A4] text-[#2C3E3E] border-none font-semibold shadow-sm">
                      {product.category}
                    </Chip>

                    {product.price > 30 && (
                      <div className="absolute top-3 left-3 bg-[#FF9B82] text-[#2C3E3E] text-xs font-bold px-2 py-1 rounded-full shadow-sm">
                        SALE
                      </div>
                    )}
                  </div>
                  <div className="p-4 space-y-3">
                    <h1 className="text-lg font-semibold text-[#2C3E3E] line-clamp-1 group-hover:text-[#FF9B82] transition-colors">
                      {product.name}
                    </h1>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <FaStar className="text-[#FFB7A4] fill-current" />
                        <p className="text-sm font-medium text-[#2C3E3E]/80">
                          {product.rating}
                        </p>
                      </div>
                      <div className="flex items-center gap-1">
                        <CgDollar className="text-[#FF9B82] text-lg" />
                        <p className="text-xl font-bold text-[#2C3E3E]">
                          {product.price}
                        </p>
                      </div>
                    </div>
                    <Link href={`/products/${product.id}`}>
                      <Button
                        variant="bordered"
                        className="w-full border-2 border-[#FFB7A4] bg-transparent text-[#FFB7A4] hover:bg-[#FFB7A4] hover:text-[#2C3E3E] transition-all duration-300 font-semibold rounded-full"
                      >
                        View Details
                      </Button>
                    </Link>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PopularProducts;
