"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getAllFeatures } from "@/sanity/queries/feature";

const Features = () => {
  const [features, setFeatures] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getAllFeatures();
        setFeatures(data);
      } catch (err) {
        console.error("Error fetching features:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <section className="mt-[6%] mb-[5%]">
      <div className="flex space-x-3 overflow-x-auto md:pl-5 scrollbar-hide py-4">
        {/* 🔹 Skeleton Loader */}
        {loading &&
          Array.from({ length: 3 }).map((_, idx) => (
            <div
              key={idx}
              className="cursor-pointer flex-shrink-0 w-[300px] animate-pulse"
            >
              {/* Image placeholder */}
              <div className="relative h-[310px] w-full mb-4 bg-gray-200 rounded-3xl"></div>
              
              {/* Title placeholder */}
              <div className="h-6 bg-gray-200 w-2/3 rounded mb-3"></div>
              
              {/* Description placeholder (2 lines) */}
              <div className="h-4 bg-gray-200 w-full rounded mb-2"></div>
              <div className="h-4 bg-gray-200 w-3/4 rounded mb-4"></div>

              {/* Tick button placeholder */}
              <div className="h-10 w-10 bg-gray-200 rounded-full"></div>
            </div>
          ))}

        {!loading &&
          features.map((feature) => (
            <div
              key={feature._id}
              className="cursor-pointer hover:scale-105 transition transform duration-300 ease-out flex-shrink-0 w-[300px]"
            >
              <div className="relative h-[310px] w-full mb-4">
                <Image
                  src={feature.imageUrl || "/fallback.png"}
                  alt={feature.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="rounded-3xl object-cover"
                />
              </div>

              <h3 className="text-[#2C2E74] text-[24px] font-normal">
                {feature.title}
              </h3>

              <p className="text-[#2C2E74] text-[14px] font-thin w-[295px] leading-5">
                {feature.description}
              </p>

              <button
                aria-label={`Mark feature "${feature.title}" as complete`}
                className="mt-2"
              >
                <Image src="/tick.png" alt="Tick" width={40} height={40} />
              </button>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Features;
