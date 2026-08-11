export const personalInfo = {
  name: "Hashim Qureshi",
  fullName: "Hashim Qureshi Chennadan",
  role: "Software Engineer (Backend Developer)",
  title: "Backend Engineering Architect & Microservices Specialist",
  tagline: "Building high-throughput, fault-tolerant Java Spring Boot microservices, healthcare ERP compliance pipelines (FHIR/HL7, NPHIES, ZATCA), and asynchronous event architectures.",
  bio: "Backend Java Developer with 3+ years of experience building scalable microservices using Spring Boot in healthcare ERP systems. Specialized in FHIR/HL7 integrations, insurance workflows (NPHIES), and regulatory systems (ZATCA). Experienced in designing high-performance REST APIs, asynchronous processing (ActiveMQ/Kafka), and deploying production-ready applications using Docker and CI/CD pipelines.",
  email: "hashimchennadan@gmail.com",
  phone: "+91 8943392653",
  linkedin: "https://www.linkedin.com/in/hashimqureshic",
  github: "https://github.com/qureshi01",
  location: "India / Remote Available",
  profilePhoto: "/assets/profile.jpg",
  experienceYears: "3+",
  education: [
    {
      degree: "Bachelor of Technology (Mechanical Engineering)",
      institution: "SRM Institute of Science and Technology",
      period: "2019 – 2023",
      score: "GPA: 8.43",
      badge: "Honors Graduate"
    },
    {
      degree: "Full Stack Java Developer Certification",
      institution: "Jspiders / Excelr Institute, Bangalore",
      period: "2023 – 2024",
      score: "Certified Specialist",
      badge: "Professional Training"
    }
  ],
  languages: [
    { name: "English", level: "Professional Working Proficiency" },
    { name: "Malayalam", level: "Native / Bilingual Proficiency" },
    { name: "Hindi & Arabic", level: "Elementary Reading & Speaking" }
  ]
};

export const typingTexts = [
  "Java 21 & Spring Boot Microservices",
  "Healthcare FHIR / HL7 Data Pipelines",
  "NPHIES & ZATCA Regulatory Compliance",
  "Kafka & ActiveMQ Async Event Bus",
  "Spring Cloud Gateway & Eureka Service Discovery",
  "Docker & NGINX Reverse Proxy Infrastructure",
  "PostgreSQL & MongoDB (100M+ Records)"
];

export const skillsCategory = [
  {
    category: "Backend Architecture & Core",
    icon: "Server",
    skills: [
      { name: "Java (8 / 11 / 17 / 21)", level: 95, tag: "Primary Language" },
      { name: "Spring Boot & Spring MVC", level: 95, tag: "Core Framework" },
      { name: "Spring Data JPA & Hibernate", level: 90, tag: "ORM / Persistence" },
      { name: "Quarkus", level: 80, tag: "Cloud Native" },
      { name: "Microservices & REST APIs", level: 95, tag: "Architecture" },
      { name: "JWT & Spring Security", level: 90, tag: "Auth Guard" },
      { name: "OpenFeign Client & Ribbon", level: 88, tag: "Inter-service" },
      { name: "ActiveMQ & Apache Kafka", level: 88, tag: "Event Bus" },
      { name: "FHIR & HL7 Standards", level: 92, tag: "Healthcare Specs" }
    ]
  },
  {
    category: "DevOps, Cloud & Storage",
    icon: "Cloud",
    skills: [
      { name: "Docker & Container Management", level: 88, tag: "Containerization" },
      { name: "NGINX (Reverse Proxy & Load Balancer)", level: 85, tag: "Gateway" },
      { name: "MinIO (S3-Compatible Storage)", level: 82, tag: "Object Storage" },
      { name: "Jenkins CI/CD Pipelines", level: 80, tag: "Automation" },
      { name: "Git & Maven", level: 92, tag: "Build & VCS" },
      { name: "Linux Production Servers", level: 85, tag: "Environment" }
    ]
  },
  {
    category: "Database & Quality Assurance",
    icon: "Database",
    skills: [
      { name: "PostgreSQL (Relational SQL)", level: 90, tag: "Primary DB" },
      { name: "MongoDB (NoSQL Document Store)", level: 88, tag: "100M+ Records" },
      { name: "JUnit 5 & Mockito", level: 85, tag: "Unit Testing" },
      { name: "Postman & Swagger / OpenAPI", level: 95, tag: "API Docs & Test" },
      { name: "DBeaver & Database Seeding", level: 90, tag: "DB Admin" }
    ]
  },
  {
    category: "Frontend & Presentation",
    icon: "Layout",
    skills: [
      { name: "React 18 & JavaScript (ES6+)", level: 82, tag: "SPA Framework" },
      { name: "Bootstrap 5 & HTML5 / CSS3", level: 88, tag: "Styling" },
      { name: "ThymeLeaf & JSP", level: 85, tag: "Server Templating" },
      { name: "Responsive UI & Cross-Browser", level: 90, tag: "UX Optimization" }
    ]
  }
];

