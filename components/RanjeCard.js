"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { getAllRanges } from "@/sanity/queries/range";

// Skeleton card component
function RangeSkeleton() {
  return (
    <div className="cursor-pointer flex-shrink-0 w-[300px] animate-pulse">
      <div className="relative h-[310px] w-full mb-4 bg-gray-300 rounded-3xl"></div>
      <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-full mb-1"></div>
      <div className="h-4 bg-gray-200 rounded w-2/3"></div>
      <div className="mt-3 h-14 w-14 bg-gray-300 rounded-full"></div>
    </div>
  );
}

export default function RanjeCard() {
  const scrollRef = useRef(null);
  const [ranges, setRanges] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getAllRanges();
        setRanges(data);
      } finally {
        setLoading(false);
      }
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
        {loading
          ? [...Array(4)].map((_, i) => <RangeSkeleton key={i} />)
          : ranges.map((range) => (
              <Link
                key={range._id}
                href={range.link || "#"}
                className="cursor-pointer flex-shrink-0 w-[300px] transition-opacity duration-700 opacity-0 animate-fadeIn"
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
                    <Image src="/tick.png" alt="Tick" width={56} height={56} />
                  </button>
                </div>
              </Link>
            ))}
      </div>
    </div>
  );
}
