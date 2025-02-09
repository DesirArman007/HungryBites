import React from 'react'
import appstore from "../assets/appstore.png";
import playstore from "../assets/playstore.png";
import Lottie from 'lottie-react';
import chef from "../assets/ChefAnimation.json"

function Features() {
  return (
    <div className="bg-orange-50 h-[580px]">
        <div className='py-14 flex flex-row'>
            <div className='w-1/2  flex items-center justify-center'>
                <Lottie animationData={chef} className='w-[500px]' />
            </div>

            <div className=' w-1/2 flex flex-col items-center justify-center text-center'>

                <h1 className='text-[50px] font-bold'>Enjoy a Seamless <span className='text-red-500'>Ordering</span> Experience</h1>
                <p className='text-sm py-4 text-gray-500'>From fast delivery to a wide selection of cuisines, our food ordering service has everything you need to satisfy your cravings.</p>
                <div className="flex gap-4 p-5">
                            <img src={appstore} alt="" className="w-18s h-10" />
                            <img src={playstore} alt="" className="w-18s h-10" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Features