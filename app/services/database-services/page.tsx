import { ServicePageLayout } from "@/components/service-layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Database Management Services in Hyderabad | Oracle, MySQL, MongoDB",
  description: "Expert database administration, tuning, and migration services for Oracle, SQL Server, MySQL, PostgreSQL, and MongoDB by Siddidharmika.",
};

export default function DatabaseServicesPage() {
  const features = [
    {
      title: "Oracle DBA",
      description: "Comprehensive administration, performance tuning, and high-availability solutions for Oracle environments.",
    },
    {
      title: "MS SQL Server",
      description: "End-to-end support for SQL Server including AlwaysOn availability groups and replication.",
    },
    {
      title: "MySQL & PostgreSQL",
      description: "Cost-effective open-source database management with focus on scalability and reliability.",
    },
    {
      title: "MongoDB",
      description: "NoSQL database design, sharding, and optimization for high-performance applications.",
    },
    {
      title: "Database Migration",
      description: "Seamless migration services from on-premise to cloud (AWS/Azure/OCI) with minimal downtime.",
    },
    {
      title: "Security & Auditing",
      description: "Implementation of rigorous security policies, encryption, and compliance auditing.",
    },
  ];

  return (
    <ServicePageLayout
      title="Database Services"
      subtitle="Ensuring High Availability, Performance, and Security for Your Mission-Critical Data"
      description={`
        In the digital age, data is your most valuable asset. Siddidharmika Software Solutions offers a comprehensive suite of database management services designed to keep your data secure, available, and optimized.
        
        Our team of certified experts brings decades of experience across all major database platforms. Whether you need 24/7 monitoring, complex migrations, or performance tuning, we provide tailored solutions that align with your business objectives.
      `}
      benefits={[
        {
          title: "24/7 Monitoring & Support",
          description: "Round-the-clock database monitoring and expert support to ensure optimal performance.",
          icon: "Activity"
        },
        {
          title: "Proactive Performance Tuning",
          description: "Continuous optimization to maintain peak database efficiency and responsiveness.",
          icon: "Zap"
        },
        {
          title: "High Availability & Disaster Recovery",
          description: "Robust backup and recovery solutions to protect your critical data assets.",
          icon: "Shield"
        },
        {
          title: "Cost Optimization",
          description: "Strategic resource management to reduce operational costs while maintaining quality.",
          icon: "TrendingUp"
        },
        {
          title: "Seamless Cloud Migrations",
          description: "Expert migration services with minimal downtime and maximum data integrity.",
          icon: "Globe"
        },
      ]}
      offerings={features}
    />
  );
}
