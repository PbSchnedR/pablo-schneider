import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

import html from '../../assets/carroussel/HTML.png';
import css from '../../assets/carroussel/CSS.png';
import js from '../../assets/carroussel/JS.png';
import react from '../../assets/carroussel/react.png';
import nodejs from '../../assets/carroussel/nodejs.png';
import ts from '../../assets/carroussel/TS.png';
import python from '../../assets/carroussel/python.png';
import godot from '../../assets/carroussel/godot.png';
import vbox from '../../assets/carroussel/vbox.png';
import tailwind from '../../assets/carroussel/tailwind.png';


const images = [
    {
        src: html,
        alt: 'HTML',
    },
    {
        src: css,
        alt: 'CSS',
    },
    {
        src: js,
        alt: 'JavaScript',
    },
    {
        src: react,
        alt: 'React',
    },
    {
        src: nodejs,
        alt: 'Node',
    },
    {
        src: ts,
        alt: 'TypeScript',
    },
    {
        src: python,
        alt: 'Python',
    },
    {
        src: godot,
        alt: 'godot',
    },
    {
        src: vbox,
        alt: 'VirtualBox',
    },
    {
        src: tailwind,
        alt: 'Tailwind',
    },
];

const Carroussel = () => {
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
        <div className="w-full h-[50vh] flex flex-col items-center justify-center bg-black">
            <motion.div
                className="w-full flex items-center justify-center mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <h2
                    ref={titleRef}
                    className={`text-4xl md:text-6xl lg:text-7xl font-bold ${isVisible ? 'typewriter-competences' : ''}`}
                    style={{ fontFamily: "'Fira Mono', monospace", color: "#fff" }}
                >
                    Mes compétences
                </h2>
            </motion.div>

            <motion.div
                className="w-full h-full flex items-center justify-center overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                <motion.div
                    className="flex space-x-8"
                    animate={{
                        x: [0, -1000, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    {images.map((image, index) => (
                        <motion.img
                            key={index}
                            src={image.src}
                            alt={image.alt}
                            className="w-[15vw] h-[15vh] object-contain"
                            whileHover={{ scale: 1.2 }}
                            transition={{ duration: 0.3 }}
                        />
                    ))}
                    {/* Duplication des images pour un défilement continu */}
                    {images.map((image, index) => (
                        <motion.img
                            key={`duplicate-${index}`}
                            src={image.src}
                            alt={image.alt}
                            className="w-[15vw] h-[15vh] object-contain"
                            whileHover={{ scale: 1.2 }}
                            transition={{ duration: 0.3 }}
                        />
                    ))}
                </motion.div>
            </motion.div>

            <style>
                {`
                .typewriter-competences {
                    overflow: hidden;
                    border-right: .15em solid #00ff99;
                    white-space: nowrap;
                    margin: 0 auto;
                    letter-spacing: .15em;
                    animation:
                    typing-competences 2.5s steps(20, end) 1s 1 normal both,
                    blink-caret .75s step-end infinite;
                }
                @keyframes typing-competences {
                    from { width: 0 }
                    to { width: 60% }
                }
                @media (max-width: 640px) {
                    .typewriter-competences {
                        animation:
                        typing-competences-mobile 2.5s steps(20, end) 1s 1 normal both,
                        blink-caret .75s step-end infinite;
                    }
                    @keyframes typing-competences-mobile {
                        from { width: 0 }
                        to { width: 90% }
                    }
                }
                @media (max-width: 820px) {
                    .typewriter-competences {
                        animation:
                        typing-competences-mobile 2.5s steps(20, end) 1s 1 normal both,
                        blink-caret .75s step-end infinite;
                    }
                    @keyframes typing-competences-mobile {
                        from { width: 0 }
                        to { width: 90% }
                    }
                }
                @keyframes blink-caret {
                    from, to { border-color: transparent }
                    50% { border-color: #00ff99; }
                }
                `}
            </style>
        </div>
    );
};

export default Carroussel;