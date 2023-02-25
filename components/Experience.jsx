import Image from "next/image";
import React from "react";
// import experience from '../assets/experience.png';
export default function Experience() {
  return (
    <div
      id="experience"
      className="scroll-mt-24 space-y-2  max-w-7xl mx-auto px-4 md:px-0 my-8 sm:my-16 pb-4 "
    >
      <h2 className="text-center mb-6 text-2xl sm:text-2xl md:text-3xl text-purple">
        Experience the Difference
      </h2>

      {/* <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 ">
        <div className="card-1 p-4 border-2 border-purple  rounded-md">
          <h3 className="text-lg font-semibold text-purple">
            {" "}
            Super Valet at your service
          </h3>
          <p className="text-base font-normal text-purple">
            {" "}
            All our Villas are serviced by a Super Valet who can organise
            anything for you. They are trained to cook, clean, organise
            barbecues, even cater for small parties, provide you with local
            knowledge, arrange market expeditions, organise picnics. In fact,
            once you are in you will feel pampered without our staff ever being
            obtrusive.
          </p>
        </div>
        <div className="card-2 p-4 border-2 border-purple  rounded-md">
          <h3 className="text-lg font-semibold text-purple">
            Activities at the Villa
          </h3>
          <ul className=" list-disc list-inside  text-base font-normal text-purple">
            <li>Indoor Activities</li>
            <li>Board Games </li>
            <li>Carrom Reading </li>
            <li>Room Cards</li>
          </ul>
        </div>
        <div className="card-3 p-4 border-2 border-purple  rounded-md">
          <h3 className="text-lg font-semibold text-purple">
            Creative Activities for Kids
          </h3>
          <ul className=" list-disc list-inside text-base font-normal text-purple">
            <li> Block Building </li>
            <li> Art And Craft Activities</li>
            <li> Fun With Clay</li>
            <li> World Around Me And We</li>
            <li> Puzzles</li>
            <li> Number Fun </li>
            <li>Cooperative Learning</li>
            <li>Mini Chefs (Learn Balinese Dishes)</li>
          </ul>
        </div>
        <div className="card-4 p-4 border-2 border-purple  rounded-md">
          <h3 className="text-lg font-semibold text-purple">
            Outdoor Activities for Kids
          </h3>
          <ul className=" list-disc list-inside text-base font-normal text-purple">
            <li> Art Classes </li>
            <li> Workshop - Coffee Studio </li>
            <li> Balinese Dance Lessons for Children </li>
            <li> Yoga Classes </li>
            <li> Kids Club </li>
            <li> The Garden Kids Club </li>
            <li>
              <b> Babysitting facility </b> is available for 4, 6 & 8 hours{" "}
            </li>
          </ul>
        </div>
        <div className="card-5 p-4 border-2 border-purple  rounded-md">
          <h3 className="text-lg font-semibold text-purple">
            Vintage Car Rides for the family
          </h3>
          <p className="text-base font-normal text-purple">
            One can enjoy a feel of luxury and vintage in a Volkswagen Combi
            1972, 1973 and 1982 models. To add to the experiences, we also have
            a Volkswagen Safari modelled in 1976
          </p>
        </div>
        <div className="card-6 p-4 border-2 border-purple  rounded-md">
          <h3 className="text-lg font-semibold text-purple">
            Thinking of places to visit Around!
          </h3>
          <p className=" text-purple  tracking-normal font-medium">
            Happy to share a few Kokomo Recommendations in the Radius of 5 kms
          </p>
          <ul className="list-disc list-inside text-base font-normal text-purple">
            <li> Finns Beach Club</li>
            <li> Potato Head Beach Club</li>
            <li> Ku De Ta</li>
            <li> Atlas Beach Club</li>
            <li> The Mail Room</li>
            <li> Motel Mexicolala Favela</li>
            <li> Shi Shi</li>
          </ul>
        </div>
      </div> */}

      <div className="flex gap-4 flex-wrap sm:flex-nowrap px-6" >
        <div className="flex-auto relative">

        <Image src={"/experience.png"} fill={true} alt="img" className="max-w-full max-h-full" />
        </div>
        <div className="flex-auto px-4">
          <p className=" text-purple tracking-tight text-justify text-normal sm:text-lg sm:leading-loose ">
            All our Villas are serviced by a Super Valet who can organise
            anything for you. They are trained to cook, clean, organise
            barbecues, even cater for small parties, provide you with local
            knowledge, arrange market expeditions, organise picnics. In fact,
            once you are in you will feel pampered without our staff ever being
            obtrusive.
          </p>
          <p className="text-purple tracking-tight text-justify text-normal sm:text-lg sm:leading-loose ">One can enjoy a feel of luxury and vintage in a Volkswagen Combi and Volkswagen Safari. </p>
        </div>
      </div>
    </div>
  );
}
