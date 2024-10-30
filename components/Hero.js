import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import MobileLayout from '@/components/MobileLayout'

const Hero = ({ 
  imageUrl, 
  title, 
  subtitle, 
  primaryButtonText, 
  primaryButtonLink, 
  secondaryButtonText, 
  secondaryButtonLink 
}) => {
  return (
    <MobileLayout>
      <div className="relative h-[50vh] sm:h-[40vh] lg:h-[50vh] xl:h-[60vh] w-full">
        <div className="absolute top-0 left-0 w-full h-full">
          <Image
            src={imageUrl}
            alt={title}
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 bg-[#000] bg-opacity-40" />
        </div>
        <div className="max-w-7xl mx-[auto] px-4 sm:px-8 md:px-12 absolute inset-0 flex flex-col items-left justify-center text-left text-white p-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            {title}
          </h1>
          <p className="text-xl sm:text-2xl max-w-[700px] lg:text-3xl mb-8">
            {subtitle}
          </p>
          <div className="flex sm:flex-row gap-2">
            <Link href={primaryButtonLink} passHref>
              <button className="bg-[#237DC0] hover:bg-[#1e6ca8] text-white font-bold py-2 px-6 rounded-full transition duration-300">
                {primaryButtonText}
              </button>
            </Link>
            <Link href={secondaryButtonLink} passHref>
              <button className="bg-transparent hover:bg-white hover:text-[#237DC0] text-white font-bold py-2 px-6 rounded-full border-2 border-white transition duration-300">
                {secondaryButtonText}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </MobileLayout>
  )
}

export default Hero