import Title_bts from './BTSSIO/Title_bts';
import Content_bts from './BTSSIO/Content_bts';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import BlackSpace from '../components/black_space';

const Presentation_bts = () => {
  return (
    <div className="relative w-full overflow-hidden flex flex-col">
      <Title_bts />
      <Content_bts />
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

export default Presentation_bts;