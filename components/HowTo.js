import Image from 'next/image'
import React from 'react'
import promo from '@/assets/promo.png'

function HowTo() {
  return (
    <div className='flex flex-col lg:flex-row h-auto lg:h-[290px] lg:p-5 gap-2 '>
      <div className='flex-1 content-center p-5 bg-gradient-to-l from-sky-500 to-indigo-500 mx-[-2rem] lg:mx-0'>
        <h1 className='text-left text-white text-2xl lg:text-[35px] mx-auto font-sans leading-6 pt-7 lg:leading-8 lg:w-[550px] pb-4 lg:pb-7 font-medium'>
        Not sure how to use and apply this products?
        </h1>
        <button className='text-center text-sky-500 bg-white cursor-pointer rounded-full 
        py-2 ml-4 mb-7 px-3 w-[140px] mx-auto hover:scale-105 transform transition duration-300 ease-out'>
          Learn More
        </button>
      </div>
      <div className='flex-1 content-center p-5 bg-gradient-to-l from-indigo-500 to-sky-500 mx-[-2rem] lg:mx-0'>
        <h1 className='text-left text-white text-2xl lg:text-[35px] mx-auto font-sans leading-6 pt-7 lg:leading-8 lg:w-[550px] pb-4 lg:pb-7 font-medium'>
        Not sure which product is best suitable for you?
        </h1>
        <button className='text-center text-sky-500 bg-white cursor-pointer rounded-full 
        py-2 ml-4 mb-7 px-3 w-[140px] mx-auto hover:scale-105 transform transition duration-300 ease-out'>
          Learn More
        </button>
      </div>
    </div>
  )
}

export default HowTo