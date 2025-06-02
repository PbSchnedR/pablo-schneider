import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleNav = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  const scrollToFooter = (e) => {
    e.preventDefault();
    const footer = document.querySelector('footer');
    footer.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-sm">
      {/* Version Mobile */}
      <div className="md:hidden">
        {/* Bouton menu burger */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="fixed top-4 right-4 z-50 p-2 rounded-md bg-black/80 text-white hover:bg-[#00ff99] transition-colors duration-300"
          aria-label="Ouvrir le menu"
        >
          {isOpen ? <HiX className="w-7 h-7" /> : <HiMenu className="w-7 h-7" />}
        </button>
        
        {/* Overlay */}
        {isOpen && (
          <div 
            className="fixed inset-0 bg-black/80 z-40"
            onClick={() => setIsOpen(false)}
          />
        )}

        {/* Sidebar mobile */}
        <aside
          className={`
            fixed top-0 left-0 h-screen bg-black text-white flex flex-col shadow-lg z-50
            transition-transform duration-300 ease-in-out
            w-72 max-w-full
            rounded-none
            ${isOpen ? 'translate-x-0 rounded-l-3xl' : '-translate-x-full'}
          `}
          style={{ minWidth: '18rem', fontFamily: "'Fira Mono', monospace" }}
        >
          <nav className="flex flex-col gap-8 p-8 pt-24">
            <a className="text-xl nav-link hover:text-[#00ff99] transition-colors duration-300" onClick={() => handleNav('/')} href="#accueil">Accueil</a>
            <a className="text-xl nav-link hover:text-[#00ff99] transition-colors duration-300" onClick={() => handleNav('/projets')} href="#projets">Projets</a>
            <a className="text-xl nav-link hover:text-[#00ff99] transition-colors duration-300" onClick={scrollToFooter} href="#contact">Contact</a>
            <select 
              className="nav-link text-xl bg-black border border-[#00ff99] rounded px-4 py-2 mt-4 text-white hover:bg-[#00ff99]/10 transition-colors duration-300"
              defaultValue=""
              onChange={e => {
                switch(e.target.value) {
                  case "presentation":
                    handleNav('/presentation-bts');
                    break;
                  case "veille-technologique":
                    handleNav('/veille-technologique');
                    break;
                  default:
                    break;
                }
              }}
            >
              <option value="" disabled hidden>BTS SIO</option>
              <option value="presentation">Présentation</option>
              <option value="veille-technologique">Veille Technologique</option>
            </select>
          </nav>
        </aside>
      </div>

      {/* Version Desktop */}
      <ul className="hidden md:flex justify-center gap-8 py-4">
        <li>
          <a
            href="#accueil"
            className="nav-link text-2xl"
            style={{ fontFamily: "'Fira Mono', monospace" }}
            onClick={() => navigate('/')}
          >
            Accueil
          </a>
        </li>
        <li>
          <a
            href="#projets"
            className="nav-link text-2xl"
            style={{ fontFamily: "'Fira Mono', monospace" }}
            onClick={() => navigate('/projets')}
          >
            Projets
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="nav-link text-2xl"
            style={{ fontFamily: "'Fira Mono', monospace" }}
            onClick={scrollToFooter}
          >
            Contact
          </a>
        </li>
        <li className="flex items-center">
          <select 
            className="nav-link text-2xl appearance-none" 
            style={{ fontFamily: "'Fira Mono', monospace" }} 
            defaultValue=""
            onChange={e => {
              switch(e.target.value) {
                case "presentation":
                  navigate('/presentation-bts');
                  break;
                case "veille-technologique":
                  navigate('/veille-technologique');
                  break;
                default:
                  break;
              }
            }}
          >
            <option value="" disabled hidden>BTS SIO</option>
            <option value="presentation" className="bg-black">Présentation</option>
            <option value="veille-technologique" className="bg-black">Veille Technologique</option>
          </select>
        </li>
      </ul>

      <style>
        {`
          .nav-link {
            color: #fff;
            position: relative;
            text-decoration: none;
            transition: color 0.2s;
          }
          .nav-link::after {
            content: '';
            position: absolute;
            left: 0;
            bottom: -4px;
            width: 100%;
            height: 2px;
            background: linear-gradient(90deg, #00ff99, #00ffcc);
            transform: scaleX(0);
            transition: transform 0.3s cubic-bezier(.4,0,.2,1);
            transform-origin: right;
            border-radius: 2px;
            box-shadow: 0 0 8px #00ff99aa;
          }
          .nav-link:hover {
            color: #00ff99;
            text-shadow: 0 0 8px #00ff99;
          }
          .nav-link:hover::after {
            transform: scaleX(1);
            transform-origin: left;
          }
        `}
      </style>
    </nav>
  );
};

export default Navbar;