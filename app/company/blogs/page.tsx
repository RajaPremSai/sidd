"use client";

import { Section, Card } from "@/components/ui/layout-components";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const BLOGS = [
  {
    title: "Oracle Database Optimization Best Practices",
    excerpt: "Learn how to tune your Oracle database for maximum performance and efficiency.",
    category: "Database",
    date: "March 15, 2024",
    slug: "oracle-optimization"
  },
  {
    title: "Navigating the Cloud: AWS vs Azure vs OCI",
    excerpt: "A comprehensive comparison to help you choose the right cloud platform for your enterprise.",
    category: "Cloud",
    date: "March 10, 2024",
    slug: "cloud-comparison"
  },
  {
    title: "The Future of AI in Enterprise",
    excerpt: "How Artificial Intelligence is reshaping business operations and decision making.",
    category: "AI & ML",
    date: "March 05, 2024",
    slug: "ai-future"
  },
  {
    title: "Securing Your Data in a Hybrid World",
    excerpt: "Essential security strategies for managing data across on-premise and cloud environments.",
    category: "Security",
    date: "February 28, 2024",
    slug: "data-security"
  },
  {
    title: "Migrating Legacy Apps to Microservices",
    excerpt: "Key considerations and benefits of modernizing your application architecture.",
    category: "App Dev",
    date: "February 20, 2024",
    slug: "microservices-migration"
  },
  {
    title: "Understanding Oracle Database Appliance (ODA)",
    excerpt: "Why ODA might be the perfect solution for your diverse database workloads.",
    category: "Infrastructure",
    date: "February 15, 2024",
    slug: "oda-explained"
  }
];

export default function BlogsPage() {
  return (
    <div className="pt-20">
       <Section background="light" className="text-center py-20">
          <h1 className="text-4xl font-bold mb-4 text-dark">Insights & News</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
             Stay updated with the latest trends, tips, and technology news from our experts.
          </p>
       </Section>

       <Section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {BLOGS.map((blog) => (
                <Card key={blog.slug} className="group hover:border-primary transition-all">
                   <div className="h-48 bg-gray-200 rounded-lg mb-6 relative overflow-hidden">
                      <Image 
                         src={
                            blog.slug === "oracle-optimization" ? "/images/blog-oracle.png" :
                            blog.slug === "cloud-comparison" ? "/images/blog-cloud.png" :
                            blog.slug === "ai-future" ? "/images/blog-ai.png" :
                            "/images/blog-oracle.png" // Fallback
                         }
                         alt={blog.title}
                         fill
                         className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors" />
                   </div>
                   <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-wider mb-3">
                      <span className="text-secondary">{blog.category}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-400">{blog.date}</span>
                   </div>
                   <h2 className="text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">
                      {blog.title}
                   </h2>
                   <p className="text-gray-600 mb-6 text-sm line-clamp-3">
                      {blog.excerpt}
                   </p>
                   <Link href={`/company/blogs/${blog.slug}`} className="flex items-center text-sm font-bold text-secondary group-hover:gap-2 transition-all">
                      Read Full Article <ArrowRight className="ml-2 w-4 h-4" />
                   </Link>
                </Card>
             ))}
          </div>
       </Section>
    </div>
  );
}
