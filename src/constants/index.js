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
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Full Stack Web Developer (MERN)",
      icon: web2,
    },
    {
      title: "Frontend Mobile App Developer (React Native)",
      icon: web3,
    },
    {
      title: "UI/UX Designer",
      icon: backend,
    },
    {
      title: "Adobe Photoshop",
      icon: creator,
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
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "React Native",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "Adobe Photoshop",
      icon: adobe,
    },
  ];
  
  const experiences = [
    {
      title: "Junior React Native Mobile App Developer",
      company_name: "V3 Solution (Private Limited)",
      icon: v3,
      iconBg: "#383E56",
      date: "13 July 2023 - 31 August 2023",
      points: [
        "Developed and maintained mobile apps using React Native.",
        "Collaborated closely with design teams to implement user-friendly app interfaces.",
        "Worked with backend teams to integrate APIs and ensure smooth data flow.",
        "Debugged the app to identify and fix issues during development.",
      ],
    },
    {
      title: "UI/UX Designer",
      company_name: "Self Practice",
      date: "Ongoing",
      icon: tesla, // Add your icon path here
      iconBg: "#383E56", // Background color for the icon
      points: [
        "Designed user interfaces and created wireframes for mobile and web apps.",
        "Optimized user experience through feedback from users and testing.",
        "Developed interactive prototypes and high-fidelity mockups in Figma.",
        "Kept up-to-date with the latest design trends to create modern and user-friendly interfaces.",
      ],
    },
    {
      title: "Full stack Web Developer",
      company_name: "Freelancer",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "July 2024 - Present",
      points: [
"Building full-stack web applications using the MERN stack (MongoDB, Express.js, React, Node.js).",
"Implementing responsive designs and ensuring cross-platform functionality.",
"Developing RESTful APIs to enable communication between the frontend and backend.",
"Collaborating with clients to transform designs into functional and user-friendly interfaces.",
      ],
    },
  ];

  const certifications = [
    {
      title: "React Native Internship Completion Letter",
      date: "01 September 2023",
      issuedBy: "V3 Solution (Private Limited)",
      image: v3_letter,
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
      image: "https://cdn.pixabay.com/photo/2023/09/16/21/31/girl-8257551_1280.jpg",
    },
    {
      testimonial:
        "The logo and flyers created for our brand were beyond amazing. They captured our vision perfectly, and our clients loved the new designs!",
      name: "Seikh Saud",
      image: "https://img.freepik.com/premium-photo/stylized-character-collection-3d-neon-monochrome-designs_984027-170112.jpg?w=740",
    },
    {
      testimonial:
        "The UI/UX design work for our meal-mentor platform was exceptional. The user experience is smooth and intuitive.",
      name: "Ayesha",
      image: "https://img.freepik.com/free-photo/3d-rendering-beautiful-girl-superhero-costume-city_1142-54915.jpg?t=st=1737515243~exp=1737518843~hmac=87caeea4cde94d2f4011cf6c00584290157c7d71ae2763b6d54509e28ff7f92b&w=740",
    },
  ];
  
  const projects = [
    {
      name: "MERN Real-Estate",
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
        }        
      ],
      image: carrent,
      source_code_link: "https://github.com/itshahryar/mern-realEstate",
    },
    {
      name: "FYP (Ongoing)",
      description:
        "My FYP is a (web-based) construction site monitoring system that focuses on real-time monitoring, anomaly detection using computer vision, and incident management. It includes user administration, supervisor's supervision, site assigning, camera integration, and reporting tools to improve productivity, security, and efficiency on construction sites.",
        tags: [
          {
            name: "Python",
            color: "yellow-text-gradient",
          },
          {
            name: "JavaScript",
            color: "blue-text-gradient",
          },
          {
            name: "Node.js",
            color: "green-text-gradient",
          },
          {
            name: "React",
            color: "cyan-text-gradient",
          },
          {
            name: "Pytorch",
            color: "purple-text-gradient",
          },
          {
            name: "TensorFlow",
            color: "red-text-gradient",
          },
          {
            name: "FastApi",
            color: "orange-text-gradient",
          },
          {
            name: "OpenCv",
            color: "green-text-gradient",
          },
          {
            name: "Matplotlib",
            color: "pink-text-gradient",
          },
          {
            name: "Yolov8",
            color: "violet-text-gradient",
          },
          {
            name: "tailwind",
            color: "pink-text-gradient",
          },
          {
            name: "Material UI",
            color: "purple-text-gradient",
          },
          {
            name: "Machine Learning",
            color: "blue-text-gradient",
          }                    
        ],        
      image: jobit,
      source_code_link: "https://github.com/itshahryar/FYP",
    },
    {
      name: "MealMentor - UI/UX",
      description:
        "MealMentor is an app that simplifies meal planning for busy parents by offering personalized recipes based on available ingredients, dietary needs, and health conditions. It features grocery management tools, meal reminders, and visual guides to make cooking easier and healthier.",
      tags: [
        {
          name: "Figma",
          color: "pink-text-gradient",
        },
      ],
      image: hci,
      source_code_link: "https://www.figma.com/design/QlqOhw2cJg8llLHrX7S4ib/MealMentor-HCI-Lab-Terminal?node-id=0-1&p=f&t=YSSEaiYXV8GAu70L-0",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects, certifications };
  
