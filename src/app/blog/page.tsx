import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Read our latest articles on Salesforce, AI/ML, Data Science, and technology innovation.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <Breadcrumb items={[{ label: "Blog" }]} />
      <section className="relative py-[50px] px-5 md:px-5 lg:px-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(at_center_left,#F6921E_0%,#FFFFFF00_50%)] opacity-10 pointer-events-none" />
        <div className="relative max-w-[1280px] mx-auto">
          <SectionHeading title="Blog" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <AnimatedSection key={post.slug} animation="fadeInUp" delay={index * 0.1}>
                <Link href={`/blog/${post.slug}/`} className="block group">
                  <div className="relative bg-[#E5A2FF0A] rounded-[20px] overflow-hidden border border-[#E5A2FF0A] hover:shadow-[0px_5px_30px_0px_rgba(0,0,0,0.41)] transition-all duration-300 h-full hover-bob">
                    <div className="absolute inset-0 bg-[radial-gradient(at_top_left,#F6921E_0%,#FFFFFF00_50%)] opacity-20 pointer-events-none rounded-[20px]" />
                    <div className="relative h-[274px] overflow-hidden rounded-[20px]">
                      <Image
                        src={post.featuredImage}
                        alt={post.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <div className="relative p-5">
                      <h3 className="text-[21px] font-semibold font-fira text-white mb-2 leading-[1.4em] line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-text-light text-[18px] leading-relaxed mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <span className="inline-flex items-center bg-primary text-white text-[14px] font-semibold uppercase px-[25px] py-[10px] rounded-[12px] tracking-wide">
                        Learn more
                      </span>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
