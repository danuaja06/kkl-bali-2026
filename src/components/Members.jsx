import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import membersData from '../data/members';
import BalineseOrnament from './BalineseOrnament';

const getInitials = (name) => {
  if (!name) return '??';
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
};

const Members = () => {
  return (
    <section id="members" className="section-padding bg-cream relative overflow-hidden">
      {/* Background Balinese Watermarks */}
      <div className="absolute top-1/3 -left-20 -translate-y-1/2 opacity-[0.025] pointer-events-none">
        <BalineseOrnament variant="mandala" size={340} color="#2D6A4F" />
      </div>
      <div className="absolute bottom-10 -right-20 opacity-[0.025] pointer-events-none">
        <BalineseOrnament variant="frangipani" size={320} color="#8B7355" />
      </div>

      <div className="container-custom relative z-10">
        <SectionTitle
          title="ANGGOTA KELOMPOK"
          subtitle="Daftar 11 anggota kelompok Kuliah Kerja Lapangan (KKL) Bali 2026 — Teknik Informatika, Universitas PGRI Semarang."
          align="center"
        />

        {/* Members Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 mb-20"
        >
          {membersData.map((member, index) => {
            const numStr = String(index + 1).padStart(2, '0');
            const initials = getInitials(member.name);

            return (
              <motion.div
                key={member.id || index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                whileHover={{ y: -5 }}
                className="balinese-card rounded-2xl p-5 flex flex-col items-center text-center relative group overflow-hidden border border-wood/20 hover:border-wood/50 transition-all duration-300"
              >
                {/* Number Badge */}
                <div className="absolute top-3 left-3 text-[11px] font-mono font-semibold px-2 py-0.5 rounded-full bg-cream-dark/80 text-wood border border-wood/20">
                  #{numStr}
                </div>

                {/* Subtle top right Balinese corner on hover */}
                <div className="absolute top-1.5 right-1.5 opacity-0 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none scale-x-[-1]">
                  <BalineseOrnament variant="corner" size={20} color="#8B7355" opacity={1} />
                </div>

                {/* Avatar / Photo */}
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full mb-3.5 mt-2 overflow-hidden border-2 border-wood/30 p-1 flex items-center justify-center bg-cream shadow-inner group-hover:border-primary/50 transition-colors">
                  {member.photo ? (
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full object-cover rounded-full"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-white font-heading font-semibold text-lg md:text-xl shadow-sm tracking-wider">
                      {initials}
                    </div>
                  )}
                </div>

                {/* Name */}
                <h4 className="font-heading text-charcoal font-semibold text-sm md:text-base leading-snug">
                  {member.name}
                </h4>

                {/* NPM */}
                <div className="mt-2 inline-flex items-center gap-1 font-mono text-xs text-charcoal-light/80 bg-cream-dark/60 px-3 py-1 rounded-full border border-charcoal/5">
                  <span className="text-[10px] tracking-wider text-wood font-medium">NPM</span>
                  <span className="font-semibold text-charcoal">{member.npm}</span>
                </div>

                {/* Role / Dept */}
                <div className="mt-2 text-[11px] text-charcoal-light/70 tracking-wide">
                  Teknik Informatika UPGRIS
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Featured Group Photo — "ONE FRAME, ONE JOURNEY" */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto pt-8 border-t border-wood/20"
        >
          {/* Decorative Balinese Title for Group Photo */}
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-2 mb-2">
              <BalineseOrnament variant="divider" size={20} color="#8B7355" opacity={0.5} />
            </div>
            <h3 className="font-heading text-2xl md:text-3xl text-charcoal font-semibold">
              ONE FRAME, ONE JOURNEY
            </h3>
            <p className="text-charcoal-light text-sm mt-1 max-w-lg mx-auto">
              Foto bersama seluruh rombongan KKL Bali 2026 — Teknik Informatika Universitas PGRI Semarang.
            </p>
          </div>

          {/* Group Photo Frame with Balinese Corner Accents */}
          <div className="relative p-2 sm:p-3 bg-white/70 dark:bg-black/50 backdrop-blur-sm rounded-2xl shadow-lg border border-wood/25 dark:border-wood/40">
            {/* Corner Ornaments */}
            <div className="absolute top-1 left-1 z-20 pointer-events-none">
              <BalineseOrnament variant="corner" size={32} color="#8B7355" opacity={0.7} />
            </div>
            <div className="absolute top-1 right-1 z-20 pointer-events-none scale-x-[-1]">
              <BalineseOrnament variant="corner" size={32} color="#8B7355" opacity={0.7} />
            </div>
            <div className="absolute bottom-1 left-1 z-20 pointer-events-none scale-y-[-1]">
              <BalineseOrnament variant="corner" size={32} color="#8B7355" opacity={0.7} />
            </div>
            <div className="absolute bottom-1 right-1 z-20 pointer-events-none rotate-180">
              <BalineseOrnament variant="corner" size={32} color="#8B7355" opacity={0.7} />
            </div>

            <div className="rounded-xl overflow-hidden w-full bg-charcoal/5">
              <img 
                src="/images/gallery/bersama.JPG" 
                alt="Foto Bersama KKL Bali 2026" 
                className="w-full h-auto block object-contain"
                loading="lazy"
              />
            </div>
          </div>

          {/* Caption underneath */}
          <div className="mt-4 text-center">
            <span className="text-xs text-charcoal-light/60 tracking-widest uppercase font-medium">
              Dokumentasi Foto Bersama KKL Bali 2026
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Members;
