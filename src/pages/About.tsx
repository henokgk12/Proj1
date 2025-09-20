import { motion } from 'framer-motion';

const About = () => {
  const timeline = [
    'Graduated with Honors – 2022',
    'Completed Internship at XYZ Corp – 2023',
    'Official Work Experience at ABC Ltd – 2024',
  ];

  return (
    <div className="bg-white min-h-screen px-8 py-20">
      <motion.h1
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-4xl font-heading font-bold mb-8 text-center"
      >
        About Us
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="max-w-3xl mx-auto text-gray-700 text-lg mb-6 text-center"
      >
        We are a team of highly honored mechanical engineering graduates with real tested skills, internships, and official work experience. We decided to take our expertise pro-level to deliver outstanding solutions.
      </motion.p>

      {/* Timeline Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-12 space-y-6 max-w-3xl mx-auto"
      >
        {timeline.map((event, idx) => (
          <div key={idx} className="bg-primary text-white rounded-lg p-4 shadow-lg text-center">
            {event}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default About;
