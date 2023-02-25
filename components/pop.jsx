import { Popover } from "@headlessui/react";
import { FaWhatsapp, FaAirbnb } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { TbBrandBooking } from "react-icons/tb";
import { BsStars } from "react-icons/bs";

function Pop() {
  return (
    <Popover className="relative">
      <Popover.Button className="outline-none border  rounded bg-purple text-white">
        <div className="px-3 py-2   text-xs font-bold">Reserve</div>
      </Popover.Button>

      <Popover.Panel className="absolute mt-8 -left-16 z-10">
        <div className="flex flex-col rounded-md bg-white divide-y shadow-lg">
          <a
            href="https://wa.me/+6281353669377"
            target="_blank"
            className="px-5 py-3 hover:bg-brown hover:text-white "
          >
            <div className=" flex items-center gap-3 ">
              <FaWhatsapp />
              <span>Whatsapp</span>
            </div>
          </a>
          <a
            className="px-5 py-3 hover:bg-brown hover:text-white"
            href="mailto:support@theaayan.com"
            target="_blank"
          >
            <div className=" flex items-center gap-3 ">
              <CiMail />
              <span>Email</span>
            </div>
          </a>
          <a
            href="http://www.booking.com/hotel/id/kokomo-villas-by-bukit-vista.html"
            target="_blank"
            className="px-5 py-3 hover:bg-brown hover:text-white"
          >
            <div className="flex  items-center gap-3  ">
              <TbBrandBooking />
              <span>Booking.com</span>
            </div>
          </a>
          <a
            href="https://www.airbnb.co.in/rooms/740903561103574134?locale=en&_set_bev_on_new_domain=1675789513_ZjQzYjI1OTE3N2E2&source_impression_id=p3_1676666182_vp3SJPUAepO8V5t2"
            target="_blank"
            className="px-5 py-3 hover:bg-brown hover:text-white"
          >
            <div className=" flex items-center gap-3 ">
              <FaAirbnb />
              <span>Airbnb</span>
            </div>
          </a>
          <a
            className="text-base tracking-tight px-5 py-3 "
            href="/"
            target="_blank"
          >
            <div className=" flex items-center gap-2 ">
              Exclusive Offers
              <BsStars />
            </div>
          </a>
        </div>
      </Popover.Panel>
    </Popover>
  );
}

export default Pop;
