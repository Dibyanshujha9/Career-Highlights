import type { LucideIcon } from 'lucide-react';
import { Code, Database, Cloud, Server, Settings, BrainCircuit, MonitorSmartphone, BarChart, GitBranch, Github, Linkedin, Mail } from 'lucide-react';

export interface Skill {
  name: string;
  icon?: LucideIcon | React.FC<React.SVGProps<SVGSVGElement>>;
}


export interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    
    title: 'Programming Languages',
    icon: Code,
    skills: [
      { name: 'C/C++ (DSA)' },
      { name: 'JavaScript (TS)' },
    ],
  },
  {
    title: 'Computer Science',
    icon: BrainCircuit,
    skills: [
      { name: 'Data Structures' },
      { name: 'Algorithms' },
      { name: 'OOP' },
      { name: 'Operating Systems' },
      { name: 'DBMS' },
    ],
  },
  {
    title: 'Frontend',
    icon: MonitorSmartphone,
    skills: [
      { name: 'ReactJS' },
      { name: 'Redux' },
      { name: 'Next.js' },
      { name: 'HTML' },
      { name: 'CSS' },
      { name: 'Bootstrap' },
      { name: 'Tailwind CSS' },
    ],
  },
  {
    title: 'Backend',
    icon: Server,
    skills: [
      { name: 'Node.js' },
      { name: 'Express.js' },
      { name: 'REST API' },
      { name: 'Socket.io' },
      { name: 'Postman' },
    ],
  },
  {
    title: 'Database',
    icon: Database,
    skills: [
      { name: 'MongoDB' },
      { name: 'SQL' },
      { name: 'Redis' },
    ],
  },
  {
    title: 'DevOps & Tools',
    icon: Settings,
    skills: [
      { name: 'AWS (Intermediate)' },
      { name: 'Git' },
      { name: 'GitHub' },
    ],
  },
];

export interface Experience {
  role: string;
  company: string;
  duration: string;
  points: string[];
}

export const experienceData: Experience[] = [
  {
    role: 'Full Stack Developer',
    company: 'INNOTRAT LABS PVT. LTD',
    duration: 'Sep 2024 – Mar 2025',
    points: [
      'Architected and delivered INNOIDE, a multi-language code editor that reduced development time by 30% through innovative features including interactive flowcharts, multi-tab navigation, real-time customization, and Dark/Light Mode support.',
      'Led front-end and back-end API integration strategy for a team of 5 developers, reducing request latency by 20% while implementing a robust error-handling system that decreased critical incidents by 35% during peak usage periods.',
      'Solved device testing bottlenecks by developing simulation APIs and file management endpoints that enabled virtual testing environments, reducing hardware requirements by $75K annually while increasing test coverage by 40%.',
      'Led performance optimization initiative that enhanced API efficiency by 15%, resulting in 3x faster third-party integrations and eliminating customer-reported timeout issue, directly contributing to a 25% increase in developer satisfaction scores.',
    ],
  },
  {
    role: 'React Developer',
    company: 'LET’S TRY',
    duration: 'Jul 2024 – Oct 2024',
    points: [
      'Architected and deployed a full-stack, responsive company website using React, establishing a professional digital presence with seamless backend integration.',
      'Optimized React component rendering and implemented efficient state management, reducing page load times by 40% and significantly improving user engagement metrics.',
      'Integrated EmailJS for dynamic contact form submissions, including phone number capture and validation, enhancing lead generation and automating email workflows.',
    ],
  },
];

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  repo?: string; // Added optional repo link
}

export const projectsData: Project[] = [
  {
    title: 'Soil Sense',
    description: 'Developed a soil analysis web application leveraging OpenCV, HSV color space transformation, and Random Forest classification for accurate NPK deficiency detection, reducing manual testing time by 60%. Integrated FastAPI with a React + TypeScript frontend, streamlining real-time image inference and achieving a 45% improvement in processing speed over the initial Colab-based prototype. Implemented weather-based fertilizer recommendation logic using third-party Weather APIs, enhancing fertilizer timing accuracy and increasing actionable insights by 70%. Designed a responsive UI with real-time image previews, automated reports, and contextual fertilizer suggestions, boosting user engagement and contributing to a 40% increase in application usage post-release.',
    technologies: ['OpenCV', 'FastAPI', 'React', 'TypeScript', 'Random Forest', 'HSV Color Space', 'Weather API'],
    link: 'http://soilsense-ai.netlify.app',
    repo: 'https://github.com/Dibyanshujha9/SoilSense',
  },
  {
    title: 'LIFELINE MANAGER',
    description: 'Engineered a MERN-based blood bank management system, LIFELINE MANAGER, achieving production-readiness. Implemented a scalable MVC/Redux frontend architecture, which reduced state-related bugs by 35%. Developed robust JWT authentication with role-based access control, decreasing unauthorized access incidents by 40%. Optimized Axios middleware for RESTful API integration, resulting in 25% faster API response times. Enhanced user experience with adaptive loading states and intuitive UI, increasing user engagement by 30% and significantly reducing application crash rates.',
    technologies: ['MERN Stack', 'Redux', 'JWT', 'Axios', 'MVC'],
    link: 'https://bloodsupport.info',
    repo: 'https://github.com/Dibyanshujha9/LIFELINE-MANAGER',
  },
  {
    title: 'Realtime Location Tracker',
    description: 'Architected a real-time device tracking solution utilizing a Node.js/Express backend and Socket.IO for persistent, low-latency bidirectional communication. Integrated Leaflet.js for dynamic and interactive map visualization of device locations. The system delivers continuous, high-fidelity monitoring with geospatial awareness, tailored for applications requiring instant location updates and geographical context. The architecture supports scalable device management with minimal communication latency.',
    technologies: ['Node.js', 'Express.js', 'Socket.io', 'Leaflet.js', 'EJS'],
    repo: 'https://github.com/Dibyanshujha9/Realtime_location_Tracker',
  },
  {
    title: 'Drive Cloud',
    description: 'Developed a secure file management and cloud storage system using Node.js, Express, and MongoDB. Implemented robust JWT-based authentication with bcrypt hashing for enhanced data security and user session management. Integrated Cloudinary as the core cloud storage solution, enabling scalable file operations including uploads, downloads, and optimized retrieval pathways. Designed and implemented responsive server-rendered interfaces using EJS templates, styled with Tailwind CSS and Flowbite components for an intuitive and modern user experience.',
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'bcrypt', 'EJS', 'Cloudinary', 'Tailwind CSS', 'Flowbite'],
    repo: 'https://github.com/Dibyanshujha9/drive_cloud',
  },
];


export interface Education {
  degree: string;
  institution: string;
  location: string;
  duration: string;
}

export const educationData: Education[] = [
  {
    degree: 'Bachelor of Technology in Computer Science',
    institution: 'USICT, Guru Gobind Singh Indraprastha University',
    location: 'Delhi, Dwarka',
    duration: '2022 - 2026',
  },
];

export interface ContactLink {
    name: string;
    url: string;
    icon: LucideIcon;
}

export const contactLinks: ContactLink[] = [
    { name: 'GitHub', url: 'https://github.com/Dibyanshujha9', icon: Github },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/dibyanshu-jha/', icon: Linkedin },
    { name: 'Email', url: 'mailto:jhadibyanshu46@gmail.com', icon: Mail },
]

