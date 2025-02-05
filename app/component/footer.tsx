'use client';

import i18n from "../../i18n";
import { useTranslation } from "react-i18next";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  const getInitialLanguage = () => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("language") || "en";
    }
    return "en";
  };

  const [language ] = useState(getInitialLanguage);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("language", language);
    }
  }, [language]);

  return (
<footer className="bg-white m-4">
  <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
    <div className="sm:flex sm:items-center sm:justify-between">
      <a href="#" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
        <Image 
          src="/hero-banner.jpg" 
          className="rounded-full" 
          alt="My Painting" 
          width={50} 
          height={50} 
          layout="intrinsic" 
        />
        <div className="flex items-center space-x-2">
          <span className="text-lg md:text-xl font-bold">
            <span className="text-black">Mrght</span>
            <span className="text-blue-500 hover:text-black transition-colors duration-300">Channel</span>
          </span>
        </div>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-700 sm:mb-0">
            <li className="relative group mr-6">
              <a href="#" className="hover:text-blue-500 text-lg font-bold">{t('Footer.About')}</a>
              <span className="absolute left-0 bottom-0 h-[3px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="relative group mr-6">
              <a href="#" className="hover:text-blue-500 text-lg font-bold">{t('Footer.Privacy Policy')}</a>
              <span className="absolute left-0 bottom-0 h-[3px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="relative group mr-6">
              <a href="#" className="hover:text-blue-500 text-lg font-bold">{t('Footer.Licensing')}</a>
              <span className="absolute left-0 bottom-0 h-[3px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="relative group">
              <a href="#contact" className="hover:text-blue-500 text-lg font-bold">{t('Footer.Contact')}</a>
              <span className="absolute left-0 bottom-0 h-[3px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-300 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-700 sm:text-center font-bold">
          © 2023{' '}
          <a href="https://github.com/mrghtchannel" className="hover:underline">
            MrghtChannel
          </a>. {t('Footer.All Rights Reserved')}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
