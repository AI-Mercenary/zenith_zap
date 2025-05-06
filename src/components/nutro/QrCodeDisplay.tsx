
import { motion } from 'framer-motion';

const QrCodeDisplay = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-[60vh] py-16">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative">
          <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-zenith-blue to-zenith-orange opacity-75 blur-xl animate-pulse-glow"></div>
          <div className="relative bg-white p-4 rounded-xl shadow-lg">
            <div className="w-48 h-48 md:w-64 md:h-64 bg-white flex items-center justify-center">
              <img src="/qr-code.svg" alt="Nutro AI QR Code" className="w-full h-full" />
            </div>
          </div>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-8 text-center"
      >
        <h2 className="text-3xl font-bold mb-3 text-zenith-navy">Nutro AI</h2>
        <p className="text-xl font-medium mb-2 text-gradient">Coming Soon</p>
        <p className="text-gray-600 max-w-lg">
          Scan this QR code with your smartphone to be notified when our AI hydration 
          assistant launches. Get personalized recommendations and track your performance in real-time.
        </p>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl"
      >
        <div className="bg-white p-5 rounded-lg shadow-md">
          <h3 className="text-lg font-bold mb-2 text-zenith-blue">Personalized Plans</h3>
          <p className="text-gray-600">AI-powered hydration schedules based on your training intensity and goals</p>
        </div>
        
        <div className="bg-white p-5 rounded-lg shadow-md">
          <h3 className="text-lg font-bold mb-2 text-zenith-orange">Real-time Tracking</h3>
          <p className="text-gray-600">Monitor your hydration status and performance metrics throughout the day</p>
        </div>
        
        <div className="bg-white p-5 rounded-lg shadow-md">
          <h3 className="text-lg font-bold mb-2 text-zenith-yellow">Smart Recommendations</h3>
          <p className="text-gray-600">Receive product suggestions based on your unique athletic profile</p>
        </div>
      </motion.div>
    </div>
  );
};

export default QrCodeDisplay;
