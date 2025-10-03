"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  MenuIcon,
  UserCircleIcon,
  GlobeAltIcon,
} from "@heroicons/react/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Products", href: "/products" },
  { name: "About us", href: "/about" },
  { name: "Articles", href: "/articles" },
  { name: "Health tips", href: "/healthTips" },
  { name: "Contact us", href: "/contact" },
];

const purchaseLabel = "Purchase";

function Header() {
  const pathname = usePathname();
  const [isStudio, setIsStudio] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.pathname.startsWith("/studio")) {
      setIsStudio(true);
    }
  }, []);

  if (isStudio) return null; // 🔹 don’t render in Studio

  return (
    <nav
      className="hidden sticky top-0 z-50 lg:grid grid-cols-[25%_50%_25%] bg-white 
    border justify-between p-4 md:px-20"
    >
      {/* Left */}
      <Link
        href="/"
        className="relative flex items-center mt-[-20px] mb-[-60px] cursor-pointer my-auto"
      >
        <Image
          src="/logo.png"
          alt="logo"
          width={130}
          height={150}
          style={{ objectPosition: "left" }}
        />
      </Link>

      {/* Middle */}
      <div
        className="flex-grow md:flex items-center justify-between md:border md:shadow-sm rounded-full py-1
        md:hover:shadow-md transition duration-300 ease-out hover:divide-x-0 px-1"
      >
        {navLinks.map((link, i) => (
          <Link
            key={i}
            href={link.href}
            className={`hover:bg-gray-100 transition duration-300 ease-out rounded-full p-3
             ${
               pathname === link.href
                 ? "bg-[#237DC0] text-white"
                 : "text-[#2C2E74]"
             } ml-[4px] mr-[2px]`}
          >
            <p className="hidden px-2 text-sm md:hidden lg:inline cursor-pointer">
              {link.name}
            </p>
          </Link>
        ))}
      </div>

      {/* Right */}
      <div className="flex space-x-1 items-center justify-end">
        <div
          className="hover:bg-gray-100 transition duration-300 ease-out rounded-full p-3
         active:bg-[#237DC0] active:text-white text-[#2C2E74]"
        >
          <Link href={"/stores"}>
            <p className="hidden px-2 text-sm md:hidden lg:inline cursor-pointer">
              {purchaseLabel}
            </p>
          </Link>
        </div>
        <div
          className="hover:bg-gray-100 transition duration-300 ease-out rounded-full p-3
         active:bg-[#237DC0] text-[#2C2E74] active:text-white"
        >
          <GlobeAltIcon className="h-5 cursor-pointer" />
        </div>

        <div
          className="flex items-center space-x-0.8 border p-0.5 rounded-full 
        hover:shadow-md cursor-pointer transition ease-out duration-300"
        >
          <MenuIcon className="h-4 text-[#2C2E74] mx-2 active:text-[#237DC0] transition ease-out duration-300" />
          <UserCircleIcon className="h-10 text-[#2C2E74] mx-0.5 active:text-[#237DC0] transition ease-out duration-300" />
        </div>
      </div>
    </nav>
  );
}

export default Header;
