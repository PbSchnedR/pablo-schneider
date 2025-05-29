import Sidebar from '../../Sidebar.jsx';

const Title_bts = () => {
    return (
        <div className="relative w-full overflow-hidden">
            <Sidebar />
            <div className="w-screen h-5/8 bg-black flex flex-col justify-center items-center py-100">
                {/* Version Desktop (xl et plus) */}
                <h1
                    className="hidden xl:block text-9xl font-bold typewriter-btssio"
                    style={{ fontFamily: "'Fira Mono', monospace", color: "#00ff99" }}
                >
                    Le BTS SIO
                </h1>

                {/* Version LG */}
                <h1
                    className="hidden lg:block xl:hidden text-8xl font-bold typewriter-btssio-lg"
                    style={{ fontFamily: "'Fira Mono', monospace", color: "#00ff99" }}
                >
                    Le BTS SIO
                </h1>

                {/* Version Mobile et Tablette */}
                <div className="lg:hidden flex flex-col items-center">
                    <h1
                        className="text-6xl md:text-9xl font-bold typewriter-bts-top"
                        style={{ fontFamily: "'Fira Mono', monospace", color: "#00ff99" }}
                    >
                        Le BTS
                    </h1>
                    <h1
                        className="text-6xl md:text-9xl font-bold typewriter-bts-bottom"
                        style={{ fontFamily: "'Fira Mono', monospace", color: "#00ff99" }}
                    >
                        SIO
                    </h1>
                </div>
            </div>
            <style>
                {`
                /* Animation Desktop */
                .typewriter-btssio {
                    overflow: hidden;
                    border-right: .15em solid #00ff99;
                    white-space: nowrap;
                    margin: 0 auto;
                    letter-spacing: .15em;
                    animation:
                    typing-btssio 2.5s steps(20, end) 1s 1 normal both,
                    blink-caret .75s step-end infinite;
                }

                /* Animation LG */
                .typewriter-btssio-lg {
                    overflow: hidden;
                    border-right: .15em solid #00ff99;
                    white-space: nowrap;
                    margin: 0 auto;
                    letter-spacing: .15em;
                    animation:
                    typing-btssio-lg 2.5s steps(20, end) 1s 1 normal both,
                    blink-caret .75s step-end infinite;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                }

                /* Animation Mobile/Tablette */
                .typewriter-bts-top {
                    overflow: hidden;
                    border-right: .15em solid #00ff99;
                    white-space: nowrap;
                    margin: 0 auto;
                    letter-spacing: .15em;
                    animation:
                    typing-bts-top 1.5s steps(10, end) 1s 1 normal both,
                    blink-caret-top .75s step-end 4,
                    hide-caret 0s linear 3s forwards;
                }

                .typewriter-bts-bottom {
                    overflow: hidden;
                    border-right: .15em solid #00ff99;
                    white-space: nowrap;
                    margin: 0 auto;
                    letter-spacing: .15em;
                    animation:
                    typing-bts-bottom 1.5s steps(10, end) 2s 1 normal both,
                    blink-caret .75s step-end infinite;
                }

                @keyframes typing-btssio {
                    from { width: 0 }
                    to { width: 70% }
                }

                @keyframes typing-btssio-lg {
                    from { width: 0 }
                    to { width: 60% }
                }

                @keyframes typing-bts-top {
                    from { width: 0 }
                    to { width: 100% }
                }

                @keyframes typing-bts-bottom {
                    from { width: 0 }
                    to { width: 50% }
                }

                @keyframes blink-caret-top {
                    from, to { border-color: transparent }
                    50% { border-color: #00ff99; }
                }

                @keyframes hide-caret {
                    to { border-right: none; }
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

export default Title_bts;