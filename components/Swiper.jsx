import React, { Children, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { BsChevronDown, BsXLg } from "react-icons/bs";
import ChildSlide from "../components/Childslider/ChildSlide";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Navigation, Pagination } from "swiper";
import Image from "next/image";
import Link from "next/link";
export default function SwiperElement() {
  const [sc, sSc] = useState(null);


  return (
    <div className="max-w-7xl mx-auto  ">
      {sc && (
        <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-black ">
          <div className="flex flex-col items-center justify-center relative w-full h-full">
            <div className="absolute top-10 right-10">
              <BsXLg
                onClick={() => sSc(null)}
                className="text-white fill-current cursor-pointer"
              />
            </div>
            <ChildSlide selected={sc}></ChildSlide>
          </div>
        </div>
      )}

      <Swiper
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 20 },

          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        spaceBetween={30}
        loop={true}
        navigation={true}
        // pagination={{
        //   clickable: true,
        // }}
        modules={[Pagination, Autoplay, Pagination, Navigation]}
        className="mySwiper overflow-hidden"
      >
        <SwiperSlide className="my-4 rounded-lg  shadow-md">
          <div className="relative">
            <div className="relative max-w-md mx-auto md:max-w-2xl min-w-0 break-words bg-white w-full  shadow-lg">
              <div className=" flex relative flex-col gap-2 ">
                <Image
                  onClick={() => sSc("satu")}
                  alt="satu"
                  width={500}
                  height={100}
                  className="object-cover"
                  src="https://a0.muscache.com/im/pictures/miso/Hosting-740903561103574134/original/891d8f37-42b0-4715-8b63-66bd96572942.jpeg?im_w=1200"
                />

                <div className="text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full px-4">
                      <h2 className="text-2xl  text-purple ">Satu</h2>
                      <span className="text-purple font-normal">
                        {" "}
                        Satu in Balinese means one
                      </span>
                      <p className="text-sm text-justify tracking-tight line-clamp-4   font-light leading-relaxed text-purple mb-4">
                        Satu is our number one villa. It is our most spacious
                        villa with two bedrooms and a living room. Each bedroom
                        features naturally lit bathrooms. In addition, there is
                        a spacious living room, a kitchenette, a manicured lawn,
                        private pool and a private sit out area to soak in the
                        stunning views of the paddy fields.
                      </p>
                    </div>
                    <Link
                      href="/"
                      className="flex flex-col items-center font-normal font-customf text-purple"
                    >
                      <span className="text-text text-sm font-semibold">
                        Discover Now
                      </span>
                      <BsChevronDown className="animate-bounce" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="my-4 rounded-lg overflow-hidden shadow-md">
          <div className="">
            <div className="relative max-w-md mx-auto md:max-w-2xl min-w-0 break-words bg-white w-full  shadow-lg">
              <div className="flex flex-col gap-2">
                <Image
                  onClick={() => sSc("dua")}
                  alt="dua"
                  width={500}
                  height={100}
                  src="https://a0.muscache.com/im/pictures/miso/Hosting-737275879688000513/original/14c2d66c-3a6c-4326-9f92-858092463790.jpeg?im_w=1200" //Done
                />

                <div className="  text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full px-4">
                      <h2 className="text-2xl  text-purple ">Dua</h2>
                      <span className="text-purple font-normal">
                        {" "}
                        Dua in Balinese means two
                      </span>
                      <p className="text-sm text-justify tracking-tight line-clamp-4  font-light leading-relaxed text-purple mb-4">
                        Our second villa celebrates the monsoon of Bali. The
                        light grey interior with trees is reminiscent of the
                        mist that gathers and covers the trees. The villa
                        includes a single bedroom with a living room kitchenette
                        and a kids room. It has a private pool and terrace to
                        soak in the views of the breathtaking Sunsets.
                      </p>
                    </div>
                    <Link
                      href="/"
                      className="flex flex-col items-center font-normal font-customf text-purple"
                    >
                      <span className="text-sm text-text font-semibold">
                        Discover Now
                      </span>
                      <BsChevronDown className="animate-bounce" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="my-4 rounded-lg overflow-hidden shadow-md">
          <div className="">
            <div className="relative max-w-md mx-auto md:max-w-2xl min-w-0 break-words bg-white w-full  shadow-lg">
              <div className=" flex flex-col gap-2">
                <Image
                  onClick={() => sSc("tiga")}
                  alt="tiga"
                  width={500}
                  height={100}
                  src="https://a0.muscache.com/im/pictures/miso/Hosting-750922057131496616/original/d6d16c34-f9ad-4ca7-b7a2-dc925198f1a2.jpeg?im_w=1200"
                />

                <div className="   text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full px-4">
                      <h2 className="text-2xl  text-purple ">Tiga</h2>
                      <span className="text-purple font-normal">
                        {" "}
                        Tiga in Balinese means three
                      </span>
                      <p className="text-sm text-justify tracking-tight line-clamp-4  font-light leading-relaxed text-purple mb-4">
                        Our third villa represents the cheerfulness and
                        open-hearted ways of Bali &apos; s people. The all-white
                        decor will remind you of Santorini. The villa features a
                        single bedroom, a living room kitchenette and a kid
                        &apos; s room. It also features an open bathtub, a
                        private pool and a terrace ...
                      </p>
                    </div>
                    <Link
                      href="/"
                      className="flex flex-col items-center font-normal font-customf text-purple"
                    >
                      <span className=" text-sm text-text font-semibold">
                        Discover Now
                      </span>
                      <BsChevronDown className="animate-bounce" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="my-4 rounded-lg overflow-hidden shadow-md">
          <div className="">
            <div className="relative max-w-md max-h-full mx-auto md:max-w-2xl min-w-0 break-words bg-white w-full h-full shadow-lg">
              <div className="flex flex-col gap-2 ">
                <Image
                  onClick={() => sSc("empat")}
                  alt="empat"
                  width={500}
                  height={100}
                  src="https://a0.muscache.com/im/pictures/miso/Hosting-750922057131496616/original/e3f36991-e57a-4100-9a4c-c583804b5da8.jpeg?im_w=1200"
                />

                <div className="text-center flex-1">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full px-4">
                      <h2 className="text-2xl  text-purple ">Empat</h2>
                      <span className="text-purple font-normal">
                        {" "}
                        Empat in Balinese means four
                      </span>
                      <p className="text-sm text-justify tracking-tight line-clamp-4  font-light leading-relaxed text-purple mb-4">
                        Our fourth villa &apos; s décor hints at a Moroccan
                        influence. This villa too features a single bedroom with
                        a living area a kitchenette and a kids room with a
                        single bed. A manicured lawn, a pool and a private
                        terrace complete the experience.
                      </p>
                    </div>
                    <Link
                      href="/"
                      className="flex flex-col items-center font-normal font-customf text-purple"
                    >
                      <span className="text-sm text-text font-semibold">
                        Discover Now
                      </span>
                      <BsChevronDown className="animate-bounce" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="my-4 rounded-lg overflow-hidden shadow-md">
          <div className=" ">
            <div className="relative max-w-md mx-auto md:max-w-2xl min-w-0 break-words bg-white w-full  shadow-lg">
              <div className="flex flex-col gap-2">
                <Image
                  onClick={() => sSc("lima")}
                  alt="img"
                  width={500}
                  height={100}
                  src="https://a0.muscache.com/im/pictures/miso/Hosting-753105413354639158/original/da0e6d0d-6692-4dde-bad7-55e76e1e0382.jpeg?im_w=1200"
                />

                <div className="text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full px-4">
                      <h2 className="text-2xl  text-purple ">Lima</h2>
                      <span className="text-purple font-normal">
                        {" "}
                        Lima in Balinese means five
                      </span>
                      <p className="text-sm text-justify tracking-tight line-clamp-4  font-light leading-relaxed text-purple mb-4">
                        Our fifth villa celebrates the beauty of a clear day in
                        Bali. It features traditional Balinese tiles which use
                        blue and floral motifs. The one bedroom, living room and
                        kitchenette unit will refresh and recharge you. Like the
                        other villas, this one too features a manicured lawn, a
                        terrace, and a mini pool.
                      </p>
                    </div>
                    <Link
                      href="/"
                      className="flex flex-col items-center font-normal  text-purple"
                    >
                      <span className="text-sm text-text font-semibold">
                        Discover Now
                      </span>
                      <BsChevronDown className="animate-bounce" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

// Unlock your Inner Explorer & Script your Slay

// Unlock Authentic Hospitality with Intimate luxury Boutigue Hotels and Villas

// Unlock the Experience phase Impressive than a VR headset
