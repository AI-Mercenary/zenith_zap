
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProductDetails from '@/components/products/ProductDetails';

const productData = [
  {
    id: "proton-citrus",
    name: "Proton Citrus Surge",
    description: "Pre-workout energy boost with electrolytes and B vitamins",
    price: 4.99,
    image: "/proton-citrus.png",
    category: "proton",
    flavor: "Citrus",
    useCase: "Pre-Workout",
    nutrients: [
      { name: "Calories", amount: "10 kcal" },
      { name: "Carbohydrates", amount: "2g" },
      { name: "Sodium", amount: "100mg" },
      { name: "Potassium", amount: "80mg" },
      { name: "Vitamin B6", amount: "2mg" },
      { name: "Vitamin B12", amount: "6µg" },
      { name: "Caffeine", amount: "80mg" }
    ]
  },
  {
    id: "neutron-endurance",
    name: "Neutron Endurance",
    description: "Mid-workout hydration with minerals and electrolytes",
    price: 4.49,
    image: "/neutron-endurance.png",
    category: "neutron",
    flavor: "Berry",
    useCase: "During Workout",
    nutrients: [
      { name: "Calories", amount: "25 kcal" },
      { name: "Carbohydrates", amount: "6g" },
      { name: "Sodium", amount: "150mg" },
      { name: "Potassium", amount: "100mg" },
      { name: "Magnesium", amount: "40mg" },
      { name: "Calcium", amount: "40mg" },
      { name: "BCAAs", amount: "2g" }
    ]
  },
  {
    id: "electron-recover",
    name: "Electron Recover",
    description: "Post-workout recovery with protein and antioxidants",
    price: 5.49,
    image: "/electron-recover.png",
    category: "electron",
    flavor: "Chocolate",
    useCase: "Recovery",
    nutrients: [
      { name: "Calories", amount: "120 kcal" },
      { name: "Protein", amount: "20g" },
      { name: "Carbohydrates", amount: "10g" },
      { name: "Sodium", amount: "120mg" },
      { name: "Potassium", amount: "250mg" },
      { name: "Glutamine", amount: "5g" },
      { name: "Antioxidants", amount: "200mg" }
    ]
  }
];

const Products = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Products</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our scientifically formulated sports drinks designed for athletes at every level.
              Flip the cards to see detailed nutrition information.
            </p>
          </motion.div>
          
          <div className="flex flex-col items-center">
            <div className="w-full max-w-6xl">
              <div className="mb-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="mb-6"
                >
                  <h2 className="text-2xl font-bold text-zenith-blue mb-2">Proton Series</h2>
                  <p className="text-gray-600">
                    Pre-workout formulas that enhance energy, focus and performance for your training sessions.
                  </p>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <ProductDetails {...productData[0]} />
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h3 className="text-xl font-bold mb-3">When to use Proton?</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>15-30 minutes before intense workouts</li>
                      <li>When you need a mental focus boost</li>
                      <li>Before competitions or athletic events</li>
                      <li>Any time you need quick energy</li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-br from-zenith-blue/20 to-zenith-blue/40 p-6 rounded-xl shadow-md">
                    <h3 className="text-xl font-bold mb-3">Proton Benefits</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="bg-zenith-blue text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-1 flex-shrink-0">1</span>
                        <span>Enhanced mental focus and alertness</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-zenith-blue text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-1 flex-shrink-0">2</span>
                        <span>Quick energy boost from B vitamins</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-zenith-blue text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-1 flex-shrink-0">3</span>
                        <span>Improved reaction time and performance</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mb-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="mb-6"
                >
                  <h2 className="text-2xl font-bold text-zenith-orange mb-2">Neutron Series</h2>
                  <p className="text-gray-600">
                    Sustained energy drinks designed to fuel longer workouts and maintain peak performance.
                  </p>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-gradient-to-br from-zenith-orange/20 to-zenith-orange/40 p-6 rounded-xl shadow-md">
                    <h3 className="text-xl font-bold mb-3">Neutron Benefits</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="bg-zenith-orange text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-1 flex-shrink-0">1</span>
                        <span>Sustained energy release for endurance</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-zenith-orange text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-1 flex-shrink-0">2</span>
                        <span>Balanced electrolyte replenishment</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-zenith-orange text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-1 flex-shrink-0">3</span>
                        <span>Prevents performance drops mid-workout</span>
                      </li>
                    </ul>
                  </div>
                  <ProductDetails {...productData[1]} />
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h3 className="text-xl font-bold mb-3">When to use Neutron?</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>During extended training sessions</li>
                      <li>For workouts lasting over 45 minutes</li>
                      <li>Endurance events like marathons</li>
                      <li>Hot weather training when hydration is critical</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="mb-6"
                >
                  <h2 className="text-2xl font-bold text-zenith-yellow mb-2">Electron Series</h2>
                  <p className="text-gray-600">
                    Recovery formulas that accelerate muscle repair and reduce soreness after intense workouts.
                  </p>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h3 className="text-xl font-bold mb-3">When to use Electron?</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Within 30 minutes after workout completion</li>
                      <li>After high-intensity or long duration exercise</li>
                      <li>Before bed on training days</li>
                      <li>On recovery days between intense sessions</li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-br from-zenith-yellow/20 to-zenith-yellow/40 p-6 rounded-xl shadow-md">
                    <h3 className="text-xl font-bold mb-3">Electron Benefits</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="bg-zenith-yellow text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-1 flex-shrink-0">1</span>
                        <span>Accelerated muscle recovery and repair</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-zenith-yellow text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-1 flex-shrink-0">2</span>
                        <span>Reduced post-workout soreness</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-zenith-yellow text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-1 flex-shrink-0">3</span>
                        <span>Protein synthesis for muscle growth</span>
                      </li>
                    </ul>
                  </div>
                  <ProductDetails {...productData[2]} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Products;
