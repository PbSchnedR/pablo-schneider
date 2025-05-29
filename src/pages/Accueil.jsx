import React from 'react';
import Sidebar from '../Sidebar';
import BlackSpace from '../components/black_space';
import Parcours from './Parcours';
import { motion } from 'framer-motion';
import Carroussel from './accueil/Carroussel';
import Footer from '../components/Footer';
import APropos from './APropos';

import fond_anim from '../assets/fond-anim.mp4';
const Accueil = () => {
  return (
    <>
    <div className="relative min-h-screen w-full overflow-hidden">
      <Sidebar />
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
          <source src={fond_anim} type="video/mp4" />
      </video>
      <motion.div 
        className="absolute inset-0 bg-black/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      ></motion.div>

      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <motion.div 
          className="text-center text-white px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4"
            style={{ fontFamily: "'Fira Mono', monospace" }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Pablo SCHNEIDER
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl typewriter"
            style={{ fontFamily: "'Fira Mono', monospace" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            Bienvenue sur mon Portfolio
          </motion.p>
        </motion.div>
      </div>
      {/* Animation typewriter en CSS */}
      <style>
        {`
          .typewriter {
            overflow: hidden;
            border-right: .15em solid #00ff99;
            white-space: nowrap;
            margin: 0 auto;
            letter-spacing: .15em;
            animation:
              typing 2.5s steps(20, end) 1s 1 normal both,
              blink-caret .75s step-end infinite;
          }
          @keyframes typing {
            from { width: 0 }
            to { width: 100% }
          }
          @keyframes blink-caret {
            from, to { border-color: transparent }
            50% { border-color: #00ff99; }
          }
          @media (max-width: 768px) {
            .typewriter {
              white-space: normal;
              border-right: none;
              animation: none;
              width: 100%;
            }
          }
        `}
      </style>
    </div>
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <BlackSpace />
    </motion.div>
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <APropos />
    </motion.div>
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <BlackSpace />
      <Carroussel />
    </motion.div>
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Parcours />
    </motion.div>
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <BlackSpace />
      <Footer />
    </motion.div>
    </>
  );
};

export default Accueil;