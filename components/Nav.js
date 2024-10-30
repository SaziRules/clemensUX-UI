import { SearchIcon } from '@heroicons/react/solid'
import { HeartIcon, UserCircleIcon, } from '@heroicons/react/outline'
import React from 'react'

function Nav() {
  return (
    <nav className='sticky bottom-0 flex justify-center md:hidden items-center py-4'>
      <div className='flex items-center'>
        <div className=' items-center px-10'>
            <SearchIcon className='h-7 text-[#ff385c]' />
            <p className='text-xs text-[#ff385c] py-0.5 font-light'>Explore</p>
        </div>
        <div className='items-center px-10 text-center'>
            <HeartIcon className='h-7 text-gray-500 text-center' />
            <p className='text-xs text-gray-500 text-center py-0.5 font-light'>Wishlists</p>
        </div>
        <div className=' items-center px-10'>
            <UserCircleIcon className='h-7 text-gray-500' />
            <p className='text-xs text-gray-500 py-0.5 font-light'>Login</p>
        </div>

      </div>
    </nav>
  )
}

export default Nav
