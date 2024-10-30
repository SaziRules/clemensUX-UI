"use client"

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { client, urlFor } from '@/lib/sanity'
import { groq } from 'next-sanity'

function ProductSlider() {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchProducts() {
      const query = groq`
        *[_type == "product"] {
          _id,
          title,
          summary,
          mainImage,
          ratingImage,
          slug
        }
      `
      try {
        const fetchedProducts = await client.fetch(query)
        setProducts(fetchedProducts)
      } catch (error) {
        console.error("Failed to fetch products:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchProducts()
  }, [])

  if (isLoading) {
    return <div>Loading products...</div>
  }

  return (
    <div className='flex space-x-6 overflow-x-auto md:pl-5 scrollbar-hide py-4'>
      {products.map((product) => (
        <div key={product._id} className='cursor-pointer hover:scale-105 transition transform duration-300 ease-out'>
          {product.mainImage && (
            <div className='relative h-[310px] w-[300px] items-center'>
              <Image 
                src={urlFor(product.mainImage).url()}
                alt={product.title}
                fill 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className='rounded-3xl'
                style={{ objectFit: 'cover' }}
              />
            </div>
          )}
          <h3 className='text-[#2C2E74] text-[24px] font-normal'>{product.title}</h3>
          <p className='text-[#2C2E74] text-[14px] font-thin w-[295px] leading-5 pb-2'>
            {product.summary}
          </p>
          {product.ratingImage && (
            <Image 
              src={urlFor(product.ratingImage).url()}
              alt={`${product.title} rating`}
              width={56} 
              height={56}
              style={{ width: 'auto', height: 'auto' }} 
            />
          )}
        </div>
      ))}
    </div>
  )
}

export default ProductSlider