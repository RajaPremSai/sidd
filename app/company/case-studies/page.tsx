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
             {[
                {
                   title: "Financial Services Giant Optimizes Oracle Licensing",
                   description: "A leading bank reduced their annual Oracle licensing costs by 60% through our strategic consolidation and ODA implementation services.",
                   category: "Cost Optimization"
                },
                {
                   title: "Healthcare Provider Migrates to Azure Cloud",
                   description: "Seamless migration of 50TB+ patient data to Azure SQL Managed Instance, ensuring HIPAA compliance and 99.99% availability.",
                   category: "Cloud Migration"
                },
                {
                   title: "Retail Chain Implements Real-time Analytics with Power BI",
                   description: "Deployed a centralized Data Lakehouse and Power BI dashboards, enabling real-time inventory tracking across 500+ stores.",
                   category: "Data Analytics"
                },
                {
                   title: "Manufacturing Firm Automates Supply Chain with AI",
                   description: "Integrated AI-driven demand forecasting models into their ERP, reducing stockouts by 35% and improving delivery times.",
                   category: "AI & Automation"
                }
             ].map((study, i) => (
                <div key={i} className="group cursor-pointer">
                   <div className="overflow-hidden rounded-2xl mb-6 shadow-md">
                      <div className="h-64 bg-gray-200 relative group-hover:scale-105 transition-transform duration-500">
                          {/* Placeholder Image */}
                          <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-bold text-lg">
                             {study.title} Visual
                          </div>
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                      </div>
                   </div>
                   <div className="space-y-3">
                      <span className="text-sm font-bold text-secondary uppercase tracking-wide">{study.category}</span>
                      <h3 className="text-2xl font-bold text-dark group-hover:text-primary transition-colors">
                         {study.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                         {study.description}
                      </p>
                      <Link href={`/company/case-studies/${i + 1}`} className="flex items-center text-secondary font-bold pt-2 group-hover:translate-x-2 transition-transform">
                         View Case Study <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                   </div>
                </div>
             ))}
          </div>
       </Section>
    </div>
  );
}
