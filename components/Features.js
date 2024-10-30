import React from 'react'
import Image from 'next/image'
import Pro from '@/assets/pro.png'

const ranges = [
  {
    src: '/assets/pro.png',
    title: 'Accident free',
    description: 'Our incontinence products feature extra leak protection for enhanced security.',
  },
  {
    src: '/assets/pro.png',
    title: 'Comfortable',
    description: 'Anatomically shaped and ergonomically designed with ultimate comfort in mind.',
  },
  {
    src: '/assets/pro.png',
    title: 'PH Neutral',
    description: 'Support skin health and integrity for comfort and confidence during incontinence.',
  },
  {
    src: '/assets/pro.png',
    title: 'Odour neutralising',
    description: 'Advanced odor-neutralizing technology designed to eliminate unpleasant odors.',
  },
  // Add more range objects as needed
]

const Features = () => {
  return (
    <section className='mt-[6%] mb-[5%]'>
      <div className='flex space-x-2 overflow-x-auto md:pl-5 scrollbar-hide py-4'>
        {ranges.map((range, index) => (
          <div key={index} className='cursor-pointer hover:scale-105 transition transform duration-300 ease-out flex-shrink-0 w-[300px]'>
            <div className='relative h-[310px] w-[full] mb-4'>
              <Image
                src={Pro}
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
              />
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features