import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import model from "../assets/dev.png";

function Hero() {
  const [skillsIndex, setSkillsIndex] = useState(0);

  const skills = [
    { id: 1, name: "Full Stack Web Developer" },
    { id: 2, name: "React JS Frontend Developer" },
    { id: 3, name: "Node JS Backend Developer" },
    { id: 4, name: "Freelance Web Developer" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSkillsIndex((prev) => (prev + 1) % skills.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const current = skills[skillsIndex];

  return (
    <section className="w-full flex flex-col md:flex-row justify-between items-center px-5 md:px-20 pt-12 pb-10 bg-gradient-to-r from-black via-gray-900 to-blue-900 text-white overflow-hidden gap-12">

      {/* Left Text */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-xl space-y-7 text-center md:text-left"
      >
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="text-lg md:text-2xl font-semibold text-blue-400"
        >
          Hello, I’m
        </motion.h2>

        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight"
        >
          Furqan Shabbir
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-lg md:text-2xl font-semibold"
        >
          And I’m a{" "}
          <span className="text-blue-400 border-2 border-blue-400 px-2 py-1 rounded-md inline-block">
            {current.name}
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-white mb-9 text-start"
        >
          From modern business websites to high-converting ecommerce
          platforms, I help brands and individuals build their complete online
          presence with speed, style, and scalability. Whether you need a
          portfolio to showcase your work, a landing page to promote your
          services, or a full-featured web app tailored to your business — I
          bring ideas to life through clean code, sleek design, and full stack
          development expertise. Let’s turn your vision into a powerful
          digital experience that sets you apart online. I stay up-to-date
          with the latest technologies to deliver fast, responsive, and
          user-focused solutions. Every project I take on is crafted with
          attention to detail, performance, and long-term scalability.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-md transition duration-300"
        >
          Let’s Discuss Your Ideas
        </motion.button>
      </motion.div>

      {/* Middle Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="md:w-[45%] w-full flex justify-center"
      >
        <img
          src={model}
          alt="Developer Illustration"
          className="w-[300px] md:w-[500px] h-auto object-contain rounded-xl"
          loading="lazy"
        />
      </motion.div>
    </section>
  );
}

export default Hero;
