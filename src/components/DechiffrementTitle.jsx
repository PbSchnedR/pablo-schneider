import React, { useEffect, useRef, useState } from 'react';

const DechiffrementTitle = ({title, isVisible = true}) => {
  const [displayed, setDisplayed] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  const target = title;
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    // Détection mobile
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Fonction pour lancer l'animation de déchiffrement
  const startAnimation = () => {
    let frame = 0;
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
    intervalRef.current = setInterval(() => {
      setDisplayed(() => {
        return target
          .split('')
          .map((char, i) => {
            if (char === ' ') return ' ';
            return i < frame ? char : chars[Math.floor(Math.random() * chars.length)];
          })
          .join('');
      });
      frame++;
      if (frame > target.length) {
        clearInterval(intervalRef.current);
        timeoutRef.current = setTimeout(() => {
          setDisplayed(target); // Affiche le texte complet
        }, 500);
      }
    }, 100);
  };

  useEffect(() => {
    if (!isVisible) {
      setDisplayed(target);
      return;
    }
    
    if (isMobile) {
      setDisplayed(target);
      startAnimation();
      return;
    }
    startAnimation();
    return () => {
      clearInterval(intervalRef.current);
      clearTimeout(timeoutRef.current);
    };
    // eslint-disable-next-line
  }, [isMobile, target, isVisible]);

  return (
    <div className="flex justify-center items-center w-full">
      <h1
        className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold flex flex-wrap justify-center max-w-full"
        style={{ fontFamily: "'Fira Mono', monospace", wordBreak: 'break-word', lineHeight: 1.1 }}
      >
        <span className="px-4 py-2 bg-black text-[#00ff99] rounded-l-lg">{displayed.slice(0, 3)}</span>
        <span className="px-4 py-2 bg-[#00ff99] text-black rounded-r-lg">{displayed.slice(3)}</span>
      </h1>
      <style>{`
        @media (max-width: 768px) {
          h1 {
            white-space: normal !important;
            word-break: break-word !important;
          }
        }
      `}</style>
    </div>
  );
};

export default DechiffrementTitle;