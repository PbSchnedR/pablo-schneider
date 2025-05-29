import ProjectCard from './ProjectCard';
import MainTitle from '../../assets/projets/MainTitle.jpeg';
import gsb from '../../assets/projets/gsb.png';
import Josselan from '../../assets/projets/Josselan.png';
import lmdc from '../../assets/projets/lmdc.png';
import coach_ai from '../../assets/projets/coach-ai.mp4';

const Projets_content = () => {
    const projects = [
        {
            title: "Coach AI",
            description: "Une application innovante d'entraînement personnel assistée par l'IA. Développée avec React et intégrant des modèles d'IA pour l'analyse des mouvements et la personnalisation des entraînements.",
            media: coach_ai,
            isVideo: true
        },
        {
            title: "Reverse Mario",
            description: "Un jeu de plateforme innovant où vous contrôlez les ennemis au lieu de Mario. Développé avec d'abord en Phaser.js puis migré sur Godot, ce projet explore les mécaniques de jeu inversées et propose une expérience unique avec encore plein de potentiel.",
            media: MainTitle,
            isVideo: false
        },
        {
            title: "Contexte GSB",
            description: "Application de gestion pour l'entreprise Galaxy Swiss Bourdin. Développée en React pour le frontend et Node.js pour le backend, elle permet la gestion des notes de frais des salariés.",
            media: gsb,
            isVideo: false,
            isReversed: true
        },
        {
            title: "LMDC",
            description: "Le Monde des Coiffeurs est une plateforme phare pour la formation de coiffeurs en France. Dans le cadre de mon alternance, j'ai aidé au développement d'un site de e-commerce en React, Node.js et des bibliothèques tierces comme Stripe pour les paiements.",
            media: lmdc,
            isVideo: false,
            isReversed: true
        },
        {
            title: "Josslan",
            description: "Application réalisée en groupe pour la gestion de tournois en LAN. Développée avec React et Node.js, elle permet la gestion des tournois, des participants et des résultats.",
            media: Josselan,
            isVideo: false,
            isReversed: true
        }
    ];

    return (
        <div className="w-screen bg-black flex flex-col items-center">
            {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
            ))}
        </div>
    );
};

export default Projets_content;