
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Alex Johnson",
    sport: "Professional Basketball",
    quote: "Zenith Zap's Proton series gives me the quick energy I need before games. It's a game-changer for my pre-game routine.",
    image: "/athlete-1.jpg"
  },
  {
    id: 2,
    name: "Sarah Williams",
    sport: "Olympic Swimmer",
    quote: "I've tried many sports drinks, but Neutron's balanced formula keeps me hydrated through my longest training sessions.",
    image: "/athlete-2.jpg"
  },
  {
    id: 3,
    name: "Marcus Chen",
    sport: "Triathlete",
    quote: "The Electron recovery drinks have cut my recovery time significantly. I can train harder, more often with less fatigue.",
    image: "/athlete-3.jpg"
  }
];

const AthleteTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">What Athletes Say</h2>
        
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 bg-gray-200">
                  <img 
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-8 flex flex-col justify-center">
                  <blockquote className="italic text-xl mb-6">"{testimonials[currentIndex].quote}"</blockquote>
                  <div>
                    <h3 className="text-lg font-bold">{testimonials[currentIndex].name}</h3>
                    <p className="text-zenith-blue">{testimonials[currentIndex].sport}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          <button
            onClick={prevTestimonial}
            className="absolute top-1/2 -left-4 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-100"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute top-1/2 -right-4 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-100"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-zenith-blue' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AthleteTestimonials;
