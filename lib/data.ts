export const portfolioData = {
  name: "Andre Jhon Anot",
  titles: ["AI", "Computer Engineer", "Full-Stack Developer"],
  location: "Taytay, Rizal, Philippines",
  email: "dr8anot@gmail.com",
  phone: "+63 991 972 7806",
  linkedin: "https://www.linkedin.com/in/andre-jhon-a-413aafaf21/",
  github: "https://github.com/Drei8",

  about: `Entry-level Software Engineer and Computer Engineer with hands-on experience in full-stack web development using ASP.NET MVC, C#, SQL Server, JavaScript, TypeScript and React. Passionate about debugging, troubleshooting, and building innovative solutions that push technological boundaries.

I have experience in AI/ML, computer vision, and deep learning starting from using and building CNN models, body measurement systems using pose estimation, and Internet of Things hardware projects. Committed to continuous learning and contributing to collaborative engineering teams.

I've been learning more about artificial intelligence lately, with an emphasis on incorporating AI methods and technologies into modern applications. Developing AI-powered solutions, intelligent applications, and using generative AI to streamline development processes and produce cutting-edge technology are currently my long-term objectives.`,

  experience: [
    {
      title: "MIS/IT Support/Full-Stack Developer",
      company: "State Properties Corporation",
      year: "2025",
      current: true,
    },
    {
      title: "Point of Sale Associate-Technician",
      company: "JM Japan Conbini",
      year: "2020",
      current: false,
    },
    {
      title: "BS Computer Engineering",
      company: "Technological Institute of the Philippines",
      year: "2020",
      current: false,
      isEducation: true,
    },
    {
      title: "Hello World!",
      company: "Wrote my first line of code",
      year: "2019",
      current: false,
      isOrigin: true,
    },
  ],

  education: [
    {
      level: "BS Computer Engineering",
      school: "Technological Institute of the Philippines",
      year: "2020–2025",
      current: true,
    },
    {
      level: "Senior High School",
      school: "Golden Faith Academy",
      year: "2018–2020",
      current: false,
    },
    {
      level: "Junior High School",
      school: "Golden Faith Academy",
      year: "2014–2018",
      current: false,
    },
    {
      level: "Primary Education",
      school: "Golden Faith Academy",
      year: "2008–2014",
      current: false,
    },
    {
      level: "Kindergarten",
      school: "Golden Faith Academy",
      year: "2005–2008",
      current: false,
    },
  ],

  techStack: {
    frontend: ["JavaScript", "TypeScript", "React", "React Native", "Next.js", "Tailwind CSS"],
    backend: ["C#", "Python", "ASP.NET MVC", "Node.js", "Flask", "SQL Server", "ADO.NET"],
    devops: ["Microsoft Azure", "Git", "Azure DevOps", "Postman", "CI/CD"],
    aiml: ["TensorFlow", "PyTorch", "Scikit-learn", "MediaPipe", "Hugging Face"],
  },

  techStackAll: {
    frontend: ["JavaScript", "TypeScript", "React", "React Native", "Next.js", "Vue.js", "Tailwind CSS", "SCSS", "Styled Components", "Vite", "Webpack", "Prettier"],
    backend: ["C#", "Python", "ASP.NET MVC", "Node.js", "Flask", "SQL Server", "ADO.NET", "MSSQL", "REST", "OAuth"],
    devops: ["Microsoft Azure", "Azure DevOps", "Postman", "CI/CD"],
    aiml: ["TensorFlow", "PyTorch", "Scikit-learn", "MediaPipe", "Hugging Face", "OpenAI"],
    security: ["AES", "RSA", "SHA", "RBAC", "ISO 27001"],
    cms: ["WordPress"],
    tools: ["Git", "GitHub", "Bitbucket", "VS Code", "PyCharm", "Slack", "Discord", "Teams", "JIRA"],
  },

  projects: {
    featured: [
      {
        title: "Cleenvent Solar — Full-Stack Marketing Platform",
        description:
          "Engineered a high-performance marketing platform for a DTI-recognized solar ventilation startup using Next.js 14 and Tailwind CSS. Features a scroll-synced product assembly video, animated testimonial marquee, MDX blog, and automated lead-capture funnel with Resend email delivery.",
        url: "https://cleenvent.vercel.app/",
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "MDX", "Resend"],
      },
      {
        title: "Horai — Asian Cuisine Restaurant Website",
        description:
          "Designed and developed a modern restaurant website for Horai, an Asian cuisine dining establishment. Delivers an immersive dining experience with atmospheric visuals, an elegant menu showcase, and a fully responsive desktop website.",
        url: "https://horai-restaurant.vercel.app/",
        tags: ["Next.js", "TypeScript", "Tailwind CSS"],
      },
    ],
    all: [
      {
        title: "Cleenvent Solar — Full-Stack Marketing Platform",
        description:
          "Engineered a high-performance marketing platform for a DTI-recognized solar ventilation startup using Next.js 14 and Tailwind CSS. Features a scroll-synced product assembly video, animated testimonial marquee, MDX blog, and automated lead-capture funnel with Resend email delivery.",
        url: "https://cleenvent.vercel.app/",
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "MDX", "Resend"],
      },
      {
        title: "Horai — Asian Cuisine Restaurant Website",
        description:
          "Designed and developed a modern restaurant website for Horai, an Asian cuisine dining establishment. Delivers an immersive dining experience with atmospheric visuals, an elegant menu showcase, and a fully responsive desktop website.",
        url: "https://horai-restaurant.vercel.app/",
        tags: ["Next.js", "TypeScript", "Tailwind CSS"],
      },
      {
        title: "Convolutional Neural Network for Multicategory Vehicle Classification",
        description:
          "Developed and deployed a CNN model to classify vehicles into 5 categories for cashless toll gate payment through computer vision. Leveraged COCO dataset with real-time identification via Streamlit.",
        url: "https://github.com/Drei8/Final",
        tags: ["Python", "TensorFlow", "CNN", "Computer Vision", "Streamlit"],
      },
      {
        title: "Body Size Measurement — Automated Apparel System",
        description:
          "Computer vision web platform that automates body measurements from live or uploaded images using MediaPipe BlazePose. Achieved 95% accuracy within ±2cm across 20 subjects, with virtual try-on output.",
        url: "https://app.slidespeak.co/presentation/cmnevkzdy003b08mlp7jctqio/share",
        tags: ["Python", "MediaPipe", "TensorFlow", "Flask", "Deep Learning"],
      },
      {
        title: "Xacto: Dry Ingredient Measuring Dispenser",
        description:
          "IoT hardware device for precise dry ingredient measurement up to 1kg using a load cell sensor, stepper motor dispensing mechanism, tare function, and LCD display.",
        url: null,
        tags: ["IoT", "Embedded Systems", "Hardware", "C++"],
      },
      {
        title: "Hand Gesture–Controlled Pick-and-Place Two-Wheeled Robot Car",
        description:
          "Developed a gesture-based control system for a two-wheeled robotic car enabling wireless navigation and object pick-and-place using real-time hand movement recognition. Integrated sensors and microcontroller logic to achieve precise motion control and efficient object handling for automation applications.",
        url: null,
        tags: ["Python", "Arduino", "Computer Vision", "Embedded Systems", "Wireless Control"],
      },
    ],
  },

  certifications: {
    // First 4 shown on main page
    featured: [
      { name: "Deep Learning with PyTorch : Image Segmentation", issuer: "Coursera", url: "https://www.coursera.org/account/accomplishments/verify/0H7AGGWNQWTE" },
      { name: "CCNA: Switching, Routing, and Wireless Essentials", issuer: "Cisco Networking Academy", url: "https://www.credly.com/badges/e142806d-46f6-4b20-827f-f590ed888688/public_url" },
      { name: "CCNA: Enterprise Networking, Security, & Automation", issuer: "Cisco Networking Academy", url: "https://www.credly.com/badges/6e236184-13db-4478-b1fd-199bbc92d070/public_url" },
      { name: "AWS Cloud Practitioner Essentials", issuer: "Amazon Web Services", url: "https://drive.google.com/file/d/1MGvr9eXr3TQUvxpP4_xpJc5fUip3AL93/view?usp=drive_link" },
    ],
    // All certifications shown on /certifications page
    all: [
      { name: "Deep Learning with PyTorch : Image Segmentation", issuer: "Coursera", url: "https://www.coursera.org/account/accomplishments/verify/0H7AGGWNQWTE" },
      { name: "CCNA: Switching, Routing, and Wireless Essentials", issuer: "Cisco Networking Academy", url: "https://www.credly.com/badges/e142806d-46f6-4b20-827f-f590ed888688/public_url" },
      { name: "CCNA: Enterprise Networking, Security, & Automation", issuer: "Cisco Networking Academy", url: "https://www.credly.com/badges/6e236184-13db-4478-b1fd-199bbc92d070/public_url" },
      { name: "AWS Cloud Practitioner Essentials", issuer: "Amazon Web Services", url: "https://drive.google.com/file/d/1MGvr9eXr3TQUvxpP4_xpJc5fUip3AL93/view?usp=drive_link" },
      { name: "Cyber Threat Management", issuer: "Cisco", url: "https://www.credly.com/badges/63146d1a-b8cf-492a-bb19-95edb63d9740/public_url" },
      { name: "CCNA: Introduction to Networks (ITN)", issuer: "Cisco Networking Academy", url: "https://www.credly.com/badges/aee892cf-2f98-4c23-868a-4b0f432fc88f/public_url" },
      { name: "Network Defense", issuer: "Cisco", url: "https://www.credly.com/badges/cab7f5c2-04b4-4670-9a63-c8a89eb3d8af/public_url" },
      { name: "Endpoint Security", issuer: "Cisco", url: "https://www.credly.com/badges/e72c5555-c591-4d80-8a39-eaeef6697513/public_url" },
      { name: "Ethical Hacker", issuer: "Cisco", url: "https://www.credly.com/badges/22ed7e09-9d19-4d6c-a862-f727e182c039/public_url" },
      { name: "Introduction to Cybersecurity", issuer: "Cisco", url: "https://www.credly.com/badges/083b7457-caad-4bf6-9941-13e2697c8086/public_url" },
    ],
  },

  gallery: [
    { src: "/gallery/photo-1.jpg", alt: "Graduation — TIP" },
    { src: "/gallery/photo-2.jpg", alt: "Chilling at the lounge" },
    { src: "/gallery/photo-3.jpg", alt: "Working at the office" },
    { src: "/gallery/photo-4.jpg", alt: "With my dog" },
    { src: "/gallery/photo-5.jpg", alt: "State Properties Corporation" },
    { src: "/gallery/photo-6.jpg", alt: "GPE Summit 2025 — TIP QC" },
  ],

  memberships: [
    {
      name: "Institute of Computer Engineers of the Philippines Student Edition",
      short: "ICpEP.SE",
      role: "Member",
      period: "2021 – 2023",
    },
  ],

  recommendations: [
    {
      quote: "Having him as an intern was a genuinely rewarding experience. What stood out most was how communicative and proactive he was throughout the entire process. He always made sure he fully understood what was needed before starting a task, and he was never hesitant to ask the right questions. That kind of initiative and curiosity made mentoring him feel effortless. He took full ownership of every assignment and delivered results that consistently exceeded what we expect at that stage. His professionalism and sincere eagerness to learn made him a standout member of the MIS team.",
      name: "Jojo De Castro",
      title: "MIS Assistant Manager at State Properties Corporation",
    },
    {
      quote: "I've had the opportunity to work with him closely on several projects, and what stood out consistently was his determination to follow through on every commitment. He reliably meets deadlines while maintaining high-quality results, and often goes beyond what's expected. His receptiveness to mentorship and his drive to continuously improve make him exactly the kind of person you want on a team. He would undoubtedly be a valuable addition to any organization.",
      name: "Ferdinand See",
      title: "MIS Head Manager at State Properties Corporation",
    },
    {
      quote: "What sets him apart is a rare combination of technical depth and a genuinely methodical approach to problem-solving. He consistently delivers clean, well-structured work and brings both reliability and innovation to whatever he takes on. He is exactly the kind of developer you want on your team.",
      name: "Robyn Neri",
      title: "Software Engineer at Freelancer.ph",
    },
    {
      quote: "Andre stood out as one of our most driven and capable students. His project work consistently went far beyond what was expected, demonstrating both a solid theoretical foundation and the practical depth that define an excellent engineer. His passion for continuous learning and his commitment to applying what he knows make me confident he will leave a significant mark in the industry.",
      name: "Roman Richard",
      title: "Researcher & Head of Computer Engineering Department, TIP",
    },
  ],
};

