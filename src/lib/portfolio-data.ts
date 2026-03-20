import { Globe, Smartphone, Palette, Shield, Zap, Layers, BarChart, LucideIcon } from "lucide-react";

export interface ProjectFeature {
  title: string;
  icon: LucideIcon;
  desc: string;
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  year: string;
  duration: string;
  client: string;
  designedBy: string;
  development: string;
  services: string;
  desc: string;
  icon: LucideIcon;
  color: string;
  fullDesc: string;
  highlight: string;
  challenge: string;
  solution: string;
  results: string[];
  tech: string[];
  projectLink: string;
  features: ProjectFeature[];
  image?: string;
}

export const projects: Project[] = [
  {
    slug: "prince-adeola",
    title: "Prince Adeola",
    category: "Personal Brand & Book Platform",
    year: "2024",
    duration: "4 Weeks",
    client: "Prince Adeola",
    designedBy: "Chokmarh UI",
    development: "Engineering Team",
    services: "UI/UX, Web Development",
    desc: "A personal brand and book-focused website designed to establish authority, showcase thought leadership, and create a central platform for audience engagement.",
    icon: Globe,
    color: "bg-purple-600/10",
    fullDesc: "We designed and developed a personal brand platform that communicates authority while remaining simple and engaging. The platform was structured to clearly communicate the brand’s message, highlight books and content effectively, provide a seamless user experience, and position the brand as a thought leader.",
    highlight: "The result is a professional, structured digital presence that strengthens credibility, improves audience engagement, and provides a central platform for content and book promotion.",
    challenge: "Personal brands often struggle with a lack of a structured digital presence, poor representation of their voice and message, and difficulty showcasing books, content, and impact in one place. Websites often feel generic and fail to build authority.",
    solution: "The goal was to create a platform that reflects credibility, clarity, and influence. We designed a platform that communicates authority while remaining simple and engaging.",
    results: [
      "Strengthens credibility",
      "Improves audience engagement",
      "Provides a central platform for content and book promotion"
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "GSAP"],
    projectLink: "https://princeadeola.com",
    image: "/assets/images/portfolio-images/prince.png",
    features: [
      { title: "Personal Brand Layout", icon: Palette, desc: "Personal brand storytelling layout." },
      { title: "Book Showcase", icon: Layers, desc: "Book showcase and promotion section." },
      { title: "Visual Hierarchy", icon: BarChart, desc: "Strong visual hierarchy for authority." }
    ]
  },
  {
    slug: "isaac-tomz",
    title: "Isaac Tomz Services Ltd",
    category: "Construction & Architectural Brand",
    year: "2024",
    duration: "6 Weeks",
    client: "Isaac Tomz Services Ltd",
    designedBy: "Chokmarh UI",
    development: "Engineering Team",
    services: "Corporate Branding, Web Development",
    desc: "A corporate website designed to represent a construction and architectural company with professionalism, clarity, and trust.",
    icon: Globe,
    color: "bg-orange-600/10",
    fullDesc: "We developed a modern corporate website that clearly presents the company’s services, projects, and brand identity. The platform was structured to highlight services and capabilities, showcase projects visually, build trust with potential clients, and present the brand in a professional and structured manner.",
    highlight: "The result is a professional digital presence that enhances brand credibility, builds trust with potential clients, and positions the company as a serious and capable construction brand.",
    challenge: "Construction and architectural companies often face poor online representation, outdated or non-existent websites, difficulty showcasing projects and capabilities, and a lack of trust from potential clients due to weak digital presence.",
    solution: "We developed a modern corporate website that clearly presents the company’s services, projects, and brand identity, focusing on credibility, expertise, and professionalism.",
    results: [
      "Enhances brand credibility",
      "Builds trust with potential clients",
      "Positions the company as a serious and capable construction brand"
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "GSAP"],
    projectLink: "https://isaactomzservicesltd.com",
    image: "/assets/images/portfolio-images/isaac.png",
    features: [
      { title: "Clean Corporate Design", icon: Palette, desc: "A modern design that reflects professionalism and trust." },
      { title: "Project Showcase", icon: Layers, desc: "Visual sections to display completed construction work." },
      { title: "Mobile-responsive", icon: Smartphone, desc: "Seamless experience across all devices." }
    ]
  },
  {
    slug: "ea-forever",
    title: "EAforever",
    category: "Wedding & Personal Story",
    year: "2023",
    duration: "4 Weeks",
    client: "EAforever",
    designedBy: "Chokmarh UI",
    development: "Full Stack Team",
    services: "UI/UX, Full-stack Development",
    desc: "A full website that brings a personal story to life online. The site delivers a seamless, responsive user experience across devices.",
    icon: Globe,
    color: "bg-pink-600/10",
    fullDesc: "We partnered with EAforever to build a full website that brings a personal story to life online. The site delivers a seamless, responsive user experience across devices. We handled complete front-end and back-end development, including intuitive navigation, visuals, image galleries, and user‑friendly RSVP & registry sections.",
    highlight: "The project highlights our ability to craft user-focused web solutions that balance aesthetics with functionality, making each visitor interaction smooth, memorable, and meaningful.",
    challenge: "Creating a high-performance website optimized for design, accessibility, and ease-of-use while giving audience a smooth, memorable user journey.",
    solution: "Handled complete front-end and back-end development, including intuitive navigation, visuals, image galleries, and user‑friendly RSVP & registry sections.",
    results: [
      "A polished, high‑performance website",
      "Optimised for design, accessibility, and ease-of-use",
      "Smooth, memorable user journey"
    ],
    tech: ["React", "Node.js", "Tailwind CSS", "Framer Motion"],
    projectLink: "https://eaforever.com",
    image: "/assets/images/portfolio-images/ea.png",
    features: [
      { title: "Image Galleries", icon: Palette, desc: "Beautifully presented visuals and story sections." },
      { title: "RSVP & Registry", icon: Zap, desc: "User‑friendly sections for engagement." },
      { title: "Memorable UX", icon: Smartphone, desc: "A smooth and engaging user journey." }
    ]
  },
  // {
  //   slug: "nexgen-fintech",
  //   title: "NexGen Fintech",
  //   category: "Web Platform",
  //   year: "2024",
  //   duration: "4 Weeks",
  //   client: "NexGen Solutions",
  //   designedBy: "Chokmarh UI",
  //   development: "Engineering Team",
  //   services: "UIUX, Web Development",
  //   desc: "A secure, scalable dashboard for high-frequency trading. Built with React and Node.js, focusing on low-latency data visualization.",
  //   icon: Globe,
  //   color: "bg-blue-600/10",
  //   fullDesc: "We partnered with NexGen Fintech to build a full website that brings a personal story to life online. The site delivers a seamless, responsive user experience across devices. We handled complete front-end and back-end development, including intuitive navigation, visuals, image galleries, and user-friendly RSVP & registry sections. The result: a polished, high-performance website optimised for design, accessibility, and ease-of-use — giving NexGen's audience a smooth, memorable user journey.",
  //   highlight: "The project highlights our ability to craft user-focused web solutions that balance aesthetics with functionality, making each visitor interaction smooth, memorable, and meaningful. NexGen demonstrates how we transform creative concepts into polished, high-impact web experiences.",
  //   challenge: "The primary challenge was managing massive data streams without compromising UI responsiveness. Legacy systems were prone to stuttering during high market volatility.",
  //   solution: "We implemented a custom WebSocket layer and optimized React rendering cycles to handle high-frequency updates. The backend was built on a microservices architecture to ensure horizontal scalability.",
  //   results: [
  //     "35% increase in trading volume within the first quarter.",
  //     "99.99% uptime during peak market hours.",
  //     "Reduced data latency by over 200ms compared to the previous system."
  //   ],
  //   tech: ["React", "Node.js", "WebSockets", "Redis", "AWS"],
  //   projectLink: "https://nexgen-fintech.vercel.app",
  //   features: [
  //     { title: "Real-time Charts", icon: BarChart, desc: "Ultra-fast data visualization using Canvas API." },
  //     { title: "Secure Auth", icon: Shield, desc: "Multi-layer biometric and hardware token support." },
  //     { title: "Instant Execution", icon: Zap, desc: "Optimized order routing for minimal slippage." }
  //   ]
  // },
  // {
  //   slug: "ecopulse",
  //   title: "EcoPulse",
  //   category: "Mobile App",
  //   year: "2023",
  //   duration: "6 Weeks",
  //   client: "EcoPulse Org",
  //   designedBy: "Chokmarh UI",
  //   development: "Mobile Team",
  //   services: "Mobile Design, App Dev",
  //   desc: "A community-driven sustainability tracker. Engineered for seamless cross-platform performance with a focus on real-time data sync.",
  //   icon: Smartphone,
  //   color: "bg-accent/10",
  //   fullDesc: "We partnered with EcoPulse to build a full website that brings a personal story to life online. The site delivers a seamless, responsive user experience across devices. We handled complete front-end and back-end development, including intuitive navigation, visuals, image galleries, and user-friendly RSVP & registry sections. The result: a polished, high-performance website optimised for design, accessibility, and ease-of-use — giving EcoPulse's audience a smooth, memorable user journey.",
  //   highlight: "The project highlights our ability to craft user-focused web solutions that balance aesthetics with functionality, making each visitor interaction smooth, memorable, and meaningful. EcoPulse demonstrates how we transform creative concepts into polished, high-impact web experiences.",
  //   challenge: "Maintaining a consistent experience across iOS and Android while ensuring offline functionality for users in remote areas.",
  //   solution: "Leveraged Flutter for cross-platform efficiency and implemented an 'Offline-First' architecture with local database syncing.",
  //   results: [
  //     "100,000+ active users within 6 months.",
  //     "Winner of the 2023 Green Tech Innovation Award.",
  //     "Average daily engagement time of 12 minutes per user."
  //   ],
  //   tech: ["Flutter", "Firebase", "Node.js", "Google Maps SDK"],
  //   projectLink: "https://ecopulse.vercel.app",
  //   features: [
  //     { title: "Social Tracking", icon: Layers, desc: "Compete with friends on sustainability leaderboards." },
  //     { title: "Smart Scanning", icon: Zap, desc: "AI-powered product scanning for eco-impact scores." },
  //     { title: "Offline Sync", icon: Shield, desc: "Track activities anywhere, sync when back online." }
  //   ]
  // },
  // {
  //   slug: "vortex-crm",
  //   title: "Vortex CRM",
  //   category: "Product Design",
  //   year: "2024",
  //   duration: "8 Weeks",
  //   client: "Vortex Enterprise",
  //   designedBy: "Chokmarh UI",
  //   development: "Design Team",
  //   services: "Product Design, UI/UX",
  //   desc: "Comprehensive design system and interface overhaul for an enterprise sales platform. Focused on reducing friction and cognitive load.",
  //   icon: Palette,
  //   color: "bg-primary/10",
  //   fullDesc: "We partnered with Vortex CRM to build a full website that brings a personal story to life online. The site delivers a seamless, responsive user experience across devices. We handled complete front-end and back-end development, including intuitive navigation, visuals, image galleries, and user-friendly RSVP & registry sections. The result: a polished, high-performance website optimised for design, accessibility, and ease-of-use — giving Vortex's audience a smooth, memorable user journey.",
  //   highlight: "The project highlights our ability to craft user-focused web solutions that balance aesthetics with functionality, making each visitor interaction smooth, memorable, and meaningful. Vortex demonstrates how we transform creative concepts into polished, high-impact web experiences.",
  //   challenge: "The existing platform was feature-rich but extremely difficult to navigate, leading to low user adoption and high training costs.",
  //   solution: "We conducted extensive user research to map out key workflows, then designed a modular system that prioritizes essential information while keeping advanced features accessible.",
  //   results: [
  //     "60% reduction in average task completion time.",
  //     "User satisfaction scores increased from 4.2 to 9.1/10.",
  //     "Onboarding time for new sales reps reduced by 3 days."
  //   ],
  //   tech: ["Figma", "React", "Tailwind CSS", "Storybook"],
  //   projectLink: "https://vortex-crm.vercel.app",
  //   features: [
  //     { title: "Modular UI", icon: Layers, desc: "Clean, block-based layout for personalized workflows." },
  //     { title: "Unified Design", icon: Palette, desc: "A robust design system for consistent growth." },
  //     { title: "Data Clarity", icon: BarChart, desc: "Complex analytics presented in simple, actionable views." }
  //   ]
  // },
  // {
  //   slug: "titan-logistics",
  //   title: "Titan Logistics",
  //   category: "MVP Development",
  //   year: "2023",
  //   duration: "12 Weeks",
  //   client: "Titan Group",
  //   designedBy: "Chokmarh UI",
  //   development: "Core Dev Team",
  //   services: "MVP, Full Stack",
  //   desc: "Rapid development of a cloud-based fleet management system. From discovery to launch in under 12 weeks.",
  //   icon: Globe,
  //   color: "bg-secondary/20",
  //   fullDesc: "We partnered with Titan Logistics to build a full website that brings a personal story to life online. The site delivers a seamless, responsive user experience across devices. We handled complete front-end and back-end development, including intuitive navigation, visuals, image galleries, and user-friendly RSVP & registry sections. The result: a polished, high-performance website optimised for design, accessibility, and ease-of-use — giving Titan's audience a smooth, memorable user journey.",
  //   highlight: "The project highlights our ability to craft user-focused web solutions that balance aesthetics with functionality, making each visitor interaction smooth, memorable, and meaningful. Titan demonstrates how we transform creative concepts into polished, high-impact web experiences.",
  //   challenge: "The startup needed to go from concept to a working pilot with real customers in less than 3 months to secure their next round of funding.",
  //   solution: "We utilized an agile MVP framework, focusing strictly on the core value proposition: real-time tracking, automated dispatching, and fuel monitoring.",
  //   results: [
  //     "Launched successfully in 11 weeks.",
  //     "Secured $2M in Seed funding post-launch.",
  //     "Successfully onboarded 15 pilot logistics companies."
  //   ],
  //   tech: ["Next.js", "PostgreSQL", "Google Cloud", "Twilio"],
  //   projectLink: "https://titan-logistics.vercel.app",
  //   features: [
  //     { title: "Fleet Map", icon: Globe, desc: "Real-time tracking of all assets on a single dashboard." },
  //     { title: "Auto Dispatch", icon: Zap, desc: "Intelligent route optimization and load balancing." },
  //     { title: "Fuel Monitor", icon: BarChart, desc: "Automated consumption alerts and theft detection." }
  //   ]
  // }
];
