
import React, { useState } from 'react';
import { Menu, X, Leaf, LayoutDashboard } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Início', path: '/' },
    { name: 'Avicultura', path: '/avicultura' },
    { name: 'Agricultura', path: '/agricultura' },
    { name: 'Suinocultura', path: '/suinocultura' },
    { name: 'Insumos', path: '/importacao' },
    { name: 'Dashboard', path: '/dashboard', icon: <LayoutDashboard className="w-4 h-4 mr-1" /> },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-brand-moss" />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-brand-dark leading-tight">Fazenda Vitória</span>
                <span className="text-xs tracking-widest text-brand-gold font-semibold uppercase">Francisco</span>
              </div>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-brand-dark hover:text-brand-gold font-medium transition-colors flex items-center"
              >
                {item.icon}
                {item.name}
              </Link>
            ))}
            <a
              href="#contato"
              className="bg-brand-moss text-white px-5 py-2 rounded-lg font-semibold hover:bg-brand-dark transition-colors"
            >
              Fale Conosco
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-dark p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block px-3 py-2 text-base font-medium text-brand-dark hover:bg-gray-50 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                <div className="flex items-center">
                  {item.icon}
                  {item.name}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
