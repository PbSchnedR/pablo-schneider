import Veille_title from './veille-tech/Veille-title';
import Veille_method from './veille-tech/Veille-method';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import BlackSpace from '../components/black_space';
import Veille_content from './veille-tech/Veille-content';

const Veille = () => {
    return (
        <div classname="relative w-full overflow-hidden flex flex-col">
            <Veille_title />
            <Veille_method />
            <motion.div
                initial={{ opacity: 0 }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1 }}
            >
                <Veille_content />
                <Footer />
            </motion.div>
        </div>
    );
};

export default Veille;