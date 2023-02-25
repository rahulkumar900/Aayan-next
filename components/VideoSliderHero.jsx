import React, { memo } from "react";

import ReactPlayer from "react-player";
import { Swiper, SwiperSlide } from "swiper/react";
// import VideoLink from "../public/l&f.mp4";
// import VideoLink_low from "../public/l&f_low.mp4";
// import thumbnail from "../public/thumbnail.webp";
// import animatedLogo from "../public/Rahul.svg";
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Navigation } from "swiper";
import Image from "next/image";

const getVideSrc = (width) => {
  // if (width >= 720) {
  //   return VideoLink;
  // }
  return VideoLink_low;
};

const VideoSliderHero = () => {
  // const src = getVideSrc(window.innerWidth);
  return (
    <div className="relative mt-20  ">
     
        <ReactPlayer
          className="react-player relative "
          url={"/l&f.mp4"}
          width="100%"
          height="100%"
          playing
          loop={true}
          muted={true}
          playsinline={true}
          autoPlay={true}
          config={{
            file: { 
              attributes: { 
                poster: '/thumbnail.webp'
              } 
            } 
          }}
        />
  

      <div className="absolute top-0 left-0 w-full h-full ">
        <div className=" relative flex flex-col w-full gap-10 h-full justify-between py-8 items-center overflow-hidden">
          <div className="w-full h-auto ">
            <div className=" relative lg-container flex  justify-center  ">
              <div className="relative ">
                <Image
                  src="/Rahul.svg"
                  width={100}
                  height={100}

                  className="fill-white  text-white w-auto h-16 sm:h-20"
                  alt="logo"
                />
              </div>
            </div>
          </div>
          <div className="h-auto flex-auto w-full justify-self-center flex  flex-col justify-end sm:justify-center">
            <div className="w-full h-auto ">
              <Swiper
                loop={true}
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="mySwiper "
              >
                <SwiperSlide className="w-full">
                  <h2 className="uppercase text-center text-lg  sm:text-3xl text-white font-bold">
                    {" "}
                    Unlock Your Inner Explorer{" "}
                  </h2>
                </SwiperSlide>
                <SwiperSlide className="w-full">
                  <h2 className="uppercase text-center text-lg sm:text-3xl text-white font-bold">
                    {" "}
                    Unlock the New{" "}
                  </h2>
                </SwiperSlide>
                <SwiperSlide className="w-full">
                  <h2 className="uppercase text-center text-lg sm:text-3xl text-white font-bold">
                    {" "}
                    Unlock The difference{" "}
                  </h2>
                </SwiperSlide>
                <SwiperSlide className="w-full">
                  <h2 className="uppercase text-center text-lg sm:text-3xl text-white font-bold">
                    {" "}
                    Unlock Forever Etched Memories{" "}
                  </h2>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(VideoSliderHero);
