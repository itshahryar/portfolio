import {
  mobile,
  backend,
  creator,
  web2,
  web3,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  v3,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  adobe,
  hci,
  v3_letter,
  gender,
  gender2,
  pp,
  word,
  dps,
  pgc,
  cui,
  event,
  careerCoach,
  finance,
  portusx,
  portusx2,
  bootcamp,
  workshop,
  compV,
  niten,
  hpCybersecurity,
  hpResume,
  chineseCourse,
  unicefCertificate,
  shadcn,
  postman,
  next,
  yolo,
  Ai,
  gemini,
  prisma,
  flood,
  doctorPortfolioImage,
  artistPortfolioImage,
  bio,
  hamnaPortfolioImage,
  englishProef,
  cuiNobg,
  legal,
} from "../assets";

// src/constants/index.js
export const educationData = [
  {
    school: "Comsats University Islamabad",
    level: "Bachelors of Science in Computer Science",
    program: "BSCS",
    year: "FA21 - SP25",
    image: cui, // Optional: Add an image if desired
  },
  {
    school: "Punjab Group of College Faisalabad",
    percentage: "98%",
    level: "Intermediate (BISE FSD Board)",
    year: "2019 - 2021",
    image: pgc, // Optional: Add an image if desired
  },
  {
    school: "DPS & C Faisalabad",
    percentage: "97.1%",
    board: "BISE FSD Board",
    level: "Matriculation (BISE FSD Board)",
    year: "2018 - 2019",
    image: dps, // Optional: Add an image if desired
  },
];

const services = [
  {
    title: "Full Stack Web Developer",
    subtitle: "(MERN, Next.js & FastAPI)",
    icon: web2,
  },
  {
    title: "Frontend - App Developer",
    subtitle: "(React Native)",
    icon: web3,
  },
  {
    title: "AI & ML Solutions",
    subtitle: "(Intelligent Applications)",
    icon: backend,
  },
  {
    title: "Computer Vision Projects",
    subtitle: "(YOLO & OpenCV)",
    icon: compV,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Shadcn UI",
    icon: shadcn,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "React Native",
    icon: threejs,
  },
  {
    name: "Next JS",
    icon: next,
  },
  {
    name: "AI",
    icon: Ai,
  },
  {
    name: "Gemini",
    icon: gemini,
  },
  {
    name: "YOLO",
    icon: yolo,
  },
  {
    name: "CV",
    icon: compV,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Prisma",
    icon: prisma,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Postman",
    icon: postman,
  },
  {
    name: "Figma",
    icon: figma,
  },
  // New technologies without icons
  {
    name: "Ant Design",
  },
  {
    name: "Python",
  },
  {
    name: "FastAPI",
  },
  {
    name: "MySQL",
  },
  {
    name: "Firebase",
  },
  {
    name: "Clerk",
  },
  {
    name: "INNGEST",
  },
  {
    name: "AWS",
  },
  {
    name: "Google Colab",
  },
  {
    name: "SQL Workbench",
  },
];

const experiences = [
  {
    title: "Associate Software Engineer",
    company_name: "Nitensclue",
    icon: niten,
    iconBg: "#E6DEDD",
    date: "Aug 2025 – Present",
    points: [
      "Developing scalable **web applications** using the **MERN stack** and **Next.js** with API and **cloud integrations**.",
      "Collaborating on **feature development**, **code reviews**, and **deployments** to deliver reliable, user-focused software.",
    ],
  },

  {
    title: "MERN Stack Developer",
    company_name: "PortusX",
    icon: portusx,
    iconBg: "#E6DEDD",
    date: "Jul 2024 – Sep 2024",
    points: [
      "Built **MERN stack web applications** with **REST APIs** and interactive user interfaces.",
      "Designed efficient **database schemas** and optimized **queries** for performance and reliability.",
    ],
  },
  {
    title: "Junior React Native Developer (Intern)",
    company_name: "V3 Solutions Private Limited",
    icon: v3,
    iconBg: "#E6DEDD",
    date: "Jul 2023 – Aug 2023",
    points: [
      "Built **mobile applications** using **React Native** with API integrations.",
      "Resolved **UI** and **performance issues** to improve app stability.",
    ],
  },
];

