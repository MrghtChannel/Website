'use client';

import React, { useEffect, useState } from 'react';
import { LoaderThree } from '@/components/ui/loader';

interface PreloaderProps {
  onFinish?: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onFinish }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      if (onFinish) onFinish();
    }, 2000); 
    return () => clearTimeout(timer);
  }, [onFinish]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white dark:bg-black z-50">
      <LoaderThree />
    </div>
  );
};

export default Preloader;
