"use client";

import React from "react";

export default function HowTo() {
  // Static text content (replace with JSON later if you want it editable)
  const content = {
    leftTitle: "Not sure how to use and apply this product?",
    leftButton: "Find Out",
    rightTitle: "Not sure which product is best suitable for you?",
    rightButton: "Compare",
  };

  return (
    <div className="flex flex-col lg:flex-row h-auto lg:h-[290px] lg:p-5 gap-2 ">
      {/* Left Section */}
      <div className="flex-1 content-center p-5 bg-gradient-to-l from-sky-500 to-indigo-500 mx-[-2rem] sm:pl-10 lg:mx-0">
        <h1 className="text-left text-white text-2xl lg:text-[35px] mx-auto font-sans leading-6 pt-7 sm:pl-10 lg:leading-8 lg:w-[550px] pb-4 lg:pb-7 font-medium">
          {content.leftTitle}
        </h1>
        <button
          className="text-center text-sky-500 bg-white cursor-pointer rounded-full 
          py-2 mb-7 sm:ml-10 px-3 w-[140px] mx-auto hover:scale-105 transform transition duration-300 ease-out"
        >
          {content.leftButton}
        </button>
      </div>

      {/* Right Section */}
      <div className="flex-1 content-center p-5 bg-gradient-to-l from-indigo-500 to-sky-500 mx-[-2rem] sm:pl-10 lg:mx-0">
        <h1 className="text-left text-white text-2xl lg:text-[35px] mx-auto font-sans leading-6 pt-7 sm:pl-10 lg:leading-8 lg:w-[550px] pb-4 lg:pb-7 font-medium">
          {content.rightTitle}
        </h1>
        <button
          className="text-center text-sky-500 bg-white cursor-pointer rounded-full 
          py-2 mb-7 sm:ml-10 px-3 w-[140px] mx-auto hover:scale-105 transform transition duration-300 ease-out"
        >
          {content.rightButton}
        </button>
      </div>
    </div>
  );
}
