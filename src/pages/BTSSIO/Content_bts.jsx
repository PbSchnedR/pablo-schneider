import React from 'react';
import { motion } from 'framer-motion';

const Content_bts = () => {
    return (
        <div className="w-screen bg-black flex flex-col items-center py-10 p-10">
            <motion.div className="max-w-6xl w-full flex flex-col items-center">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold mb-6 text-[#00ff99] text-center"
                    style={{ fontFamily: "'Fira Mono', monospace" }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    Qu'est-ce que le <span className="text-white">BTS SIO</span> ?
                </motion.h2>
                <motion.p
                    className="text-gray-300 text-lg md:text-xl text-center mb-10"
                    style={{ fontFamily: "'Fira Mono', monospace" }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    Le BTS SIO (Services Informatiques aux Organisations) est un diplôme de niveau Bac+2. Il forme des experts en informatique, compétents aussi bien en développement qu'en administration et maintenance des réseaux informatiques.
                </motion.p>
                <motion.h3
                    className="text-2xl md:text-3xl font-semibold mb-8 text-[#00ff99] text-center"
                    style={{ fontFamily: "'Fira Mono', monospace" }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    Le BTS SIO propose deux options :
                </motion.h3>
                <div className="flex flex-col md:flex-row w-full gap-8">
                    {/* SISR */}
                    <div className="flex-1 bg-[#181818] rounded-lg shadow-lg p-8 border border-[#00ff99]/30">
                        <motion.h4
                            className="text-xl md:text-2xl font-bold mb-4 text-[#00ff99]"
                            style={{ fontFamily: "'Fira Mono', monospace" }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            Option <span className="text-white">SISR</span>
                        </motion.h4>
                        <motion.p
                            className="text-gray-300 mb-4"
                            style={{ fontFamily: "'Fira Mono', monospace" }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            L'option <span className="font-bold text-white">Solutions d'infrastructure, systèmes et réseaux</span> prépare des spécialistes en réseaux et équipements informatiques (installation, maintenance, sécurité). En obtenant un <span className="font-bold text-white">BTS SIO option SISR</span>, vous serez en mesure de gérer et administrer le réseau d'une organisation tout en garantissant sa sécurité et sa maintenance.
                        </motion.p>
                        <motion.p
                            className="text-gray-300 mb-2 font-semibold"
                            style={{ fontFamily: "'Fira Mono', monospace" }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            Les titulaires du BTS SIO option <span className="font-bold text-white">SISR</span> peuvent exercer les métiers suivants :
                        </motion.p>
                        <motion.ul
                            className="list-disc list-inside text-gray-200 pl-2"
                            style={{ fontFamily: "'Fira Mono', monospace" }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <li className="li-anim"><span>Administrateur systèmes et réseaux</span></li>
                            <li className="li-anim"><span>Informaticien support et déploiement</span></li>
                            <li className="li-anim"><span>Pilote d'exploitation</span></li>
                            <li className="li-anim"><span>Support systèmes et réseaux</span></li>
                        </motion.ul>
                    </div>
                    {/* SLAM */}
                    <div className="flex-1 bg-[#181818] rounded-lg shadow-lg p-8 border border-[#00ff99]/30">
                        <motion.h4 
                            className="text-xl md:text-2xl font-bold mb-4 text-[#00ff99]" 
                            style={{ fontFamily: "'Fira Mono', monospace" }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            Option <span className="text-white">SLAM</span>
                        </motion.h4>
                        <motion.p
                            className="text-gray-300 mb-4"
                            style={{ fontFamily: "'Fira Mono', monospace" }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            L'option <span className="font-bold text-white">Solutions logicielles et applications métiers</span> forme des spécialistes des logiciels (rédaction d'un cahier des charges, formulation des besoins et spécifications, développement, intégration au sein de la société).
                        </motion.p>
                        <motion.p
                            className="text-gray-300 mb-2 font-semibold"
                            style={{ fontFamily: "'Fira Mono', monospace" }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            Les techniciens supérieurs en informatique option <span className="font-bold text-white">SLAM</span> sont préparés aux métiers de :
                        </motion.p>
                        <motion.ul
                            className="list-disc list-inside text-gray-200 pl-2"
                            style={{ fontFamily: "'Fira Mono', monospace" }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <li className="li-anim"><span>Développeur d'applications informatiques</span></li>
                            <li className="li-anim"><span>Développeur informatique</span></li>
                            <li className="li-anim"><span>Analyste d'applications ou d'études</span></li>
                        </motion.ul>
                    </div>
                </div>
            </motion.div>
            {/* Tableau des examens */}
            <div className="w-full flex flex-col items-center mt-16">
                <motion.h3
                    className="text-2xl md:text-3xl font-semibold mb-6 text-[#00ff99] text-center"
                    style={{ fontFamily: "'Fira Mono', monospace" }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    Examens
                </motion.h3>
                <motion.div 
                    className="overflow-x-auto w-full max-w-4xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <table className="w-full border-collapse">
                        <thead>
                            <tr>
                                <th className="exam-th">Épreuve</th>
                                <th className="exam-th">Examens</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td className="exam-td">E1</td><td className="exam-td">Culture générale et expression</td></tr>
                            <tr><td className="exam-td">E2</td><td className="exam-td">Expression et communication en langue anglaise</td></tr>
                            <tr><td className="exam-td">E3</td><td className="exam-td">Mathématiques pour l'informatique.</td></tr>
                            <tr><td className="exam-td">E4</td><td className="exam-td">Culture économique juridique et managériale pour l'informatique.</td></tr>
                            <tr><td className="exam-td">E5</td><td className="exam-td">Support et mise à disposition de services informatiques</td></tr>
                            <tr><td className="exam-td">E6</td><td className="exam-td">Administration des systèmes et des réseaux (<span className='font-bold text-[#00ff99]'>option SISR</span>)</td></tr>
                            <tr><td className="exam-td">E6</td><td className="exam-td">Conception et développement d'applications (<span className='font-bold text-[#00ff99]'>option SLAM</span>)</td></tr>
                            <tr><td className="exam-td">E7</td><td className="exam-td">Cybersécurité des services informatiques (spécifique à l'option)</td></tr>
                        </tbody>
                    </table>
                </motion.div>
                <style>{`
                .exam-th, .exam-td {
                    background: #111;
                    color: #e5e7eb;
                    font-family: 'Fira Mono', monospace;
                    padding: 1rem 0.75rem;
                    border: 1px solid #222;
                    text-align: left;
                    transition: background 0.3s;
                }
                .exam-th {
                    font-size: 1.15rem;
                    font-weight: bold;
                    color: #00ff99;
                    letter-spacing: 0.05em;
                }
                .exam-td:hover, .exam-th:hover {
                    background: #23272a;
                }
                table {
                    border-radius: 0.5rem;
                    overflow: hidden;
                }
                `}</style>
            </div>
            <style>{`
            .li-anim span {
                transition: color 0.3s, font-weight 0.3s;
            }
            .li-anim {
                color: #d1d5db; /* text-gray-200 */
                font-family: 'Fira Mono', monospace;
                font-weight: normal;
                animation: select-anim 10s infinite;
            }
            .li-anim:nth-child(1) { animation-delay: 0s; }
            .li-anim:nth-child(2) { animation-delay: 2.5s; }
            .li-anim:nth-child(3) { animation-delay: 5s; }
            .li-anim:nth-child(4) { animation-delay: 7.5s; }

            @keyframes select-anim {
                0%   { color: #00ff99; font-weight: bold; }
                25%  { color: #00ff99; font-weight: bold; }
                26%  { color: #d1d5db; font-weight: normal; }
                100% { color: #d1d5db; font-weight: normal; }
            }
            `}</style>
        </div>
    );
};

export default Content_bts;