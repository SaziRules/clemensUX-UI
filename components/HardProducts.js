import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import productsData from '@/json/products';

const products = productsData;

const HardProducts = () => {
  return (
    <section className='mb-[5%]'>
      <div className='flex space-x-2 overflow-x-auto md:pl-5 scrollbar-hide py-4'>
        {products.map((product) => (
          <div key={product.Id} className='cursor-pointer hover:scale-105 transition transform duration-300 ease-out flex-shrink-0 w-[300px]'>
            <div className='relative h-[310px] w-[full] mb-4'>
              <Link href={`/product/${product.slug}`}>
                <Image
                  src={product.image}
                  alt='Product Image'
                  fill
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                  className='rounded-3xl'
                  style={{ objectFit: 'cover' }}
                />
              </Link>
            </div>
            <h3 className='text-[#2C2E74] text-[24px] font-normal'>{product.name}</h3>
            <p className='text-[#2C2E74] text-[14px] font-thin w-[295px] pb-3 leading-5'>{product.summary}</p>
            <button>
              <Image
                src='/rating.svg'
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

export default HardProducts;