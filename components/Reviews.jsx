import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from "next/link";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper";
import { Autoplay, Navigation } from "swiper";
import Image from "next/image";
export default function SwiperElement({ selected }) {
  return (
    <div
      id="story"
      className=" scroll-mt-24 max-w-7xl bg-gray-50 mx-auto relative block opacity-100 w-full h-auto  overflow-hidden  "
    >
      <div className="relative   w-full h-full">
        <div className="flex flex-col sm:flex-row gap-8 px-8 py-16 justify-between ">
          <div className="flex gap-4 flex-col justify-center items-center">
            <h2 className="text-2xl text-purple text-center ">
              Stories Review
            </h2>
            <span className="text-purple text-5xl ">4.9</span>
            <div className="text-xl text-white px-2 py-1 bg-purple">
              Excellent
            </div>
          </div>

          <Swiper
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
            }}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            // navigation={true}
            // pagination={{
            //   clickable: true,
            // }}
            modules={[Pagination, Autoplay, Pagination, Navigation]}
            className="mySwiper w-full  flex-auto overflow-hidden"
          >
            <SwiperSlide className="border-2 space-y-4 w-full h-full p-4 rounded-md border-purple">
              <div className="flex items-center gap-4 ">
                <Image
                alt=""
                width={50}
                height={50}
                  src="https://lh3.googleusercontent.com/a-/AD5-WCksXsi2jcsGLS1BlyiN9Qz8Oz9PEKkqqk9ZJ0bsEw=w50-h50-p-rp-mo-br100"
                  className="border-2 p-1 rounded-full border-purple"
                />
                <div className="flex flex-col">
                  <div className="font-medium text-purple">Keith Lee</div>
                  <div className="inline-flex">
                    <FaStar className="fill-brown" />
                    <FaStar className="fill-brown" />
                    <FaStar className="fill-brown" />
                    <FaStar className="fill-brown" />
                    <FaStar className="fill-brown" />
                  </div>
                </div>
              </div>

              <div className="relative  text-purple text-justify tracking-tighter ">
                <Link
                  href="https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSURlbU1TOU9REAE!2m1!1s0x0:0x2e0c1264fdfe0c6b!3m1!1s2@1:CIHM0ogKEICAgIDemMS9OQ%7CCgsI_bnfmQYQsLnXSg%7C?hl=en-US"
                  target="_blank"
                >
                  <p className="indent-6 line-clamp-6">
                    Had the pleasure to stay in this lovely villa overlooking an
                    amazing padi field. Villa Tiga was indeed a luxurious yet
                    private sanctuary that amazed me with its classy and elegant
                    Mediterranean decor. The private pool is amazing too, a
                    perfect space to soak away your blues. The villa is also
                    well equipped with all the modern creature comforts one can
                    expect of a 5-star hotel. Hair dryer, full-size personal
                    fridge,
                  </p>
                </Link>

                <FaQuoteLeft
                  className="absolute fill-purple  top-0 left-0 -z-10"
                  size={20}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="border-2 space-y-4 w-full h-full p-4 rounded-md border-purple">
              <div className="flex items-center gap-4 ">
                <Image
                alt=""
                width={50}
                height={50}
                  src="https://lh3.googleusercontent.com/a-/AD5-WClFNXOqf2gPYzaOo18GsJBnf7ktNZ3UuNerh3pPHA=w50-h50-p-rp-mo-br100"
                  className="border-2 p-1 rounded-full border-purple"
                />
                <div className="flex flex-col">
                  <div className="font-medium text-purple">Eric Sim</div>
                  <div className="inline-flex">
                    <FaStar className="fill-brown" />
                    <FaStar className="fill-brown" />
                    <FaStar className="fill-brown" />
                    <FaStar className="fill-brown" />
                    <FaStar className="fill-brown" />
                  </div>
                </div>
              </div>

              <div className="relative text-purple text-justify tracking-tighter">
                <Link
                  href="https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSURldktMRVJREAE!2m1!1s0x0:0x2e0c1264fdfe0c6b!3m1!1s2@1:CIHM0ogKEICAgIDevKLERQ%7CCgwI1ObzmQYQkPTo3gI%7C?hl=en-US"
                  target="_blank"
                >
                  <p className="indent-6  line-clamp-6">
                    {" "}
                    Stayed in Kokomo for 3 weeks and it has been an absolutely
                    delight. Whether it is the immaculate and calming interior,
                    or the warmth and responsiveness by the hospitality team,
                    everything is just perfect during my stay here. I cannot ask
                    for more!.
                  </p>{" "}
                </Link>

                <FaQuoteLeft
                  className="absolute fill-purple  top-0 left-0 -z-10"
                  size={20}
                />
              </div>
            </SwiperSlide>

            <SwiperSlide className="border-2  space-y-4 w-full h-full p-4 rounded-md border-purple">
              <div className="flex items-center gap-4 ">
                <Image
                 alt="dfsf"
                 width={50}
                 height={50}
                  src="https://lh3.googleusercontent.com/a-/AD5-WCllK19Bv5WAAfficZ1khJAGsaFA12aeAQWF1pJBEQ=w50-h50-p-rp-mo-br100"
                  className="border-2 p-1 rounded-full border-purple"
                />
                <div className="flex flex-col">
                  <div className="font-medium text-purple">Suresh Menon</div>
                  <div className="inline-flex">
                    <FaStar className="fill-brown" />
                    <FaStar className="fill-brown" />
                    <FaStar className="fill-brown" />
                    <FaStar className="fill-brown" />
                    <FaStar className="fill-brown" />
                  </div>
                </div>
              </div>

              <div className="text-purple relative text-justify tracking-tighter">
                <Link href="https://goo.gl/maps/7FbH3YfqLNxBMx5UA" target="_blank">
                  <p className="indent-6  line-clamp-6">
                    {" "}
                    Located close enough to the airport, but not too close to
                    all the hustle and bustle of hectic Bali, the Kokomo Villas
                    by Aayan is a really elegant, comfortable and tastefully
                    decorated villa, with all the necessary creature comforts
                    for an idyllic Bali getaway. To the weary traveller who gets
                    to experience the comforts of this villa, be prepared to be
                    pampered, fawned over and cared for by an excellent team of
                    hosts/staff who personify the spirit of Balinese hospitality
                    and warmth.{" "}
                  </p>
                </Link>
                <FaQuoteLeft
                  className="absolute fill-purple  top-0 left-0 -z-10"
                  size={20}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="border-2  space-y-4 w-full h-full p-4 rounded-md border-purple">
              <div className="flex items-center gap-4 ">
                <Image
                 width={50}
                 height={50}
                alt=""
                  src="https://lh3.googleusercontent.com/a-/AD5-WCnzhpPREgUQkVb2e2MpqikmQxO9uyREzVFkr9rKow=w50-h50-p-rp-mo-br100"
                  className="border-2 p-1 rounded-full border-purple"
                />
                <div className="flex flex-col">
                  <div className="font-medium text-purple">Tracy Dang</div>
                  <div className="inline-flex">
                    <FaStar className="fill-brown" />
                    <FaStar className="fill-brown" />
                    <FaStar className="fill-brown" />
                    <FaStar className="fill-brown" />
                    <FaStar className="fill-brown" />
                  </div>
                </div>
              </div>

              <div className=" relative text-purple text-justify tracking-tighter">
                <Link href="https://goo.gl/maps/yBFx7NyJ2W3Ky2Mw7" target="_blank">
                  <p className="indent-6">
                    It is most amazing place i have been. Thanks for all perfect
                    arrangement :){" "}
                  </p>
                </Link>
                <FaQuoteLeft
                  className="absolute fill-purple  top-0 left-0 -z-10"
                  size={20}
                />
              </div>
            </SwiperSlide>

            <SwiperSlide className="border-2 space-y-4 w-full h-full p-4 rounded-md border-purple">
              <div className="flex items-center gap-4 ">
                <Image
                alt=""
                width={50}
                height={50}
                  src="https://lh3.googleusercontent.com/a-/AD5-WCkjAP8zH6qRKW8KeOW9Lpxm8QrW4LZqfMkzX7el3w=w50-h50-p-rp-mo-br100"
                  className="border-2 p-1 rounded-full border-purple"
                />
                <div className="flex flex-col">
                  <div className="font-medium text-purple">
                    Nikoda Angrisano
                  </div>
                  <div className="inline-flex">
                    <FaStar className="fill-brown" />
                    <FaStar className="fill-brown" />
                    <FaStar className="fill-brown" />
                    <FaStar className="fill-brown" />
                    <FaStar className="fill-brown" />
                  </div>
                </div>
              </div>

              <div className="relative text-purple text-justify tracking-tighter">
                <Link
                  href="https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSUNCbTUyZVRBEAE!2m1!1s0x0:0x2e0c1264fdfe0c6b!3m1!1s2@1:CIHM0ogKEICAgICBm52eTA%7CCgsI_6PZnQYQgOrgbQ%7C?hl=en-US"
                  target="_blank"
                >
                  <p className="indent-6">
                    {" "}
                    Thank you so much for looking after us for our stay! The
                    staff were so helpful and kind. Would definitely stay again!{" "}
                  </p>
                </Link>
                <FaQuoteLeft
                  className="absolute fill-purple  top-0 left-0 -z-10"
                  size={20}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="border-2 space-y-4 w-full h-full p-4 rounded-md border-purple">
              <div className="flex items-center gap-4 ">
                <Image
                alt=""
                width={50}
                height={50}
                  src="https://lh3.googleusercontent.com/a-/AD5-WCkpvaXEqbHNZHXlDq1teWgug45zPZVuwGygWZnPJfc=w50-h50-p-rp-mo-br100"
                  className="border-2 p-1 rounded-full border-purple"
                />
                <div className="flex flex-col">
                  <div className="font-medium text-purple">Marija Mirko</div>
                  <div className="inline-flex">
                    <FaStar className="fill-brown" />
                    <FaStar className="fill-brown" />
                    <FaStar className="fill-brown" />
                    <FaStar className="fill-brown" />
                    <FaStar className="fill-brown" />
                  </div>
                </div>
              </div>

              <div className="relative text-purple text-justify tracking-tighter">
                <Link href="https://goo.gl/maps/ZGTQ6p6voPmXPqnb8" target="_blank">
                  <p className="indent-6">
                    Such a lovely place to stay in the middle of rice field and
                    in the heart of Umalas. Very clean, bright and cozy villas.
                    Thank you very much for having us, we will come back){" "}
                  </p>
                </Link>
                <FaQuoteLeft
                  className="absolute fill-purple  top-0 left-0 -z-10"
                  size={20}
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
