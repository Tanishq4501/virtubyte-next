"use client";

import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function TechStackSection() {
  return (
    <section className="relative py-[50px] md:py-[80px] lg:py-[50px] px-5 md:px-5 lg:px-0 bg-[#E5A2FF0A] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(at_center_right,#F6921E_0%,#FFFFFF00_50%)] opacity-10 pointer-events-none" />
      <div className="relative max-w-[1280px] mx-auto">
        <AnimatedSection animation="fadeInUp">
          <h2 className="text-[26px] md:text-[36px] font-semibold text-white text-center font-fira mb-10" style={{ lineHeight: '1.3em' }}>
            Technology Prowess
          </h2>
        </AnimatedSection>
        <AnimatedSection animation="fadeIn" delay={0.2}>
          <div className="max-w-6xl mx-auto">
            <Image
              src="/images/home/tech-stack.png"
              alt="Technology Stack"
              width={1667}
              height={956}
              className="w-full h-auto rounded-[7px]"
            />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
