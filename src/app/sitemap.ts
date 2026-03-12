import { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE_URL = "https://virtuebytech.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/about/",
    "/services/",
    "/services/salesforce-implementation/",
    "/services/ai-ml-consulting/",
    "/services/data-science-analytics/",
    "/services/offshore-development-centers/",
    "/services/cloud-services/",
    "/services/devops-consulting-services/",
    "/products/",
    "/products/virtuelite/",
    "/products/virtunest/",
    "/case-studies/",
    "/blog/",
    "/contact/",
  ];

  const blogSlugs = [
    "driving-manufacturing-growth-with-salesforce",
    "spam-movie-review-detection",
    "bi-for-manufacturing-industry",
    "ml-for-test-case-generation-and-classification",
  ];

  const pages: MetadataRoute.Sitemap = staticPages.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/about/" ? 0.9 : 0.8,
  }));

  const blogPages: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}/`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...pages, ...blogPages];
}
