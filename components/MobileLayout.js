// Create a new layout component called MobileLayout.js
import React from 'react'
import MobileNav from './MobileNav'

const MobileLayout = ({ children }) => {
  return (
    <div className="relative h-screen w-full">
      <MobileNav />
      {children}
    </div>
  )
}

export default MobileLayout