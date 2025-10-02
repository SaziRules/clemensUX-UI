"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getAllFeatures } from "@/sanity/queries/feature";

const Features = () => {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getAllFeatures();
      setFeatures(data);
    }
    fetchData();
  }, []);

  if (!features.length) return <div>Loading features...</div>;

  return (
    <section className="mt-[6%] mb-[5%]">
      <div className="flex space-x-2 overflow-x-auto md:pl-5 scrollbar-hide py-4">
        {features.map((feature) => (
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
            <button>
              <Image src="/tick.png" alt="Tick" width={20} height={20} />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
