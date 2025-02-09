import React from 'react'

function PopularSectionCard({title, description, image}) {
  return (
    <div className='bg-white p-4 flex flex-col items-center gap-3 rounded-4xl'>
        <div>
          <img src={image} alt='pizza' className='w-52 h-52' />
        </div>
        <div className='flex flex-col gap-2'>
          <h3 className='text-lg font-semibold'>{title}</h3>
          <p className=' w-[290px] text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo laudantium hic voluptas.</p>
          <button className='bg-red-500 text-white py-2 rounded-2xl hover:cursor-pointer'>Order Now</button>
        </div>
    </div>
  )
}

export default PopularSectionCard