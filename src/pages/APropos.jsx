import React, { useEffect, useRef, useState } from 'react';
import fond_noir from '../assets/fond-noir.png';
import learning from '../assets/learning.mp4';

const APropos = () => {
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
        <div className="flex flex-col md:flex-row items-stretch justify-center w-full">
            <div className="w-full lg:w-1/2 relative flex items-center justify-center bg-black h-screen">
                {/* Image de fond */}
                <img
                    src={fond_noir}
                    alt="fond"
                    className="absolute top-0 left-0 w-full h-full object-cover z-0"
                />
                {/* Contenu centré */}
                <div className="relative z-20 flex flex-col items-center justify-evenly w-full h-full p-8 md:p-0">
                    <h2
                    ref={titleRef}
                    className={`text-2xl md:text-5xl font-bold mb-6 ${isVisible ? 'typewriter-apropos' : ''}`}
                    style={{ fontFamily: "'Fira Mono', monospace", color: "#fff" }}
                    >
                    À propos de moi :
                    </h2>
                    <p
                    className="text-2xl md:text-4xl text-gray-200 text-center"
                    style={{ fontFamily: "'Fira Mono', monospace" }}
                    >
                    Passionné par le développement informatique, j'aime concrétiser mes idées par le code et les innovations dans la tech.<br />
                    Mon parcours autodidacte m'a permis de découvrir ce monde et d'accéder au BTS SIO malgré un parcours radicalement différent au lycée.<br />
                    Curieux et rigoureux, je cherche toujours à apprendre et à innover.
                    </p>
                </div>
                <style>
                    {`
                    .typewriter-apropos {
                        overflow: hidden;
                        border-right: .15em solid #00ff99;
                        white-space: nowrap;
                        margin: 0 auto;
                        letter-spacing: .15em;
                        animation:
                        typing-apropos 2.5s steps(20, end) 1s 1 normal both,
                        blink-caret .75s step-end infinite;
                    }
                    @keyframes typing-apropos {
                        from { width: 0 }
                        to { width: 70% }
                    }
                    @keyframes blink-caret {
                        from, to { border-color: transparent }
                        50% { border-color: #00ff99; }
                    }
                    @media (max-width: 768px) {
                        .typewriter-apropos {
                            white-space: normal;
                            border-right: none;
                            animation: none;
                            width: 100%;
                        }
                    }
                    `}
                </style>
            </div>
            {/* Vidéo visible uniquement sur desktop, display: none sur mobile */}
            <div className="hidden lg:block w-1/2 h-screen relative">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src={learning} type="video/mp4" />
                </video>
            </div>
        </div>
    );
};

export default APropos;