import { ServicePageLayout } from "@/components/service-layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cloud Consulting Services | AWS, Azure, OCI",
  description: "Accelerate your cloud journey with Siddidharmika. We specialize in AWS, Azure, and Oracle Cloud Infrastructure migrations and management.",
};

export default function CloudPage() {
  return (
    <ServicePageLayout
      title="Cloud Services"
      subtitle="Secure, Scalable, and Cost-Effective Cloud Solutions"
      description="Whether you are starting your cloud journey or looking to optimize your existing multi-cloud strategy, Siddidharmika provides the expertise you need. We partner with major cloud providers to deliver solutions that drive innovation and reduce IT overhead."
      benefits={[
        { title: "Agility", description: "Deploy infrastructure in minutes, not months.", icon: "Cloud" },
        { title: "Cost Optimization", description: "Pay only for what you use with efficient resource management.", icon: "TrendingUp" },
        { title: "Security First", description: "Robust security frameworks protecting your data in the cloud.", icon: "Lock" },
      ]}
      offerings={[
        { title: "Amazon Web Services", description: "Architecting and managing secure AWS environments.", slug: "/services/cloud/aws" },
        { title: "Microsoft Azure", description: "Hybrid cloud solutions and app modernization on Azure.", slug: "/services/cloud/azure" },
        { title: "Oracle Cloud Infrastructure", description: "The best platform for your mission-critical Oracle databases.", slug: "/services/cloud/oci" },
      ]}
    />
  );
}
