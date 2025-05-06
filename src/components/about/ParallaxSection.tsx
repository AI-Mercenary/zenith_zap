
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface SectionProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  reverse?: boolean;
}

const ParallaxSection = ({ id, title, subtitle, description, imageSrc, reverse = false }: SectionProps) => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section 
      id={id} 
      ref={sectionRef}
      className="py-16 md:py-24 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className={`flex flex-col gap-8 ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center`}>
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: reverse ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-lg text-zenith-blue uppercase font-medium tracking-wide mb-2">{subtitle}</h3>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
            <div className="w-16 h-1 bg-zenith-orange mb-6"></div>
            <p className="text-gray-600 text-lg leading-relaxed">{description}</p>
          </motion.div>
          
          <div className="w-full md:w-1/2 relative">
            <motion.div 
              className="rounded-lg overflow-hidden shadow-xl"
              style={{ y, opacity }}
            >
              <img 
                src={imageSrc} 
                alt={title} 
                className="w-full h-auto object-cover rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParallaxSection;
