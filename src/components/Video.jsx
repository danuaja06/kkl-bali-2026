import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import BalineseOrnament from './BalineseOrnament';

const Video = () => {
  return (
    <section id="video" className="section-padding bg-cream-dark relative overflow-hidden">
      {/* Subtle Balinese Background Elements */}
      <div className="absolute top-1/2 -right-16 -translate-y-1/2 opacity-[0.03] pointer-events-none">
        <BalineseOrnament variant="frangipani" size={320} color="#8B7355" />
      </div>

      <div className="container-custom relative z-10">
        <SectionTitle
          title="THE JOURNEY IN MOTION"
          subtitle="Beberapa cerita yang tidak cukup hanya diceritakan lewat foto."
          align="center"
        />

        {/* Featured Video Utama */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto relative"
        >
          {/* Subtle Balinese corner flourishes */}
          <div className="absolute -top-3 -left-3 z-20 pointer-events-none">
            <BalineseOrnament variant="corner" size={32} color="#8B7355" opacity={0.6} />
          </div>
          <div className="absolute -bottom-3 -right-3 z-20 pointer-events-none rotate-180">
            <BalineseOrnament variant="corner" size={32} color="#8B7355" opacity={0.6} />
          </div>

          <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black relative border border-wood/30">
            <video
              src="/videos/kkl-dokumentasi.mp4"
              controls
              playsInline
              preload="metadata"
              className="w-full h-full object-cover"
            >
              Browser Anda tidak mendukung tag video HTML5.
            </video>
          </div>

          <div className="mt-5 text-center">
            <h3 className="text-charcoal font-heading text-xl md:text-2xl font-semibold">
              Dokumentasi Video KKL Bali 2026
            </h3>
            <p className="text-charcoal-light text-sm md:text-base mt-1.5 max-w-lg mx-auto">
              Cuplikan momen kebersamaan dan perjalanan KKL Bali 2026 Teknik Informatika UPGRIS.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Video;
