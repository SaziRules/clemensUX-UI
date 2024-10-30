import HardProducts from '@/components/HardProducts'
import React from 'react'

export default function Products() {
  return (
    <div>
        <main className="max-w-7xl mx-[auto] px-8 sm:px-16 md:px-0">
        <section className="pt-[2%]">
          <div>
            <div className="flex items-center justify-center pb-[5%]">
              <h1></h1>
            </div>
            <HardProducts />
            </div>     
        </section>
        </main>
    </div>
  )
}
