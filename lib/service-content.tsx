
export interface ServiceContent {
  title: string;
  subtitle: string;
  description: string;
  benefits: { title: string; description: string; icon?: string }[];
  offerings: { title: string; description: string; slug?: string }[];
  process?: {
    title: string;
    description: string;
    steps: { title: string; description: string }[];
  };
}

export const SERVICE_CONTENT: Record<string, ServiceContent> = {
export const SERVICE_CONTENT: Record<string, ServiceContent> = {
  // --- Database Services ---
  "oracle-dba": {
    title: "Oracle DBA Services",
    subtitle: "Proactive Management for Mission-Critical Oracle Environments",
    description: `Maximize the availability, performance, and security of your Oracle databases with our expert DBA services. We provide 24/7 monitoring, health checks, and rapid incident response to ensure your business never stops.
    
    Our team of certified professionals brings decades of experience in managing complex Oracle environments, from legacy systems to the latest 19c and 23c versions. We handle everything from routine maintenance to complex migrations and performance tuning.`,
    benefits: [
      { title: "Zero Data Loss", description: " robust backup and recovery strategies using RMAN and Data Guard.", icon: "Shield" },
      { title: "Peak Performance", description: "Advanced tuning of SQL queries and instance parameters.", icon: "Zap" },
      { title: "24/7 Operations", description: "Round-the-clock surveillance and support.", icon: "Activity" }
    ],
    offerings: [
      { title: "Database Administration", description: "Comprehensive routine maintenance, patching, and upgrades." },
      { title: "High Availability", description: "Implementation of RAC and Data Guard for maximum uptime." },
      { title: "Performance Tuning", description: "Identifying and resolving bottlenecks in real-time." },
      { title: "Migrations", description: "Seamless upgrades and cross-platform migrations." }
    ]
  },
  "mssql": {
    title: "MS SQL Server Services",
    subtitle: "Enterprise-Grade SQL Server Management & Optimization",
    description: `Leverage the full power of Microsoft SQL Server with our comprehensive managed services. We specialize in designing, deploying, and maintaining highly available SQL Server environments on-premise and in Azure.`,
    benefits: [
      { title: "AlwaysOn Availability", description: "Expert configuration of Availability Groups.", icon: "Server" },
      { title: "Secure Data", description: "TDE implementation and rigorous auditing.", icon: "Shield" },
      { title: "Azure Integration", description: "Seamless hybrid cloud setups.", icon: "Cloud" }
    ],
    offerings: [
        { title: "Health Checks", description: "Comprehensive audit of your SQL Server estate." },
        { title: "Consolidation", description: "Reducing licensing costs through efficient instance consolidation." },
        { title: "BI Support", description: "Management of SSIS, SSAS, and SSRS components." }
    ]
  },
  "mysql": {
      title: "MySQL Administration",
      subtitle: "High-Performance Open Source Database Management",
      description: "Scale your web applications and e-commerce platforms with our expert MySQL services. We optimize for high concurrency and low latency.",
      benefits: [
          { title: "Cost Efficiency", description: "Maximize performance on open-source infrastructure.", icon: "TrendingUp" },
          { title: "Replication", description: "Setup of complex replication topologies.", icon: "Share2" },
          { title: "Scalability", description: "Horizontal scaling (sharding) expertise.", icon: "Globe" }
      ],
      offerings: [
          { title: "Performance Tuning", description: "Query optimization and index design." },
          { title: "Cluster Management", description: "Galera Cluster and InnoDB Cluster support." },
          { title: "Cloud RDS", description: "Management of AWS RDS for MySQL and Azure Database for MySQL." }
      ]
  },
   "postgresql": {
      title: "PostgreSQL Services",
      subtitle: "Advanced Object-Relational Database Solutions",
      description: "Harness the robustness and extensibility of PostgreSQL. Our experts handle everything from geospatial data (PostGIS) to complex JSON workloads.",
      benefits: [
          { title: "Advanced Features", description: "Expertise in JSONB, partitioning, and FDW.", icon: "Code" },
          { title: "Reliability", description: "ACID compliance and WAL archiving.", icon: "Shield" },
          { title: "Migration", description: "Oracle to PostgreSQL migration specialists.", icon: "TrendingUp" }
      ],
      offerings: [
          { title: "Schema Design", description: "Optimized data modeling for relational and NoSQL capabilities." },
          { title: "High Availability", description: "Patroni and HAProxy configurations." },
          { title: "Managed Services", description: "AWS Aurora and Azure Database for PostgreSQL support." }
      ]
  },
  "mongodb": {
      title: "MongoDB Solutions",
      subtitle: "Agile NoSQL Management for Modern Apps",
      description: "Build and scale flexible applications with our MongoDB expertise. We help you design schemas that evolve with your business needs.",
      benefits: [
          { title: "Flexibility", description: "Schema-less design for rapid iteration.", icon: "Layout" },
          { title: "Scalability", description: "Horizontal scaling via sharding.", icon: "TrendingUp" },
          { title: "Real-time Data", description: "Change streams and aggregation pipelines.", icon: "Zap" }
      ],
      offerings: [
          { title: "Schema Validation", description: "Enforcing data integrity where needed." },
          { title: "Atlas Management", description: "Expert configuration of MongoDB Atlas clusters." },
          { title: "Performance", description: "Index optimization and query profiling." }
      ]
  },

  // --- Enterprise Solutions ---
  "ebs": {
      title: "Oracle E-Business Suite",
      subtitle: "Streamlining Enterprise Operations",
      description: "Maximize the value of your Oracle EBS investment. We provide technical and functional support for Financials, SCM, and HRMS modules to ensure your enterprise runs smoothly.",
      benefits: [
          { title: "Operational Efficiency", description: "Automated workflows and streamlined processes.", icon: "Zap" },
          { title: "Compliance", description: "Adherence to regulatory standards.", icon: "Shield" },
          { title: "Integration", description: "Seamless data flow between EBS and other systems.", icon: "Share2" }
      ],
      offerings: [
          { title: "Upgrades", description: "Upgrade to R12.2 with minimal disruption." },
          { title: "Customization", description: "OAF enhancements and custom reports." },
          { title: "Managed Support", description: "24/7 technical and functional assistance." }
      ]
  },
  "fusion": {
      title: "Oracle Fusion Cloud",
      subtitle: "Next-Generation Cloud ERP",
      description: "Transition to the future with Oracle Fusion Cloud Applications. We guide you through the migration and adoption journey, unlocking the power of AI-driven ERP.",
      benefits: [
          { title: "Innovation", description: "Quarterly updates with AI/ML features.", icon: "Lightbulb" },
          { title: "Agility", description: "Rapid deployment of new business models.", icon: "Zap" },
          { title: "Insight", description: "Embedded analytics for better decision making.", icon: "BarChart" }
      ],
      offerings: [
          { title: "Implementation", description: "End-to-end implementation of ERP, HCM, and SCM clouds." },
          { title: "Integrations", description: "OIC (Oracle Integration Cloud) based connections." },
          { title: "Support", description: "Post-go-live support and enhancement services." }
      ]
  },
  "sap": {
      title: "SAP Solutions",
      subtitle: "Intelligent Enterprise Resource Planning",
      description: "Unlock the power of the Intelligent Enterprise with our SAP consulting services. We support S/4HANA migrations and ongoing landscape management.",
      benefits: [
          { title: "Real-time Data", description: "HANA in-memory computing.", icon: "Zap" },
          { title: "Standardization", description: "Best-practice business processes.", icon: "Layout" },
          { title: "Scalability", description: "Solutions that grow with your global footprint.", icon: "Globe" }
      ],
      offerings: [
          { title: "S/4HANA Migration", description: "Greenfield and Brownfield implementation strategies." },
          { title: "Basis Administration", description: "Expert technical management of SAP landscapes." },
          { title: "Fiori UX", description: "Modernizing user experience with SAP Fiori." }
      ]
  },
  "exadata": {
      title: "Oracle Exadata",
      subtitle: "Extreme Performance for Database Workloads",
      description: "Get the most out of your Exadata investment. Our specialists tune and manage these engineered systems for unparalleled throughput and consolidation density.",
      benefits: [
          { title: "Extreme Performance", description: "Smart Scan and Hybrid Columnar Compression.", icon: "Zap" },
          { title: "Consolidation", description: "Massive database consolidation capabilities.", icon: "Server" },
          { title: "Reliability", description: "Fault-tolerant hardware and software stack.", icon: "Shield" }
      ],
      offerings: [
          { title: "Patching", description: "Complex full-stack patching (Quarterly Full Stack Download)." },
          { title: "Consolidation Planning", description: "Capacity planning and density optimization." },
          { title: "Cloud @ Customer", description: "Management of Exadata Cloud at Customer (ExaCC)." }
      ]
  },
  "oda": {
      title: "Oracle Database Appliance",
      subtitle: "Simple, Reliable, Affordable",
      description: "Deploy highly available database solutions quickly with ODA. We manage the entire lifecycle from deployment to patching, specifically tailored for small to mid-sized enterprises.",
      benefits: [
          { title: "Simplicity", description: "Appliance model for easy deployment.", icon: "Layout" },
          { title: "Cost Savings", description: "Capacity-on-demand licensing.", icon: "TrendingUp" },
          { title: "Integration", description: "Engineered hardware and software integration.", icon: "Code" }
      ],
      offerings: [
          { title: "Deployment", description: "Rapid provisioning of bare metal or virtualized ODA." },
          { title: "Patching", description: "Single-bundle patching for the entire stack." },
          { title: "Migration", description: "Migrating standard workloads to ODA." }
      ]
  },

  // --- Cloud Services ---
  "aws": {
      title: "Amazon Web Services",
      subtitle: "Architecting the Future on AWS",
      description: "Leverage the breadth and depth of AWS. We design secure, scalable, and cost-effective cloud architectures tailored to your needs, from serverless computing to data lakes.",
      benefits: [
          { title: "Innovation", description: "Access to the broadest set of cloud services.", icon: "Lightbulb" },
          { title: "Global Scale", description: "Deploy globally in minutes.", icon: "Globe" },
          { title: "Security", description: "Deep visibility and control.", icon: "Shield" }
      ],
      offerings: [
          { title: "Cloud Migration", description: "Rehosting, replatforming, and refactoring strategies." },
          { title: "DevOps", description: "CI/CD pipelines using AWS CodePipeline and CodeBuild." },
          { title: "Managed Services", description: "24/7 monitoring and cost optimization." }
      ]
  },
  "azure": {
      title: "Microsoft Azure",
      subtitle: "Hybrid Cloud Solutions for the Enterprise",
      description: "Extend your IT estate to the cloud with Azure. We specialize in hybrid scenarios, data services, and app modernization, ensuring seamless integration with your Microsoft ecosystem.",
      benefits: [
          { title: "Hybrid Ready", description: "Seamless connection with on-premise Windows Server/SQL.", icon: "Share2" },
          { title: "Productivity", description: "Integrated tools for developer velocity.", icon: "Code" },
          { title: "Compliance", description: "Comprehensive compliance certifications.", icon: "Shield" }
      ],
      offerings: [
          { title: "Azure Arc", description: "Managing resources across environments." },
          { title: "App Service", description: "Modernizing .NET applications to PaaS." },
          { title: "Azure SQL", description: "Migrating databases to Azure SQL Managed Instance." }
      ]
  },
  "oci": {
      title: "Oracle Cloud Infrastructure",
      subtitle: "The Best Cloud for Oracle Databases",
      description: "Run your Oracle workloads where they perform best. We are OCI experts, helping you lift and shift EBS, PeopleSoft, or custom Oracle databases to a high-performance cloud application.",
      benefits: [
          { title: "Performance", description: "Non-blocking networks and high-performance compute.", icon: "Zap" },
          { title: "Economics", description: "Competitive pricing and predictable costs.", icon: "TrendingUp" },
          { title: "Security", description: "Security-first architecture.", icon: "Shield" }
      ],
      offerings: [
          { title: "Oracle Workloads", description: "Moving EBS, Peoplesoft, and JD Edwards to OCI." },
          { title: "Autonomous DB", description: "Leveraging self-driving database technology." },
          { title: "Networking", description: "FastConnect and VCN architecture design." }
      ]
  },

  // --- Data & Analytics ---
  "azure-data": {
      title: "Azure Data Engineering",
      subtitle: "Transforming Data into Assets",
      description: "Build modern data warehouses and lakes on Azure. We design ETL/ELT pipelines that deliver timely insights using Azure Synapse and Data Factory.",
      benefits: [
          { title: "Scalability", description: "Handle petabytes of data effortlessly.", icon: "Server" },
          { title: "Integration", description: "Unified governance with Azure Purview.", icon: "Share2" },
          { title: "Speed", description: "Rapid data ingestion and processing.", icon: "Zap" }
      ],
      offerings: [
          { title: "Azure Synapse", description: "Unified analytics service implementation." },
          { title: "Data Factory", description: "Orchestrating complex data workflows." },
          { title: "Data Lake", description: "Structuring unstructured data for analytics." }
      ]
  },
  "databricks": {
      title: "Databricks Solutions",
      subtitle: "Unified Data Analytics Platform",
      description: "Accelerate innovation by unifying data science, engineering, and business. We implement the Lakehouse architecture using Databricks for reliable data engineering and AI.",
      benefits: [
          { title: "Collaboration", description: "Shared workspace for data teams.", icon: "Users" },
          { title: "Performance", description: "Delta Lake reliability and speed.", icon: "Zap" },
          { title: "Openness", description: "Built on open source technologies.", icon: "Code" }
      ],
      offerings: [
          { title: "Lakehouse Implementation", description: "Combining the best of data warehouses and data lakes." },
          { title: "Spark Jobs", description: "Optimizing Apache Spark workloads." },
          { title: "MLflow", description: "Managing the machine learning lifecycle." }
      ]
  },
  "pyspark": {
      title: "PySpark Development",
      subtitle: "Scalable Big Data Processing",
      description: "Harness the power of Apache Spark with Python. We build efficient, scalable data pipelines capable of processing massive datasets in real-time.",
      benefits: [
          { title: "Scalability", description: "Distributed processing across clusters.", icon: "Server" },
          { title: "Performance", description: "In-memory computation for speed.", icon: "Zap" },
          { title: "Flexibility", description: "Easy integration with data science libraries.", icon: "Code" }
      ],
      offerings: [
          { title: "ETL Pipelines", description: "Building robust ETL/ELT workflows." },
          { title: "Real-time Streaming", description: "Processing live data streams with Spark Streaming." },
          { title: "Performance Tuning", description: "Optimizing code and cluster configurations." }
      ]
  },
  "msbi": {
      title: "Microsoft BI (SSIS/SSAS/SSRS)",
      subtitle: "Traditional Enterprise BI",
      description: "Maintain and modernize your legacy Microsoft BI stack. We ensure your SSIS packages run smoothly, SSAS cubes are optimized, and SSRS reports are delivered on time.",
      benefits: [
          { title: "Reliability", description: "Proven technology stack for enterprise reporting.", icon: "Shield" },
          { title: "Integration", description: "Deep integration with Microsoft ecosystem.", icon: "Share2" },
          { title: "Stability", description: "Robust platform for mission-critical reporting.", icon: "Activity" }
      ],
      offerings: [
          { title: "SSIS Development", description: "Complex ETL package design and maintenance." },
          { title: "SSAS Cubes", description: "Multidimensional and tabular model optimization." },
          { title: "SSRS Reporting", description: "Operational and paginated report creation." }
      ]
  },
  "oac": {
      title: "Oracle Analytics Cloud",
      subtitle: "AI-Powered Modern Analytics",
      description: "Visualize data from any source with OAC. We help you leverage augmented analytics, machine learning, and natural language processing to uncover hidden insights.",
      benefits: [
          { title: "AI/ML", description: "Augmented analytics with explainable AI.", icon: "Lightbulb" },
          { title: "Self-Service", description: "Empowering business users to create their own viz.", icon: "Users" },
          { title: "Connectivity", description: "Connect to on-prem and cloud data sources.", icon: "Share2" }
      ],
      offerings: [
          { title: "Implementation", description: "Deploying and configuring OAC tenants." },
          { title: "Data Visualization", description: "Creating interactive dashboards and stories." },
          { title: "Migration", description: "Moving from OBIEE to OAC." }
      ]
  },
  "power-bi": {
      title: "Power BI Consulting",
      subtitle: "Visualizing Your Business Intelligence",
      description: "Turn data into opportunity with Power BI. We create stunning, interactive dashboards that drive data-driven decision making and foster a data culture.",
      benefits: [
          { title: "Insights", description: "Discover hidden trends and patterns.", icon: "Lightbulb" },
          { title: "Accessibility", description: "Access reports on any device.", icon: "Globe" },
          { title: "Real-time", description: "Live dashboards for operational awareness.", icon: "Activity" }
      ],
      offerings: [
          { title: "Dashboard Design", description: "UX-focused report development." },
          { title: "Data Modeling", description: "Creating robust DAX measures and relationships." },
          { title: "Governance", description: "Managing Power BI workspaces and security." }
      ]
  },

  // --- Consulting ---
  "dotnet": {
      title: "Microsoft .NET Consulting",
      subtitle: "Building Robust Windows & Web Applications",
      description: "Expert development services using the .NET ecosystem, including .NET Core and ASP.NET. We build scalable, high-performance applications for the modern enterprise.",
      benefits: [
          { title: "Performance", description: "High-performance runtime for demanding apps.", icon: "Zap" },
          { title: "Cross-Platform", description: "Run anywhere with .NET Core.", icon: "Globe" },
          { title: "Security", description: "Built-in security features and compliance.", icon: "Shield" }
      ],
      offerings: [
          { title: "Web API Development", description: "Building RESTful services and microservices." },
          { title: "Legacy Modernization", description: "Upgrading ASP.NET Web Forms to Modern Blazor/MVC." },
          { title: "Cloud Native", description: "Deploying .NET apps to Azure App Service." }
      ]
  },
  "plsql": {
      title: "PL/SQL Development",
      subtitle: "Advanced Oracle Database Programming",
      description: "Optimize your Oracle database logic with efficient PL/SQL stored procedures and packages. We ensure your data processing happens close to the data for maximum performance.",
      benefits: [
          { title: "Efficiency", description: "Processing data where it lives reducing network hop.", icon: "Database" },
          { title: "Maintainability", description: "Modular code with packages.", icon: "Code" },
          { title: "Performance", description: "Optimized bulk collect and forall operations.", icon: "Zap" }
      ],
      offerings: [
          { title: "Performance Tuning", description: "Optimizing slow SQL and PL/SQL blocks." },
          { title: "Data Migration Scripts", description: "Complex ETL using pure PL/SQL." },
          { title: "Business Logic Encapsulation", description: "Moving app logic to database layer." }
      ]
  },
  "salesforce": {
      title: "Salesforce Consulting",
      subtitle: "Customer Success Platform",
      description: "Customize and optimize your CRM to drive sales and support efficiency. We help you get the most out of your Salesforce investment with custom Apex and Lightning components.",
      benefits: [
          { title: "Customer 360", description: "Unified view of customer data.", icon: "Users" },
          { title: "Automation", description: "Streamlining workflows with Flow and Apex.", icon: "Zap" },
          { title: "Scalability", description: "Platform that grows with your sales team.", icon: "TrendingUp" }
      ],
      offerings: [
          { title: "Apex Development", description: "Custom logic and triggers." },
          { title: "Lightning Web Components", description: "Modern UI for Salesforce." },
          { title: "Integrations", description: "Connecting Salesforce with ERP and Marketing tools." }
      ]
  },
  "ai": {
      title: "AI Consulting",
      subtitle: "Artificial Intelligence & Machine Learning",
      description: "Integrate AI into your business processes for automation and insight. From chatbots to predictive models, we help you harness the power of AI.",
      benefits: [
          { title: "Innovation", description: "Cutting-edge technology adoption.", icon: "Lightbulb" },
          { title: "Automation", description: "Reducing manual effort with intelligent agents.", icon: "Zap" },
          { title: "Insight", description: "Deep understanding of unstructured data.", icon: "Activity" }
      ],
      offerings: [
          { title: "Generative AI", description: "Implementing LLMs for business context." },
          { title: "Computer Vision", description: "Image and video analysis solutions." },
          { title: "NLP", description: "Natural Language Processing for document analysis." }
      ]
  },
  "bi": {
      title: "BI Consulting",
      subtitle: "Business Intelligence Strategy",
      description: "Defining the roadmap for your data-driven transformation. We help you select the right tools, design the data architecture, and establish governance.",
      benefits: [
          { title: "Strategy", description: "Long-term vision for data usage.", icon: "Globe" },
          { title: "Governance", description: "Ensuring data quality and trust.", icon: "Shield" },
          { title: "Adoption", description: "Driving user engagement with data.", icon: "Users" }
      ],
      offerings: [
          { title: "Tool Selection", description: "Choosing the right stack (Power BI vs Tableau vs OAC)." },
          { title: "Data Warehousing", description: "Designing the single source of truth." },
          { title: "KPI Definition", description: "Aligning metrics with business goals." }
      ]
  },
  "ml": {
      title: "Machine Learning Solutions",
      subtitle: "Predictive Analytics",
      description: "Predict future trends with advanced ML algorithms. We build, train, and deploy models that solve real-world business problems.",
      benefits: [
          { title: "Prediction", description: "Forecasting outcomes with high accuracy.", icon: "Activity" },
          { title: "Personalization", description: "Tailoring experiences for customers.", icon: "Users" },
          { title: "Optimization", description: "Improving operational parameters.", icon: "TrendingUp" }
      ],
      offerings: [
          { title: "Model Training", description: "Custom ML models using Python/R." },
          { title: "MLOps", description: "Deployment and monitoring pipelines." },
          { title: "Data Prep", description: "Feature engineering and data cleaning." }
      ]
  }
};
