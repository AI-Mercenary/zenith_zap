
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart } from 'lucide-react';

const products = {
  proton: [
    {
      id: 1,
      name: "Proton Citrus Surge",
      description: "Pre-workout energy boost with electrolytes",
      price: 4.99,
      image: "/proton-citrus.png",
      color: "bg-blue-500"
    },
    {
      id: 2,
      name: "Proton Berry Blast",
      description: "Pre-workout energy boost with B vitamins",
      price: 4.99,
      image: "/proton-berry.png",
      color: "bg-blue-600"
    },
    {
      id: 3,
      name: "Proton Tropical Rush",
      description: "Pre-workout energy boost with caffeine",
      price: 4.99,
      image: "/proton-tropical.png",
      color: "bg-blue-700"
    }
  ],
  neutron: [
    {
      id: 4,
      name: "Neutron Steady Flow",
      description: "Sustained energy with complex carbs",
      price: 4.49,
      image: "/neutron-steady.png",
      color: "bg-orange-500"
    },
    {
      id: 5,
      name: "Neutron Endurance",
      description: "Mid-workout hydration with minerals",
      price: 4.49,
      image: "/neutron-endurance.png",
      color: "bg-orange-600"
    },
    {
      id: 6,
      name: "Neutron Power Mix",
      description: "Sustained energy for long sessions",
      price: 4.49,
      image: "/neutron-power.png",
      color: "bg-orange-700"
    }
  ],
  electron: [
    {
      id: 7,
      name: "Electron Recover",
      description: "Post-workout recovery with protein",
      price: 5.49,
      image: "/electron-recover.png",
      color: "bg-yellow-500"
    },
    {
      id: 8,
      name: "Electron Rebuild",
      description: "Post-workout recovery with amino acids",
      price: 5.49,
      image: "/electron-rebuild.png",
      color: "bg-yellow-600"
    },
    {
      id: 9,
      name: "Electron Recharge",
      description: "Post-workout recovery with antioxidants",
      price: 5.49,
      image: "/electron-recharge.png",
      color: "bg-yellow-700"
    }
  ]
};

const FeaturedProducts = () => {
  const [activeTab, setActiveTab] = useState("proton");
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(favId => favId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Scientifically formulated to enhance performance at every stage of your workout.
            Choose the right fuel for your athletic needs.
          </p>
        </div>

        <Tabs defaultValue="proton" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-3 w-full max-w-md">
              <TabsTrigger 
                value="proton" 
                className="data-[state=active]:bg-zenith-blue data-[state=active]:text-white"
              >
                Proton
              </TabsTrigger>
              <TabsTrigger 
                value="neutron" 
                className="data-[state=active]:bg-zenith-orange data-[state=active]:text-white"
              >
                Neutron
              </TabsTrigger>
              <TabsTrigger 
                value="electron" 
                className="data-[state=active]:bg-zenith-yellow data-[state=active]:text-white"
              >
                Electron
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="proton">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.proton.map((product) => (
                <ProductCard 
                  key={product.id}
                  product={product}
                  isFavorite={favorites.includes(product.id)}
                  onFavoriteToggle={toggleFavorite}
                  activeTab={activeTab}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="neutron">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.neutron.map((product) => (
                <ProductCard 
                  key={product.id}
                  product={product}
                  isFavorite={favorites.includes(product.id)}
                  onFavoriteToggle={toggleFavorite}
                  activeTab={activeTab}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="electron">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.electron.map((product) => (
                <ProductCard 
                  key={product.id}
                  product={product}
                  isFavorite={favorites.includes(product.id)}
                  onFavoriteToggle={toggleFavorite}
                  activeTab={activeTab}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="text-center mt-12">
          <Link to="/shop">
            <Button size="lg" variant="outline">
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  color: string;
}

interface ProductCardProps {
  product: Product;
  isFavorite: boolean;
  onFavoriteToggle: (id: number) => void;
  activeTab: string;
}

const ProductCard = ({ product, isFavorite, onFavoriteToggle, activeTab }: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Card className="overflow-hidden card-hover">
        <div className="relative h-48 bg-gray-100 flex items-center justify-center p-6">
          <motion.button
            className="absolute top-2 right-2 z-10 p-2 rounded-full bg-white/80 hover:bg-white"
            onClick={() => onFavoriteToggle(product.id)}
            whileTap={{ scale: 0.9 }}
          >
            <Heart 
              className={`h-5 w-5 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} 
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
        <CardHeader>
          <CardTitle>{product.name}</CardTitle>
          <CardDescription>{product.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
            <span className={`px-2 py-1 rounded-full text-xs text-white ${
              activeTab === 'proton' ? 'bg-zenith-blue' : 
              activeTab === 'neutron' ? 'bg-zenith-orange' : 
              'bg-zenith-yellow'
            }`}>
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Series
            </span>
          </div>
        </CardContent>
        <CardFooter>
          <Button 
            className={`w-full ${
              activeTab === 'proton' ? 'bg-zenith-blue hover:bg-zenith-blue/90' : 
              activeTab === 'neutron' ? 'bg-zenith-orange hover:bg-zenith-orange/90' : 
              'bg-zenith-yellow hover:bg-zenith-yellow/90'
            }`}
          >
            Add to Cart
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default FeaturedProducts;
