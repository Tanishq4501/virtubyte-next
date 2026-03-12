"use client";

import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import CTAButton from "@/components/ui/CTAButton";

export default function CTASection() {
  return (
    <section className="py-[50px] px-5 md:px-5 lg:px-0">
      <div className="max-w-[1280px] mx-auto">
        <div className="relative bg-[#E5A2FF0A] rounded-[20px] p-5 md:p-[40px] overflow-hidden">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#F6921E_0%,#E5A2FF0A_100%)] opacity-50 pointer-events-none rounded-[20px]" />
          <div className="relative flex flex-col-reverse lg:flex-row gap-10 items-center">
            <AnimatedSection animation="fadeInLeft" className="w-full lg:w-[55%]">
              <h2 className="text-[26px] md:text-[36px] font-semibold text-white font-fira mb-4" style={{ lineHeight: '1.3em' }}>
                Let&apos;s Build Smarter Systems Together
              </h2>
              <p className="text-text-light text-[16px] md:text-[18px] mb-8 leading-relaxed">
                If you&apos;re looking for a reliable Salesforce, AI, cloud, DevOps, or offshore development partner, VirtueByte is ready to support your growth journey. Whether you need strategy, implementation, or optimization — we bring clarity to complex technology.
              </p>
              <p className="text-white/60 text-[15px] italic mb-6">
                Technology should move your business forward. Let&apos;s make it happen.
              </p>
              <CTAButton href="/contact/">Request a Free Consultation</CTAButton>
            </AnimatedSection>
            <AnimatedSection animation="fadeInRight" delay={0.2} className="w-full lg:w-[45%]">
              <Image
                src="/images/home/cta-image.png"
                alt="Transform your business"
                width={800}
                height={476}
                className="w-full h-auto rounded-[20px]"
              />
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
