import ContactForm from '@/components/ContactForm'
import React from 'react'
import { ImOffice } from "react-icons/im";
import { HiMicrophone } from "react-icons/hi";
import { BsEnvelopePaperFill } from "react-icons/bs";

export default function Contact() {
  return (

    <main className="max-w-7xl mx-[auto] px-8 sm:px-16 md:px-0">
    <section className='pt-[5%]'>
      <ContactForm />
    </section >

    <section className='pt-[15%] md:pt-[3%] pb-[10%]'>
  <div className='flex flex-col sm:flex-row gap-4 mx-[auto] max-w-7xl'>
    <div className='p-10 sm:w-[48%] md:w-[100%] items-center justify-center text-center bg-gradient-to-b from-sky-500 to-indigo-500'>
      <div className='flex items-center justify-center'>
        <ImOffice className='text-white h-[40px] w-[40px]' />
      </div>

      <h1 className='font-bold mt-4 text-3xl text-[#fff]'>Head Office</h1>
      <p className='font-light text-[#fff] text-[16px] pt-2'>Building 3 Bryanston Gate
        170 Curzon Road
        Bryanston, Johannesburg</p>
    </div>

    <div className='p-10 sm:w-[48%] md:w-[100%] items-center justify-center text-center bg-gradient-to-b from-sky-500 to-indigo-500'>
      <div className='flex items-center justify-center'>
        <HiMicrophone className='text-white h-[40px] w-[40px]' />
      </div>

      <h1 className='font-bold mt-4 text-3xl text-[#fff]'>Careline</h1>
      <p className='font-light text-[#fff] text-[16px] pt-2'>011 608 3955<br />
sales@validus.co.za</p>
    </div>

    <div className='p-10 sm:w-[48%] md:w-[100%] items-center justify-center text-center bg-gradient-to-b from-sky-500 to-indigo-500'>
      <div className='flex items-center justify-center'>
        <BsEnvelopePaperFill className='text-white h-[40px] w-[40px]' />
      </div>

      <h1 className='font-bold mt-4 text-3xl text-[#fff]'>Write to us</h1>
      <p className='font-light text-[#fff] text-[16px] pt-2'>Private Bag X85<br />
Bryanston</p>
    </div>
  </div>
</section>
    </main>
    
  )
}