import { ServicePageLayout } from "@/components/service-layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise ERP Solutions | Oracle EBS, Fusion, SAP",
  description: "Transform your business operations with our comprehensive enterprise solutions provided by Siddidharmika.",
};

export default function EnterprisePage() {
  return (
    <ServicePageLayout
      title="Enterprise Solutions"
      subtitle="Streamline Operations with Intelligent ERP Systems"
      description="In today's fast-paced business environment, agility is key. Our Enterprise Solutions practice helps you implement, upgrade, and manage world-class ERP systems like Oracle E-Business Suite, Oracle Fusion Cloud, and SAP to ensure your operations are efficient, compliant, and scalable."
      benefits={[
        { title: "Operational Excellence", description: "Automate core business processes.", icon: "Zap" },
        { title: "Real-time Visibility", description: "Integrated data for better decision making.", icon: "BarChart" },
        { title: "Compliance Ready", description: "Adhere to global and local regulations.", icon: "Shield" },
      ]}
      offerings={[
        { title: "Oracle E-Business Suite", description: "Comprehensive support for Financials, SCM, and HRMS.", slug: "/services/enterprise/ebs" },
        { title: "Oracle Fusion Cloud", description: "Next-gen SaaS applications for the modern enterprise.", slug: "/services/enterprise/fusion" },
        { title: "SAP Solutions", description: "Implementation and migration services for SAP landscapes.", slug: "/services/enterprise/sap" },
        { title: "Oracle Exadata", description: "Extreme performance for your critical databases.", slug: "/services/enterprise/exadata" },
        // Added ODA here as it fits engineered systems in enterprise context
        { title: "Oracle Database Appliance", description: "Simple, reliable, and affordable engineered systems.", slug: "/services/enterprise/oda" },
      ]}
    />
  );
}
