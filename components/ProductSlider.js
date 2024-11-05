import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function ProductSlider({ products }) {
  return (
    <div className='flex space-x-6 overflow-x-auto md:pl-5 scrollbar-hide py-4'>
      {products.map((product) => (
        <Link key={product.id} href={`/product/${product.id}/page`}>
          <div className='cursor-pointer hover:scale-105 transition transform duration-300 ease-out'>
            <Image
              src={product.mainImage}
              alt={product.name}
              width={300}
              height={300}
              className='rounded-3xl'
            />
            <h3 className='text-[#2C2E74] text-[24px] font-normal'>{product.name}</h3>
            <p className='text-[#2C2E74] text-[14px] font-thin w-[295px] leading-5 pb-2'>
              {product.summary}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ProductSlider;