export const experienceData = [
  {
    role: "Software Engineer",
    company: "Keype Systems Pvt Ltd",
    period: "2024 July – Present",
    type: "Full-Time",
    location: "India",
    summary: "Key backend developer architecting microservices-based Healthcare ERP systems and handling high-volume transactions, regulatory compliance, and cloud deployments.",
    highlights: [
      "Developed microservices-based Healthcare ERP using Spring Boot with Database-per-Service architecture.",
      "Implemented HL7 & FHIR standards for interoperable healthcare data exchange across hospitals and diagnostic systems.",
      "Engineered high-throughput REST APIs designed for high-volume healthcare transactions.",
      "Integrated NPHIES (Saudi Arabia Insurance Portal) and ZATCA Phase 2 E-Invoicing workflows with cryptographic payload signing.",
      "Leveraged ActiveMQ and Apache Kafka for asynchronous processing, message queueing, and event-driven microservices.",
      "Managed MySQL & MongoDB databases handling high dataset scale (~100M+ patient records).",
      "Configured NGINX reverse proxies, Docker containers, CI/CD automated deployment pipelines.",
      "Documented all API endpoints using Swagger/OpenAPI 3.0 and reduced production incidents through test-driven development (JUnit/Mockito)."
    ],
    telemetryEndpoint: "GET /api/v1/experience/keype-systems",
    badge: "Healthcare ERP & Compliance"
  },
  {
    role: "Full Stack Developer Intern",
    company: "Ai Variant",
    period: "2023 – 2024",
    type: "Internship",
    location: "Bangalore",
    summary: "Built end-to-end e-commerce applications, RESTful services, and database integration workflows.",
    highlights: [
      "Developed a full-stack pharmacy e-commerce application using React frontend and Spring Boot backend.",
      "Built and consumed secure RESTful APIs for product management, user authentication, shopping cart, and transaction flow.",
      "Designed intuitive and responsive UI layout to enhance user accessibility and order conversion.",
      "Integrated MySQL database with Spring Data JPA for normalized schema management.",
      "Executed comprehensive manual & functional API testing with Postman to ensure seamless frontend-backend synchronization."
    ],
    telemetryEndpoint: "GET /api/v1/experience/aivariant",
    badge: "Full Stack Development"
  }
];

