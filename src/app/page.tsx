import HeroSection from "@/components/sections/HeroSection";
import PartnersSection from "@/components/sections/PartnersSection";
import StrategicSection from "@/components/sections/StrategicSection";
import ServicesSection from "@/components/sections/ServicesSection";
import TechStackSection from "@/components/sections/TechStackSection";
import MilestonesSection from "@/components/sections/MilestonesSection";
import ClientLogosSection from "@/components/sections/ClientLogosSection";
import ProductsSection from "@/components/sections/ProductsSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import DifferenceSection from "@/components/sections/DifferenceSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import Script from "next/script";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What industries does VirtueByte serve in the USA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "VirtueByte provides IT consulting, Salesforce implementation, AI solutions, cloud services, and offshore development support to businesses across healthcare technology, manufacturing, fintech, edtech, SMBs, and enterprise organizations throughout the United States. Our solutions are tailored to each industry's operational and compliance requirements.",
      },
    },
    {
      "@type": "Question",
      name: "How can Salesforce consulting improve my business operations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our Salesforce consulting services help businesses streamline sales processes, automate workflows, integrate third-party systems, and improve reporting visibility. We focus on measurable ROI by enhancing pipeline forecasting, customer retention, and operational efficiency.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer AI and machine learning solutions for growing businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. VirtueByte delivers AI and machine learning consulting services including predictive analytics, intelligent automation, and data-driven dashboards. Our AI solutions are designed to improve decision-making, reduce manual processes, and increase operational efficiency.",
      },
    },
    {
      "@type": "Question",
      name: "Can VirtueByte help with cloud migration and infrastructure management?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We provide cloud consulting and migration services across AWS, Azure, and hybrid environments. Our team ensures secure migration, cost optimization, scalable infrastructure, and ongoing performance monitoring to support long-term business growth.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide dedicated offshore development teams?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we offer dedicated offshore development teams that work as an extension of your in-house team. Our offshore model helps businesses reduce costs, scale faster, and access specialized technical expertise while maintaining structured communication and transparency.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get started with VirtueByte?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Getting started begins with a discovery consultation where we assess your current technology environment and business goals. Based on this evaluation, we provide a customized roadmap covering strategy, implementation, and measurable KPIs.",
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HeroSection />
      <PartnersSection />
      <StrategicSection />
      <ServicesSection />
      <TechStackSection />
      <ProductsSection />
      <MilestonesSection />
      <ClientLogosSection />
      <IndustriesSection />
      <TestimonialsSection />
      <DifferenceSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
