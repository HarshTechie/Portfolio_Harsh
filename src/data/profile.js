// Single source of truth — real data. Update here, not in components.

export const profile = {
  name: 'Harsh Tak',
  displayName: 'Harsh Tak',
  email: 'tak.harshh@gmail.com',
  location: 'Pratapgarh, Rajasthan',
  availability: 'Available for opportunities',
  replyTime: '< 24h',

  // Profile photo — drop a file at public/profile.jpg (recommended ~1000×1200px)
  photo: '/profile.jpg',

  hero: {
    lines: [
      'Harsh Tak',
      'Building scalable web experiences.',
      'Aspiring Software Engineer exploring AI.',
    ],
    intro:
      'Computer Science student focused on building scalable web applications, solving problems, and exploring AI-driven systems.',
  },

  about:
    "I'm currently pursuing my B.Tech in Computer Science and actively working on full stack development using React, Node.js, MongoDB, and JavaScript. Alongside development, I'm strengthening my problem-solving skills through DSA and continuously exploring emerging technologies in AI and software engineering.",

  links: {
    github: 'https://github.com/HarshTechie',
    linkedin: 'https://www.linkedin.com/in/harsh-takk/',
    leetcode: 'https://leetcode.com/u/takharsh04',
    resume:
      'https://drive.google.com/file/d/1iNxf5kdHDF5FxAvJ1Lo7YMZ61_ZTTLgF/view?usp=drive_link',
    email: 'mailto:tak.harshh@gmail.com',
  },

  timeline: [
    {
      year: '2023',
      title: 'Started My Coding Journey',
      body: 'Began learning programming fundamentals and explored web development and problem solving.',
    },
    {
      year: '2024',
      title: 'Built Real-World Projects',
      body: 'Started creating full stack and Java-based projects while participating in hackathons and tech communities.',
    },
    {
      year: '2024',
      title: 'Exploring AI & Development',
      body: 'Developed interest in AI, modern web technologies, and scalable software systems.',
    },
    {
      year: '2025',
      title: 'Strengthening DSA & Development Skills',
      body: 'Focused on improving data structures, algorithms, and building polished user-focused applications.',
    },
    {
      year: '2026',
      title: 'Aspiring Software Engineer',
      body: 'Currently building projects, learning continuously, and preparing for software engineering opportunities.',
      live: true,
    },
  ],

  skills: [
    {
      id: 'frontend',
      name: 'Frontend',
      items: ['React.js', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'Bootstrap'],
    },
    {
      id: 'backend',
      name: 'Backend',
      items: ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication', 'FastAPI'],
    },
    {
      id: 'database',
      name: 'Database',
      items: ['MongoDB', 'Mongoose', 'MongoDB Atlas'],
    },
    {
      id: 'languages',
      name: 'Languages',
      items: ['C++', 'Java', 'Python', 'JavaScript'],
    },
    {
      id: 'tools',
      name: 'Tools & Tech',
      items: [
        'Git',
        'GitHub',
        'VS Code',
        'Postman',
        'Figma',
        'GitHub Copilot',
        'Vercel',
        'Netlify',
        'Render',
        'Linux',
        'Chart.js',
        'spaCy',
        'PyMuPDF',
      ],
    },
  ],

  // Subtle "current focus" strip between sections
  currentlyExploring: [
    'Building with React, Node.js & MongoDB',
    'AI-driven systems and tooling',
    'DSA on LeetCode',
    'Modern web architecture',
  ],

  // featured: true → shown with a small "Featured" indicator
  // year + meta → metadata row shown under the title
  // order = display order
  projects: [
    {
      title: 'MockMate',
      role: 'Full Stack',
      year: '2026',
      meta: 'AI Placement Prep',
      summary:
        'An AI-powered placement-prep platform for Chitkara University, grounded in a verified, round-by-round company intelligence database — not generic advice. Features resume-aware mock interviews, a timed OA simulator with integrity detection, personalized prep plans, and a placement-cell analytics portal.',
      stack: [
        'Next.js',
        'React',
        'Prisma',
        'PostgreSQL',
        'Tailwind CSS',
        'Gemini AI',
      ],
      github: 'https://github.com/HarshTechie/MockMate',
      live: 'https://mockmate-smu9.onrender.com',
      image: '/projects/mockmate.png',
      featured: true,
    },
    {
      title: 'MployCheck',
      role: 'Full Stack',
      year: '2025',
      meta: 'Verification Workflow',
      summary:
        'A role-based verification and approval workflow platform. Users submit records and admins verify or reject them through a modern dashboard with authentication, analytics, activity feeds, and role-based access control.',
      stack: [
        'Angular',
        'TypeScript',
        'Node.js',
        'Express.js',
        'MongoDB',
        'JWT',
      ],
      github: 'https://github.com/HarshTechie/MployCheck',
      live: 'https://mploy-check.vercel.app/',
      image: '/projects/mploycheck.png',
      featured: true,
    },
    {
      title: 'TechNexus',
      role: 'Full Stack',
      year: '2025',
      meta: 'E-Commerce Platform',
      summary:
        'An AI-powered full-stack e-commerce web application with a responsive frontend and a Prisma-powered backend for efficient database handling and CRUD operations.',
      stack: ['HTML', 'CSS', 'JavaScript', 'Prisma', 'Node.js', 'MongoDB','Stripe Payment Gateway', 'Google Gemini AI'],
      github: 'https://github.com/HarshTechie/Tech-Nexus',
      live: 'https://technexus0609.vercel.app/',
      image: '/projects/technexus.png',
      featured: true,
    },
    {
      title: 'Planto',
      role: 'Frontend',
      year: '2025',
      meta: 'Landing Page',
      summary:
        'A modern plant e-commerce landing page with a luxury dark-green aesthetic, glassmorphism UI, responsive layouts, and smooth animations.',
      stack: ['React.js', 'Vite', 'Tailwind CSS', 'JavaScript'],
      github: 'https://github.com/HarshTechie/Planto---Plant-based-website',
      live: 'https://planto-plant-based-website.vercel.app/',
      image: '/projects/planto.png',
      featured: true,
    },
    {
      title: 'CampusFind',
      role: 'Full Stack',
      year: '2025',
      meta: 'Lost & Found',
      summary:
        'A campus-based lost and found platform that lets students report, search, and manage lost items through a user-friendly interface.',
      stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
      github: 'https://github.com/HarshTechie/Campus-Find',
      live: 'https://campus-find-one.vercel.app/',
      image: '/projects/campusfind.png',
      featured: true,
    },
    {
      title: 'Travel Website',
      role: 'Full Stack',
      year: '2024',
      meta: 'Travel Platform',
      summary:
        'A responsive travel website with authentication, destination exploration features, and modern UI components focused on improving travel experience and usability.',
      stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
      github: 'https://github.com/HarshTechie/Travel-Website',
      live: 'https://travel-website-topaz-delta.vercel.app/login',
      image: '/projects/travel.png',
      featured: false,
    },
    {
      title: 'ShopZone — Amazon Clone',
      role: 'Frontend',
      year: '2024',
      meta: 'E-Commerce Clone',
      summary:
        'An Amazon-inspired e-commerce platform with responsive layouts, product sections, modern UI components, and a smooth shopping experience focused on frontend development and interface replication.',
      stack: ['React.js', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3'],
      github: 'https://github.com/HarshTechie/ShopZone---Amazon-Clone',
      live: 'https://shop-zone-amazon-clone.vercel.app/',
      image: '/projects/shopzone.png',
      featured: true,
    },
  ],
};
