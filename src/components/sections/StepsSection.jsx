import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const StepsSection = ({ steps }) => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#24366E] mb-4">
            {steps.title}
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-4">
          {steps.stepsList.map((step, index) => (
            <div key={step.step} className="relative">
              <Card className="h-full border-2 border-gray-100 hover:border-[#F72585] transition-all duration-300 hover:shadow-lg">
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#F72585] to-[#F72585]/80 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-[#24366E] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </CardContent>
              </Card>

              {/* Connector Arrow (hidden on mobile and last item) */}
              {index < steps.stepsList.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-[#F72585] text-2xl z-10">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
