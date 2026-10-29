import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section-padding bg-cream relative overflow-hidden">
      {/* Subtle decorative corner ornament — bottom right */}
      <div className="absolute -bottom-4 -right-4 w-32 h-32 md:w-48 md:h-48 opacity-[0.04] pointer-events-none">
        <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M120 120 L120 60 C120 72 112 84 100 90 C88 96 76 96 64 90 C52 84 44 72 44 60 L44 80 C44 92 52 104 64 110 C76 116 88 116 100 110 C112 104 120 92 120 80" stroke="#2D6A4F" strokeWidth="2" fill="none"/>
          <path d="M120 120 L80 120 C92 120 104 112 110 100 C116 88 116 76 110 64" stroke="#2D6A4F" strokeWidth="2" fill="none"/>
          <circle cx="116" cy="116" r="3" fill="#8B7355" opacity="0.5"/>
        </svg>
      </div>

      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-charcoal leading-tight font-semibold">
            LIMA HARI. <br /> SATU PERJALANAN. <br /> BANYAK CERITA.
          </h2>
          {/* Decorative accent line */}
          <div className="flex items-center gap-2 mt-5">
            <div className="w-12 h-0.5 bg-wood/40" />
            <div className="w-2 h-2 rotate-45 bg-wood/30" />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-8 max-w-2xl text-charcoal-light text-base md:text-lg leading-relaxed"
        >
          Kuliah Kerja Lapangan menjadi perjalanan akademik yang mempertemukan pembelajaran di dunia industri dengan pengalaman menjelajahi Bali. Selama 18–22 Agustus 2026, perjalanan dimulai dari Semarang menuju berbagai kegiatan kunjungan industri, eksplorasi, dan kebersamaan.
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          className="mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6 }}
            className="balinese-card rounded-2xl p-8 md:p-10 text-center"
          >
            <div className="font-heading text-4xl md:text-5xl text-primary font-semibold">05</div>
            <div className="mt-3 text-[10px] md:text-xs tracking-[0.2em] text-charcoal-light uppercase font-medium">
              HARI PERJALANAN
            </div>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6 }}
            className="balinese-card rounded-2xl p-8 md:p-10 text-center"
          >
            <div className="font-heading text-4xl md:text-5xl text-primary font-semibold">02</div>
            <div className="mt-3 text-[10px] md:text-xs tracking-[0.2em] text-charcoal-light uppercase font-medium">
              KUNJUNGAN INDUSTRI
            </div>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6 }}
            className="balinese-card rounded-2xl p-8 md:p-10 text-center"
          >
            <div className="font-heading text-4xl md:text-5xl text-primary font-semibold">18—22</div>
            <div className="mt-3 text-[10px] md:text-xs tracking-[0.2em] text-charcoal-light uppercase font-medium">
              AGUSTUS 2026
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
