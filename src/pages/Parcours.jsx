import React, { useEffect, useRef, useState } from 'react';
import DechiffrementTitle from '../components/DechiffrementTitle';
import TimelineItem from './accueil/TimelineItem';

const Parcours = () => {
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

    const timelineData = [
        {
            year: "2024 - 2026",
            title: "BTS SIO - Option SLAM",
            description: "Formation en développement web et applications à Nexa Digital School."
        },
        {
            year: "2024",
            title: "Début du parcours autodidacte",
            description: "Début du parcours autodidacte en informatique à côté des cours du lycée. Découverte du développement et des langages de programmation."
        },
        {
            year: "2021 - 2024",
            title: "Baccalauréat Général",
            description: "Obtention du baccalauréat avec mention Bien. Spécialités : Sciences Économiques et Sociales (S.E.S) et Géopolitique."
        },
    ];

    return (
        <div className="w-full min-h-screen flex flex-col md:flex-row">
            {/* Section titre */}
            <div className="w-full md:w-1/3 h-auto md:h-screen bg-black flex items-center justify-center py-8 md:py-0">
                <div className="px-8" ref={titleRef}>
                    <DechiffrementTitle title="Mon parcours" isVisible={isVisible} />
                </div>
            </div>

            {/* Section frise */}
            <div className="w-full md:w-2/3 h-auto md:h-screen bg-black overflow-y-auto">
                <div className="relative w-full h-full p-4 md:p-16">
                    <div className="max-w-3xl mx-auto">
                        {timelineData.map((item, index) => (
                            <TimelineItem 
                                key={index}
                                {...item}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Parcours;