'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FaTwitter, FaTelegram, FaFacebook, FaGithub, FaReddit, FaInstagram,FaDiscord,FaMastodon,FaTwitch,FaTiktok,FaSpotify } from 'react-icons/fa';
import { FaBluesky,FaSquareThreads } from "react-icons/fa6";
import gsap from 'gsap';
import i18n from '../../i18n';
import { useTranslation } from 'react-i18next';

const HeroSection: React.FC = () => {
  const { t } = useTranslation();
  const [language, setLanguage] = useState<string>('en');

  useEffect(() => {
    const savedLanguage = typeof window !== 'undefined' ? localStorage.getItem('language') || 'en' : 'en';
    setLanguage(savedLanguage);
  }, []);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  useEffect(() => {
    gsap.from('.social-icons a', {
      opacity: 0,
      y: -20,
      duration: 1,
      stagger: 0.1,
    });

    gsap.from('.hero-image', {
      opacity: 0,
      scale: 0.8,
      duration: 1,
      delay: 0.5,
    });

    gsap.from('.scroll-text', {
      opacity: 0,
      y: 20,
      duration: 1,
      delay: 1,
    });

    gsap.from('.scroll-down', {
      opacity: 0,
      y: 20,
      duration: 1,
      delay: 1.2,
    });
    gsap.from('.blue-panel', {
      width: 0,
      duration: 1,
      ease: 'power2.out',
      x: 300,
    });
    gsap.fromTo(
      '.hero-text',
      {
        opacity: 0,
        scale: 0.5,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        delay: 1.5,
        ease: 'power3.out',
      }
    );
    gsap.from('.hero-text span', {
      opacity: 0,
      x: -20,
      duration: 0.1,
      stagger: 0.1,
      delay: 2,
      ease: 'none',
    });
    gsap.from('.cursor-line', {
      height: 0,
      duration: 0.3,
      delay: 2.5,
      ease: 'power2.out',
    });
    
    const handleScroll = () => {
      if (window.scrollY > 100) {
      } else {
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToNextSection = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <div
      style={{
        backgroundColor: 'white',
        height: '100vh',
        position: 'relative',
        padding: '0 20px',
        backgroundImage:
          'linear-gradient(to right, #f0f0f0 1px, transparent 1px), linear-gradient(to bottom, #f0f0f0 1px, transparent 1px)',
        backgroundSize: '90px 90px',
      }}
    >
      <div
        className="social-icons"
        style={{
          position: 'absolute',
          top: '50%',
          right: '20px',
          transform: 'translateY(-50%)',
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
          zIndex: 10, 
        }}
      >
        <a href="https://x.com/mrghtchannel" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={30} color="#394051" />
        </a>
        <a href="https://t.me/mrghtchannnel" target="_blank" rel="noopener noreferrer">
          <FaTelegram size={30} color="#394051" />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100089807778533" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={30} color="#394051" />
        </a>
        <a href="https://github.com/mrghtchannel" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} color="#394051" />
        </a>
        <a href="https://www.reddit.com/user/MrghtChannel/" target="_blank" rel="noopener noreferrer">
          <FaReddit size={30} color="#394051" />
        </a>
        <a href="https://instagram.com/mrghtchannel" target="_blank" rel="noopener noreferrer">
        <FaInstagram size={30} color="#394051" />
      </a>
      <a href="https://bsky.app/profile/mrghtchannel.bsky.social" target="_blank" rel="noopener noreferrer">
        <FaBluesky size={30} color="#394051" />
      </a>
      <a href="https://threads.com/mrghtchannel" target="_blank" rel="noopener noreferrer">
        <FaSquareThreads size={30} color="#394051" />
      </a>
      <a href="https://discord.gg/4Wq3rRMtS3" target="_blank" rel="noopener noreferrer">
        <FaDiscord size={30} color="#394051" />
      </a>
      <a href="https://mastodon.social/@mrghtchannel" target="_blank" rel="noopener noreferrer">
        <FaMastodon size={30} color="#394051" />
      </a>
      <a href="https://twitch.tv/mrghtchannel" target="_blank" rel="noopener noreferrer">
        <FaTwitch size={30} color="#394051" />
      </a>
      <a href="https://tiktok.com/@mrghtchannel" target="_blank" rel="noopener noreferrer">
        <FaTiktok size={30} color="#394051" />
      </a>
      <a href="https://open.spotify.com/user/31o4pvnztg5ypscbuz2zwjgudh3i" target="_blank" rel="noopener noreferrer">
        <FaSpotify size={30} color="#394051" />
      </a>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          height: '100%',
          position: 'relative',
          textAlign: 'center',
        }}
      >
        <Image
          className="hero-image"
          src="/hero-banner.jpg"
          alt="Logo"
          width={300}
          height={300}
          style={{
            borderRadius: '50%',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            objectFit: 'cover',
          }}
        />
        <div
          className="hero-text"
          style={{
            marginTop: '20px',
            fontSize: '36px',
            fontWeight: 'bold',
            color: '#394051',
            letterSpacing: '2px',
            maxWidth: '90%',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          {'I\'M MrghtChannel Fullstack Developer'.split('').map((char, index) => (
            <span key={index}>{char}</span>
          ))}
          <div
            className="cursor-line"
            style={{
              position: 'absolute',
              bottom: '-10px',
              left: '0',
              width: '2px',
              backgroundColor: '#394051',
              transition: 'height 0.3s ease',
            }}
          ></div>
        </div>
      </div>

      <div
        onClick={scrollToNextSection}
        className="scroll-down"
        style={{
          position: 'absolute',
          bottom: '12%',
          left: '47%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          cursor: 'pointer',
          textAlign: 'center',
          animation: 'bounce 1s infinite alternate',
          width: 'max-content',
        }}
      >
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        fontSize: '18px',
        fontWeight: 'bold',
        color: '#394051',
        marginBottom: '10px',
      }}
    >
      {t('hero.title')}
        </div>
        <div style={{ fontSize: '36px', color: '#394051' }}>
          <Image
            src="/mouse-cursor.png"
            alt="Arrow Icon"
            width={36}
            height={36}
          />
        </div>
      </div>

      <div
        className="blue-panel"
        style={{
          position: 'absolute',
          bottom: '0',
          right: '0',
          width: '100%',
          backgroundColor: '#5677F8',
          padding: '30px 0',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '24px',
          fontWeight: 'bold',
          color: '#394051',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            animation: 'scrollText 60s linear infinite',
            width: '100%',
          }}
        >
          <div style={{ paddingRight: '30px' }}>
            Fullstack Development ✦ Frontend Development ✦ Backend Development ✦ React ✦ Node.js ✦ Express.js ✦ MongoDB ✦ SQL ✦ RESTful APIs ✦ Web Design ✦ UX/UI Design ✦ Responsive Design ✦ JavaScript ✦ TypeScript ✦ Git ✦ Agile ✦ Docker ✦ Cloud Computing ✦ Deployment ✦ CI/CD ✦ Testing ✦ Automation ✦ Microservices ✦ Web Accessibility ✦ Firebase ✦ Vue.js ✦ Angular ✦ Python ✦ DevOps ✦ SEO ✦ Web Optimization ✦ Security ✦ GraphQL ✦ Next.js ✦ Redux ✦ TailwindCSS ✦ SASS ✦ HTML5 ✦ CSS3 ✦ WebSockets ✦ Electron ✦ Serverless Architecture ✦ Progressive Web Apps ✦ Machine Learning ✦ Artificial Intelligence ✦ Blockchain ✦ Internet of Things (IoT) ✦ Web Scraping ✦ Automation ✦ Performance Optimization ✦ Cloud Services ✦ AWS ✦ Azure ✦ Firebase ✦ Nginx ✦ Kubernetes ✦ Server Management ✦ Web Components ✦ SaaS Solutions ✦ Mobile Apps ✦ And Much More!
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0);
          }
        }

        @keyframes scrollText {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        @media (max-width: 768px) {
          .hero-text {
            font-size: 28px;
            letter-spacing: 1px;
          }

          .hero-image {
            width: 200px;
            height: 200px;
          }

          .social-icons {
            right: 10px;
            gap: 10px;
          }

          .scroll-down {
            bottom: 10%;
            font-size: 16px;
          }

          .blue-panel {
            font-size: 18px;
            padding: 20px 0;
          }
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
