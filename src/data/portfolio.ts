export type SkillCategory = {
  title: string;
  summary: string;
  icon: string;
  items: string[];
};

export type Project = {
  title: string;
  category: string;
  summary: string;
  impact: string;
  stack: string[];
  link: string;
  repo: string;
  accent: string;
};

export type Role = {
  title: string;
  company: string;
  period: string;
  summary: string;
  bullets: string[];
};

export type Certificate = {
  title: string;
  issuer: string;
  credential?: string;
  issued?: string;
  file?: string;
};
const startYear = 2025;
const yearsOfExperience = new Date().getFullYear() - startYear;

export const profile = {
  name: "Priyanka Kadam",
  title: "Software Development Engineer • Full Stack Developer",
  headline: "I design and build reliable backend systems, polished interfaces, and performance-oriented software that solves real business problems.",
  intro:
    "Software Development Engineer with experience across backend engineering, data management, and product-focused web applications. I enjoy building scalable systems, improving operational workflows, and turning complex requirements into reliable software with measurable impact.",
  location: "Pune, India",
  email: "itspriyanka.kadam@gmail.com",
  linkedin: "linkedin.com/in/priyankakadam03",
  github: "https://github.com/priyankak3",
  leetcode: "https://leetcode.com/priyankask/",
  portfolio: "",
  hackerrank: "https://www.hackerrank.com/priyanka_kadam1",
  resume: "/Priyanka_Sunil_Kadam_FlowCV_Resume_2026-10-18.pdf",
  yearsOfExperience: `${yearsOfExperience}+ years`,
};


// export const stats = [
//   { label: "CGPA", value: "8.73" },
//   { label: "Class XII marks", value: "96/100" },
//   { label: "LeetCode solved", value: "600+" },
//   { label: "MHT-CET score", value: "99.2068" },
// ];

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: "Code2",
    summary: "Core languages used across software engineering, backend work, and product development.",
    items: ["Java", "Python", "C++", "JavaScript", "TypeScript", "Golang"],
  },
  {
    title: "Frontend",
    icon: "Layers3",
    summary: "Interface and web application development for modern user experiences.",
    items: ["React", "TypeScript", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Backend",
    icon: "Server",
    summary: "API, transaction, and service-layer engineering for enterprise-grade systems.",
    items: ["Spring Boot", "GraphQL", "JPA/Hibernate", "REST APIs"],
  },
  {
    title: "Cloud & Platforms",
    icon: "Cloud",
    summary: "Operational tooling and platform readiness for production software delivery.",
    items: ["GCP Monitoring", "Terraform", "Docker", "OpenShift", "GitHub Actions"],
  },
  {
    title: "Data & AI",
    icon: "BrainCircuit",
    summary: "Data-intensive systems and AI/ML work built around practical engineering constraints.",
    items: ["PyTorch", "BERT", "GANs", "PostgreSQL", "Oracle", "Kafka"],
  },
  {
    title: "Databases",
    icon: "Database",
    summary: "Persistence and data integrity for transactional and operational workflows.",
    items: ["PostgreSQL", "Oracle", "MySQL", "MongoDB"],
  },
];

export const projects: Project[] = [
  {
    title: "Text2FaceGAN",
    category: "AI + Computer Vision",
    summary:
      "Developed a GAN-based model to generate high-resolution facial images from text descriptions, using BERT for text vectorization and a multi-stage refinement process.",
    impact: "Built a complete text-to-image pipeline with generator-discriminator feedback to ensure better fidelity and alignment with the input prompt.",
    stack: ["Python", "PyTorch", "BERT", "GANs"],
    link: "/A_Multi_Stage_Hybrid_Approach_for_Text_to_Face_Generation_using_GAN-9.pdf",
    repo: "",
    accent: "from-violet-500/30 via-fuchsia-500/5 to-cyan-400/20",
  },
  {
    title: "Complaint Ledger System",
    category: "Blockchain + Web App",
    summary:
      "Created a complaint ledger system during a 24-hour hackathon using Solidity smart contracts for secure complaint storage and management on the blockchain.",
    impact: "Built a secure and transparent data flow with blockchain-backed transaction handling and a React-based visualization layer.",
    stack: ["Solidity", "React", "Chart.js", "Blockchain"],
    link: "https://github.com/dewyani/CSI-Hackathon",
    repo: "https://github.com/dewyani/CSI-Hackathon",
    accent: "from-cyan-500/20 via-sky-500/10 to-indigo-500/20",
  },
  {
    title: "Blockchain-Based Product Authentication System",
    category: "Blockchain + Web App",
    summary:
      "Developed a product authentication system using blockchain smart contracts to ensure tamper-proof product data and secure transactions.",
    impact: "Integrated QR code scanning to allow consumers to instantly verify product authenticity and details.",
    stack: ["Blockchain", "Smart Contracts", "QR Code", "Web App"],
    link: "https://github.com/priyankak3/Product-_Authentication_System.git",
    repo: "https://github.com/priyankak3/Product-_Authentication_System.git",
    accent: "from-violet-500/25 via-fuchsia-500/10 to-cyan-500/20",
  },
  {
    title: "Travello",
    category: "Full Stack Web App",
    summary:
      "Built a hotel booking platform enabling travelers to search, book, and manage reservations with real-time availability and authentication.",
    impact: "Designed a useful booking workflow focused on availability, traveler UX, and practical application usability.",
    stack: ["MongoDB", "Express", "React", "Node.js"],
    link: "https://github.com/priyankak3/Trip-Hotel-Search",
    repo: "https://github.com/priyankak3/Trip-Hotel-Search",
    accent: "from-rose-500/20 via-orange-500/10 to-violet-500/20",
  },
];

