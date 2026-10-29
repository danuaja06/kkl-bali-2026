import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-primary-dark relative overflow-hidden section-padding">
      {/* Subtle tropical top border pattern */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-wood/40 to-transparent" />

      {/* Balinese decorative SVG ornament */}
      <div className="flex justify-center mb-12 opacity-20">
        <svg width="200" height="32" viewBox="0 0 200 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 4 C95 4 92 8 88 10 C84 12 78 12 74 10 C70 8 66 4 60 4 C54 4 50 8 46 12 C42 16 36 18 30 16 C24 14 20 10 14 10" stroke="#A69279" strokeWidth="1" fill="none" opacity="0.6"/>
          <path d="M100 4 C105 4 108 8 112 10 C116 12 122 12 126 10 C130 8 134 4 140 4 C146 4 150 8 154 12 C158 16 164 18 170 16 C176 14 180 10 186 10" stroke="#A69279" strokeWidth="1" fill="none" opacity="0.6"/>
          <circle cx="100" cy="4" r="2.5" fill="#A69279" opacity="0.5"/>
          <path d="M96 16 L100 22 L104 16" stroke="#A69279" strokeWidth="1" fill="none" opacity="0.4"/>
          <circle cx="60" cy="4" r="1.5" fill="#A69279" opacity="0.3"/>
          <circle cx="140" cy="4" r="1.5" fill="#A69279" opacity="0.3"/>
        </svg>
      </div>

      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          {/* Main Text Block */}
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-white font-semibold leading-tight flex flex-col">
            <span>SAMPAI JUMPA</span>
            <span>DI CERITA</span>
            <span>BERIKUTNYA.</span>
          </h2>

          {/* Decorative small ornament after heading */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="w-8 h-px bg-white/20" />
            <div className="w-2 h-2 rotate-45 bg-wood/40" />
            <div className="w-8 h-px bg-white/20" />
          </div>

          <div className="mt-10 flex flex-col items-center">
            <span className="text-white/60 text-xs tracking-[0.3em] uppercase">
              KULIAH KERJA LAPANGAN
            </span>
            <span className="font-heading text-xl text-white/80 mt-2">
              BALI 2026
            </span>
          </div>

          <div className="mt-6">
            <span className="text-white/40 text-xs tracking-[0.2em]">
              SEMARANG → BALI
            </span>
          </div>

          {/* Credits */}
          <div className="mt-10 border-t border-white/10 pt-8 flex flex-col items-center">
            <span className="text-white/50 text-sm">Teknik Informatika</span>
            <span className="text-white/50 text-sm">Universitas PGRI Semarang</span>
            <span className="text-white/30 text-xs mt-4">© 2026 KKL Bali — Semua hak dilindungi</span>
          </div>
        </motion.div>
      </div>

      {/* Decorative Text */}
      <span className="absolute text-[12rem] md:text-[20rem] text-white/[0.02] font-heading font-bold -bottom-10 right-0 pointer-events-none select-none leading-none z-0">
        BALI
      </span>

      {/* Subtle bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-wood/20 to-transparent" />
    </footer>
  );
};

export default Footer;
