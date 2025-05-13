'use client';

import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const awards = [
  { image: '/award2022.png', name: "India's Best Overseas Education Consultancy Of The Year" },
  { image: '/award2023.png', name: 'Global Icon Award Winner' },
  { image: '/award2024.png', name: "India's Most Trusted Immigration And Overseas Education Consultancy Of The Year" },
  { image: '/award2022.png', name: "India's Best Overseas Education Consultancy Of The Year" },
  { image: '/award2023.png', name: 'Global Icon Award Winner' },
  { image: '/award2024.png', name: "India's Most Trusted Immigration And Overseas Education Consultancy Of The Year"},
];

export default function AwardCarouselSliding() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full py-12 px-4 bg-cover bg-center" style={{ backgroundImage: "url('/awardbgimg.png')" }}>
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-8">
          Our Legacy of Recognition
        </h2>
        <Slider {...settings}>
          {awards.map((award, index) => (
            <div key={index} className="px-4">
              <div className="w-full h-[280px] flex flex-col items-center justify-center">
                <Image
                  src={award.image}
                  alt={`Award ${index + 1}`}
                  width={220}
                  height={220}
                  className="object-contain max-h-[200px]"
                />
                <p className="mt-4 text-center text-2sm font-bold text-gray-800">
                  {award.name}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
