"use client";

import { Section } from "@/components/ui/layout-components";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, TrendingUp, BarChart3 } from "lucide-react";

const CASE_STUDIES = [
  {
    id: "1",
    title: "Financial Services Giant Optimizes Oracle Licensing",
    client: "Global Banking Corp",
    industry: "Finance",
    challenge: "The client was facing spiraling Oracle licensing costs due to inefficient infrastructure utilization and lack of oversight on their widespread database estate.",
    solution: "We conducted a thorough licensing audit and consolidated their databases onto Oracle Database Appliance (ODA). We also implemented strict capacity planning and active monitoring.",
    results: [
      "60% reduction in annual licensing costs",
      "3x improvement in report generation speed",
      "Simplified management with a single engineered system"
    ]
  },
  {
    id: "2",
    title: "Healthcare Provider Migrates to Azure Cloud",
    client: "National Health Network",
    industry: "Healthcare",
    challenge: "An aging on-premise datacenter was causing reliability issues and compliance risks. They needed a scalable, secure cloud solution that adhered to strict HIPAA regulations.",
    solution: "We architected a secure hybrid cloud solution on Azure, migrating 50TB of sensitive patient data to Azure SQL Managed Instance using Azure Database Migration Service.",
    results: [
      "99.99% system availability achieved",
      "Full HIPAA & GDPR compliance",
      "Scalable infrastructure handling 20% MoM data growth"
    ]
  },
  // Fallback generic data
  {
    id: "default",
    title: "Retail Chain Implements Real-time Analytics",
    client: "RetailMegaStore",
    industry: "Retail",
    challenge: "Lack of real-time inventory visibility across 500+ stores led to stockouts and lost revenue.",
    solution: "Implemented a centralized Data Lakehouse on Databricks and connected it with Power BI for real-time dashboards.",
    results: [
      "Real-time inventory tracking across all locations",
      "35% reduction in stockouts",
      "15% increase in seasonal revenue"
    ]
  }
];

export default async function CaseStudyDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const study = CASE_STUDIES.find(s => s.id === id) || CASE_STUDIES[2]; // Default to the 3rd one if not found or Generic

  return (
    <div className="pt-20">
      <Section background="light" className="py-20">
        <div className="max-w-6xl mx-auto">
          <Link href="/company/case-studies">
            <Button variant="ghost" className="mb-8 pl-0 hover:pl-2 transition-all">
              <ArrowLeft className="mr-2 w-4 h-4" /> Back to Case Studies
            </Button>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <span className="text-secondary font-bold tracking-wider uppercase">{study.industry} Case Study</span>
              <h1 className="text-4xl md:text-5xl font-bold text-dark leading-tight">
                {study.title}
              </h1>
              <p className="text-xl text-gray-600">
                Client: <span className="font-semibold text-dark">{study.client}</span>
              </p>
            </div>
            <div className="h-64 lg:h-96 bg-gray-200 rounded-2xl flex items-center justify-center text-gray-400 font-bold text-xl shadow-lg">
               {/* Image Placeholder */}
               {study.title} Visual
            </div>
          </div>
        </div>
      </Section>

      <Section background="white">
         <div className="max-w-4xl mx-auto space-y-16">
            {/* Challenge */}
            <div>
               <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-full bg-red-100 text-red-600">
                     <TrendingUp className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-bold text-dark">The Challenge</h2>
               </div>
               <p className="text-lg text-gray-600 leading-relaxed border-l-4 border-red-200 pl-6">
                  {study.challenge}
               </p>
            </div>

            {/* Solution */}
            <div>
               <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                     <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-bold text-dark">The Solution</h2>
               </div>
               <p className="text-lg text-gray-600 leading-relaxed border-l-4 border-blue-200 pl-6">
                  {study.solution}
               </p>
            </div>

            {/* Results */}
            <div>
               <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-full bg-green-100 text-green-600">
                     <BarChart3 className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-bold text-dark">Key Results</h2>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {study.results.map((result, idx) => (
                     <div key={idx} className="p-6 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <h4 className="text-4xl font-bold text-green-500 mb-2">
                           {/* Extract number if possible, or checkmark */}
                           <CheckCircle2 className="inline-block w-8 h-8 mb-1" />
                        </h4>
                        <p className="font-medium text-gray-700">{result}</p>
                     </div>
                  ))}
               </div>
            </div>
         </div>
         
          {/* CTA */}
          <div className="max-w-4xl mx-auto mt-20 p-10 bg-dark text-white rounded-3xl text-center relative overflow-hidden">
             <div className="absolute inset-0 bg-primary/20 pattern-grid-lg opacity-10" />
             <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-4">Face a similar challenge?</h3>
                <p className="text-gray-300 mb-8 max-w-lg mx-auto">Let us help you achieve similar results with our tailored solutions.</p>
                <Link href="/contact">
                   <Button size="lg" className="bg-white text-dark hover:bg-gray-100 rounded-full px-10">
                     Get a Consultation
                   </Button>
                </Link>
             </div>
          </div>
      </Section>
    </div>
  );
}
