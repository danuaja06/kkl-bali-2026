import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Lightbox = ({ 
  isOpen, 
  onClose, 
  images = [], 
  currentIndex = 0, 
  onNext, 
  onPrev 
}) => {
  const currentImage = images[currentIndex] || null;

  // Keyboard navigation: Escape, ArrowLeft, ArrowRight
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight' && onNext) {
        onNext();
      } else if (e.key === 'ArrowLeft' && onPrev) {
        onPrev();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onNext, onPrev]);

  // Lock body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Helper download image
  const handleDownload = (e) => {
    e.stopPropagation();
    if (!currentImage?.src) return;
    const link = document.createElement('a');
    link.href = currentImage.src;
    link.download = currentImage.src.split('/').pop() || 'kkl-bali-foto.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <AnimatePresence>
      {isOpen && currentImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] bg-black/95 backdrop-blur-md flex flex-col justify-between"
          onClick={onClose}
        >
          {/* Top Bar: Counter, Actions & Close */}
          <div 
            className="w-full flex items-center justify-between p-4 sm:p-6 z-20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Counter */}
            <div className="text-white/80 font-mono text-xs sm:text-sm tracking-widest bg-white/10 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-white/15">
              <span>{currentIndex + 1}</span>
              <span className="text-white/40 mx-1">/</span>
              <span>{images.length}</span>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3">
              {/* Download Button */}
              {currentImage.src && (
                <button
                  type="button"
                  onClick={handleDownload}
                  className="flex items-center gap-1.5 text-xs text-white/80 hover:text-white bg-white/10 hover:bg-white/20 backdrop-blur px-3 py-1.5 rounded-full border border-white/20 transition-all cursor-pointer"
                  title="Unduh foto ini"
                >
                  <span>📥</span>
                  <span className="hidden sm:inline">Unduh</span>
                </button>
              )}

              {/* Close Button */}
              <button
                type="button"
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/25 text-white/80 hover:text-white flex items-center justify-center text-xl transition-all border border-white/20 cursor-pointer focus:outline-none"
                aria-label="Tutup Lightbox"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Center Stage: Image + Navigation Arrows */}
          <div className="relative flex-1 flex items-center justify-center p-3 sm:p-6 select-none">
            {/* Previous Button */}
            {images.length > 1 && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onPrev && onPrev();
                }}
                className="absolute left-2 sm:left-6 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/60 hover:bg-black/90 border border-white/25 text-white flex items-center justify-center text-xl sm:text-2xl transition-all cursor-pointer shadow-lg hover:scale-110 focus:outline-none"
                aria-label="Foto Sebelumnya"
              >
                ‹
              </button>
            )}

            {/* Featured Image */}
            <div 
              className="max-w-5xl max-h-[75vh] sm:max-h-[80vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImage.src || currentIndex}
                  src={currentImage.src}
                  alt={currentImage.alt || 'KKL Bali Foto'}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25 }}
                  className="max-h-[65vh] sm:max-h-[72vh] w-auto max-w-full object-contain rounded-xl shadow-2xl border border-white/10"
                />
              </AnimatePresence>
            </div>

            {/* Next Button */}
            {images.length > 1 && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onNext && onNext();
                }}
                className="absolute right-2 sm:right-6 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/60 hover:bg-black/90 border border-white/25 text-white flex items-center justify-center text-xl sm:text-2xl transition-all cursor-pointer shadow-lg hover:scale-110 focus:outline-none"
                aria-label="Foto Selanjutnya"
              >
                ›
              </button>
            )}
          </div>

          {/* Bottom Bar: Caption & Category */}
          <div 
            className="w-full p-4 sm:p-6 text-center z-20 bg-gradient-to-t from-black via-black/80 to-transparent"
            onClick={(e) => e.stopPropagation()}
          >
            {currentImage.caption && (
              <h4 className="text-white text-sm sm:text-base font-heading font-medium">
                {currentImage.caption}
              </h4>
            )}
            {currentImage.category && (
              <p className="text-amber-300/80 text-[11px] uppercase tracking-widest mt-1 font-medium">
                Kategori: {currentImage.category}
              </p>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Lightbox;
