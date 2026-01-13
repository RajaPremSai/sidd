import { ServicePageLayout } from "@/components/service-layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technology Consulting Services | Java, .NET, AI",
  description: "Expert consulting in software development, AI, and digital strategy by Siddidharmika.",
};

export default function ConsultingPage() {
  return (
    <ServicePageLayout
      title="Next-Gen Consulting"
      subtitle="Innovation Led by Expertise"
      description="Our consulting services bridge the gap between business strategy and technology execution. We provide deep technical expertise in modern software development frameworks and emerging technologies like AI/ML to help you stay ahead of the curve."
      benefits={[
        { title: "Expert Talent", description: "Access to seasoned architects and developers.", icon: "Code" },
        { title: "Future Ready", description: "Adopting the latest tech stacks and methodologies.", icon: "Lightbulb" },
        { title: "Custom Solutions", description: "Tailored software built for your specific needs.", icon: "Cpu" },
      ]}
      offerings={[
        { title: "Java Development", description: "Building robust enterprise application with Java.", slug: "/consulting/java" },
        { title: "Microsoft .NET", description: "Scalable solutions using the .NET ecosystem.", slug: "/consulting/dotnet" },
        { title: "AI & ML", description: "Integrating artificial intelligence into your business.", slug: "/consulting/ai" },
        { title: "Salesforce", description: "CRM customization and optimization.", slug: "/consulting/salesforce" },
        { title: "PL/SQL", description: "Database programming and optimization.", slug: "/consulting/plsql" },
      ]}
    />
  );
}
