'use client';

import React from 'react';
import Lottie from 'lottie-react';
import Image from 'next/image';
import backgroundAnimation from '../../public/models/worldtour.json';

const rightPoints = [
  "Customized itineraries designed to showcase the best sights and hidden gems tailored just for you.",
  "Dedicated 24/7 support to ensure your travel experience is smooth and stress-free from start to finish.",
  "Competitive pricing with no hidden fees, offering incredible value for unforgettable adventures.",
  "Expert local guides who bring destinations to life with fascinating stories and insider tips.",
  "Safe and reliable travel arrangements, including verified transportation and accommodations.",
  "Handpicked premium hotels and resorts that provide comfort and luxury throughout your journey.",
  "Immersive cultural experiences, including local cuisine tastings, festivals, and traditional performances.",
];

// Replace with your single image path here
const singleImage = '/sales-girl-1.png';

export default function TourSection() {
  return (
    <div
      style={{
        position: 'relative',
        minHeight: '90vh',
        overflow: 'hidden',
        color: 'white',
        fontFamily: "'Times New Roman', Times, serif",
      }}
    >
      {/* Background Animation */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
        }}
      >
        <Lottie
          animationData={backgroundAnimation}
          loop={true}
          style={{ width: '100%', height: '100%' }}
        />
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            top: 0,
            left: 0,
          }}
        />
      </div>

      {/* Heading */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
          paddingTop: '20px',
          paddingBottom: '10px',
        }}
      >
        <h1 style={{ fontSize: '2.6rem', fontWeight: 'bold', marginBottom: '10px' }}>
          Why Choose <span className='text-orange-500'>VJC-OVERSEAS</span> ?
        </h1>
      </div>

      {/* Content Section */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          justifyContent: 'space-between',
          padding: '20px 5vw',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          gap: '30px',
        }}
      >
        {/* Left - Bullet Points */}
        <div style={{ flex: '1 1 50%', maxWidth: '600px' }}>
          <h2 style={{ fontSize: '1.7rem', marginBottom: '15px' }}>What We Offer</h2>
          <ul style={{ lineHeight: '1.8', fontSize: '1rem', paddingLeft: '20px', listStyleType: 'disc' }}>
  {rightPoints.map((point, index) => {
    const [firstWord, ...rest] = point.split(' ');
    return (
      <li key={index} style={{ marginBottom: '10px' }}>
        <strong style={{ color: '#FFA500' /* orange color */ }}>{firstWord}</strong> {rest.join(' ')}
      </li>
    );
  })}
</ul>

        </div>

        {/* Right - Single Image */}
<div
  style={{
    flex: '1 1 45%',
    maxWidth: '400px',
    borderRadius: '12px',
    border: '4px solid orange-500',       // Increased border thickness from 2px to 4px
    overflow: 'hidden',
    height: '400px',                 // Increased height a bit (instead of aspectRatio)
    display: 'flex',                 // use flexbox to center the image nicely
    justifyContent: 'center',
    alignItems: 'center',
     marginTop: '60px',
         // optional: to highlight border and image
  }}
>
  <Image
    src={singleImage}
    alt="Gallery Single"
    width={400}
    height={350}                   // match container height for Next.js Image optimization
    style={{
      maxWidth: '100%',
      maxHeight: '100%',
      objectFit: 'contain',        // ensures whole image is visible with no cropping
    }}
  />
</div>

      </div>
    </div>
  );
}
