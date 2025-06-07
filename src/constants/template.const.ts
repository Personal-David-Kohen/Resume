export const RESUME_TEMPLATE = {
  FULLNAME: "David Kohen",
  PROFESSION: "Full Stack Software Engineer",
  PROLOGUE: [
    "Experienced developer with a strong background in web development and a proven track record of delivering high-quality software solutions.",
    "Passionate about writing scalable, maintainable, and efficient code.",
  ],
  CONTACT: {
    // Confuse those bots! Never hardcode your contact details in plain text.
    PHONE: ["+972", "52", "785", "1778"],
    LINKEDIN: {
      ACCOUNT: "david-kohen",
      HASH: "aa854328a",
      HOST: "https://linkedin.com/in",
      DISPLAY: "LinkedIn: David Kohen",
    },
    EMAIL: {
      ACCOUNT: "personal.david.kohen",
      DOMAIN: "gmail.com",
    },
  },
  EXPERIENCE: [
    {
      TITLE: "Full Stack Software Engineer",
      COMPANY: "MAMRAM, IDF",
      DURATION: "2022 - 2024",
      DESCRIPTION: [
        "Developed and maintained large-scale web applications using microservices architecture implemented with Node.js, and NestJS.",
        `Build scalable React component structures utilizing "Optimistic UI", memoization, complex state management as well as lazy data loading`,
        "Constructed cross-network data exchange mechanisms while prioritizing data integrity and security.",
        "Designed and implemented an efficient and scalable stateless security-group based authorization system was used by multiple B2C clients.",
        "Engineered an event-driven system using for image upload and processing using WebSocket for real-time data synchronization.",
        "Managed all department AWS, OpenShift, and Azure cloud resources and services including EKS, App Services, and Serverless Function Apps",
        "Standardized the Department's OpenShift(Kubernetes) deployment process and rebuild all resources to be deployed with GitOps methodology.",
        "Mentored junior developers and conducted code reviews to ensure code quality and best practices.",
      ],
    },
    {
      TITLE: "Software Architect",
      COMPANY: "Aman Group",
      DURATION: "2024 – Present",
      DESCRIPTION: [
        "Leading the development of scalable data transformation pipelines to support high-throughput data processing.",
        "Designing and implementing a secure, microservices-based data exchange system using Kubernetes and Helm for deployment and orchestration.",
        "Integrating data streams from external providers including Mekorot and Supergas, ensuring reliability, format compliance, and real-time availability.",
        "Collaborating with Microsoft engineers to align system architecture with enterprise security and interoperability standards.",
        "Building a multi-network architecture to ensure data integrity, access control, and secure communication across isolated environments.",
        "Leveraging TypeScript and Node-RED for building modular, maintainable logic flows and service integrations.",
        "Implementing observability and monitoring with Grafana and Splunk to ensure system health, performance insights, and auditability.",
        "Establishing CI/CD pipelines and release workflows using Git and Helm charts to enable reproducible deployments and environment consistency.",
        "Providing architectural oversight and mentoring development teams to uphold best practices in code quality, security, and system design.",
      ],
    },
  ],
  TECH_SKILLS: [
    {
      CATEGORY: "Full Stack",
      SKILLS: [
        "JavaScript",
        "TypeScript",
        "Node.js",
        "React",
        "React-Query",
        "Vite",
        "Redux",
        "Socket.io",
        "Express",
        "NestJS",
        "Microsoft Authentication Library (MSAL)",
        "JSON Web Token (JWT)",
        "Sequelize",
        "MongoDB",
        "MySQL",
        "PostgreSQL",
        "Redis",
        "Jest",
        "Swagger",
        "Postman",
      ],
    },
    {
      CATEGORY: "Cloud and DevOps",
      SKILLS: [
        "RedHat OpenShift",
        "GitLab",
        "GitHub",
        "Azure DevOps",
        "Docker",
        "Kubernetes",
        "AWS EKS",
        "Azure Cloud",
        "GitOps",
        "GitHub Actions",
      ],
    },
  ],
  SOFT_SKILLS: [
    "Critical Thinking",
    "Adaptability",
    "Time Management",
    "Teamwork",
    "Attention to Detail",
    "Agile and Scrum Methodologies",
    "Continuous Learning and Improvement",
  ],
  LANGUAGES: [
    {
      LANGUAGE: "American English",
      PROFICIENCY: "Native",
    },
    {
      LANGUAGE: "Hebrew",
      PROFICIENCY: "Professional working proficiency",
    },
    {
      LANGUAGE: "Russian",
      PROFICIENCY: "Elementary proficiency",
    },
  ],
  AWARDS: [
    {
      TITLE: "Unit-Level Excellence Award",
      DATE: "Rosh Hashanah 2023",
      DESCRIPTION:
        "Bestowed by the commander of the unit after finishing a position as the lead developer on a high-stakes organization-wide project that helped manage a budget of hundreds of millions of shekels.",
    },
  ],
};

export const RESUME_TEMPLATE_WRAPPER = {
  PHONE: RESUME_TEMPLATE.CONTACT.PHONE.join(" "),
  EMAIL: `${RESUME_TEMPLATE.CONTACT.EMAIL.ACCOUNT}@${RESUME_TEMPLATE.CONTACT.EMAIL.DOMAIN}`,
  LINKEDIN: `${RESUME_TEMPLATE.CONTACT.LINKEDIN.HOST}/${RESUME_TEMPLATE.CONTACT.LINKEDIN.ACCOUNT}-${RESUME_TEMPLATE.CONTACT.LINKEDIN.HASH}`,
};
