import { Section, Card } from "@/components/ui/layout-components";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function CaseStudiesSection() {
  return (
    <Section background="light">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Transforming Businesses</h2>
          <p className="text-gray-600 max-w-xl">
             Explore how we've helped enterprises achieve their digital goals through innovative solutions.
          </p>
        </div>
        <Link href="/company/case-studies" className="hidden md:flex items-center text-primary font-semibold hover:gap-2 transition-all">
          View All Case Studies <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: "Financial Services Giant Optimizes Oracle Licensing",
            category: "Cost Optimization",
            image: "/images/finance-case-study.png",
            desc: "Reduced annual licensing costs by 60% through strategic consolidation."
          },
          {
            title: "Healthcare Provider Migrates to Azure Cloud",
            category: "Cloud Migration",
            image: "/images/healthcare-case-study.png",
            desc: "Seamless 50TB+ patient data migration adhering to HIPAA compliance."
          },
          {
            title: "Retail Chain Implements Real-time Analytics",
            category: "Data Analytics",
            image: "/images/retail-case-study.png",
            desc: "Real-time inventory tracking across 500+ stores with Power BI."
          }
        ].map((study, i) => (
          <Card key={i} className="p-0 overflow-hidden group border-none shadow-lg hover:shadow-xl transition-all">
            <div className="h-48 bg-gray-200 relative overflow-hidden">
               <Image 
                 src={study.image}
                 alt={study.title}
                 fill
                 className="object-cover group-hover:scale-110 transition-transform duration-700"
               />
               <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors" />
            </div>
            <div className="p-6">
              <div className="text-xs font-bold text-secondary uppercase tracking-wider mb-2">{study.category}</div>
              <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors line-clamp-2">
                 {study.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                 {study.desc}
              </p>
              <div className="text-primary font-medium text-sm flex items-center group/link">
                Read Case Study <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </div>
            </div>
          </Card>
        ))}
      </div>
      
      <div className="mt-8 text-center md:hidden">
        <Link href="/company/case-studies" className="inline-flex items-center text-primary font-semibold">
           View All Case Studies <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
      </div>
    </Section>
  );
}
