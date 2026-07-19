import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site-config";
import { articles } from "@/content/resources";
import { services } from "@/content/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.siteUrl;

  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/testimonials",
    "/resources",
    "/contact",
    "/tutors",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));

  const serviceRoutes = services.map((service) => ({
    url: `${base}/services/${service.slug}`,
    lastModified: new Date(),
  }));

  const articleRoutes = articles.map((article) => ({
    url: `${base}/resources/${article.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...serviceRoutes, ...articleRoutes];
}
