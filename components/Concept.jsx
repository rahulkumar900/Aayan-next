import Image from "next/image";
import Link from "next/link";
import React from "react";
// import concept from "../assets/concept.webp"
export default function Concept() {
  return (
    <section id="holidays-concept" className=" scroll-mt-24  max-w-7xl mx-auto px-4 my-8 sm:my-16 pb-4 ">
      <div className="flex gap-2 flex-col">
        <h2 className="text-center text-2xl sm:text-2xl md:text-3xl text-purple">
         Aayan Holiday Concept - Unlock Your Inner Explorer 
        </h2>
       
        
        {/* own  */}

        <div className="flex flex-col gap-3 sm:gap-4 lg:flex-row  mt-4 justify-center items-start ">
          <div className="flex-auto w-full lg:w-1/2 relative">
            <Image src={"/concept.webp"} width={500} height={500} alt="concept" className="w-full h-auto" />
          </div>
          <div className="flex-auto  w-full lg:w-1/2 px-4 lg:px-8">
            <h1 className="text-lg  text-purple font-medium">Kokomo Villa, Umalas Bali</h1>
            <p className="my-4 text-purple md: text-justify text-normal sm:text-lg leading-loose ">
              Kokomo villas by Aayan stands in the middle of verdant paddy
              fields and is equidistant from the hustle and bustle of Canggu and
              Seminyak. The relaxed ambience of Kokomo, Aayan is your retreat
              from the world.
             
            </p>
            <div className="justify-center mt-4 flex">
              <Link
                className="flex-initial text-center border hover:bg-purple hover:text-white border-purple rounded-md text-purple px-3 py-2 "
                href="/"
              >
                Discover Now
              </Link>
            </div>
          </div>
        </div>

        {/* <p className="text-purple text-center my-2 ">Kokomo villa by Aayan stands in the middle of verdant paddy fields and is
equidistant from the hustle and bustle of Canguu and Seminyak. The relaxed
ambience of Kokomo, Aayan is your retreat from the world.</p>
  <div className="justify-center flex">

      <a className="flex-initial text-center border border-black text-purple px-3 py-2 " href="/">EXPLORE</a>
  </div> */}
      </div>
    </section>
  );
}
