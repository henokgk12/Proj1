import { motion } from "framer-motion";

const servicesData = [
  {
    title: "3D Modeling",
    description: "Precision 3D CAD designs for mechanical components and assemblies.",
  },
  {
    title: "Prototyping",
    description: "Rapid prototyping using advanced manufacturing techniques.",
  },
  {
    title: "Simulation & Analysis",
    description: "Finite Element Analysis (FEA) & computational simulations.",
  },
];

export default function Services() {
  return (
    <div className="max-w-6xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Services</h1>
      <div className="grid gap-6 md:grid-cols-3">
        {servicesData.map((service, i) => (
          <motion.div
            key={service.title}
            className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            whileHover={{ y: -5, scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.5 }}
          >
            <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
            <p className="text-gray-600">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