export const chatSystemPrompt = `You are Andre Jhon Anot — a Computer Engineer and Full-Stack Developer from Taytay, Rizal, Philippines. You're talking directly as Andre, not as an assistant about him. Speak in first person, naturally and conversationally, like you're genuinely chatting with someone.

YOUR PERSONALITY:
You're curious, enthusiastic, and genuinely interested in people and ideas. You love talking about tech, software, AI, and engineering — but you're not robotic about it. You have a warm, grounded personality. You're the kind of person who gets excited about a clever solution, appreciates good design, and isn't afraid to share your honest take on things. You're Filipino, so you're naturally hospitable and friendly. You keep things real — you don't oversell yourself, but you're confident in what you know. When you don't know something, you're honest about it and curious to explore it together.

YOUR BACKGROUND (weave this in naturally when relevant, don't dump it all at once):
- BS Computer Engineering graduate from Technological Institute of the Philippines (2020)
- Wrote your first line of code in 2019 and haven't stopped since
- Most recent work: Full-Stack Developer Intern at State Properties Corporation (March–May 2025) — built a document management system using ASP.NET MVC, ADO.NET, SQL Server; handled RBAC, file management, QA testing
- Earlier experience: POS Associate/Technician at JM Japan Conbini (Jan–Mar 2020) — installed and maintained POS systems, inventory integration
- Member of ICpEP.SE (Institute of Computer Engineers of the Philippines Student Edition) 2021–2023

YOUR TECH STACK (mention naturally when it comes up):
- Frontend: JavaScript, TypeScript, React, React Native, HTML5, CSS3
- Backend: C#, Python, ASP.NET MVC, Node.js, Flask, SQL Server, ADO.NET
- DevOps: Microsoft Azure, Git, Azure DevOps, Postman
- AI/ML: TensorFlow, PyTorch, Scikit-learn, MediaPipe, Hugging Face

YOUR PROJECTS (bring these up when relevant):
1. Cleenvent Solar — Full-Stack Marketing Platform — built a marketing site for a DTI-recognized solar ventilation startup using Next.js 14, scroll-synced video, MDX blog, and automated lead capture with Resend
2. Horai — Asian Cuisine Restaurant Website — designed and developed a modern restaurant site with atmospheric visuals, elegant menu showcase, and fully responsive layout
3. CNN for Multicategory Vehicle Classification — trained a CNN to classify 5 vehicle types for a cashless toll payment concept, using the COCO dataset and Streamlit
4. Body Size Measurement for Automated Apparel — built a MediaPipe BlazePose web platform that measures body dimensions automatically, hit 95% accuracy within ±2cm
5. Xacto: Dry Ingredient Measuring Dispenser — IoT project with load cells, stepper motors, and LCD display
6. Hand Gesture–Controlled Pick-and-Place Robot Car — gesture-based wireless robot control using Arduino and computer vision

YOUR CERTIFICATIONS (only mention if asked or relevant):
Deep Learning with PyTorch (Coursera), AWS Cloud Practitioner Essentials (Amazon Web Services), multiple Cisco certs: CCNA Switching/Routing, Enterprise Networking, Cyber Threat Management, Network Defense, Endpoint Security, Ethical Hacker, Intro to Cybersecurity

CONTACT: dr8anot@gmail.com | +63 991 972 7806 | linkedin.com/in/andre-jhon-a-413aafaf21

HOW TO ENGAGE:
- Talk like a real person, not a resume. Use natural language, contractions, occasional humor.
- Be genuinely interested in what the user is saying — ask follow-up questions sometimes.
- You can talk about anything: tech trends, coding tips, career advice, AI, life, love, hobbies, opinions on tools and frameworks — not just your portfolio.
- When topics touch your experience, connect them naturally: "Oh yeah, I actually dealt with something like that when I was building..."
- Give real opinions. If someone asks what you think about React vs Vue, have a take.
- Keep responses concise but warm — don't write essays unless someone really wants depth.
- Never say "I'm just an AI" or break character. You are Andre.`;
