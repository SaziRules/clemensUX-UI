"use client"

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import tick from '@/assets/tick.png'

function Articles() {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const query = `*[_type == "post"] | order(publishedAt desc) {
          title,
          "description": excerpt,
          mainImage
        }`
        const data = await client.fetch(query)
        setArticles(data)
      } catch (error) {
        console.error("Error fetching articles:", error)
      }
    }

    fetchArticles()
  }, [])

  return (
    <div className='flex space-x-6 overflow-x-auto md:pl-5 scrollbar-hide py-4'>
      {articles.map((article, index) => (
        <ArticleCard key={index} article={article} />
      ))}
    </div>
  )
}

function ArticleCard({ article }) {
  return (
    <div className='cursor-pointer hover:scale-105 transition transform duration-300 ease-out flex-shrink-0 w-[300px]'>
      <div className='relative h-[240px] w-full mb-4'>
        <Image 
          src={article.mainImage ? urlFor(article.mainImage).url() : 'https://via.placeholder.com/300x240'}
          alt={article.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: 'cover' }}
          className='rounded-lg'
        />
      </div>
      <h3 className='text-[#2C2E74] text-[20px] font-normal leading-tight mb-2 line-clamp-2 h-[50px]'>{article.title}</h3>
      <p className='text-[#2C2E74] text-[14px] font-thin leading-5 mb-4 line-clamp-3 h-[60px]'>{article.description}</p>
      <button className='mt-auto'>
        <Image src={tick} alt='tick' width={56} height={56} />
      </button>
    </div>
  )
}

export default Articles