export const experience: Role[] = [
  {
    title: "Software Development Engineer (SDE1)",
    company: "Deutsche Bank",
    period: "07/2025 – Present | Pune, India",
    summary:
      "Working on enterprise financial transaction systems, optimizing backend performance, and strengthening business transaction processing across securities and cash-transfer disbursement flows.",
    bullets: [
      "Optimized high-volume PostgreSQL workloads by analyzing slow-running queries and database access patterns, improving query throughput by 38% and reducing p95 latency for critical read operations.",
      "Built and enhanced backend transaction-processing flows across securities and cash-transfer disbursement use cases, implementing business validations, persistence logic, approval/rejection handling, and downstream processing using Java, Spring Boot, GraphQL, JPA/Hibernate, and relational databases.",
      "Enhanced transaction reprocessing and failure-recovery flows by tracking persisted transaction and message states to identify failed or non-processed instructions and route eligible transactions back through downstream processing.",
      "Re-engineered a legacy data access module by replacing JAR-based retrieval with an Oracle database function, improving concurrent reads, eliminating lock contention, and simplifying application-layer processing.",
      "Owned production observability for an enterprise financial transaction platform by building Terraform-managed SLO/SLI dashboards, log-based metrics, and alert policies in GCP Monitoring to detect processing delays exceeding 15 minutes and track reference message processing against a 95% within-30-minute SLO.",
    ],
  },
  {
    title: "SDE Intern",
    company: "Deutsche Bank",
    period: "06/2024 – 07/2024 | Pune, India",
    summary:
      "Built an internal data management application using React, TypeScript, and Oracle to support spreadsheet-based operational workflows and enterprise portal integration.",
    bullets: [
      "Developed an internal data management application using React, TypeScript and Oracle, enabling users to import, view, add, and modify spreadsheet-based operational data.",
      "Integrated the application into an enterprise operations portal and deployed it through OpenShift and CI/CD pipelines.",
    ],
  },
];

export const education = [
  {
    title: "Bachelor of Technology in Computer Engineering",
    school: "Sardar Patel Institute of Technology",
    period: "2021 – 2025",
    detail: "CGPA: 8.73",
  },
  {
    title: "Class 12",
    school: "Ramnarain Ruia Autonomous College of Science and Arts",
    period: "2019 – 2021",
    detail: "Marks: 96/100",
  },
];

export const achievements = [
  "Top 1% in Class XII board, with a performance backed by a strong academic foundation and MHT-CET score of 99.2068.",
  "LeetCode: 600+ problems solved; Hackerrank: 5-star problem solving.",
  "Built meaningful software projects spanning AI, blockchain, and full-stack product experiences.",
];

export const certificates: Certificate[] = [
  {
    title: "Google Cloud Certified - Generative AI Leader",
    issuer: "Google Cloud",
    credential: "ID: 1adbd7c46c1a433a9ee5985c2c42f651",
    issued: "Oct 18, 2026",
    file: "/certificates/GenerativeAILeader20261018-20-m0p08e.pdf",
  },
  {
    title: "C++ Course Certificate",
    issuer: "Yeva Hyusyan",
    credential: "Certificate CC-TWECDOUO",
    issued: "11 January, 2024",
    file: "/certificates/4ecde325-75d0-4468-9008-f39bb99ffff8.pdf",
  },
  {
    title: "Java Course Certificate",
    issuer: "Harishankaran K",
    file: "https://www.hackerrank.com/certificates/iframe/c4d080d9078b",
  },
  
];

export const contactLinks = [
  { label: "Email", href: "mailto:itspriyanka.kadam@gmail.com", icon: "Mail" },
  { label: "GitHub", href: "https://github.com/priyankak3", icon: "GitBranch" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/priyanka-sunil-kadam/", icon: "BriefcaseBusiness" },
];
