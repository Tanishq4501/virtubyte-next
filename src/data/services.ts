export const services = [
  {
    id: "salesforce-implementation",
    title: "Salesforce Consulting & Implementation",
    tagline: "Maximize Your Salesforce Investment",
    description: "We help businesses maximize their Salesforce investment with tailored CRM configurations, automation workflows, system integrations, and user adoption strategies.",
    image: "/images/services/salesforce-implementation.jpg",
    href: "/services/salesforce-implementation/",
  },
  {
    id: "ai-ml-consulting",
    title: "AI & Machine Learning Solutions",
    tagline: "Transform Unstructured Data into Foresight",
    description: "Our AI and ML consulting services help businesses automate repetitive tasks, forecast trends, tailor customer experiences, and enhance operational efficiency.",
    image: "/images/services/ai-ml-consulting.png",
    href: "/services/ai-ml-consulting/",
  },
  {
    id: "data-science-analytics",
    title: "Data Science & Business Analytics",
    tagline: "Data Should Guide Decisions",
    description: "We design analytics frameworks, dashboards, and predictive models that assist leadership teams to identify opportunities, reduce risks, and improve performance.",
    image: "/images/services/data-science-analytics.png",
    href: "/services/data-science-analytics/",
  },
  {
    id: "offshore-development-centers",
    title: "Offshore Development Teams",
    tagline: "Technical Talent Without Expanding Overhead",
    description: "We offer dedicated offshore development teams that integrate seamlessly with your internal processes, providing flexibility, cost efficiency, and faster implementation.",
    image: "/images/services/offshore-development-centers.png",
    href: "/services/offshore-development-centers/",
  },
  {
    id: "cloud-services",
    title: "Cloud Infrastructure & Migration",
    tagline: "Modern Infrastructure for Modern Businesses",
    description: "We offer cloud consulting & migration services across AWS, Azure & hybrid environments, ensuring seamless transitions, optimized performance & cost control.",
    image: "/images/services/cloud-services.png",
    href: "/services/cloud-services/",
  },
  {
    id: "devops-consulting-services",
    title: "DevOps & Continuous Integration",
    tagline: "Accelerate Development Without Compromising Stability",
    description: "We implement CI/CD pipelines, automate infrastructure, and build scalable environments that improve both deployment speed and system reliability.",
    image: "/images/services/devops-consulting-services.png",
    href: "/services/devops-consulting-services/",
  },
];

