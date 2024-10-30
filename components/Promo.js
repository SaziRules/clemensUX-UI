import Image from 'next/image'
import React from 'react'
import promo from '@/assets/promo.png'

function Promo() {
  return (
    <div className='flex flex-col lg:flex-row h-auto lg:h-[390px] lg:p-5 gap-5 lg:gap-0'>
      <div className='flex-1 content-center p-5 bg-gradient-to-l from-sky-500 to-indigo-500 mx-[-2rem] lg:mx-0'>
        <h1 className='text-center text-white text-2xl lg:text-[35px] mx-auto font-sans leading-6 pt-7 lg:leading-8 lg:w-[550px] pb-4 lg:pb-7 font-medium'>
          With discreet comfort to live every moment with confidence!
        </h1>
        <p className='text-center text-sky-500 bg-white cursor-pointer rounded-full 
        py-2 mb-7 px-3 w-[140px] mx-auto hover:scale-105 transform transition duration-300 ease-out'>
          Learn More
        </p>
      </div>
      <div className='hidden lg:block relative flex-1 items-center justify-center p-5'>
        <Image 
          src={promo} 
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: 'cover'}}
          alt="Promo image"
        />
      </div>
    </div>
  )
}

export default Promo