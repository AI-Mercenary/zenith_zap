
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ParallaxSection from '@/components/about/ParallaxSection';

const About = () => {
  return (
    <div>
      <Navbar />
      
      <div className="min-h-screen pt-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Mission</h1>
            <p className="text-xl text-gray-600">
              Empowering athletes with scientifically formulated hydration solutions 
              that maximize performance, recovery, and results.
            </p>
          </motion.div>
        </div>
        
        <ParallaxSection
          id="our-story"
          title="The Zenith Zap Origin Story"
          subtitle="Where It All Began"
          description="Founded in 2020 by a team of sports scientists and professional athletes, 
                     Zenith Zap was born from a simple question: why do generic sports drinks 
                     fail to address the specific needs of athletes? Our founder, former Olympic 
                     medalist Dr. Alex Chen, collaborated with nutritionists to develop formulas 
                     that truly understand the athletic body's demands during different training phases."
          imageSrc="/lab-scientists.jpg"
        />
        
        <ParallaxSection
          id="our-science"
          title="The Science of Hydration"
          subtitle="Our Technology"
          description="At Zenith Zap, we leverage cutting-edge research in sports nutrition and hydration science. 
                     Our proprietary Tri-Phase Formula™ addresses the specific needs of athletes before, during, 
                     and after activity. Each formula contains precisely calculated ratios of electrolytes, 
                     carbohydrates, and recovery compounds that have been tested in real athletic environments."
          imageSrc="/hydration-science.jpg"
          reverse={true}
        />
        
        <ParallaxSection
          id="our-commitment"
          title="Commitment to Athletes"
          subtitle="Why We're Different"
          description="We believe that elite hydration should be available to every athlete, not just professionals. 
                     That's why we've made it our mission to provide accessible, effective products backed by science. 
                     From weekend warriors to Olympic competitors, Zenith Zap is designed to help you push your limits 
                     and achieve your personal best."
          imageSrc="/athletes-training.jpg"
        />
        
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-8">Meet the Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4"></div>
                <h3 className="text-xl font-bold">Dr. Alex Chen</h3>
                <p className="text-zenith-blue">Founder & CEO</p>
                <p className="text-gray-600 mt-2">Former Olympic medalist with a PhD in Sports Nutrition</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4"></div>
                <h3 className="text-xl font-bold">Dr. Sarah Williams</h3>
                <p className="text-zenith-blue">Chief Science Officer</p>
                <p className="text-gray-600 mt-2">Pioneering researcher in athletic hydration and performance</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4"></div>
                <h3 className="text-xl font-bold">Michael Rodriguez</h3>
                <p className="text-zenith-blue">Athletic Performance Director</p>
                <p className="text-gray-600 mt-2">Former pro athlete and certified strength and conditioning specialist</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;