export const projectsData = [
  {
    id: "microservices-ecommerce",
    title: "E-Commerce Microservices Platform",
    subtitle: "Spring Boot Microservices + Cloud Gateway + Eureka Discovery",
    category: "Microservices & Distributed Systems",
    github: "https://github.com/qureshi01/E-commerce-Website-Microservices",
    demoUrl: "#",
    badge: "Distributed Systems",
    architecture: {
      gateway: "Spring Cloud API Gateway (Port 9090)",
      discovery: "Netflix Eureka Service Registry",
      auth: "JWT (JSON Web Token) Security Filter",
      pattern: "Database-per-Service (Isolated DB per domain)",
      feign: "OpenFeign + Ribbon Load Balancer"
    },
    description: "Enterprise-grade microservices architecture supporting multi-role e-commerce operations with RBAC security and stateless authentication.",
    points: [
      "Architected separate microservices (Auth, Product Catalog, Order Service, Delivery Management) running on Eureka Registry.",
      "Centralized API Gateway listening on port 9090 to route requests, handle CORS, and validate JWT tokens prior to service dispatch.",
      "Implemented Role-Based Access Control (RBAC) ensuring precise permissions across Admin, Customer, and Delivery agents.",
      "Enforced Database-per-Service pattern using dedicated isolated database instances for fault tolerance and zero cascade failure.",
      "Integrated OpenFeign declarative HTTP client with Ribbon load balancing for inter-service communication."
    ],
    telemetryPayload: {
      endpoint: "POST /api/v1/orders/checkout",
      traceId: "tr-7f9a2b81-ecom",
      status: 201,
      latency: "42ms",
      steps: [
        "1. Client POST to API Gateway :9090",
        "2. JWT Filter verifies RS256 Bearer Signature",
        "3. Eureka Routing -> Order-Service instance #2",
        "4. OpenFeign call -> Inventory-Service reserveStock()",
        "5. Kafka Event Published: topic='order-placed-events'",
        "6. DB Transaction Committed to Order DB (PostgreSQL)"
      ]
    }
  },
  {
    id: "appointment-booking",
    title: "Clinical Appointment Booking System",
    subtitle: "React + Spring Boot + Health Vitals Tracker",
    category: "Healthcare & Full-Stack",
    github: "https://github.com/qureshi01/Appointment-Booking",
    demoUrl: "#",
    badge: "Healthcare System",
    architecture: {
      frontend: "React 18 + React Router",
      backend: "Spring Boot 3 + Spring Data JPA",
      engine: "Dual Slot Engine (Pre-scheduled & Walk-in)",
      db: "H2 (Development) / MySQL (Production)"
    },
    description: "Comprehensive clinic app managing patient check-ins, doctor availability matrix, and real-time vital metrics logging.",
    points: [
      "Created a dual booking engine supporting both pre-scheduled appointment time slots and immediate walk-in queues.",
      "Built a health vitals tracker module recording patient blood pressure, SpO2, pulse rate, and body temperature.",
      "Utilized Spring Data JPA & Hibernate for clean object-relational mapping and optimized auto-indexed queries.",
      "Implemented automated database seeding scripts to load demo doctors, schedules, and test patient profiles on startup.",
      "Designed responsive React single-page frontend with real-time slot availability sync."
    ],
    telemetryPayload: {
      endpoint: "POST /api/v1/appointments/book",
      traceId: "tr-3c819d44-clinic",
      status: 200,
      latency: "35ms",
      steps: [
        "1. REST API validation: Doctor availability slot check",
        "2. Vitals schema check (SpO2, BP, Temp range validation)",
        "3. Spring Data JPA lock on slot ID #1402",
        "4. Hibernate SQL INSERT into appointments table",
        "5. 200 OK returned with appointment Ticket JSON"
      ]
    }
  },
  {
    id: "medipharma-ecommerce",
    title: "MediPharma E-Commerce & Pharmacy Engine",
    subtitle: "React 18 Context API + Spring Boot 3 + Spring Mail",
    category: "E-Commerce & Pharmacy",
    github: "https://github.com/qureshi01/MediPharma-Ecommerce",
    demoUrl: "#",
    badge: "Pharmacy Automation",
    architecture: {
      frontend: "React 18 + Context API State Management",
      backend: "Spring Boot 3 + Spring Mail Service",
      security: "CORS Configured Security Filters",
      storage: "MySQL Normalized Pharmacy Schema"
    },
    description: "Online pharmacy store featuring therapeutic category filters, session-persistent shopping carts, and automated notification triggers.",
    points: [
      "Searchable medicine catalog with real-time therapeutic category filtering and automated discount pricing engine.",
      "Persistent cart state powered by React Context API and secure cookie storage across user sessions.",
      "Integrated Spring Mail module to send immediate SMTP email notifications upon order placement and dispatch.",
      "Configured robust CORS security settings for safe cross-origin API calls between React frontend and Spring Boot server."
    ],
    telemetryPayload: {
      endpoint: "POST /api/v1/medipharma/cart/checkout",
      traceId: "tr-9e12bf40-medi",
      status: 200,
      latency: "58ms",
      steps: [
        "1. Context API flushes cart state to API payload",
        "2. Spring Boot order validation & stock verification",
        "3. Async Spring Mail task queued to background worker",
        "4. MySQL transaction committed (Order ID: #MP-88392)",
        "5. Order receipt dispatched to user email"
      ]
    }
  }
];

export const certificateData = {
  title: "Certificate of Internship",
  issuedTo: "Hashim Qureshi Chennadan",
  role: "Full Stack Java Developer",
  issuer: "AiVariant",
  period: "18th Feb 2024 to 18th May 2024",
  issueDate: "19th May 2024",
  certificateCode: "AIV/23-24/Q2/05/1030",
  signatory: "C. Srmf (Program Director)",
  image: "/assets/certificate-aivariant.png",
  verifiedJwtToken: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJIYXNoaW0gUXVyZXNoaCBDaGVubmFkYW4iLCJpc3MiOiJBaVZhcmlhbnQiLCJjb2RlIjoiQUlWLzIzLTI0L1EyLzA1LzEwMzAiLCJpYXQiOjE3MTYwNzY4MDB9.VerifiedCryptographicSignature"
};
