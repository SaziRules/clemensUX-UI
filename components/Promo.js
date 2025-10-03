"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { getPromoSection } from "@/sanity/queries/promo";

function Promo() {
  const [promoData, setPromoData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const data = await getPromoSection();
        setPromoData(data);
      } catch (err) {
        console.error("Error fetching promo:", err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) {
    // 🔹 Skeleton Loader
    return (
      <div className="flex flex-col lg:flex-row h-auto lg:h-[360px] gap-0">
        <div className="flex-1 content-center p-5 bg-gradient-to-l from-sky-500 to-indigo-500 mx-[-2rem] lg:mx-0 animate-pulse">
          <div className="h-8 w-3/4 bg-white/40 rounded mb-4 mx-auto"></div>
          <div className="h-10 w-[140px] bg-white/50 rounded-full mx-auto"></div>
        </div>
        <div className="hidden lg:block relative flex-1 h-full p-5">
          <div className="w-full h-full bg-gray-200 animate-pulse rounded"></div>
        </div>
      </div>
    );
  }

  if (!promoData) return null;

  return (
    <div className="flex flex-col lg:flex-row h-auto lg:h-[360px] gap-0">
      <div className="flex-1 content-center p-5 bg-gradient-to-l from-sky-500 to-indigo-500 mx-[-2rem] lg:mx-0">
        <h1 className="text-center text-white text-2xl lg:text-[35px] font-sans leading-6 pt-7 lg:leading-8 lg:w-[550px] pb-4 lg:pb-7 font-medium">
          {promoData.heading}
        </h1>

        {promoData.buttonText && promoData.buttonLink && (
          <a
            href={promoData.buttonLink}
            className="text-center text-sky-500 bg-white cursor-pointer rounded-full py-2 mb-7 px-3 w-[140px] mx-auto hover:scale-105 transform transition duration-300 ease-out block"
          >
            {promoData.buttonText}
          </a>
        )}
      </div>

      {/* Promo image from Sanity */}
      {promoData.image && (
        <div className="hidden lg:block relative flex-1 items-center h-full justify-center p-5">
          <Image
            src={promoData.image}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: "cover" }}
            alt="Promotion Image"
            priority
          />
        </div>
      )}
    </div>
  );
}

export default Promo;
