"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { getAllPosts } from "@/sanity/queries/post";

const HardPosts = ({ posts: initialPosts }) => {
  const scrollRef = useRef(null);
  const [posts, setPosts] = useState(initialPosts || []);
  const [loading, setLoading] = useState(!initialPosts?.length);

  useEffect(() => {
    if (initialPosts?.length) return;
    (async () => {
      try {
        const data = await getAllPosts();
        setPosts(data);
      } catch (err) {
        console.error("Error fetching posts:", err);
      } finally {
        setLoading(false);
      }
    })();
  }, [initialPosts]);

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -320 : 320,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative w-full mb-[5%]">
      {/* Arrows (hidden on mobile) */}
      <div className="hidden md:flex justify-end mb-3 pr-4">
        <button
          className="bg-white border-[2px] border-[#2C2E74] shadow-md p-2 rounded-full mx-1 hover:bg-gray-100 transition"
          onClick={() => scroll("left")}
          aria-label="Scroll left"
        >
          <FaChevronLeft className="text-[#2C2E74]" size={20} />
        </button>
        <button
          className="bg-white border-[2px] border-[#2C2E74] shadow-md p-2 rounded-full hover:bg-gray-100 transition"
          onClick={() => scroll("right")}
          aria-label="Scroll right"
        >
          <FaChevronRight className="text-[#2C2E74]" size={20} />
        </button>
      </div>

      <div
        ref={scrollRef}
        className="flex space-x-6 overflow-x-auto md:pl-5 scrollbar-hide py-4 px-4 scroll-smooth"
      >
        {/* 🔹 Skeleton Loader */}
        {loading &&
          Array.from({ length: 4 }).map((_, idx) => (
            <div
              key={idx}
              className="cursor-pointer flex-shrink-0 w-[300px] animate-pulse"
            >
              <div className="relative h-[210px] w-full mb-4 bg-gray-200 rounded-xl"></div>
              <div className="h-5 bg-gray-200 w-3/4 rounded mb-3"></div>
              <div className="h-4 bg-gray-200 w-full rounded"></div>
            </div>
          ))}

        {!loading &&
          posts.map((post) => (
            <div
              key={post._id}
              className="cursor-pointer flex-shrink-0 w-[300px] hover:scale-105 transition duration-300 ease-out"
            >
              <div className="relative h-[210px] w-full mb-4">
                <Link href={`/posts/${post.slug}`}>
                  <Image
                    src={post.thumbUrl || "/fallback.png"}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                    className="rounded-xl object-cover"
                  />
                </Link>
              </div>

              <h3 className="text-[#2C2E74] text-[20px] leading-6 pb-2 font-normal">
                {post.title}
              </h3>

              {post.excerpt && (
                <p className="text-[#2C2E74] text-[14px] font-extralight w-[295px] leading-5 line-clamp-2">
                  {post.excerpt}
                </p>
              )}
            </div>
          ))}
      </div>
    </section>
  );
};

export default HardPosts;
