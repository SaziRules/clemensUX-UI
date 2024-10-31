import React from 'react';
import Image from 'next/image';
import productsData from '@/json/products';
import HardProducts from '@/components/HardProducts';

export default function ProductPage({ productId }) {
  console.log('productId:', productId);
  console.log('productsData:', productsData);

  const product = productsData.find((product) => product.id === productId);

  if (!product) {
    return <div>Product not found. Please check the product ID.</div>;
  }

  return (
    <main className="max-w-7xl mx-auto px-8 pt-[5%] sm:px-16 md:px-0">
      <section className="flex flex-col sm:gap-5 sm:px-5 sm:flex-row pb-[3%] pt-7">
        <div className="flex-1 pb-5 items-center sm:items-start sm:justify-center">
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={500}
            className="w-full sm:w-[500px] object-center object-contain"
          />
        </div>
        <div className="flex-1 items-start sm:items-center sm:justify-start text-left sm:pl-8 lg:ml-[-80px] md:pl-0 sm:pr-8">
          <h1 className='font-bold text-2xl sm:text-3xl md:text-5xl text-[#2C2E74] mb-3'>{product.name}</h1>
          <p className='text-[#2C2E74] md:pr-8 mb-4'>{product.description}</p>
          <p>{product.intro}</p>
          <div className="flex gap-2 pt-3 pb-5">
            {product.size.map((size, index) => (
              <p key={index} className="w-[35px] h-[35px] border border-[#2C2E74] rounded-full text-[#2C2E74] text-xs content-center text-center hover:bg-[#2C2E74] hover:text-white transition duration-200 ease-out cursor-pointer">{size}</p>
            ))}
          </div>
          <div>
            <h3 className='text-2xl font-bold text-[#2C2E74]'>Product Features</h3>
            <ul className="list-disc pl-4 pt-2">
              {product.features.map((feature, index) => (
              <li key={index} className="text-[#2C2E74] text-xs mb-2">{feature}</li>
             ))}
          </ul>
          </div>
          <div className='flex gap-x-2 pt-4'>
          <button className="py-2 px-6 text-white bg-[#2C2E74] rounded-md hover:bg-[#1C1E40] transition duration-200 ease-out">Buy Now</button>
          <button className="py-2 px-6 text-[#2C2E74] border-[1px] border-[#2C2E74] bg-[#fff] rounded-md hover:bg-[#2C2E74] hover:text-white transition duration-200 ease-out">Learn More</button>
          </div>
          
        </div>
      </section>
      <hr className="h-px my-8 bg-gray-100 border-[0] dark:bg-gray-100"></hr>
      <section className=" pt-[5%]">
        <h3 className='md:pl-10 pl-3 pb-4 text-4xl text-[#2C2E74] font-bold'>You may also like</h3>
        <HardProducts />
      </section>
    </main>
  );
}