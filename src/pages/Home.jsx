import React from "react";
import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { VideoSection } from "@/components/sections/VideoSection";
import { StepsSection } from "@/components/sections/StepsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { siteContent } from "@/mockData";

export const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header
        logo={{
          url: siteContent.header.logoUrl,
          alt: siteContent.header.logoAlt,
        }}
        navigation={siteContent.header.navigation}
        ctaUrl={siteContent.hero.ctaUrl}
        ctaText={siteContent.hero.ctaText}
      />

      <main>
        <HeroSection hero={siteContent.hero} />
        <AboutSection about={siteContent.about} />
        <VideoSection videos={siteContent.videos} />
        <StepsSection steps={siteContent.steps} />
        <FAQSection faq={siteContent.faq} />
        <CTASection
          ctaUrl={siteContent.hero.ctaUrl}
          ctaText={siteContent.hero.ctaText}
        />
      </main>

      <Footer footer={siteContent.footer} />

      <FloatingWhatsApp
        phoneNumber={siteContent.contact.whatsapp}
        message={siteContent.contact.whatsappMessage}
      />
    </div>
  );
};

export default Home;
