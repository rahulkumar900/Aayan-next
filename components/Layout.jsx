
import {useState,useEffect} from 'react'
import Footer from "./Footer";
import Navbar from "./Navbar";
import dynamic from 'next/dynamic';
import Image from "next/image"
import StickyBar from './StickyBar';


export default function Layout({ children }) {

  const [loading,setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      
console.log(`

                                           
                                                                  /$$  /$$  /$$  /$$$$$$ | $$  /$$$$$$$  /$$$$$$  /$$$$$$/$$$$   /$$$$$$ 
                                                                  | $$ | $$ | $$ /$$__  $$| $$ /$$_____/ /$$__  $$| $$_  $$_  $$ /$$__  $$
                                                                  | $$ | $$ | $$| $$$$$$$$| $$| $$      | $$  \ $$| $$ \ $$ \ $$| $$$$$$$$
                                                                  | $$ | $$ | $$| $$_____/| $$| $$      | $$  | $$| $$ | $$ | $$| $$_____/
                                                                  |  $$$$$/$$$$/|  $$$$$$$| $$|  $$$$$$$|  $$$$$$/| $$ | $$ | $$|  $$$$$$$
                                                                  \_____/\___/  \_______/|__/ \_______/ \______/ |__/ |__/ |__/ \_______/
                                                                                                                  
                                                                                              

                                                                                                /$$$$$$$$       
                                                                                                |__  $$__/       
                                                                                                  | $$  /$$$$$$ 
                                                                                                  | $$ /$$__  $$
                                                                                                  | $$| $$  \ $$
                                                                                                  | $$| $$  | $$
                                                                                                  | $$|  $$$$$$/
                                                                                                  |__/ \______/ 
                                                                                   
                                                                                   
                                                                              
                                                                                /$$$$$$                                               
                                                                                /$$__  $$                                              
                                                                                | $$  \ $$  /$$$$$$  /$$   /$$  /$$$$$$  /$$$$$$$       
                                                                                | $$$$$$$$ |____  $$| $$  | $$ |____  $$| $$__  $$      
                                                                                | $$__  $$  /$$$$$$$| $$  | $$  /$$$$$$$| $$  \ $$      
                                                                                | $$  | $$ /$$__  $$| $$  | $$ /$$__  $$| $$  | $$      
                                                                                | $$  | $$|  $$$$$$$|  $$$$$$$|  $$$$$$$| $$  | $$      
                                                                                |__/  |__/ \_______/ \____  $$ \_______/|__/  |__/      
                                                                                                    /$$  | $$                          
                                                                                                  |  $$$$$$/                          
                                                                                                    \______/                           





`)



    }, 4250);
  }, []);

  if(loading){
    return (
      <div className="w-screen h-screen   flex justify-center items-center overflow-hidden z-50">
        <div className="relative w- h-auto bg-white">
          <Image className="w-auto h-24 " src={"/Loader_final.svg"}  height={96} width={10} alt="" />
        </div>
      </div>
    );
  }
  return (
    <>
      <Navbar />
      {children}
      <StickyBar />
      <Footer />
    </>
  );
}
