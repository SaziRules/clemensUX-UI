import React from 'react'
import Subscription from '@/assets/subscriber.png'
import Image from 'next/image'

const Subscriber = () => {
  
  return (
    <div className='flex flex-col lg:flex-row h-auto lg:h-[390px] lg:p-5 gap-5 lg:gap-0'>
      <div className='flex-1 content-center p-5 bg-gradient-to-l from-sky-500 to-indigo-500 mx-[-2rem] sm:mx-[-2rem] lg:mx-0'>
        <h1 className='text-center text-white text-xl sm:text-2xl lg:text-[35px] mx-auto font-sans leading-6 pt-4 sm:pt-7 lg:leading-8 lg:w-[550px] pb-4 lg:pb-7 font-medium'>
          Join our mailing list and live every moment with confidence!
        </h1>
        <div className='text-center w-full max-w-[500px] space-y-2 items-center mx-auto justify-center pb-7 px-4 sm:px-0'>
          <div className='flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 mb-2 justify-center'>
            <input 
              type="text" 
              className="w-full sm:flex-1 rounded-full bg-white px-5 py-2 font-thin text-sm focus:outline-none" 
              placeholder="Enter your name"
            />
            <input 
              type="email" 
              className="w-full sm:flex-1 rounded-full bg-white px-5 py-2 font-thin text-sm focus:outline-none" 
              placeholder="Enter your email"
            />
          </div>
          <button 
            className="bg-white text-sky-500 rounded-full px-5 py-2 text-sm font-medium hover:bg-[#2C2E74] hover:text-white transition duration-300 ease-out w-full"
            
          >
            Subscribe
          </button>
        </div>
      </div>
      <div className='hidden lg:block relative flex-1 items-center justify-center p-5'>
        <Image 
          src={Subscription} 
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: 'cover'}}
          alt="Promo image"
        />
      </div>
    </div>
  )
}

export default Subscriber