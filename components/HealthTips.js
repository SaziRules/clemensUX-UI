import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ratingImage from '../public/tick.png'; // Assuming rating.svg is in public folder
import tipsData from '@/json/tips';

const HealthTips = ({ tips }) => {
  return (
    <section className='mb-[5%]'>
      <div className='flex space-x-3 overflow-x-auto md:pl-5 scrollbar-hide py-4'>
        {tipsData.map((tip) => (
          <div key={tip.id} className='cursor-pointer hover:scale-105 transition transform duration-300 ease-out flex-shrink-0 w-[300px]'>
            <div className='relative h-[210px] w-[full] mb-4'>
              <Link href={`/tips/${tip.slug}`}>
                <Image
                  src={tip.image}
                  alt='Article Image'
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: 'cover' }}
                  className='rounded-xl'
                />
              </Link>
            </div>
            <h3 className='text-[#2C2E74] text-[20px] leading-6 pb-2 font-normal'>{tip.title}</h3>
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

export default HealthTips;