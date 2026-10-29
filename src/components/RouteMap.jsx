import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from './SectionTitle';
import BalineseOrnament from './BalineseOrnament';

// Data Rute Perjalanan Resmi KKL Bali 2026 (Prodi Informatika UPGRIS)
const routeMilestones = [
  // HARI 1: SEMARANG -> JAWA TIMUR
  {
    id: 1,
    day: 'Hari 1',
    date: 'Selasa, 18 Agustus 2026',
    time: '06.00 - 07.00 WIB',
    name: 'Kampus 4 UPGRIS Semarang',
    category: 'Keberangkatan',
    region: 'Jawa Tengah',
    icon: '🏫',
    desc: 'Titik kumpul dan persiapan pelepasan seluruh rombongan KKL Informatika UPGRIS.',
    image: '/images/gallery/semarang1.JPG',
    highlight: 'Titik Awal Keberangkatan Rombongan Bus'
  },
  {
    id: 2,
    day: 'Hari 1',
    date: 'Selasa, 18 Agustus 2026',
    time: '08.00 - 09.00 WIB',
    name: 'PT Victoria Care Indonesia',
    category: 'Industri 1',
    region: 'Semarang, Jawa Tengah',
    icon: '🏭',
    desc: 'Kunjungan industri pertama: observasi lini formulasi, otomasi produksi, dan galeri pameran produk.',
    image: '/images/industry/ptvictoria1.png',
    highlight: 'Kunjungan Industri Manufaktur & QC'
  },
  {
    id: 3,
    day: 'Hari 1',
    date: 'Selasa, 18 Agustus 2026',
    time: '23.00 WIB',
    name: 'Pelabuhan Ketapang, Banyuwangi',
    category: 'Transit & Pelabuhan',
    region: 'Jawa Timur',
    icon: '⚓',
    desc: 'Tiba di ujung timur Pulau Jawa untuk persiapan menyeberangi Selat Bali menggunakan kapal feri.',
    image: '/images/gallery/tobali.JPG',
    highlight: 'Pintu Gerbang Penyeberangan Selat Bali'
  },

  // HARI 2: BALI UTARA & NUSA DUA
  {
    id: 4,
    day: 'Hari 2',
    date: 'Rabu, 19 Agustus 2026',
    time: 'Dini Hari (WITA)',
    name: 'Pelabuhan Gilimanuk',
    category: 'Penyeberangan',
    region: 'Jembrana, Bali',
    icon: '🚢',
    desc: 'Pendaratan feri pertama di Pulau Dewata, menyambut fajar dan melanjutkan perjalanan ke hotel transit.',
    image: '/images/gallery/tobali.JPG',
    highlight: 'Tiba di Pulau Dewata'
  },
  {
    id: 5,
    day: 'Hari 2',
    date: 'Rabu, 19 Agustus 2026',
    time: '05.00 - 08.00 WITA',
    name: 'Transit di Hotel Made Bali',
    category: 'Transit & Istirahat',
    region: 'Sempidi, Badung',
    icon: '🏨',
    desc: 'Momen kedatangan dan beristirahat sejenak di Hotel Transit Made Bali setelah penyeberangan malam dari Jawa.',
    image: '/images/gallery/lastsemarang.JPG',
    highlight: 'Kedatangan di Hotel Transit Bali'
  },
  {
    id: 6,
    day: 'Hari 2',
    date: 'Rabu, 19 Agustus 2026',
    time: '09.30 - 11.00 WITA',
    name: 'Pabrik Kata-Kata Joger Luwus',
    category: 'Wisata Kreatif',
    region: 'Tabanan, Bali',
    icon: '👕',
    desc: 'Eksplorasi sentra cinderamata kreatif legendaris Bali dengan kutipan humor dan kata-kata inspiratif.',
    image: '/images/locations/jogerbali.jpg',
    highlight: 'Sentra Kreativitas Humor Khas Bali'
  },
  {
    id: 7,
    day: 'Hari 2',
    date: 'Rabu, 19 Agustus 2026',
    time: '11.30 - 13.30 WITA',
    name: 'Candi Kuning / Ulun Danu Beratan',
    category: 'Wisata Budaya & Alam',
    region: 'Bedugul, Tabanan',
    icon: '🛕',
    desc: 'Mengagumi kemegahan pura air abad ke-17 di tepi kaldera Danau Beratan dengan hawa pegunungan yang sejuk.',
    image: '/images/locations/bgulundanu3.JPG',
    highlight: 'Pura Ikonik Terapung Danau Beratan'
  },
  {
    id: 8,
    day: 'Hari 2',
    date: 'Rabu, 19 Agustus 2026',
    time: '14.00 - 16.00 WITA',
    name: 'Dewata Oleh-Oleh Khas Bali',
    category: 'Belanja & UMKM',
    region: 'Tabanan, Bali',
    icon: '🛍️',
    desc: 'Kunjungan belanja ragam produk kerajinan dan jajanan tradisional khas Bali.',
    image: '/images/locations/oleh-olehdewata.jpg',
    highlight: 'Pusat Produk Khas & Kerajinan'
  },
  {
    id: 9,
    day: 'Hari 2',
    date: 'Rabu, 19 Agustus 2026',
    time: '19.00 - 20.00 WITA',
    name: 'Teater Pertunjukan Tari Devdan Show',
    category: 'Seni Pertunjukan',
    region: 'Nusa Dua, Badung',
    icon: '🎭',
    desc: 'Menyaksikan mahakarya teater akrobatik "Treasure of the Archipelago" yang merangkum tarian Sabang sampai Merauke.',
    image: '/images/locations/taridevdan.JPG',
    highlight: 'Pementasan Budaya Sabang s/d Merauke'
  },

  // HARI 3: DENPASAR & PANTAI SELATAN
  {
    id: 10,
    day: 'Hari 3',
    date: 'Kamis, 20 Agustus 2026',
    time: '09.00 - 10.30 WITA',
    name: 'Balai Diklat Industri (BDI) Denpasar',
    category: 'Industri 2',
    region: 'Denpasar Timur',
    icon: '💻',
    desc: 'Workshop profesional editing foto dengan Adobe Lightroom serta eksplorasi laboratorium media kreatif.',
    image: '/images/industry/balaidiklat1.JPG',
    highlight: 'Workshop Adobe Lightroom & Media Lab'
  },
  {
    id: 11,
    day: 'Hari 3',
    date: 'Kamis, 20 Agustus 2026',
    time: '11.00 - 13.00 WITA',
    name: 'Krisna Sunset Road',
    category: 'Belanja & Oleh-Oleh',
    region: 'Kuta, Badung',
    icon: '🎁',
    desc: 'Pusat belanja cinderamata terlengkap: pie susu, kopi Kintamani, dan batik lukis Bali.',
    image: '/images/locations/krisna.jpg',
    highlight: 'Sentra Oleh-Oleh Terlengkap Bali'
  },
  {
    id: 12,
    day: 'Hari 3',
    date: 'Kamis, 20 Agustus 2026',
    time: '14.00 - 15.30 WITA',
    name: 'Pantai Kuta',
    category: 'Wisata Bahari',
    region: 'Kuta, Badung',
    icon: '🏄',
    desc: 'Menikmati pesona garis pantai pasir putih legendaris dan ombak pesisir Samudra Hindia.',
    image: '/images/locations/kutabali.jpg',
    highlight: 'Garis Pantai Ikonik Pariwisata Bali'
  },
  {
    id: 13,
    day: 'Hari 3',
    date: 'Kamis, 20 Agustus 2026',
    time: '16.00 - 17.30 WITA',
    name: 'Pantai Pandawa',
    category: 'Wisata Bahari & Karang',
    region: 'Kutuh, Kuta Selatan',
    icon: '🏖️',
    desc: 'Menyusuri pantai pasir putih di balik dinding tebing kapur megah berhias 5 patung ksatria Panca Pandawa.',
    image: '/images/locations/pantaipandawa.JPG',
    highlight: 'Pantai Berdinding Tebing Kapur Megah'
  },
  {
    id: 14,
    day: 'Hari 3',
    date: 'Kamis, 20 Agustus 2026',
    time: '18.00 - 19.00 WITA',
    name: 'Pertunjukan Seni Budaya Tari Kecak',
    category: 'Seni Sakral Budaya',
    region: 'Pantai Pandawa, Badung',
    icon: '🔥',
    desc: 'Pementasan drama tari sakral berlatar epos Ramayana diiringi sahutan ritmis puluhan penari tanpa alat musik.',
    image: '/images/locations/tarikecak.jpeg',
    highlight: 'Tari Sakral Paduan Suara & Api Unggun'
  },
  {
    id: 15,
    day: 'Hari 3',
    date: 'Kamis, 20 Agustus 2026',
    time: '19.30 - 21.30 WITA',
    name: 'Pantai Jimbaran (Makrab Tepi Pantai)',
    category: 'Kuliner & Malam Keakraban',
    region: 'Jimbaran, Kuta Selatan',
    icon: '🕯️',
    desc: 'Malam keakraban (makrab) dan santap hidangan laut khas Bali di tepi pantai bertabur lilin romantis.',
    image: '/images/locations/jimbaran.png',
    highlight: 'Malam Keakraban & Seafood di Pasir Pantai'
  },

  // HARI 4 & 5: PERJALANAN PULANG
  {
    id: 16,
    day: 'Hari 4',
    date: 'Jumat, 21 Agustus 2026',
    time: '11.00 - 13.00 WITA',
    name: 'Oleh-Oleh Karang Kurnia',
    category: 'Belanja Terakhir',
    region: 'Denpasar / Tabanan',
    icon: '📦',
    desc: 'Kunjungan belanja cinderamata terakhir sebelum menempuh perjalanan darat kembali ke Jawa.',
    image: '/images/locations/karang-kurnia.png',
    highlight: 'Pemberhentian Belanja Terakhir'
  },
  {
    id: 17,
    day: 'Hari 4 & 5',
    date: 'Jumat-Sabtu, 21-22 Agustus 2026',
    time: '17.00 WITA - 05.00 WIB',
    name: 'Pelabuhan Gilimanuk ➔ Ketapang ➔ Kampus UPGRIS',
    category: 'Perjalanan Kembali',
    region: 'Bali ➔ Jawa Timur ➔ Jawa Tengah',
    icon: '🏁',
    desc: 'Penyeberangan kembali melintasi Selat Bali dan jalur Pantura hingga tiba dengan selamat di Kampus 4 UPGRIS Semarang.',
    image: '/images/gallery/tibadisemarang.jpg',
    highlight: 'Tiba Kembali di Kampus UPGRIS Semarang'
  }
];

