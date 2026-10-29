import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from './SectionTitle';
import BalineseOrnament from './BalineseOrnament';

const destinations = [
  { 
    id: 1,
    name: 'Candi Kuning / Pura Ulun Danu Beratan', 
    tag: 'Wisata Alam & Pura Suci', 
    highlight: 'Pura Ikonik di Kaldera Danau',
    span: 'col-span-2 row-span-2', 
    image: '/images/locations/bgulundanu3.JPG',
    desc: 'Pura air bersejarah peninggalan abad ke-17 di tepi Danau Beratan Bedugul pada ketinggian 1.200 mdpl. Dikelilingi perbukitan hijau berkabut dan didedikasikan untuk pemujaan Dewi Danu (Dewi Air & Kesuburan).',
    details: 'Berada di kawasan pegunungan Bedugul, Candi Kuning dan kompleks Pura Ulun Danu Beratan memadukan arsitektur tradisional Hindu Bali dengan latar panorama danau kawah vulkanik yang tenang dan sejuk. Pura ini menjadi salah satu warisan budaya paling tersohor di Indonesia.'
  },
  { 
    id: 2,
    name: 'Pantai Kuta', 
    tag: 'Sunset & Wisata Pesisir', 
    highlight: 'Garis Pantai Legendaris Bali',
    span: '', 
    image: '/images/locations/kutabali.jpg',
    desc: 'Pusat dinamika pariwisata Bali dengan bentang pantai pasir putih luas, ombak selancar legendaris, dan momen golden sunset yang selalu menghangatkan suasana.',
    details: 'Pantai Kuta adalah destinasi pantai paling ikonik di Pulau Dewata. Menikmati matahari terbenam bersama rekan-rekan seangkatan di tepi pantai Kuta menjadi salah satu momen relaksasi terbaik di sela agenda padat KKL.'
  },
  { 
    id: 3,
    name: 'Pantai Pandawa', 
    tag: 'Tebing Kapur Megah', 
    highlight: 'Pantai Rahasia Dibalik Tebing Karang',
    span: '', 
    image: '/images/locations/pantaipandawa.JPG',
    desc: 'Pantai eksotis dengan hamparan pasir putih lembut dan air laut toska jernih, diapit dinding tebing kapur raksasa berhias 5 patung kesatria Panca Pandawa.',
    details: 'Dahulu dikenal sebagai secret beach di Desa Kutuh, Pantai Pandawa kini menjadi daya tarik visual luar biasa. Pahatan patung Yudhistira, Bima, Arjuna, Nakula, Sadewa, dan Dewi Kunti di relung tebing kapur memberikan sentuhan megah pada panorama pesisir.'
  },
  { 
    id: 4,
    name: 'Pertunjukan Tari Kecak', 
    tag: 'Seni Sakral Tradisional', 
    highlight: 'Drama Kolosal Tanpa Alat Musik',
    span: 'col-span-2', 
    image: '/images/locations/tarikecak.jpeg',
    desc: 'Pertunjukan seni drama tari sakral berlatar epos Ramayana. Ditarikan oleh puluhan pria dengan seruan paduan ritmis magis "cak-cak-cak" melingkari kobaran api unggun.',
    details: 'Tari Kecak tidak menggunakan alat musik gamelan sama sekali, melainkan mengandalkan harmoni suara vokal puluhan penari. Gerakan tangan serentak dan kobaran api menghadirkan atmosfer magis yang menyentuh jiwa setiap penonton.'
  },
  { 
    id: 5,
    name: 'Teater Tari Devdan', 
    tag: 'Pertunjukan Mahakarya Nusantara', 
    highlight: 'Tari Spektakuler Sabang Sampai Merauke',
    span: '', 
    image: '/images/locations/taridevdan.JPG',
    desc: 'Pementasan teatrikal & akrobatik megah "Treasure of the Archipelago" yang merangkum tari-tarian dari Sabang sampai Merauke: Sumatra, Jawa, Kalimantan, Bali, hingga Papua.',
    details: 'Tari Devdan memadukan tarian tradisional nusantara dengan tata panggung modern, akrobatik udara, serta efek visual memukau. Dari kelincahan tari Saman Sumatra, keanggunan tari Jawa, mistisnya Dayak Kalimantan, hingga semangat dinamis tarian Papua, semuanya dirangkai secara megah dalam satu panggung spektakuler.'
  },
  { 
    id: 6,
    name: 'Jimbaran Bay Seafood', 
    tag: 'Wisata Kuliner Malam', 
    highlight: 'Santap Malam Bertabur Lilin di Tepi Ombak',
    span: '', 
    image: '/images/locations/jimbaran.png',
    desc: 'Santap malam hidangan laut bakar bumbu khas Bali di atas pasir pantai Jimbaran, ditemani deburan ombak malam dan temaram nyala lilin romantis.',
    details: 'Pantai Jimbaran terkenal di seluruh dunia dengan deretan kafe seafood tepi pantai. Menyantap hidangan ikan, udang, dan cumi bakar khas Bali sambil berbincang santai bersama teman-teman menutup hari dengan sempurna.'
  },
  { 
    id: 7,
    name: 'Krisna Oleh-oleh Khas Bali', 
    tag: 'Pusat Cinderamata', 
    highlight: 'Sentra Lengkap Produk UMKM Bali',
    span: '', 
    image: '/images/locations/krisna.jpg',
    desc: 'Pusat belanja cinderamata terlengkap di Bali: aneka camilan pie susu renyah, kopi Kintamani, kacang disco, kerajinan ukir kayu, serta busana pantai.',
    details: 'Krisna menjadi destinasi favorit rombongan KKL untuk berburu oleh-oleh bagi keluarga dan sahabat di rumah, sekaligus mempelajari ekosistem retail dan distribusi produk kreatif lokal di Bali.'
  },
  { 
    id: 8,
    name: 'Joger Pabrik Kata-Kata', 
    tag: 'Industri Kreatif & Merchandise', 
    highlight: 'Pelopor Cinderamata Kata-Kata Humor',
    span: '', 
    image: '/images/locations/jogerbali.jpg',
    desc: 'Pusat suvenir legendaris sejak 1981 yang terkenal dengan kaos dan merchandise berbalut permainan kata-kata humor khas Bali yang cerdas, menggelitik, dan inspiratif.',
    details: 'Joger bukan sekadar toko suvenir, melainkan simbol kreativitas dan kejujuran berwirausaha. Setiap sudut gerai dipenuhi quote-quote humoris yang menjadi kenangan unik tak tergantikan.'
  },
];

