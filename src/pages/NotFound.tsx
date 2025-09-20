import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-neutralLight px-6 text-center">
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-6xl font-heading font-bold text-primary mb-4"
      >
        404
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-xl text-gray-700 mb-6"
      >
        Oops! The page you are looking for doesn’t exist.
      </motion.p>
      <motion.div whileHover={{ scale: 1.05 }}>
        <Link
          to="/"
          className="bg-primary text-white py-3 px-6 rounded shadow-lg transition-all"
        >
          Go Back Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
