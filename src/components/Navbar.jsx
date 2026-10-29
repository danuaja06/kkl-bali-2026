import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  const navLinks = [
    { name: 'Perjalanan', id: 'journey' },
    { name: 'Rute', id: 'routemap' },
    { name: 'Industri', id: 'industrial' },
    { name: 'Eksplorasi', id: 'exploration' },
    { name: 'Galeri', id: 'gallery' },
    { name: 'Video', id: 'video' },
    { name: 'Kesan', id: 'impressions' },
    { name: 'Anggota', id: 'members' }
  ];

  return (
    <>
      {/* Top Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-wood to-amber-400 z-[80] origin-left pointer-events-none"
        style={{ scaleX }}
      />

      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 h-16 md:h-20 flex items-center border-b ${
          scrolled
            ? 'bg-cream/95 backdrop-blur-md shadow-sm border-wood/20 text-charcoal'
            : 'bg-transparent border-transparent text-white'
        }`}
      >
        <div className="container-custom flex justify-between items-center w-full">
          {/* LEFT SIDE: Logo text */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex flex-col text-left focus:outline-none cursor-pointer group"
          >
            <span className="font-heading text-lg md:text-xl font-bold leading-tight group-hover:text-wood transition-colors">
              KKL BALI
            </span>
            <span className="text-[10px] tracking-[0.3em] font-mono opacity-80">2026</span>
          </button>

          {/* RIGHT SIDE: Desktop Navigation & Theme Switcher */}
          <div className="hidden md:flex items-center space-x-7">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className={`text-xs uppercase tracking-wider font-medium transition-colors hover:text-wood cursor-pointer ${
                  scrolled ? 'text-charcoal' : 'text-white/90'
                }`}
              >
                {link.name}
              </button>
            ))}

            {/* Dark Mode Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              title={isDark ? "Beralih ke Tampilan Terang" : "Beralih ke Tampilan Gelap"}
              className={`p-2 rounded-full transition-all duration-300 border flex items-center justify-center cursor-pointer ${
                scrolled
                  ? 'border-wood/30 bg-cream-dark/60 text-charcoal hover:border-wood hover:scale-110'
                  : 'border-white/30 bg-black/30 backdrop-blur text-amber-300 hover:border-amber-300 hover:scale-110'
              }`}
            >
              <motion.span
                key={isDark ? 'dark-icon' : 'light-icon'}
                initial={{ rotate: -90, scale: 0.7 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="text-base select-none"
              >
                {isDark ? '☀️' : '🌙'}
              </motion.span>
            </button>
          </div>

          {/* MOBILE RIGHT SIDE: Theme Toggle & Hamburger button */}
          <div className="flex md:hidden items-center gap-3">
            {/* Mobile Quick Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              className={`w-8 h-8 rounded-full border flex items-center justify-center transition-colors text-xs ${
                scrolled || menuOpen
                  ? 'border-wood/30 bg-cream-dark/80 text-charcoal'
                  : 'border-white/30 bg-black/40 text-amber-300'
              }`}
            >
              {isDark ? '☀️' : '🌙'}
            </button>

            {/* Hamburger button */}
            <button
              className="flex flex-col justify-center items-center w-8 h-8 focus:outline-none z-50 cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation menu"
            >
              <span
                className={`block w-6 h-0.5 transition-all duration-300 ease-in-out ${
                  scrolled || menuOpen ? 'bg-charcoal' : 'bg-white'
                } ${menuOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1'}`}
              />
              <span
                className={`block w-6 h-0.5 transition-all duration-300 ease-in-out ${
                  scrolled || menuOpen ? 'bg-charcoal' : 'bg-white'
                } ${menuOpen ? 'opacity-0' : 'opacity-100'}`}
              />
              <span
                className={`block w-6 h-0.5 transition-all duration-300 ease-in-out ${
                  scrolled || menuOpen ? 'bg-charcoal' : 'bg-white'
                } ${menuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'}`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU DRAWER */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-cream/98 backdrop-blur-lg pt-20 flex flex-col md:hidden"
          >
            <div className="w-full flex flex-col p-6">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.id)}
                  className="py-4 border-b border-charcoal/10 text-charcoal text-sm tracking-wider uppercase text-left hover:text-wood transition-colors focus:outline-none flex justify-between items-center"
                >
                  <span>{link.name}</span>
                  <span className="text-wood/60 text-xs">➔</span>
                </button>
              ))}

              {/* Theme option inside mobile drawer */}
              <div className="pt-6 flex justify-between items-center text-charcoal">
                <span className="text-xs uppercase tracking-wider font-medium">Tampilan Tema</span>
                <button
                  onClick={toggleTheme}
                  className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream-dark border border-wood/30 text-xs font-medium cursor-pointer"
                >
                  <span>{isDark ? '☀️ Mode Terang' : '🌙 Mode Gelap'}</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
