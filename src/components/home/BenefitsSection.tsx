
import { motion } from 'framer-motion';
import { Battery, Heart, Activity } from 'lucide-react';

const benefits = [
  {
    title: "Rapid Hydration",
    description: "Our electrolyte formula delivers hydration 2X faster than water alone, keeping you at peak performance.",
    icon: <Activity className="h-10 w-10 text-zenith-blue" />,
    delay: 0.1
  },
  {
    title: "Enhanced Endurance",
    description: "Scientifically balanced carbohydrates provide sustained energy throughout your entire workout or competition.",
    icon: <Battery className="h-10 w-10 text-zenith-orange" />,
    delay: 0.3
  },
  {
    title: "Faster Recovery",
    description: "Amino acids and antioxidants speed muscle recovery and reduce soreness after intense training sessions.",
    icon: <Heart className="h-10 w-10 text-zenith-yellow" />,
    delay: 0.5
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Athletes Choose Zenith Zap</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our science-backed formulas are designed specifically for athletes who demand the best from their bodies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: benefit.delay }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 rounded-full bg-gray-50">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-16 p-8 rounded-xl bg-gradient-to-r from-zenith-navy to-zenith-blue text-white text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Trusted by Professional Athletes</h3>
          <p className="text-lg max-w-2xl mx-auto">
            Join thousands of elite athletes who trust Zenith Zap for their hydration and performance needs.
          </p>
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            {['Team Alpha', 'Olympic Federation', 'Pro League', 'Endurance Champions'].map((team, index) => (
              <div key={index} className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-white/20 mr-3"></div>
                <span className="font-semibold">{team}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;
