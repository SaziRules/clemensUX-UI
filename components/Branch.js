"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { getStorePartners } from "@/sanity/queries/storePartners";

export default function Branch() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchStores() {
      const result = await getStorePartners();
      setData(result);
    }
    fetchStores();
  }, []);

  if (!data) {
    return (
      <section className="flex items-center justify-center h-64">
        <p className="text-gray-500 text-sm">Loading stores...</p>
      </section>
    );
  }

  return (
    <section className="px-6 md:px-16 py-20 bg-gradient-to-b from-gray-50 to-white text-left mb-[5%] rounded-xl">
      {/* Heading */}
<h2 className="text-3xl md:text-7xl font-bold text-[#2C2E74] mb-14 leading-tight">
  {(() => {
    const words = data.heading.split(" ");
    const firstLine = words.slice(0, 4).join(" ");
    const secondLine = words.slice(4).join(" ");
    return (
      <>
        {firstLine}
        <br />
        {secondLine}
      </>
    );
  })()}
</h2>


      {/* Logos Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-12 max-w-6xl mx-auto">
        {data.stores?.map((store) => (
          <a
            key={store._id || store.name}
            href={store.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center transition-transform duration-300 hover:scale-[1.03]"
          >
            {/* Card container */}
            <div className="relative w-[260px] h-[130px] md:w-[320px] md:h-[160px] bg-white rounded-2xl shadow-md hover:shadow-lg border border-gray-100 overflow-hidden flex items-center justify-center">
              <div className="relative w-full h-full">
                <Image
                  src={store.logo.url}
                  alt={store.name}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 250px, 400px"
                  placeholder="blur"
                  blurDataURL={store.logo.metadata.lqip}
                />
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-700 font-medium tracking-wide group-hover:text-[#237DC0] transition-colors">
              {store.name}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}
