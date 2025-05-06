
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SignupForm from '@/components/auth/SignupForm';

const Signup = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SignupForm />
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
