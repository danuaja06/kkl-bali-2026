import { motion } from 'framer-motion';

const SectionTitle = ({ title, subtitle, align = 'left', light = false }) => {
  const alignClass =
    align === 'center' ? 'text-center' : align === 'right' ? 'text-right' : 'text-left';
  const flexAlign =
    align === 'center' ? 'justify-center' : align === 'right' ? 'justify-end' : 'justify-start';

  return (
    <motion.div
      className={`mb-12 md:mb-16 ${alignClass}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
    >
      <h2
        className={`font-heading text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight tracking-tight ${
          light ? 'text-white' : 'text-charcoal'
        }`}
      >
        {title}
      </h2>

      {/* Subtle Balinese-style ornamental accent */}
      <div className={`flex items-center gap-2 mt-4 ${flexAlign}`}>
        <div className={`h-px w-10 sm:w-16 ${light ? 'bg-white/30' : 'bg-wood/40'}`} />
        <div
          className={`w-2 h-2 rotate-45 ${
            light
              ? 'bg-white/50 border border-white/60'
              : 'bg-wood/60 border border-wood/80'
          }`}
        />
        <div className={`h-px w-10 sm:w-16 ${light ? 'bg-white/30' : 'bg-wood/40'}`} />
      </div>

      {subtitle && (
        <p
          className={`mt-4 text-base md:text-lg max-w-2xl leading-relaxed ${
            align === 'center' ? 'mx-auto' : ''
          } ${light ? 'text-white/70' : 'text-charcoal-light'}`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionTitle;
