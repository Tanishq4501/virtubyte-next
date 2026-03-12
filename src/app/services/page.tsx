import { Metadata } from "next";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "We provide AI, cloud, and data-driven solutions to transform businesses. From streamlined operations to scalable offshore teams, we drive innovation and deliver impactful results.",
};

export default function ServicesPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Services" }]} />
      <section className="relative py-[50px] px-5 md:px-5 lg:px-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(at_center_right,#F6921E_0%,#FFFFFF00_50%)] opacity-10 pointer-events-none" />
        <div className="relative max-w-[1280px] mx-auto">
          <SectionHeading title="Services" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                tagline={service.tagline}
                description={service.description}
                image={service.image}
                href={service.href}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
