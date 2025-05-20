import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center">
          <h1 className="text-2xl font-bold text-primary">
            Trendyza
          </h1>
        </a>

        {/* Mobile menu button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="font-medium hover:text-primary transition-colors">
            Início
          </a>
          <a href="#about" className="font-medium hover:text-primary transition-colors">
            Quem Somos
          </a>
          <a href="#contact" className="font-medium hover:text-primary transition-colors">
            Contato
          </a>
          <a href="#featured" className="btn btn-primary">
            Ver Ofertas
          </a>
        </nav>

        {/* Mobile navigation */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-md py-4 md:hidden">
            <div className="flex flex-col space-y-4 px-4">
              <a href="#" className="font-medium hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
                Início
              </a>
              <a href="#about" className="font-medium hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
                Quem Somos
              </a>
              <a href="#contact" className="font-medium hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
                Contato
              </a>
              <a href="#featured" className="btn btn-primary w-full text-center" onClick={() => setIsOpen(false)}>
                Ver Ofertas
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;