import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaPhoneAlt,
} from "react-icons/fa";

const Contact = () => (
  <section
    id="contact"
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
        Contact me
      </h2>
      <div className="w-24 h-1 bg-indigo-500 mx-auto mt-1 rounded"></div>
      <div className="w-36 h-1 bg-indigo-500 mx-auto mt-1 rounded"></div>
    </motion.div>

    {/* Content */}
    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
      {/* Left Side */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400 mb-4">
          Let’s Connect
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-md">
          I’m open to frontend development roles, freelance projects, and
          creative collaborations. Feel free to reach out.
        </p>

        <div className="space-y-5">
          <a
            href="mailto:nasirudeenfaaiz755@gmail.com"
            className="flex items-center gap-4 text-gray-700 dark:text-gray-300
             hover:text-indigo-600 transition"
          >
            <FaEnvelope className="text-indigo-600 dark:text-indigo-400" />
            nasirudeenfaaiz755@gmail.com
          </a>

          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-indigo-600 dark:text-indigo-400" />
            <span className="text-gray-700 dark:text-gray-300">
              Lagos, Nigeria
            </span>
          </div>

          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-indigo-600 dark:text-indigo-400" />
            <span className="text-gray-700 dark:text-gray-300">
              +2349040498948
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Faaiz1505"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 transition flex items-center gap-4"
            >
              <FaGithub className="text-indigo-600 dark:text-indigo-400" />{" "}
              GitHub Profile
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/fahisu-nasirudeen-7b4376343/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 transition flex items-center gap-4"
            >
              <FaLinkedin className="text-indigo-600 dark:text-indigo-400" />{" "}
              LinkedIn Profile
            </a>
          </div>
        </div>
      </motion.div>

      {/* Right Side (Form) */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 w-full"
      >
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-transparent text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-transparent text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="text"
            placeholder="Subject"
            className="p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-transparent text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <textarea
            rows={5}
            placeholder="Your Message"
            className="p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-transparent text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          ></textarea>

          <button className="bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-md transition font-medium w-fit">
            Send Message
          </button>
        </form>
      </motion.div>
    </div>
  </section>
);

export default Contact;
