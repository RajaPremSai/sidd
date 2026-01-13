import { ServicePageLayout } from "@/components/service-layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data & Analytics Services | Azure Data, Databricks, Power BI",
  description: "Unlock the value of your data with our advanced analytics and data engineering services.",
};

export default function DataPage() {
  return (
    <ServicePageLayout
      title="Data & Analytics"
      subtitle="Turning Raw Data into Actionable Insights"
      description="Data is the new oil. We help you refine it. From building robust data lakes to creating interactive dashboards, our Data & Analytics practice empowers you to make evidence-based decisions."
      benefits={[
        { title: "Data Democratization", description: "Make data accessible to every decision maker.", icon: "Database" },
        { title: "Predictive Power", description: "Leverage AI/ML to forecast trends.", icon: "BarChart" },
        { title: "Scalable Pipelines", description: "Process massive volumes of data efficiently.", icon: "Server" },
      ]}
      offerings={[
        { title: "Azure Data Engineering", description: "Modern data warehouse solutions on Azure.", slug: "/services/data/azure-data" },
        { title: "Databricks", description: "Unified analytics platform for data science and engineering.", slug: "/services/data/databricks" },
        { title: "Power BI", description: "Interactive visualization and business intelligence.", slug: "/services/data/power-bi" },
        { title: "Oracle Analytics Cloud", description: "AI-powered analytics for the enterprise.", slug: "/services/data/oac" },
      ]}
    />
  );
}
