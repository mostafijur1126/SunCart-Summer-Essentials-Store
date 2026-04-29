import Image from "next/image";
import React from "react";
import { Card } from "@heroui/react";

const PopularProducts = async () => {
  const res = await fetch(
    "https://sun-cart-summer-essentials-store.vercel.app/Data.json",
  );
  const produdts = await res.json();

  return (
    <div className="max-w-7xl mx-auto">
      <h1>Popular Products</h1>
      <div className="grid grid-cols-3 gap-5">
        {produdts.slice(0, 3).map((produdt) => {
          return (
            <div key={produdt.id}>
              <Card>
                <Image
                  src={produdt.image}
                  alt={produdt.name}
                  height={100}
                  width={100}
                ></Image>
              </Card>
              <div>
                <h1>{produdt.name}</h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PopularProducts;
