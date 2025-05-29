import Sidebar from '../../Sidebar';
import { motion } from 'framer-motion';

const Veille_title = () => {
    return (
        <div className="relative h-screen w-full overflow-hidden">
            <Sidebar />
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover"
            >
                <source src="/src/assets/techno.mp4" type="video/mp4" />
            </video>
            <motion.div 
                className="absolute inset-0 bg-black/30"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            ></motion.div>

            <div className="relative z-10 flex items-center justify-center h-full">
                <motion.div 
                    className="text-center text-white"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    {/* Version Desktop (xl et plus) */}
                    <motion.h1
                        className="hidden xl:block text-7xl font-bold mb-4 typewriter-veille"
                        style={{ fontFamily: "'Fira Mono', monospace" }}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        Veille Technologique
                    </motion.h1>

                    {/* Version LG */}
                    <motion.h1
                        className="hidden lg:block xl:hidden text-6xl font-bold mb-4 typewriter-veille-lg"
                        style={{ fontFamily: "'Fira Mono', monospace" }}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        Veille Technologique
                    </motion.h1>

                    {/* Version Mobile et Tablette */}
                    <div className="lg:hidden flex flex-col items-center">
                        <motion.h1
                            className="text-4xl md:text-6xl font-bold mb-4 typewriter-veille-top"
                            style={{ fontFamily: "'Fira Mono', monospace" }}
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                        >
                            Veille
                        </motion.h1>
                        <motion.h1
                            className="text-4xl md:text-6xl font-bold mb-4 typewriter-veille-bottom"
                            style={{ fontFamily: "'Fira Mono', monospace" }}
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 1.3 }}
                        >
                            Technologique
                        </motion.h1>
                    </div>
                </motion.div>
            </div>

            <style>
                {`
                /* Animation Desktop */
                .typewriter-veille {
                    overflow: hidden;
                    border-right: .15em solid #1E90FF;
                    white-space: nowrap;
                    margin: 0 auto;
                    letter-spacing: .15em;
                    animation:
                        typing-veille 2.5s steps(20, end) 1s 1 normal both,
                        blink-caret .75s step-end infinite;
                }

                /* Animation LG */
                .typewriter-veille-lg {
                    overflow: hidden;
                    border-right: .15em solid #1E90FF;
                    white-space: nowrap;
                    margin: 0 auto;
                    letter-spacing: .15em;
                    animation:
                        typing-veille-lg 2.5s steps(20, end) 1s 1 normal both,
                        blink-caret .75s step-end infinite;
                }

                /* Animation Mobile/Tablette */
                .typewriter-veille-top {
                    overflow: hidden;
                    border-right: .15em solid #1E90FF;
                    white-space: nowrap;
                    margin: 0 auto;
                    letter-spacing: .15em;
                    animation:
                        typing-veille-top 1.5s steps(10, end) 1s 1 normal both,
                        blink-caret-top .75s step-end 4,
                        hide-caret 0s linear 3s forwards;
                }

                .typewriter-veille-bottom {
                    overflow: hidden;
                    border-right: .15em solid #1E90FF;
                    white-space: nowrap;
                    margin: 0 auto;
                    letter-spacing: .15em;
                    animation:
                        typing-veille-bottom 1.5s steps(10, end) 2s 1 normal both,
                        blink-caret .75s step-end infinite;
                }

                @keyframes typing-veille {
                    from { width: 0 }
                    to { width: 100% }
                }

                @keyframes typing-veille-lg {
                    from { width: 0 }
                    to { width: 100% }
                }

                @keyframes typing-veille-top {
                    from { width: 0 }
                    to { width: 100% }
                }

                @keyframes typing-veille-bottom {
                    from { width: 0 }
                    to { width: 100% }
                }

                @keyframes blink-caret-top {
                    from, to { border-color: transparent }
                    50% { border-color: #1E90FF; }
                }

                @keyframes hide-caret {
                    to { border-right: none; }
                }

                @keyframes blink-caret {
                    from, to { border-color: transparent }
                    50% { border-color: #1E90FF; }
                }
                `}
            </style>
        </div>
    );
};

export default Veille_title;