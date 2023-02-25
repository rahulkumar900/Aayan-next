import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import HeroLogo from "../assets/HeroLogo1.svg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper";
import { Autoplay, Navigation } from "swiper";
export default function Carosual() {
  return (
    <div className="max-w-7xl w-screen overflow-hidden  h-screen mx-auto max-h-[80vh] sm:max-h-[90vh] relative mt-22">
      <div className="absolute top-0 left-0 w-full h-full bg-slate-100">
        <div className="block relative w-full h-full">
          <Swiper
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 5500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay, Pagination, Navigation]}
            className="mySwiper relative w-full h-full "
          >
            <SwiperSlide className=" relative  w-full h-full block">
              <div className="relative w-full h-full">
                <div className="absolute top-0 left-0 w-full h-full ">
                  <div className="relative w-full h-full ">
                    <img
                      className="relative mx-auto w-full h-full object-cover object-center"
                      src="https://a0.muscache.com/im/pictures/miso/Hosting-753105413354639158/original/9b92640b-7212-401e-8c42-3616ea724a00.jpeg"
                    />
                  </div>
                </div>
                <div className="absolute top-14 left-0 w-full h-full  py-28">
                  <div className="relative w-full h-full flex flex-row justify-center items-end   ">
                    <h2 className="text-white font-extrabold  drop-shadow-xl shadow-black sm:text-5xl text-center text-2xl">
                      Unlock Your inner Explorer
                    </h2>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className=" relative  w-full h-full block">
              <div className="relative w-full h-full">
                <div className="absolute top-0 left-0 w-full h-full ">
                  <img
                    className="relative mx-auto w-full h-full object-cover object-center"
                    src="https://a0.muscache.com/im/pictures/miso/Hosting-740903561103574134/original/85a69834-4978-4d82-804e-c2e5c56dfa58.jpeg"
                  />
                  <div className="absolute top-14 left-0 w-full h-full  py-28">
                    <div className="relative w-full h-full flex justify-center items-end ">
                      <h2 className="text-white font-extrabold  drop-shadow-xl shadow-black sm:text-5xl text-center text-2xl">
                        Unlock the New 
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className=" relative  w-full h-full block">
              <div className="relative w-full h-full">
                <div className="absolute top-0 left-0 w-full h-full ">
                  <img
                    className="relative mx-auto w-full h-full object-cover object-center"
                    src="https://a0.muscache.com/im/pictures/miso/Hosting-753105413354639158/original/3d155470-07f5-47cd-b9bf-ea2c5b2a6f91.jpeg"
                  />
                  <div className="absolute top-14 left-0 w-full h-full  py-28">
                    <div className="relative w-full h-full flex justify-center items-end ">
                      <h2 className=" text-white font-extrabold  drop-shadow-xl shadow-black   sm:text-5xl text-center text-2xl">
                        Unlock Forever Etched Memories
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full  z-20">
        <div className="relative w-full h-full">
          <div className=" relative lg-container flex  justify-center  w-full h-full mt-32 ">
            <div className="relative">
              <img
                src={HeroLogo}
                className="fill-white  text-white w-auto h-28 "
                alt="logo"
              />

              <svg
                width="400"
                height="180"
                className="tc absolute top-6 -left-1"
              >
                <rect
                  x="50"
                  y="20 "
                  width="12"
                  height="14"
                  className="animate-[nv_4s_ease-in-out_infinite]"
                  style={{ fill: "white" }}
                />
                Sorry, your browser does not support inline SVG.
              </svg>
              <svg
                width="400"
                height="180"
                className="bc absolute top-14 -left-10"
              >
                <rect
                  className="animate-[nv_4s_ease-in-out_infinite]"
                  x="50"
                  y="20 "
                  width="11"
                  height="14"
                  style={{ fill: "white" }}
                />
                Sorry, your browser does not support inline SVG.
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Unlock your Inner Explorer & Script your Slay

// Unlock Authentic Hospitality with Intimate luxury Boutigue Hotels and Villas

// Unlock the Experience phase Impressive than a VR headset
