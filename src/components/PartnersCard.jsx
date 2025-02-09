import React from 'react'

function PartnersCard({imageUrl}) {
  return (
    <div
        style={
            {
                maskImage: "linear-gradient(to right, hsl(0 0% 0% /0), hsl(0 0% 0% / 1) 10%, hsl(0 0% 0% /1) 90%, hsl(0 0% 0%/0) )",
                WebkitMaskImage: "linear-gradient(to right, hsl(0 0% 0% /0), hsl(0 0% 0% / 1) 10%, hsl(0 0% 0% /1) 90%, hsl(0 0% 0%/0) )",

            }
        }

        className='max-w-6xl mx-auto mt-1 py-2  flex gap-4 flex-nowrap overflow-hidden'
    >

        <div className='flex gap-4 '>
             <div className='shadow-orange-200 shadow-md p-4 w-80 bg-white'>
                <img src={imageUrl} alt='' />
             </div>
        </div>

    </div>
  )
}

export default PartnersCard