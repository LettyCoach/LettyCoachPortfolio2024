import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
  StringKeyValueType,
  SocialSectionType,
  FooterSectionType
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  meta,
  carrent,
  jobit,
  tripguide,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "tech",
    title: "Skills",
  },
  {
    id: "project",
    title: "Project",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Fullstack Developer",
    icon: web,
  },
  {
    title: "Blockchain Developer",
    icon: creator,
  },
  {
    title: "ChatGPT API Expert",
    icon: mobile,
  },
  {
    title: "Infrastructure Manager",
    icon: backend,
  },
];

const technologies: TTechnology[] = [
  {
    title: "HTML",
    hash: "#html",
    icon: "devicon:html5",
    color: "#f16529",
  },
  {
    title: "CSS",
    hash: "#css",
    icon: "devicon:css3",
    color: "#33a9dc",
  },
  {
    title: "SASS/SCSS",
    hash: "#sass_scss",
    icon: "skill-icons:sass",
    color: "#cd6799",
  },
  {
    title: "Bootstrap",
    hash: "#bootstrap",
    icon: "skill-icons:bootstrap",
    color: "#9013fe",
  },
  {
    title: "Tailwind",
    hash: "#tailwind",
    icon: "skill-icons:tailwindcss-dark",
    color: "#32b1c1",
  },
  {
    title: "JavaScript",
    hash: "#javascript",
    icon: "skill-icons:javascript",
    color: "#f0db4f",
  },
  {
    title: "TypeScript",
    hash: "#typescript",
    icon: "skill-icons:typescript",
    color: "#FFFFFF",
  },
  {
    title: "React",
    hash: "#react",
    icon: "skill-icons:react-dark",
    color: "#00d8ff",
  },
  {
    title: "Next.js",
    hash: "#nextjs",
    icon: "tabler:brand-nextjs",
    color: "#FFFFFF",
  },
  {
    title: "Redux Toolkit",
    hash: "#redux",
    icon: "devicon:redux",
    color: "#764abc",
  },
  {
    title: "Ant Design",
    hash: "#antdesign",
    icon: "devicon:antdesign",
    color: "#4285eb",
  },
  {
    title: "MUI",
    hash: "#mui",
    icon: "simple-icons:mui",
    color: "#FFFFFF",
  },
  {
    title: "Three.js",
    hash: "#threejs",
    icon: "skill-icons:threejs-dark",
    color: "#ffffff",
  },
  {
    title: "Vue.js",
    hash: "#vuejs",
    icon: "skill-icons:vuejs-dark",
    color: "#41b883",
  },
  {
    title: "Nuxt",
    hash: "#nuxt",
    icon: "skill-icons:nuxtjs-dark",
    color: "#00dc82",
  },
  {
    title: "Pinia",
    hash: "#pinia",
    icon: "logos:pinia",
    color: "#8ae99c",
  },
  {
    title: "Vuefify",
    hash: "#vuetify",
    icon: "skill-icons:vuetify-dark",
    color: "",
  },
  {
    title: "React Native",
    hash: "#reactnative",
    icon: "tabler:brand-react-native",
    color: "#ffffff"
  },
  {
    title: "Flutter",
    hash: "#flutter",
    icon: "skill-icons:flutter-dark",
    color: "#1fbcfd"
  },
  {
    title: "Node.js",
    hash: "#nodejs",
    icon: "skill-icons:nodejs-dark",
    color: "#81cd39",
  },
  {
    title: "Express",
    hash: "#express",
    icon: "skill-icons:expressjs-dark",
    color: "#FFFFFF",
  },
  {
    title: "NestJS",
    hash: "#nest",
    icon: "skill-icons:nestjs-dark",
    color: "#e0234e",
  },
  {
    title: "Laravel",
    hash: "#laravel",
    icon: "skill-icons:laravel-dark",
    color: "#ff2d20",
  },
  {
    title: "Python",
    hash: "#python",
    icon: "skill-icons:python-dark",
    color: "#ffc331",
  },
  {
    title: "Django",
    hash: "#django",
    icon: "skill-icons:django",
    color: "#FFFFFF",
  },
  {
    title: "MongoDB",
    hash: "#mongodb",
    icon: "skill-icons:mongodb",
    color: "#10aa50",
  },
  {
    title: "Git",
    hash: "#git",
    icon: "skill-icons:git",
    color: "#f03c2e",
  },
  {
    title: "GraphQL",
    hash: "#graphql",
    icon: "skill-icons:graphql-dark",
    color: "#e535ab",
  },
  {
    title: "Docker",
    hash: "#docker",
    icon: "skill-icons:docker",
    color: "#2396ed",
  },
  {
    title: "AWS",
    hash: "#aws",
    icon: "skill-icons:aws-dark",
    color: "#f90",
  },
  {
    title: "Google Cloud Platform",
    hash: "#gcp",
    icon: "skill-icons:gcp-dark",
    color: "#fbbc05",
  },
  {
    title: "Firebase",
    hash: "#firebase",
    icon: "logos:firebase",
    color: "#f6820c"
  },
  {
    title: "SendGrid",
    hash: "#sendgrid",
    icon: "logos:sendgrid-icon",
    color: "#00a9d1",
  },
  {
    title: "Storybook",
    hash: "#storybook",
    icon: "logos:storybook-icon",
    color: "#ff4785",
  },
  {
    title: "Jest",
    hash: "#jest",
    icon: "skill-icons:jest",
    color: "#99424f",
  },
  {
    title: "Gatsby",
    hash: "#gatsby",
    icon: "skill-icons:gatsby",
    color: "#639",
  },
  {
    title: "ChatGPT API",
    hash: "#chatgpt",
    icon: "arcticons:openai-chatgpt",
    color: "#ffffff",
  },
  /////////////////////////////
  {
    title: "Solidity",
    hash: "#solidity",
    icon: "skill-icons:solidity",
    color: "#65afff",
  },
  {
    title: "Hardhat",
    hash: "#hardhat",
    icon: "devicon:hardhat",
    color: "#fff100",
  },
  {
    title: "Truffle",
    hash: "#truffle",
    icon: "logos:truffle-icon",
    color: "#5e464d",
  },
  {
    title: "Ganache",
    hash: "#ganache",
    icon: "logos:ganache-icon",
    color: "#e4a663",
  },
  {
    title: "Chainlink",
    hash: "#chainlink",
    icon: "simple-icons:chainlink",
    color: "#ffffff",
  },
  {
    title: "Ether.js",
    hash: "#etherjs",
    icon: "logos:ethers",
    color: "#24339b",
  },
  {
    title: "Moralis",
    hash: "#moralis",
    icon: "icon-park:blockchain",
    color: "#2f88ff",
  },
  {
    title: "Uniswap V2 & V3",
    hash: "#uniswapv2v3",
    icon: "icon-park-twotone:blockchain",
    color: "#ffffff",
  },
  ////////////////////////
  {
    title: "Slack",
    hash: "#slack",
    icon: "devicon:slack",
    color: "#de1c59",
  },
  {
    title: "Discord",
    hash: "#discord",
    icon: "skill-icons:discord",
    color: "#5865f2",
  },
  {
    title: "Skype",
    hash: "#skype",
    icon: "logos:skype",
    color: "#0078d4",
  },
  {
    title: "Telegram",
    hash: "#telegram",
    icon: "logos:telegram",
    color: "#ffffff",
  },
  {
    title: "WhatsApp",
    hash: "#chatgpt",
    icon: "logos:whatsapp-icon",
    color: "#ffffff",
  },

];

