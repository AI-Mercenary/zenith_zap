
import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProductFilters from '@/components/shop/ProductFilters';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Heart, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

const products = [
  {
    id: 1,
    name: "Proton Citrus Surge",
    description: "Pre-workout energy boost with electrolytes",
    price: 4.99,
    image: "/proton-citrus.png",
    category: "proton",
    flavor: "citrus",
    useCase: "pre-workout",
  },
  {
    id: 2,
    name: "Proton Berry Blast",
    description: "Pre-workout energy boost with B vitamins",
    price: 4.99,
    image: "/proton-berry.png",
    category: "proton",
    flavor: "berry",
    useCase: "pre-workout",
  },
  {
    id: 3,
    name: "Neutron Steady Flow",
    description: "Sustained energy with complex carbs",
    price: 4.49,
    image: "/neutron-steady.png",
    category: "neutron",
    flavor: "watermelon",
    useCase: "during-workout",
  },
  {
    id: 4,
    name: "Neutron Endurance",
    description: "Mid-workout hydration with minerals",
    price: 4.49,
    image: "/neutron-endurance.png",
    category: "neutron",
    flavor: "grape",
    useCase: "during-workout",
  },
  {
    id: 5,
    name: "Electron Recover",
    description: "Post-workout recovery with protein",
    price: 5.49,
    image: "/electron-recover.png",
    category: "electron",
    flavor: "tropical",
    useCase: "recovery",
  },
  {
    id: 6,
    name: "Electron Rebuild",
    description: "Post-workout recovery with amino acids",
    price: 5.49,
    image: "/electron-rebuild.png",
    category: "electron",
    flavor: "berry",
    useCase: "recovery",
  },
];

const Shop = () => {
  const [favorites, setFavorites] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    priceRange: [0, 10],
    categories: [],
    flavors: [],
    useCases: [],
  });

  const toggleFavorite = (id: number) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(favId => favId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  const handleFilterChange = (newFilters: any) => {
    setFilters(newFilters);
  };

  const filteredProducts = products.filter(product => {
    // Search term filter
    if (searchTerm && !product.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }

    // Price range filter
    if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) {
      return false;
    }

    // Categories filter
    if (filters.categories.length > 0 && !filters.categories.includes(product.category)) {
      return false;
    }

    // Flavors filter
    if (filters.flavors.length > 0 && !filters.flavors.includes(product.flavor)) {
      return false;
    }

    // Use cases filter
    if (filters.useCases.length > 0 && !filters.useCases.includes(product.useCase)) {
      return false;
    }

    return true;
  });

  return (
    <div>
      <Navbar />
      <div className="min-h-screen py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h1 className="text-3xl font-bold mb-2">Shop Zenith Zap</h1>
            <p className="text-gray-600">
              Browse our full range of performance hydration products.
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-1/4">
              <div className="sticky top-24">
                <ProductFilters onFilterChange={handleFilterChange} />
              </div>
            </div>

            <div className="w-full lg:w-3/4">
              <div className="mb-6 bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center">
                  <div className="relative flex-grow">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input 
                      className="pl-10" 
                      placeholder="Search products..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Card className="overflow-hidden card-hover">
                      <div className="relative h-48 bg-gray-100 flex items-center justify-center p-6">
                        <motion.button
                          className="absolute top-2 right-2 z-10 p-2 rounded-full bg-white/80 hover:bg-white"
                          onClick={() => toggleFavorite(product.id)}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Heart 
                            className={`h-5 w-5 ${favorites.includes(product.id) ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} 
                          />
                        </motion.button>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <img 
                            src={product.image} 
                            alt={product.name} 
                            className="h-full object-contain"
                          />
                        </motion.div>
                      </div>
                      <CardContent className="pt-4">
                        <h3 className="font-bold text-lg mb-1">{product.name}</h3>
                        <p className="text-gray-600 text-sm mb-2">{product.description}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
                          <span className={cn(
                            "px-2 py-1 rounded-full text-xs text-white",
                            product.category === 'proton' ? 'bg-zenith-blue' : 
                            product.category === 'neutron' ? 'bg-zenith-orange' : 
                            'bg-zenith-yellow'
                          )}>
                            {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                          </span>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button 
                          className={cn(
                            "w-full",
                            product.category === 'proton' ? 'bg-zenith-blue hover:bg-zenith-blue/90' : 
                            product.category === 'neutron' ? 'bg-zenith-orange hover:bg-zenith-orange/90' : 
                            'bg-zenith-yellow hover:bg-zenith-yellow/90'
                          )}
                        >
                          Add to Cart
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}

                {filteredProducts.length === 0 && (
                  <div className="col-span-full text-center py-16">
                    <h3 className="text-xl font-bold mb-2">No products found</h3>
                    <p className="text-gray-600">Try adjusting your filters or search term.</p>
                    <Button 
                      className="mt-4" 
                      variant="outline" 
                      onClick={() => {
                        setFilters({
                          priceRange: [0, 10],
                          categories: [],
                          flavors: [],
                          useCases: [],
                        });
                        setSearchTerm('');
                      }}
                    >
                      Reset Filters
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Shop;
