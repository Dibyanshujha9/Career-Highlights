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
    title: 'LIFELINE MANAGER',
    description: 'A full-stack blood bank management system using the MERN stack. Supports real-time donor registration, hospital coordination, and blood inventory monitoring. Architected scalable frontend infrastructure using MVC and Redux, secure routing with JWT, and integrated RESTful APIs via Axios with robust middleware.',
    technologies: ['MERN Stack', 'Redux', 'JWT', 'Axios', 'MVC'],
    link: 'https://bloodsupport.info',
    repo: 'https://github.com/Dibyanshujha9/LifelineManager', // Example repo link
  },
  {
    title: 'Realtime Location Tracker',
    description: 'A robust real-time device tracking application built with Node.js, Express, and Socket.IO, featuring dynamic map integration using Leaflet.js. Designed for real-time monitoring of device locations on an interactive map.',
    technologies: ['Node.js', 'Express.js', 'Socket.io', 'Leaflet.js', 'EJS'],
    repo: 'https://github.com/Dibyanshujha9/Realtime_location_Tracker',
  },
  {
    title: 'Drive Cloud',
    description: 'A robust authentication system built with Node.js, Express, and MongoDB. Features secure cookie-based session management, file uploads integrated with Cloudinary, and dynamic views rendered using EJS. Frontend designed with Tailwind CSS and Flowbite.',
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
