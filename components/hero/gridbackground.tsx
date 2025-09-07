'use client';

import React from 'react';

const GridBackground: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <div
      className="
        relative h-screen w-full px-5 overflow-hidden
        bg-white dark:bg-[#0A0A0A]
        [background-image:linear-gradient(to_right,_#f0f0f0_1px,_transparent_1px),_linear-gradient(to_bottom,_#f0f0f0_1px,_transparent_1px)]
        dark:[background-image:linear-gradient(to_right,_#1A1A1A_1px,_transparent_1px),_linear-gradient(to_bottom,_#1A1A1A_1px,_transparent_1px)]
        [background-size:90px_90px]
        animate-gridScroll
      "
    >
      {children}
    </div>
  );
};

export default GridBackground;
