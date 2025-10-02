"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ratingImage from "../public/tick.png";
import { getAllTips } from "@/sanity/queries/tip";

const HealthTips = () => {
  const [tips, setTips] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getAllTips();
      setTips(data);
    }
    fetchData();
  }, []);

  if (!tips.length) return <div>Loading tips...</div>;

  return (
    <section className="mb-[5%]">
      <div className="flex space-x-3 overflow-x-auto md:pl-5 scrollbar-hide py-4">
        {tips.map((tip) => (
          <div
            key={tip._id}
            className="cursor-pointer hover:scale-105 transition transform duration-300 ease-out flex-shrink-0 w-[300px]"
          >
            <div className="relative h-[210px] w-full mb-4">
              <Link href={`/tips/${tip.slug}`}>
                {tip.image ? (
                  <Image
                    src={tip.image}
                    alt={tip.title}
                    fill
                    className="rounded-xl object-cover"
                  />
                ) : (
                  <Image
                    src="/fallback.png"
                    alt="Placeholder"
                    fill
                    className="rounded-xl object-cover"
                  />
                )}
              </Link>
            </div>
            <h3 className="text-[#2C2E74] text-[20px] leading-6 pb-2 font-normal">
              {tip.title}
            </h3>
            
            <button aria-label="View tip rating">
              <Image src={ratingImage} alt="Rating" width={56} height={56} />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HealthTips;