const certifications = [
  {
    title: "React Native Internship Completion Letter",
    date: "July 2023 - 01 September 2023",
    issuedBy: "V3 Solutions (Private Limited)",
    image: v3_letter,
    type: "experience",
    downloadTo: "/certificates/react-native-internship.pdf"
  },
  {
    title: "MERN Stack Developer Experience Letter",
    date: "20 July 2024 - 20 September 2024",
    issuedBy: "Portus X",
    image: portusx2,
    type: "experience",
    downloadTo: "/certificates/mern-stack-experience.pdf"
  },
  {
    title: "HP LIFE Cybersecurity Awareness",
    date: "17 August 2025",
    issuedBy: "HP LIFE",
    image: hpCybersecurity,
    type: "credential",
    downloadTo: "/certificates/hp-cybersecurity.pdf"
  },
  {
    title: "HP LIFE Resume Writing",
    date: "9 September 2025",
    issuedBy: "HP LIFE",
    image: hpResume,
    type: "credential",
    downloadTo: "/certificates/hp-resume-writing.pdf"
  },
  {
    title: "Beginners' Chinese: A Taster Course",
    date: "15 February 2025",
    issuedBy: "OpenLearn",
    image: chineseCourse,
    type: "language",
    downloadTo: "/certificates/chinese-course.pdf"
  },
  {
    title: "English Proficiency Certificate",
    date: "14 January 2026",
    issuedBy: "COMSATS University Islamabad",
    image: englishProef,
    type: "language",
    downloadTo: "/certificates/english-proficiency.pdf"
  },
  {
    title: "Child Protection Systems Strengthening",
    date: "2025",
    issuedBy: "UNICEF",
    image: unicefCertificate,
    type: "social-impact",
    downloadTo: "/certificates/unicef-child.pdf"
  },
  {
    title: "Build with AI – Workshop",
    date: "21 April 2025",
    issuedBy: "Google Developer Groups on Campus (GDGoC) - CUI",
    image: workshop,
    type: "workshop",
    downloadTo: "/certificates/gdgoc-ai-workshop.pdf"
  },
  {
    title: "Web Bootcamp with LLM Workflows",
    date: "23 May 2025",
    issuedBy: "GDGoC - CUI",
    certificateId: "3e61c74f-07b0-4979-bc23-188e4e008224",
    image: bootcamp,
    type: "workshop",
    downloadTo: "/certificates/gdgoc-web-bootcamp.pdf"
  },
  {
    title: "Microsoft Specialist: Word (Office 2016)",
    date: "15 November 2020",
    issuedBy: "Microsoft",
    image: word,
    type: "credential",
    downloadTo: "/certificates/ms-word.pdf"
  },
  {
    title: "Microsoft Specialist: PowerPoint (Office 2016)",
    date: "07 January 2021",
    issuedBy: "Microsoft",
    image: pp,
    type: "credential",
    downloadTo: "/certificates/ms-powerpoint.pdf"
  },
  {
    title: "An Introduction to Gender Equality for UN staff",
    date: "28 July 2023",
    issuedBy: "United Nations",
    image: gender,
    type: "social-impact",
    downloadTo: "/certificates/un-gender-equality.pdf"
  },
  {
    title: "Building Gender IQ - Gender Equality",
    date: "July 2023",
    issuedBy: "UN Women",
    image: gender2,
    type: "social-impact",
    downloadTo: "/certificates/un-women-gender.pdf"
  },
  {
    title: "Letter of Recommendation",
    date: "2026",
    issuedBy: "COMSATS University Islamabad",
    image: cui,
    type: "recommendation",
    downloadTo: "/certificates/recommendation-1.pdf"
  },
  {
    title: "Letter of Recommendation",
    date: "2026",
    issuedBy: "COMSATS University Islamabad",
    image: cui,
    type: "recommendation",
    downloadTo: "/certificates/recommendation-2.pdf"
  },
];

