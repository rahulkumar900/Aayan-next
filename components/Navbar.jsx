import react, { Fragment } from "react";
import { FaWhatsapp } from "react-icons/fa";
import logo from "../public/Aayan_unlock.svg";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Pop from "./pop";
import Link from "next/link";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Popover className=" relative z-50">
      <div className="fixed top-0 left-0 w-full  h-auto bg-white">
        <div className="mx-auto max-w-7xl px-6 block relative ">
          <div className="flex items-center justify-between   py-3  ">
            <div className="-my-2 -mr-2 ">
              <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400  hover:text-gray-500 focus:outline-none  ">
                <span className="sr-only">Open menu</span>
                <Bars3Icon
                  className="h-8 w-8 text-purple font-extralight fill-current "
                  aria-hidden="true"
                />
              </Popover.Button>
            </div>

            <Link href="/" className="-mr-10 sm:-mr-20">
              <div className=" flex  flex-col justify-center items-center  text-purple ">
                <div className="text-3xl font-normal sm:text-4xl  tracking-tight">
                  AAYAN
                </div>
                <span className="text-sm font-normal tracking-wide text-purple ">
                  Hospitality
                </span>
              </div>
            </Link>

            <nav className=" md:space-x-4 space-x-2 flex items-center">
              <div className="relative cursor-pointer ">
                <span className="text-purple   font-normal text-lg">
                  <Pop />
                </span>
              </div>

              <Link
                href="https://wa.me/+6281353669377"
                className="hidden md:block text-base font-medium text-gray-500"
              >
                <FaWhatsapp
                  className="w-auto h-8 text-purple 
                "
                />
              </Link>
            </nav>

            {/* <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            <Link
              href="#"
              className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Sign in
            </Link>
            <Link
              href="#"
              className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4  text-base font-medium text-white shadow-sm hover:bg-indigo-700"
            >
              Sign up
            </Link>
          </div> */}
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
          className=""
        >
          <Popover.Panel
            focus
            className="absolute   left-0 2xl:left-60 top-18 origin-top-left transform p-2 transition z-20 sm:max-w-xs "
          >
            <div className=" bg-white shadow-lg  rounded-lg   ">
              <div className="">
                <div className="px-6 flex items-center justify-between">
                  <div className=" py-2 flex  flex-col justify-center items-center  text-purple ">
                    <div className="text-3xl sm:text-4xl  tracking-tight">
                      AAYAN
                    </div>
                    <span className="text-xs tracking-wide ">Hospitality</span>
                  </div>
                </div>

                <nav className="flex flex-col divide-y">
                  <a
                    href="#holidays-concept"
                    className="outline-none px-6 py-3 hover:bg-brown text-purple hover:text-white "
                  >
                    Destinations
                  </a>

                  <a
                    href="#slides"
                    className="px-6 py-3 hover:bg-brown text-purple hover:text-white "
                  >
                    Resorts & Villas
                  </a>
                  <a
                    href="#experience"
                    className="px-6 py-3 hover:bg-brown text-purple hover:text-white "
                  >
                  Experiences
                  </a>
                  <a
                    href="#"
                    className="px-6 py-3 hover:bg-brown text-purple hover:text-white "
                  >
                    Exclusive Offers
                  </a>
                  <a
                    href="#story"
                    className="px-6 py-2 hover:bg-brown text-purple hover:text-white "
                  >
                    Stories
                  </a>
                  <a
                    href="#nextup"
                    className="px-6 py-3 hover:bg-brown text-purple hover:text-white"
                  >
                    <span className=" text-base font-medium  ">
                   Next Up
                    </span>
                  </a>
                </nav>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </div>
    </Popover>
  );
}
