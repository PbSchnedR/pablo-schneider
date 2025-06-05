import React from 'react';
import MissionCard from './mission_card';
import homepage from '../../assets/lmdc/homepage.png';
import cart from '../../assets/lmdc/cart.png';
import mongodb from '../../assets/lmdc/Mongodb.webp';
import nodejs from '../../assets/lmdc/nodejs.webp';

const Missions = () => {
    return (
        <div className="w-full flex flex-col items-center bg-black">
            <h2 className="text-5xl md:text-7xl font-bold text-center text-white neon-text py-16">
                Mes missions
            </h2>
            <MissionCard image={homepage} alt="Création de pages">
                Création de pages et modaux pour le frontend du site e-commerce
            </MissionCard>
            <MissionCard image={cart} alt="Paiement Stripe" reverse>
                Intégration de paiements avec Stripe
            </MissionCard>
            <MissionCard image={mongodb} alt="Migration MongoDB">
                Migration de la Base de Données Airtable vers MongoDB
            </MissionCard>
            <MissionCard image={nodejs} alt="NodeJS" reverse>
                Création des modèles, routes et controlleurs pour le backend du site e-commerce
            </MissionCard>
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
            `}</style>
        </div>
    );
};

export default Missions; 