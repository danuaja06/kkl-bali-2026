import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import BalineseOrnament from './BalineseOrnament';

const impressionsData = [
  {
    id: 1,
    icon: '🚌',
    category: 'Perjalanan & Kebersamaan',
    title: 'Kekompakan di Jalur Darat & Selat Bali',
    content:
      'Perjalanan panjang melintasi jalur darat dari Semarang menuju Pelabuhan Ketapang hingga menyeberangi Selat Bali dengan kapal feri menghadirkan rasa persaudaraan yang begitu erat. Canda tawa di dalam bus, bernyanyi bersama, dan saling berbagi camilan menjadikan jarak ratusan kilometer terasa singkat dan menyenangkan.',
    highlight: 'Momen menatap fajar pertama di atas dek kapal feri menuju Gilimanuk.',
  },
  {
    id: 2,
    icon: '🏭',
    category: 'Edukasi & Industri',
    title: 'Wawasan Nyata Manufaktur & Multimedia',
    content:
      'Melihat langsung rantai produksi modern di PT Victoria Care Indonesia serta workshop intensif Adobe Lightroom di Balai Diklat Industri Denpasar memberikan pengalaman berharga. Teori perkuliahan di kelas Teknik Informatika terasa semakin lengkap saat melihat otomatisasi sistem dan standar mutu industri kreatif secara langsung.',
    highlight: 'Pelatihan praktikum color grading & kurasi visual profesional di BDI Denpasar.',
  },
  {
    id: 3,
    icon: '🌺',
    category: 'Seni & Warisan Budaya',
    title: 'Keagungan Budaya Nusantara Sabang—Merauke',
    content:
      'Menyaksikan pertunjukan Teater Tari Devdan yang merangkum keindahan tarian tradisional dari Sabang sampai Merauke serta magisnya Tari Kecak meninggalkan rasa takjub mendalam. Kami belajar bagaimana tradisi luhur leluhur dapat dilestarikan sekaligus dikemas spektakuler untuk panggung dunia.',
    highlight: 'Pementasan drama tari kolosal kecak dan akrobatik keberagaman kepulauan Indonesia.',
  },
  {
    id: 4,
    icon: '🤝',
    category: 'Keluarga Besar Mahasiswa',
    title: 'Satu Angkatan, Berjuta Kenangan Abadi',
    content:
      'KKL Bali 2026 bukan sekadar agenda akademik, melainkan sebuah mozaik kenangan yang akan selalu kami ceritakan di masa depan. Lelahnya perjalanan terbayar lunas dengan hangatnya persahabatan, kebersamaan di tepi pantai, dan bimbingan penuh perhatian dari bapak-ibu dosen pembimbing.',
    highlight: 'Kekeluargaan Teknik Informatika UPGRIS yang semakin solid dan tak terlupakan.',
  },
];

const Impressions = () => {
  return (
    <section id="impressions" className="section-padding bg-cream relative overflow-hidden">
      {/* Background Balinese Watermarks */}
      <div className="absolute top-1/2 -right-16 -translate-y-1/2 opacity-[0.025] pointer-events-none">
        <BalineseOrnament variant="mandala" size={360} color="#2D6A4F" />
      </div>

      <div className="container-custom relative z-10">
        <SectionTitle
          title="KESAN-KESAN PERJALANAN"
          subtitle="Catatan refleksi, kebersamaan, dan pengalaman berharga yang membekas selama 5 hari Kuliah Kerja Lapangan."
          align="center"
        />

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {impressionsData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="balinese-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between relative group border border-wood/20 hover:border-wood/40 transition-all duration-300"
            >
              {/* Corner flourish on hover */}
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none scale-x-[-1]">
                <BalineseOrnament variant="corner" size={24} color="#8B7355" opacity={1} />
              </div>

              <div>
                {/* Header: Icon & Category */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl select-none">{item.icon}</span>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-wood font-medium px-2.5 py-0.5 rounded-full bg-wood/10 border border-wood/15">
                    {item.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-heading text-lg sm:text-xl font-semibold text-charcoal mb-3 leading-snug">
                  {item.title}
                </h3>

                {/* Content */}
                <p className="text-charcoal-light text-sm sm:text-base leading-relaxed">
                  {item.content}
                </p>
              </div>

              {/* Highlight Bottom Tag */}
              <div className="mt-5 pt-4 border-t border-charcoal/10 dark:border-white/10 flex items-start gap-2 text-xs text-primary dark:text-emerald-400 font-medium">
                <span className="text-amber-500 select-none">✨</span>
                <span>{item.highlight}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative Balinese Bottom Ornament */}
        <div className="flex justify-center mt-12 opacity-60">
          <BalineseOrnament variant="divider" size={24} color="#8B7355" opacity={0.5} />
        </div>
      </div>
    </section>
  );
};

export default Impressions;
