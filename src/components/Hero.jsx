import { motion } from "framer-motion";
import TypingMotionText from "./TypingMotionText";

const Hero = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center bg-gray-100  dark:bg-gray-950 text-center"
    >
      <motion.div whileHover={{ scale: 1.05 }}>
        <div className="text-center max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white"
          >
            Hi, My name is{" "}
            <span className="text-indigo-800 dark:text-indigo-500">
              Nasirudeen Fahisu
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-2xl font-medium text-gray-800 dark:text-gray-200 mb-3"
          >
            <p className="">
              I'm a <TypingMotionText />
            </p>
          </motion.p>

          <p className="text-gray-500 dark:text-gray-400 mb-6 text-lg">
            I’m a Front-end Software Engineer and Graphics Designer, crafting visually striking and user-friendly digital experiences that blend creativity with clean, functional code.
          </p>

          <div className="flex justify-center gap-4">
            <button
              onClick={() => scrollToSection("projects")}
              className="bg-indigo-800 dark:bg-indigo-500 px-6 py-3 rounded-lg hover:bg-indigo-600 dark:hover:bg-indigo-800 text-white"
            >
              View Projects
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="border border-indigo-800 px-6 py-3 rounded-lg hover:bg-indigo-500/10"
            >
              Hire Me
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
