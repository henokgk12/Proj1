import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="bg-primary text-white font-bold py-3 px-6 rounded shadow-lg transition-all"
    >
      {children}
    </motion.button>
  );
};

export default Button;
