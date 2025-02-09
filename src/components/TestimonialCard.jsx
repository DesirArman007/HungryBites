import React from 'react';
import star from "../assets/star.png";

function TestimonialCard({ name, rating, text }) {
  return (
    <div className='bg-white w-[320px] h-[160px] border rounded-2xl shadow-amber-600 shadow-[6px_6px_12px_rgba(255,193,7,0.4)] p-4 mb-7 '>
      <div className='flex flex-col items-start justify-center gap-2'>

        <div className='flex items-center gap-2'>
          <h2 className='text-lg text-gray-600 font-semibold'>Rating:</h2>
          {Array.from({ length: rating }).map((_, i) => (
            <img key={i} src={star} className='w-4 h-4' alt="star" />
          ))}
        </div>

        <p className='text-[14px] leading-5 text-justify'>{text}</p>

        <h2 className='text-md font-semibold font-mono'>{name}</h2>
      </div>
    </div>
  );
}

export default TestimonialCard;
