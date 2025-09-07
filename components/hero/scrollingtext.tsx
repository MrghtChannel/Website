'use client';

import React, { useEffect, useRef } from 'react';
import { scrollingText } from '@/lib/scrolling';

const processedItems = scrollingText
  .split('\n')
  .map(item => item.replace(/'/g, '').trim())
  .filter(Boolean)
  .filter(item => !['Artificial Intelligence', 'Blockchain', 'Internet of Things (IoT)'].includes(item));

const itemsToRender = processedItems.length > 0 ? processedItems : ['No content available'];

const Scrolling: React.FC = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    const handleMouseEnter = () => (marquee.style.animationPlayState = 'paused');
    const handleMouseLeave = () => (marquee.style.animationPlayState = 'running');

    marquee.addEventListener('mouseenter', handleMouseEnter);
    marquee.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      marquee.removeEventListener('mouseenter', handleMouseEnter);
      marquee.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      className="absolute bottom-0 left-0 w-full overflow-hidden text-gray-100 font-bold text-lg md:text-2xl bg-blue-600"
      aria-live="polite"
      role="marquee"
      style={{ padding: 26, margin: 0 }}
    >
      <div
        ref={marqueeRef}
        className="flex animate-marquee whitespace-nowrap"
      >
        {itemsToRender.map((item, index) => (
          <React.Fragment key={index}>
            <span className={`${index === 0 ? '' : 'mr-2'} flex items-center shrink-0`}>{item}</span>
            {index < itemsToRender.length - 1 && (
              <span className="mr-2" aria-hidden="true">✦</span>
            )}
          </React.Fragment>
        ))}
        {itemsToRender.map((item, index) => (
          <React.Fragment key={`dup-${index}`}>
            <span className={`${index === 0 ? '' : 'mr-2'} flex items-center shrink-0`}>{item}</span>
            {index < itemsToRender.length - 1 && (
              <span className="mr-2" aria-hidden="true">✦</span>
            )}
          </React.Fragment>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: inline-flex;
          animation: marquee 80s linear infinite;
          margin-left: 0 !important;
          padding-left: 0 !important;
        }
      `}</style>
    </div>
  );
};

export default Scrolling;