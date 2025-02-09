import React from 'react';
import blob from "../assets/blob.svg";

function Navbar() {
  return (
    <header className='sticky mx-auto top-0 z-30 py-3 bg-orange-300 border-2 border-orange-200 transition-all'>
      <div className='max-w-7xl mx-auto'>
        <div className='hidden md:flex justify-between items-center px-10'>
          <a href="/" className="text-primary font-semibold flex gap-1 items-center">
            <img src={blob} className='w-10' alt="Logo" />
            <div>
              <h2 className='text-gray-900 font-semibold'>Hungry Bites</h2>
            </div>
          </a>
          <div className='flex items-center gap-x-6'>
            <ul className='flex items-center cursor-pointer gap-8 text-black font-semibold'>
              <li className='hover:text-red-500 transition-all'><a href="#hero">Home</a></li>
              <li className='hover:text-red-500 transition-all'><a href="#popular">Popular</a></li>
              <li className='hover:text-red-500 transition-all'><a href="#testimonials">Testimonials</a></li>
              <li className='hover:text-red-500 transition-all'><a href="#contact">Contact</a></li>
              <button className='bg-red-500 px-4 py-2 text-white rounded-lg'>Order Now</button>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
