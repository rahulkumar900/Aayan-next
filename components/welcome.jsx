import React from "react";
// import Kichenette from "../assets/kitchen.svg";
// import Ballet from "../assets/valet.svg";
// import Location from "../assets/barb.svg";

// import Reception from "../assets/child_care.svg";
// import CTime from "../assets/time.svg";
// import Breakfast from "../assets/breakfast.svg";
// import Dinner from "../assets/dinner.svg";
import Image from "next/image";
export default function Welcome () {
  return (
    <div className="max-w-7xl mx-auto px-4 my-8 sm:my-16 pb-4  ">
      <h2 className="text-center text-2xl sm:text-2xl md:text-3xl text-purple">
        Welcome to Aayan Hospitality - Your Perfect Getaway
      </h2>

      <p className="py-2 mt-2 px-2 text-justify sm:text-center font-normal leading-relaxed text-purple">
        Successful getaways are the ones that can be well imagined well planned
        and well experienced. You are the creator and curator of your own
        exuberant get togethers and escapes. There is no yesterday and no
        tomorrow. Experience the new difference
      </p>

      <div className="mt-6 s w-full h-full">
        <div className="flex flex-row justify-between items-center">
          <div className=" flex-1 flex flex-col items-center justify-between  ">
            <div className="p-2 shrink-0 rounded-full w-16  border-2  h-16 text-purple">
              <Image
                src={"/valet.svg"}
                width={100}
                height={100}
                alt="img"
                className=" fill-purple max-w-full max-h-full"
              />
            </div>

            <div className="text-center text-xs sm:text-sm font-customf  font-normal sm:font-semibold text-purple  mt-6 tracking-tighter">
              Super Valet Service
            </div>
          </div>

          <div className=" flex-1 flex flex-col items-center justify-between">
            <div className="p-2 shrink-0 rounded-full  border-2  w-16 mb-1 h-16 text-purple">
              <Image
                src={"/kitchen.svg"}
                width={100}
                height={100}
                alt="image"
                className=" fill-purple max-w-full max-h-full"
              />
            </div>
            <div className="text-center text-xs sm:text-sm font-customf  font-normal sm:font-semibold text-purple  mt-6 tracking-tighter">
              Kitchenette
            </div>
          </div>

          <div className=" flex-1 flex flex-col items-center justify-between">
            <div className="p-2 shrink-0  rounded-full w-16 border-2  h-16 text-purple">
              <Image
                src={"/barb.svg"}
                width={100}
                height={100}
                alt="image"
                className=" fill-purple max-w-full max-h-full"
              />
            </div>

            <div className="text-center text-xs sm:text-sm font-customf  font-normal sm:font-semibold text-purple  sm:mt-6 tracking-tighter">
              Barbecue & Exclusive Celebrations
            </div>
          </div>

          <div className=" flex-1 flex flex-col items-center justify-between">
            <div className="p-2 shrink-0 rounded-full w-16 border-2  h-16 text-purple">
            <Image
              src={"/child_care.svg"}
              width={100}
                height={100}
              alt="Image"
              className=" fill-purple max-w-full max-h-full"
            />
            </div>
            
            <div className="text-center text-xs sm:text-sm font-customf  font-normal sm:font-semibold text-purple  mt-6 tracking-tighter">
              Childcare Service
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
