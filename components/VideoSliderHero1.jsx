import React, { useState, useEffect, memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import VideoLink from "../assets/l&f.mp4";
import VideoLink_low from "../assets/l&f_low.mp4";
import VideoLink_mid from "../assets/l&f_mid.mp4";
import thumbnail from "../assets/thumbnail.webp";
import animatedLogo from "../assets/Rahul.svg";
import Image from "next/image"
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
// import { Pagination } from "swiper";
import { Autoplay, Navigation } from "swiper";

// const getVideSrc = (width) => {
//   if (width >= 720) {
//     return VideoLink;
//   }
//   return VideoLink_low;
// };

const VideoSliderHero = () => {
  return (
    <div className="mt-20 relative w-full h-[40vh] md:h-screen  block  bg-black">
      <video
        className="w-full   h-full object-cover"
        loop
        autoPlay
        playsInline
        muted
        poster={thumbnail}
    
      >
        <source src={VideoLink} type="video/mp4" />
        <Image src={thumbnail} alt="video fallback" />
      </video>
      <div className="absolute top-0 left-0 w-full h-full ">
        <div className=" relative flex flex-col w-full gap-10 h-full justify-between py-8 items-center overflow-hidden">
          <div className="w-full h-auto ">
            <div className=" relative lg-container flex  justify-center  ">
              <div className="relative ">
                <Image
                  src={animatedLogo}
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

  // return (
  //   <div className=" mx-auto mt-20 relative">
  //     <div className=" w-full h-full relative ">
  //       <video
  //         className=" relative block object-cover w-full h-full"
  //         loop
  //         autoPlay
  //         playsInline
  //         muted
  //         poster={thumbnail}
  //       >
  //         <source src={VideoLink} type="video/mp4" />
  //       </video>
  //       <div className="absolute top-0 left-0 w-full h-full ">
  //         <div className=" relative flex flex-col w-full gap-10 h-full justify-between py-8 items-center overflow-hidden">
  //           <div className="w-full h-auto ">
  //             <div className=" relative lg-container flex  justify-center  ">
  //               <div className="relative ">
  //                 <Image
  //                   src={animatedLogo}
  //                   className="fill-white  text-white w-auto h-16 sm:h-20"
  //                   alt="logo"
  //                 />
  //               </div>
  //             </div>
  //           </div>
  //           <div className="h-auto flex-auto w-full justify-self-center flex  flex-col justify-end sm:justify-center">
  //             <div className="w-full h-auto ">
  //               <Swiper
  //                 loop={true}
  //                 autoplay={{
  //                   delay: 3500,
  //                   disableOnInteraction: false,
  //                 }}
  //                 modules={[Autoplay]}
  //                 className="mySwiper "
  //               >
  //                 <SwiperSlide className="w-full">
  //                   <h2 className="uppercase text-center text-lg  sm:text-3xl text-white font-bold">
  //                     {" "}
  //                     Unlock Your Inner Explorer{" "}
  //                   </h2>
  //                 </SwiperSlide>
  //                 <SwiperSlide className="w-full">
  //                   <h2 className="uppercase text-center text-lg sm:text-3xl text-white font-bold">
  //                     {" "}
  //                     Unlock the New{" "}
  //                   </h2>
  //                 </SwiperSlide>
  //                 <SwiperSlide className="w-full">
  //                   <h2 className="uppercase text-center text-lg sm:text-3xl text-white font-bold">
  //                     {" "}
  //                     Unlock The difference{" "}
  //                   </h2>
  //                 </SwiperSlide>
  //                 <SwiperSlide className="w-full">
  //                   <h2 className="uppercase text-center text-lg sm:text-3xl text-white font-bold">
  //                     {" "}
  //                     Unlock Forever Etched Memories{" "}
  //                   </h2>
  //                 </SwiperSlide>
  //               </Swiper>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default memo(VideoSliderHero);