const BaliExploration = () => {
  const [selectedDest, setSelectedDest] = useState(null);

  return (
    <section id="exploration" className="section-padding bg-cream-dark relative overflow-hidden">
      {/* Subtle Balinese Watermarks in Background */}
      <div className="absolute top-10 right-10 opacity-[0.035] pointer-events-none">
        <BalineseOrnament variant="frangipani" size={260} color="#8B7355" />
      </div>
      <div className="absolute -bottom-10 -left-10 opacity-[0.03] pointer-events-none">
        <BalineseOrnament variant="mandala" size={300} color="#2D6A4F" />
      </div>

      <div className="container-custom relative z-10">
        <SectionTitle 
          title="BALI EXPLORATION" 
          subtitle="Menyusuri kekayaan seni tradisi nusantara, keindahan alam bahari, serta dinamika industri kreatif Pulau Dewata." 
        />

        {/* Bento Grid */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 md:gap-5 auto-rows-[200px] md:auto-rows-[240px]">
          {destinations.map((dest, index) => {
            const isLarge = dest.span.includes('row-span-2');

            return (
              <motion.div
                key={dest.id || index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.015 }}
                onClick={() => setSelectedDest(dest)}
                className={`rounded-xl overflow-hidden relative group cursor-pointer shadow-sm ${dest.span} ${
                  dest.image 
                    ? 'bg-charcoal' 
                    : 'bg-gradient-to-br from-[#8B7355]/80 via-[#2E86AB]/60 to-[#1B4332]'
                } flex items-center justify-center border border-charcoal/10 hover:border-wood/40 transition-all duration-300`}
                style={{ minHeight: isLarge ? '100%' : '100%' }}
              >
                {dest.image ? (
                  <img 
                    src={dest.image} 
                    alt={dest.name} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108 z-0" 
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20">
                    <span className="text-3xl mb-2 filter drop-shadow">🕯️🌊</span>
                    <span className="text-white/90 text-sm font-medium tracking-wide">
                      {dest.name}
                    </span>
                    <span className="text-white/60 text-xs mt-1 max-w-[200px] hidden sm:block">
                      {dest.desc}
                    </span>
                  </div>
                )}

                {/* Dark Gradient Overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 md:p-5 flex flex-col justify-end z-10">
                  {/* Highlight pill */}
                  <div className="flex items-center gap-1.5 text-[10px] tracking-wider uppercase text-amber-300 font-semibold mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                    <span>{dest.highlight || dest.tag}</span>
                  </div>
                  
                  <h4 className="font-heading text-sm md:text-lg text-white font-semibold leading-snug">
                    {dest.name}
                  </h4>

                  <p className="text-white/75 text-xs mt-1.5 line-clamp-2 hidden sm:block font-normal leading-relaxed">
                    {dest.desc}
                  </p>

                  <div className="mt-2 flex items-center gap-1 text-[11px] text-amber-200/90 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>Baca selengkapnya</span>
                    <span>➔</span>
                  </div>
                </div>

                {/* Corner ornament on hover */}
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-60 transition-opacity duration-300 z-10 pointer-events-none">
                  <BalineseOrnament variant="corner" size={24} color="#FFFFFF" opacity={1} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom subtle note */}
        <div className="mt-10 flex flex-col items-center justify-center text-center">
          <div className="flex items-center gap-3 text-xs text-charcoal-light/70 tracking-wider">
            <span className="w-8 h-px bg-wood/30"></span>
            <span>Klik setiap destinasi untuk membaca informasi & ulasan selengkapnya</span>
            <span className="w-8 h-px bg-wood/30"></span>
          </div>
        </div>
      </div>

      {/* Destination Detail Modal */}
      <AnimatePresence>
        {selectedDest && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedDest(null)}
            className="fixed inset-0 z-[70] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-cream dark:bg-[#161D19] border border-wood/30 rounded-2xl max-w-xl w-full overflow-hidden shadow-2xl relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedDest(null)}
                className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center text-sm transition-colors cursor-pointer"
              >
                ✕
              </button>

              {/* Modal Image if available */}
              {selectedDest.image && (
                <div className="w-full h-52 sm:h-60 relative overflow-hidden">
                  <img
                    src={selectedDest.image}
                    alt={selectedDest.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <span className="text-[10px] uppercase tracking-widest text-amber-300 font-semibold px-2 py-0.5 rounded bg-black/40 border border-amber-300/30">
                      {selectedDest.tag}
                    </span>
                    <h3 className="font-heading text-lg sm:text-xl font-bold mt-1 text-white">
                      {selectedDest.name}
                    </h3>
                  </div>
                </div>
              )}

              {/* Modal Content */}
              <div className="p-6">
                {!selectedDest.image && (
                  <div className="mb-4">
                    <span className="text-[10px] uppercase tracking-widest text-wood font-semibold px-2.5 py-0.5 rounded bg-wood/10 border border-wood/20">
                      {selectedDest.tag}
                    </span>
                    <h3 className="font-heading text-xl font-bold mt-1.5 text-charcoal">
                      {selectedDest.name}
                    </h3>
                  </div>
                )}

                <div className="text-xs sm:text-sm font-semibold text-primary dark:text-emerald-400 mb-2">
                  ✨ {selectedDest.highlight}
                </div>

                <p className="text-charcoal-light text-sm leading-relaxed mb-4">
                  {selectedDest.desc}
                </p>

                {selectedDest.details && (
                  <p className="text-charcoal-light/80 text-xs sm:text-sm leading-relaxed pt-3 border-t border-charcoal/10 dark:border-white/10">
                    {selectedDest.details}
                  </p>
                )}

                <div className="mt-6 flex justify-end">
                  <button
                    onClick={() => setSelectedDest(null)}
                    className="px-5 py-2 rounded-full bg-primary text-white text-xs font-medium hover:bg-primary-light transition-colors cursor-pointer"
                  >
                    Tutup
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default BaliExploration;
