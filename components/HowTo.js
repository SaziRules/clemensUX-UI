"use client";

import React from "react";
import Link from "next/link";

export default function HowTo() {
  const content = {
    leftTitle: "Not sure how to use and apply this product?",
    leftButton: "Find Out",
    leftLink: "/how-to-apply", // example route
    rightTitle: "Not sure which product is best suitable for you?",
    rightButton: "Compare",
    rightLink: "/compare-products", // example route
  };

  return (
    <div className="flex flex-col lg:flex-row h-auto lg:h-[290px] lg:p-5 gap-2">
      {/* Left Section */}
      <div className="flex-1 content-center p-5 bg-gradient-to-l from-sky-500 to-indigo-500 mx-[-2rem] lg:mx-0">
        <h1 className="text-left text-white text-2xl lg:text-[35px] font-sans leading-6 pt-7 lg:leading-8 lg:w-[550px] pb-4 lg:pb-7 font-medium">
          {content.leftTitle}
        </h1>
        <Link href={content.leftLink} passHref>
          <button
            aria-label="Find out how to apply product"
            className="text-center text-sky-500 bg-white cursor-pointer rounded-full 
            py-2 px-5 w-[140px] hover:scale-105 transform transition duration-300 ease-out"
          >
            {content.leftButton}
          </button>
        </Link>
      </div>

      {/* Right Section */}
      <div className="flex-1 content-center p-5 bg-gradient-to-l from-indigo-500 to-sky-500 mx-[-2rem] lg:mx-0">
        <h1 className="text-left text-white text-2xl lg:text-[35px] font-sans leading-6 pt-7 lg:leading-8 lg:w-[550px] pb-4 lg:pb-7 font-medium">
          {content.rightTitle}
        </h1>
        <Link href={content.rightLink} passHref>
          <button
            aria-label="Compare products"
            className="text-center text-sky-500 bg-white cursor-pointer rounded-full 
            py-2 px-5 w-[140px] hover:scale-105 transform transition duration-300 ease-out"
          >
            {content.rightButton}
          </button>
        </Link>
      </div>
    </div>
  );
}
