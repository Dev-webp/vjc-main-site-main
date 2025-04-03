import React from 'react'
import Hero from "./files/hero";
import Two from "./files/two";
import CTA from "./files/cta";
import Three from "./files/three";
import Four from "./files/four";
import Price from "@/app/components/Price";
import Footer from "./files/Footer";
import Why from "./files/Why";

export const metadata = {
  title: 'About VJC Overseas – Trusted Visa & Immigration Experts',
  description: 'VJC Overseas is a leading visa & immigration consultancy. Get guidance for work, study & PR visas. Trusted for smooth & hassle-free immigration.',
  keywords: 'immigration consultants, visa consultants, australia pr, work visa, australia pr visa, permanent residency, germany opportunity card, study visa usa, job visa in australia, best immigration consultants in Hyderabad, best immigration consultants in Bangalore, study abroad, visa process, work permit, student visa',
};

const page = () => {
  return (
    <>
    <div className="max-w-full overflow-hidden">
    <Hero/>
    <Why/>
    <Two/>
    <CTA/>
    <Four/>
    <Price/>
    <Three/>
    <Footer />
    </div>
    </>
  )
}

export default page;
