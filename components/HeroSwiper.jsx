import React, { Children, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { BsChevronDown } from "react-icons/bs";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
// import { Pagination } from "swiper";
import { Autoplay, Navigation } from "swiper";
export default function HeroSwiper() {
  return (
    <div className="w-full h-auto ">
      <Swiper
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }} 
        modules={[Autoplay]}
        className="mySwiper "
      >
        <SwiperSlide className="w-full">
          <h2 className=" text-center text-lg  sm:text-3xl text-purple font-bold">
            {" "}
            Unlock Your inner Explorer{" "}
          </h2>
        </SwiperSlide>
        <SwiperSlide className="w-full">
          <h2 className=" text-center text-lg sm:text-3xl text-purple font-bold">
            {" "}
            Unlock the New{" "}
          </h2>
        </SwiperSlide>
        <SwiperSlide className="w-full">
          <h2 className=" text-center text-lg sm:text-3xl text-purple font-bold">
            {" "}
            Unlock Forever Etched Memories{" "}
          </h2>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

// Unlock your Inner Explorer & Script your Slay

// Unlock Authentic Hospitality with Intimate luxury Boutigue Hotels and Villas

// Unlock the Experience phase Impressive than a VR headset