const projects = [
  {
    id: "safesiteplus",
    name: "👷‍♂️ FYP - SafeSitePlus",
    description:
      "SafeSitePlus is an **AI-driven** construction safety platform that helps supervisors **detect incidents early**, monitor **PPE compliance**, and respond faster through **prioritized alerts**. It combines **computer vision**, guided reporting, and policy-aware assistance to improve on-site safety operations.",
    tags: [
      // Core Languages & Frameworks
      {
        name: "React",
        color: "cyan-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "Express.js",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "yellow-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },

      // AI & ML
      {
        name: "LangChain",
        color: "orange-text-gradient",
      },
      {
        name: "OpenCV",
        color: "green-text-gradient",
      },
      {
        name: "YOLOv8",
        color: "violet-text-gradient",
      },
      {
        name: "AI Tools",
        color: "red-text-gradient",
      },

      // UI & Styling
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
      {
        name: "Material UI",
        color: "purple-text-gradient",
      },

      // Developer Tools
      {
        name: "Postman",
        color: "orange-text-gradient",
      },
      {
        name: "GitHub",
        color: "black-text-gradient",
      },
      {
        name: "DuckDuckGo",
        color: "orange-text-gradient",
      },
    ],
    image: jobit, // You can replace with an actual project image
    source_code_link: "https://github.com/Zamin-Raza/SafeSitePlus",
    isLive: false,
    type: "academic",
    details: {
      problemIntro: "Construction sites face numerous safety challenges that require **innovative solutions**.",
      problemPoints: [
        "**Incident detection** is often manual and delayed",
        "**Compliance monitoring** is inefficient and inconsistent",
        "**Communication gaps** exist between supervisors and workers",
        "**Traditional monitoring methods** are reactive rather than proactive"
      ],
      solutionIntro: "SafeSitePlus provides an **AI-driven** platform that enhances construction site safety through **intelligent monitoring** and communication.",
      solutionPoints: [
        "**Computer vision** for real-time incident detection (fire, falls, missing PPE)",
        "**Policy-based chatbot** for instant safety guidance",
        "**Automated reporting** with screenshots for documentation",
        "**Forecasting capabilities** for risk anticipation and planning",
        "**Prioritized alerts** and comprehensive oversight tools"
      ],
      scopeIntro: "SafeSite Plus is designed to provide construction site supervisors and admins with a robust platform to manage safety efficiently.",
      scopePoints: [
        "Multi-device accessible interface",
        "Incident reporting and notifications",
        "User management with access control",
        "Comprehensive reporting and analytics",
        "Weather forecasting integration",
        "AI assistant chatbot for safety guidance"
      ],
      tools: [
        { name: "VS Code", color: "blue-text-gradient" },
        { name: "GitHub", color: "cyan-text-gradient" },
        { name: "Postman", color: "orange-text-gradient" },
        { name: "Google Colab", color: "green-text-gradient" },
        { name: "Figma", color: "pink-text-gradient" }
      ],
      video: "/videos/safesiteplus-demo.mp4",
      videoPoster: "/images/safesiteplus-poster.jpg",
      images: [
        "/images/safesiteplus-dashboard.jpg",
        "/images/safesiteplus-incident.jpg",
        "/images/safesiteplus-chatbot.jpg",
        "/images/safesiteplus-reporting.jpg"
      ]
    }
  },
  {
    id: "floodaware",
    name: "🌊 FloodAware",
    description:
      "FloodAware is a prototype **AI system** for early **flood-risk assessment**. Users can upload images or provide coordinates to receive **risk insights** and **preparedness guidance**, making flood intelligence more accessible for communities and response teams.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "FastAPI",
        color: "green-text-gradient",
      },
      {
        name: "Python",
        color: "yellow-text-gradient",
      },
      {
        name: "Gemini",
        color: "cyan-text-gradient",
      },
    ],
    image: flood,
    source_code_link: "https://github.com/itshahryar/flood-risk-frontend/",
    isLive: false,
    type: "solo",
    details: {
      problemIntro: "Communities often lack **timely information** about flood risks, leading to inadequate preparation.",
      problemPoints: [
        "**Delayed flood risk information** reaches communities",
        "**Inadequate preparation** for flood emergencies",
        "**Traditional monitoring systems** are expensive",
        "**Limited accessibility** to flood risk data for all communities"
      ],
      solutionIntro: "FloodAware provides an **AI-powered system** that helps communities assess and prepare for flood risks.",
      solutionPoints: [
        "**Image upload functionality** for flood risk analysis",
        "**Coordinate-based risk assessment** system",
        "**Intelligent AI algorithms** for risk evaluation",
        "**Safety recommendations** based on risk levels",
        "**Accessible platform** for all communities"
      ],
      scopeIntro: "FloodAware is designed to provide communities and emergency responders with accessible flood risk assessment tools.",
      scopePoints: [
        "User-friendly interface for non-technical users",
        "Real-time flood risk analysis and reporting",
        "Integration with weather forecasting services",
        "Multi-language support for diverse communities",
        "Mobile accessibility for field use",
        "Data visualization for risk communication"
      ],
      tools: [
        { name: "VS Code", color: "blue-text-gradient" },
        { name: "Vercel", color: "cyan-text-gradient" },
        { name: "GitHub", color: "orange-text-gradient" }
      ],
      images: [
        "/images/floodaware-upload.jpg",
        "/images/floodaware-analysis.jpg",
        "/images/floodaware-dashboard.jpg"
      ]
    }
  },
  {
    id: "legal-chatbot",
    name: "𝐋𝐋𝐌-𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐋𝐞𝐠𝐚𝐥 𝐂𝐡𝐚𝐭𝐛𝐨𝐭",
    description:
      "A **full-stack** Legal LLM chatbot that lets you **search legal case** using **natural language** and instantly find the most **relevant case law**. Built on a **RAG pipeline** — documents are **chunked**, **embedded**, and stored in **Pinecone**. At query time, your question is matched by **meaning**, not by exact words.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "LangChain",
        color: "orange-text-gradient",
      },
      {
        name: "Pinecone",
        color: "green-text-gradient",
      },
      {
        name: "Voyage Embeddings",
        color: "purple-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: legal,
    source_code_link: "https://github.com/itshahryar/legal-semantic-webapp",
    isLive: true,
    liveLink: "https://legal-semantic-search-kappa.vercel.app/",
    type: "llm-rag",
    details: {
      problemIntro: "Legal professionals and researchers often struggle to efficiently search through **vast amounts of legal documents** and case law to find relevant information.",
      problemPoints: [
        "**Time-consuming manual search** through legal databases",
        "**Difficulty finding relevant case law** for specific legal queries",
        "**Inefficient keyword-based search** that misses semantic meaning",
        "**Lack of natural language interface** for legal research"
      ],
      solutionIntro: "A full-stack Legal LLM chatbot that enables **semantic search** of legal cases using natural language queries, powered by **RAG architecture**.",
      solutionPoints: [
        "**Natural language interface** for querying legal documents",
        "**RAG pipeline** for semantic search and retrieval",
        "**Vector embeddings** for meaning-based matching",
        "**Instant retrieval** of most relevant case law",
        "**Scalable document processing** and storage"
      ],
      scopeIntro: "The Legal Chatbot is designed to provide legal professionals, researchers, and students with an intelligent tool for efficient legal research.",
      scopePoints: [
        "Document chunking and embedding pipeline",
        "Vector database storage with Pinecone",
        "Semantic search with Voyage Embeddings",
        "User-friendly chatbot interface",
        "Real-time query processing and response",
        "Scalable architecture for large document collections"
      ],
      tools: [
        { name: "VS Code", color: "blue-text-gradient" },
        { name: "GitHub", color: "gray-text-gradient" },
        { name: "Vercel", color: "black-text-gradient" }
      ],
      images: [
        "/images/legal-chatbot-home.jpg",
        "/images/legal-chatbot-search.jpg",
        "/images/legal-chatbot-results.jpg",
        "/images/legal-chatbot-architecture.jpg"
      ]
    }
  },
  {
    id: "aicareercoach",
    name: "🚀 AI Career Coach",
    description:
      "AI Career Coach is a **job-readiness platform** that supports **resume building**, **personalized cover letter generation**, and **interview practice** with **AI feedback**. It also offers practical career insights to help users make better next-step decisions.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
      {
        name: "Shadcn UI",
        color: "red-text-gradient",
      },
      {
        name: "Prisma",
        color: "purple-text-gradient",
      },
      {
        name: "NeonDB",
        color: "green-text-gradient",
      },
      {
        name: "Clerk",
        color: "orange-text-gradient",
      },
      {
        name: "Gemini AI",
        color: "cyan-text-gradient",
      },
      {
        name: "Inngest",
        color: "yellow-text-gradient",
      },
      {
        name: "vercel",
        color: "black-text-gradient",
      },
    ],
    image: careerCoach, // Replace with actual image variable
    source_code_link: "https://github.com/itshahryar/Mern-ai-career-coach",
    isLive: false,
    type: "solo",
    details: {
      problemIntro: "Job seekers often struggle with creating **professional application materials** and preparing for interviews.",
      problemPoints: [
        "**Difficulty creating professional resumes**",
        "**Challenges writing tailored cover letters**",
        "**Limited access to interview preparation resources**",
        "**Lack of personalized career guidance** and feedback"
      ],
      solutionIntro: "AI Career Coach is an **AI-powered platform** that helps users build professional application materials and prepare for interviews.",
      solutionPoints: [
        "**Professional resume building tools**",
        "**Personalized cover letter generation**",
        "**Interview practice** with real-time AI feedback",
        "**Career insights** and industry trends",
        "**Job recommendations** based on user profile"
      ],
      scopeIntro: "AI Career Coach is designed to provide comprehensive career development tools for job seekers at all levels.",
      scopePoints: [
        "User profile management with career history",
        "Resume and cover letter templates",
        "AI-powered content generation and optimization",
        "Mock interview simulations with feedback",
        "Career path recommendations",
        "Integration with job boards and LinkedIn"
      ],
      tools: [
        { name: "VS Code", color: "blue-text-gradient" },
        { name: "Notion", color: "gray-text-gradient" },
        { name: "Vercel", color: "black-text-gradient" },
        { name: "Clerk", color: "orange-text-gradient" }
      ],
      video: "/videos/careercoach-demo.mp4",
      videoPoster: "/images/careercoach-poster.jpg",
      images: [
        "/images/careercoach-dashboard.jpg",
        "/images/careercoach-resume.jpg",
        "/images/careercoach-interview.jpg",
        "/images/careercoach-insights.jpg"
      ]
    }
  },
  {
    id: "aifinanceplatform",
    name: "📈 AI Finance Platform",
    description:
      "A **full-stack** finance platform that combines **secure account management** with **AI-assisted insights**, **analytics**, and **automation**. It is built to make financial tracking and decision-making clearer, faster, and more reliable.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind css",
        color: "pink-text-gradient",
      },
      {
        name: "prisma",
        color: "purple-text-gradient",
      },
      {
        name: "gemini-ai",
        color: "orange-text-gradient",
      },
      {
        name: "Shadcn UI",
        color: "red-text-gradient",
      },
      {
        name: "clerk",
        color: "red-text-gradient",
      },
      {
        name: "vercel",
        color: "black-text-gradient",
      },
      {
        name: "inngest",
        color: "green-text-gradient",
      },
    ],
    image: finance, // Replace with actual image related to I Finance if available
    source_code_link: "https://github.com/itshahryar/next-ai-finance", // Replace with your actual link
    isLive: false,
    type: "solo",
    details: {
      problemIntro: "Managing personal finances can be overwhelming with **multiple accounts** and investments to track.",
      problemPoints: [
        "**Difficulty tracking multiple financial accounts**",
        "**Complex investment portfolio management**",
        "**Lack of real-time financial insights**",
        "**Limited tools** for informed financial decision-making"
      ],
      solutionIntro: "The AI Finance Platform is a **full-stack solution** offering real-time financial insights and analytics.",
      solutionPoints: [
        "**Real-time financial insights** and analytics",
        "**Secure user management** and data protection",
        "**Intelligent automation** for routine tasks",
        "**Expense tracking** and categorization",
        "**Investment analysis** and recommendations"
      ],
      scopeIntro: "The AI Finance Platform is designed to provide individuals with comprehensive financial management tools.",
      scopePoints: [
        "Account aggregation from multiple financial institutions",
        "Budget creation and expense tracking",
        "Investment portfolio analysis",
        "Financial goal setting and tracking",
        "AI-powered financial insights and recommendations",
        "Secure data encryption and privacy protection"
      ],
      tools: [
        { name: "VS Code", color: "blue-text-gradient" },
        { name: "Postman", color: "orange-text-gradient" },
        { name: "Clerk", color: "red-text-gradient" },
        { name: "Vercel", color: "black-text-gradient" }
      ],
      images: [
        "/images/finance-dashboard.jpg",
        "/images/finance-analytics.jpg",
        "/images/finance-investments.jpg",
        "/images/finance-budget.jpg"
      ]
    }
  },
  {
    id: "mernreal-estate",
    name: "🏘️ MERN Real-Estate",
    description:
      "SherryEstate is a **full-stack real estate application** for buying, selling, and renting properties. It focuses on **intuitive property discovery**, clean listing management, and reliable backend workflows with **Firebase** and **MongoDB integration**.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "orange-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/itshahryar/mern-realEstate",
    isLive: false,
    type: "solo",
    details: {
      problemIntro: "The real estate market often lacks **transparency and efficiency** in property transactions.",
      problemPoints: [
        "**Limited transparency** in property transactions",
        "**Inefficient processes** for buyers and sellers",
        "**Difficulty finding suitable properties**",
        "**Complex navigation** of real estate procedures"
      ],
      solutionIntro: "SherryEstate is a **comprehensive real estate application** that simplifies property transactions.",
      solutionPoints: [
        "**Intuitive property search interface**",
        "**Streamlined buying**, selling, and renting processes",
        "**Powerful filtering** and search functionality",
        "**Seamless integration** with Firebase and MongoDB",
        "**User-friendly dashboard** for property management"
      ],
      scopeIntro: "SherryEstate is designed to provide a complete property management solution for buyers, sellers, and agents.",
      scopePoints: [
        "Property listing and search functionality",
        "User authentication and profile management",
        "Saved searches and favorites",
        "Property comparison tools",
        "Messaging system for buyer-seller communication",
        "Document management for transactions"
      ],
      tools: [
        { name: "VS Code", color: "blue-text-gradient" },
        { name: "Postman", color: "orange-text-gradient" },
        { name: "GitHub", color: "orange-text-gradient" },
        { name: "Firebase", color: "orange-text-gradient" }
      ],
      images: [
        "/images/realestate-home.jpg",
        "/images/realestate-search.jpg",
        "/images/realestate-property.jpg",
        "/images/realestate-dashboard.jpg"
      ]
    }
  },
  {
    id: "proteoaging-oocytes",
    name: "🧬 ProteoAging-Oocytes",
    description:
      "A **client-focused bioinformatics platform** that helps students and researchers **analyze gene expression** and interpret **DEGs** through **interactive visualizations** and **structured data exploration**. The UI is designed to make complex biological analysis more approachable.",
    tags: [
      { name: "Bioinformatics", color: "green-text-gradient" },
      { name: "Data Visualization", color: "blue-text-gradient" },
      { name: "React", color: "cyan-text-gradient" },
      { name: "Tailwind CSS", color: "pink-text-gradient" },
      { name: "JavaScript", color: "yellow-text-gradient" },
      { name: "GitHub", color: "black-text-gradient" },
      { name: "Responsive UI", color: "orange-text-gradient" }
    ],
    image: bio,
    source_code_link: "https://github.com/itshahryar/ProteoAging-Oocytes",
    isLive: false,
    type: "client-project",
    details: {
      problemIntro: "Researchers and students in biology often struggle with analyzing **complex gene expression data** and visualizing differentially expressed genes in an intuitive way.",
      problemPoints: [
        "**Difficulty interpreting raw gene/proteomics data**",
        "**Challenges creating meaningful visualizations** of biological data",
        "**Limited tools for non-programmers** to analyze gene expression",
        "**Need for structured presentation** of complex biological datasets"
      ],
      solutionIntro: "A user-friendly bioinformatics platform that transforms raw gene expression data into **interactive visualizations** and structured tables.",
      solutionPoints: [
        "**Gene search functionality** with detailed information retrieval",
        "**Interactive visualizations** for differentially expressed genes",
        "**Structured data tables** with filtering and analysis capabilities",
        "**Dark mode** for comfortable extended research sessions",
        "**Responsive design** for use on various devices"
      ],
      scopeIntro: "A comprehensive bioinformatics platform designed to make gene expression analysis accessible to students and researchers without programming knowledge.",
      scopePoints: [
        "Gene database with search and retrieval capabilities",
        "Visualization tools for gene expression patterns",
        "Data analysis and filtering options",
        "Export functionality for research data",
        "User-friendly interface optimized for research workflows",
        "Dark mode support for extended use"
      ],
      tools: [
        { name: "VS Code", color: "blue-text-gradient" },
        { name: "GitHub", color: "gray-text-gradient" }
      ],
      images: [
        "/images/proteoaging-home.jpg",
        "/images/proteoaging-search.jpg",
        "/images/proteoaging-visualization.jpg",
        "/images/proteoaging-data.jpg"
      ]
    }
  },
  {
    id: "doctor-portfolio",
    name: "🩺 Portfolio Website",
    description:
      "A professional portfolio website for a medical client, designed to present **credentials**, **services**, and **achievements** with **trust-focused content flow** and **responsive UI**.",
    tags: [
      { name: "React", color: "cyan-text-gradient" },
      { name: "Vite", color: "blue-text-gradient" },
      { name: "Tailwind CSS", color: "pink-text-gradient" },
      { name: "ESLint", color: "red-text-gradient" },
      { name: "Responsive Design", color: "green-text-gradient" },
      { name: "GitHub", color: "black-text-gradient" }
    ],
    image: doctorPortfolioImage,
    source_code_link: "https://github.com/itshahryar/doctor-portfolio",
    isLive: true,
    liveLink: "https://dr-ibtisam.vercel.app/",
    type: "client-portfolio",
    details: {
      problemIntro: "Medical students often struggle to create a **comprehensive digital presence** that showcases their academic journey, research work, and career aspirations effectively.",
      problemPoints: [
        "**Difficulty presenting academic achievements** and clinical rotations",
        "**Challenges organizing research projects** and publications",
        "**Limited platform to showcase extracurricular activities** and leadership roles",
        "**Need for professional networking** and residency application support"
      ],
      solutionIntro: "A modern, responsive portfolio website that helps medical students document their journey, showcase achievements, and build a **professional network**.",
      solutionPoints: [
        "**Comprehensive academic profile** with grades and achievements",
        "**Research projects and publications showcase**",
        "**Clinical rotations** and hands-on experience documentation",
        "**Extracurricular activities** and leadership roles display",
        "**Professional networking** and contact integration"
      ],
      scopeIntro: "A complete digital portfolio solution for medical students to track their progress, showcase achievements, and prepare for residency applications.",
      scopePoints: [
        "Academic profile with coursework and achievements",
        "Research experience and publications showcase",
        "Clinical rotations and practical experience documentation",
        "Leadership roles and extracurricular activities",
        "Skills and certifications presentation",
        "Professional networking and career development tools"
      ],
      tools: [
        { name: "VS Code", color: "blue-text-gradient" },
        { name: "GitHub", color: "gray-text-gradient" }
      ],
      images: [
        "/images/doctor-portfolio-home.jpg",
        "/images/doctor-portfolio-academics.jpg",
        "/images/doctor-portfolio-research.jpg",
        "/images/doctor-portfolio-activities.jpg"
      ]
    }
  },
  {
    id: "artist-portfolio",
    name: "🎨 Portfolio Website",
    description:
      "A **visual-first portfolio** for a digital artist, crafted to spotlight **illustration work**, **personal storytelling**, and **commission-ready presentation** through a clean, responsive interface.",
    tags: [
      { name: "Responsive Design", color: "green-text-gradient" },
      { name: "React", color: "cyan-text-gradient" },
      { name: "Vite", color: "blue-text-gradient" },
      { name: "Tailwind CSS", color: "pink-text-gradient" },
      { name: "ESLint", color: "red-text-gradient" },
      { name: "GitHub", color: "black-text-gradient" }
    ],
    image: artistPortfolioImage,
    source_code_link: "https://github.com/itshahryar/Artist-portfolio",
    isLive: true,
    liveLink: "https://artist-portfolio-azure.vercel.app/",
    type: "client-portfolio",
    details: {
      problemIntro: "Artists and creative professionals need a **visually striking platform** to showcase their work, tell their story, and connect with potential clients and collaborators.",
      problemPoints: [
        "**Difficulty creating an online presence** that matches artistic vision",
        "**Challenges organizing and presenting** diverse creative works",
        "**Limited platform for storytelling** and artistic expression",
        "**Need for professional presentation** to attract commissions and clients"
      ],
      solutionIntro: "A visually engaging portfolio website that showcases artistic work, tells the artist's story, and provides a platform for **client connections**.",
      solutionPoints: [
        "**Visually striking gallery** for artwork and illustrations",
        "**Storytelling sections** for artistic journey and inspiration",
        "**Interactive portfolio** with smooth navigation",
        "**Testimonials** from collectors and collaborators",
        "**Contact and commission inquiry system**"
      ],
      scopeIntro: "A comprehensive digital showcase for artists to present their work, share their story, and connect with the art community.",
      scopePoints: [
        "Dynamic gallery with categorized artwork display",
        "Artist biography and creative journey section",
        "Featured works and collections showcase",
        "Testimonials and client feedback integration",
        "Contact and commission inquiry system",
        "Responsive design optimized for visual content"
      ],
      tools: [
        { name: "VS Code", color: "blue-text-gradient" },
        { name: "GitHub", color: "gray-text-gradient" }
      ],
      images: [
        "/images/artist-portfolio-home.jpg",
        "/images/artist-portfolio-gallery.jpg",
        "/images/artist-portfolio-about.jpg",
        "/images/artist-portfolio-contact.jpg"
      ]
    }
  },
  {
    id: "graphic-designer-portfolio",
    name: "🖌️ Portfolio Website",
    description:
      "A modern portfolio website for a graphic designer, structured to showcase **projects**, **skills**, and **experience** with a consistent **visual hierarchy** across desktop, tablet, and mobile.",
    tags: [
      { name: "Next.js", color: "blue-text-gradient" },
      { name: "JavaScript", color: "yellow-text-gradient" },
      { name: "Tailwind CSS", color: "pink-text-gradient" },
      { name: "Responsive Design", color: "green-text-gradient" },
      { name: "UI/UX", color: "orange-text-gradient" },
      { name: "Portfolio", color: "cyan-text-gradient" },
      { name: "GitHub", color: "black-text-gradient" }
    ],
    image: hamnaPortfolioImage,
    source_code_link: "https://github.com/itshahryar/client-portfolio",
    isLive: true,
    liveLink: "https://hamnas-portfolio.vercel.app/",
    type: "client-portfolio",
    details: {
      problemIntro: "Graphic designers need a **visually compelling portfolio** to showcase their creative work, attract clients, and demonstrate their design capabilities effectively.",
      problemPoints: [
        "**Difficulty creating a portfolio** that reflects design skills",
        "**Challenges organizing diverse design projects** cohesively",
        "**Limited platform to showcase creative process** and results",
        "**Need for professional presentation** to attract quality clients"
      ],
      solutionIntro: "A modern, responsive portfolio website that showcases graphic design work, skills, and experience in a **visually compelling format**.",
      solutionPoints: [
        "**Clean, modern design** that highlights creative work",
        "**Project showcase** with detailed case studies",
        "**Skills and services presentation**",
        "**Professional experience and education sections**",
        "**Client testimonials** and contact integration"
      ],
      scopeIntro: "A comprehensive digital portfolio for graphic designers to present their work, attract clients, and establish their professional brand.",
      scopePoints: [
        "Dynamic project gallery with categorized work",
        "Skills and design tools showcase",
        "Professional experience and education timeline",
        "Services and capabilities presentation",
        "Client testimonials and success stories",
        "Contact and inquiry system"
      ],
      tools: [
        { name: "VS Code", color: "blue-text-gradient" },
        { name: "GitHub", color: "gray-text-gradient" }
      ],
      images: [
        "/images/graphic-designer-home.jpg",
        "/images/graphic-designer-projects.jpg",
        "/images/graphic-designer-skills.jpg",
        "/images/graphic-designer-contact.jpg"
      ]
    }
  },
   {
    id: "mealmentor-ui",
    name: "MealMentor - UI",
    description:
      "MealMentor is a **UI/UX concept** focused on reducing **meal-planning friction** for busy parents through **personalized recipes**, **dietary-aware recommendations**, **grocery planning**, and guided cooking flows.",
    tags: [
      {
        name: "Figma",
        color: "pink-text-gradient",
      },
    ],
    image: hci,
    source_code_link:
      "https://www.figma.com/design/QlqOhw2cJg8llLHrX7S4ib/MealMentor-HCI-Lab-Terminal?node-id=0-1&p=f&t=YSSEaiYXV8GAu70L-0",
    isLive: false,
    type: "ui-ux",
    details: {
      problemIntro: "Busy parents often struggle with **meal planning** and finding recipes that match their dietary needs.",
      problemPoints: [
        "**Difficulty planning meals** for busy schedules",
        "**Challenges finding recipes** for specific dietary needs",
        "**Inefficient grocery list management**",
        "**Lack of personalized meal recommendations**"
      ],
      solutionIntro: "MealMentor simplifies meal planning by offering **personalized recipes** and grocery management tools.",
      solutionPoints: [
        "**Personalized recipe recommendations** based on ingredients",
        "**Dietary-specific meal planning options**",
        "**Integrated grocery list management**",
        "**Meal reminders** and planning calendar",
        "**Visual cooking guides** and instructions"
      ],
      scopeIntro: "MealMentor is designed to provide a complete meal planning solution for busy individuals and families.",
      scopePoints: [
        "User profile with dietary preferences and restrictions",
        "Recipe database with filtering options",
        "Weekly meal planning calendar",
        "Automated grocery list generation",
        "Nutritional information tracking",
        "Integration with grocery delivery services"
      ],
      tools: [
        { name: "Figma", color: "pink-text-gradient" },
      ],
      images: [
        "/images/mealmentor-home.jpg",
        "/images/mealmentor-recipes.jpg",
        "/images/mealmentor-grocery.jpg",
        "/images/mealmentor-planning.jpg"
      ]
    }
  },

];


export { services, technologies, experiences, projects, certifications };
