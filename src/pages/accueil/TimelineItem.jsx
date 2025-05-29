import { motion } from 'framer-motion';


const TimelineItem = ({ year, title, description }) => {
    return (
        <motion.div 
            className="w-full relative pl-12 border-l-2 border-[#00ff99] mb-12"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
        >
            <div className="absolute -left-2 top-0 w-4 h-4 bg-[#00ff99] rounded-full" 
                style={{ boxShadow: '0 0 15px #00ff99' }}
            />
            <motion.h3 
                className="text-3xl font-bold mb-4"
                style={{ fontFamily: "'Fira Mono', monospace", color: "#00ff99" }}
            >
                {year}
            </motion.h3>
            <motion.h4 
                className="text-2xl font-semibold mb-4"
                style={{ fontFamily: "'Fira Mono', monospace", color: "#fff" }}
            >
                {title}
            </motion.h4>
            <motion.p 
                className="text-gray-300 text-lg"
                style={{ fontFamily: "'Fira Mono', monospace" }}
            >
                {description}
            </motion.p>
        </motion.div>
    );
};

export default TimelineItem;
