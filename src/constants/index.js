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
  starbucks,
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
    title: "Web Desinger",
    icon: mobile,
  },
  {
    title: "React Developer",
    icon: backend,
  },
  {
    title: "SEO",
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
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
 
];

const experiences = [
  {
    title: "Front end Developer",
    company_name: "Medsoft Technologies",
    icon: starbucks,
    iconBg: "#383E56",
    date: "June 2021 - June 2023",
    points: [
      "Developing and maintaining web applications using ASP.NET and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Geeks Root",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2020 - Jan 2021",
    points: [
      "Developing and maintaining websites using WordPress and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Ghani Business Solution",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2019 - sept 2019",
    points: [
      "Developing and maintaining web applications using Wordpress and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Bakhtawar proved me wrong.",
    name: "Sara Lee",
  
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Bakhtawar does.",
    name: "Chris Brown",
    
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Bakhtawar optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
   
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Portfolio Designs",
    description:
      "Web-based platform that allows users to Create their Design Portfolio Design Ideas Websites from convenient and efficient",
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
    source_code_link: "https://bakhtawr.github.io/portfolio_react/",
  },
  {
    name: "Cars Hub",
    description:
      "Search movies online. Streamline your car rental experience with our effortless booking process.",
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
    image: 'https://t4.ftcdn.net/jpg/01/46/89/33/240_F_146893339_W7gl4KxGZkDlaac8f64FpFLRSeyWmzt9.jpg',
    source_code_link: "https://cars-zone-d1lx9wus6-bakhtawars-projects.vercel.app",
  },
  {
    name: "Food Kitchen",
    description:
      "One of the greatest things about the kitchen is that it holds its power regardless of its size. You can have the biggest, most luxurious kitchen",
    tags: [
      {
        name: "React",
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
    image: 'https://i.postimg.cc/g0rRmQYg/bakhtawr-github-io-React-App.png',
    source_code_link: "https://bakhtawr.github.io/kitchenfoods/",
  },
  {
    name: "Movie Land",
    description:
      "Search movies online with Movies Anywhere. Stream movies from Disney, Fox, Sony, Universal, and Warner Bros. ",
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
    source_code_link: "https://bakhtawr.github.io/movieland/",
  },
  {
    name: "3DFolio Youtube",
    description:
      "You can watch and like videos and subscribe to channels with a Google Account. But without a YouTube channel, you have no public presence on YouTube",
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
    image: 'https://i.ibb.co/B2MFrVf/localhost-3000-YOUTUBE3-DFOLIO.png',
    source_code_link: "https://bakhtawr.github.io/project_youtube_clone-main/",
  },
  {
    name: "Gym Exercise",
    description:
      "Gym World Push harder than yesterday if you want a different tomorrow.” – Vincent Williams Sr. “The real workout starts when you want to stop",
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
    source_code_link: "https://bakhtawr.github.io/gym_exercises/",
  },
  {
    name: "Sound Star Music",
    description:
      "Doubt yourself and you doubt everything you see. Judge yourself and you see judges everywhere. But if you listen to the sound of your own voice, you can rise",
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
    image: 'https://i.ibb.co/1967RxN/localhost-3001-Sound-Cloud-Web.png',
    source_code_link: "https://github.com/Bakhtawr/musicweb",
  },
 
];

export { services, technologies, experiences, testimonials, projects };
