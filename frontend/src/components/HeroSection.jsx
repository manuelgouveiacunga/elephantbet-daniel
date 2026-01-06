import React from 'react';
import { Button } from './ui/button';
import { CheckCircle2 } from 'lucide-react';

export const HeroSection = ({ hero }) => {
  return (
    <section id="hero" className="relative pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-white via-gray-50 to-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F72585]/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#24366E]/5 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#24366E] mb-6 leading-tight">
              {hero.title}
            </h1>
            <p className="text-xl sm:text-2xl text-gray-700 mb-4 font-medium">
              {hero.subtitle}
            </p>
            <p className="text-base sm:text-lg text-gray-600 mb-8">
              {hero.description}
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {hero.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle2 className="text-[#F72585] flex-shrink-0" size={20} />
                  <span className="text-sm sm:text-base text-gray-700 font-medium">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Button
              onClick={() => window.open(hero.ctaUrl, '_blank')}
              className="bg-[#F72585] hover:bg-[#d91f6f] text-white font-bold text-lg px-8 py-6 w-full sm:w-auto transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              {hero.ctaText}
            </Button>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              <img
                src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&h=600&fit=crop"
                alt="Apostas Elephant Bet"
                className="w-full h-auto rounded-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#24366E] text-white p-6 rounded-xl shadow-xl">
                <p className="text-sm font-medium mb-1">Odds</p>
                <p className="text-3xl font-bold">Competitivas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
