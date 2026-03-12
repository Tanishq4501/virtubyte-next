"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { clientLogos } from "@/data/content";

export default function ClientLogosSection() {
  return (
    <section className="relative py-[50px] px-5 md:px-5 lg:px-0 bg-[#E5A2FF0A] overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(at_top_center,#F6921E_0%,#FFFFFF00_50%)] opacity-10 pointer-events-none" />
      <div className="relative max-w-[1280px] mx-auto">
        <AnimatedSection animation="fadeInUp">
          <h2 className="text-[26px] md:text-[30px] font-semibold text-white text-start md:text-center font-fira mb-10" style={{ lineHeight: '1.3em' }}>
            Esteemed customers who have faith in our deliverables
          </h2>
        </AnimatedSection>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={10}
          slidesPerView={2}
          loop
          autoplay={{ delay: 1000, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 4, spaceBetween: 10 },
            1024: { slidesPerView: 5, spaceBetween: 15 },
          }}
          className="client-logos-swiper"
        >
          {clientLogos.map((logo, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-center p-4 min-h-[70px]">
                <Image
                  src={logo}
                  alt={`Client ${index + 1}`}
                  width={200}
                  height={100}
                  className="max-h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
