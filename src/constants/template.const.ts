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
  EXPERIANCE: [
    {
      TITLE: "Full Stack Software Engineer",
      COMPANY: "MAMRAM, IDF",
      DURATION: "2022 - Present",
      DESCRIPTION: [
        "Developed and maintained a large-scale web application using microservices architecture implemented with Node.js, and NestJS.",
        "Constructed cross-network data exchange mechanisms with data integrity and security in mind.",
        "Designed and implemented an efficient and scalable stateless security-group based authorization system can was used by multiple B2C clients.",
        "Engineered an event-driven system using from image upload and processing using WebSocket for real-time data synchronization.",
        "Managed all department AWS and Azure cloud resources and services including RDS, EKS, and ALB.",
        "Collaborated with the product team to design and implement new UI features and improvements.",
        "Standardized the OpenShift(Kubernetes) deployment process and rebuild all department resources to be deployed with GitOps methodology.",
        "Mentored junior developers and conducted code reviews to ensure code quality and best practices.",
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
    "Effective Debugging",
    "Creative Problem Solving",
    "Team Collaboration and Communication",
    "Time Management and Prioritization",
    "Adaptability and Flexibility",
    "Agile and Scrum Methodologies",
    "Continuous Learning and Improvement",
    "Attention to Detail",
  ],
  LANGUAGES: [
    {
      LANGUAGE: "Hebrew",
      PROFICIENCY: "Professional working proficiency",
    },
    {
      LANGUAGE: "English",
      PROFICIENCY: "Native",
    },
    {
      LANGUAGE: "Russian",
      PROFICIENCY: "Elementary proficiency",
    },
  ],
};

export const RESUME_TEMPLATE_WRAPPER = {
  PHONE: RESUME_TEMPLATE.CONTACT.PHONE.join(" "),
  EMAIL: `${RESUME_TEMPLATE.CONTACT.EMAIL.ACCOUNT}@${RESUME_TEMPLATE.CONTACT.EMAIL.DOMAIN}`,
  LINKEDIN: `${RESUME_TEMPLATE.CONTACT.LINKEDIN.HOST}/${RESUME_TEMPLATE.CONTACT.LINKEDIN.ACCOUNT}-${RESUME_TEMPLATE.CONTACT.LINKEDIN.HASH}`,
};
