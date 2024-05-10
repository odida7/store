import { getCategories } from "@/lib/actions";
import Image from "next/image";
import Link from "next/link";

import React from "react";

const Collections = async () => {
  const categories = await getCategories();

  return (
    <div className="flex flex-col items-center gap-10 py-8 px-5">
      <h1 className="text-slate-600 text-center font-semibold text-4xl">
        Categories
      </h1>

      {!categories || categories.length === 0 ? (
        <p className="font-semibold text-lg">No categories found</p>
      ) : (
        <div className="flex items-center justify-center gap-8">
          {categories.map((category: CategoryType) => (
            <Link href={`/category/${category._id}`} key={category._id}>
              <Image
                src={category.image}
                alt={category.title}
                width={350}
                height={200}
                className="cursor-pointer rounded"
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Collections;
