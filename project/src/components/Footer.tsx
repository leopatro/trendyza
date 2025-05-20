import React from 'react';
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-primary mb-4">Trendyza</h2>
            <p className="text-light mb-4">
              Conectando você às melhores oportunidades do mercado digital.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-light hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-light hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-light hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-light hover:text-primary transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#featured" className="text-light hover:text-primary transition-colors">
                  Produtos
                </a>
              </li>
              <li>
                <a href="#about" className="text-light hover:text-primary transition-colors">
                  Quem Somos
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="flex items-center space-x-2 text-light mb-2">
              <Mail size={18} />
              <a href="mailto:contato@trendyza.com" className="hover:text-primary transition-colors">
                contato@trendyza.com
              </a>
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-light hover:text-primary transition-colors">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="text-light hover:text-primary transition-colors">
                  Termos de Uso
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-light">
          <p>© {new Date().getFullYear()} Trendyza. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;