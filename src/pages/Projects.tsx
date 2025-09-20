import { NavLink } from "react-router-dom";

const projects = [
  { title: "Robotic Arm", img: "https://via.placeholder.com/400x250", link: "/projects" },
  { title: "Gearbox Design", img: "https://via.placeholder.com/400x250", link: "/projects" },
  { title: "3D Printed Drone", img: "https://via.placeholder.com/400x250", link: "/projects" },
  { title: "Hydraulic Press", img: "https://via.placeholder.com/400x250", link: "/projects" },
  { title: "Suspension System", img: "https://via.placeholder.com/400x250", link: "/projects" },
  { title: "Automated Conveyor", img: "https://via.placeholder.com/400x250", link: "/projects" },
];

export default function ProjectsGrid() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-10 text-center">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <NavLink
            key={project.title}
            to={project.link}
            className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <h3 className="text-white text-lg font-semibold">{project.title}</h3>
            </div>
          </NavLink>
        ))}
      </div>

      <div className="text-center mt-10">
        <NavLink
          to="/projects"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
        >
          View All Projects
        </NavLink>
      </div>
    </section>
  );
}
