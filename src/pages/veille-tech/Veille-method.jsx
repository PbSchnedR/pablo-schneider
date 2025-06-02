import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaDiscord, FaRss, FaXTwitter } from 'react-icons/fa6';

const VeilleMethod = () => {
    const [isVisible, setIsVisible] = useState(false);
    const titleRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (titleRef.current) {
            observer.observe(titleRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div className="w-full min-h-screen bg-black py-20">
            {/* Titre animé */}
            <motion.div
                ref={titleRef}
                className="text-center mb-16"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                {/* Version Desktop (xl et plus) */}
                <h2 
                    className={`hidden xl:block text-5xl font-bold ${isVisible ? 'typewriter-method' : ''}`}
                    style={{ fontFamily: "'Fira Mono', monospace", color: "#00BFFF" }}
                >
                    Mes méthodes de veille
                </h2>

                {/* Version LG */}
                <h2 
                    className={`hidden lg:block xl:hidden text-4xl font-bold ${isVisible ? 'typewriter-method-lg' : ''}`}
                    style={{ fontFamily: "'Fira Mono', monospace", color: "#00BFFF" }}
                >
                    Mes méthodes de veille
                </h2>

                {/* Version Mobile et Tablette */}
                <div className="lg:hidden flex flex-col items-center">
                    <h2
                        className={`text-3xl md:text-4xl font-bold ${isVisible ? 'typewriter-method-top' : ''}`}
                        style={{ fontFamily: "'Fira Mono', monospace", color: "#00BFFF" }}
                    >
                        Mes méthodes
                    </h2>
                    <h2
                        className={`text-3xl md:text-4xl font-bold ${isVisible ? 'typewriter-method-bottom' : ''}`}
                        style={{ fontFamily: "'Fira Mono', monospace", color: "#00BFFF" }}
                    >
                        de veille
                    </h2>
                </div>
            </motion.div>

            {/* Contenu principal */}
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Discord */}
                    <motion.div 
                        className="bg-black/40 backdrop-blur-sm p-8 rounded-lg border border-[#00BFFF]/20 hover:border-[#00BFFF] transition-all duration-300"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        whileHover={{ scale: 1.02 }}
                    >
                        <div className="flex flex-col items-center text-center">
                            <FaDiscord className="text-6xl mb-4" style={{ color: "#00BFFF" }} />
                            <h3 
                                className="text-2xl font-bold mb-4"
                                style={{ fontFamily: "'Fira Mono', monospace", color: "#00BFFF" }}
                            >
                                Discord
                            </h3>
                            <p 
                                className="text-gray-300"
                                style={{ fontFamily: "'Fira Mono', monospace" }}
                            >
                                Utilisation de serveurs Discord dédiés à la veille technologique pour rester informé des dernières actualités et échanger avec la communauté.
                            </p>
                        </div>
                    </motion.div>

                    {/* Flux RSS */}
                    <motion.div 
                        className="bg-black/40 backdrop-blur-sm p-8 rounded-lg border border-[#00BFFF]/20 hover:border-[#00BFFF] transition-all duration-300"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        whileHover={{ scale: 1.02 }}
                    >
                        <div className="flex flex-col items-center text-center">
                            <FaRss className="text-6xl mb-4" style={{ color: "#00BFFF" }} />
                            <h3 
                                className="text-2xl font-bold mb-4"
                                style={{ fontFamily: "'Fira Mono', monospace", color: "#00BFFF" }}
                            >
                                Flux RSS
                            </h3>
                            <p 
                                className="text-gray-300"
                                style={{ fontFamily: "'Fira Mono', monospace" }}
                            >
                                Suivi des flux RSS de sites spécialisés pour recevoir automatiquement les dernières mises à jour et articles pertinents.
                            </p>
                        </div>
                    </motion.div>

                    {/* X (Twitter) */}
                    <motion.div 
                        className="bg-black/40 backdrop-blur-sm p-8 rounded-lg border border-[#00BFFF]/20 hover:border-[#00BFFF] transition-all duration-300"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        whileHover={{ scale: 1.02 }}
                    >
                        <div className="flex flex-col items-center text-center">
                            <FaXTwitter className="text-6xl mb-4" style={{ color: "#00BFFF" }} />
                            <h3 
                                className="text-2xl font-bold mb-4"
                                style={{ fontFamily: "'Fira Mono', monospace", color: "#00BFFF" }}
                            >
                                X (Twitter)
                            </h3>
                            <p 
                                className="text-gray-300"
                                style={{ fontFamily: "'Fira Mono', monospace" }}
                            >
                                Suivi des comptes influents et des hashtags pertinents pour rester à jour sur les tendances et innovations technologiques.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>

            <style>
                {`
                    /* Animation Desktop */
                    .typewriter-method {
                        overflow: hidden;
                        border-right: .15em solid #00BFFF;
                        white-space: nowrap;
                        margin: 0 auto;
                        letter-spacing: .15em;
                        animation:
                            typing-method 2.5s steps(20, end) 1s 1 normal both,
                            blink-caret .75s step-end infinite;
                    }

                    /* Animation LG */
                    .typewriter-method-lg {
                        overflow: hidden;
                        border-right: .15em solid #00BFFF;
                        white-space: nowrap;
                        margin: 0 auto;
                        letter-spacing: .15em;
                        animation:
                            typing-method-lg 2.5s steps(20, end) 1s 1 normal both,
                            blink-caret .75s step-end infinite;
                    }

                    /* Animation Mobile/Tablette */
                    .typewriter-method-top {
                        overflow: hidden;
                        border-right: .15em solid #00BFFF;
                        white-space: nowrap;
                        margin: 0 auto;
                        letter-spacing: .15em;
                        animation:
                            typing-method-top 1.5s steps(10, end) 1s 1 normal both,
                            blink-caret-top .75s step-end 4,
                            hide-caret 0s linear 3s forwards;
                    }

                    .typewriter-method-bottom {
                        overflow: hidden;
                        border-right: .15em solid #00BFFF;
                        white-space: nowrap;
                        margin: 0 auto;
                        letter-spacing: .15em;
                        animation:
                            typing-method-bottom 1.5s steps(10, end) 2s 1 normal both,
                            blink-caret .75s step-end infinite;
                    }

                    @keyframes typing-method {
                        from { width: 0 }
                        to { width: 50% }
                    }

                    @keyframes typing-method-lg {
                        from { width: 0 }
                        to { width: 60% }
                    }

                    @keyframes typing-method-top {
                        from { width: 0 }
                        to { width: 100% }
                    }

                    @keyframes typing-method-bottom {
                        from { width: 0 }
                        to { width: 60% }
                    }

                    @keyframes blink-caret-top {
                        from, to { border-color: transparent }
                        50% { border-color: #00BFFF; }
                    }

                    @keyframes hide-caret {
                        to { border-right: none; }
                    }

                    @keyframes blink-caret {
                        from, to { border-color: transparent }
                        50% { border-color: #00BFFF; }
                    }
                `}
            </style>
        </div>
    );
};

export default VeilleMethod;
