import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from './SectionTitle';
import galleryData from '../data/gallery';
import Lightbox from './Lightbox';
import BalineseOrnament from './BalineseOrnament';

const categories = ['All', 'Perjalanan', 'Industri', 'Bali', 'Moments'];

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Filter gambar berdasarkan kategori
  const filteredData = activeFilter === 'All'
    ? galleryData
    : galleryData.filter(item => item.category?.toLowerCase() === activeFilter.toLowerCase());

  // Helper untuk menentukan placeholder gradient berdasarkan index
  const getPlaceholderClass = (index) => {
    const classes = ['img-placeholder', 'img-placeholder-warm', 'img-placeholder-sea'];
    return classes[index % classes.length];
  };

  // Helper untuk menentukan CSS class berdasarkan ukuran gambar
  const getSizeClass = (size) => {
    switch (size) {
      case 'large':
        return 'col-span-2 row-span-2 min-h-[300px] md:min-h-[400px]';
      case 'medium':
        return 'col-span-1 row-span-1 min-h-[280px] md:min-h-[320px]';
      case 'small':
      default:
        return 'col-span-1 row-span-1 min-h-[180px] md:min-h-[220px]';
    }
  };

  const openLightbox = (index) => {
    setCurrentPhotoIndex(index);
    setIsLightboxOpen(true);
  };

  const handleNext = () => {
    setCurrentPhotoIndex((prev) => (prev + 1) % filteredData.length);
  };

  const handlePrev = () => {
    setCurrentPhotoIndex((prev) => (prev - 1 + filteredData.length) % filteredData.length);
  };

  return (
    <section id="gallery" className="section-padding bg-cream relative overflow-hidden">
      {/* Subtle Balinese Watermarks */}
      <div className="absolute -top-12 -left-12 opacity-[0.025] pointer-events-none">
        <BalineseOrnament variant="mandala" size={320} color="#2D6A4F" />
      </div>
      <div className="absolute -bottom-16 -right-16 opacity-[0.03] pointer-events-none">
        <BalineseOrnament variant="frangipani" size={340} color="#8B7355" />
      </div>

      <div className="container-custom relative z-10">
        <SectionTitle
          title="MOMENTS FROM THE JOURNEY"
          subtitle="Beberapa momen yang tersimpan dari perjalanan KKL Bali 2026."
          align="center"
        />

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10 md:mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 text-xs tracking-wider uppercase rounded-full transition-all cursor-pointer focus:outline-none ${
                activeFilter === cat
                  ? 'bg-primary text-white'
                  : 'bg-charcoal/5 text-charcoal-light hover:bg-charcoal/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4"
          layout
        >
          <AnimatePresence>
            {filteredData.map((item, index) => (
              <motion.div
                key={item.id || index}
                layoutId={`gallery-item-${item.id || index}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.02 }}
                onClick={() => openLightbox(index)}
                className={`rounded-lg overflow-hidden relative cursor-pointer group ${getSizeClass(item.size)}`}
              >
                {/* Konten Gambar / Placeholder */}
                {item.src ? (
                  <img
                    src={item.src}
                    alt={item.caption || 'KKL Moment'}
                    className="object-cover w-full h-full absolute inset-0"
                    loading="lazy"
                  />
                ) : (
                  <div className={`${getPlaceholderClass(index)} w-full h-full absolute inset-0 flex items-center justify-center`}>
                    <span className="text-white/20 text-xs tracking-wider px-2 text-center">
                      Foto KKL
                    </span>
                  </div>
                )}

                {/* Hover Overlay Gelap */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 z-10" />

                {/* Caption Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/70 to-transparent z-20">
                  {item.caption && (
                    <p className="text-white text-xs md:text-sm line-clamp-2">
                      {item.caption}
                    </p>
                  )}
                  {item.category && (
                    <p className="text-white/60 text-[10px] uppercase tracking-wider mt-1">
                      {item.category}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredData.length === 0 && (
          <div className="text-center py-10 text-charcoal-light text-sm">
            Tidak ada foto untuk kategori ini.
          </div>
        )}
      </div>

      {/* Komponen Lightbox Interaktif dengan Next, Prev, Counter & Unduh */}
      <Lightbox
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        images={filteredData}
        currentIndex={currentPhotoIndex}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </section>
  );
};

export default Gallery;
