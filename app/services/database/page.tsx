import { ServicePageLayout } from "@/components/service-layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Database Management Company In Hyderabad | Oracle, SQL, MongoDB",
  description: "Custom Database Management Solutions tailored to your unique needs. We ensure your data is secure, organized, and easily accessible.",
};

export default function DatabasePage() {
  return (
    <ServicePageLayout
      title="Database Management"
      subtitle="Database Solutions Tailored to Your Unique Needs and Goals"
      description={`Looking for a trusted database management company in Hyderabad to streamline your data operations? Our expert team specializes in providing end-to-end database management services that ensure your data is secure, organized, and easily accessible. Whether you’re a startup, SME, or large enterprise, we deliver customized solutions that optimize performance, enhance security, and support seamless database management.`}
      benefits={[
        {
          title: "Optimized Performance",
          description: "Eliminate bottlenecks and ensure data flows seamlessly for peak application responsiveness.",
          icon: "Zap",
        },
        {
          title: "Ironclad Security",
          description: "Proactive threat mitigation and compliance adherence protect your most valuable assets.",
          icon: "Shield",
        },
        {
          title: "Scalability on Demand",
          description: "We architect and manage databases that seamlessly grow with your business needs.",
          icon: "TrendingUp",
        },
      ]}
      offerings={[
        {
          title: "Oracle DBA",
          description: "Gain in-depth expertise for your enterprise-grade Oracle environments, with a focus on proactive measures including proactive monitoring, performance tuning, and preemptive issue prevention designed to safeguard your mission-critical Oracle systems.",
          slug: "/services/database/oracle-dba",
        },
        {
          title: "MS-SQL Server",
          description: "Experience comprehensive database management and optimization services for Microsoft’s robust database platform, addressing niche areas such as high-availability clustering, complex data warehouse optimization, and seamless BI integration.",
          slug: "/services/database/mssql",
        },
        {
          title: "MySQL",
          description: "Benefit from cost-effective, reliable, and performance-tuned MySQL administration services, backed by expertise in optimizing MySQL infrastructures to support high-traffic websites and e-commerce platforms.",
          slug: "/services/database/mysql",
        },
        {
          title: "MongoDB",
          description: "Experience scalable, flexible NoSQL database solutions customized for modern applications, emphasizing adaptability with agile MongoDB solutions crafted to accommodate rapidly evolving data structures and real-time analytics needs.",
          slug: "/services/database/mongodb",
        },
        {
          title: "PostgreSQL",
          description: "Harness robust open-source database expertise to drive your critical workloads, with a feature-focused approach highlighting advanced replication, geographic data handling, and seamless integration with powerful data science tools.",
          slug: "/services/database/postgresql",
        },
      ]}
      process={{
        title: "Navigating Success: Our Proven Database Management Services Process",
        description: "A structured approach ensures that we deliver consistent, high-quality results tailored to your unique requirements.",
        steps: [
          {
            title: "Understanding Your Needs",
            description: "We begin with a comprehensive consultation to understand your specific business goals, data landscape, and challenges."
          },
          {
            title: "Needs Assessment",
            description: "Our team will conduct a thorough assessment of your existing database infrastructure, identifying areas for improvement and scalability."
          },
          {
            title: "Solution Design",
            description: "Based on our findings, we design a customized database solution that aligns with your unique requirements and budget."
          },
          {
            title: "Implementation",
            description: "Our experts will seamlessly implement the chosen solution, ensuring minimal downtime and data integrity."
          },
          {
            title: "Ongoing Maintenance and Optimization",
            description: "We provide ongoing maintenance to ensure your database runs smoothly and efficiently. We also perform regular optimisations to maintain peak performance as your data grows and needs evolve."
          }
        ]
      }}
      ctaTitle="Ready To Unlock Superior Database Solutions?"
    />
  );
}
