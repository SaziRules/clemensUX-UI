import React from 'react'
import Features from '@/components/Features'
import Subscriber from '@/components/Subscriber'
import HardProducts from '@/components/HardProducts'
export default function About() {
  
  return (
    <main className="max-w-7xl mx-[auto] px-8 pt-[5%] sm:px-16 md:px-0 ">
    <section className="flex w-full flex-col gap-3 md:flex-row md:items-stretch">
  <div className="flex-1 p-10 md:pr-10 w-full bg-gradient-to-r from-indigo-500 to-sky-500 md:w-1/2">
    <h1 className='md:text-6xl font-bold text-[#fff] pb-4 '>About Clemens</h1>
    <p className='font-light text-[#fff]'>Clemens™ is a proudly South African incontinence product range that has been your partner for over 18 years. Our vast experience within the incontinence category means that we understand your incontinence needs both from a product and lifestyle perspective. Incontinence need not change your daily life – Clemens™ is here to support you and provide you with the right product to keep you clean, dry and odour-free. Our easy-to-understand product range features the latest technology to keep you or your loved one comfortable and protected.</p>
  </div>
  <div className="flex-1 p-10 md:pl-10 w-full bg-gradient-to-r from-sky-500 to-indigo-500 md:w-1/2">
    <h1 className='md:text-6xl font-bold text-[#fff] pb-4 '>Our Promise</h1>
    <p className='font-light text-[#fff]'>We strive to go beyond providing just products. We place a strong emphasis on innovation, ensuring that our incontinence solutions are not only effective but also user-friendly and easy to incorporate into daily routines. Our dedication to quality and reliability means that individuals can trust in our products to provide the support they need to go about their lives with confidence. As we continue to evolve and innovate, our goal remains rooted in enhancing the overall well-being and quality of life for those dealing with incontinence.</p>
  </div>
</section>

    <section className='mb-[5%]'>
    <Features />
    </section>

    <section className="flex w-full flex-col gap-3 md:flex-row md:items-stretch mb-[8%]">
  <div className="flex-1 p-10 md:pr-10 bg-gradient-to-l from-sky-500 to-indigo-500">
    <h1 className='md:text-6xl font-bold text-[#fff] pb-4 '>Commitment</h1>
    <p className='font-light text-[#fff]'>Clemens is dedicated to understanding the impact of incontinence on everyday life, and we are committed to providing effective solutions that enable individuals to live with comfort and confidence. Our range of discreet incontinence products is designed to address the unique needs of those managing bladder control issues. From absorbent pads and protective underwear to skin care and odor control products, Clemens offers a comprehensive selection of high-quality solutions that prioritize comfort, discretion, and peace of mind.</p>
  </div>
  <div className="flex-1 p-10 md:pl-10  bg-gradient-to-l from-indigo-500 to-sky-500">
    <h1 className='md:text-6xl font-bold text-[#fff] pb-4 '>Emphasis</h1>
    <p className='font-light text-[#fff]'>At Clemens, we strive to go beyond providing just products. We place a strong emphasis on innovation, ensuring that our incontinence solutions are not only effective but also user-friendly and easy to incorporate into daily routines. Our dedication to quality and reliability means that individuals can trust in our products to provide the support they need to go about their lives with confidence. As we continue to evolve and innovate, our goal remains rooted in enhancing the overall well-being and quality of life for those dealing with incontinence.</p>
  </div>
</section>

    <section className='mb-[8%]'>
      <HardProducts />
    </section>

    <section className='mb-[10%]'>
      <Subscriber />
    </section>
    

    </main>
  )
}