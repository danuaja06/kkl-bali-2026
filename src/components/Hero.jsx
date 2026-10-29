import { motion } from "framer-motion";

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="h-screen w-full overflow-hidden relative">
      {/* Background Image */}
      <img
        src="/images/locations/bgulundanu3.JPG"
        alt="KKL Bali Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Cinematic dark overlay — darker on the left and bottom for clear text contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/35 z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-[1]" />

      {/* Subtle Balinese corner ornament — top left */}
      <div className="absolute top-6 left-6 md:top-10 md:left-10 w-16 h-16 md:w-20 md:h-20 opacity-30 pointer-events-none z-10">
        <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0 L0 40 C0 36 4 32 8 30 C12 28 16 28 20 30 C24 32 26 36 26 40 L26 20 C26 16 24 12 20 10 C16 8 12 8 8 10 C4 12 0 16 0 20" stroke="#E5C365" strokeWidth="0.8" fill="none"/>
          <circle cx="4" cy="4" r="2" fill="#E5C365" opacity="0.6"/>
        </svg>
      </div>

      {/* Subtle Balinese corner ornament — top right (mirrored) */}
      <div className="absolute top-6 right-6 md:top-10 md:right-10 w-16 h-16 md:w-20 md:h-20 opacity-30 pointer-events-none z-10 scale-x-[-1]">
        <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0 L0 40 C0 36 4 32 8 30 C12 28 16 28 20 30 C24 32 26 36 26 40 L26 20 C26 16 24 12 20 10 C16 8 12 8 8 10 C4 12 0 16 0 20" stroke="#E5C365" strokeWidth="0.8" fill="none"/>
          <circle cx="4" cy="4" r="2" fill="#E5C365" opacity="0.6"/>
        </svg>
      </div>

      {/* Content — Open, Clean, & Minimalist Layout */}
      <div className="container-custom relative h-full flex flex-col justify-center text-left z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {/* Decorative thin line above subtitle */}
          <div className="flex items-center gap-3 mb-5">
            <div className="w-12 h-px bg-wood-light/80" />
            <div className="w-2 h-2 rotate-45 bg-wood-light shadow-sm" />
          </div>

          {/* Subtitle / Tagline */}
          <div className="text-white/90 text-xs sm:text-sm tracking-[0.3em] uppercase mb-3 hero-text-shadow font-medium">
            KULIAH KERJA LAPANGAN
          </div>

          {/* Grand Title: BALI with subtle outline & crisp shadow */}
          <h1 className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white font-bold leading-none hero-title-shadow">
            BALI
          </h1>

          {/* Decorative accent line below BALI */}
          <div className="flex items-center gap-2 mt-4">
            <div className="w-20 md:w-28 h-px bg-gradient-to-r from-wood-light to-transparent" />
          </div>

          {/* Dates */}
          <div className="text-white font-medium tracking-wider text-sm md:text-base mt-6 hero-text-shadow">
            18 — 22 AGUSTUS 2026
          </div>

          {/* University */}
          <div className="text-white/90 text-xs md:text-sm mt-1.5 hero-text-shadow font-medium">
            TEKNIK INFORMATIKA • UNIVERSITAS PGRI SEMARANG
          </div>

          {/* Route */}
          <div className="text-amber-200/90 text-xs tracking-[0.25em] font-mono mt-3 hero-text-shadow">
            SEMARANG → BALI
          </div>
        </motion.div>
      </div>

      {/* CTA at bottom center */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/80 hover:text-white transition-colors focus:outline-none z-10 cursor-pointer hero-text-shadow"
      >
        <span className="text-[10px] sm:text-xs tracking-[0.25em] uppercase font-medium">
          Jelajahi Perjalanan
        </span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-base"
        >
          ↓
        </motion.span>
      </motion.button>

      {/* Bottom decorative gradient fade into the next section */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-cream via-cream/60 to-transparent z-[5] pointer-events-none" />
    </section>
  );
};

export default Hero;
