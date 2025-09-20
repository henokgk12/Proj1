import { motion } from 'framer-motion';
import { useState } from 'react';

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000); // Reset after 3 seconds
  };

  return (
    <div className="max-w-xl mx-auto">
      {submitted && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-green-500 text-white p-4 rounded mb-6 text-center"
        >
          Thank you! Your message has been sent.
        </motion.div>
      )}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col gap-6"
      >
        <input
          type="text"
          placeholder="Your Name"
          required
          className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary transition-all"
        />
        <input
          type="email"
          placeholder="Your Email"
          required
          className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary transition-all"
        />
        <textarea
          placeholder="Message"
          required
          rows={5}
          className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary transition-all"
        ></textarea>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-primary text-white py-3 px-6 rounded shadow-lg"
        >
          Send Message
        </motion.button>
      </motion.form>
    </div>
  );
};

export default ContactForm;
