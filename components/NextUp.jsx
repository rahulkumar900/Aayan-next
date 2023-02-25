import React, { useState } from "react";
// import club1 from "../assets/club-1.webp";

// import location from "../assets/location.svg";
import ChildSlide from "./Childslider/ChildSlide";
import { BsChevronDown, BsXLg } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
export default function NextUp() {
  const [sc, sSc] = useState(null);
  return (
    <div
      id="nextup"
      className=" scroll-mt-24 space-y-2  max-w-7xl my-8 sm:my-16 mx-auto w-full h-auto"
    >
      <h2 className="text-center mb-6  text-2xl sm:text-2xl md:text-3xl    text-purple  ">
        Next Up
      </h2>
      <div className="flex flex-col sm:flex-row gap-3 ">
        <div className="relative p-4 flex-auto mx-auto  min-w-0 break-words bg-white w-full  border">
          <div className="flex flex-col gap-2 relative">
            <div className="relative flex-auto">
              <Image
                onClick={() => sSc("nextup")}
                alt="Next"
               width={900}
               height={500}
                src={"/club-1.webp"}
                className=""
              />
            </div>
            <div className="text-center ">
              <div className="flex flex-wrap justify-center">
                <div className="w-full px-4">
                  <h2 className="text-xl  text-purple p-2">
                    <a
                      href="https://www.google.com/maps/dir//Kokomo+Club,+Umalas+Bali/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x2dd2479c8cdf33e5:0x8c4a2dea3bf98614?sa=X&ved=2ahUKEwjn1Nu-nZj9AhUx0XMBHRJXCEsQ9Rd6BAhoEAQ"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Kokomo Club, Umalas Bali
                    </a>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" flex flex-auto relative  mx-auto  min-w-0  w-full  border">
          <div className=" flex flex-col gap-2 justify-between items-center w-full h-full p-4 ">
            <div className="bg-purple relative h-80 flex items-center justify-center flex-auto w-full sm:h-full">
              <Image src={"/location.svg"} fill={true} alt="sad" />
            </div>
            <h2 className="text-xl  text-purple p-2 ">
              <Link
                href="https://www.google.com/maps/dir/28.6500709,77.1370109/Kokomo+villas,+Bukit+Uluwatu+Bali/@9.4941783,77.7427535,4z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x2dd247141fd319d1:0x2e0c1264fdfe0c6b!2m2!1d115.1517804!2d-8.6582429"
                target="_blank"
              >
                Kokomo Villa, Bukit{" "}
              </Link>
            </h2>
          </div>
        </div>
      </div>

      {sc && (
        <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-gray-900">
          <div className="flex flex-col items-center justify-center relative w-full h-full">
            <div className="absolute top-10 right-10  ">
              <BsXLg
                onClick={() => sSc(null)}
                className="text-white fill-current cursor-pointer"
              />
            </div>
            <ChildSlide selected={sc}></ChildSlide>
          </div>
        </div>
      )}
    </div>
  );
}
