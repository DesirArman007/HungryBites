import React from 'react';
import TestimonialCard from '../components/TestimonialCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

const testimonials = [
  { id: 1, name: "Emily Johnson", rating: 5, text: "The flavors at this restaurant are absolutely incredible! Every dish I've tried has been a delightful experience." },
  { id: 2, name: "Michael Chen", rating: 4, text: "Great food and excellent service. The staff was very attentive and knowledgeable about the menu." },
  { id: 3, name: "Sarah Thompson", rating: 5, text: "This place is a hidden gem! The attention to detail in both the food presentation and taste is remarkable." },
  { id: 4, name: "David Rodriguez", rating: 5, text: "I've been to many restaurants, but this one stands out. The ambiance, the service, and most importantly, the food are all top-notch." },
  { id: 5, name: "Lisa Patel", rating: 4, text: "A wonderful dining experience! The fusion of flavors in their signature dishes is truly unique and delightful." },
  { id: 6, name: "John Smith", rating: 5, text: "Amazing food and great service. Highly recommended!" },
  { id: 7, name: "Sophia Lee", rating: 5, text: "The desserts here are to die for! I can’t get enough of their pastries." },
  { id: 8, name: "Raj Mehta", rating: 3, text: "The ambiance is great, and the food is even better. Perfect place for a date night." },
  { id: 9, name: "Emma Wilson", rating: 5, text: "I've never had a bad experience here. The staff is wonderful and always welcoming!" },
  { id: 10, name: "Oliver Brown", rating: 5, text: "This is my go-to spot for weekend brunch. The food quality is outstanding." },
  { id: 11, name: "Ava Green", rating: 5, text: "The best restaurant in town! Their signature dishes are worth every penny." },
  { id: 12, name: "Liam White", rating: 3, text: "The service was great, and the food was delicious. Will definitely visit again!" }
];

function Testimonials() {
  // Group testimonials in pairs
  const groupedTestimonials = testimonials.reduce((rows, testimonial, index) => {
    if (index % 2 === 0) {
      rows.push([testimonial]);
    } else {
      rows[rows.length - 1].push(testimonial);
    }
    return rows;
  }, []);

  return (
    <div className='bg-white pt-15 px-7 h-[600px]'>
      <h1 className='text-4xl font-bold text-center mb-10'>What Our Customers Say</h1>

      <div className='p-5 '>

        <Swiper
          style={{
            "--swiper-pagination-color": "#EF4444",
            "--swiper-pagination-bullet-inactive-color": "#999999",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bullet-size": "10px",
            "--swiper-pagination-bullet-horizontal-gap": "6px"
          }}
          modules={[Autoplay]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          speed={800}
          slidesPerView={3}
          spaceBetween={-30}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          pagination={{
            el: ".swiper-pagination",
            type: "bullets",
            clickable: true,
            
            
        }}
          className="mySwiper"
        >
          {groupedTestimonials.map((pair, index) => (
            <SwiperSlide key={index} className=' mx-2  '>
              {pair.map((item) => (
                <TestimonialCard key={item.id} name={item.name} rating={item.rating} text={item.text}/>
              ))}
            </SwiperSlide>
          ))}
          <div className='swiper-pagination my-10 gap-1 relative'></div>
        </Swiper>
      </div>
    </div>
  );
}

export default Testimonials;
