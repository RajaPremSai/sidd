import { Section, Card } from "@/components/ui/layout-components";
import { Button } from "@/components/ui/button";
import { Database, Cloud, BarChart, Code, Building, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Siddidharmika Software Solutions",
  description: "Explore our comprehensive range of technology services including Database Management, Cloud Consulting, Enterprise Solutions, and Data Analytics.",
};

const SERVICE_CATEGORIES = [
  {
    title: "Database Services",
    description: "End-to-end management for Oracle, SQL Server, MySQL, and NoSQL databases.",
    icon: Database,
    href: "/services/database",
    bg: "bg-blue-50",
    color: "text-blue-600"
  },
  {
    title: "Cloud Services",
    description: "Migration, optimization, and management for AWS, Azure, and OCI.",
    icon: Cloud,
    href: "/services/cloud",
    bg: "bg-cyan-50",
    color: "text-cyan-600"
  },
  {
    title: "Enterprise Solutions",
    description: "ERP implementation and support for Oracle EBS, Fusion Cloud, and SAP.",
    icon: Building,
    href: "/services/enterprise",
    bg: "bg-indigo-50",
    color: "text-indigo-600"
  },
  {
    title: "Data & Analytics",
    description: "Transforming raw data into actionable insights with Azure Data and Power BI.",
    icon: BarChart,
    href: "/services/data",
    bg: "bg-amber-50",
    color: "text-amber-600"
  },
];

export default function ServicesLandingPage() {
  return (
    <div className="pt-20">
      <Section background="primary" className="text-white">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-blue-100">
            Comprehensive technology solutions designed to drive innovation and efficiency.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICE_CATEGORIES.map((cat) => (
            <Link key={cat.title} href={cat.href} className="group">
              <Card className="h-full p-8 hover:border-primary transition-all flex flex-col md:flex-row gap-6 items-start">
                 <div className={`w-16 h-16 rounded-2xl ${cat.bg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                    <cat.icon className={`w-8 h-8 ${cat.color}`} />
                 </div>
                 <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-dark group-hover:text-primary transition-colors">{cat.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{cat.description}</p>
                    <div className="flex items-center text-secondary font-bold group-hover:gap-2 transition-all">
                       Explore Services <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                 </div>
              </Card>
            </Link>
          ))}
        </div>
      </Section>
      
      <Section background="light" className="text-center">
         <h2 className="text-3xl font-bold text-dark mb-6">Need Custom Consulting?</h2>
         <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            We also offer specialized consulting in Java, .NET, AI/ML, and Salesforce.
         </p>
         <Link href="/consulting">
            <Button variant="outline" size="lg" className="rounded-full px-8">View Consulting Services</Button>
         </Link>
      </Section>
    </div>
  );
}
