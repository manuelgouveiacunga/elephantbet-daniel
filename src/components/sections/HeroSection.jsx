import React, { useEffect, useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export const HeroSection = ({ hero }) => {
  const [api, setApi] = useState(null);

  useEffect(() => {
    if (!api) return;

    const intervalId = setInterval(() => {
      api.scrollNext();
    }, 5000);

    return () => clearInterval(intervalId);
  }, [api]);

  return (
    <section
      id="hero"
      className="relative pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-white via-gray-50 to-white overflow-hidden"
    >
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
            duration: 50, 
          }}
          className="w-full h-full"
        >
          <CarouselContent className="h-full ml-0" viewportClassName="h-full">
            {hero.carouselImages.map((image, index) => (
              <CarouselItem key={index} className="h-full pl-0">
                <div className="w-full h-full relative">
                  <img
                    src={image}
                    alt={`Background slide ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-white/40"></div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F72585]/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#24366E]/5 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center justify-center gap-12">
          {/* Content */}
          <div className="text-center max-w-4xl">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-[#24366E] mb-6 leading-tight drop-shadow-sm">
              {hero.title}
            </h1>
            <p className="text-xl sm:text-2xl text-gray-800 mb-4 font-bold bg-white/40 backdrop-blur-[2px] inline-block px-4 py-1 rounded-full">
              {hero.subtitle}
            </p>
            <p className="text-base sm:text-lg text-gray-700 mb-8 font-medium">
              {hero.description}
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 mb-10 justify-items-center">
              {hero.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-lg border border-[#24366E]/10 shadow-sm"
                >
                  <CheckCircle2
                    className="text-[#F72585] flex-shrink-0"
                    size={20}
                  />
                  <span className="text-sm sm:text-base text-gray-800 font-bold">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Button
              onClick={() => window.open(hero.ctaUrl, "_blank")}
              className="bg-[#F72585] hover:bg-[#d91f6f] text-white font-bold text-xl px-12 py-8 w-full sm:w-auto transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              {hero.ctaText}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
