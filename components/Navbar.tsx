"use client";

import Image from "next/image";
import React, { useState } from "react";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import Link from "next/link";
import { MenuIcon, ShoppingBag } from "lucide-react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const { user } = useUser();
  const pathName = usePathname();
  const [dropdownMenu, setDropdownMenu] = useState(false);

  return (
    <div className="sticky top-0 z-10 py-2 px-10 flex justify-between items-center bg-white bg-opacity-95 shadow-md">
      <Link href={"/"}>
        <Image
          src="/assets/images/logo.png"
          alt="logo"
          width={150}
          height={70}
        />
      </Link>

      <div className="max-md:hidden">
        <input
          type="text"
          placeholder="Search products"
          className="p-2 outline-none bg-gray-100 rounded-full"
        />
      </div>

      <div className=" relative flex flex-row gap-8 items-center p-2">
        <div className="flex flex-row gap-8 items-center max-md:hidden">
          <Link
            href={"/wishlist"}
            className={`hover:border-b-2 hover:border-b-gray-400 p-1 ${
              pathName === "/wishlist" ? "text-blue-500" : "text-slate-700"
            }`}
          >
            <p className="font-semibold">Wishlists</p>
          </Link>

          <Link
            href={"/cart"}
            className={`hover:border-b-2 hover:border-b-gray-400 p-1 ${
              pathName === "/cart" ? "text-blue-500" : "text-slate-700"
            }`}
          >
            <span className="flex items-center gap-2 ">
              <ShoppingBag />
              <p className="font-semibold">Cart(0)</p>
            </span>
          </Link>
        </div>

        <div className="max-md:hidden">
          <SignedOut>
            <SignInButton>
              <button className="bg-gray-500 hover:bg-black rounded-xl p-1 px-2 text-white">
                SignIn
              </button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>

        {user && (
          <MenuIcon
            className="cursor-pointer md:hidden"
            onClick={() => setDropdownMenu(!dropdownMenu)}
          />
        )}

        {user && dropdownMenu && (
          <div className="absolute top-12 right-0 border border-gray-100 bg-white bg-opacity-95 rounded-md px-12 py-2 md:hidden">
            <Link
              href={"/wishlist"}
              className={`p-1 ${
                pathName === "/wishlist" ? "text-blue-500" : "text-slate-700"
              }`}
            >
              <p className="font-semibold">Wishlists</p>
            </Link>

            <Link
              href={"/cart"}
              className={`p-1 ${
                pathName === "/cart" ? "text-blue-500" : "text-slate-700"
              }`}
            >
              <span className="flex items-center gap-2 ">
                <ShoppingBag />
                <p className="font-semibold">Cart(0)</p>
              </span>
            </Link>

            <div>
              <SignedOut>
                <SignInButton>
                  <button className="bg-gray-500 hover:bg-black rounded-xl p-1 px-2 text-white">
                    SignIn
                  </button>
                </SignInButton>
              </SignedOut>

              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
