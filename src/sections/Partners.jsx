import React from 'react'
import PartnersCard from '../components/PartnersCard'
import swiggy from "../assets/swiggy.png"
import zomato from "../assets/zomato.png"
import magicpin from "../assets/magicpin.png"
import chowman from "../assets/Chowman-Logo.png"

function Partners() {
  return (
    <div className='bg-orange-100 h-[380px] py-12 '>
        <div className=' flex flex-col items-center justify-center text-center gap-5'>
            <h2 className='text-4xl font-semibold'>Out Partners</h2>
            <p className='px-3 text-md opacity-75'>Ipsam,  est neque alias repellendus sed officia. Exercitationem velit quo soluta voluptatum dicta quaerat voluptate officiis corporis facilis! Veritatis voluptates repudiandae libero ducimus odio quod nemo eveniet enim ipsum numquam?</p>
            <div
                style={
                    {
                        maskImage: "linear-gradient(to right, hsl(0 0% 0% /0), hsl(0 0% 0% / 1) 10%, hsl(0 0% 0% /1) 90%, hsl(0 0% 0%/0) )",
                        WebkitMaskImage: "linear-gradient(to right, hsl(0 0% 0% /0), hsl(0 0% 0% / 1) 10%, hsl(0 0% 0% /1) 90%, hsl(0 0% 0%/0) )",

                    }
                }

                className='max-w-6xl mx-auto mt-10 py-2  flex gap-4 flex-nowrap overflow-hidden'
            >

                <div className='flex gap-4 loop-scroll '>
                    <div className='shadow-orange-200 shadow-md p-4 w-80 bg-white'>
                        <img src={swiggy} alt='' />
                    </div>
                    <div className='shadow-orange-200 shadow-md p-4 w-80 bg-white'>
                        <img src={zomato} alt='' />
                    </div>
                    <div className='shadow-orange-200 shadow-md p-4 w-80 bg-white'>
                        <img src={chowman} alt='' />
                    </div>
                    <div className='shadow-orange-200 shadow-md p-4 w-80 bg-white'>
                        <img src={magicpin} alt='' />
                    </div>
                </div>
                <div className='flex gap-4 loop-scroll '>
                    <div className='shadow-orange-200 shadow-md p-4 w-80 bg-white'>
                        <img src={swiggy} alt='' />
                    </div>
                    <div className='shadow-orange-200 shadow-md p-4 w-80 bg-white'>
                        <img src={zomato} alt='' />
                    </div>
                    <div className='shadow-orange-200 shadow-md p-4 w-80 bg-white'>
                        <img src={chowman} alt='' />
                    </div>
                    <div className='shadow-orange-200 shadow-md p-4 w-80 bg-white'>
                        <img src={magicpin} alt='' />
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Partners