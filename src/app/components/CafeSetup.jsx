import React from 'react';

function CafeSetup() {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/assets/cafe.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Overlay */}
      <div className="relative z-10 flex items-center justify-center h-full">
        {/* Your content here */}
      </div>
    </div>
  );
}

export default CafeSetup;