const dayFilters = [
  { label: 'Semua Rute', value: 'all' },
  { label: 'Hari 1 (Semarang ➔ Jatim)', value: 'Hari 1' },
  { label: 'Hari 2 (Bedugul & Nusa Dua)', value: 'Hari 2' },
  { label: 'Hari 3 (Denpasar & Pantai)', value: 'Hari 3' },
  { label: 'Hari 4 & 5 (Kembali)', value: 'Hari 4' }
];

const RouteMap = () => {
  const [activeDay, setActiveDay] = useState('all');
  const [selectedMilestone, setSelectedMilestone] = useState(routeMilestones[0]);

  const filteredMilestones = activeDay === 'all'
    ? routeMilestones
    : routeMilestones.filter(item => item.day.includes(activeDay));

  return (
    <section id="routemap" className="section-padding bg-cream relative overflow-hidden">
      {/* Background Balinese Watermarks */}
      <div className="absolute top-1/4 -left-20 opacity-[0.025] pointer-events-none">
        <BalineseOrnament variant="mandala" size={380} color="#2D6A4F" />
      </div>

      <div className="container-custom relative z-10">
        <SectionTitle
          title="PETA RUTE PERJALANAN"
          subtitle="Jalur perjalanan resmi Kuliah Kerja Lapangan Prodi Informatika UPGRIS: Semarang ➔ Bali ➔ Semarang."
          align="center"
        />

        {/* Summary Metric Ribbon */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto mb-10 text-center">
          <div className="balinese-card p-4 rounded-xl border border-wood/20">
            <span className="text-xl sm:text-2xl select-none">🗺️</span>
            <div className="font-heading text-lg sm:text-xl font-bold text-primary mt-1">± 1.500+ KM</div>
            <div className="text-[10px] sm:text-xs text-charcoal-light uppercase tracking-wider mt-0.5">Jarak Tempuh PP</div>
          </div>
          <div className="balinese-card p-4 rounded-xl border border-wood/20">
            <span className="text-xl sm:text-2xl select-none">🚌</span>
            <div className="font-heading text-lg sm:text-xl font-bold text-primary mt-1">Bus & Feri</div>
            <div className="text-[10px] sm:text-xs text-charcoal-light uppercase tracking-wider mt-0.5">Moda Transportasi</div>
          </div>
          <div className="balinese-card p-4 rounded-xl border border-wood/20">
            <span className="text-xl sm:text-2xl select-none">📍</span>
            <div className="font-heading text-lg sm:text-xl font-bold text-primary mt-1">17 Destinasi</div>
            <div className="text-[10px] sm:text-xs text-charcoal-light uppercase tracking-wider mt-0.5">Titik Singgah Utama</div>
          </div>
          <div className="balinese-card p-4 rounded-xl border border-wood/20">
            <span className="text-xl sm:text-2xl select-none">⏳</span>
            <div className="font-heading text-lg sm:text-xl font-bold text-primary mt-1">5 Hari 4 Malam</div>
            <div className="text-[10px] sm:text-xs text-charcoal-light uppercase tracking-wider mt-0.5">18–22 Agustus 2026</div>
          </div>
        </div>

        {/* Day Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 max-w-3xl mx-auto">
          {dayFilters.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveDay(tab.value)}
              className={`px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs tracking-wider uppercase rounded-full transition-all cursor-pointer font-medium ${
                activeDay === tab.value
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-charcoal/5 dark:bg-white/5 text-charcoal-light hover:bg-charcoal/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Master Route Layout: Interactive Split View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          
          {/* LEFT: Milestone Route Stepper Timeline (7 Cols) */}
          <div className="lg:col-span-7 space-y-3 max-h-[620px] overflow-y-auto pr-2 custom-scrollbar">
            {filteredMilestones.map((item, index) => {
              const isSelected = selectedMilestone?.id === item.id;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  onClick={() => setSelectedMilestone(item)}
                  className={`p-4 rounded-2xl border transition-all duration-300 cursor-pointer flex items-start gap-3.5 relative ${
                    isSelected
                      ? 'bg-white dark:bg-[#18201B] border-primary ring-2 ring-primary/25 shadow-lg -translate-y-0.5'
                      : 'balinese-card border-wood/20 hover:border-wood/50 hover:bg-white/90 dark:hover:bg-[#18201B]/90'
                  }`}
                >
                  {/* Step Number & Icon */}
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0 shadow-sm transition-colors ${
                    isSelected ? 'bg-primary text-white' : 'bg-cream-dark dark:bg-charcoal/60'
                  }`}>
                    {item.icon}
                  </div>

                  {/* Route Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                      <span className="text-[10px] font-mono tracking-widest uppercase text-wood font-semibold px-2 py-0.5 rounded-full bg-wood/10">
                        {item.day} • {item.time}
                      </span>
                      <span className="text-[11px] text-charcoal-light/70 font-medium">
                        📍 {item.region}
                      </span>
                    </div>

                    <h4 className={`font-heading text-sm sm:text-base font-semibold leading-snug truncate ${
                      isSelected ? 'text-primary dark:text-emerald-400' : 'text-charcoal'
                    }`}>
                      {item.name}
                    </h4>

                    <p className="text-charcoal-light text-xs mt-1 line-clamp-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  {/* Arrow Indicator */}
                  <span className={`text-xs mt-3 ${isSelected ? 'text-primary' : 'text-charcoal-light/40'}`}>
                    ➔
                  </span>
                </motion.div>
              );
            })}
          </div>

          {/* RIGHT: Featured Stop Spotlight Card (5 Cols Sticky) */}
          <div className="lg:col-span-5 sticky top-24">
            <AnimatePresence mode="wait">
              {selectedMilestone && (
                <motion.div
                  key={selectedMilestone.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="balinese-card rounded-3xl overflow-hidden border border-wood/30 shadow-2xl p-2 relative"
                >
                  {/* Image preview of the selected spot */}
                  <div className="aspect-[16/10] w-full rounded-2xl overflow-hidden relative shadow-inner bg-charcoal/5">
                    {selectedMilestone.image ? (
                      <img
                        src={selectedMilestone.image}
                        alt={selectedMilestone.name}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full img-placeholder flex items-center justify-center text-white/30 text-xs">
                        Pemberhentian Rute KKL
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] font-mono tracking-widest uppercase text-amber-300 font-bold px-2.5 py-1 rounded-full bg-black/60 border border-amber-300/30 backdrop-blur-sm">
                        {selectedMilestone.category}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <span className="text-xs text-amber-200 font-medium">
                        {selectedMilestone.date}
                      </span>
                      <h3 className="font-heading text-lg sm:text-xl font-bold leading-tight mt-0.5 text-white">
                        {selectedMilestone.name}
                      </h3>
                    </div>
                  </div>

                  {/* Body details */}
                  <div className="p-5">
                    <div className="flex items-center gap-2 text-xs font-semibold text-primary dark:text-emerald-400 mb-2">
                      <span>✨</span>
                      <span>{selectedMilestone.highlight}</span>
                    </div>

                    <p className="text-charcoal-light text-xs sm:text-sm leading-relaxed">
                      {selectedMilestone.desc}
                    </p>

                    <div className="mt-4 pt-3 border-t border-charcoal/10 dark:border-white/10 flex items-center justify-between text-xs text-charcoal-light font-medium">
                      <span>⏱️ {selectedMilestone.time}</span>
                      <span>📍 {selectedMilestone.region}</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

        {/* Bottom subtle note */}
        <div className="mt-12 text-center text-xs text-charcoal-light/70 italic flex items-center justify-center gap-2">
          <span>* Rute disusun berdasarkan jadwal resmi perjalanan KKL Bali 2026 Prodi Informatika UPGRIS</span>
        </div>
      </div>
    </section>
  );
};

export default RouteMap;
