import Image from 'next/image'
import React from 'react'
import Doctors from '@/assets/appointments-bg.png'

function Doctor() {
  return (
    <div className='flex flex-col lg:flex-row h-auto lg:h-[390px] lg:p-5 gap-5 lg:gap-0'>
      <div className="hidden lg:block relative flex-1 items-center justify-center p-5">
        <Image 
          src={Doctors} 
          fill 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: 'cover'}}
          alt="Medical professionals"
        />
      </div>
      <div className='flex-1 content-center p-5 bg-gradient-to-l from-sky-500 to-indigo-500 mx-[-2rem] pb-10 sm:mx-[-2rem] lg:mx-0'>
        <div className="max-w-md mx-auto">
          <h1 className='text-center text-white text-xl sm:text-2xl lg:text-[35px] font-sans leading-6 sm:leading-7 lg:leading-8 pt-4 sm:pt-7 pb-4 lg:pb-7 font-medium'>
            Are you a medical professional?
          </h1>
          <p className='text-center text-white font-thin leading-5 sm:leading-6 pb-5 sm:pb-7 text-sm sm:text-[14px]'>
            If you are unsure which Clemens product is right for you or for your loved one, request a FREE sample by clicking the button below to submit a request form.
          </p>
          <div className='text-center'>
            <button className='text-sky-500 bg-white cursor-pointer rounded-full py-2 px-6 hover:scale-105 transform transition duration-300 ease-out inline-block'>
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Doctor