"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { getAllRanges } from "@/sanity/queries/range";

export default function RanjeCard() {
  const scrollRef = useRef(null);
  const [ranges, setRanges] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getAllRanges();
      setRanges(data);
    }
    fetchData();
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  if (!ranges.length) return <div>Loading ranges...</div>;

  return (
    <div className="relative w-full">
      {/* Arrows (desktop only) */}
      <div className="hidden md:flex justify-end mb-3 pr-4">
        <button
          className="bg-white border-[2px] border-[#2C2E74] shadow-md p-2 rounded-full hover:bg-gray-100 transition mx-1"
          onClick={() => scroll("left")}
          aria-label="Scroll Left"
        >
          <FaChevronLeft className="text-[#2C2E74]" size={20} />
        </button>
        <button
          className="bg-white border-[2px] border-[#2C2E74] shadow-md p-2 rounded-full hover:bg-gray-100 transition"
          onClick={() => scroll("right")}
          aria-label="Scroll Right"
        >
          <FaChevronRight className="text-[#2C2E74]" size={20} />
        </button>
      </div>

      {/* Scrollable list */}
      <div
        ref={scrollRef}
        className="flex space-x-6 overflow-x-auto md:pl-5 scrollbar-hide py-4 px-4 scroll-smooth"
      >
        {ranges.map((range) => (
          <Link
            key={range._id}
            href={range.link || "#"}
            className="cursor-pointer flex-shrink-0 w-[300px]"
          >
            <div className="hover:scale-105 transition transform duration-300 ease-out">
              <div className="relative h-[310px] w-full mb-4">
                <Image
                  src={range.image || "/fallback.png"}
                  alt={range.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="rounded-3xl object-cover"
                />
              </div>
              <h3 className="text-[#2C2E74] text-[24px] font-normal">
                {range.title}
              </h3>
              <p className="text-[#2C2E74] text-[14px] font-thin w-[295px] leading-5">
                {range.description}
              </p>
              <button className="mt-3">
                <Image src="/tick.png" alt="Tick" width={20} height={20} />
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
