import { motion } from "framer-motion";

const projects = [
  { name: "Portfolio Website", img: "/assets/project1.png", link: "#" },
  { name: "Branding Design", img: "/assets/project2.png", link: "#" },
  { name: "UI Design Mockup", img: "/assets/project3.png", link: "#" },
];

const Projects = () => (
  <section
    id="projects"
    className="min-h-screen bg-white dark:bg-gray-800 flex flex-col items-center justify-center px-6"
  >
    <motion.h2
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-4xl font-bold mb-8"
    >
      Projects
    </motion.h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {projects.map((project, i) => (
        <motion.a
          href={project.link}
          key={i}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.2 }}
          className="overflow-hidden rounded-xl shadow-lg hover:scale-105 transition-transform"
        >
          <img
            src={project.img}
            alt={project.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4 bg-gray-50 dark:bg-gray-900 text-center font-medium">
            {project.name}
          </div>
        </motion.a>
      ))}
    </div>
  </section>
);

export default Projects;
