import { Section } from "@/components/ui/layout-components";
import { Card } from "@/components/ui/layout-components";

// Ideally these would be SVG logos (Oracle, Azure, Salesforce)
// Using text placeholders or simple icons for now
import { Cloud, Database, Briefcase } from "lucide-react";

export function TechStackSection() {
  const stacks = [
    {
      name: "Oracle",
      description: "On-prem + Cloud Database Solutions",
      icon: Database,
      color: "text-red-600"
    },
    {
      name: "Microsoft Azure",
      description: "Cloud, Data, Applications",
      icon: Cloud,
      color: "text-blue-500"
    },
    {
      name: "Salesforce",
      description: "CRM Consulting and Customization",
      icon: Briefcase,
      color: "text-sky-500"
    }
  ];

  return (
    <Section background="light">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-dark">
        Our Tech Toolbox for Digital Solutions
      </h2>
      
      <div className="flex flex-wrap justify-center gap-8">
        {stacks.map((stack) => (
          <Card key={stack.name} className="flex items-center gap-6 p-8 min-w-[300px] hover:scale-105 transition-transform">
            <stack.icon className={`w-12 h-12 ${stack.color}`} />
            <div>
              <h3 className="text-xl font-bold text-dark">{stack.name}</h3>
              <p className="text-sm text-gray-500">{stack.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
