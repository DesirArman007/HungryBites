import React from "react";
import pizza from "../assets/pizza.webp";
import appstore from "../assets/appstore.png";
import playstore from "../assets/playstore.png";
import time from "../assets/time.png";
import star from "../assets/star.png";
import tomatocut from "../assets/tomatocut.png";
import cabbage from "../assets/cabbage.png";
import { Typewriter } from "react-simple-typewriter";

function Hero() {
  return (
    <div className="bg-orange-50 h-[600px] relative overflow-hidden">
      <div className="flex items-center justify-center p-5 max-w-7xl mx-auto">
        <div className="w-1/2 space-y-6 px-10">
          
          <div className="flex gap-4">
            <img
              src={appstore}
              alt="Download on the App Store"
              className="w-28 h-10 transition ease-in-out duration-300 hover:scale-110"
            />
            <img
              src={playstore}
              alt="Get it on Google Play"
              className="w-28 h-10 transition ease-in-out duration-300 hover:scale-110"
            />
          </div>

          <h1 className="text-6xl text-start font-bold">
            <span className="text-red-500">Delicious</span> Meals Delivered to
            Your Doorsteps.
          </h1>

          <p className="text-start text-sm opacity-75">
            Discover a world of culinary delights with our food delivery
            service. Enjoy fast, reliable delivery and a wide selection of
            mouthwatering dishes.
          </p>
          <div className="flex gap-3 items-start">
            <button className="bg-red-500 z-10 rounded-lg text-white py-2 px-4 transition-all duration-300 hover:bg-red-600">
              Order Now
            </button>
            <button className="bg-white rounded-lg text-black py-2 px-4 border border-red-600 transition-all duration-300 hover:bg-red-50">
              Contact Now
            </button>
          </div>
        </div>

        <div className="w-1/2 relative">
        <img src={pizza} alt="pizza" className=" mx-auto spin" />

          <div className="flex items-center w-36 bg-white border gap-1 border-red-600 absolute py-2 px-3 rounded-[50px] bottom-16 right-14 transition ease-in-out duration-300 hover:scale-90 ">
            <img src={time} className="w-12 h-12" />
            <p className="text-sm leading-4 font-semibold">
              Super Fast Delivery
            </p>
          </div>

          <div className="flex flex-col items-center w-32 bg-red-100 gap-1 py-2 px-3 border border-red-400 rounded-full absolute top-10 right-[5.5rem] transition-transform ease-in-out duration-300 hover:scale-90">
            <p className="text-sm font-semibold">Good Rating</p>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <img key={i} src={star} className="w-4 h-4" alt="Star Rating" />
              ))}
            </div>
          </div>

          <div className="flex items-center w-28 bg-white border gap-1 border-red-600 absolute py-2 px-2 rounded-[50px] top-16 left-14 transition ease-in-out duration-300 hover:scale-90">
            <p className="text-sm leading-4 font-semibold">
              <span className="text-xl text-red-500">100+</span> Restaurants
            </p>
          </div>

          <div className="flex items-center w-28 absolute py-2 px-2 rounded-[50px] bottom-16 left-0 transition ease-in-out duration-300 hover:scale-90">
            <img src={tomatocut} alt=" " />
          </div>
        </div>
      </div>

      <img
        src={cabbage}
        className="absolute top-[410px] left-5 w-44 z-0"
        alt="Cabbage Decoration"
        aria-hidden="true"
      />
    </div>
  );
}

export default Hero;
