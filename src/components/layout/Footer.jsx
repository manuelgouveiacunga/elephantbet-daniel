import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';

export const Footer = ({ footer }) => {
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer id="contato" className="bg-[#24366E] text-white py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About Column */}
          <div>
            <h3 className="text-xl font-bold mb-4">Elephant Bet Angola</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              A melhor plataforma de apostas desportivas em Angola. Apostas seguras, odds competitivas e pagamentos rápidos.
            </p>
          </div>

          {/* Links Column */}
          <div>
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <nav className="flex flex-col space-y-2">
              {footer.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-white/80 hover:text-[#F72585] text-sm transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <div className="space-y-3">
              <p className="text-white/80 text-sm">
                WhatsApp: +244 930 696 398
              </p>
              <p className="text-white/80 text-sm">
                Suporte disponível 24/7
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/80 text-sm">
            {footer.copyright}
          </p>
          <p className="text-white/60 text-xs mt-2">
            Jogue com responsabilidade. Maiores de 18 anos.
          </p>
        </div>
      </div>
    </footer>
  );
};
