import { useState, useEffect } from "react";
import Form from "./Form";

const images = [
  "/studying-abroad-1.webp",
  "/workabroad.jpg",
  "/workabroad.webp",
  "/studying-abroad-1.webp",
  // add as many images as you want inside /public folder
];

export default function WorkAbroad() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setAnimate(true);
      }, 500);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image */}
      <div
        key={images[currentIndex]}
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
          animate ? "opacity-100" : "opacity-0"
        }`}
        style={{ backgroundImage: `url('${images[currentIndex]}')` }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col md:flex-row min-h-screen px-6 sm:px-12 md:px-20 py-16 md:py-20 items-center justify-center md:justify-between max-w-7xl mx-auto gap-12 md:gap-0">
        {/* Left Text Content */}
        <div
          className={`max-w-lg text-white space-y-8 transition-opacity duration-700 ${
            animate ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}
          style={{ transitionProperty: "opacity, transform" }}
        >
          <h1 className="text-3xl sm:text-4xl mt-4 md:text-5xl font-extrabold leading-snug sm:leading-tight">
            Explore Opportunities <br /> to Work Abroad
          </h1>
          <p className="text-sm sm:text-base md:text-lg opacity-90 leading-relaxed">
            Discover exciting job opportunities worldwide and kickstart your
            international career. Our expert guidance helps you navigate visa
            processes, find the right job, and settle smoothly in your new
            home abroad.
          </p>

          <a
  href="/assessment"
  className="relative inline-block px-8 py-3 rounded-full bg-blue-400 text-black font-semibold overflow-hidden transition duration-300 max-w-max group"
>
  <span className="relative z-10">Get Started</span>
  <span className="absolute inset-0 bg-orange-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out rounded-full"></span>
</a>

        </div>

        {/* Right Side - Form */}
        <div
          className={`transition-opacity duration-700 ${
            animate ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          } w-full max-w-md`}
          style={{ transitionProperty: "opacity, transform" }}
        >
          <Form />
        </div>
      </div>
    </div>
  );
}
