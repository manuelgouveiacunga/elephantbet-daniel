import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

export const FAQSection = ({ faq }) => {
  return (
    <section id="faq" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#24366E] mb-4">
              {faq.title}
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              {faq.subtitle}
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faq.items.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="bg-white border-2 border-gray-100 rounded-lg px-6 data-[state=open]:border-[#F72585] transition-all duration-300"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg sm:text-xl font-bold text-[#24366E]">
                    {item.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6">
                  <div className="prose prose-sm sm:prose max-w-none">
                    {item.answer.split('\n').map((paragraph, idx) => {
                      if (paragraph.trim().startsWith('**') && paragraph.trim().endsWith('**')) {
                        return (
                          <h4 key={idx} className="font-bold text-[#24366E] mt-4 mb-2">
                            {paragraph.replace(/\*\*/g, '')}
                          </h4>
                        );
                      }
                      if (paragraph.trim().startsWith('-')) {
                        return (
                          <li key={idx} className="ml-4 mb-1">
                            {paragraph.replace(/^-\s*/, '')}
                          </li>
                        );
                      }
                      if (paragraph.trim().match(/^\d+\./)) {
                        return (
                          <p key={idx} className="ml-4 mb-2">
                            {paragraph}
                          </p>
                        );
                      }
                      if (paragraph.trim()) {
                        return (
                          <p key={idx} className="mb-2">
                            {paragraph}
                          </p>
                        );
                      }
                      return null;
                    })}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
