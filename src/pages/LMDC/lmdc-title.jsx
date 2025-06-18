const LMDC_title = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-black">
            <h1 className="text-9xl font-bold text-white neon-text">
                LMDC
            </h1>
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
                    animation: flicker 2s infinite alternate;
                }
                @keyframes flicker {
                    0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
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
                    20%, 24%, 55% {
                        text-shadow: none;
                    }
                }
            `}</style>
        </div>
    );
};

export default LMDC_title;