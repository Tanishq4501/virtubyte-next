"use client";

import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const faqs = [
  {
    question: "What is an Offshore Development Center?",
    answer:
      "An Offshore Development Center is a dedicated remote engineering team that functions as an extension of your internal team, supporting long-term development, DevOps automation, and cloud transformation initiatives.",
  },
  {
    question: "How much does it cost to set up an ODC?",
    answer:
      "Costs vary based on team size, technology stack, and project scope. ODC models are typically more cost-effective than in-house hiring while maintaining enterprise-grade quality.",
  },
  {
    question: "How do you ensure data security and IP protection?",
    answer:
      "We implement secure infrastructure, access controls, compliance frameworks, NDAs, and governance policies to protect intellectual property and sensitive data.",
  },
  {
    question: "What engagement models do you offer?",
    answer:
      "We provide dedicated ODC models, hybrid team extensions, and project-based delivery structures tailored to business needs.",
  },
  {
    question: "How quickly can a dedicated offshore team be deployed?",
    answer:
      "Depending on required skillsets, teams can typically be deployed within a few weeks following project discovery and onboarding.",
  },
];

export default function OffshoreFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-[50px] px-5 md:px-5 lg:px-0 overflow-hidden">
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
