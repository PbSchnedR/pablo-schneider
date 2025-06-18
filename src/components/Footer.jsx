import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
            <footer className="w-full bg-black/80 backdrop-blur-sm py-8 relative">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Navigation */}
                        <div className="flex flex-col items-center md:items-start">
                            <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "'Fira Mono', monospace", color: "#00ff99" }}>
                                Navigation
                            </h3>
                            <ul className="space-y-2">
                                <li>
                                    <a href="/" className="text-white hover:text-[#00ff99] transition-colors" style={{ fontFamily: "'Fira Mono', monospace" }}>
                                        Accueil
                                    </a>
                                </li>
                                <li>
                                    <a href="/projets" className="text-white hover:text-[#00ff99] transition-colors" style={{ fontFamily: "'Fira Mono', monospace" }}>
                                        Projets
                                    </a>
                                </li>
                                
                            </ul>
                        </div>

                        {/* Contact */}
                        <div className="flex flex-col items-center">
                            <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "'Fira Mono', monospace", color: "#00ff99" }}>
                                Contact
                            </h3>
                            <div className="space-y-2 text-center">
                                <p className="text-white" style={{ fontFamily: "'Fira Mono', monospace" }}>
                                    <FaEnvelope className="inline mr-2" />
                                    <a href="mailto:pablo.schneider69@gmail.com" className="hover:text-[#00ff99] transition-colors">
                                        pablo.schneider69@gmail.com
                                    </a>
                                </p>
                                <p className="text-white" style={{ fontFamily: "'Fira Mono', monospace" }}>
                                    <FaPhone className="inline mr-2" />
                                    <a href="tel:+33782917540" className="hover:text-[#00ff99] transition-colors">
                                        +33 7 82 91 75 40
                                    </a>
                                </p>
                            </div>
                        </div>

                        {/* Réseaux sociaux */}
                        <div className="flex flex-col items-center md:items-end">
                            <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "'Fira Mono', monospace", color: "#00ff99" }}>
                                Réseaux sociaux
                            </h3>
                            <div className="flex space-x-4">
                                <a href="https://github.com/PbSchnedR" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#00ff99] transition-colors">
                                    <FaGithub size={24} />
                                </a>
                                <a href="https://www.linkedin.com/in/pablo-schneider-0846392b4/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#00ff99] transition-colors">
                                    <FaLinkedin size={24} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="mt-8 pt-8 border-t border-gray-800 text-center">
                        <p className="text-white" style={{ fontFamily: "'Fira Mono', monospace" }}>
                            © {new Date().getFullYear()} Pablo Schneider. Tous droits réservés.
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
