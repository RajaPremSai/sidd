import { ServicePageLayout } from "@/components/service-layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Java Development Company in Hyderabad | Enterprise Java Solutions",
  description: "Custom Java application development, microservices architecture, and enterprise integration services by Siddidharmika.",
};

export default function JavaConsultingPage() {
  return (
    <ServicePageLayout
      title="Java Consulting Services"
      subtitle="Building Scalable, Secure, and Future-Proof Enterprise Applications"
      description={`
        Java remains the backbone of enterprise software. At Siddidharmika, we leverage the full power of the Java ecosystem to deliver robust, scalable, and secure applications.
        
        From custom application development to modernizing legacy systems, our seasoned Java architects and developers ensure your technology stack is agile and aligned with your long-term business goals. We specialize in Spring Boot, Microservices, and Cloud-Native development.
      `}
      benefits={[
        {
            title: "Enterprise-Grade Security",
            description: "We implement rigorous security standards to protect your applications and data.",
            icon: "Shield"
        },
        {
            title: "Scalable Microservices",
            description: "Decoupled architectures that scale independently and offer high availability.",
            icon: "Server"
        },
        {
            title: "High Performance",
            description: "Optimized code and infrastructure for low-latency, high-throughput systems.",
            icon: "Cloud"
        }
      ]}
      offerings={[
        {
          title: "Custom Java Development",
          description: "Building robust, scalable, and secure enterprise applications using the latest Java EE and Spring technologies.",
        },
        {
          title: "Microservices Architecture",
          description: "Modernizing legacy monoliths into agile microservices using Spring Boot and Docker.",
        },
        {
          title: "API Development & Integration",
          description: "Designing RESTful and GraphQL APIs for seamless integration with third-party services and mobile apps.",
        },
        {
          title: "Java Web Application",
          description: "Full-stack web development using modern frameworks like Spring MVC, Hibernate, and React/Angular frontends.",
        },
        {
          title: "Performance Optimization",
          description: "In-depth profiling and tuning of Java applications to ensure low latency and high throughput.",
        },
        {
          title: "Cloud Native Solutions",
          description: "Developing and deploying Java applications on Cloud platforms (AWS, Azure, OCI) for maximum scalability.",
        },
      ]}
      process={{
          title: "Our Java Development Lifecycle",
          description: "Agile methodologies ensuring transparent and rapid delivery.",
          steps: [
              { title: "Requirement Analysis", description: "Deep dive into your business needs and technical constraints." },
              { title: "Architecture Design", description: "Selecting the right patterns and stack for scalability." },
              { title: "Agile Development", description: "Iterative sprints with regular demos and feedback loops." },
              { title: "Testing & QA", description: "Comprehensive unit, integration, and performance testing." },
              { title: "Deployment & Support", description: "CI/CD pipelines and 24/7 post-deployment support." }
          ]
      }}
    />
  );
}

function Shield(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      </svg>
    )
}
