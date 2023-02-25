import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import React from "react";
import Swiper from "./Swiper";

export default function slide() {
  return (
    <section id="slides" className=" scroll-mt-24 max-w-7xl px-6 my-8 sm:my-16 mx-auto  ">
      <div className="space-y-2">
        <h2 className="text-center text-2xl sm:text-2xl md:text-3xl text-purple">
          Even an Explorer Needs a Refuge in a Foreign Land
        </h2>
        <p className="font-normal text-justify sm:text-center text-purple">
          Our villas are an eclectic mix of Balinese design infused with
          Mediterranean elements. Our villas give a sense of space thanks to
          clever use of space. Each of our villas features a private terrace/
          private sit-out area and a relaxation pool. Each villa is crafted to
          relax you, soothe you and put you in a great frame of mind for
          exploration.
        </p>
      </div>
      <div className="slider">
        <Swiper />
      </div>
    </section>
  );
}
