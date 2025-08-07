import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HomeButton = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <Link
                to="/pokemon" 
                className="px-6 py-2 bg-green-500 text-white rounded-xl shadow-md hover:bg-green-600 transition duration-300"
            >
                Show All
            </Link>
        </motion.div>
    );
};

export default HomeButton;