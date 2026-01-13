"use client";

import { Section } from "@/components/ui/layout-components";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";

// Mock Data Source (Ideally this comes from a CMS or API)
const BLOG_POSTS: Record<string, { title: string; content: string; date: string; author: string; category: string }> = {
  "oracle-optimization": {
    title: "Oracle Database Optimization Best Practices",
    date: "March 15, 2024",
    author: "Jane Doe",
    category: "Database",
    content: `
      <p class="mb-4">Optimizing an Oracle Database is a continuous process that involves monitoring, tuning, and adjusting various parameters to ensure peak performance. In this article, we explore key strategies to keep your database running smoothly.</p>
      
      <h3 class="text-2xl font-bold mt-8 mb-4">1. SQL Tuning</h3>
      <p class="mb-4">Poorly written SQL queries are often the primary cause of performance bottlenecks. Use the AWR (Automatic Workload Repository) reports to identify high-load queries and optimize them using hints, indexes, or rewriting logic.</p>

      <h3 class="text-2xl font-bold mt-8 mb-4">2. Memory Management</h3>
      <p class="mb-4">Ensure your SGA (System Global Area) and PGA (Program Global Area) are sized correctly. Automatic Memory Management (AMM) can simplify this, but manual tuning is often required for large enterprise workloads.</p>

      <h3 class="text-2xl font-bold mt-8 mb-4">3. Indexing Strategy</h3>
      <p class="mb-4"> Indexes speed up data retrieval but slow down DML operations. Regularly review your index usage; remove unused indexes and rebuild fragmented ones to maintain balance.</p>
    `
  },
  "cloud-comparison": {
    title: "Navigating the Cloud: AWS vs Azure vs OCI",
    date: "March 10, 2024",
    author: "John Smith",
    category: "Cloud",
    content: `
      <p class="mb-4">Choosing the right cloud provider is a critical decision for any enterprise. While AWS, Azure, and OCI share many similarities, they each have distinct strengths.</p>
      
      <h3 class="text-2xl font-bold mt-8 mb-4">AWS (Amazon Web Services)</h3>
      <p class="mb-4">The market leader with the most mature and extensive service catalog. Ideal for digital-native businesses and complex serverless architectures.</p>

      <h3 class="text-2xl font-bold mt-8 mb-4">Microsoft Azure</h3>
      <p class="mb-4">The top choice for enterprises heavily invested in the Microsoft ecosystem. seamless integration with Active Directory, Windows Server, and SQL Server.</p>

      <h3 class="text-2xl font-bold mt-8 mb-4">OCI (Oracle Cloud Infrastructure)</h3>
      <p class="mb-4">Unbeatable for running Oracle Databases. Offers the best price-performance ratio for high-throughput workloads and makes "Lift and Shift" of legacy apps easier.</p>
    `
  },
  // Fallback for other slugs
  "default": {
    title: "Insights on Technology",
    date: "Recent",
    author: "Editorial Team",
    category: "Technology",
    content: `<p>This is a placeholder for the full article content. In a real application, this would fetch data from a CMS based on the slug.</p>`
  }
};

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_POSTS[slug] || BLOG_POSTS["default"];

  return (
    <div className="pt-20">
      <Section background="white" className="py-20">
        <div className="max-w-4xl mx-auto">
          <Link href="/company/blogs">
            <Button variant="ghost" className="mb-8 pl-0 hover:pl-2 transition-all">
              <ArrowLeft className="mr-2 w-4 h-4" /> Back to Blogs
            </Button>
          </Link>

          <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
             <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {post.date}</span>
             <span className="flex items-center gap-1"><User className="w-4 h-4" /> {post.author}</span>
             <span className="flex items-center gap-1 text-secondary font-semibold"><Tag className="w-4 h-4" /> {post.category}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-dark mb-8 leading-tight">
            {post.title}
          </h1>

          <div 
            className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Call to Action */}
          <div className="mt-16 p-8 bg-blue-50 rounded-2xl border border-blue-100 text-center">
             <h3 className="text-2xl font-bold text-dark mb-4">Need help with {post.category}?</h3>
             <p className="text-gray-600 mb-6">Our experts are ready to assist you in implementing these strategies for your business.</p>
             <Link href="/contact">
               <Button size="lg" className="rounded-full px-8">Contact Us Today</Button>
             </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
