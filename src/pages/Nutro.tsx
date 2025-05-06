
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import QrCodeDisplay from '@/components/nutro/QrCodeDisplay';

const Nutro = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h1 className="text-3xl md:text-4xl font-bold">Nutro AI Assistant</h1>
            <p className="text-xl text-gray-600 mt-2">Your personal hydration and performance coach</p>
          </motion.div>
          
          <QrCodeDisplay />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="max-w-3xl mx-auto mt-16 p-8 rounded-xl bg-gradient-to-r from-zenith-blue to-zenith-navy text-white text-center"
          >
            <h3 className="text-2xl font-bold mb-4">Join the Waiting List</h3>
            <p className="text-lg mb-6">
              Be the first to experience our cutting-edge AI hydration assistant when it launches.
            </p>
            <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-2 rounded-md text-black"
              />
              <button className="bg-zenith-orange hover:bg-zenith-orange/90 text-white px-6 py-2 rounded-md font-medium transition-colors">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Nutro;
