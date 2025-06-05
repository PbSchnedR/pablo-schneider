import React from 'react';

const MissionCard = ({ image, alt, children, reverse }) => {
    return (
        <div className={`min-h-[75vh] md:min-h-screen flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} items-center justify-center w-full px-4 py-12`}>
            <div className="w-full md:w-1/2 h-full flex justify-center items-center mb-8 md:mb-0">
                <img src={image} alt={alt} className="h-full w-full object-contain rounded-2xl shadow-2xl" />
            </div>
            <div className="w-full md:w-1/2 flex items-center justify-center lg:px-8">
                <div className="bg-black/60 p-10 md:p-16 lg:p-12 rounded-2xl border border-white/20 shadow-2xl text-white text-2xl md:text-4xl lg:text-3xl font-semibold neon-desc max-w-2xl lg:max-w-xl">
                    {children}
                </div>
            </div>
            <style jsx>{`
                .neon-desc {
                    box-shadow:
                        0 0 12px #fff,
                        0 0 24px #0ff,
                        0 0 48px #0ff;
                }
            `}</style>
        </div>
    );
};

export default MissionCard; 