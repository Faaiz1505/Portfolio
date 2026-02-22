import { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import { AnimatePresence, motion as Motion } from "framer-motion";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      // Check localStorage first, then check the document class (set by index.html script)
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) return savedTheme;

      // If no saved theme, check if the dark class was added by index.html
      if (document.documentElement.classList.contains("dark")) {
        return "dark";
      }
      return "light";
    }
    return "light";
  });
  const [activeSection, setActiveSection] = useState("home");
  const mobileMenuRef = useRef(null);

  // Initialize theme on mount and handle theme changes
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Toggle theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Track active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollY = window.scrollY + 120;
      for (let id of sections) {
        const section = document.getElementById(id);
        if (
          section &&
          scrollY >= section.offsetTop &&
          scrollY < section.offsetTop + section.offsetHeight
        ) {
          setActiveSection(id);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = ["home", "about", "skills", "projects", "contact"];

  return (
    <nav className="fixed w-full z-50 bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
        <h1 className="flex items-center gap-2 text-2xl font-bold text-indigo-800 dark:text-indigo-400">
          <img src={Logo} alt="NafasHub Logo" className="w-9 h-9" />
          NafasHub
        </h1>

        {/* Desktop */}
        <ul className="hidden md:flex gap-6 text-gray-800 dark:text-gray-200 font-medium">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link}`}
                className={`${activeSection === link ? "text-indigo-700 dark:text-indigo-400" : ""} hover:text-indigo-600 dark:hover:text-indigo-300 transition`}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={toggleTheme}
              className="ml-4 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-800 dark:focus:ring-blue-500 transition-colors"
              aria-label={
                theme === "light"
                  ? "Switch to dark mode"
                  : "Switch to light mode"
              }
            >
              {theme === "light" ? <FaMoon /> : <FaSun />}
            </button>
          </li>
        </ul>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
            aria-label={
              theme === "light" ? "Switch to dark mode" : "Switch to light mode"
            }
          >
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <Motion.ul
            ref={mobileMenuRef}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden md:hidden bg-white dark:bg-gray-900 flex flex-col pl-6 gap-6 py-4 font-medium text-gray-800 dark:text-gray-200"
          >
            {links.map((link) => (
              <li key={link}>
                <a
                  href={`#${link}`}
                  onClick={() => setIsOpen(false)}
                  className={`${activeSection === link ? "text-indigo-600 dark:text-indigo-400" : ""} hover:text-indigo-500 dark:hover:text-indigo-300 transition`}
                >
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </a>
              </li>
            ))}
          </Motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
