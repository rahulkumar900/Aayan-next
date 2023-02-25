import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import dynamic from 'next/dynamic';



export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
