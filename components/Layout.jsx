import { useState, useEffect } from "react";
import Footer from "./Footer";
// import Navbar from "./Navbar";
import dynamic from "next/dynamic";
import Image from "next/image";
import StickyBar from "./StickyBar";

const Navbar = dynamic(() => import("./Navbar"));

export default function Layout({ children }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4250);
  }, []);

  return (
    <>
      <div className={loading? "w-screen h-screen flex justify-center items-center overflow-hidden z-50": "hidden"}>
        <div className="relative w- h-auto bg-white">
          <Image
            className="w-auto h-24 "
            src={"/Loader_final.svg"}
            height={96}
            width={10}
            alt=""
          />
        </div>
      </div>

      <div className={loading ? "hidden" : "block"}>
        <Navbar />
        {children}

        <Footer />
        <StickyBar />
      </div>
    </>
  );
}
