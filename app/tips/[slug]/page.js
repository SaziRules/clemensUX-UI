'use client'

import React from 'react';
import Image from 'next/image';
import tipsData from '@/json/tips';
import HealthTips from '@/components/HealthTips';

export default function TipsPage({ params }) {
  const tipId = React.use(params).slug;
  console.log('tipId:', tipId);
  console.log('tipsData:', tipsData);

  const tip = tipsData.find((tip) => tip.slug === tipId);

  if (!tip) {
    return <div>Tip not found. Please check the post ID.</div>;
  }

  return (
    <main className="max-w-7xl mx-auto px-8 pt-[5%] sm:px-16 md:px-0">
      <section className="flex flex-col sm:gap-5 sm:px-5 sm:flex-row pb-[3%] pt-7">
        <div className="flex-1 pb-5 items-center sm:items-start sm:justify-center">
          <Image
            src={tip.image}
            alt={tip.title}
            width={500}
            height={500}
            className="w-full sm:w-[500px] object-center object-contain"
          />
        </div>
        <div className="flex-1 sm:items-center sm:justify-start text-left sm:pl-8 lg:ml-[-80px] md:pl-0 sm:pr-8">
          <h1 className='font-bold text-2xl sm:text-3xl md:text-5xl text-[#2C2E74] mb-3'>{tip.title}</h1>
          <p className='text-[#2C2E74]  mb-4'>{tip.body}</p>
          <p className='text-sm font-bold text-[#2C2E74] '>Author: <span className='font-normal'>{tip.author}</span></p>
        </div>
      </section>
      <hr className="h-px my-8 bg-gray-100 border-[0] dark:bg-gray-100"></hr>

      <section className='pt-[3%] pb-[3%]'>
      <div className='grid sm:grid-cols-2 items-center gap-5'>
    {tip.tips.map((tipContent, index) => (
      <div key={index} className='bg-[#E4EDF3] h-full p-5 sm:w-full'>
        <h2 className='text-[#2C2E74] font-medium text-xl'>{tip.tipTitle[index]}</h2>
        <p className='text-[#2C2E74] font-light'>{tipContent}</p>
      </div>
    ))}
  </div>
      </section>
      <hr className="h-px my-8 bg-gray-100 border-[0] dark:bg-gray-100"></hr>
      <section className=" pt-[3%]">
        <h3 className='md:pl-10 pl-3 pb-4 md:text-4xl  text-2xl text-[#2C2E74] font-bold'>You may also like</h3>
        <HealthTips />
      </section>
    </main>
  );
}

export async function dynamicParams() {
  const posts = await fetch('https://your-api-endpoint/posts');
  const data = await posts.json();

  return data.map((post) => ({
    params: { slug: post.slug },
  }));
}