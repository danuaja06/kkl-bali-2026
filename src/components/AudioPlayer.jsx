import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.4);
  const [isExpanded, setIsExpanded] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.log('Audio autoplay prevented:', err);
        });
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/audio/gamelan-bali.mp3"
        loop
        preload="auto"
      />

      {/* Floating Audio Player Widget at Bottom-Left */}
      <div className="fixed bottom-6 left-6 z-40 flex items-center gap-2">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="flex items-center"
        >
          {/* Main Play/Pause Button */}
          <button
            type="button"
            onClick={togglePlay}
            aria-label={isPlaying ? 'Jeda Musik Bali' : 'Putar Musik Tradisional Bali'}
            title={isPlaying ? 'Jeda Musik Bali' : 'Putar Musik Tradisional Bali'}
            className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-full shadow-2xl backdrop-blur-md border transition-all duration-300 cursor-pointer ${
              isPlaying
                ? 'bg-primary/90 text-white border-primary-light shadow-primary/30 ring-2 ring-primary/20'
                : 'bg-cream-dark/95 dark:bg-charcoal/90 text-charcoal dark:text-cream border-wood/30 hover:border-wood shadow-lg'
            }`}
          >
            {/* Animated Equalizer bars or Sound icon */}
            {isPlaying ? (
              <div className="flex items-end gap-0.5 h-4 w-4">
                <span className="w-1 bg-amber-300 rounded-full animate-bounce [animation-duration:600ms]" style={{ height: '70%' }} />
                <span className="w-1 bg-amber-300 rounded-full animate-bounce [animation-duration:450ms]" style={{ height: '100%' }} />
                <span className="w-1 bg-amber-300 rounded-full animate-bounce [animation-duration:750ms]" style={{ height: '40%' }} />
              </div>
            ) : (
              <span className="text-base select-none">🎵</span>
            )}

            <div className="flex flex-col text-left">
              <span className="text-[11px] font-semibold tracking-wider uppercase leading-tight font-heading">
                {isPlaying ? 'Gamelan Bali' : 'Musik Tradisional'}
              </span>
              <span className="text-[9px] text-wood dark:text-amber-300/80 leading-none">
                {isPlaying ? 'Sedang Memutar' : 'Klik untuk Putar'}
              </span>
            </div>
          </button>

          {/* Volume control pill expander */}
          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className="ml-1 w-7 h-7 rounded-full bg-cream-dark/80 dark:bg-charcoal/80 text-charcoal-light dark:text-cream border border-wood/25 flex items-center justify-center text-xs hover:bg-wood/10 transition-colors cursor-pointer"
            title="Pengaturan Volume"
          >
            {volume === 0 ? '🔇' : '🔊'}
          </button>

          {/* Volume slider drawer */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, x: -10, width: 0 }}
                animate={{ opacity: 1, x: 0, width: 'auto' }}
                exit={{ opacity: 0, x: -10, width: 0 }}
                className="ml-2 bg-cream-dark/95 dark:bg-charcoal/95 backdrop-blur-md p-2 rounded-xl border border-wood/30 flex items-center gap-2 shadow-xl"
              >
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={volume}
                  onChange={(e) => setVolume(parseFloat(e.target.value))}
                  className="w-16 sm:w-20 accent-primary cursor-pointer h-1.5 bg-charcoal/10 dark:bg-white/20 rounded-lg"
                  aria-label="Volume Slider"
                />
                <span className="text-[10px] font-mono text-charcoal-light dark:text-cream/70 w-6">
                  {Math.round(volume * 100)}%
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </>
  );
};

export default AudioPlayer;
