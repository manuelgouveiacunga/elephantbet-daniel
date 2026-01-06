import React from 'react';
import { Shield, TrendingUp, CreditCard, Headphones } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const iconMap = {
  'Segurança': Shield,
  'Variedade': TrendingUp,
  'Pagamentos': CreditCard,
  'Suporte': Headphones
};

export const AboutSection = ({ about }) => {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#24366E] mb-6">
            {about.title}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            {about.description}
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {about.highlights.map((highlight, index) => {
            const IconComponent = iconMap[highlight.title];
            return (
              <Card
                key={index}
                className="border-2 border-gray-100 hover:border-[#F72585] transition-all duration-300 hover:shadow-lg"
              >
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#F72585]/10 to-[#24366E]/10 rounded-xl flex items-center justify-center">
                    <IconComponent className="text-[#F72585]" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-[#24366E] mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
