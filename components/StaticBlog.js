import React from 'react'
import Image from 'next/image'
import blogOne from '@/assets/blog-1.webp'
import blogTwo from '@/assets/blog-2.webp'
import blogThree from '@/assets/blog-3.webp'
import blogFour from '@/assets/blog-4.webp'

const articles = [
  {
    src: blogOne,
    title: 'Symptoms and types of bladder weakness',
    description: 'Bladder weakness is a common problem. It occurs more often as people get older and.',
    href:''
  },
  {
    src: blogTwo,
    title: 'Can bladder weakness be treated?',
    description: 'Living with incontinence can be challenging, but it does not mean giving up on...',
    href:''
  },
  {
    src: blogThree,
    title: 'Managing Incontinence and Staying Healthy',
    description: 'Bladder weakness can be caused by everyday habits, underlying medical conditions or physical problems.',
    href:''
  },
  {
    src: blogFour,
    title: 'Embracing Life’s Changes with Clemens™',
    description: 'Living with incontinence can be challenging, but it doesn’t mean giving up on the quality of life you deserve.',
    href:''
  },
  // Add more range objects as needed
]

const StaticBlog = () => {
  return (
    <section className=' mb-[5%]'>
      <div className='flex space-x-2 overflow-x-auto md:pl-5 scrollbar-hide py-4'>
        {articles.map((article, index) => (
          <div key={index} className='cursor-pointer hover:scale-105 transition transform duration-300 ease-out flex-shrink-0 w-[300px]'>
            <div className='relative h-[240px] w-full mb-4'>
              <Image
                src={article.src}
                alt='Professional Range'
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className='rounded-lg'
                style={{ objectFit: 'cover' }}
              />
            </div>
            <h3 className='text-[#2C2E74] text-[20px] font-normal leading-tight mb-2 line-clamp-2 h-[50px]'>{article.title}</h3>
            <p className='text-[#2C2E74] text-[14px] font-thin leading-5 mb-4 line-clamp-3 h-[60px]'>{article.description}</p>
            <button>
              <Image
                src="/tick.png"
                alt="tick"
                width={56}
                height={56}
                style={{ width: 'auto', height: 'auto' }}
              />
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default StaticBlog