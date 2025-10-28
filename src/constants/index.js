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
  flood
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
    school: "Divisional Public School & College Faisalabad",
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
    name: "Ai",
    icon: Ai,
  },
  {
    name: "Gemini",
    icon: gemini,
  },
  {
    name: "Yolo",
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
    name: "git",
    icon: git,
  },
  {
    name: "Postman",
    icon: postman,
  },
  {
    name: "figma",
    icon: figma,
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
    issuedBy: "V3 Solution (Private Limited)",
    image: v3_letter,
  },
  {
    title: "Mern Stack Developer Experiece Letter",
    date: "20 July 2024 - 20 September 2024",
    issuedBy: "Portusx",
    image: portusx2,
  },
  {
    title: "HP LIFE Cybersecurity Awareness",
    date: "17 August 2025",
    issuedBy: "HP LIFE",
    image: hpCybersecurity, // You'll need to import this image
  },
  {
    title: "HP LIFE Resume Writing",
    date: "9 September 2025",
    issuedBy: "HP LIFE",
    image: hpResume, // You'll need to import this image
  },
  {
    title: "Beginners' Chinese: A Taster Course",
    date: "15 February 2025",
    issuedBy: "OpenLearn",
    image: chineseCourse, // You'll need to import this image
  },
  {
    title: "Child Protection Systems Strengthening",
    date: "2025", // Add the specific date if available
    issuedBy: "UNICEF",
    image: unicefCertificate, // You'll need to import this image
  },
  {
    title: "Build with AI – Workshop",
    date: "21 April 2025",
    issuedBy: "Google Developer Groups on Campus (GDGoC) - CUI",
    image: workshop,
  },
  {
    title: "Web Bootcamp with LLM Workflows",
    date: "23 May 2025",
    issuedBy: "GDGoC - CUI",
    certificateId: "3e61c74f-07b0-4979-bc23-188e4e008224",
    image: bootcamp,
  },
  {
    title: "Microsoft Specialist: Word (Office 2016)",
    date: "15 November 2020",
    issuedBy: "Microsoft",
    image: word,
  },
  {
    title: "Microsoft Specialist: PowerPoint (Office 2016)",
    date: "07 January 2021",
    issuedBy: "Microsoft",
    image: pp,
  },
  {
    title: "An Introduction to Gender Equality for UN staff",
    date: "28 July 2023",
    issuedBy: "United Nations",
    image: gender,
  },
  {
    title: "Building Gender IQ - Gender Equality",
    date: "July 2023",
    issuedBy: "UN Women",
    image: gender2,
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
    name: "👷‍♂️ FYP - SafeSitePlus",
    description:
      "SafeSitePlus is an AI-powered platform for construction site management with robust user administration and supervisor oversight. It enhances safety through incident detection (fire, falls, missing PPE) and prioritized alerts with screenshots. Key features include a policy-based chatbot, digital notepad, automated reporting, and forecasting for risk anticipation and planning.",
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
  },
  {
    name: "🌊 FloodAware",
    description:
      "AI-powered flood detection system that helps communities prepare for and respond to flood emergencies. Users can upload images or enter coordinates to analyze flood risk levels and plan safety measures through intelligent AI algorithms. Currently in prototype stage with continuous improvements to prediction accuracy and capabilities.",
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
  },
  {
    name: "🚀 AI Career Coach",
    description:
      "AI Career Coach is an AI-powered job preparation platform that helps users build professional resumes, generate personalized cover letters, and practice for interviews with real-time AI feedback. It also provides career insights, industry trends, and job recommendations.",
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
  },
  {
    name: "📈 AI Finance Platform",
    description:
      "A full-stack AI-powered finance platform offering real-time financial insights, analytics, and secure user management. Integrated with intelligent automation features to deliver a seamless user experience.",
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
  },
  {
    name: "🏘️ MERN Real-Estate",
    description:
      "Welcome to SherryEstate, a comprehensive real estate application that simplifies the process of buying, selling, and renting properties. With an intuitive interface, powerful search functionality, and seamless integration with Firebase and MongoDB.",
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
  },

  {
    name: "MealMentor - UI",
    description:
      "MealMentor is an app that simplifies meal planning for busy parents by offering personalized recipes based on available ingredients, dietary needs, and health conditions. It features grocery management tools, meal reminders, and visual guides to make cooking easier and healthier.",
    tags: [
      {
        name: "Figma",
        color: "pink-text-gradient",
      },
    ],
    image: hci,
    source_code_link:
      "https://www.figma.com/design/QlqOhw2cJg8llLHrX7S4ib/MealMentor-HCI-Lab-Terminal?node-id=0-1&p=f&t=YSSEaiYXV8GAu70L-0",
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
