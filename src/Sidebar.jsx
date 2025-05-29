import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const scrollToFooter = (e) => {
    e.preventDefault();
    const footer = document.querySelector('footer');
    footer.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-sm">
      {/* Burger Menu Button */}
      <button 
        className="md:hidden absolute right-4 top-4 z-50 p-2"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Menu"
      >
        <div className="w-6 h-6 flex flex-col justify-around">
          <span className={`block w-full h-0.5 bg-white transform transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
          <span className={`block w-full h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-full h-0.5 bg-white transform transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
        </div>
      </button>

      {/* Menu latéral mobile */}
      <div className={`md:hidden fixed top-0 right-0 h-full w-3/4 max-w-xs bg-gray-900 shadow-lg z-40 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <ul className="flex flex-col items-start justify-start h-full gap-6 p-8 pt-24">
          <li className="w-full">
            <a
              href="#accueil"
              className="nav-link text-xl block w-full py-2"
              style={{ fontFamily: "'Fira Mono', monospace" }}
              onClick={() => {
                navigate('/');
                setIsOpen(false);
              }}
            >
              Accueil
            </a>
          </li>
          <li className="w-full">
            <a
              href="#projets"
              className="nav-link text-xl block w-full py-2"
              style={{ fontFamily: "'Fira Mono', monospace" }}
              onClick={() => {
                navigate('/projets');
                setIsOpen(false);
              }}
            >
              Projets
            </a>
          </li>
          <li className="w-full">
            <a
              href="#contact"
              className="nav-link text-xl block w-full py-2"
              style={{ fontFamily: "'Fira Mono', monospace" }}
              onClick={scrollToFooter}
            >
              Contact
            </a>
          </li>
          <li className="w-full">
            <select 
              className="nav-link text-xl bg-gray-800 border border-[#00ff99] rounded px-4 py-2 w-full" 
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
                setIsOpen(false);
              }}
            >
              <option value="" disabled hidden>BTS SIO</option>
              <option value="presentation">Présentation</option>
              <option value="veille-technologique">Veille Technologique</option>
            </select>
          </li>
        </ul>
      </div>

      {/* Desktop Menu */}
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
            className="nav-link text-2xl appearance-none " 
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