"use client";

import { Section, Card } from "@/components/ui/layout-components";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CaseStudiesPage() {
  return (
    <div className="pt-20">
       <Section background="light" className="text-center py-20">
          <h1 className="text-4xl font-bold mb-4 text-dark">Success Stories</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
             See how we've helped leading organizations achieve their digital transformation goals.
          </p>
       </Section>

       <Section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
             {[1, 2, 3, 4].map((i) => (
                <div key={i} className="group cursor-pointer">
                   <div className="overflow-hidden rounded-2xl mb-6 shadow-md">
                      <div className="h-64 bg-gray-200 relative group-hover:scale-105 transition-transform duration-500">
                          {/* Placeholder Image */}
                          <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-bold text-lg">
                             Case Study Visual {i}
                          </div>
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                      </div>
                   </div>
                   <div className="space-y-3">
                      <h3 className="text-2xl font-bold text-dark group-hover:text-primary transition-colors">
                         Global Retailer Migrates to OCI
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                         We helped a Fortune 500 retailer consolidate their database infrastructure on Oracle Cloud, resulting in 40% cost savings and improved performance.
                      </p>
                      <div className="flex items-center text-secondary font-bold pt-2 group-hover:translate-x-2 transition-transform">
                         View Case Study <ArrowRight className="ml-2 w-4 h-4" />
                      </div>
                   </div>
                </div>
             ))}
          </div>
       </Section>
    </div>
  );
}
