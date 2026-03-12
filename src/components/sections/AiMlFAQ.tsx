"use client";

import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const faqs = [
  {
    question: "What is the cost of AI & ML consulting?",
    answer:
      "The cost varies depending on project complexity, data maturity, infrastructure requirements, and deployment scope. We provide a structured assessment to define budget expectations before implementation begins.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "We work with modern AI frameworks including Python-based ML libraries, cloud AI services, API integrations, and scalable enterprise infrastructure platforms.",
  },
  {
    question: "How long does AI implementation take?",
    answer:
      "Timelines depend on use case complexity. Pilot implementations may take a few weeks, while enterprise-scale AI deployment can range from several weeks to a few months.",
  },
  {
    question: "What outcomes can clients expect?",
    answer:
      "Clients typically experience improved operational efficiency, better forecasting accuracy, reduced manual workload, enhanced customer experience, and measurable ROI.",
  },
];

export default function AiMlFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-[50px] px-5 md:px-5 lg:px-0 bg-[#E5A2FF0A] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(at_top_center,#F6921E_0%,#FFFFFF00_50%)] opacity-10 pointer-events-none" />
      <div className="relative max-w-[900px] mx-auto">
        <SectionHeading title="Frequently Asked Questions" />
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <AnimatedSection
              key={index}
              animation="fadeInUp"
              delay={index * 0.05}
            >
              <div className="bg-[#1a0e3a] rounded-[15px] border border-[#E5A2FF1A] overflow-hidden">
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full flex items-center justify-between p-5 text-left cursor-pointer"
                >
                  <h3 className="text-white text-[16px] md:text-[18px] font-semibold pr-4 leading-snug">
                    {faq.question}
                  </h3>
                  <div className="text-primary flex-shrink-0">
                    {openIndex === index ? (
                      <FiChevronUp className="w-5 h-5" />
                    ) : (
                      <FiChevronDown className="w-5 h-5" />
                    )}
                  </div>
                </button>
                {openIndex === index && (
                  <div className="px-5 pb-5">
                    <p className="text-text-light text-[15px] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
