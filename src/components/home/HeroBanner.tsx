
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "PROTON",
      description: "Pre-workout energy boost with electrolytes and B vitamins",
      color: "from-zenith-blue to-blue-700",
      image: "/proton-bottle.png"
    },
    {
      title: "NEUTRON",
      description: "Sustained energy for endurance with complex carbs and minerals",
      color: "from-zenith-orange to-orange-700",
      image: "/neutron-bottle.png"
    },
    {
      title: "ELECTRON",
      description: "Post-workout recovery with protein and antioxidants",
      color: "from-zenith-yellow to-yellow-600",
      image: "/electron-bottle.png"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, [slides.length]);

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative min-h-screen pt-20 overflow-hidden">
      <div 
        className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent z-0"
        style={{
          backgroundImage: `url('/energy-pattern.svg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.1
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center min-h-[80vh]">
          <div className="w-full md:w-1/2 pt-10 md:pt-0">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h1 className="text-4xl md:text-6xl xl:text-7xl font-extrabold">
                <span className="text-gradient">FUEL</span> YOUR <br />
                <span className={`text-${currentSlide === 0 ? 'zenith-blue' : currentSlide === 1 ? 'zenith-orange' : 'zenith-yellow'}`}>
                  POTENTIAL
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-700 max-w-xl">
                Scientifically formulated hydration for elite performance. 
                When every second counts, choose Zenith Zap.
              </p>
              
              <div className="flex gap-4">
                <Link to="/shop">
                  <Button size="lg" className="bg-zenith-blue hover:bg-zenith-blue/90">
                    Shop Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/products">
                  <Button size="lg" variant="outline">
                    Our Products
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center items-center pt-10 md:pt-0">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.5 }}
              className="relative h-[400px] w-[300px]"
            >
              <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${slides[currentSlide].color} filter blur-3xl opacity-30`} />
              <img 
                src={slides[currentSlide].image} 
                alt={slides[currentSlide].title} 
                className="w-full h-full object-contain z-10 relative animate-float" 
              />
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-center">
                <h2 className="text-3xl font-bold mb-2">{slides[currentSlide].title}</h2>
                <p className="text-sm text-gray-600 max-w-xs">{slides[currentSlide].description}</p>
              </div>
            </motion.div>
          </div>
        </div>
        
        <div className="flex justify-center gap-3 mt-6">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`h-3 w-3 rounded-full transition-colors ${
                index === currentSlide
                  ? index === 0
                    ? 'bg-zenith-blue'
                    : index === 1
                    ? 'bg-zenith-orange'
                    : 'bg-zenith-yellow'
                  : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
