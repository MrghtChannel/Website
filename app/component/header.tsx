'use client';

import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';

const Navbar = () => {
  const { t } = useTranslation();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<string>('en');
  const navRef = useRef<HTMLUListElement | null>(null);
  const langMenuRef = useRef<HTMLUListElement | null>(null);
  const logoRef = useRef<HTMLDivElement | null>(null);
  const languageButtonRef = useRef<HTMLButtonElement | null>(null);
  const contactButtonRef = useRef<HTMLButtonElement | null>(null);

  const languages = ['en', 'ua', 'de', 'pl', 'ru'];

  useEffect(() => {
    const savedLanguage = typeof window !== 'undefined' ? localStorage.getItem('language') : null;
    if (savedLanguage) {
      setSelectedLanguage(savedLanguage);
      i18n.changeLanguage(savedLanguage);
    }
  }, []);

  const toggleNav = () => setIsNavOpen(!isNavOpen);
  const toggleLanguageMenu = () => setIsLanguageMenuOpen(!isLanguageMenuOpen);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setSelectedLanguage(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang);
    }
    setIsLanguageMenuOpen(false);
  };

  useEffect(() => {
    if (logoRef.current) {
      gsap.from(logoRef.current, { opacity: 0, x: -100, duration: 0.8, ease: 'power3.out' });
    }
    if (languageButtonRef.current) {
      gsap.from(languageButtonRef.current, { opacity: 0, x: 20, duration: 0.8, ease: 'power3.out' });
    }
    if (contactButtonRef.current) {
      gsap.from(contactButtonRef.current, { opacity: 0, x: 100, duration: 0.8, ease: 'power3.out' });
    }
  }, []);

  useEffect(() => {
    if (navRef.current) {
      gsap.from(navRef.current.children, {
        opacity: 0,
        x: 100,
        stagger: 0.2,
        duration: 0.6,
        ease: 'power3.out',
      });
    }
  }, [isNavOpen]);

  useEffect(() => {
    if (langMenuRef.current) {
      gsap.from(langMenuRef.current.children, {
        opacity: 0,
        x: 100,
        stagger: 0.2,
        duration: 0.3,
        ease: 'power3.out',
      });
    }
  }, [isLanguageMenuOpen]);

  return (
    <nav
      className="flex justify-between items-center py-4 px-6 md:px-8"
      style={{
        backgroundColor: 'white',
        backgroundImage:
          'linear-gradient(to right, #f0f0f0 1px, transparent 1px), linear-gradient(to bottom, #f0f0f0 1px, transparent 1px)',
        backgroundSize: '90px 90px',
      }}
    >
      <div className="flex items-center space-x-2" ref={logoRef}>
        <div className="text-lg md:text-xl font-bold">
          <span className="text-black">Mrght</span>
          <span className="text-blue-500 hover:text-black transition-colors duration-300">Channel</span>
        </div>
      </div>

      <ul
        ref={navRef}
        className={`absolute md:static top-16 right-0 w-full md:w-auto bg-white md:bg-transparent flex flex-col md:flex-row items-center md:items-center space-y-4 md:space-y-0 md:space-x-6 text-gray-700 font-bold md:translate-x-0 transition-transform duration-300 ${
          isNavOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <li className="relative text-blue-500 cursor-pointer">
          {t('navbar.home')}
          <span className="absolute left-0 top-full mt-1 h-[3px] w-full bg-blue-500"></span>
        </li>
        <li className="hover:text-blue-500 cursor-pointer">
          <a href="/services">{t('navbar.services')}</a>
        </li>
        <li className="hover:text-blue-500 cursor-pointer">
          <a href="#about">{t('navbar.about')}</a>
        </li>
        <li className="hover:text-blue-500 cursor-pointer">
          <a href="#projects">{t('navbar.projects')}</a>
        </li>
        <li className="hover:text-blue-500 cursor-pointer">
          <a href="https://t.me/mrghtchannnel">{t('navbar.blogs')}</a>
        </li>
        <li className="hover:text-blue-500 cursor-pointer">
          <a href="/testimonials">{t('navbar.testimonials')}</a>
        </li>
      </ul>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <button
            ref={languageButtonRef}
            onClick={toggleLanguageMenu}
            className="text-black font-bold"
          >
            {selectedLanguage.toUpperCase()}
          </button>
          {isLanguageMenuOpen && (
            <ul
              ref={langMenuRef}
              className="absolute right-0 mt-2 bg-gray-800 text-white border border-gray-600 rounded-lg shadow-xl z-10 w-28"
            >
              {languages.map((lang) => (
                <li
                  key={lang}
                  className={`px-4 py-2 hover:bg-gray-700 cursor-pointer ${
                    selectedLanguage === lang ? 'bg-gray-700 font-bold' : ''
                  }`}
                  onClick={() => changeLanguage(lang)}
                >
                  {lang.toUpperCase()}
                </li>
              ))}
            </ul>
          )}
        </div>

        <button className="md:hidden text-black text-xl" onClick={toggleNav}>☰</button>

        <button
        onClick={() => window.location.href = '#contact'}
        ref={contactButtonRef}
        className="hidden md:block bg-black text-white font-bold px-6 py-2 rounded-full hover:bg-blue-500"
      >
        {t('navbar.contactMe')}
      </button>
      </div>
    </nav>
  );
};

export default Navbar;
