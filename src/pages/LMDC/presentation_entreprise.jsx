import React from 'react';
import logo from '../../assets/lmdc/logo.png';

const Presentation_entreprise = () => {
    return (
        <div className="min-h-screen bg-black py-16 px-4 sm:px-6 lg:px-8">
            {/* Titre néon */}
            <h2 className="text-6xl md:text-7xl font-bold text-center text-white neon-text mb-16">
                La plateforme
            </h2>

            {/* Conteneur principal */}
            <div className="max-w-7xl mx-auto">
                {/* Cadre du logo */}
                <div className="relative mb-16 flex justify-center">
                    <div className="neon-corner p-4 inline-block" style={{position:'relative'}}>
                        {/* Angles lumineux */}
                        <span className="corner-line horizontal corner-tl-h" />
                        <span className="corner-line vertical corner-tl-v" />
                        <span className="corner-line horizontal corner-br-h" />
                        <span className="corner-line vertical corner-br-v" />
                        <div className="bg-black/50 p-6">
                            <img 
                                src={logo} 
                                alt="Logo LMDC" 
                                className="w-full h-auto max-h-[400px] object-contain"
                            />
                        </div>
                    </div>
                </div>

                {/* Zone de présentation */}
                <div className="neon-border p-6 rounded-lg">
                    <div className="bg-black/50 p-6 rounded-lg">
                        <p className="text-white text-lg md:text-xl leading-relaxed">
                            {/* Contenu de présentation à ajouter ici */}
                            Le Monde des Coiffeurs (LMDC) est la plus grande plateforme de formation en ligne pour les coiffeurs en France. LMDC contient une très grande communauté, 1 coiffeur sur 2 en France connait LMDC. La plateforme met en avant des formations et des lives.
                        </p>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .neon-text {
                    text-shadow: 
                        0 0 5px #fff,
                        0 0 10px #fff,
                        0 0 20px #fff,
                        0 0 40px #0ff,
                        0 0 80px #0ff,
                        0 0 90px #0ff,
                        0 0 100px #0ff,
                        0 0 150px #0ff;
                }

                .neon-corner {
                    position: relative;
                    background: rgba(255, 255, 255, 0.05);
                }

                /* Suppression des anciens coins */
                .neon-corner::before,
                .neon-corner::after {
                    display: none;
                }

                /* Nouveaux traits lumineux pour les angles */
                .neon-corner .corner-line {
                    position: absolute;
                    background: transparent;
                }
                .neon-corner .corner-line.horizontal {
                    width: 60px;
                    height: 4px;
                    background: #fff;
                    box-shadow:
                        0 0 8px #fff,
                        0 0 16px #0ff,
                        0 0 32px #0ff;
                }
                .neon-corner .corner-line.vertical {
                    width: 4px;
                    height: 60px;
                    background: #fff;
                    box-shadow:
                        0 0 8px #fff,
                        0 0 16px #0ff,
                        0 0 32px #0ff;
                }
                /* Positionnement des angles */
                .neon-corner .corner-tl-h { top: 0; left: 0; }
                .neon-corner .corner-tl-v { top: 0; left: 0; }
                .neon-corner .corner-br-h { bottom: 0; right: 0; }
                .neon-corner .corner-br-v { bottom: 0; right: 0; }
                .neon-corner .corner-tl-h { position: absolute; }
                .neon-corner .corner-tl-v { position: absolute; }
                .neon-corner .corner-br-h { position: absolute; }
                .neon-corner .corner-br-v { position: absolute; }

                .neon-border {
                    border: 2px solid #fff;
                    box-shadow: 
                        0 0 5px #fff,
                        0 0 10px #fff,
                        0 0 20px #0ff,
                        0 0 40px #0ff;
                    background: rgba(255, 255, 255, 0.05);
                }
            `}</style>
        </div>
    );
};

export default Presentation_entreprise; 