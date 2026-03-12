"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { FaChartLine, FaUsersCog, FaEye, FaCogs, FaCloud } from "react-icons/fa";

const results = [
  { icon: <FaChartLine className="w-6 h-6" />, text: "Increasing sales process efficiency" },
  { icon: <FaUsersCog className="w-6 h-6" />, text: "Reducing manual operational workload" },
  { icon: <FaEye className="w-6 h-6" />, text: "Improving customer data visibility" },
  { icon: <FaCogs className="w-6 h-6" />, text: "Enhancing automation and workflow management" },
  { icon: <FaCloud className="w-6 h-6" />, text: "Optimizing cloud performance and security" },
];

export default function ProductsSection() {
  return (
    <section className="relative py-[50px] px-5 md:px-5 lg:px-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(at_center_left,#F6921E_0%,#FFFFFF00_50%)] opacity-10 pointer-events-none" />
      <div className="relative max-w-[1280px] mx-auto">
        <SectionHeading title="Delivering Real, Measurable Results" />
        <p className="text-text-light text-[16px] md:text-[18px] leading-relaxed text-center max-w-3xl mx-auto mb-10 -mt-4">
          Our solutions consistently help businesses achieve tangible outcomes.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {results.map((item, index) => (
            <AnimatedSection key={index} animation="fadeInUp" delay={index * 0.1}>
              <div className="relative bg-[#E5A2FF0A] rounded-[20px] p-6 border border-[#E5A2FF0A] hover:shadow-[0px_5px_30px_0px_rgba(0,0,0,0.41)] transition-all duration-300 hover-bob h-full flex items-center gap-4">
                <div className="absolute inset-0 bg-[radial-gradient(at_top_left,#F6921E_0%,#FFFFFF00_50%)] opacity-20 pointer-events-none rounded-[20px]" />
                <div className="relative w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white flex-shrink-0">
                  {item.icon}
                </div>
                <p className="relative text-white text-[16px] font-medium">{item.text}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
        <p className="text-text-light text-[16px] leading-relaxed text-center mt-8 max-w-2xl mx-auto">
          We don&apos;t deliver generic implementations — we deliver impact.
        </p>
      </div>
    </section>
  );
}
