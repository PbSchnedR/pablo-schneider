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
            year: "2023 - 2024",
            title: "BTS SIO - Option SLAM",
            description: "Formation en développement web et applications au lycée Saint-Joseph de Gabarret. Spécialisation en développement d'applications et sites web. Projets : Portfolio personnel, Application de gestion pour laboratoire."
        },
        {
            year: "2022 - 2023",
            title: "Stage Développeur Web",
            description: "Stage de 3 mois chez TechInnovate. Développement d'interfaces utilisateur avec React et intégration d'APIs REST. Participation à la refonte du site e-commerce."
        },
        {
            year: "2021 - 2022",
            title: "Baccalauréat Général",
            description: "Obtention du baccalauréat avec mention Bien. Spécialités : Numérique et Sciences Informatiques (NSI), Mathématiques. Projet de fin d'année : Développement d'un jeu vidéo en Python."
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