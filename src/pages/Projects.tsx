import { motion } from "framer-motion";

const projectsData = [
  {
    title: "Hydraulic Pump Design",
    description: "Optimized pump design for industrial applications.",
    img: "https://via.placeholder.com/300x200", // Replace with real images later
  },
  {
    title: "Robotic Arm Assembly",
    description: "High-precision robotic arm prototype for automation.",
    img: "https://via.placeholder.com/300x200",
  },
  {
    title: "Gearbox Simulation",
    description: "Stress testing and efficiency simulation for gearbox components.",
    img: "https://via.placeholder.com/300x200",
  },
];

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Projects</h1>
      <div className="grid gap-6 md:grid-cols-3">
        {projectsData.map((project, i) => (
          <motion.div
            key={project.title}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            whileHover={{ y: -5, scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.5 }}
          >
            <img src={project.img} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-600">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
