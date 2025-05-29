import { motion } from 'framer-motion';
import DechiffrementTitle from '../../components/DechiffrementTitle';
import { useEffect, useRef, useState } from 'react';

const ProjectCard = ({ title, description, image, isReversed }) => {
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
        <motion.div 
            className="w-full h-auto min-h-screen flex flex-col items-center justify-center lg:flex-row lg:h-screen"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            {/* Image toujours au-dessus sur mobile/tablette, à gauche/droite sur desktop */}
            <motion.div 
                className="w-full h-64 sm:h-80 md:h-96 lg:w-1/2 lg:h-full flex items-center justify-center p-4 lg:p-8 order-1"
                initial={{ x: isReversed && window.innerWidth >= 1024 ? 50 : -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <motion.img 
                    src={image} 
                    alt={title} 
                    className="w-full h-full object-contain rounded-xl shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                />
            </motion.div>

            {/* Titre et texte */}
            <motion.div 
                ref={titleRef}
                className="w-full lg:w-1/2 flex flex-col justify-center items-center p-4 lg:p-8 order-2"
                initial={{ x: isReversed && window.innerWidth >= 1024 ? -50 : 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <DechiffrementTitle title={title} isVisible={isVisible} />
                <motion.p 
                    className="text-white mt-4 text-base sm:text-lg md:text-xl lg:text-lg text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    {description}
                </motion.p>
            </motion.div>
        </motion.div>
    );
};

export default ProjectCard;