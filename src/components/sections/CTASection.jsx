import React from "react";
import { Button } from "@/components/ui/button";

export const CTASection = ({ ctaUrl, ctaText }) => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#24366E] via-[#2d4482] to-[#24366E]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Pronto para Começar?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de apostadores em Angola. Registe-se agora e
            aproveite o bónus de boas-vindas!
          </p>
          <Button
            onClick={() => window.open(ctaUrl, "_blank")}
            className="bg-[#F72585] hover:bg-[#d91f6f] text-white font-bold text-lg sm:text-xl px-10 py-6 sm:py-7 transition-all duration-300 hover:shadow-2xl hover:scale-105"
          >
            {ctaText}
          </Button>
        </div>
      </div>
    </section>
  );
};
