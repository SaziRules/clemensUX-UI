import React from 'react'
import Image from 'next/image'
import consumer from '@/assets/consumer.png'
import pro from '@/assets/pro.png'
import extras from '@/assets/extras.png'
import buy from '@/assets/buy.png'
import tips from '@/assets/tips.png'
import author from '@/schemaTypes/author'

const ranges = [
  { src: consumer, title: 'Consumer Range', description: 'Comfort and protection for consumer incontinence.' },
  { src: pro, title: 'Professional Range', description: 'Professional incontinence product range, your partner for over 18 years.' },
  { src: extras, title: 'Accessories', description: 'The latest absorbency technology to keep you dry, day and night.' },
  { src: buy, title: 'Where to buy', description: 'You can find Clemens™ products in-store at popular select retail stores.' },
  { src: tips, title: 'What to buy', description: 'practical advice, support, and resources to manage incontinence.' },
  { src: pro, title: 'Knowledge Hub', description: 'Connect with others who understand and share your experiences.' },
]


function RanjeCard() {
  return (
    <div className='flex space-x-2 overflow-x-auto md:pl-5 scrollbar-hide py-4'>
      {ranges.map((range, index) => (
        <div key={index} className='cursor-pointer hover:scale-105 transition transform duration-300 ease-out flex-shrink-0 w-[300px]'>
        <div className='relative h-[310px] w-[full] mb-4'>
        <Image 
              src={range.src} 
              alt='Professional Range'
              fill 
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className='rounded-3xl'
              style={{ objectFit: 'cover' }}
            />
        </div>
        <h3 className='text-[#2C2E74] text-[24px] font-normal'>{range.title}</h3>
        <p className='text-[#2C2E74] text-[14px] font-thin w-[295px] leading-5'>{range.description}</p>
        <button>
        <Image 
          src="/tick.png"
          alt="Tick"
          width={20}
          height={20}
        /></button>
      </div>
       
      ))}
    </div>
  )
      }

  export default RanjeCard