import { motion } from 'framer-motion';

interface EngineerCardProps {
  name: string;
  role: string;
  img: string;
  skills: string[];
}

const EngineerCard = ({ name, role, img, skills }: EngineerCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center transition-all"
    >
      <img src={img} alt={name} className="w-32 h-32 rounded-full mb-4 object-cover" />
      <h3 className="font-heading text-xl font-bold">{name}</h3>
      <p className="text-sm text-gray-500 mb-3">{role}</p>
      <div className="flex flex-wrap justify-center gap-2">
        {skills.map(skill => (
          <span key={skill} className="bg-primary text-white px-2 py-1 rounded text-xs">
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default EngineerCard;
