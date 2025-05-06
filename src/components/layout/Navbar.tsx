
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Products', path: '/products' },
    { name: 'Nutro AI', path: '/nutro' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full energy-gradient flex items-center justify-center">
            <span className="text-white font-bold text-xl">Z</span>
          </div>
          <span className="font-montserrat font-bold text-2xl">
            ZENITH<span className="text-zenith-orange">ZAP</span>
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="font-medium hover:text-zenith-blue transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
        
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/login">
            <Button variant="ghost" className="font-medium">Log In</Button>
          </Link>
          <Link to="/signup">
            <Button className="bg-zenith-blue hover:bg-zenith-blue/90">Sign Up</Button>
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div className={cn(
        "md:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-transform duration-300 transform",
        isOpen ? "translate-y-0" : "-translate-y-full"
      )}>
        <div className="container mx-auto px-4 py-3 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="py-2 hover:text-zenith-blue transition-colors"
              onClick={toggleMenu}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex flex-col space-y-2 pt-2 border-t">
            <Link to="/login" onClick={toggleMenu}>
              <Button variant="ghost" className="w-full">Log In</Button>
            </Link>
            <Link to="/signup" onClick={toggleMenu}>
              <Button className="w-full bg-zenith-blue hover:bg-zenith-blue/90">Sign Up</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
