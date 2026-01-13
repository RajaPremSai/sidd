"use client";

import { Card, Section } from "@/components/ui/layout-components";
import { Database, Server, Cloud, BarChart, Code, Building, ArrowRight } from "lucide-react";
import Link from "next/link";

const SERVICES = [
  {
    title: "Database Services",
    icon: Database,
    description: "Expert management for Oracle, MS SQL, MySQL, PostgreSQL, and MongoDB.",
    href: "/services/database",
    color: "text-blue-600"
  },
  {
    title: "Enterprise Solutions",
    icon: Building,
    description: "Oracle E-Business Suite, Fusion, SAP, and strategic ERP implementations.",
    href: "/services/enterprise",
    color: "text-indigo-600"
  },
  {
    title: "Oracle Engineered Systems",
    icon: Server,
    description: "High-performance infrastructure including Exadata and ODA solutions.",
    href: "/services/enterprise/exadata", // Pointing directly to Exadata for now, or could occupy a sub-section
    color: "text-red-600"
  },
  {
    title: "Cloud Services",
    icon: Cloud,
    description: "Migration and management for AWS, Azure, and Oracle Cloud Infrastructure.",
    href: "/services/cloud",
    color: "text-cyan-600"
  },
  {
    title: "Next-Gen Consulting",
    icon: Code,
    description: "Custom development in Java, .NET, PL/SQL, Salesforce, and AI/ML innovations.",
    href: "/consulting",
    color: "text-violet-600"
  },
  {
    title: "Data Analytics",
    icon: BarChart,
    description: "Business intelligence, Azure Data Engineering, Databricks, and Power BI.",
    href: "/services/data",
    color: "text-amber-600"
  }
];

export function ServicesSection() {
  return (
    <Section className="bg-light relative overflow-hidden">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-dark mb-6">
          Our Comprehensive Suite of Solutions
        </h2>
        <p className="text-lg text-gray-600">
          End-to-end technology services designed to modernize your infrastructure and drive innovation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.map((service) => (
          <Link href={service.href} key={service.title} className="group">
            <Card className="h-full p-8 flex flex-col justify-between hover:border-secondary/20 relative overflow-hidden bg-white">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <service.icon className="w-24 h-24" />
              </div>
              
              <div>
                <div className={`w-14 h-14 rounded-lg bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-white group-hover:shadow-md transition-all`}>
                  <service.icon className={`w-7 h-7 ${service.color}`} />
                </div>
                
                <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              <div className="flex items-center text-secondary font-medium text-sm group-hover:translate-x-2 transition-transform">
                Learn more <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </Section>
  );
}
