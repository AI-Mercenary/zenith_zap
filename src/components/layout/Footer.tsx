
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-zenith-navy text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full energy-gradient flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <span className="font-montserrat font-bold text-2xl">
                ZENITH<span className="text-zenith-orange">ZAP</span>
              </span>
            </div>
            <p className="text-gray-300 mb-4">
              Performance hydration for elite athletes. Scientifically formulated to maximize your potential.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-zenith-orange transition-colors">Home</Link></li>
              <li><Link to="/shop" className="text-gray-300 hover:text-zenith-orange transition-colors">Shop</Link></li>
              <li><Link to="/products" className="text-gray-300 hover:text-zenith-orange transition-colors">Products</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-zenith-orange transition-colors">About Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Products</h3>
            <ul className="space-y-2">
              <li><Link to="/products/proton" className="text-gray-300 hover:text-zenith-orange transition-colors">Proton Series</Link></li>
              <li><Link to="/products/neutron" className="text-gray-300 hover:text-zenith-orange transition-colors">Neutron Series</Link></li>
              <li><Link to="/products/electron" className="text-gray-300 hover:text-zenith-orange transition-colors">Electron Series</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">hello@zenithzap.com</li>
              <li className="text-gray-300">1-800-ZAP-FUEL</li>
              <li className="text-gray-300">123 Energy Lane, Vitality City, PC 10101</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-4 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2025 Zenith Zap. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link to="/terms" className="text-gray-400 text-sm hover:text-white transition-colors">Terms</Link>
            <Link to="/privacy" className="text-gray-400 text-sm hover:text-white transition-colors">Privacy</Link>
            <Link to="/cookies" className="text-gray-400 text-sm hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
