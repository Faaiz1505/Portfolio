import { motion } from "framer-motion";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

const About = () => (
  <section
    id="about"
    className="min-h-screen flex items-center justify-center
               px-4 sm:px-6 lg:px-12
               bg-white dark:bg-gray-800"
  >
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full max-w-5xl"
    >
      <motion.div whileHover={{ scale: 1.01 }}>
        <div className="text-center md:text-left">
          {/* Section Title */}
          <h2 className="text-3xl sm:text-4xl font-bold mb-2 mt-4">About Me</h2>

          <div className="flex justify-center md:justify-start mb-4">
            <div>
              <div className="w-24 md:w-16 h-1 bg-indigo-600"></div>
              <div className="w-16 md:w-10 h-1 bg-indigo-600 mt-1"></div>
            </div>
          </div>

          {/* Intro */}
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 leading-snug">
            I'm Nasirudeen Fahisu, a{" "}
            <span className="text-indigo-600 dark:text-indigo-500">
              passionate and dedicated Front-End Developer
            </span>
          </h3>

          {/* Paragraphs */}
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-200 mb-3 leading-relaxed">
            I’m a Front-end Software Engineer and Graphics Designer who brings
            ideas to life through clean, functional code and creative design.
            With strong experience in modern frontend technologies, I build
            visually appealing, intuitive, and user-friendly digital
            experiences.
          </p>

          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-200 mb-5 leading-relaxed">
            I specialize in HTML, CSS, JavaScript, React, and Tailwind, with
            hands-on experience in responsive design, DOM manipulation, REST
            APIs, and collaborative development. I’m passionate about turning
            concepts into polished, real-world solutions that are both
            functional and memorable.
          </p>

          {/* Education & Experience */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 mb-8">
            {/* Education */}
            <div>
              <p className="flex items-center gap-2 text-gray-900 dark:text-white font-bold text-xl mb-3">
                <FaGraduationCap className="text-indigo-500 text-xl" />
                Education
              </p>

              <div
                className="border border-slate-300 dark:border-slate-600 rounded-xl p-4 sm:p-5 bg-gray-100/20 hover:bg-gray-100/30
                              dark:bg-zinc-500/20 dark:hover:bg-zinc-500/30
                              transition shadow-md text-left"
              >
                <h1 className="dark:text-white font-bold text-sm sm:text-base">
                  Federal University of Agriculture and Technology, Okeho
                </h1>

                <p className="text-gray-500 dark:text-gray-200 text-sm sm:text-base font-semibold italic mb-3">
                  B.Sc. Computer Science
                </p>

                <ul className="dark:text-white text-sm sm:text-base space-y-2 ml-4 list-disc">
                  <li>
                    Currently studying Computer Science with a focus on software
                    development fundamentals.
                  </li>
                  <li>
                    Actively building practical skills through self-directed
                    learning.
                  </li>
                  <li>
                    Strong frontend foundation via Udemy, freeCodeCamp, and
                    YouTube.
                  </li>
                  <li>
                    Started hands-on frontend development in March 2024,
                    focusing on real-world projects.
                  </li>
                </ul>
              </div>
            </div>

            {/* Experience */}
            <div>
              <p className="flex items-center gap-2 text-gray-900 dark:text-white font-bold text-xl mb-3">
                <FaBriefcase className="text-indigo-500 text-xl" />
                Experience
              </p>

              <div
                className="border border-slate-300 dark:border-slate-600 rounded-xl p-4 sm:p-5 bg-gray-100/20 hover:bg-gray-100/30
                              dark:bg-zinc-500/20 dark:hover:bg-zinc-500/30
                              transition shadow-md text-left"
              >
                <p>
                  Experience working on personal and collaborative frontend
                  projects, building responsive interfaces, integrating APIs,
                  and implementing modern UI patterns using React and Tailwind.
                </p>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div
            className="flex flex-row gap-4 sm:gap-6 mb-6
                          justify-center md:justify-start"
          >
            <a
              href="#"
              className="px-6 py-3 text-center rounded-full
                         bg-indigo-600 hover:bg-indigo-700
                         transition text-white font-medium"
            >
              Download CV
            </a>

            <a
              href="#contact"
              className="px-6 py-3 text-center rounded-full
                         bg-indigo-500/20 text-indigo-500
                         hover:bg-indigo-500/30 transition font-medium"
            >
              Hire Me
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default About;
