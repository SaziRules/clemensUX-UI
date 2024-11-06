'use client'

import React from 'react';
import Image from 'next/image';
import HardPosts from '@/components/HardPosts';
import postsData from '@/json/posts';

export default function PostPage({ params }) {
  const postId = React.use(params).slug;
  console.log('postId:', postId);
  console.log('postsData:', postsData);

  const post = postsData.find((post) => post.slug === postId);

  if (!post) {
    return <div>Post not found. Please check the post ID.</div>;
  }

  return (
    <main className="max-w-7xl mx-auto px-8 pt-[5%] sm:px-16 md:px-0">
      <section className="flex flex-col sm:gap-5 sm:px-5 sm:flex-row pb-[3%] pt-7">
        <div className="flex-1 pb-5 items-center sm:items-start sm:justify-center">
          <Image
            src={post.image}
            alt={post.title}
            width={500}
            height={500}
            className="w-full sm:w-[500px] object-center object-contain"
          />
        </div>
        <div className="flex-1 sm:items-center sm:justify-start text-left sm:pl-8 lg:ml-[-80px] md:pl-0 sm:pr-8">
          <h1 className='font-bold text-2xl sm:text-3xl md:text-5xl text-[#2C2E74] mb-3'>{post.title}</h1>
          <p className='text-[#2C2E74]  mb-4'>{post.body}</p>
          <p>{post.author}</p>
          
          
        </div>
      </section>
      <hr className="h-px my-8 bg-gray-100 border-[0] dark:bg-gray-100"></hr>
      
      <section className=" pt-[3%]">
        <h3 className='md:pl-10 pl-3 pb-4 md:text-4xl  text-2xl text-[#2C2E74] font-bold'>You may also like</h3>
        <HardPosts />
      </section>
    </main>
  );
}

export const dynamicParams = async () => {
  const posts = await fetch('https://your-api-endpoint/posts');
  const data = await posts.json();

  return data.map((post) => ({
    params: { slug: post.slug },
  }));
};