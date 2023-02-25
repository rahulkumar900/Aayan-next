import React, { Fragment } from "react";
import { ImPinterest2 } from "react-icons/im";
import { CiLinkedin, CiYoutube, CiFacebook, CiInstagram } from "react-icons/ci";
import WeatherDiv from "./Wether/WetherDiv";
export default function Footer() {
 
  return (
    <div className="bg-white border-t px-6 w-full h-auto">
      <div className="max-w-7xl mx-auto py-16">
        <div className="flex flex-row  flex-wrap gap-4  ">
          <div className="flex-auto">
            <div className="text-purple text-lg font-medium ">
              Contact Us
            </div>
            <div className="text-purple text-lg font-medium ">
              Terms & Conditions
            </div>
            <div className="text-purple text-lg font-medium ">
              Privacy Policy
            </div>
            <div className="text-purple text-lg font-medium ">
              Cancellation & Refunds
            </div>
          </div>
          <div className="flex-auto">
            <div>
              <div className="text-lg mb-2 font-medium text-purple ">
                Hear from us
              </div>
              <div className="inline-flex overflow-hidden rounded-md border border-purple">
                <input
                  className="font-normal text-sm px-3 py-3 outline-none"
                  type="email"
                  placeholder="Enter your Email"
                />
                <button
                  className=" text-sm p-2 px-3 bg-purple font-medium text-white"
                  type="Submit"
                >
                  Sign Up
                </button>
              </div>
            </div>
            <div className="mt-3">
              <div className="text-lg font-medium  text-purple">
                Follow Us
              </div>
              <div className="icons flex items-center gap-1 mt-2 ">
                <CiLinkedin size={30} className="text-purple" />
                <CiFacebook size={30} className="text-purple" />
                <CiInstagram size={30} className="text-purple" />
                <CiYoutube size={30} className="text-purple" />
                <ImPinterest2 size={26} className="text-purple" />
              </div>
            </div>
          </div>

          <div className="flex-initial flex gap-4 ">
            <WeatherDiv className="" />
            <iframe
              className=" w-2/3 h-auto "
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15777.399216594597!2d115.1517804!3d-8.6582429!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd247141fd319d1%3A0x2e0c1264fdfe0c6b!2sKokomo%20Villas%20by%20Aayan!5e0!3m2!1sen!2sin!4v1675979065677!5m2!1sen!2sin"
              loading="lazy"
              
            ></iframe>
          </div>
        </div>
        
      </div>
      <div className="border-t py-2">
      <div className="max-w-7xl mx-auto flex justify-center ">
          <div className="text-purple text-sm">Copyright &copy; {new Date().getFullYear()} - Aayan All right reserved.</div>
        </div>
      </div>
      
    </div>
  );
}
