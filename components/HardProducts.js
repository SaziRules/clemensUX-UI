import React from 'react'
import Image from 'next/image'
import washCloth from '@/assets/washcloth.webp'
import uniPants from '@/assets/uni-pants.webp'
import plusSlips from '@/assets/plus-slips.webp'
import dispPants from '@/assets/disp-pants.webp'
import uniPads from '@/assets/uni-pads.webp'
import FemiPants from '@/assets/femi-pants.png'

const products = [
  {
    src: washCloth,
    title: 'Clemens™ Washcloths',
    description: 'Contains aloe vera extract and vitamin E for skin healing and moisturisation.',
    href:''
  },
  {
    src: uniPants,
    title: 'Clemens™ Unisex Pants',
    description: 'Discreet protection for moderate incontinence, every day all day.',
    href:''
  },
  {
    src: plusSlips,
    title: 'Clemens™ Plus Slips',
    description: 'Comfort and protection for heavy incontinence.',
    href:''
  },
  {
    src: dispPants,
    title: 'Disposable Underpad',
    description: 'Contains aloe vera extract and vitamin E for skin healing and moisturisation.',
    href:''
  },
  {
    src: FemiPants,
    title: 'Clemens™ Feminine Pants',
    description: 'Secure and discreet protection for moderate incontinence.',
    href:''
  },
  {
    src: uniPads,
    title: 'Clemens™ Unisex Pads',
    description: 'Superior comfort and protection for severe to very severe incontinence.',
    href:''
  },
  {
    src: plusSlips,
    title: 'Clemens™ Ultra Slips',
    description: 'Comfort and protection for heavy incontinence.',
    href:''
  },
  // Add more range objects as needed
]

const HardProducts = () => {
  return (
    <section className=' mb-[5%]'>
      <div className='flex space-x-2 overflow-x-auto md:pl-5 scrollbar-hide py-4'>
        {products.map((product, index) => (
          <div key={index} className='cursor-pointer hover:scale-105 transition transform duration-300 ease-out flex-shrink-0 w-[300px]'>
            <div className='relative h-[310px] w-[full] mb-4'>
              <Image
                src={product.src}
                alt='Professional Range'
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className='rounded-3xl'
                style={{ objectFit: 'cover' }}
              />
            </div>
            <h3 className='text-[#2C2E74] text-[24px] font-normal'>{product.title}</h3>
            <p className='text-[#2C2E74] text-[14px] font-thin w-[295px] pb-3 leading-5'>{product.description}</p>
            <button>
              <Image
                src="/rating.svg"
                alt="Rating"
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

export default HardProducts