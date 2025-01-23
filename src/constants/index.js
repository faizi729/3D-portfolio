import {
    mobile,
    backend,
    creator,
    web,
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
    
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "AI Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "MERN Developer",
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
      name: "React JS",
      icon: reactjs,
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
      name: "Three JS",
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
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "12th Grade - CBSE Board",
      company_name: "sri sankara Vidhayalay",
      icon: tesla,
      iconBg: "#000000",
      date: "Completed in 2022",
      points: [
        "Developed a strong foundation in science and mathematics.",
    "Excelled in subjects like Physics, Chemistry, and Mathematics, which laid the groundwork for AI/ML studies.",
    "Participated in academic activities and group projects, honing collaborative and analytical skills.",
      ],
    },
    {
      title: "B.Tech in Artificial Intelligence and Machine Learning",
      company_name: "RSR-RCET Bhilai",
      icon: tesla,
      iconBg: "#000000",
      date: "2022-present",
      points: [
        "Pursuing a degree in Artificial Intelligence and Machine Learning, focusing on programming, algorithms, and data analysis.",
    "Engaged in projects combining web development and AI/ML, including real-world applications such as oral health detection using X-rays.",
    "Gained knowledge in programming languages like Python and JavaScript, alongside tools like OpenCV for AI applications.",
    "Exploring the MERN stack to integrate front-end and back-end development with AI capabilities.",
      ],
    },
    {
      title: "Web Developer skills",
      company_name: "udemy",
      icon: shopify,
      iconBg: "#000000",
      date: "ongoing",
      points: [
       "Acquired proficiency in HTML, CSS, and JavaScript, building user-friendly and responsive websites.",
    "Currently learning the MERN stack to advance full-stack development capabilities.",
    "Leveraging skills to create intelligent, data-driven web applications integrating AI/ML.",
    "Actively contributing to personal projects, enhancing technical expertise and problem-solving abilities."
  ],,
      ],
    },
    {
      title: "Oral Health Detection System",
      company_name: "Personal Project",
      icon: meta,
      iconBg: "#000000",
      date: "2024 - Ongoing",
      points: [
       "Developing a system that utilizes X-rays to detect oral health issues such as oral cancer, gum diseases, and cavities.",
    "Implementing machine learning algorithms for image processing and classification using tools like OpenCV and Python.",
    "Integrating AI/ML models into a user-friendly interface for dentists and healthcare professionals.",
    "Focusing on building an end-to-end solution from data preprocessing to deployment."
  ],,
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought creating a smart, innovative web app was impossible, but this developer proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "Building a web solution as intelligent as the concept seemed impossible—until this programmer delivered it.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "I doubted we could match the intelligence of our vision online, but this developer made it a reality.",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
