import React from 'react'
import Articles from "@/components/Articles";

export default function Blog() {
  return (
    <div>
      <main className="max-w-7xl mx-[auto] px-8 sm:px-16 md:px-0">
        <section className="pt-[7%]">
          <div>
            <Articles />
            </div>     
        </section>
        </main>
    </div>
  )
}
