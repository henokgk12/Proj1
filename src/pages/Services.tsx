import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    { title: 'Mechanical Design', description: 'CAD design and prototyping solutions.' },
    { title: 'Simulation & Testing', description: 'FEA, CFD, and lab testing expertise.' },
    { title: 'Consultancy', description: 'Engineering insights for projects and startups.' },
  ];

  return (
    <div className="bg-white min-h-screen px-8 py-20">
      <motion.h1
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-4xl font-heading font-bold mb-12 text-center"
      >
        Services
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((s) => (
          <motion.div
            key={s.title}
            whileHover={{ scale: 1.05 }}
            className="bg-primary text-white rounded-lg p-6 shadow-lg transition-all"
          >
            <h3 className="font-bold text-xl mb-2">{s.title}</h3>
            <p>{s.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
