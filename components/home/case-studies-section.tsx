import { Section, Card } from "@/components/ui/layout-components";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

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
        {[1, 2, 3].map((i) => (
          <Card key={i} className="p-0 overflow-hidden group">
            <div className="h-48 bg-gray-200 relative">
               {/* Placeholder Image */}
               <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium">
                  Case Study Preview {i}
               </div>
               <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors" />
            </div>
            <div className="p-6">
              <div className="text-xs font-bold text-secondary uppercase tracking-wider mb-2">Cloud Migration</div>
              <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">
                 Modernizing Legacy Infrastructure for a FinTech Giant
              </h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                 We migrated mission-critical databases to OCI, resulting in 40% cost reduction and 99.99% uptime.
              </p>
              <div className="text-primary font-medium text-sm flex items-center">
                Read Case Study <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
