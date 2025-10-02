"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ratingImage from "../public/rating.svg";
import { getAllProducts } from "@/sanity/queries/products";
import { PortableText } from "@portabletext/react";
import { ptComponents } from "@/sanity/lib/portableText";

const HardProducts = () => {
  const scrollRef = useRef(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getAllProducts();
      setProducts(data);
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

  if (!products.length) return <div>Loading products...</div>;

  return (
    <section className="relative w-full mb-[5%]">
      {/* Arrows (Hidden on Mobile) */}
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

      {/* Scrollable Product List */}
      <div
        ref={scrollRef}
        className="flex space-x-6 overflow-x-auto md:pl-5 scrollbar-hide py-4 px-4 scroll-smooth"
      >
        {products.map((product) => (
          <div
            key={product._id}
            className="cursor-pointer flex-shrink-0 w-[300px] hover:scale-105 transition transform duration-300 ease-out"
          >
            <div className="relative h-[310px] w-full mb-4">
              <Link href={`/product/${product.slug}`}>
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="rounded-3xl object-cover"
                />
              </Link>
            </div>

            {/* Product Details */}
            <h3 className="text-[#2C2E74] text-[24px] font-normal">
              {product.name}
            </h3>
            <p className="text-[#2C2E74] text-[14px] font-extralight w-[295px] pb-3 leading-5">
              {Array.isArray(product.summary) ? (
                <PortableText value={product.summary} components={ptComponents} />
              ) : (
                typeof product.summary === "string" && product.summary
              )}
            </p>

            {/* Rating Button */}
            <button aria-label="View product rating">
              <Image src={ratingImage} alt="Rating" width={56} height={56} />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HardProducts;
