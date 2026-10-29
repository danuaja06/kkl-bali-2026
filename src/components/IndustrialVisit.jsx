import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from './SectionTitle';
import BalineseOrnament from './BalineseOrnament';

const IndustrialVisit = () => {
  const victoriaPhotos = [
    { src: '/images/industry/ptvictoria1.png', label: 'Gedung Utama' },
    { src: '/images/industry/ptvictoria2.png', label: 'Proses Produksi' },
    { src: '/images/industry/ptvictoria3.jpeg', label: 'Laboratorium & QC' },
    { src: '/images/industry/ptvictoria4.jpeg', label: 'Galeri Produk' },
  ];

  const diklatPhotos = [
    { src: '/images/industry/balaidiklat1.JPG', label: 'Gedung Balai Diklat' },
    { src: '/images/industry/balaidiklat2.JPG', label: 'Pelatihan Lightroom' },
    { src: '/images/industry/balaidiklat3.JPG', label: 'Ruang Praktik' },
    { src: '/images/industry/balaidiklat4.JPG', label: 'Eksplorasi Fasilitas' },
  ];

  const [activeVictoria, setActiveVictoria] = useState(victoriaPhotos[0].src);
  const [activeDiklat, setActiveDiklat] = useState(diklatPhotos[0].src);

  return (
    <section id="industrial" className="section-padding bg-cream relative overflow-hidden">
      {/* Subtle Balinese background mandala watermark */}
      <div className="absolute -top-16 -right-16 opacity-[0.03] pointer-events-none">
        <BalineseOrnament variant="mandala" size={320} color="#2D6A4F" />
      </div>

      <div className="container-custom relative z-10">
        <SectionTitle 
          title="INDUSTRIAL VISIT" 
          subtitle="Melihat lebih dekat dunia industri dan implementasi teknologi profesional." 
        />

        <div className="mt-16 md:mt-24 flex flex-col gap-20 md:gap-28">
          
          {/* Visit 1: PT Victoria Care Indonesia */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center"
          >
            {/* Image & Thumbnails */}
            <div className="relative group">
              {/* Corner Balinese flourish */}
              <div className="absolute -top-3 -left-3 z-20">
                <BalineseOrnament variant="corner" size={36} color="#8B7355" opacity={0.6} />
              </div>
              <div className="absolute -bottom-3 -right-3 z-20 rotate-180">
                <BalineseOrnament variant="corner" size={36} color="#8B7355" opacity={0.6} />
              </div>

              <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-md bg-charcoal/5 relative border border-wood/20">
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={activeVictoria}
                    src={activeVictoria} 
                    alt="PT Victoria Care Indonesia" 
                    initial={{ opacity: 0.4, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0.4 }}
                    transition={{ duration: 0.35 }}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>
              </div>

              {/* Thumbnails */}
              <div className="mt-4 grid grid-cols-4 gap-2">
                {victoriaPhotos.map((photo, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveVictoria(photo.src)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-all duration-200 cursor-pointer ${
                      activeVictoria === photo.src 
                        ? 'border-primary ring-2 ring-primary/20 scale-105' 
                        : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={photo.src} alt={photo.label} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
            
            {/* Content */}
            <div>
              <div className="text-6xl md:text-7xl font-heading text-primary/15 font-bold leading-none select-none">
                01
              </div>
              <h3 className="font-heading text-2xl md:text-3xl text-charcoal font-semibold mt-3">
                PT VICTORIA CARE INDONESIA
              </h3>
              
              <div className="flex flex-wrap gap-4 mt-4 text-xs sm:text-sm text-charcoal-light font-medium">
                <span className="flex items-center gap-1.5 bg-cream-dark/80 px-3 py-1 rounded-full border border-charcoal/5">
                  📍 Semarang, Jawa Tengah
                </span>
                <span className="flex items-center gap-1.5 bg-cream-dark/80 px-3 py-1 rounded-full border border-charcoal/5">
                  📅 18 Agustus 2026
                </span>
              </div>
              
              <p className="mt-5 text-charcoal-light text-sm md:text-base leading-relaxed">
                Pada kunjungan ini, kami mendapat kesempatan berharga untuk melihat secara langsung proses produksi berbagai produk kosmetik dan perawatan tubuh milik PT Victoria Care Indonesia. Mulai dari tahap formulasi, pengolahan bahan, pengemasan otomatis, hingga pengawasan mutu (Quality Control) diperlihatkan secara detail. Selain itu, kami juga diajak mengunjungi area pameran galeri produk unggulan perusahaan untuk memahami strategi inovasi dan branding industri modern.
              </p>

              <div className="mt-6 pt-5 border-t border-wood/20 flex items-center gap-2 text-xs text-wood font-medium">
                <span className="inline-block w-1.5 h-1.5 rotate-45 bg-wood"></span>
                <span>Fokus: Otomasi Produksi, Quality Assurance & Product Exhibition</span>
              </div>
            </div>
          </motion.div>

          {/* Decorative Balinese Divider between visits */}
          <div className="flex justify-center my-4">
            <BalineseOrnament variant="divider" size={24} color="#8B7355" opacity={0.45} />
          </div>

          {/* Visit 2: Balai Diklat Industri Denpasar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center"
          >
            {/* Image & Thumbnails (order-2 on md) */}
            <div className="md:order-2 relative group">
              {/* Corner Balinese flourish */}
              <div className="absolute -top-3 -right-3 z-20 scale-x-[-1]">
                <BalineseOrnament variant="corner" size={36} color="#8B7355" opacity={0.6} />
              </div>
              <div className="absolute -bottom-3 -left-3 z-20 scale-y-[-1]">
                <BalineseOrnament variant="corner" size={36} color="#8B7355" opacity={0.6} />
              </div>

              <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-md bg-charcoal/5 relative border border-wood/20">
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={activeDiklat}
                    src={activeDiklat} 
                    alt="Balai Diklat Industri Denpasar" 
                    initial={{ opacity: 0.4, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0.4 }}
                    transition={{ duration: 0.35 }}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>
              </div>

              {/* Thumbnails */}
              <div className="mt-4 grid grid-cols-4 gap-2">
                {diklatPhotos.map((photo, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveDiklat(photo.src)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-all duration-200 cursor-pointer ${
                      activeDiklat === photo.src 
                        ? 'border-primary ring-2 ring-primary/20 scale-105' 
                        : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={photo.src} alt={photo.label} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
            
            {/* Content (order-1 on md) */}
            <div className="md:order-1">
              <div className="text-6xl md:text-7xl font-heading text-primary/15 font-bold leading-none select-none">
                02
              </div>
              <h3 className="font-heading text-2xl md:text-3xl text-charcoal font-semibold mt-3">
                BALAI DIKLAT INDUSTRI DENPASAR
              </h3>
              
              <div className="flex flex-wrap gap-4 mt-4 text-xs sm:text-sm text-charcoal-light font-medium">
                <span className="flex items-center gap-1.5 bg-cream-dark/80 px-3 py-1 rounded-full border border-charcoal/5">
                  📍 Denpasar, Bali
                </span>
                <span className="flex items-center gap-1.5 bg-cream-dark/80 px-3 py-1 rounded-full border border-charcoal/5">
                  📅 20 Agustus 2026
                </span>
              </div>
              
              <p className="mt-5 text-charcoal-light text-sm md:text-base leading-relaxed">
                Di Balai Diklat Industri (BDI) Denpasar, kami mengikuti workshop dan pelatihan editing foto profesional menggunakan Adobe Lightroom. Seluruh peserta dibimbing langsung mengenai penguasaan color grading, pencahayaan, dynamic range, hingga workflow kurasi visual standar industri kreatif digital. Setelah sesi workshop, kami diajak menjelajahi fasilitas studio, laboratorium animasi, dan ruang inkubasi kreatif yang ada di BDI Denpasar.
              </p>

              <div className="mt-6 pt-5 border-t border-wood/20 flex items-center gap-2 text-xs text-wood font-medium">
                <span className="inline-block w-1.5 h-1.5 rotate-45 bg-wood"></span>
                <span>Fokus: Digital Photography Editing, Adobe Lightroom & Media Lab Tour</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default IndustrialVisit;
