import React from 'react'
import Hero from "./files/hero";
import Two from "./files/two";
import CTA from "./files/cta";
import Three from "./files/three";
import Four from "./files/four";
import Price from "@/app/components/Price";
import Footer from "./files/Footer";
// import HeroNext from "./files/heroNext";
// import Reviews from "@/app/about/files/reviews";
import Why from "./files/Why";

const page = () => {
  return (
    <>
    <div className="max-w-full overflow-hidden">
    <Hero/>
    {/* <HeroNext/> */}
    <Why/>
    <Two/>
    <CTA/>
    <Four/>
    <Price/>
    <Three/>
    {/* <Reviews/> */}
    <Footer />
    </div>
    </>
  )
}

export default page