// src/pages/Projects.tsx
import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ title, description }: { title: string; description: string }) => (
  <div className="p-4 bg-neutral-light rounded-xl shadow hover:scale-105 transition">
    <h2 className="text-lg font-bold">{title}</h2>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

const Projects = () => {
  const projects = [
    { title: "Portfolio Website", description: "A sleek personal portfolio built with React and Tailwind CSS." },
    { title: "E-commerce Store", description: "A modern online shop with cart and checkout features." },
    { title: "Dashboard", description: "An analytics dashboard with interactive charts." },
  ];

  return (
    <motion.div
      className="p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-2xl font-bold mb-4">Projects</h1>
      <div className="grid md:grid-cols-3 gap-4">
        {projects.map((project, i) => (
          <ProjectCard key={i} title={project.title} description={project.description} />
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
