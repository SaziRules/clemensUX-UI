"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getAllTips } from "@/sanity/queries/tip";

const HealthTips = () => {
  const [tips, setTips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getAllTips();
        setTips(data);
      } catch (err) {
        console.error("Error fetching tips:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <section className="mb-[5%]">
      <div className="flex space-x-3 overflow-x-auto md:pl-5 scrollbar-hide py-4">
        {loading &&
          Array.from({ length: 4 }).map((_, idx) => (
            <div
              key={idx}
              className="cursor-pointer flex-shrink-0 w-[300px] animate-pulse"
            >
              <div className="relative h-[210px] w-full mb-4 bg-gray-200 rounded-xl"></div>
              <div className="h-5 bg-gray-200 w-3/4 rounded mb-3"></div>
              <div className="h-10 w-10 bg-gray-200 rounded-full"></div>
            </div>
          ))}

        {!loading &&
          tips.map((tip) => (
            <div
              key={tip._id}
              className="cursor-pointer hover:scale-105 transition transform duration-300 ease-out flex-shrink-0 w-[300px]"
            >
              <div className="relative h-[210px] w-full mb-4">
                <Link href={`/tips/${tip.slug}`}>
                  <Image
                    src={tip.image || "/fallback.png"}
                    alt={tip.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="rounded-xl object-cover"
                  />
                </Link>
              </div>
              <h3 className="text-[#2C2E74] text-[20px] leading-6 pb-2 font-normal">
                {tip.title}
              </h3>

              <button
                aria-label={`Mark tip "${tip.title}" as read`}
                className="mt-2"
              >
                <Image src="/tick.png" alt="Tick" width={56} height={56} />
              </button>
            </div>
          ))}
      </div>
    </section>
  );
};

export default HealthTips;
