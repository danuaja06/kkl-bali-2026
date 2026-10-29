import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import timelineData from '../data/timeline';
import BalineseOrnament from './BalineseOrnament';

const Timeline = () => {
  return (
    <section id="journey" className="section-padding bg-cream-dark relative overflow-hidden">
      {/* Background Balinese Watermarks */}
      <div className="absolute top-1/3 -right-24 opacity-[0.025] pointer-events-none">
        <BalineseOrnament variant="mandala" size={380} color="#8B7355" />
      </div>

      <div className="container-custom relative z-10">
        <SectionTitle 
          title="PERJALANAN KKL" 
          subtitle="Rangkaian cerita perjalanan lima hari dari Semarang menuju Pulau Dewata hingga kembali pulang." 
        />

        <div className="mt-16 relative">
          {/* Vertical timeline line with gradient */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/10 via-wood/40 to-primary/10 transform md:-translate-x-1/2"></div>

          <div className="flex flex-col gap-12 md:gap-24 relative">
            {timelineData.map((item, index) => {
              const isEven = index % 2 !== 0;
              
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Timeline diamond dot with ring */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rotate-45 bg-wood border-2 border-cream-dark shadow-sm transform -translate-x-[7px] md:-translate-x-1/2 mt-6 md:mt-0 z-10 hidden md:block">
                    <div className="w-1.5 h-1.5 bg-white mx-auto my-auto mt-0.5"></div>
                  </div>
                  
                  {/* Image Area */}
                  <div className="w-full md:w-1/2 flex justify-center pl-10 md:pl-0">
                    <div className="w-full max-w-md aspect-[4/3] rounded-xl overflow-hidden relative shadow-md border border-wood/20 group bg-charcoal/5">
                      {item.image ? (
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
                        />
                      ) : (
                        <div className="img-placeholder w-full h-full flex items-center justify-center">
                          <span className="text-white/20 text-xs tracking-wider">{item.title}</span>
                        </div>
                      )}
                      {/* Subtle Balinese corner flourish on image */}
                      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-60 transition-opacity duration-300">
                        <BalineseOrnament variant="corner" size={24} color="#FFFFFF" opacity={1} />
                      </div>
                    </div>
                  </div>

                  {/* Text Area */}
                  <div className={`w-full md:w-1/2 pl-10 md:pl-0 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                    <div className={`flex flex-col ${isEven ? 'md:items-end' : 'md:items-start'}`}>
                      <div className="inline-flex items-center gap-1.5 bg-primary/10 text-primary border border-primary/20 text-xs tracking-wider px-3.5 py-1 rounded-full font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                        <span>{item.date}</span>
                      </div>
                      <div className="text-xs uppercase tracking-widest text-wood font-medium mt-2.5">
                        {item.day}
                      </div>
                      <h3 className="font-heading text-xl md:text-2xl text-charcoal font-semibold mt-1">
                        {item.title}
                      </h3>
                      <p className="text-charcoal-light text-sm md:text-base mt-2 leading-relaxed max-w-md">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
