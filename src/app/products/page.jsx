import React from "react";

const ProductsPage = async () => {
  const res = await fetch(
    "https://sun-cart-summer-essentials-store.vercel.app/Data.json",
  );
  const data = await res.json();
  //   console.log(data);
  return (
    <div>
      <h1>produce page</h1>
    </div>
  );
};

export default ProductsPage;
