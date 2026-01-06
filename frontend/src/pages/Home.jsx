import React from 'react';
import { Header } from '../components/Header';
import { HeroSection } from '../components/HeroSection';
import { AboutSection } from '../components/AboutSection';
import { VideoSection } from '../components/VideoSection';
import { StepsSection } from '../components/StepsSection';
import { FAQSection } from '../components/FAQSection';
import { CTASection } from '../components/CTASection';
import { Footer } from '../components/Footer';
import { FloatingWhatsApp } from '../components/FloatingWhatsApp';
import { siteContent } from '../mockData';

export const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header
        logo={{
          url: siteContent.header.logoUrl,
          alt: siteContent.header.logoAlt
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
