import LMDC_title from './LMDC/lmdc-title';
import Presentation_entreprise from './LMDC/presentation_entreprise';
import Missions from './LMDC/missions';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import Sidebar from '../Sidebar';

const LMDC = () => {
    return (
        <div className="relative w-full overflow-hidden flex flex-col">
            <Sidebar />
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <LMDC_title />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <Presentation_entreprise />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <Missions />
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <Footer />
            </motion.div>
        </div>
    );
};

export default LMDC;