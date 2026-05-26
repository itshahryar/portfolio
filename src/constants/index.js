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
} from "../assets";

// export const navLinks = [
//   {
//     id: "about",
//     title: "About",
//   },
//   {
//     id: "work",
//     title: "Work",
//   },
//   {
//     id: "contact",
//     title: "Contact",
//   },
// ];
// src/constants/index.js
export const educationData = [
  {
    school: "Comsats University Islamabad",
    level: "Bachelors",
    program: "Computer Science",
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
    title: "Associate Software Engineer (Employed)",
    company_name: "Nitensclue",
    icon: niten,
    iconBg: "#E6DEDD",
    date: "Aug 2025 – Present",
    points: [
      "Developing scalable web and mobile applications using MERN stack, Next.js, and React Native, with API and cloud service integrations for end-to-end functionality.",
      "Collaborating with cross-functional teams on feature planning, code reviews, and deployment to deliver user-friendly, reliable, and high-quality software.",
    ],
  },

  {
    title: "MERN Stack Developer (Employed)",
    company_name: "Portus X",
    icon: portusx,
    iconBg: "#E6DEDD",
    date: "Jul 2024 – Sep 2024",
    points: [
      "Built web applications using MongoDB, Express.js, React.js, and Node.js, implementing REST APIs and interactive UI components.",
      "Designed database schemas and optimized queries to enhance performance and ensure data reliability.",
    ],
  },
  {
    title: "Junior React Native Developer (Intern)",
    company_name: "V3 Solutions Private Limited",
    icon: v3,
    iconBg: "#E6DEDD",
    date: "Jul 2023 – Aug 2023",
    points: [
      "Built responsive React Native UI components and integrated APIs under guidance, gaining foundational mobile development skills.",
      "Assisted in identifying and fixing UI/performance issues, contributing to overall app stability.",
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

const testimonials = [
  {
    testimonial:
      "The website developed by this team has completely transformed our online presence. It’s visually stunning and incredibly functional. Truly exceeded our expectations!",
    name: "Sara",
    // designation: "CFO",
    // company: "Acme Co",
    image:
      "https://cdn.pixabay.com/photo/2023/09/16/21/31/girl-8257551_1280.jpg",
  },
  {
    testimonial:
      "The logo and flyers created for our brand were beyond amazing. They captured our vision perfectly, and our clients loved the new designs!",
    name: "Seikh Saud",
    image:
      "https://img.freepik.com/premium-photo/stylized-character-collection-3d-neon-monochrome-designs_984027-170112.jpg?w=740",
  },
  {
    testimonial:
      "The UI/UX design work for our meal-mentor platform was exceptional. The user experience is smooth and intuitive.",
    name: "Ayesha",
    image:
      "https://img.freepik.com/free-photo/3d-rendering-beautiful-girl-superhero-costume-city_1142-54915.jpg?t=st=1737515243~exp=1737518843~hmac=87caeea4cde94d2f4011cf6c00584290157c7d71ae2763b6d54509e28ff7f92b&w=740",
  },
];

const projects = [
  {
    id: "safesiteplus",
    name: "👷‍♂️ FYP - SafeSitePlus",
    description:
      "SafeSitePlus is an AI-driven construction safety platform that helps supervisors detect incidents early, monitor PPE compliance, and respond faster through prioritized alerts. It combines computer vision, guided reporting, and policy-aware assistance to improve on-site safety operations.",
    tags: [
      {
        name: "Material UI",
        color: "purple-text-gradient",
      },
      {
        name: "tailwind css",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
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
        name: "Langchain",
        color: "orange-text-gradient",
      },
      {
        name: "AI Tools",
        color: "red-text-gradient", // Represents Gemini, Grok, etc. collectively
      },
      {
        name: "Python",
        color: "yellow-text-gradient",
      },
      {
        name: "Postman",
        color: "orange-text-gradient",
      },
      {
        name: "OpenCV",
        color: "green-text-gradient",
      },
      {
        name: "Yolo v8",
        color: "violet-text-gradient",
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
  },
  {
    id: "floodaware",
    name: "🌊 FloodAware",
    description:
      "FloodAware is a prototype AI system for early flood-risk assessment. Users can upload images or provide coordinates to receive risk insights and preparedness guidance, making flood intelligence more accessible for communities and response teams.",
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
  },
  {
    id: "aicareercoach",
    name: "🚀 AI Career Coach",
    description:
      "AI Career Coach is a job-readiness platform that supports resume building, personalized cover letter generation, and interview practice with AI feedback. It also offers practical career insights to help users make better next-step decisions.",
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
  },
  {
    id: "aifinanceplatform",
    name: "📈 AI Finance Platform",
    description:
      "A full-stack finance platform that combines secure account management with AI-assisted insights, analytics, and automation. It is built to make financial tracking and decision-making clearer, faster, and more reliable.",
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
  },
  {
    id: "mernreal-estate",
    name: "🏘️ MERN Real-Estate",
    description:
      "SherryEstate is a full-stack real estate application for buying, selling, and renting properties. It focuses on intuitive property discovery, clean listing management, and reliable backend workflows with Firebase and MongoDB integration.",
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
  },
  {
    id: "proteoaging-oocytes",
    name: "🧬 ProteoAging-Oocytes",
    description:
      "A client-focused bioinformatics platform that helps students and researchers analyze gene expression and interpret DEGs through interactive visualizations and structured data exploration. The UI is designed to make complex biological analysis more approachable.",
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
  },
  {
    id: "doctor-portfolio",
    name: "🩺 Portfolio Website",
    description:
      "A professional portfolio website for a medical client, designed to present credentials, services, and achievements with trust-focused content flow and responsive UI.",
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
  },
  {
    id: "artist-portfolio",
    name: "🎨 Portfolio Website",
    description:
      "A visual-first portfolio for a digital artist, crafted to spotlight illustration work, personal storytelling, and commission-ready presentation through a clean, responsive interface.",
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
  },
  {
    id: "graphic-designer-portfolio",
    name: "🖌️ Portfolio Website",
    description:
      "A modern portfolio website for a graphic designer, structured to showcase projects, skills, and experience with a consistent visual hierarchy across desktop, tablet, and mobile.",
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
  },
   {
    id: "mealmentor-ui",
    name: "MealMentor - UI",
    description:
      "MealMentor is a UI/UX concept focused on reducing meal-planning friction for busy parents through personalized recipes, dietary-aware recommendations, grocery planning, and guided cooking flows.",
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
  },

];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  certifications,
};
