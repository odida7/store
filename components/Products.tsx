

import { getProducts } from "@/lib/actions";
import React from "react";
import ProductCard from "./ProductCard";

const Products = async () => {
  const products = await getProducts();
  console.log(products);
  return (
    <div className="flex flex-col items-center gap-10 py-8 px-5">
      <h1 className="text-slate-600 text-center font-semibold text-4xl">
        Products
      </h1>

      
      {!products || products.length === 0 ? (
        <p className="font-semibold text-lg">No products found</p>
      ) : (
        <div className="flex flex-wrap gap-16 mx-auto">
          {products.map((product: ProductType) => (
            <ProductCard key={product._id} product={product}/>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
