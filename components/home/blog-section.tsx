import { Section, Card } from "@/components/ui/layout-components";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const BLOGS = [
  {
    title: "Oracle Database Optimization",
    category: "Database",
    excerpt: "Best practices for tuning your Oracle workload for maximum performance on OCI."
  },
  {
    title: "Oracle Database Security Audit",
    category: "Security",
    excerpt: "A comprehensive guide to auditing your database security posture and compliance."
  },
  {
    title: "Migration to OCI",
    category: "Cloud",
    excerpt: "Step-by-step strategies for a seamless migration from on-prem to Oracle Cloud."
  }
];

export function BlogSection() {
  return (
    <Section background="white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Siddidharmika Insights</h2>
        <p className="text-gray-600">Latest analysis, trends, and technology updates from our experts.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {BLOGS.map((blog) => (
          <Card key={blog.title} className="p-8 hover:border-primary/50 group">
             <div className="text-sm text-accent font-semibold mb-3">{blog.category}</div>
             <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">
               {blog.title}
             </h3>
             <p className="text-gray-600 mb-6">
               {blog.excerpt}
             </p>
             <Link href="/blogs/post-slug" className="inline-flex items-center text-secondary font-medium hover:underline">
               Read More <ArrowRight className="ml-2 w-4 h-4" />
             </Link>
          </Card>
        ))}
      </div>
    </Section>
  );
}
