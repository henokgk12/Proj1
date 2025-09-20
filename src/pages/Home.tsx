import { motion } from 'framer-motion';

interface Engineer {
  name: string;
  role: string;
  img?: string;
  skills?: string[];
}

const Home = () => {
  const engineers: Engineer[] = [
    { name: 'Jane Doe', role: 'Mechanical Engineer', img: '/assets/jane.jpg', skills: ['CAD', 'Simulation'] },
    { name: 'John Smith', role: 'Mechanical Engineer', img: '/assets/john.jpg', skills: ['Design', 'Prototyping'] },
    { name: 'Alex Kim', role: 'Mechanical Engineer', img: '/assets/alex.jpg', skills: ['Analysis', 'Testing'] },
  ];

  // Inline EngineerCard component with typed props
  const EngineerCard: React.FC<Engineer> = ({ name, role, img, skills = [] }) => (
    <div className="bg-white rounded-lg shadow p-6 text-center">
      {img && <img src={img} alt={name} className="w-24 h-24 mx-auto rounded-full mb-4" />}
      <h3 className="font-bold text-lg">{name}</h3>
      <p className="text-gray-600 mb-2">{role}</p>
      {skills.length > 0 && (
        <div className="flex flex-wrap justify-center gap-2 mt-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-1 rounded"
            >
              {skill}
            </span>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="bg-neutralLight min-h-screen">
      {/* Hero Section */}
      <section className="h-screen bg-gradient-to-br from-primary to-blue-500 flex flex-col justify-center items-center text-center text-white px-6">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl font-heading font-bold mb-4"
        >
          Elite Mechanical Engineering Graduates
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-xl mb-8 max-w-xl"
        >
          Proven Skills. Real Projects. Professional Impact.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-secondary text-white font-bold py-3 px-6 rounded shadow-lg"
        >
          View Our Engineers
        </motion.button>
      </section>

      {/* Engineers Section */}
      <section id="about" className="py-20 px-8 bg-neutralLight">
        <h2 className="text-3xl font-heading font-bold mb-12 text-center">Our Engineers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {engineers.map((e) => (
            <EngineerCard key={e.name} {...e} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
