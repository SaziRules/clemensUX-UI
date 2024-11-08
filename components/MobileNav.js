'use client'
import { SearchIcon } from '@heroicons/react/solid'
import { RxTextAlignJustify } from 'react-icons/rx'
import React, { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const navLinks = [
  { name: 'Home', href:'/'},
  { name: 'Products', href: '/products' },
  { name: 'About us', href: '/about' },
  { name: 'Articles', href: '/articles' },
  { name: 'Health tips', href: '/healthTips' },
  { name: 'Contact us', href: '/contact' },
];

function MobileNav() {
  const pathname = usePathname()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen)
  }


  return (
    <header className='flex gap-3 sticky top-0 z-50 lg:hidden px-6 py-5  
    items-center shadow-sm'>
      <div className='border rounded-full shadow-md flex-grow items-center 
      py-3 cursor-pointer flex bg-white'>
        <div className='pl-4 items-center flex'>
          <SearchIcon className='h-7 text-[#2C2E74]' />
        </div>
        <div className='flex-grow pl-4'>
        <label className='flex text-sm '>Where to buy?</label>  
         <p className='flex-grow text-xs font-extralight text-gray-400'>Country . Province . City</p>
        </div>
      </div>
      <div className='border rounded-full p-3 cursor-pointer shadow-md bg-white items-center' onClick={handleModalToggle}>
        <RxTextAlignJustify className=' h-8 w-8 text-[#2C2E74]' />
      </div>

      {isModalOpen && (
        <div className='fixed top-0 left-0 w-full h-screen z-50 flex items-center justify-center bg-black bg-opacity-50'>
        <div className='w-full max-w-screen h-full p-6 bg-[#2C2E74] shadow-lg'>
            <div className='flex justify-end'>
              <button className='text-[#2C2E74] hover:text-gray-600 bg-white rounded-full p-3' onClick={handleModalToggle}>
                <svg className='w-7 h-7' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6L18 18'></path>
                </svg>
              </button>
            </div>
            <div className=' mt-8 justify-center'>
            {navLinks.map((link) => (
          <Link 
          key={link.name}
          href={link.href}
          className={`hover:bg-[#237DC0] transition duration-300 ease-out  p-3 flex items-center justify-center
           ${pathname === link.href ? 'bg-[#fff] text-[#2C2E74]' : 'text-[#fff]'}  `}
           onClick={() => setIsModalOpen(false)}>
          <p className='px-2 text-xl text-center font-thin cursor-pointer'>{link.name}</p>
        </Link>
        ))}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default MobileNav