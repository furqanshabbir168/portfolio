import { Hammer } from "lucide-react";
import services from "../assets/services";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Services() {
  const navigate = useNavigate();

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-gray-100 py-10"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="flex items-center justify-center gap-3 mb-4"
      >
        <Hammer className="text-blue-700" />
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">
          What I can do for You
        </h3>
        <Hammer className="text-blue-700" />
      </motion.div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-2xl sm:text-3xl font-bold mb-10 text-center"
      >
        Our{" "}
        <span className="bg-gradient-to-r from-blue-700 to-blue-900 text-white px-2 py-1 rounded">
          Services
        </span>
      </motion.h2>

      {/* Grid Container */}
      <div className="w-full max-w-8xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.3 + index * 0.15,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.2 }}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 p-4 flex flex-col items-center text-center"
            >
              <img
                src={service.img}
                alt={service.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.name}
              </h3>
              <p className="text-gray-600 mb-4 text-start">
                {service.description}
              </p>
              <button
                onClick={() => navigate(service.path)}
                className="mt-auto bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-full transition duration-300 cursor-pointer"
              >
                Learn More
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Services;
