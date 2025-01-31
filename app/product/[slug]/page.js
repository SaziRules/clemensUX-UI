'use client'

import React, { useState} from 'react';
import Image from 'next/image';
import productsData from '@/json/products';
import HardProducts from '@/components/HardProducts';
import HowTo from '@/components/HowTo';

function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border-b border-[#2C2E74]">
      <div className="flex items-center justify-between px-4 py-3 text-[#2C2E74] font-bold transition duration-300 ease-out cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <span>{title}</span>
        {isOpen ? <span className='text-2xl font-light'>-</span> : <span className='text-2xl font-light'>+</span>}
      </div>
      {isOpen && (
        <div className="px-4 py-2 text-[#2C2E74] text-xs">
          {children}
        </div>
      )}
    </div>
  );
}


export default function ProductPage({ params }) {
  const { slug } = React.use(params);
  console.log('slug:', slug);
  console.log('productsData:', productsData);

  const product = productsData.find((product) => product.slug === slug);

  if (!product) {
    return <div>Product not found. Please check the product slug.</div>;
  }

  return (
    <main className="max-w-7xl mx-auto px-8 pt-[5%] sm:px-16 md:px-0">
      <section className="flex flex-col sm:gap-5 sm:px-5 sm:flex-row pb-[3%] pt-7">
        <div className="flex-1 pb-5 items-center sm:items-start sm:justify-center">
          <Image
            src={product.mainImage}
            alt={product.name}
            width={500}
            height={500}
            className="w-full sm:w-[500px] object-center object-contain"
          />
        </div>
        <div className="flex-1 sm:items-center sm:justify-start text-left sm:pl-8 lg:ml-[-80px] md:pl-0 sm:pr-8">
          <h1 className='font-bold text-2xl sm:text-3xl md:text-5xl text-[#2C2E74] mb-3'>{product.name}</h1>
          <p className='text-[#2C2E74]  mb-4'>{product.description}</p>
          <p>{product.intro}</p>
          <div className="flex gap-2 pt-3 pb-5">
            {product.size.map((size, index) => (
              <p key={index} className="w-[35px] h-[35px] border border-[#2C2E74] rounded-full text-[#2C2E74] text-xs content-center text-center hover:bg-[#2C2E74] hover:text-white transition duration-200 ease-out cursor-pointer">{size}</p>
            ))}
          </div>
          
          <div  className='pt-2 pb-6'>
          <Accordion title="Size Guide">
          <ul className="list-disc pl-4 ">
              {product.sizeGuide.map((guide, index) => (
              <li key={index} className="text-[#2C2E74] text-xs mb-2">{guide}</li>
             ))}
          </ul>
          </Accordion>

          <Accordion title="Product Composition">
          <ul className="list-disc pl-4 ">
              {product.features.map((feature, index) => (
              <li key={index} className="text-[#2C2E74] text-xs mb-2">{feature}</li>
             ))}
          </ul>
          </Accordion>

          <Accordion title="Units Per Case">
          <ul className="list-disc pl-4 ">
              {product.units.map((unit, index) => (
              <li key={index} className="text-[#2C2E74] text-xs mb-2">{unit}</li>
             ))}
          </ul>
          </Accordion>
          </div>

          <div className='flex gap-x-2 pt-4'>
  <button onClick={() => window.location.href = '/stores'} className="py-2 px-6 text-white bg-[#2C2E74] rounded-md hover:bg-[#1C1E40] transition duration-200 ease-out">
    Buy Now
  </button>
  <a 
  href="/dataSummary.xlsx" target='_blank'
  download="ProductDataSummary.xlsx" 
  className="py-2 px-3 text-[#2C2E74] border-[1px] border-[#2C2E74] bg-[#fff] rounded-md hover:bg-[#1C1E40] hover:text-white transition duration-200 ease-out flex items-center justify-center gap-2">
    Product Data Summary
    {/* Add Download Icon */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className="w-5 h-5"
    >
      <path d="M12 16a1 1 0 0 0 .707-.293l4-4a1 1 0 0 0-1.414-1.414L13 12.586V4a1 1 0 1 0-2 0v8.586L8.707 10.293a1 1 0 0 0-1.414 1.414l4 4A1 1 0 0 0 12 16ZM20 18H4a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2Z" />
    </svg>
  </a>
</div>

          
        </div>
      </section>
      <hr className="h-px my-8 bg-gray-100 border-[0] dark:bg-gray-100"></hr>
      <section className='py-[2%]'>
        <HowTo />
      </section>
      
      <section className=" pt-[3%]">
        <h3 className='md:pl-10 pl-3 pb-4 md:text-4xl  text-2xl text-[#2C2E74] font-bold'>You may also like</h3>
        <HardProducts />
      </section>
    </main>
  );
}

export async function dynamicParams() {
  const products = await fetch('https://your-api-endpoint/products');
  const data = await products.json();

  return data.map((product) => ({
    params: { slug: product.slug },
  }));
}