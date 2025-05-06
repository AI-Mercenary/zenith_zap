
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';

interface Nutrient {
  name: string;
  amount: string;
}

interface ProductDetailsProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  flavor: string;
  useCase: string;
  nutrients: Nutrient[];
}

const ProductDetails = ({ 
  id, 
  name, 
  description, 
  price, 
  image, 
  category,
  flavor,
  useCase,
  nutrients 
}: ProductDetailsProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="w-full max-w-sm">
      <div className="perspective-1000">
        <motion.div
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 300 }}
          className="w-full h-[500px] preserve-3d"
        >
          {/* Front of card */}
          <div 
            className={`absolute w-full h-full backface-hidden p-6 rounded-xl shadow-lg ${
              isFlipped ? 'opacity-0 pointer-events-none' : 'opacity-100'
            } ${
              category === 'proton' ? 'bg-gradient-to-br from-zenith-blue/10 to-zenith-blue/30' :
              category === 'neutron' ? 'bg-gradient-to-br from-zenith-orange/10 to-zenith-orange/30' :
              'bg-gradient-to-br from-zenith-yellow/10 to-zenith-yellow/30'
            } border border-gray-100`}
          >
            <div className="flex justify-between items-start mb-4">
              <span className={`px-2 py-1 rounded-full text-xs text-white ${
                category === 'proton' ? 'bg-zenith-blue' : 
                category === 'neutron' ? 'bg-zenith-orange' : 
                'bg-zenith-yellow'
              }`}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </span>
              
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFavorite();
                }}
                className="p-2 rounded-full bg-white hover:bg-gray-100 shadow"
              >
                <Heart 
                  className={`h-4 w-4 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} 
                />
              </button>
            </div>
            
            <div className="flex flex-col items-center mb-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="h-48 flex items-center justify-center"
              >
                <img 
                  src={image} 
                  alt={name} 
                  className="h-full object-contain"
                />
              </motion.div>
              
              <h3 className="text-xl font-bold mt-4 text-center">{name}</h3>
              <p className="text-gray-600 text-center mt-2">{description}</p>
            </div>
            
            <div className="flex justify-between items-center mt-6">
              <span className="text-lg font-bold">${price.toFixed(2)}</span>
              <Button 
                size="sm" 
                className={`${
                  category === 'proton' ? 'bg-zenith-blue hover:bg-zenith-blue/90' : 
                  category === 'neutron' ? 'bg-zenith-orange hover:bg-zenith-orange/90' : 
                  'bg-zenith-yellow hover:bg-zenith-yellow/90'
                }`}
              >
                Add to Cart
              </Button>
            </div>
            
            <div className="mt-6 text-center">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setIsFlipped(true)}
                className="text-gray-600 hover:text-gray-900"
              >
                See Nutrition Facts
              </Button>
            </div>
          </div>
          
          {/* Back of card */}
          <div 
            className={`absolute w-full h-full backface-hidden rotateY-180 p-6 rounded-xl shadow-lg ${
              isFlipped ? 'opacity-100' : 'opacity-0 pointer-events-none'
            } ${
              category === 'proton' ? 'bg-gradient-to-br from-zenith-blue/20 to-zenith-blue/50' :
              category === 'neutron' ? 'bg-gradient-to-br from-zenith-orange/20 to-zenith-orange/50' :
              'bg-gradient-to-br from-zenith-yellow/20 to-zenith-yellow/50'
            } border border-gray-100`}
          >
            <div className="absolute top-4 right-4">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setIsFlipped(false)}
                className="text-gray-600 hover:text-gray-900"
              >
                Back
              </Button>
            </div>
            
            <h3 className="text-xl font-bold mb-1">{name}</h3>
            <div className="mb-4 flex flex-wrap gap-2">
              <span className="text-sm bg-white/50 px-2 py-1 rounded">{flavor}</span>
              <span className="text-sm bg-white/50 px-2 py-1 rounded">{useCase}</span>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm rounded p-4">
              <h4 className="font-bold mb-2 text-center border-b pb-1">Nutrition Facts</h4>
              <div className="space-y-1">
                {nutrients.map((nutrient, index) => (
                  <div key={index} className="flex justify-between text-sm">
                    <span>{nutrient.name}</span>
                    <span className="font-medium">{nutrient.amount}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="font-bold mb-2">Recommended For:</h4>
              <p className="text-sm">
                {category === 'proton' ? 'Pre-workout energy boost and focus' : 
                 category === 'neutron' ? 'Sustained energy during extended workouts' : 
                 'Post-workout recovery and muscle repair'}
              </p>
            </div>
            
            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center">
              <span className="text-lg font-bold">${price.toFixed(2)}</span>
              <Button 
                size="sm" 
                className={`${
                  category === 'proton' ? 'bg-zenith-blue hover:bg-zenith-blue/90' : 
                  category === 'neutron' ? 'bg-zenith-orange hover:bg-zenith-orange/90' : 
                  'bg-zenith-yellow hover:bg-zenith-yellow/90'
                }`}
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetails;
