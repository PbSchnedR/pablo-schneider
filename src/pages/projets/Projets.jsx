import Projets_title from './Projets_title';
import BlackSpace from '../../components/black_space';
import Projets_content from './Projets_content';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';

const Projets = () => {
    return (
        <div className="relative w-full overflow-hidden flex flex-col">
            <Projets_title />
            <BlackSpace />
            <Projets_content />
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                >
                <BlackSpace />
                <Footer />
                </motion.div>
        </div>
    );
};

export default Projets;