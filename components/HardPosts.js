import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ratingImage from '../public/tick.png'; // Assuming rating.svg is in public folder
import postsData from '@/json/posts';

const HardPosts = ({ posts }) => {
  return (
    <section className='mb-[5%]'>
      <div className='flex space-x-3 overflow-x-auto md:pl-5 scrollbar-hide py-4'>
        {postsData.map((post) => (
          <div key={post.id} className='cursor-pointer hover:scale-105 transition transform duration-300 ease-out flex-shrink-0 w-[300px]'>
            <div className='relative h-[210px] w-[full] mb-4'>
              <Link href={`/posts/${post.slug}`}>
                <Image
                  src={post.image}
                  alt='Product Image'
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: 'cover' }}
                  className='rounded-xl'
                />
              </Link>
            </div>
            <h3 className='text-[#2C2E74] text-[20px] leading-6 pb-2 font-normal'>{post.title}</h3>
            <p className='text-[#2C2E74] text-[14px] font-thin w-[295px] pb-3 leading-5'>{post.excerpt}</p>
            <button aria-label="View product rating">
              <Image
                src={ratingImage}
                alt='Rating'
                width={56}
                height={56}
                style={{ width: 'auto', height: 'auto' }}
              />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HardPosts;