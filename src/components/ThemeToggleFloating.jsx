import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const ThemeToggleFloating = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      title={isDark ? "Ganti ke Mode Terang" : "Ganti ke Mode Gelap"}
      className="fixed bottom-6 right-6 z-40 p-3 rounded-full shadow-2xl backdrop-blur-md border transition-all duration-300 flex items-center gap-2 cursor-pointer bg-cream-dark/90 dark:bg-charcoal/90 border-wood/30 dark:border-wood/50 text-charcoal dark:text-cream hover:shadow-primary/20"
    >
      <span className="text-lg select-none leading-none">
        {isDark ? '☀️' : '🌙'}
      </span>
      <span className="hidden sm:inline text-xs font-medium tracking-wider pr-1">
        {isDark ? 'Terang' : 'Gelap'}
      </span>
    </motion.button>
  );
};

export default ThemeToggleFloating;
