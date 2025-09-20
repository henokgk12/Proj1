import { motion } from 'framer-motion';

interface SectionHeadingProps {
  children: React.ReactNode;
}

const SectionHeading = ({ children }: SectionHeadingProps) => {
  return (
    <motion.h2
      initial={{ x: -50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="text-3xl font-heading font-bold mb-12 text-center"
    >
      {children}
    </motion.h2>
  );
};

export default SectionHeading;