export const serviceDetails: Record<string, {
  title: string;
  breadcrumb: string;
  sections: {
    heading?: string;
    cards: { title: string; description: string; image?: string; features?: string[] }[];
  }[];
}> = {
  "salesforce-implementation": {
    title: "Salesforce Implementation & CRM Consulting Services",
    breadcrumb: "Salesforce Implementation",
    sections: [
      {
        heading: "What We Do",
        cards: [
          {
            title: "Salesforce Implementation & Customization",
            description:
              "End-to-end Salesforce setup and deployment including custom object and field configuration, workflow automation, approval processes, Sales Cloud and Service Cloud configuration, and dashboard and reporting customization. We ensure your CRM mirrors your exact business workflows.",
            image: "/images/services/sf-implementation-customization.jpg",
          },
          {
            title: "CRM Strategy & Customization",
            description:
              "A successful CRM system starts with the right strategy. Our services include CRM adoption roadmap, sales process optimization, marketing automation alignment, customer lifecycle mapping, and ROI and performance analysis powered by Salesforce analytics.",
            image: "/images/services/crm-strategy.jpg",
          },
          {
            title: "AppExchange App Setup & Custom Development",
            description:
              "We extend platform capabilities through AppExchange app evaluation and setup, third-party system integrations, custom Lightning component development, and API integrations with ERP, marketing, and finance tools to create a unified technology ecosystem.",
            image: "/images/services/appexchange.jpg",
          },
          {
            title: "Data Migration & Integration",
            description:
              "Secure data transition is critical during CRM implementation. Our services include secure migration from legacy CRM systems, data cleansing and normalization, ETL process setup, and ongoing data management and governance with minimal disruption.",
            image: "/images/services/data-collection.png",
          },
          {
            title: "Salesforce Integration & Deployment",
            description:
              "Seamless integration with marketing platforms, ERP systems, and customer portals through API-based system connectivity, automation workflows, and testing and go-live support. We also implement Salesforce AI services to enable predictive insights and enhanced reporting.",
            image: "/images/services/cloud-integration.png",
          },
        ],
      },
    ],
  },
  "ai-ml-consulting": {
    title: "AI & Machine Learning Consulting Services",
    breadcrumb: "AI & ML Consulting",
    sections: [
      {
        cards: [
          {
            title: "AI Strategy & Advisory",
            description: "Define a structured AI adoption roadmap, identify high-impact use cases, conduct feasibility and ROI analysis, and align AI initiatives with business KPIs",
            image: "/images/new_img/Consultation and Requirement Gathering.jpeg",
          },
          {
            title: "ML Model Development",
            description: "Design and deploy custom machine learning models including predictive analytics, recommendation engines, classification, regression, and time-series forecasting systems",
            image: "/images/services/ml-model-dev.png",
          },
          {
            title: "AI Conversational Tools",
            description: "Build AI-powered chatbots, virtual assistants, NLP-based customer interaction systems, and automated support workflows to reduce manual workload",
            image: "/images/services/ai-conversational.png",
          },
          {
            title: "Data Preparation & Preprocessing",
            description: "Handle data cleansing, normalization, ETL pipelines, feature engineering, and structured dataset preparation to ensure higher model accuracy",
            image: "/images/new_img/Data Preparation & Preprocessing.jpeg",
          },
          {
            title: "AI Integration & Deployment",
            description: "Seamlessly integrate AI into existing ecosystems with API integrations, enterprise system connectivity, CI/CD workflows, and cloud-based deployment across AWS and Azure",
            image: "/images/services/ai-integration.png",
          },
        ],
      },
    ],
  },
  "data-science-analytics": {
    title: "Data Science & Analytics Consulting Services for Business Growth",
    breadcrumb: "Data Science & Analytics",
    sections: [
      {
        heading: "Our Data Science & Analytics Services",
        cards: [
          {
            title: "Data Strategy & Analytics Advisory",
            description: "We help leadership teams define how analytics supports revenue, operational efficiency, and customer growth through structured business intelligence consulting.",
            image: "/images/services/data-collection.png",
            features: ["Data Maturity Assessment", "Enterprise Analytics Roadmap", "KPI Alignment & ROI Modeling", "Governance & Compliance Strategy"],
          },
          {
            title: "Data Engineering & Integration",
            description: "We build scalable data engineering systems that power business intelligence and predictive analytics solutions.",
            image: "/images/new_img/Data Collection & Integration.jpeg",
            features: ["Data Pipeline Architecture", "ETL & ELT Workflows", "Data Warehouse Implementation", "Cloud Migration & Modernization"],
          },
          {
            title: "Predictive Modeling & ML Analytics",
            description: "Move from reactive to predictive — we help organizations anticipate market behavior and make proactive decisions.",
            image: "/images/services/data-preprocessing.png",
            features: ["Forecasting & Trend Modeling", "Risk & Fraud Detection", "Customer Churn Prediction", "AI-Powered Analytics Models"],
          },
          {
            title: "Business Intelligence & Reporting",
            description: "Our business intelligence consulting services empower teams with real-time visibility and data transparency.",
            image: "/images/services/data-visualization.jpg",
            features: ["Executive Dashboards", "Interactive Visualization Tools", "Self-Service Analytics Platforms", "Performance Reporting Automation"],
          },
          {
            title: "Big Data & Scalable Data Platforms",
            description: "We specialize in cloud data analytics services that scale with your organization's growth.",
            image: "/images/new_img/Data Preparation & Preprocessing.jpeg",
            features: ["Distributed Data Processing", "Real-Time Analytics Infrastructure", "Cloud-Native Analytics (AWS/Azure)", "Enterprise Data Lake Design"],
          },
        ],
      },
    ],
  },
  "offshore-development-centers": {
    title: "Offshore Development Center (ODC) Services for Scalable Business Growth",
    breadcrumb: "Offshore Development Centers",
    sections: [
      {
        heading: "Our ODC Services",
        cards: [
          {
            title: "ODC Strategy & Setup Consulting",
            description: "We help you design the right offshore engagement model from day one with full transparency and measurable ROI.",
            image: "/images/services/consultation.png",
            features: ["Engagement Model Planning", "Team Structure Design", "Infrastructure & Compliance", "Cost Optimization Roadmap"],
          },
          {
            title: "Dedicated Development Teams",
            description: "Build a full-time offshore software engineering team aligned with your business objectives.",
            image: "/images/services/full-cycle-teams.png",
            features: ["Frontend & Backend Developers", "DevOps Engineers", "Cloud Architects & QA", "Data Engineers & Analytics"],
          },
          {
            title: "Product Development & Engineering",
            description: "From concept to production, we support complete software lifecycle development.",
            image: "/images/services/development.png",
            features: ["Custom Software Development", "Web & Mobile Applications", "Enterprise Modernization", "Scalable SaaS Engineering"],
          },
          {
            title: "DevOps & Agile Delivery Management",
            description: "DevOps is at the core of modern ODC success — streamlining release cycles and reducing deployment risk.",
            image: "/images/services/ongoing-support.png",
            features: ["CI/CD Consulting Services", "DevOps Automation", "Agile Sprint Planning", "Continuous Deployment Workflows"],
          },
          {
            title: "Infrastructure & Cloud Enablement",
            description: "Cloud-native engineering enables scalability and resilience for modern architectures.",
            image: "/images/services/scalability.png",
            features: ["Secure Cloud Setup (AWS/Azure)", "DevOps Cloud Migration", "Infrastructure as Code (IaC)", "Data Security & Governance"],
          },
        ],
      },
    ],
  },
  "cloud-services": {
    title: "Cloud Consulting & Cloud Services for Scalable Digital Transformation",
    breadcrumb: "Cloud Services",
    sections: [
      {
        heading: "Our Cloud & DevOps Services",
        cards: [
          {
            title: "Cloud Strategy & Advisory",
            description: "We begin with a deep assessment of your current infrastructure and business objectives to ensure cloud adoption is aligned with performance, security, and ROI.",
            image: "/images/services/enterprise-cloud.png",
            features: ["Cloud Readiness Assessment", "Migration Roadmap", "Cost Optimization Strategy", "Platform Selection (AWS/Azure)"],
          },
          {
            title: "Cloud Migration & Modernization",
            description: "We help organizations modernize outdated systems while minimizing operational disruption using proven migration frameworks.",
            image: "/images/services/cloud-migration.png",
            features: ["Application Migration", "Legacy Modernization", "Hybrid & Multi-Cloud", "Zero-Downtime Planning"],
          },
          {
            title: "Cloud Architecture & Engineering",
            description: "Our cloud engineers design scalable, future-ready infrastructure that supports long-term growth and performance.",
            image: "/images/services/cloud-integration.png",
            features: ["Cloud-Native Development", "Microservices Architecture", "Infrastructure as Code (IaC)", "Serverless Computing"],
          },
          {
            title: "DevOps & Cloud Automation",
            description: "We help businesses release software faster, reduce errors, and improve collaboration between development and operations teams.",
            image: "/images/services/cicd.png",
            features: ["CI/CD Pipeline Implementation", "Containerization (Docker/K8s)", "Automated Testing & Deployment", "DevOps Monitoring & Automation"],
          },
          {
            title: "Cloud Security & Governance",
            description: "Security is built into every layer of our cloud implementation — ensuring compliance, protection, and audit-readiness.",
            image: "/images/services/security-compliance.png",
            features: ["Identity & Access Management", "Data Encryption & Protection", "Compliance Frameworks", "Continuous Threat Detection"],
          },
        ],
      },
    ],
  },
  "devops-consulting-services": {
    title: "DevOps Consulting Services for Faster, Reliable, and Scalable Software Delivery",
    breadcrumb: "DevOps Consulting Services",
    sections: [
      {
        heading: "Our DevOps Services",
        cards: [
          {
            title: "DevOps Strategy & Advisory",
            description: "We align DevOps initiatives with your business objectives — from adoption roadmap to toolchain evaluation and ROI analysis.",
            image: "/images/services/devops-consulting.png",
            features: ["DevOps Adoption Roadmap", "Infrastructure Assessment", "Toolchain Evaluation", "Automation Feasibility Analysis"],
          },
          {
            title: "CI/CD Pipeline Implementation",
            description: "We design automated pipelines that reduce manual intervention and accelerate deployment with fewer failures.",
            image: "/images/services/cicd.png",
            features: ["Continuous Integration Setup", "Continuous Delivery Automation", "Git-Based Workflows", "Automated Testing Integration"],
          },
          {
            title: "DevOps Automation & Infrastructure as Code",
            description: "Automation is the foundation of scalable DevOps — reducing configuration errors and improving operational efficiency.",
            image: "/images/services/config-management.png",
            features: ["Infrastructure as Code (IaC)", "Configuration Management", "Automated Provisioning", "Cloud DevOps Consulting"],
          },
          {
            title: "Containerization & Orchestration",
            description: "Modern applications require flexible, portable deployment environments with consistent performance across stages.",
            image: "/images/services/microservices.png",
            features: ["Docker Implementation", "Kubernetes Orchestration", "Microservices Architecture", "Scalable Container Deployment"],
          },
          {
            title: "Monitoring, Logging & Optimization",
            description: "Move from reactive troubleshooting to proactive performance management with real-time monitoring and alerting.",
            image: "/images/new_img/DevOps Consulting Services.jpeg",
            features: ["Real-Time Monitoring", "Centralized Log Management", "Automated Incident Response", "Performance Bottleneck Analysis"],
          },
          {
            title: "Cloud & DevOps Integration",
            description: "DevOps works best when integrated with modern cloud platforms — adopting cloud-first strategies without compromising security.",
            image: "/images/services/security-compliance.png",
            features: ["Cloud-Native Architecture", "Multi-Cloud DevOps", "Secure Cloud Deployments", "DevSecOps Integration"],
          },
        ],
      },
    ],
  },
};
