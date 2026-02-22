import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// Move outside component → created once
const WORDS = ["Software Engineer", "Graphics Designer", "Web Developer"];

const TypingMotionText = () => {
  const shouldReduceMotion = useReducedMotion();

  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const timeoutRef = useRef(null);

  // Adaptive speed (slower on mobile / reduced motion)
  const TYPING_SPEED = shouldReduceMotion ? 200 : 120;
  const DELETING_SPEED = shouldReduceMotion ? 120 : 80;
  const PAUSE_DURATION = shouldReduceMotion ? 2000 : 1500;

  useEffect(() => {
    const currentWord = WORDS[wordIndex];

    timeoutRef.current = setTimeout(
      () => {
        // Typing
        if (!isDeleting && text.length < currentWord.length) {
          setText(currentWord.slice(0, text.length + 1));
        }

        // Pause before deleting
        else if (!isDeleting && text === currentWord) {
          setIsDeleting(true);
        }

        // Deleting
        else if (isDeleting && text.length > 0) {
          setText(currentWord.slice(0, text.length - 1));
        }

        // Move to next word
        else if (isDeleting && text.length === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % WORDS.length);
        }
      },
      isDeleting
        ? DELETING_SPEED
        : text === currentWord
          ? PAUSE_DURATION
          : TYPING_SPEED,
    );

    return () => clearTimeout(timeoutRef.current);
  }, [text, isDeleting, wordIndex]);

  return (
    <motion.span
      className="inline-flex items-center font-bold text-indigo-800 dark:text-indigo-400"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
    >
      {text}

      {/* Cursor */}
      <motion.span
        className="ml-1"
        animate={shouldReduceMotion ? { opacity: 1 } : { opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 1 }}
      >
        |
      </motion.span>
    </motion.span>
  );
};

export default TypingMotionText;
