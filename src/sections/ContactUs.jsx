import React from 'react'
import Lottie from 'lottie-react';
import contactUs from "../assets/ContactUs.json"

function ContactUs() {
  return (
    <div className='bg-white h-[500px] pb-2'>
      <div className='py-2 flex flex-col items-center'>
        <div className='flex flex-col gap-3 items-center'>
          <h1 className='text-center text-4xl font-bold text-red-600'>Contact Us</h1>
          <p className='text-md font-medium opacity-75 text-center'>Enjoy a Seamless Ordering Experience</p>
        </div>

        <div className='flex flex-row w-full gap-9 max-w-5xl mx-auto'>
          <div className='w-1/2 flex items-center justify-center'>
            <Lottie animationData={contactUs} className='w-[400px] h-[400px]' />
          </div>

          <div className='w-1/2 flex flex-col items-center justify-center text-center'>
            <form className="w-full max-w-md space-y-4">
              <input type="text" placeholder="Your Name" className="border p-2 w-full rounded-md" />
              <input type="email" placeholder="Your Email" className="border p-2 w-full rounded-md" />
              <textarea placeholder="Your Message" className="border p-2 w-full rounded-md"></textarea>
              <button className="bg-red-600 text-white py-2 px-4 rounded-md">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
