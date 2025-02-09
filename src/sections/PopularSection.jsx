import React from 'react'
import PopularSectionCard from '../components/PopularSectionCard'
import pizza1 from "../assets/pizza1.png"
import pizza2 from "../assets/pizza2.png"
import pizza3 from "../assets/pizza3.png"


function PopularSection() {
  return (
    <div className='bg-gray-900 h-[600px]'>
        <div className='flex flex-col items-center justify-center p-5 max-w-7xl mx-auto relative'>
            <div className='mt-8 mb-6'>
                <h1 className="text-6xl  text-center text-red-500 font-bold">
                Popular Food
                </h1>
                <p className='text-white p-2 font-medium'>Check out our most popular and highly-rated dishes.</p>
            </div>

            <div className='flex gap-10'>
                <PopularSectionCard title="Peporoni Pizza" image={pizza1} />
                <PopularSectionCard title="Sushi Pizza" image={pizza2} />
                <PopularSectionCard title="Margarita Pizza" image={pizza3} />
            </div>
        </div>
    </div>
  )
}

export default PopularSection