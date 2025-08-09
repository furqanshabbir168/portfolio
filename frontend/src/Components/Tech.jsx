import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress } from "react-icons/si";

const techs = [
  { icon: <FaHtml5 className="text-orange-600" />, name: "HTML5" },
  { icon: <FaCss3Alt className="text-blue-600" />, name: "CSS3" },
  { icon: <SiTailwindcss className="text-sky-400" />, name: "Tailwind CSS" },
  { icon: <FaJs className="text-yellow-400" />, name: "JavaScript" },
  { icon: <FaReact className="text-cyan-400" />, name: "React.js" },
  { icon: <FaNodeJs className="text-green-600" />, name: "Node.js" },
  { icon: <SiExpress className="text-black" />, name: "Express.js" },
  { icon: <SiMongodb className="text-green-500" />, name: "MongoDB" },
];

function Tech() {
  return (
    <div className="overflow-hidden w-full py-10 bg-white flex flex-col items-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-10 text-center">My <span className="bg-gradient-to-r from-blue-700 to-blue-900 text-white px-2 py-1 rounded">Tech Stack</span></h2>
      <motion.div
        className="flex gap-20 w-max"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
      >
        {[...techs, ...techs].map((tech, index) => (
          <div
            key={index}
            className="group flex flex-col items-center hover:scale-110 transition-transform duration-300"
          >
            <div className="text-[70px] sm:text-[90px]">{tech.icon}</div>
            <span className="text-sm text-gray-700 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
              {tech.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default Tech;
