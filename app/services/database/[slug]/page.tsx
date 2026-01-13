import { ServicePageLayout } from "@/components/service-layout";
import { SERVICE_CONTENT } from "@/lib/service-content";
import { Metadata } from "next";
import { notFound } from "next/navigation";

// Generate static params for all known slugs (optional, but good for SSG)
export async function generateStaticParams() {
   return Object.keys(SERVICE_CONTENT).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const content = SERVICE_CONTENT[params.slug];
  if (!content) return { title: "Service Not Found" };
  
  return {
    title: `${content.title} | Siddidharmika Services`,
    description: content.subtitle,
  };
}

export default function DynamicServicePage({ params }: { params: { slug: string } }) {
  const content = SERVICE_CONTENT[params.slug];

  if (!content) {
    // If not found in registry (and not handled by other folders), 404
    notFound(); 
  }

  // Default process if not provided
  const processData = content.process || {
    title: "Our Engagement Process",
    description: "A proven methodology to deliver results.",
    steps: [
       { title: "Assessment", description: "Analyzing your current state and requirements." },
       { title: "Strategy", description: "Defining the roadmap and solution architecture." },
       { title: "Execution", description: "Implementation with best practices and rigorous testing." },
       { title: "Optimization", description: "Continuous improvement and support." }
    ]
  };

  return (
    <ServicePageLayout
      title={content.title}
      subtitle={content.subtitle}
      description={content.description}
      benefits={content.benefits || []}
      offerings={content.offerings || []}
      process={processData}
    />
  );
}