const experiences: TExperience[] = [
  {
    title: "Fronend Developer",
    companyName: "Dreher Consulting",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "May 2016 - March 2018",
    points: [
      "React & Next, Vue & Nuxt, Tailwind, Vuetify, Bootstrap, ...",
      "Built many advertising websites, matching sites and Landing pages.",
      "Developed and maintained design systems that separates design logic.",
      "Understanding client needs and proposing effective solutions, which also involves strategising and planning.",
      
    ],
  },
  {
    title: "Fullstack Developer",
    companyName: "NEXTs",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "March 2018 - Dec 2021",
    points: [
      "MERN, Laravel + Vue, Django",
      "From programming in the front-end and back-end fields to server deployment, I was responsible for completed it.",
      "Integration with various APIs",
      "Carry out quality assurance tests to discover errors and optimize usability."
    ],
  },
  {
    title: "Bolckchain Developer",
    companyName: "Launchlabs",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Dec 2023",
    points: [
      "React + Web3JS, React + EthersJS",
      "Implementation of a function that can automatically perform “Farming” on various platforms of 9 chains.(BSC, Solana, Ethereum, TRON, Avalanche, Fantom, CRONOS, CARDANO, Algorand)"
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Letty proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Letty does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Letty optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
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
    liveDemoLink: "",
    sourceCodeLink: "https://github.com/",
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
    liveDemoLink: "",
    sourceCodeLink: "https://github.com/",
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
    liveDemoLink: "",
    sourceCodeLink: "https://github.com/",
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
    liveDemoLink: "",
    sourceCodeLink: "https://github.com/",
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
    liveDemoLink: "",
    sourceCodeLink: "https://github.com/",
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
    liveDemoLink: "",
    sourceCodeLink: "https://github.com/",
  },
];

const socialLinks: StringKeyValueType = {
  facebook: 'https://www.facebook.com/LettyCoach',
  instagram: 'https://www.instagram.com/LettyCoach',
  twitter: 'https://twitter.com/LettyCoach',
  github: 'https://github.com/LettyCoach',
  linkedin: 'https://www.linkedin.com/in/LettyCoach/',
};

const author = {
  name: 'Letty Coach',
  email: 'laneandyumiko@gmail.com',
};

const seoData = {
  title: 'Letty Coach | Web & Blockchain Developer',
  description:
    'Letty Coach is a front-end developer who specializes in building (and occasionally designing) exceptional visual interfaces.',
  author: author.name,
  image:
    'https://user-images.githubusercontent.com/68834718/217467445-0b0d2d63-f8ad-4702-8474-814eb2cbb3be.png',
  url: 'https://lettycoach.vercel.app/',
  keywords: [
    'Letty',
    'Letty Coach',
    '@LettyCoach',
    'LettyCoach',
    'Portfolio',
    'Letty Coach ',
    'Letty Coach Portfolio',
  ],
};

const socialSection: SocialSectionType = {
  socialLinks: [
    {
      icon: 'tabler:brand-github',
      url: socialLinks.github,
    },
    {
      icon: 'mdi:instagram',
      url: socialLinks.instagram,
    },
    {
      icon: 'lucide:twitter',
      url: socialLinks.twitter,
    },
    {
      icon: 'lucide:linkedin',
      url: socialLinks.linkedin,
    },
    {
      icon: 'lucide:facebook',
      url: socialLinks.facebook,
    },
    {
      icon: 'mdi:skype',
      url: socialLinks.facebook,
    },
    {
      icon: 'ic:baseline-discord',
      url: socialLinks.facebook,
    },
    {
      icon: 'iconoir:telegram',
      url: socialLinks.facebook,
    },
  ],
};

const footerSection: FooterSectionType = {
  title: 'Design & Built by Letty Coach',
  link: 'https://github.com/LettyCoach/LettyCoachPortfolio2024',
};

export { services, technologies, experiences, testimonials, projects, socialLinks, author, seoData, socialSection, footerSection };
