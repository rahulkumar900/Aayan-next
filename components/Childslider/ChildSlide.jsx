import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import club1 from "../../assets/club-1.jpg";
// import club2 from "../../assets/club2.webp";
// import club3 from "../../assets/club3.webp";

// import empat1 from "../../assets/empat1.webp";
// import empat2 from "../../assets/empat2.webp";
// import empat3 from "../../assets/empat3.webp";

import Image from "next/image";
// import "./styles.css";

// import required modules
import { Pagination } from "swiper";
import { Autoplay, Navigation } from "swiper";

export default function SwiperElement({ selected }) {
  return (
    <div className=" max-w-4xl mx-auto  relative block opacity-100 w-full h-auto  overflow-hidden  ">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        navigation={true}
        //   autoplay={{
        //     delay: 3500,
        //     disableOnInteraction: false
        // }}
        // pagination={{
        //   clickable: true,
        // }}
        modules={[Pagination, Autoplay, Pagination, Navigation]}
        className="mySwiper overflow-hidden"
      >
        {selected === "satu" && (
          <div className="satu">
            <SwiperSlide className="relative">
              <Image
                
                src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/403329448.jpg?k=514970f46e2f9dbbf69b478ea79823f4baa78910e40e9cf79c1deef90f6ec388&o=&hp=1"
                width={1000}
                height={500}
                alt=""
              />
            </SwiperSlide>

            <SwiperSlide className="relative">
              <Image
              
                width={1000}
                height={500}
                src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/403329459.jpg?k=e2604d21fa83750193328f38ffb389a4b7a8b2a3a6a45f590f7162f66253ac14&o=&hp=1"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide className="relative">
              <Image
              
                width={1000}
                height={500}
                src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/403329469.jpg?k=6ecd22b652fd4ff4efa754466dc0a88afffd825bd1391034ab6dda3183f20b17&o=&hp=1"
                alt=""
              />
            </SwiperSlide>

            <SwiperSlide className="relative">
              <Image
              
                width={1000}
                height={500}
                src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/403329417.jpg?k=e330bde6bcbaa59292bf46ba11b89a7acb10e4a408107260c0e71dc68c9b91f1&o=&hp=1"
                alt=""
              />
            </SwiperSlide>
            {/* <SwiperSlide className="">
          <Image placeholder="blur" src="https://a0.muscache.com/im/pictures/miso/Hosting-740903561103574134/original/891d8f37-42b0-4715-8b63-66bd96572942.jpeg?im_w=1200https://cf.bstatic.com/xdata/images/hotel/max1280x900/403329424.jpg?k=855550f198b65e12781fbf6b808a265cada67e779f5151bd1f97114a6122878f&o=&hp=1" alt="" />
        </SwiperSlide> */}
          </div>
        )}

        {selected === "dua" && (
          <div className="dua">
            <SwiperSlide className="relative">
              <Image
                
                width={1000}
                height={500}
                src="https://a0.muscache.com/im/pictures/miso/Hosting-737275879688000513/original/14c2d66c-3a6c-4326-9f92-858092463790.jpeg?im_w=1200" //Done
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide className="relative">
              <Image
              
                width={1000}
                height={500}
                src="https://a0.muscache.com/im/pictures/miso/Hosting-737275879688000513/original/ce903473-d5b6-4e7d-a1a3-8d1802b34138.jpeg?im_w=1200" //Done
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide className="relative">
              <Image
               
                width={1000}
                height={500}
                src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/403329467.jpg?k=b633dc970fc89d820cb5797575a2827f526c111c091f04930e6990e81f12629d&o=&hp=1" //Done
                alt=""
              />
            </SwiperSlide>

            <SwiperSlide className="relative">
              <Image
               
                width={1000}
                height={500}
                src="https://a0.muscache.com/im/pictures/miso/Hosting-737275879688000513/original/89a0e089-7708-4bf2-8991-2c3d403ca921.jpeg?im_w=1200" // Done
                alt=""
              />
            </SwiperSlide>

            <SwiperSlide className="relative">
              <Image
             
                width={1000}
                height={500}
                src="https://a0.muscache.com/im/pictures/miso/Hosting-737275879688000513/original/088b0a67-7f13-4341-b034-950473c04926.jpeg?im_w=1200"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide className="relative">
              <Image
                
                width={1000}
                height={500}
                src="https://a0.muscache.com/im/pictures/miso/Hosting-737275879688000513/original/6fc45903-dc42-46ed-ae8c-e767b64ead15.jpeg?im_w=1200"
                alt=""
              />
            </SwiperSlide>
          </div>
        )}

        {selected === "tiga" && (
          <div className="tiga">
            {/* ------------------------------- */}
            <SwiperSlide className="">
              <Image
                
                width={1000}
                height={500}
                src="https://a0.muscache.com/im/pictures/miso/Hosting-750922057131496616/original/d6d16c34-f9ad-4ca7-b7a2-dc925198f1a2.jpeg?im_w=1200" //done
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide className="">
              <Image
               
                width={1000}
                height={500}
                src="https://a0.muscache.com/im/pictures/miso/Hosting-750922057131496616/original/4b8bcb84-6c48-4a81-aff5-e36204318c74.jpeg?im_w=1200" // Done
                alt=""
              />
            </SwiperSlide>

            <SwiperSlide className="">
              <Image
             
                width={1000}
                height={500}
                src="https://a0.muscache.com/im/pictures/miso/Hosting-750922057131496616/original/539837ce-bffd-4134-ae70-cea28945f211.jpeg?im_w=1200" //Done
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide className="">
              <Image
               
                width={1000}
                height={500}
                src="https://a0.muscache.com/im/pictures/miso/Hosting-750922057131496616/original/befc8210-26c5-4035-909d-e2adb2086ad6.jpeg?im_w=1200" //Done
                alt=""
              />
            </SwiperSlide>

            {/* <SwiperSlide className="">
          <Image placeholder="blur" src="https://a0.muscache.com/im/pictures/miso/Hosting-740903561103574134/original/891d8f37-42b0-4715-8b63-66bd96572942.jpeg?im_w=1200https://cf.bstatic.com/xdata/images/hotel/max1280x900/403329424.jpg?k=855550f198b65e12781fbf6b808a265cada67e779f5151bd1f97114a6122878f&o=&hp=1" alt="" />
        </SwiperSlide> */}
          </div>
        )}

        {selected === "empat" && (
          <div className="Emapat">
            <SwiperSlide className="">
              <Image
           
                width={1000}
                height={500}
                src="https://a0.muscache.com/im/pictures/miso/Hosting-750922057131496616/original/e3f36991-e57a-4100-9a4c-c583804b5da8.jpeg?im_w=1200" //Done
                alt=""
                className="max-w-full"
              />
            </SwiperSlide>
            <SwiperSlide className="">
              <Image
             
                width={1000}
                height={500}
                src={"/empat1.webp"}
                className="max-w-full max-h-full" //Done
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide className="">
              <Image
             
                width={1000}
                height={500}
                src={"/empat2.webp"}
                className="max-w-full max-h-full" //Done
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide className="">
              <Image
               
                width={1000}
                height={500}
                src={"/empat3.webp"}
                className="max-w-full max-h-full" //Done
                alt=""
              />
            </SwiperSlide>
          </div>
        )}

        {selected === "lima" && (
          <div className="Lima">
            <SwiperSlide className="">
              <Image
                
                width={1000}
                height={500}
                src="https://a0.muscache.com/im/pictures/miso/Hosting-753105413354639158/original/da0e6d0d-6692-4dde-bad7-55e76e1e0382.jpeg?im_w=1200" //done
                alt=""
              />
            </SwiperSlide>

            <SwiperSlide className="">
              <Image
               
                width={1000}
                height={500}
                src="https://a0.muscache.com/im/pictures/miso/Hosting-753105413354639158/original/f35358c8-2c30-4cc2-a570-27cf1c36765d.jpeg?im_w=1200" //done
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide className="">
              <Image
              
                width={1000}
                height={500}
                src="https://a0.muscache.com/im/pictures/miso/Hosting-753105413354639158/original/176b03ba-fbd6-4255-b847-281f4cc8c479.jpeg?im_w=1200" //done
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide className="">
              <Image
               
                width={1000}
                height={500}
                src="https://a0.muscache.com/im/pictures/miso/Hosting-750922057131496616/original/0bd2281a-21ce-4471-ac35-6ad09ee598f7.jpeg?im_w=1200" //done
                alt=""
              />
            </SwiperSlide>
          </div>
        )}

        {selected === "nextup" && (
          <div className="nextup">
            <SwiperSlide className="">
              <Image
                placeholder="blur"
                src={"/club-1.jpg"}
                width={1000}
                height={500}
                className="max-w-full max-h-full"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                placeholder="blur"
                src={"/club2.webp"}
                width={1000}
                height={500}
                className=" "
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                placeholder="blur"
                width={1000}
                height={500}
                src={"/club3.webp"}
                className=""
                alt=""
              />
            </SwiperSlide>
          </div>
        )}
      </Swiper>
    </div>
  );
}

// Unlock your Inner Explorer & Script your Slay

// Unlock Authentic Hospitality with Intimate luxury Boutigue Hotels and Villas

// Unlock the Experience phase Impressive than a VR headset
