import { motion } from "framer-motion";
import { FaCode, FaPalette, FaTools, FaUsers } from "react-icons/fa";

const skillCategories = [
  {
    title: "Front-end Development",
    icon: <FaCode />,
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Tailwind CSS",
      "Bootstrap",
      "Responsive Design",
      "DOM Manipulation",
      "REST API Integration",
    ],
  },
  {
    title: "Graphics Design",
    icon: <FaPalette />,
    skills: [
      "Adobe Photoshop",
      "Adobe Illustrator",
      "CorelDRAW",
      "Brand Identity Design",
      "UI Design",
      "Social Media Design",
      "Print Design",
    ],
  },
  {
    title: "Tools & Technologies",
    icon: <FaTools />,
    skills: [
      "Git & GitHub",
      "Visual Studio Code",
      "Google Workspace",
      "Microsoft Word",
      "Microsoft Excel",
      "Microsoft PowerPoint",
      "Chrome DevTools",
    ],
  },
  {
    title: "Soft Skills",
    icon: <FaUsers />,
    skills: [
      "Creative Problem Solving",
      "Attention to Detail",
      "Strong Communication",
      "Team Collaboration",
      "Time Management",
      "Adaptability",
      "Client Communication",
      "Continuous Learning",
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen bg-gray-100 dark:bg-gray-900 px-6 py-20"
    >
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
          Skills
        </h2>
        <div className="w-16 h-1 bg-indigo-500 mx-auto mt-1 rounded"></div>
        <div className="w-20 h-1 bg-indigo-500 mx-auto mt-1 rounded"></div>
      </motion.div>

      {/* Skill Cards */}
      <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 rounded-xl p-6 shadow-md hover:shadow-xl transition"
          >
            {/* Card Header */}
            <div className="flex items-center gap-3 mb-4 text-indigo-600 dark:text-indigo-400">
              <span className="text-xl">{category.icon}</span>
              <h3 className="font-semibold text-lg">{category.title}</h3>
            </div>

            {/* Skill Pills */}
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-1 text-sm rounded-full border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-gray-700 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
