"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { getAllPosts } from "@/sanity/queries/post";

const HardPosts = ({ posts: initialPosts }) => {
  const scrollRef = useRef(null);
  const [posts, setPosts] = useState(initialPosts || []);

  useEffect(() => {
    if (initialPosts?.length) return;
    (async () => setPosts(await getAllPosts()))();
  }, [initialPosts]);

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -320 : 320,
      behavior: "smooth",
    });
  };

  if (!posts.length) return <div>Loading posts...</div>;

  return (
    <section className="relative w-full mb-[5%]">
      <div className="hidden md:flex justify-end mb-3 pr-4">
        <button
          className="bg-white border-[2px] border-[#2C2E74] shadow-md p-2 rounded-full mx-1"
          onClick={() => scroll("left")}
          aria-label="Scroll left"
        >
          <FaChevronLeft className="text-[#2C2E74]" size={20} />
        </button>
        <button
          className="bg-white border-[2px] border-[#2C2E74] shadow-md p-2 rounded-full"
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
        {posts.map((post) => (
          <div
            key={post._id}
            className="cursor-pointer flex-shrink-0 w-[300px] hover:scale-105 transition duration-300"
          >
            <div className="relative h-[210px] w-full mb-4">
              <Link href={`/posts/${post.slug}`}>
                <Image
                  src={post.thumbUrl || "/fallback.png"}
                  alt={post.title}
                  fill
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
