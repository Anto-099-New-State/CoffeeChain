"use client"
import React from 'react';
import { TipCard } from '../tip/TipCard';
import { TransferTokenCard } from '@/features/transfer/TransferTokenCard';
import { FloatingButtonStrip } from '../nav/FloatingButtonStrip';

function CafeSetup() {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute  w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/assets/cafe.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Overlay */}
      <div className="flex flex-col items-center justify-center space-y-3 pt-4">
      <TipCard/>
      <div className='relative'>
      <TransferTokenCard/>
      <FloatingButtonStrip/>

      </div>
      </div>
    </div>
  );
}

export default CafeSetup;
