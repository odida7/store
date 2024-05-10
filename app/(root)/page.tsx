

import Collections from "@/components/Collections";
import Products from "@/components/Products";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Image
        src='/assets/images/banner.png'
        alt="banner"
        height={1000}
        width={2000}
        className="w-screen"
      />

      <Collections/>
      <Products/>
      
    </div>
  );
}
