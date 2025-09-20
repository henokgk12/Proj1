import { motion } from 'framer-motion';
import ProjectCard from '../pages/ProjectCard';

const Projects = () => {
  const projects = [
    { title: 'Robotic Arm', description: 'Internship project testing kinematics.', img: '/assets/robotic.jpg', tech: ['SolidWorks', 'MATLAB'] },
    { title: 'Hydraulic Lift', description: 'Official work prototype.', img: '/assets/lift.jpg', tech: ['AutoCAD', 'Simulation'] },
    { title: 'Wind Turbine Blade', description: 'Research and design.', img: '/assets/blade.jpg', tech: ['ANSYS', 'CFD'] },
  ];

  return (
    <div className="bg-neutralLight min-h-screen px-8 py-20">
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-4xl font-heading font-bold mb-12 text-center"
      >
        Projects
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
